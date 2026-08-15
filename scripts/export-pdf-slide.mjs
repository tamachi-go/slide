#!/usr/bin/env node
import { mkdirSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

const name = process.argv.slice(2).find(arg => arg !== '--')

if (!name) {
  console.error('使い方: pnpm run export -- <ファイル名>')
  console.error('例:     pnpm run export -- 2026-08-20-tamachi-go-01')
  process.exit(1)
}

mkdirSync('output', { recursive: true })

const result = spawnSync(
  'pnpm',
  ['exec', 'slidev', 'export', '--output', `output/${name}.pdf`, '--per-slide'],
  { stdio: 'inherit' },
)

process.exit(result.status ?? 1)
