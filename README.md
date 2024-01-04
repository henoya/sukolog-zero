# sukolog-zero frontend

`sukolog-zero` is Bluesky's log storage service.

This repository is the frontend of `sukolog-zero`.

[README 日本語版](README.ja.md)

## Framework and language

We use [Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/) as frameworks.

- For testing purposes, we have introduced Svelte 5, which is in preview stage. Therefore, dependent packages include packages that are not in the release version.
- Also, some packages are not yet supported, so warnings may appear at build time.

TypeScript is used as the programming language.

## Execution Environment

```bash
$ node --version
v20.10.0
$ corepack --version
0.24.0
$ yarn --version
4.0.2
```

I am using `node` 20.x series, `yarn` 4.0.x as package manager, and `corepack` as package manager/manager.

It is registered in `package.json` as `"packageManager": "yarn@4.0..."`.

### installation

```bash
$ yarn
```

### Execution

```bash
$ yarn run dev

# open a browser
$ yarn run dev -- --open
```

### build

```bash
$ yarn run build
```
