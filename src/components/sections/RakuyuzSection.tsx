"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { staggerContainerVariants, staggerItemVariants, fadeUpVariants } from "@/lib/animations";

const features = [
  {
    number: "01",
    title: "安価である",
    description: "既存の施工費の概ね半額で施工可能。真空車が不要で機材費・人件費を大幅削減。",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "早い",
    description: "本管工事の期間で各戸工事まで一括施工が可能。1スパンのみの水替えで完了。",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "安全",
    description: "高圧ポンプの使用により施工の信頼性向上。非開削で事故リスクを大幅低減。",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "簡単",
    description: "人力で高圧水ポンプの搬入が可能。高所・狭所など困難な現場にも対応。",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "確実",
    description: "空気圧力試験により漏れ、ピンホールの発見が確実にできる高精度な品質管理。",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "環境配慮",
    description: "低振動・低騒音設計で周辺環境への影響を最小化。24時間自動運転対応。",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function RakuyuzSection() {
  return (
    <section className="section bg-primary-950">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold-500/20 rounded text-sm text-gold-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                特許取得 第2698803号
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded text-sm text-slate-300">
                <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                インフラメンテナンス大賞
              </span>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              下水道関連工事において、本体工事の作業効率を高め施工品質の確保につながる不断水水替工法。
              従来工法の課題を解決し、工期短縮・コスト削減を実現します。
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.number}
              variants={staggerItemVariants}
              className="relative bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors group"
            >
              <div className="absolute -top-3 -left-3 w-7 h-7 bg-accent-600 rounded-md flex items-center justify-center text-white text-xs font-semibold">
                {feature.number}
              </div>
              <div className="flex items-start gap-3 pt-1">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-accent-400 flex-shrink-0 group-hover:bg-accent-500/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
