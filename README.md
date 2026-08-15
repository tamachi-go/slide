# slide

運営スライド管理しており、[Slidev](https://sli.dev/) で作成しています

## セットアップ

### 事前準備

pnpmで管理しているので入っていない場合は入れておいてください

```bash
npm install -g pnpm
pnpm -v
```

### 依存関係のインストール

インストール以外も依存関係の更新が必要な場合も同様のコマンドでおｋです

```bash
pnpm install
```

## スライドの作成・切り替え

スライドは `slides/<名前>.md` として1本ずつ管理し、実行時の入口となる `slides.md`（Git管理外）を `switch` コマンドで切り替えます。

```bash
pnpm run gen -- 2026-08-20-tamachi-go-01      # slides/2026-08-20-tamachi-go-01.md を新規作成
pnpm run switch -- 2026-08-20-tamachi-go-01   # slides.md をそのファイルに切り替え
```

## 起動

```bash
pnpm run dev
```

`http://localhost:3030` で確認できます。`switch` で指定したファイルを編集すると反映されます

## ビルド / エクスポート

```bash
pnpm run build           # 静的サイトとして出力
pnpm run export -- <名前> # output/<名前>.pdf にエクスポート
```
