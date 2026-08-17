#!/usr/bin/env node
import { existsSync, writeFileSync } from 'node:fs'
import { createInterface } from 'node:readline'

const name = process.argv.slice(2).find(arg => arg !== '--')

if (!name) {
  console.error('使い方: pnpm run gen -- <スライド名>')
  console.error('例:     pnpm run gen -- 20260820')
  process.exit(1)
}

const filePath = `slides/${name}.md`

if (existsSync(filePath)) {
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  const answer = await new Promise(resolve => rl.question(`"${filePath}" は既に存在します。上書きしますか？ (y/N): `, resolve))
  rl.close()

  if (!/^y(es)?$/i.test(answer)) {
    console.log('生成をキャンセルしました')
    process.exit(0)
  }
}

const content = `---
theme: seriph
title: tamachi.go_#0
layout: Cover
---

# tamachi.go #1

YYYY-MM-DD(DAY) hh:mm〜

会場：会場名

---
layout: Section
---

# 見出し

内容

---
layout: End
---

# ありがとうございました

tamachi.go
`

writeFileSync(filePath, content)
console.log(`${filePath} を生成しました`)
