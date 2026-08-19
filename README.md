# slide

<div style="text-align: center;">
  <img src="./public/images/common/gopher_only.png" width="360" />
</div>

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

## レイアウト

`layouts/` に tamachi.go 用のレイアウトがあります。フロントマターの `layout` に指定して使います（`pnpm run gen` で生成される雛形は最初から一通り使っています）。

| layout | 用途 |
| --- | --- |
| `Cover` | 表紙（イベント名・日時・会場） |
| `Section` | 章区切り（見出しのみを想定、本文は載せない） |
| `End` | 締めのスライド |
| （指定なし） | 通常の本文スライド（`style.css` でブランドカラーを適用済み） |

配色はロゴ（`public/images/common/square.png`）から抽出したブランドカラーです。

- ティール `#00bfcf`
- 濃いティール `#008ca6`

OS/ブラウザのダークモードに引っ張られないよう `switch` が生成する `slides.md` に `colorSchema: light` を固定で入れています（`src` で読み込む `slides/*.md` 側に書いても効かないので注意）。

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

## 公開（GitHub Pages）

`main` に push すると GitHub Actions（`.github/workflows/deploy-pages.yml`）が `slides/` 配下の全イベントをビルドし、GitHub Pages にアーカイブとして公開します。

- 一覧: `https://tamachi-go.github.io/slide/`
- 各イベント: `https://tamachi-go.github.io/slide/slides/<名前>/`

初回のみ、リポジトリの Settings → Pages → Source を **GitHub Actions** に設定してください。

## PDF出力（CI Artifact）

`slides/` に変更のあった push / PR では `.github/workflows/export-pdf.yml` が変更されたスライドだけを PDF にエクスポートし、Actions の実行結果に Artifact として添付します。全件まとめて出力したい場合は Actions タブから `Export PDF` を手動実行（`workflow_dispatch`）してください。

## 誤字対策

cSpellの辞書に登録する単語は、[project-words.txt](./project-words.txt) に追加してください。
