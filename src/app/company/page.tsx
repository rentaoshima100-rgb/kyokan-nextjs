"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, SectionHeader } from "@/components/ui/Button";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { companyInfo, timeline } from "@/lib/utils";

const companyData = [
  { label: "会社名", value: companyInfo.name },
  { label: "代表取締役", value: companyInfo.ceo },
  { label: "設立", value: companyInfo.established },
  { label: "資本金", value: companyInfo.capital },
  { label: "従業員数", value: companyInfo.employees },
  { label: "本社所在地", value: `${companyInfo.address.postal}\n${companyInfo.address.full}` },
  { label: "大阪支店", value: companyInfo.branch },
  { label: "電話番号", value: companyInfo.phone },
  { label: "建設業許可", value: companyInfo.license },
  { label: "認証", value: companyInfo.certification },
];

const certifications = [
  { name: "特定建設業許可", description: "国土交通大臣許可 第22954号" },
  { name: "KESステップ1", description: "環境マネジメントシステム認証" },
];

export default function CompanyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-950">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-950" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-white">会社概要</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-md md:text-display-lg font-semibold text-white"
          >
            会社概要
          </motion.h1>
        </div>
      </section>

      {/* Company Info */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="section-label">Company Info</span>
                <h2 className="text-display-sm font-semibold text-primary-900 mb-8">会社情報</h2>
              </motion.div>

              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden"
              >
                <div className="divide-y divide-slate-200">
                  {companyData.map((item) => (
                    <div key={item.label} className="flex flex-col sm:flex-row py-4 px-6">
                      <div className="text-sm font-medium text-slate-500 sm:w-36 flex-shrink-0 mb-1 sm:mb-0">
                        {item.label}
                      </div>
                      <div className="text-sm text-slate-800 whitespace-pre-line">{item.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CEO Message Link */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-primary-50 border border-primary-100 rounded-lg p-6"
              >
                <h3 className="font-semibold text-primary-900 mb-2">代表あいさつ</h3>
                <p className="text-sm text-slate-600 mb-4">
                  代表取締役 大島慎太郎からのメッセージをご覧ください。
                </p>
                <Button variant="primary" size="sm" asChild>
                  <Link href="/company/message">詳しく見る</Link>
                </Button>
              </motion.div>

              {/* Certifications */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-lg p-6"
              >
                <h3 className="font-semibold text-primary-900 mb-4">取得認証</h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent-50 rounded flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary-900">{cert.name}</div>
                        <div className="text-xs text-slate-500">{cert.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            label="History"
            title="沿革"
            description="1994年の創業から現在まで"
          />

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative pl-8 border-l-2 border-accent-500/30">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={staggerItemVariants}
                  className="relative pb-10 last:pb-0"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 bg-accent-500 rounded-full ring-4 ring-accent-500/20" />
                  <div className="inline-block px-3 py-1 mb-2 bg-accent-50 text-accent-600 rounded text-sm font-semibold">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Access */}
      <section className="section">
        <div className="container-custom">
          <SectionHeader label="Access" title="アクセス" />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-slate-400">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm">Google Mapが入ります</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-900 mb-4">本社</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p>{companyInfo.address.postal}<br />{companyInfo.address.full}</p>
                <p>TEL: {companyInfo.phone}</p>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mt-8 mb-4">大阪支店</h3>
              <p className="text-sm text-slate-600">{companyInfo.branch}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-accent-600">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">お問い合わせ</h2>
              <p className="text-accent-100 text-sm">ご質問・ご相談はお気軽にどうぞ。</p>
            </div>
            <Button variant="white" asChild>
              <Link href="/contact">お問い合わせフォーム</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
