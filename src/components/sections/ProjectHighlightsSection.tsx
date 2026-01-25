"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, SectionHeader, Badge } from "@/components/ui/Button";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const featuredProjects = [
  {
    id: 1,
    title: "老朽下水管耐震化工事",
    location: "京都市",
    year: "2023",
    category: "更生工事",
    description: "ラクユーZ工法を採用し、従来工法と比較して工期を40%短縮。",
    featured: false,
  },
  {
    id: 2,
    title: "下水道更新工事",
    location: "自衛隊施設",
    year: "2020",
    category: "更生工事",
    description: "インフラメンテナンス大賞優秀賞受賞案件。高いセキュリティ要件の中、安全に施工完了。",
    featured: true,
  },
  {
    id: 3,
    title: "大規模マンション給排水管更新",
    location: "大阪市",
    year: "2023",
    category: "メンテナンス",
    description: "築30年マンションの給排水管を全面更新。入居者への配慮を徹底。",
    featured: false,
  },
];

export function ProjectHighlightsSection() {
  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeader
          label="Works"
          title="施工実績"
          description="豊富な実績と確かな技術力"
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItemVariants}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-card transition-all group"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
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
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400">{project.year}</span>
                </div>
                <h3 className="font-semibold text-primary-900 mb-1 group-hover:text-accent-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 mb-2">{project.location}</p>
                <p className="text-sm text-slate-600 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Button variant="outline" asChild>
            <Link href="/works">
              すべての実績を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
