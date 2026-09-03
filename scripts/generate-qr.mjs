#!/usr/bin/env node

import { mkdirSync } from 'fs';
import { dirname } from 'path';
import QRCode from 'qrcode';

const url = process.argv[2];
const outputPath = process.argv[3];

if (!url || !outputPath) {
  console.error('❌ エラー: 引数が不足しています');
  console.error('使用方法: pnpm qr <URL> <出力パス(public/images/からの相対パス)>');
  console.error('例: pnpm run qr https://tamachi-go.github.io/slide/ 20260827/slide_qr.png');
  process.exit(1);
}

const filePath = `public/images/${outputPath}`;

mkdirSync(dirname(filePath), { recursive: true });

await QRCode.toFile(filePath, url, {
  width: 660,
  margin: 2,
});

console.log(`✅ ${filePath} を生成しました (${url})`);
