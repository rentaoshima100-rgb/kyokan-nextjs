"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, SectionHeader } from "@/components/ui/Button";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { services } from "@/lib/utils";

const strengths = [
  {
    number: "01",
    title: "特許技術による差別化",
    description: "独自開発のラクユーZ工法は特許取得済み。他社にない技術力で、工期短縮・コスト削減を実現します。",
  },
  {
    number: "02",
    title: "30年以上の実績",
    description: "1994年の創業以来、官公庁から民間まで幅広い案件に対応。豊富な経験とノウハウを蓄積しています。",
  },
  {
    number: "03",
    title: "ワンストップ対応",
    description: "調査・設計から施工・メンテナンスまで一貫して対応。窓口を一本化することでスムーズな進行を実現します。",
  },
  {
    number: "04",
    title: "安全品質管理",
    description: "KESステップ1認証を取得。環境マネジメントシステムに基づいた品質管理を徹底しています。",
  },
  {
    number: "05",
    title: "専門技術者の配置",
    description: "一級管工事施工管理技士をはじめ、各種資格を持つ専門技術者が現場を管理します。",
  },
  {
    number: "06",
    title: "地域密着のサポート",
    description: "京都本社・大阪支店を拠点に、関西エリアを中心に迅速なサポート体制を整えています。",
  },
];

const serviceDetails = [
  {
    id: "hvac",
    title: "空調衛生設備工事",
    description: "戸建住宅から大型マンション、商業施設、公共施設まで規模を問わず対応。快適な室内環境を実現します。",
    features: ["空調設備の設計・施工", "給排水衛生設備工事", "ガス・消火設備工事", "換気・排煙設備工事", "省エネルギー対策"],
    image: "/images/hvac.jpg",
  },
  {
    id: "rehabilitation",
    title: "更生工事",
    description: "道路を掘削せずに老朽化した下水道管を内側から補強。耐用年数を50年延長する非開削工法です。",
    features: ["管更生ライニング工法", "マンホール更生工法", "耐震補強工事", "特許ラクユーZ工法", "管路調査・診断"],
    image: "/images/rehabilitation.jpg",
  },
  {
    id: "maintenance",
    title: "マンションメンテナンス",
    description: "マンションやビルの入居者さまの快適な生活を守るライフライン管理。定期点検から緊急対応まで。",
    features: ["排水管高圧洗浄", "貯水槽清掃・点検", "浄化槽メンテナンス", "消防設備法定点検", "給水ポンプ保守"],
    image: "/images/maintenance.jpg",
  },
  {
    id: "equipment",
    title: "機械器具設置工事",
    description: "大型の機器類の搬入・据付工事から、店舗・工場の電気機器設置工事まで幅広く対応します。",
    features: ["大型機械設備の搬入・据付", "受変電設備工事", "非常用発電機設置", "キュービクル設置", "産業用機器設置"],
    image: "/images/equipment.jpg",
  },
];

export default function StrengthPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-950">
        <div className="absolute inset-0 bg-primary-950" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-white">事業内容・強み</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-display-md md:text-display-lg font-semibold text-white mb-4">
              事業内容・強み
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              特許技術と30年以上の実績を活かし、水まわりのインフラを総合的にサポートします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section">
        <div className="container-custom">
          <SectionHeader
            label="Our Strengths"
            title="選ばれる6つの理由"
            description="京環メンテナンスが多くのお客様に選ばれる理由"
          />
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {strengths.map((strength) => (
              <motion.div
                key={strength.number}
                variants={staggerItemVariants}
                className="relative bg-white border border-slate-200 rounded-lg p-6 hover:border-accent-300 hover:shadow-card transition-all"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent-600 rounded-md flex items-center justify-center text-white text-sm font-semibold">
                  {strength.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-base font-semibold text-primary-900 mb-2">{strength.title}</h3>
                  <p className="text-sm text-slate-500">{strength.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            label="Services"
            title="事業内容"
            description="4つの事業領域で総合的にサポート"
          />

          <div className="space-y-12">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-slate-400">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">{service.title}イメージ</p>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3 className="text-xl font-semibold text-primary-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-accent-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">このサービスについて問い合わせる</Link>
                    </Button>
                  </div>
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
              <h2 className="text-xl font-semibold text-white mb-1">サービスについてのご相談</h2>
              <p className="text-accent-100 text-sm">お見積もり・現地調査は無料で承ります。</p>
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
