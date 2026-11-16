#!/usr/bin/env bash
# slides/*.md の全デッキを dist/ にビルドし、アーカイブ一覧ページを生成する
# GitHub Pages 公開（deploy-pages.yml）と PR のビルドチェック（build.yml）で共通利用
set -euo pipefail

cd "$(dirname "$0")/.."

mkdir -p dist/slides
for f in slides/*.md; do
  name=$(basename "$f" .md)
  pnpm run switch -- "$name"
  pnpm exec slidev build --base "/slide/slides/$name/" --out "dist/slides/$name" --router-mode hash
done

node scripts/generate-index.mjs
