"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUpVariants } from "@/lib/animations";
import { companyInfo } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "お問い合わせ",
  description = "下水道工事、建物設備メンテナンスに関するご相談は、お気軽にお問い合わせください。",
}: CTASectionProps) {
  return (
    <section className="section-sm bg-accent-600">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">{title}</h2>
            <p className="text-accent-100 text-sm">{description}</p>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            <Button variant="white" asChild>
              <a href={`tel:${companyInfo.phone.replace(/-/g, "")}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {companyInfo.phone}
              </a>
            </Button>
            <Button variant="secondary" className="bg-accent-700 hover:bg-accent-800 border-0" asChild>
              <Link href="/contact">
                メールでお問い合わせ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
