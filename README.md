# できたらやる native-mobile repository

## 開発環境

## 技術選定

## アーキテクチャ

## コミットルール

- Gitmoji を使用する

## 命名規則

### 関数

**イベント系**

`const onXzzXzz = () => {};`

- 接頭辞に「on」を付ける

### 変数

`const zzzXzz = '';`

- lowerCamelCase で宣言する

### 型定義

`type XzzXzz = {};`

- type を使用する
- UpperCamelCase で宣言する

## ディレクトリ構成

- src フォルダの直下は、複数形フォルダ名を定義する
- src フォルダの二階層下以降は、単数形フォルダ名を定義する

> 参考記事 https://zenn.dev/yoshiko/articles/99f8047555f700

- 🗂 src
  - 🗂 compoennts
    - 🗂 modal
      - 🗂 XzzXzz
        - index.ts
        - XzzXzz.tsx
        - XzzXzz.modal.tsx
        - XzzXzz.stories.tsx
        - useXzzXzz.hook.ts
    - 🗂 screen
      - 🗂 XzzXzz
        - index.ts
        - XzzXzz.tsx
        - XzzXzz.screen.tsx
        - XzzXzz.stories.tsx
        - useXzzXzz.hook.ts
      - 🗂 User
    - 🗂 model
      - 🗂 Xzz
        - 🗂 Xzz
          - index.ts
          - Xzz.tsx
          - Xzz.stories.ts
      - 🗂 User
    - 🗂 ui
      - 🗂 XzzXzz
        - index.ts
        - XzzXzz.tsx
        - Xzz.stories.tsx
      - 🗂 Button
      - 🗂 Layout
    - 🗂 functional
      - 🗂 Xzz
        - index.ts
        - Xzz.tsx
      - 🗂 AuthProvider
      - 🗂 ErrorBoundary
  - 🗂 graphql
    - 🗂 query
      - zzzXzz.query.gql（query のみ）
      - zzzXzz.mutation.gql（mutation のみ）
    - codegen.yml
  - 🗂 constants
    - 🗂 zzzXzz
      - index.ts（zzzXzz 配下のファイルを export）
      - XXX_XXX.ts
      - XXX_XXX.ts
    - XXX_XXX.ts
  - 🗂 functions
    - 🗂 zzzXzz
      - index.ts（zzzXzz 配下のファイルを export）
      - XXX_XXX.ts
      - XXX_XXX.ts
    - zzzXzz.ts
  - 🗂 hooks
    - useXzzXzz.ts
  - 🗂 navigations
    - LinkingConfiguration.ts
    - index.tsx
  - 🗂 screens
    - 🗂 auth
      - XzzXzz.screeen.tsx
      - XzzXzz.screeen.tsx
      - index.tsx（auth 内の navigation 定義）
    - 🗂 main
      - 🗂 sub
        - XzzXzz.screeen.tsx
        - XzzXzz.screeen.tsx
        - index.tsx（sub 内の navigation 定義）
      - XzzXzz.screeen.tsx
      - XzzXzz.screeen.tsx
      - index.tsx（main 内の navigation 定義）
    - 404.screen.tsx
  - 🗂 types
    - index.d.ts（ReactNavigation 用型定義）
    - zzz-zzz.d.ts（パッケージ用型定義ファイル）
  - 🗂 utils
    - 🗂 zzzXzz
      - index.ts（zzzXzz 配下のファイルを export）
      - XXX_XXX.ts
      - XXX_XXX.ts
    - zzzXzz.ts
