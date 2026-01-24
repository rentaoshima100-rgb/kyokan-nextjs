"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, SectionHeader, Badge } from "@/components/ui/Button";
import { ModelViewer } from "@/components/ui/ModelViewer";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const features = [
  {
    number: "01",
    title: "工期短縮",
    description: "1スパンのみの水替えで施工可能。従来の2スパン以上必要だった工程を大幅に短縮します。",
  },
  {
    number: "02",
    title: "簡易施工",
    description: "吸込ホースを投入するだけで排水可能。毎日の機材設置・撤去が容易です。",
  },
  {
    number: "03",
    title: "24時間自動排水",
    description: "センサー制御による自動運転。夜間含め人手による監視を省力化します。",
  },
  {
    number: "04",
    title: "安全性向上",
    description: "非開削工法により、道路陥没や作業員の事故リスクを大幅に低減します。",
  },
  {
    number: "05",
    title: "コスト削減",
    description: "真空車（バキューム車）が不要。機材費・人件費を大幅に削減できます。",
  },
  {
    number: "06",
    title: "周辺環境配慮",
    description: "低振動・低騒音設計。交通規制不要で住民への影響を最小化します。",
  },
];

const pumpSystems = [
  {
    id: "mobile-pump",
    name: "移動式排水ポンプユニット",
    description: "台車に搭載された移動式ポンプシステム。現場間の移動が容易で、センサーにより水位を検知して自動で排水を制御。24時間無人運転が可能です。",
    modelPath: "/models/industrial-pump.glb",
  },
  {
    id: "orange-pump",
    name: "高圧排水ポンプ",
    description: "高圧・大容量の排水に対応したポンプ。管渠内の水流を効率的に制御しながら、作業スペースを確保するための高度な排水性能を実現します。",
    modelPath: "/models/pump-orange.glb",
  },
  {
    id: "compact-unit",
    name: "コンパクト排水ユニット",
    description: "小型設計で狭い現場にも対応。住宅地での使用を考慮した静音設計で、特殊なハウジングにより騒音を抑え、夜間作業にも対応可能です。",
    modelPath: "/models/pump-unit.glb",
  },
];

const applications = [
  "下水道管更生工事",
  "マンホール補修工事",
  "管渠補修工事",
  "管移設工事",
  "浄化槽切替工事",
  "宅地桝くみ上げ",
];

