"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/Button";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const processSteps = [
  {
    number: 1,
    title: "事前調査",
    description: "現場の状況確認、既存管路の調査・診断を行い、最適な施工計画を立案します。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "仮設バイパス管設置",
    description: "本管・各戸側の両方に仮設バイパス管を設置し、断水なしでの施工準備を完了します。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "既存管とバイパス管接続",
    description: "既存の水道管と仮設バイパス管を確実に接続し、水流を迂回させます。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "既存水道管洗浄",
    description: "高圧水洗浄により、既存管内の錆や汚れを徹底的に除去します。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "ラクユーZ工法による排水",
    description: "特許ポンプシステムで管内の水を効率的に排水。24時間自動運転が可能です。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    number: 6,
    title: "管更生ライニング施工",
    description: "管内面にライニング材を塗布し、新品同様の耐久性を付与します。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    number: 7,
    title: "空気圧力試験",
    description: "施工完了後、空気圧力試験により漏れ・ピンホールがないことを確認します。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: 8,
    title: "既存管とバイパス管撤去",
    description: "施工完了後、仮設バイパス管と関連機材を撤去します。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    number: 9,
    title: "完了確認・引渡し",
    description: "最終検査を実施し、施工報告書と共にお客様へ引渡しを行います。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function ProcessFlowSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeader
          label="Process"
          title="施工手順"
          description="着工から完了までの流れ"
        />

        {/* Timeline Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 overflow-x-auto scrollbar-hide"
        >
          <div className="flex items-center gap-1 p-2 bg-slate-100 rounded-lg">
            {processSteps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(activeStep === step.number ? null : step.number)}
                className={`relative flex items-center justify-center w-10 h-10 rounded-lg text-sm font-semibold transition-all ${
                  activeStep === step.number
                    ? "bg-accent-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {step.number}
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-1 w-2 h-0.5 bg-slate-300" />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItemVariants}
              onClick={() => setActiveStep(activeStep === step.number ? null : step.number)}
              className={`relative cursor-pointer bg-white border rounded-lg p-5 transition-all ${
                activeStep === step.number
                  ? "border-accent-500 shadow-card ring-1 ring-accent-500/20"
                  : "border-slate-200 hover:border-slate-300 hover:shadow-subtle"
              }`}
            >
              {/* Step number badge */}
              <div
                className={`absolute -top-3 -left-3 w-8 h-8 rounded-md flex items-center justify-center text-sm font-semibold ${
                  activeStep === step.number
                    ? "bg-accent-600 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {step.number}
              </div>

              <div className="flex items-start gap-3 pt-1">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeStep === step.number
                      ? "bg-accent-100 text-accent-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {step.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-primary-900 mb-1">{step.title}</h3>
                  <AnimatePresence mode="wait">
                    {(activeStep === step.number || activeStep === null) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-slate-500 leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-slate-500">
            各ステップをクリックすると詳細が表示されます
          </p>
        </motion.div>
      </div>
    </section>
  );
}
