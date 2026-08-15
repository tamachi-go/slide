#!/usr/bin/env node
import { existsSync, writeFileSync } from 'node:fs'

const name = process.argv.slice(2).find(arg => arg !== '--')

if (!name) {
  console.error('使い方: pnpm run switch -- <スライド名>')
  console.error('例:     pnpm run switch -- 2026-08-20-tamachi-go-01')
  process.exit(1)
}

const filePath = `slides/${name}.md`

if (!existsSync(filePath)) {
  console.error(`エラー: スライドファイル "${filePath}" が見つかりません`)
  process.exit(1)
}

writeFileSync('slides.md', `---\nsrc: ${filePath}\ncolorSchema: light\n---\n`)
console.log(`slides.md を ${filePath} に切り替えました`)
