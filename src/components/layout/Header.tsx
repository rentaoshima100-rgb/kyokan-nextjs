"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useHeaderScroll } from "@/hooks/useAnimations";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/strength", label: "事業内容" },
  { href: "/rakuyuz", label: "ラクユーZ工法" },
  { href: "/works", label: "施工実績" },
  { href: "/company", label: "会社概要" },
  { href: "/recruit", label: "採用情報" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useHeaderScroll(20);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white border-b border-slate-200 shadow-subtle"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded flex items-center justify-center text-sm font-bold transition-colors",
                isScrolled ? "bg-accent-600 text-white" : "bg-white/10 text-white"
              )}>
                京
              </div>
              <div>
                <div className={cn(
                  "font-semibold text-sm leading-tight transition-colors",
                  isScrolled ? "text-primary-900" : "text-white"
                )}>
                  京環メンテナンス
                </div>
                <div className={cn(
                  "text-[9px] tracking-wider uppercase transition-colors",
                  isScrolled ? "text-slate-500" : "text-white/60"
                )}>
                  KYOKAN MAINTENANCE
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded transition-colors",
                    isScrolled
                      ? pathname === item.href
                        ? "text-accent-600"
                        : "text-slate-600 hover:text-primary-900 hover:bg-slate-50"
                      : pathname === item.href
                      ? "text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="ml-3">
                <Button variant={isScrolled ? "primary" : "white"} size="sm" asChild>
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded transition-colors",
                isScrolled ? "hover:bg-slate-100" : "hover:bg-white/10"
              )}
              aria-label="メニュー"
            >
              <motion.span
                animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
                className={cn("w-5 h-0.5 rounded-full", isScrolled ? "bg-primary-900" : "bg-white")}
              />
              <motion.span
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                className={cn("w-5 h-0.5 rounded-full", isScrolled ? "bg-primary-900" : "bg-white")}
              />
              <motion.span
                animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
                className={cn("w-5 h-0.5 rounded-full", isScrolled ? "bg-primary-900" : "bg-white")}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-primary-950 lg:hidden"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <nav className="flex flex-col items-center gap-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-xl font-medium transition-colors",
                        pathname === item.href ? "text-accent-400" : "text-white hover:text-accent-300"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * navItems.length }}
                  className="mt-4"
                >
                  <Button variant="primary" asChild>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      お問い合わせ
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
