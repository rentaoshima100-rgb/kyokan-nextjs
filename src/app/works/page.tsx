"use client";

import { useState } from "react";
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

const projects = [
  {
    id: 1,
    title: "老朽下水管耐震化工事",
    location: "京都市",
    year: "2023",
    category: "rehabilitation",
    description: "ラクユーZ工法を採用し、1スパンのみの水替えで施工完了。従来工法と比較して工期を40%短縮。",
    featured: false,
  },
  {
    id: 2,
    title: "管渠移設工事",
    location: "静岡県",
    year: "2022",
    category: "rehabilitation",
    description: "交通規制なしで施工完了。周辺住民への影響を最小限に抑えた環境配慮型の工事を実施。",
    featured: false,
  },
  {
    id: 3,
    title: "下水道更新工事",
    location: "自衛隊施設",
    year: "2020",
    category: "rehabilitation",
    description: "インフラメンテナンス大賞優秀賞受賞案件。高いセキュリティ要件の中、安全かつ確実に施工を完了。",
    featured: true,
  },
  {
    id: 4,
    title: "大規模マンション給排水管更新",
    location: "大阪市",
    year: "2023",
    category: "maintenance",
    description: "築30年マンションの給排水管を全面更新。入居者の生活に配慮したスケジュールで施工。",
    featured: false,
  },
  {
    id: 5,
    title: "商業施設 空調設備新設工事",
    location: "京都市",
    year: "2022",
    category: "hvac",
    description: "大型商業施設の空調設備を新設。省エネ性能の高いシステムを導入し、ランニングコストを削減。",
    featured: false,
  },
  {
    id: 6,
    title: "公共施設 非常用発電機更新",
    location: "京都府",
    year: "2021",
    category: "equipment",
    description: "老朽化した非常用発電機を最新機種に更新。災害時の電源確保体制を強化。",
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

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-950">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-950" />
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

      {/* Projects */}
      <section className="section">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-accent-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

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
