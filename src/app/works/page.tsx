"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button, SectionHeader, Badge } from "@/components/ui/Button";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const categories = [
  { id: "all", label: "すべて" },
  { id: "rehabilitation", label: "更生工事" },
  { id: "hvac", label: "空調衛生設備" },
  { id: "maintenance", label: "マンションメンテナンス" },
  { id: "equipment", label: "機械器具設置" },
];

const regions = [
  { id: "all", label: "全地域" },
  { id: "kyoto", label: "京都" },
  { id: "osaka", label: "大阪" },
  { id: "shizuoka", label: "静岡" },
  { id: "other", label: "その他" },
];

const projects = [
  {
    id: 1,
    title: "老朽下水管耐震化工事",
    location: "京都市",
    region: "kyoto",
    year: "2023",
    category: "rehabilitation",
    diameter: "150mm",
    description: "ラクユーZ工法を採用し、1スパンのみの水替えで施工完了。従来工法と比較して工期を40%短縮。",
    featured: false,
  },
  {
    id: 2,
    title: "管渠移設工事",
    location: "静岡県",
    region: "shizuoka",
    year: "2022",
    category: "rehabilitation",
    diameter: "200mm",
    description: "交通規制なしで施工完了。周辺住民への影響を最小限に抑えた環境配慮型の工事を実施。",
    featured: false,
  },
  {
    id: 3,
    title: "下水道更新工事",
    location: "自衛隊施設",
    region: "other",
    year: "2020",
    category: "rehabilitation",
    diameter: "100mm",
    description: "インフラメンテナンス大賞優秀賞受賞案件。高いセキュリティ要件の中、安全かつ確実に施工を完了。",
    featured: true,
  },
  {
    id: 4,
    title: "大規模マンション給排水管更新",
    location: "大阪市",
    region: "osaka",
    year: "2023",
    category: "maintenance",
    diameter: "50mm",
    description: "築30年マンションの給排水管を全面更新。入居者の生活に配慮したスケジュールで施工。",
    featured: false,
  },
  {
    id: 5,
    title: "商業施設 空調設備新設工事",
    location: "京都市",
    region: "kyoto",
    year: "2022",
    category: "hvac",
    diameter: "-",
    description: "大型商業施設の空調設備を新設。省エネ性能の高いシステムを導入し、ランニングコストを削減。",
    featured: false,
  },
  {
    id: 6,
    title: "公共施設 非常用発電機更新",
    location: "京都府",
    region: "kyoto",
    year: "2021",
    category: "equipment",
    diameter: "-",
    description: "老朽化した非常用発電機を最新機種に更新。災害時の電源確保体制を強化。",
    featured: false,
  },
  {
    id: 7,
    title: "病院 給水管更生工事",
    location: "大阪市",
    region: "osaka",
    year: "2022",
    category: "rehabilitation",
    diameter: "100mm",
    description: "病院施設の断水時間を最小限に抑えた給水管更生工事。夜間作業で患者様への影響を軽減。",
    featured: false,
  },
  {
    id: 8,
    title: "京都大学構内配水管工事",
    location: "京都市",
    region: "kyoto",
    year: "2021",
    category: "rehabilitation",
    diameter: "150mm",
    description: "大学構内の老朽化した配水管を更生。学業への影響を最小化するスケジュールで施工。",
    featured: false,
  },
  {
    id: 9,
    title: "チサンマンション江坂豊津工事",
    location: "大阪府",
    region: "osaka",
    year: "2020",
    category: "maintenance",
    diameter: "75mm",
    description: "マンション共用部の給排水管を全面更新。居住者の生活を維持しながらの施工を実現。",
    featured: false,
  },
];

const clients = [
  "京都市",
  "大阪市",
  "伊藤忠アーバンコミュニティ",
  "大和ライフネクスト",
  "三菱地所コミュニティ",
];

