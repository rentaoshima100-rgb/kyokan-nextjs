"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUpVariants } from "@/lib/animations";

export default function MessagePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-950">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-950" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <Link href="/company" className="hover:text-white transition-colors">会社概要</Link>
            <span>/</span>
            <span className="text-white">代表あいさつ</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-md md:text-display-lg font-semibold text-white"
          >
            代表あいさつ
          </motion.h1>
        </div>
      </section>

      {/* Message Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold text-primary-900 mb-8">
                  「安心して任せられる企業」<br />
                  であり続けるために
                </h2>

                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    京環メンテナンスのホームページをご覧いただき、誠にありがとうございます。
                  </p>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    当社は1994年の創業以来、下水道関連工事から建物設備メンテナンスまで、
                    水まわりのインフラを支える事業を展開してまいりました。
                    「安心して任せられる企業」として、お客様のニーズや現場の課題に真摯に向き合い、
                    確かな技術と信頼でお応えしてきました。
                  </p>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    当社の強みの一つは、独自開発した特許技術「ラクユーZ工法」です。
                    この不断水水替工法は、下水道更生工事において工期短縮・コスト削減・安全性向上を実現し、
                    2020年には第4回インフラメンテナンス大賞にて防衛大臣賞・技術開発部門 優秀賞を受賞しました。
                  </p>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    社会インフラの老朽化が進む中、私たちの役割はますます重要になっています。
                    安全・安心な生活を支えるため、技術革新と人材育成に取り組み、
                    これからも地域社会に貢献してまいります。
                  </p>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    今後とも、京環メンテナンスをよろしくお願い申し上げます。
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200">
                  <p className="text-sm text-slate-500 mb-2">京都環境メンテナンス株式会社</p>
                  <p className="text-xl font-semibold text-primary-900">
                    代表取締役　大島 慎太郎
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="sticky top-24"
              >
                {/* CEO Photo */}
                <div className="aspect-[3/4] bg-slate-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center text-slate-400">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-sm">代表者写真</p>
                  </div>
                </div>

                {/* Profile */}
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-primary-900 mb-4">プロフィール</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-slate-500 mb-0.5">氏名</div>
                      <div className="text-slate-800">大島 慎太郎（おおしま しんたろう）</div>
                    </div>
                    <div>
                      <div className="text-slate-500 mb-0.5">役職</div>
                      <div className="text-slate-800">代表取締役</div>
                    </div>
                    <div>
                      <div className="text-slate-500 mb-0.5">就任</div>
                      <div className="text-slate-800">2008年頃</div>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="mt-6 space-y-3">
                  <Button variant="outline" className="w-full justify-center" asChild>
                    <Link href="/company">会社概要へ戻る</Link>
                  </Button>
                  <Button variant="primary" className="w-full justify-center" asChild>
                    <Link href="/contact">お問い合わせ</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
