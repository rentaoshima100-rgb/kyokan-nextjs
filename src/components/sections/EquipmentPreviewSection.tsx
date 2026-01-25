"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, SectionHeader } from "@/components/ui/Button";
import { ModelViewer } from "@/components/ui/ModelViewer";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const pumpModels = [
  {
    id: "2inch",
    name: "2インチ用ポンプ",
    diameter: "50mm",
    output: "0.6m/min",
    power: "2.2kw",
    weight: "75kg",
    modelPath: "/models/industrial-pump.glb",
  },
  {
    id: "4inch",
    name: "4インチ用ポンプ",
    diameter: "100mm",
    output: "1.6m/min",
    power: "7.5kw",
    weight: "130kg",
    modelPath: "/models/pump-orange.glb",
  },
  {
    id: "6inch",
    name: "6インチ用ポンプ",
    diameter: "150mm",
    output: "4.0m/min",
    power: "22.0kw",
    weight: "560kg",
    modelPath: "/models/pump-unit.glb",
  },
];

export function EquipmentPreviewSection() {
  const [activeModel, setActiveModel] = useState(pumpModels[0].id);
  const currentPump = pumpModels.find((p) => p.id === activeModel) || pumpModels[0];

  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        <SectionHeader
          label="Equipment"
          title="主要機材紹介"
          description="ラクユーZ工法を支える特許ポンプシステム"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* 3D Model Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square bg-slate-200 border border-slate-300 rounded-xl overflow-hidden relative shadow-elevated">
              <ModelViewer
                key={activeModel}
                modelPath={currentPump.modelPath}
                className="w-full h-full"
              />
              <div className="absolute bottom-3 left-3 right-3 flex justify-center z-10 pointer-events-none">
                <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs text-slate-600 shadow-sm">
                  ドラッグで回転 • スクロールで拡大縮小
                </span>
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-4 p-4 bg-white border border-slate-200 rounded-lg">
              <h4 className="font-semibold text-primary-900 mb-3">{currentPump.name}</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-slate-500">管径</span>
                  <p className="font-medium text-slate-800">{currentPump.diameter}</p>
                </div>
                <div>
                  <span className="text-slate-500">排出量</span>
                  <p className="font-medium text-slate-800">{currentPump.output}</p>
                </div>
                <div>
                  <span className="text-slate-500">出力</span>
                  <p className="font-medium text-slate-800">{currentPump.power}</p>
                </div>
                <div>
                  <span className="text-slate-500">重量</span>
                  <p className="font-medium text-slate-800">{currentPump.weight}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Model Selector */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-3"
          >
            {pumpModels.map((pump) => (
              <motion.button
                key={pump.id}
                variants={staggerItemVariants}
                onClick={() => setActiveModel(pump.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  activeModel === pump.id
                    ? "bg-accent-600 border-accent-500 text-white shadow-card"
                    : "bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeModel === pump.id ? "bg-white/20" : "bg-accent-50 text-accent-600"
                    }`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{pump.name}</h4>
                    <p
                      className={`text-sm ${
                        activeModel === pump.id ? "text-white/80" : "text-slate-500"
                      }`}
                    >
                      管径: {pump.diameter} / 排出量: {pump.output}
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 ${
                      activeModel === pump.id ? "text-white" : "text-slate-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            ))}

            <div className="pt-4">
              <Button variant="outline" asChild className="w-full justify-center">
                <Link href="/rakuyuz">
                  すべての機材を見る
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
