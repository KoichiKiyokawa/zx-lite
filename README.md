# zx-lite

> A light-weight version of google/zx

[![codecov](https://codecov.io/gh/KoichiKiyokawa/type-safe-path/branch/main/graph/badge.svg?token=61F6FRPXKN)](https://codecov.io/gh/KoichiKiyokawa/type-safe-path)

## Usage

```sh
npm i -D @kiyoshiro/zx-lite
```

Write your script in `.mts` file.

```ts
// script.mts
import "@kiyoshiro/zx-lite/globals"

// Look. Different from google/zx, you can omit `await`
$`sleep 1`
$`echo Hello, world!`
```

Run your script.

```sh
npx zx script.mts
```

## Features

- 🔋 Run TS file only with this library(google/zx needs ts-node or other TS runner).
