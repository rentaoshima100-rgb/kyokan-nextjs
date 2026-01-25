"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";

export function AwardBannerSection() {
  return (
    <section className="py-8 bg-primary-950">
      <div className="container-custom">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
        >
          {/* Award icon */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gold-400 font-semibold">第4回インフラメンテナンス大賞</p>
              <p className="text-xs text-slate-400">防衛大臣賞・技術開発部門 優秀賞</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-slate-700" />

          {/* Patent info */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-accent-400 font-semibold">特許取得技術</p>
              <p className="text-xs text-slate-400">ラクユーZ工法 特許第2698803号</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-slate-700" />

          {/* Established */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-white font-semibold">創業30年以上</p>
              <p className="text-xs text-slate-400">1994年創業・京都本社</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
