"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { staggerContainerVariants, staggerItemVariants, fadeUpVariants } from "@/lib/animations";

const features = [
  { title: "工期短縮", description: "1スパンのみの水替えで施工完了" },
  { title: "簡易施工", description: "吸込ホース投入だけで排水可能" },
  { title: "24時間自動", description: "センサー制御による自動運転" },
  { title: "低コスト", description: "真空車（バキューム車）不要" },
  { title: "安全性向上", description: "非開削で事故リスク低減" },
  { title: "環境配慮", description: "低振動・低騒音で周辺影響最小" },
];

export function RakuyuzSection() {
  return (
    <section className="section bg-primary-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="section-label text-accent-400">Patent Technology</span>
              <h2 className="text-display-sm md:text-display-md font-semibold text-white mb-4">
                ラクユーZ工法
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gold-500/20 rounded text-sm text-gold-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  特許取得 第2698803号
                </span>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                下水道関連工事において、本体工事の作業効率を高め施工品質の確保につながる不断水水替工法。
                従来工法の課題を解決し、工期短縮・コスト削減を実現します。
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" asChild>
                  <Link href="/rakuyuz">
                    詳しく見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500" asChild>
                  <Link href="/contact">導入のご相談</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right - Features Grid */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItemVariants}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-xs text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
