# 姫路宿ポータル

姫路の小さな宿の集客プラットフォーム。各宿のブランドを尊重しつつ、周辺観光・グルメ・モデルプランなどの滞在価値情報を集約・配信する。

- **公開URL**: https://stay.himejistyle.jp
- **案件番号**: IT022
- **案件フォルダ**: `G:\マイドライブ\ハウスインフォ\01 事業部\03 IT事業\02 進行中物件\IT022-姫路宿ポータル\`

## 技術スタック

- [Astro](https://astro.build/) 5
- MDX（記事フォーマット）
- Tailwind CSS 4
- TypeScript（strict）
- GitHub Pages（GitHub Actions経由でデプロイ）

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # ビルド検証（dist/）
npm run preview  # ビルド成果物のローカル確認
```

## デプロイ

`main` ブランチへの push で GitHub Actions が自動ビルド & デプロイ。`.github/workflows/deploy.yml` を参照。

## ディレクトリ構成

```
src/
├── pages/        ルーティング（.astro / .md / .mdx）
├── layouts/      共通レイアウト
├── components/   再利用コンポーネント
├── content/      Content Collections（記事）
└── styles/       グローバルCSS（Tailwindエントリ）
public/
├── CNAME         カスタムドメイン（stay.himejistyle.jp）
└── favicon.svg
```
