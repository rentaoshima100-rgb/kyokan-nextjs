"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface ModelViewerProps {
  modelPath: string;
  className?: string;
}

export function ModelViewer({ modelPath, className = "" }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let cleanup: (() => void) | undefined;

    const initThree = async () => {
      try {
        // Dynamic import Three.js
        const THREE = await import("three");
        const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");
        const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
        const { DRACOLoader } = await import("three/examples/jsm/loaders/DRACOLoader.js");

        const container = containerRef.current;
        if (!container) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xd1d5db); // Light gray background

        // Camera
        const camera = new THREE.PerspectiveCamera(
          45,
          container.clientWidth / container.clientHeight,
          0.1,
          1000
        );
        camera.position.set(4, 3, 4);

        // Renderer - Optimized settings
        const renderer = new THREE.WebGLRenderer({
          antialias: false, // Disable for performance
          alpha: true,
          powerPreference: "high-performance",
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Lower pixel ratio
        renderer.shadowMap.enabled = false; // Disable shadows for performance
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        container.appendChild(renderer.domElement);

        // Controls - Optimized
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.minDistance = 2;
        controls.maxDistance = 15;
        controls.maxPolarAngle = Math.PI / 1.5;
        controls.enablePan = false; // Disable panning for simpler UX
        controls.rotateSpeed = 0.8;
        controls.zoomSpeed = 1.2;

        // Lights - Simplified for performance
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(5, 10, 7);
        scene.add(directionalLight);

        const backLight = new THREE.DirectionalLight(0x4488ff, 0.4);
        backLight.position.set(-5, 5, -5);
        scene.add(backLight);

        const bottomLight = new THREE.DirectionalLight(0xffffff, 0.3);
        bottomLight.position.set(0, -5, 0);
        scene.add(bottomLight);

        // Grid helper (subtle)
        const gridHelper = new THREE.GridHelper(10, 20, 0x9ca3af, 0xb0b8c4);
        scene.add(gridHelper);

        // Load model with DRACO compression support
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
        
        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);

        loader.load(
          modelPath,
          (gltf) => {
            const model = gltf.scene;

            // Center and scale model
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 2.5 / maxDim;

            model.scale.setScalar(scale);
            model.position.sub(center.multiplyScalar(scale));
            model.position.y = 0;

            // Optimize materials for performance
            model.traverse((child) => {
              if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.frustumCulled = true;
                
                // Simplify materials
                if (mesh.material) {
                  const material = mesh.material as THREE.MeshStandardMaterial;
                  if (material.map) {
                    material.map.anisotropy = 1; // Lower anisotropy
                  }
                }
              }
            });

            scene.add(model);
            setIsLoading(false);
          },
          (progress) => {
            if (progress.total > 0) {
              const percent = Math.round((progress.loaded / progress.total) * 100);
              setLoadProgress(percent);
            }
          },
          (err) => {
            console.error("Error loading model:", err);
            setError("モデルの読み込みに失敗しました");
            setIsLoading(false);
          }
        );

        // Optimized animation loop - only render when needed
        let animationId: number;
        let needsRender = true;
        
        controls.addEventListener('change', () => {
          needsRender = true;
        });

        const animate = () => {
          animationId = requestAnimationFrame(animate);
          
          if (controls.enableDamping) {
            controls.update();
          }
          
          // Always render but limit to maintain smoothness
          renderer.render(scene, camera);
        };
        animate();

        // Resize handler with debounce
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
            needsRender = true;
          }, 100);
        };
        window.addEventListener("resize", handleResize);

        // Cleanup function
        cleanup = () => {
          window.removeEventListener("resize", handleResize);
          clearTimeout(resizeTimeout);
          cancelAnimationFrame(animationId);
          controls.dispose();
          renderer.dispose();
          dracoLoader.dispose();
          
          // Dispose of scene objects
          scene.traverse((object) => {
            if ((object as THREE.Mesh).isMesh) {
              const mesh = object as THREE.Mesh;
              mesh.geometry?.dispose();
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach(m => m.dispose());
              } else {
                mesh.material?.dispose();
              }
            }
          });
          
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        };
      } catch (err) {
        console.error("Three.js initialization error:", err);
        setError("3Dビューアの初期化に失敗しました");
        setIsLoading(false);
      }
    };

    initThree();

    return () => {
      if (cleanup) cleanup();
    };
  }, [modelPath]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300/95 z-20">
          <div className="text-center text-slate-700">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <svg className="w-16 h-16 animate-spin" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="rgba(0,0,0,0.1)" 
                  strokeWidth="8"
                />
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${loadProgress * 2.51}, 251`}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                {loadProgress}%
              </span>
            </div>
            <p className="text-sm text-slate-600">3Dモデル読み込み中...</p>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300/95 z-20">
          <div className="text-center text-white">
            <svg className="w-12 h-12 mx-auto mb-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Fallback component when Three.js is not available
export function ModelViewerFallback({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary-900/50">
      <div className="text-center text-white/60 p-8">
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 mx-auto mb-4"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            />
          </svg>
        </motion.div>
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-xs mt-2 max-w-xs mx-auto">{description}</p>
        <p className="text-xs mt-4 text-white/40">
          ドラッグで回転 • スクロールで拡大
        </p>
      </div>
    </div>
  );
}