// Map marker data
const mapMarkers = [
  { region: "kyoto", label: "京都", count: 4, x: "48%", y: "52%" },
  { region: "osaka", label: "大阪", count: 3, x: "45%", y: "58%" },
  { region: "shizuoka", label: "静岡", count: 1, x: "62%", y: "50%" },
  { region: "other", label: "その他", count: 1, x: "50%", y: "35%" },
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeRegion, setActiveRegion] = useState("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const categoryMatch = activeCategory === "all" || p.category === activeCategory;
      const regionMatch = activeRegion === "all" || p.region === activeRegion;
      return categoryMatch && regionMatch;
    });
  }, [activeCategory, activeRegion]);

  const handleReset = () => {
    setActiveCategory("all");
    setActiveRegion("all");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-950">
        <div className="absolute inset-0 bg-primary-950" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-white">施工実績</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-display-md md:text-display-lg font-semibold text-white mb-4">
              施工実績
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              官公庁から民間まで、様々な施工実績をご紹介します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Map */}
      <section className="section-sm bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Map placeholder */}
            <div className="relative aspect-[4/3] bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Simplified Japan map outline */}
                <svg viewBox="0 0 200 180" className="w-full h-full p-8 text-slate-200">
                  <path
                    fill="currentColor"
                    d="M80,20 Q100,15 120,25 L130,40 Q140,55 135,75 L140,95 Q145,110 140,125 L130,145 Q115,160 95,155 L75,150 Q60,145 55,130 L50,110 Q45,90 55,70 L60,50 Q65,30 80,20 Z"
                  />
                </svg>
              </div>
              {/* Map markers */}
              {mapMarkers.map((marker) => (
                <button
                  key={marker.region}
                  onClick={() => setActiveRegion(activeRegion === marker.region ? "all" : marker.region)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                    activeRegion === marker.region ? "scale-125 z-10" : "hover:scale-110"
                  }`}
                  style={{ left: marker.x, top: marker.y }}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold shadow-sm ${
                      activeRegion === marker.region
                        ? "bg-accent-600 text-white"
                        : "bg-white text-primary-900 border border-slate-300"
                    }`}
                  >
                    {marker.count}
                  </div>
                  <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap ${
                    activeRegion === marker.region ? "text-accent-600 font-medium" : "text-slate-500"
                  }`}>
                    {marker.label}
                  </span>
                </button>
              ))}
              {/* Legend */}
              <div className="absolute bottom-3 left-3 text-xs text-slate-500">
                マーカーをクリックで地域フィルター
              </div>
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-lg font-semibold text-primary-900 mb-4">施工実績分布</h3>
              <div className="space-y-3">
                {mapMarkers.map((marker) => (
                  <div key={marker.region} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{marker.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent-500 rounded-full"
                          style={{ width: `${(marker.count / projects.length) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-primary-900 w-8 text-right">
                        {marker.count}件
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-4">
                全国各地で施工実績があります。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container-custom">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-lg p-4 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-wrap gap-4">
                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <label className="text-sm text-slate-500 flex-shrink-0">工事種別:</label>
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="px-3 py-1.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                {/* Region Filter */}
                <div className="flex items-center gap-2">
                  <label className="text-sm text-slate-500 flex-shrink-0">地域:</label>
                  <select
                    value={activeRegion}
                    onChange={(e) => setActiveRegion(e.target.value)}
                    className="px-3 py-1.5 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  >
                    {regions.map((region) => (
                      <option key={region.id} value={region.id}>{region.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500">
                  {filteredProjects.length}件表示
                </span>
                {(activeCategory !== "all" || activeRegion !== "all") && (
                  <button
                    onClick={handleReset}
                    className="text-sm text-accent-600 hover:text-accent-700 font-medium"
                  >
                    リセット
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-card transition-all group"
                >
                  {/* Image */}
                  <div className="aspect-video bg-slate-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge variant="gold" className="bg-gold-500 text-white">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          受賞案件
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                        {categories.find((c) => c.id === project.category)?.label}
                      </span>
                      <span className="text-xs text-slate-400">{project.year}</span>
                    </div>
                    <h3 className="font-semibold text-primary-900 mb-1 group-hover:text-accent-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">{project.location}</p>
                    <p className="text-sm text-slate-600 line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Clients */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            label="Clients"
            title="主要取引先"
            description="官公庁・大手企業様との実績"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-white border border-slate-200 rounded-lg p-6 text-center"
              >
                <p className="text-sm font-medium text-slate-700">{client}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">他多数</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-accent-600">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">お見積もり・ご相談</h2>
              <p className="text-accent-100 text-sm">現地調査・お見積もりは無料で承ります。</p>
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
