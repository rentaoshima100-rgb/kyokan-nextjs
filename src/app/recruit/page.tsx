"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, SectionHeader } from "@/components/ui/Button";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const benefits = [
  { icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z", title: "資格取得支援", description: "受験費用・講習費用を会社が負担" },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "OJT研修", description: "先輩社員による丁寧な指導" },
  { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "資格手当", description: "取得資格に応じた手当を支給" },
  { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", title: "キャリアアップ", description: "実力次第で早期昇進可能" },
];

const positions = [
  {
    title: "現場管理・施工スタッフ",
    type: "正社員",
    description: "下水道更生工事、建物設備メンテナンス、空調衛生設備工事の現場管理・施工業務",
    requirements: ["学歴・経験不問（未経験者歓迎）", "普通自動車免許（AT限定可）"],
    location: "京都本社または大阪支店",
    benefits: ["各種社会保険完備", "資格取得支援制度", "昇給・賞与あり", "交通費支給"],
  },
  {
    title: "設備工事技術者",
    type: "正社員",
    description: "空調設備、給排水衛生設備、機械器具設置工事の設計・施工管理",
    requirements: ["設備工事の実務経験者優遇", "一級管工事施工管理技士等の資格保有者歓迎"],
    location: "京都本社または大阪支店",
    benefits: ["各種社会保険完備", "資格取得支援制度", "昇給・賞与あり", "経験・資格により優遇"],
  },
];

const flow = [
  { step: "1", title: "応募", description: "お電話またはお問い合わせフォームよりご連絡ください。" },
  { step: "2", title: "書類選考", description: "履歴書・職務経歴書をご提出いただきます。" },
  { step: "3", title: "面接", description: "担当者との面接を行います（1〜2回）。" },
  { step: "4", title: "内定・入社", description: "入社日はご相談の上決定します。" },
];

export default function RecruitPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-950">
        <div className="absolute inset-0 bg-primary-950" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-white">採用情報</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-display-md md:text-display-lg font-semibold text-white mb-4">
              採用情報
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mb-6">
              社会インフラを支える仕事で、一緒に成長しませんか。
              未経験者歓迎、資格取得支援制度あり。
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" asChild>
                <a href="#positions">募集職種を見る</a>
              </Button>
              <Button variant="white" asChild>
                <Link href="/contact">応募する</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Message */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="section-label">Message</span>
              <h2 className="text-display-sm font-semibold text-primary-900 mb-6">
                「人が主役で活躍する会社」
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                京環メンテナンスは「人が主役で活躍する会社」です。
                私たちの仕事は、目には見えにくいけれど、人々の暮らしを支える大切な社会インフラを守ること。
              </p>
              <p className="text-slate-600 leading-relaxed">
                入社時点で専門知識や経験は必要ありません。
                先輩社員の多くが異業種・未経験からスタートし、今ではプロとして活躍しています。
                必要なのは「やる気と素直に学ぶ姿勢」だけです。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            label="Benefits"
            title="働く魅力"
            description="成長をサポートする制度"
          />
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={staggerItemVariants}
                className="bg-white border border-slate-200 rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-accent-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-slate-500">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Positions */}
      <section className="section" id="positions">
        <div className="container-custom">
          <SectionHeader label="Positions" title="募集職種" />
          <div className="space-y-6 max-w-4xl mx-auto">
            {positions.map((position) => (
              <motion.div
                key={position.title}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-lg p-6 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-accent-600 text-white text-xs font-medium rounded mb-2">
                      {position.type}
                    </span>
                    <h3 className="text-xl font-semibold text-primary-900">{position.title}</h3>
                  </div>
                  <Button variant="primary" size="sm" asChild>
                    <Link href="/contact">応募する</Link>
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 mb-2">仕事内容</h4>
                    <p className="text-sm text-slate-700">{position.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 mb-2">応募資格</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      {position.requirements.map((req) => (
                        <li key={req}>・{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 mb-2">勤務地</h4>
                    <p className="text-sm text-slate-700">{position.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-500 mb-2">待遇</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      {position.benefits.map((b) => (
                        <li key={b}>・{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeader label="Flow" title="応募から採用までの流れ" />
          <div className="max-w-2xl mx-auto">
            {flow.map((item, index) => (
              <motion.div
                key={item.step}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4 pb-8 last:pb-0"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {item.step}
                  </div>
                  {index < flow.length - 1 && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200" />
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-primary-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-accent-600">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">ご応募・お問い合わせ</h2>
              <p className="text-accent-100 text-sm">採用に関するご質問もお気軽にどうぞ。</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="white" asChild>
                <a href="tel:0758712311">075-871-2311</a>
              </Button>
              <Button variant="secondary" className="bg-accent-700 hover:bg-accent-800 border-0" asChild>
                <Link href="/contact">お問い合わせフォーム</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
