"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUpVariants } from "@/lib/animations";
import { companyInfo } from "@/lib/utils";

const inquiryTypes = [
  "下水道更生工事について",
  "ラクユーZ工法について",
  "建物設備メンテナンスについて",
  "空調衛生設備工事について",
  "採用について",
  "その他",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-950">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-950" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-white">お問い合わせ</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-display-md md:text-display-lg font-semibold text-white mb-4">
              お問い合わせ
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              下水道工事、建物設備メンテナンス、採用に関するお問い合わせは、
              お電話またはフォームよりお気軽にご連絡ください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-sm bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-lg p-6"
            >
              <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-900 mb-1">お電話</h3>
              <a href={`tel:${companyInfo.phone.replace(/-/g, "")}`} className="text-lg font-medium text-accent-600 hover:underline">
                {companyInfo.phone}
              </a>
              <p className="text-sm text-slate-500 mt-1">平日 9:00〜18:00</p>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-lg p-6"
            >
              <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-900 mb-1">本社</h3>
              <p className="text-sm text-slate-600">{companyInfo.address.postal}</p>
              <p className="text-sm text-slate-600">{companyInfo.address.full}</p>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-lg p-6"
            >
              <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-900 mb-1">大阪支店</h3>
              <p className="text-sm text-slate-600">{companyInfo.branch}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-primary-900 mb-3">
                  お問い合わせを受け付けました
                </h2>
                <p className="text-slate-600 mb-6">
                  内容を確認の上、担当者よりご連絡いたします。
                  通常2〜3営業日以内にご返信いたします。
                </p>
                <Button variant="outline" asChild>
                  <Link href="/">トップページへ戻る</Link>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-center mb-10">
                  <span className="section-label">Contact Form</span>
                  <h2 className="text-display-sm font-semibold text-primary-900">
                    お問い合わせフォーム
                  </h2>
                  <p className="text-slate-600 mt-2">
                    必須項目をご入力の上、送信してください。
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        会社名・団体名
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        placeholder="株式会社〇〇"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        placeholder="075-000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700 mb-2">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    >
                      <option value="">選択してください</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors resize-none"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <p className="text-sm text-slate-600">
                      ご入力いただいた個人情報は、お問い合わせへの回答およびご連絡のために利用いたします。
                      詳しくは<Link href="/privacy" className="text-accent-600 hover:underline">プライバシーポリシー</Link>をご覧ください。
                    </p>
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="min-w-[200px]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          送信中...
                        </>
                      ) : (
                        <>
                          送信する
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-label">Access</span>
            <h2 className="text-display-sm font-semibold text-primary-900">アクセス</h2>
          </div>
          <div className="aspect-[21/9] bg-slate-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-400">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm">Google Mapが入ります</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
