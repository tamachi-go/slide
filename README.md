# slide

<div style="text-align: center;">
  <img src="./public/images/common/gopher_only.png" width="360" />
</div>

運営スライド管理しており、[Slidev](https://sli.dev/) で作成しています

[こちらにて公開中](https://tamachi-go.github.io/slide/)

## セットアップ

### 事前準備

pnpmで管理しているので入っていない場合は入れておいてください

```bash
npm install -g pnpm
pnpm -v
```

### Gitフック（誤字チェック）

コミット時に [lefthook](https://github.com/evilmartians/lefthook) でステージしたファイルに cSpell をかけます（CIの `cSpell` ワークフローと同じチェック）<br>
lefthook のバージョンは [mise](https://mise.jdx.dev) で `mise.toml` に固定しています。Node.js は mise も CI と同じ `.node-version` を読みます。Docker は不要です

clone後に一度だけ以下を実行してください

```bash
mise install                   # lefthook・Node.js（.node-version の版）を入れる
mise exec -- lefthook install  # Gitフックを設定
```

### 依存関係のインストール

インストール以外も依存関係の更新が必要な場合も同様のコマンドでおｋです

```bash
pnpm install
```

## スライドの作成・切り替え

スライドは `slides/<名前>.md` として1本ずつ管理し、実行時の入口となる `slides.md`（Git管理外）を `switch` コマンドで切り替えます

```bash
pnpm run gen -- 2026-08-20-tamachi-go-01      # slides/2026-08-20-tamachi-go-01.md を新規作成
pnpm run switch -- 2026-08-20-tamachi-go-01   # slides.md をそのファイルに切り替え
```

## レイアウト

`layouts/` に tamachi.go 用のレイアウトがあります<br>
formatterの `layout` に指定して使います（`pnpm run gen` で生成される雛形は最初から一通り使っています）

| layout | 用途 |
| --- | --- |
| `Cover` | 表紙（イベント名・日時・会場） |
| `Section` | 章区切り（見出しのみを想定、本文は載せない） |
| `End` | 締めのスライド |
| （指定なし） | 通常の本文スライド（`style.css` でブランドカラーを適用済み） |

配色はロゴ（`public/images/common/square.png`）から抽出したブランドカラーです

- ティール `#00bfcf`
- 濃いティール `#008ca6`

通常レイアウトの本文サイズは `1.6rem` で、`tamachi.goとは` の本文に合わせています表を含むスライドは Slidev 標準の `1.1rem` です

OS/ブラウザのダークモードに引っ張られないよう `switch` が生成する `slides.md` に `colorSchema: light` を固定で入れています（`src` で読み込む `slides/*.md` 側に書いても効かないので注意）

## 起動

```bash
pnpm run dev
```

`http://localhost:3030` で確認できます<br>
`switch` で指定したファイルを編集すると反映されます

## ビルド / エクスポート

```bash
pnpm run build           # 静的サイトとして出力
pnpm run build:all       # slides/ 配下の全イベントを dist/ にビルド（GitHub Pages と同じ）
pnpm run export -- <名前> # output/<名前>.pdf にエクスポート
```

## ビルドチェック（PR）

すべての PR で `.github/workflows/build.yml`（チェック名 `build`）が `pnpm run build:all` を実行し、GitHub Pages と同じ手順で全スライドがビルドできるかを確認します（公開はしません）<br>
Renovate の依存関係更新 PR で Slidev が壊れていないかもここで検知できます

## 公開（GitHub Pages）

`main` に push すると GitHub Actions（`.github/workflows/deploy-pages.yml`）が `pnpm run build:all` で `slides/` 配下の全イベントをビルドし、GitHub Pages にアーカイブとして公開します

- 一覧: `https://tamachi-go.github.io/slide/`
- 各イベント: `https://tamachi-go.github.io/slide/slides/<名前>/`

初回のみ、リポジトリの Settings → Pages → Source を **GitHub Actions** に設定してください

## PDF出力（CI Artifact）

`slides/` に変更のあった push / PR では `.github/workflows/export-pdf.yml` が変更されたスライドだけを PDF にエクスポートし、Actions の実行結果に Artifact として添付します<br>
全件まとめて出力したい場合は Actions タブから `Export PDF` を手動実行（`workflow_dispatch`）してください

## 依存関係の更新

- [Renovate](https://docs.renovatebot.com)（設定は `renovate.json`、共通設定は [tamachi-go/.github の renovate-config.json](https://github.com/tamachi-go/.github/blob/main/renovate-config.json)）: npm パッケージ・`package.json` の `packageManager`（pnpm）・`.node-version` の Node.js・`mise.toml` の lefthook を更新します。PR は月曜 0〜12 時台（JST）に作られ、状況は「Dependency Dashboard」issue で確認できます
  - リリースから 7 日（npm パッケージのメジャーは pnpm も含めて 14 日）経つまで PR を作りません。`.node-version` の Node.js は 7 日待ち、LTS のバージョンにだけ上げます。脆弱性修正は待たずに作ります
  - Slidev（`@slidev/*`）はまとめて 1 PR、devDependencies のマイナー・パッチもまとめて 1 PR にします。`@types/node` のメジャー更新は Dependency Dashboard で承認したときだけ作ります
- Dependabot（`.github/dependabot.yml`）: GitHub Actions のみ。action を上げる PR で `.github/workflows/actions.lock` も一緒に再生成するため

## 誤字対策

cSpellの辞書に登録する単語は、[project-words.txt](./project-words.txt) に追加してください

## ライセンス

コード（`components/`・`layouts/`・`scripts/`・`global-bottom.vue`・`style.css`・設定ファイルなど）は [MIT License](./LICENSE) です

スライド本文（`slides/*.md`）と画像（`public/images/`）は MIT License の対象外です

- 画像の権利はそれぞれの権利者に帰属します（スポンサー・他イベントのロゴやバナー、X のロゴなど）
- tamachi.go のロゴ・マスコット（`public/images/common/square.png`・`gopher_only.png`）は [tamachi-go/assets](https://github.com/tamachi-go/assets) のものです。Go Gopher のデザインは [Renée French](https://reneefrench.blogspot.com/) さんによるもので [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)、tamachi.go による改変部分は [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.ja) です。利用時のクレジット表記は [assets の README](https://github.com/tamachi-go/assets#ライセンス) を参照してください
