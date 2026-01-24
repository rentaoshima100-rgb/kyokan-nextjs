import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes with clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format number with Japanese units
export function formatJapaneseNumber(num: number): string {
  if (num >= 100000000) {
    return `${(num / 100000000).toFixed(1)}億`;
  }
  if (num >= 10000) {
    return `${(num / 10000).toFixed(0)}万`;
  }
  return num.toLocaleString("ja-JP");
}

// Format phone number
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}

// Debounce function
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Generate unique ID
export function generateId(prefix: string = "id"): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

// Check if element is in viewport
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Smooth scroll to element
export function scrollToElement(
  elementId: string,
  offset: number = 0
): void {
  const element = document.getElementById(elementId);
  if (element) {
    const top =
      element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
}

// Company data
export const companyInfo = {
  name: "京都環境メンテナンス株式会社",
  brandName: "京環メンテナンス株式会社",
  brandNameEn: "KYOKAN MAINTENANCE",
  established: "1994年9月12日",
  ceo: "大島 慎太郎",
  capital: "9,900万円",
  employees: "約11〜30名",
  address: {
    postal: "〒615-0881",
    full: "京都府京都市右京区西京極北大入町66番地",
    city: "京都市右京区",
  },
  branch: "大阪府大阪市",
  phone: "075-871-2311",
  license: "国土交通大臣許可（特定建設業 第22954号）",
  certification: "KESステップ1（環境マネジメントシステム）",
};

// Navigation items
export const navigationItems = [
  { href: "/", label: "ホーム" },
  { href: "/strength", label: "強み" },
  { href: "/rakuyuz", label: "ラクユーZ工法" },
  { href: "/works", label: "施工実績" },
  { href: "/company", label: "会社概要" },
  { href: "/recruit", label: "採用情報" },
];

// Services data
export const services = [
  {
    id: "hvac",
    title: "空調衛生設備工事",
    description:
      "戸建住宅から大型マンション、商業施設、公共施設まで規模を問わず対応",
    features: ["空調設備", "給排水衛生設備", "ガス・消火設備", "換気・排煙設備"],
  },
  {
    id: "rehabilitation",
    title: "更生工事",
    description:
      "道路を掘削せずに老朽化した下水道管を耐震補強。補強維持期間は50年",
    features: ["非開削工法", "耐用年数50年延長", "耐震補強", "管路ライニング"],
  },
  {
    id: "maintenance",
    title: "マンションメンテナンス",
    description:
      "マンションやビルの入居者さまの快適な生活を守るライフライン管理",
    features: [
      "排水管高圧洗浄",
      "貯水槽清掃",
      "浄化槽メンテナンス",
      "消防設備法定点検",
    ],
  },
  {
    id: "equipment",
    title: "機械器具設置工事",
    description:
      "大型の機器類の搬入、据付工事、店舗・工事の電気機器設置工事",
    features: ["大型機械設備", "受変電設備", "非常用発電機", "キュービクル設置"],
  },
];

// Timeline data
export const timeline = [
  {
    year: "1994年",
    title: "会社設立",
    description:
      "京都環境メンテナンス株式会社を設立。下水道関連工事・建物設備メンテナンス事業を開始。",
  },
  {
    year: "1995年",
    title: "ラクユーZ工法 特許登録",
    description:
      "独自開発の不断水水替工法「ラクユーZ工法」が特許登録（特許第2698803号）。",
  },
  {
    year: "2008年頃",
    title: "代表取締役交代",
    description:
      "大島慎太郎氏が代表取締役に就任。技術革新と顧客からの信頼構築を推進。",
  },
  {
    year: "2012年",
    title: "ラクユーZ工法協会 設立",
    description:
      "同工法の普及を目的とした「ラクユーZ工法協会」を設立。全国展開を開始。",
  },
  {
    year: "2020年",
    title: "インフラメンテナンス大賞 優秀賞受賞",
    description:
      "第4回インフラメンテナンス大賞にて防衛大臣賞・技術開発部門 優秀賞を受賞。",
  },
  {
    year: "2023年4月",
    title: "本社移転",
    description:
      "事業拡大に伴い、本社を京都市右京区西京極北大入町66番地へ移転。",
  },
];
