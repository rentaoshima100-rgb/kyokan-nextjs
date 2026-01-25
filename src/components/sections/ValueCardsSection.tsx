"use client";

import { motion } from "framer-motion";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "コスト削減",
    description: "従来工法と比較して施工費用を大幅に削減。真空車不要で機材費・人件費を抑制します。",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "短期間",
    description: "1スパンのみの水替えで施工完了。従来工法と比べて工期を大幅に短縮できます。",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "高品質",
    description: "特許取得の確かな技術力。30年以上の実績で培われた信頼性と施工品質をお約束します。",
  },
];

export function ValueCardsSection() {
  return (
    <section className="section-sm bg-white border-b border-slate-200">
      <div className="container-custom">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={staggerItemVariants}
              className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-accent-300 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-accent-50 flex items-center justify-center text-accent-600 flex-shrink-0">
                {value.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-1">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
