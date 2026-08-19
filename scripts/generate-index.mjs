#!/usr/bin/env node
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'

const base = process.env.PAGES_BASE ?? '/slide/'

const files = readdirSync('slides')
  .filter(f => f.endsWith('.md'))
  .sort((a, b) => b.localeCompare(a))

function extractTitle(content, fallback) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match)
    return fallback
  const titleLine = match[1].split('\n').find(line => line.startsWith('title:'))
  if (!titleLine)
    return fallback
  return titleLine.replace('title:', '').trim() || fallback
}

const items = files.map((f) => {
  const name = f.replace(/\.md$/, '')
  const content = readFileSync(`slides/${f}`, 'utf-8')
  const title = extractTitle(content, name)
  return { name, title }
})

const listHtml = items
  .map(({ name, title }) => `      <li><a href="${base}slides/${name}/">${title}</a></li>`)
  .join('\n')

const html = `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <title>tamachi.go slides</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Hiragino Sans', sans-serif;
      background: #ffffff;
      color: #00232a;
      max-width: 640px;
      margin: 80px auto;
      padding: 0 24px;
    }
    h1 {
      border-bottom: 4px solid #00bfcf;
      padding-bottom: 0.4rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 12px 0;
    }
    a {
      color: #008ca6;
      font-size: 1.2rem;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>tamachi.go slides</h1>
  <ul>
${listHtml}
  </ul>
</body>
</html>
`

mkdirSync('dist', { recursive: true })
writeFileSync('dist/index.html', html)
console.log(`dist/index.html を生成しました（${items.length}件）`)
