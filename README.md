# 京環メンテナンス コーポレートサイト

Next.js 14 + Tailwind CSS + Framer Motion で構築したコーポレートサイト。

## セットアップ

```bash
npm install
npm run dev
```

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ホームページ
│   ├── company/            # 会社概要
│   │   ├── page.tsx
│   │   └── message/page.tsx  # 代表あいさつ
│   ├── rakuyuz/page.tsx    # ラクユーZ工法（3Dモデル表示）
│   ├── strength/page.tsx   # 事業内容・強み
│   ├── works/page.tsx      # 施工実績
│   ├── recruit/page.tsx    # 採用情報
│   └── contact/page.tsx    # お問い合わせ
├── components/
│   ├── ui/
│   │   ├── Button.tsx      # Button, SectionHeader, Badge
│   │   └── ModelViewer.tsx # Three.js 3Dモデルビューア
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── RakuyuzSection.tsx
│       ├── AboutSection.tsx
│       └── CTASection.tsx
├── lib/
│   ├── animations.ts       # Framer Motion variants
│   └── utils.ts            # ユーティリティ、会社データ
├── hooks/
│   └── useAnimations.ts    # カスタムフック
└── styles/
    └── globals.css         # Tailwind + グローバルCSS
```

## 3Dモデルの追加方法

### 1. モデルファイルの配置

GLB形式の3Dモデルを `public/models/` ディレクトリに配置してください：

```
public/
└── models/
    ├── auto-pump.glb       # 自動制御ポンプ
    ├── plug-system.glb     # 通水プラグシステム
    └── low-noise-unit.glb  # 低騒音排水ユニット
```

### 2. モデルの設定（rakuyuz/page.tsx）

`pumpSystems` 配列でモデルの情報を定義しています：

```typescript
const pumpSystems = [
  {
    id: "auto-pump",
    name: "自動制御ポンプ",
    description: "センサーにより水位を検知し、自動で排水を制御。24時間無人運転が可能です。",
    modelPath: "/models/auto-pump.glb",  // ← このパスを変更
  },
  // ...
];
```

### 3. Three.js ModelViewer コンポーネント

`src/components/ui/ModelViewer.tsx` で3Dモデルを表示します。

**対応フォーマット**: GLB/GLTF

**機能**:
- マウスドラッグで回転
- スクロールでズーム
- 自動センタリング・スケーリング
- ローディング状態表示
- エラーハンドリング

### 4. モデル最適化のヒント

- ファイルサイズは5MB以下推奨
- ポリゴン数は10万以下推奨
- テクスチャは2048x2048以下
- [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) でdraco圧縮可能

## ページ一覧

| パス | ページ |
|------|--------|
| `/` | ホーム |
| `/company` | 会社概要 |
| `/company/message` | 代表あいさつ |
| `/rakuyuz` | ラクユーZ工法（3Dモデル表示） |
| `/strength` | 事業内容・強み |
| `/works` | 施工実績 |
| `/recruit` | 採用情報 |
| `/contact` | お問い合わせ |

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **3D**: Three.js
- **Language**: TypeScript

## デザインシステム

### カラーパレット

- **Primary**: Navy (#1a2640 ~ #f5f7fa)
- **Accent**: Blue (#006dc4 ~ #f0f7ff)
- **Gold**: (#9a8432 ~ #e8d48a) - 受賞バッジ用

### タイポグラフィ

- **Font**: Noto Sans JP
- **Weights**: 300, 400, 500, 600, 700

### アニメーション

- シンプルなフェードイン/アップ
- Duration: 0.4-0.5s
- Easing: ease-out
