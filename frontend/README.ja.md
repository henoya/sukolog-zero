# sukolog-zero frontend

sukolog-zero は Bluesky のログ保存サービスです。

このリポジトリは、sukolog-zero のフロントエンド部分です。

## フレームワークと言語

フレームワークとして [Svelte](https://svelte.dev/) および [SvelteKit](https://kit.svelte.dev/) を使用しています。

- 試験的に、プレビュー段階の Svelte 5 を導入しています。そのため、依存パッケージにリリースバージョンではないパッケージが含まれています。
- また、一部のパッケージが未対応のため、ビルド時に警告が表示されたりします。

プログラム言語としては、TypeScript を使用しています。

## 実行環境

```bash
$ node --version
v20.10.0
$ corepack --version
0.24.0
$ yarn --version
4.0.2
```

node は 20.x 系統、パッケージマネージャとして yarn 4.0.x を使用していますが、パッケージマネージャ・マネージャとして corepack を使用しています。

`package.json` に `"packageManager": "yarn@4.0..."` として登録しています。

### インストール

```bash
$ yarn
```

### 実行

```bash
$ yarn run dev

# ブラウザが開きます
$ yarn run dev -- --open
```

### ビルド

```bash
$ yarn run build
```
