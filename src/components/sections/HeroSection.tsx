"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { useCountUp } from "@/hooks/useAnimations";

const stats = [
  { value: 30, suffix: "年以上", label: "業界実績" },
  { value: 1994, suffix: "年", label: "創業", isYear: true },
  { value: 50, suffix: "年", label: "配管延命技術" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center bg-primary-950"
    >
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-950" />
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="container-custom relative z-10 py-24">
        <div className="max-w-3xl">
          {/* Award badge - subtle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-white/10 rounded text-sm text-white/80"
          >
            <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>インフラメンテナンス大賞 優秀賞受賞</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-lg md:text-display-xl font-semibold text-white mb-5 leading-tight"
          >
            社会インフラを支える
            <br />
            <span className="text-accent-400">確かな技術と信頼</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed"
          >
            1994年創業。下水道更生工事から建物設備メンテナンスまで、
            特許技術「ラクユーZ工法」で水まわりのインフラを守り続けています。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">
                お問い合わせ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
            <Button variant="white" size="lg" asChild>
              <Link href="/rakuyuz">ラクユーZ工法について</Link>
            </Button>
          </motion.div>

          {/* Stats - simple horizontal layout */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItemVariants}>
                <div className="text-2xl md:text-3xl font-semibold text-white">
                  {stat.isYear ? stat.value : <StatNumber value={stat.value} />}
                  <span className="text-base text-slate-400 ml-1">{stat.suffix}</span>
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Simple scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatNumber({ value }: { value: number }) {
  const count = useCountUp(value, 1500, 0, true);
  return <>{count}</>;
}
