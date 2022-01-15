# emoji-folder-structure

## 概要

フォルダー、ファイルの構造を絵文字付きのテキストにするソフトです。  
ブログなどでフォルダー構造を表示するとき使えるかなと思います。  
windows専用です。

出力例

```
📁vue3-vite-project
 📄.gitignore
 📁.vscode
  📄extensions.json
 📄index.html
 📄package.json
 📁public
  📄favicon.ico
 📄README.md
 📁src
  📄App.vue
  📁assets
   📄logo.png
  📁components
   📄HelloWorld.vue
  📄env.d.ts
  📄main.ts
 📄tsconfig.json
 📄vite.config.ts
```

windowsでのみ動きます.


## 使い方

リリースから実行ファイルをダウンロードし、解凍して実行します。

「フォルダーを選択する」ボタンからフォルダー構造を取得したいフォルダーを指定します。
対象のフォルダーを指定すると、フォルダーの構造が下側に表示されます。

コピーボタンでコピー出来ます。

## 開発

ライブラリインストール
```
npm install
```

開発

```
npm run electron:serve
```

ビルド

```
npm run electron:build
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