export default function RakuyuzPage() {
  const [activeModel, setActiveModel] = useState(pumpSystems[0].id);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-950">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-950" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-white">ラクユーZ工法</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-display-md md:text-display-lg font-semibold text-white">
                ラクユーZ工法
              </h1>
              <Badge variant="gold" className="bg-gold-500/20 text-gold-400">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                特許第2698803号
              </Badge>
            </div>
            <p className="text-lg text-slate-300 max-w-2xl">
              下水道関連工事において、本体工事の作業効率を高め施工品質の確保につながる不断水水替工法。
              京環メンテナンスが独自開発した特許技術です。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Award Banner */}
      <section className="bg-gold-500/10 border-y border-gold-500/20">
        <div className="container-custom py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div>
              <span className="text-sm text-gold-600 font-medium">
                第4回インフラメンテナンス大賞 防衛大臣賞・技術開発部門 優秀賞 受賞
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What is RAKUYU-Z */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="section-label">What is RAKUYU-Z</span>
              <h2 className="text-display-sm font-semibold text-primary-900 mb-4">
                ラクユーZ工法とは
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                ラクユーZ工法は、下水道関連工事において排水作業を効率化する「不断水水替工法」です。
                従来の真空車（バキューム車）による排水に代わり、特許取得のポンプシステムを使用することで、
                工期短縮・コスト削減・安全性向上を実現します。
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                1995年に特許登録（特許第2698803号）され、以来30年近くにわたり、
                全国の下水道更生工事で採用されています。2020年には、第4回インフラメンテナンス大賞にて
                防衛大臣賞・技術開発部門 優秀賞を受賞しました。
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" asChild>
                  <Link href="/contact">導入のご相談</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/works">施工実績を見る</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden relative shadow-2xl border border-slate-300"
            >
              <ModelViewer 
                modelPath="/models/pump-orange.glb"
                className="w-full h-full"
              />
              <div className="absolute bottom-3 left-3 right-3 flex justify-center z-10 pointer-events-none">
                <span className="px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-xs text-slate-600 shadow">
                  3Dモデルをドラッグして回転 • スクロールで拡大縮小
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            label="Features"
            title="6つの特長"
            description="ラクユーZ工法が選ばれる理由"
          />
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.number}
                variants={staggerItemVariants}
                className="relative bg-white border border-slate-200 rounded-lg p-6 hover:border-accent-300 hover:shadow-card transition-all"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent-600 rounded-md flex items-center justify-center text-white text-sm font-semibold">
                  {feature.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-base font-semibold text-primary-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3D Model Viewer Section */}
      <section className="section bg-gradient-to-b from-slate-100 to-slate-200">
        <div className="container-custom">
          <SectionHeader
            label="Pump Systems"
            title="特許ポンプシステム"
            description="ラクユーZ工法を支える3つの専用機器"
          />

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Model Selector */}
            <div className="lg:col-span-2 space-y-3">
              {pumpSystems.map((pump) => (
                <motion.button
                  key={pump.id}
                  onClick={() => setActiveModel(pump.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full text-left p-4 rounded-lg border transition-all shadow-sm ${
                    activeModel === pump.id
                      ? "bg-accent-600 border-accent-500 text-white shadow-lg shadow-accent-500/20"
                      : "bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeModel === pump.id ? "bg-white/20" : "bg-accent-100 text-accent-600"
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{pump.name}</h4>
                      <p className={`text-xs mt-0.5 ${
                        activeModel === pump.id ? "text-white/80" : "text-slate-500"
                      }`}>
                        {pump.description.slice(0, 40)}...
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* 3D Model Viewer */}
            <div className="lg:col-span-3">
              <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 border border-slate-300 rounded-xl overflow-hidden relative shadow-2xl">
                {/* Three.js Canvas - Real 3D Model */}
                <ModelViewer 
                  key={activeModel}
                  modelPath={pumpSystems.find(p => p.id === activeModel)?.modelPath || "/models/industrial-pump.glb"}
                  className="w-full h-full"
                />

                {/* Controls hint */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="px-2 py-1 bg-white/60 backdrop-blur-sm rounded shadow">ドラッグ: 回転</span>
                    <span className="px-2 py-1 bg-white/60 backdrop-blur-sm rounded shadow">スクロール: 拡大</span>
                  </div>
                </div>
              </div>

              {/* Active model description */}
              <div className="mt-4 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                <h4 className="font-semibold text-primary-900 mb-2">
                  {pumpSystems.find(p => p.id === activeModel)?.name}
                </h4>
                <p className="text-sm text-slate-600">
                  {pumpSystems.find(p => p.id === activeModel)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section">
        <div className="container-custom">
          <SectionHeader
            label="Process"
            title="施工フロー"
            description="ラクユーZ工法による施工の流れ"
          />
          <div className="aspect-[21/9] bg-slate-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-400">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              <p className="text-sm">施工フロー図が入ります</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            label="Applications"
            title="適用工事"
            description="ラクユーZ工法が活用できる工事の種類"
          />
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {applications.map((app) => (
              <motion.div
                key={app}
                variants={staggerItemVariants}
                className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-accent-300 transition-colors"
              >
                <div className="w-10 h-10 mx-auto mb-2 bg-accent-50 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-primary-900">{app}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Association */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-primary-50 border border-primary-100 rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="section-label">Association</span>
                <h2 className="text-display-sm font-semibold text-primary-900 mb-4">
                  ラクユーZ工法協会
                </h2>
                <p className="text-slate-600 mb-6">
                  2012年設立。ラクユーZ工法の普及と技術向上を目的とした協会です。
                  全国の施工業者と連携し、技術研修や情報共有を行っています。
                </p>
                <Button variant="outline" asChild>
                  <Link href="/contact">協会についてのお問い合わせ</Link>
                </Button>
              </div>
              <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <p className="text-sm">協会ロゴ・イメージ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-accent-600">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
                ラクユーZ工法の導入をご検討ですか？
              </h2>
              <p className="text-accent-100 text-sm">
                施工条件やコストについて、お気軽にご相談ください。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="white" asChild>
                <a href="tel:0758712311">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  075-871-2311
                </a>
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
