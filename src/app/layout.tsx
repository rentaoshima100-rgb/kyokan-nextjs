import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "京環メンテナンス株式会社 | 下水道工事・建物設備メンテナンス",
    template: "%s | 京環メンテナンス株式会社",
  },
  description:
    "京都環境メンテナンス株式会社。1994年創業、特許取得のラクユーZ工法で下水道関連工事・建物設備メンテナンスを提供。インフラメンテナンス大賞優秀賞受賞。",
  keywords: [
    "京環メンテナンス",
    "京都環境メンテナンス",
    "ラクユーZ工法",
    "下水道工事",
    "建物設備メンテナンス",
    "更生工事",
    "空調衛生設備",
    "京都",
  ],
  authors: [{ name: "京都環境メンテナンス株式会社" }],
  creator: "京都環境メンテナンス株式会社",
  publisher: "京都環境メンテナンス株式会社",
  formatDetection: {
    telephone: true,
    date: false,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://kyokan-maintenance.co.jp"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "京環メンテナンス株式会社",
    description:
      "特許取得のラクユーZ工法で下水道関連工事・建物設備メンテナンスを提供。1994年創業、インフラメンテナンス大賞優秀賞受賞。",
    url: "https://kyokan-maintenance.co.jp",
    siteName: "京環メンテナンス株式会社",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "京環メンテナンス株式会社",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "京環メンテナンス株式会社",
    description:
      "特許取得のラクユーZ工法で下水道関連工事・建物設備メンテナンスを提供。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#041c2c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "京都環境メンテナンス株式会社",
              alternateName: "京環メンテナンス株式会社",
              url: "https://kyokan-maintenance.co.jp",
              logo: "https://kyokan-maintenance.co.jp/logo.png",
              description:
                "下水道関連工事・建物設備メンテナンスを提供する京都の企業。特許取得のラクユーZ工法を展開。",
              foundingDate: "1994-09-12",
              address: {
                "@type": "PostalAddress",
                streetAddress: "西京極北大入町66番地",
                addressLocality: "京都市右京区",
                addressRegion: "京都府",
                postalCode: "615-0881",
                addressCountry: "JP",
              },
              telephone: "+81-75-871-2311",
              sameAs: [],
              award: "第4回インフラメンテナンス大賞 防衛大臣賞・優秀賞",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
