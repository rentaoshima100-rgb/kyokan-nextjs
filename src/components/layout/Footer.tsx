"use client";

import Link from "next/link";
import { companyInfo } from "@/lib/utils";

const footerLinks = {
  services: [
    { href: "/strength#hvac", label: "空調衛生設備工事" },
    { href: "/strength#rehabilitation", label: "更生工事" },
    { href: "/strength#maintenance", label: "マンションメンテナンス" },
    { href: "/strength#equipment", label: "機械器具設置工事" },
  ],
  company: [
    { href: "/company", label: "会社概要" },
    { href: "/company/message", label: "代表あいさつ" },
    { href: "/rakuyuz", label: "ラクユーZ工法" },
    { href: "/recruit", label: "採用情報" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-accent-600 flex items-center justify-center text-sm font-bold text-white">
                京
              </div>
              <div>
                <div className="font-semibold text-sm">京環メンテナンス</div>
                <div className="text-[9px] tracking-wider text-white/50 uppercase">KYOKAN MAINTENANCE</div>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              1994年創業。下水道関連工事・建物設備メンテナンスを通じて社会インフラを支えています。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/90">事業内容</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/90">会社情報</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/90">お問い合わせ</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{companyInfo.address.postal}<br />{companyInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${companyInfo.phone.replace(/-/g, "")}`} className="hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
            <p>© 2024 {companyInfo.name}</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">サイトマップ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
