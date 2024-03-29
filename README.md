# Qin Todo

![Frame 9](https://user-images.githubusercontent.com/71614432/194071978-56cc21f3-a921-47cd-a3fc-744cebd3dae9.png)


# やれたらやる native-mobile repository

## 開発環境

1. clone する

   ```shell
   git clone -b develop --recursive https://github.com/do-it-if-i-can/native-mobile.git
   ```

1. パッケージのインストール

   ```shell
   yarn
   ```

1. アプリ起動

   ```shell
   yarn start
   ```

## 技術選定

- TypeScript
- React Native
- Expo
- React Navigation
- React Hot Toast
- Auth0
- Recoil
- GraphQL
- GraphQL Code Generator
- Apollo client
- Husky
- ESLint
- Prettier
- React Error Boundary
- React Native Reanimated

## アーキテクチャ

## コミットルール

### ブランチ

- main（本番環境用）
  - develop ブランチのみ、PullRequest & merge 可能
- develop（開発環境用）
  - main ブランチ以外、PullRequest & merge 可能
- 命名規則は以下に従う

`[feature, fix, refactor, doc, test]/zzz-zzz`

例： feature/ui-button

### コミットメッセージ

- Gitmoji を使用する

> https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode

例： ✨ Button コンポーネント作成

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

> 参考記事：https://zenn.dev/yoshiko/articles/99f8047555f700

- 🗂 src
  - 🗂 components
    - 🗂 screen
      - 🗂 modal
        - 🗂 XzzXzz
          - index.ts
          - XzzXzz.tsx
          - XzzXzz.modal.tsx
          - XzzXzz.stories.tsx
          - useXzzXzz.hook.ts
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
  - 🗂 functions
    - 🗂 zzzXzz
      - index.ts（zzzXzz 配下のファイルを export）
      - XXX_XXX.ts
    - zzzXzz.ts
  - 🗂 hooks
    - 🗂 zzzXzz
      - index.ts（zzzXzz 配下のファイルを export）
      - useXzzXzz.ts
    - useXzzXzz.ts
  - 🗂 screens
    - 🗂 auth
      - zzz_zzz.screen.tsx
      - zzz_zzz.screen.tsx
      - index.tsx（auth 内の navigation 定義）
    - 🗂 main
      - 🗂 sub
        - zzz_zzz.screen.tsx
        - zzz_zzz.screen.tsx
        - index.tsx（sub 内の navigation 定義）
      - zzz_zzz.modal.tsx
      - zzz_zzz.screen.tsx
      - index.tsx（main 内の navigation 定義）
    - index.tsx
    - 404.screen.tsx
    - zzz_zzz.modal.tsx
  - 🗂 types
    - index.d.ts（ReactNavigation 用型定義）
    - zzz-zzz.d.ts（パッケージ用型定義ファイル）
  - 🗂 styles
    - 🗂 zzzXzz
      - index.ts（zzzXzz 配下のファイルを export）
      - zzzXzz.ts
    - zzzXzz.ts
  - 🗂 utils
    - 🗂 zzzXzz
      - index.ts（zzzXzz 配下のファイルを export）
      - zzzXzz.ts
    - zzzXzz.ts
    - linkingConfiguration.ts
  - 🗂 stores
    - zzzXzz.ts
