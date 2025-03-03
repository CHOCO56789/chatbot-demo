# チャットボットアプリケーション

このプロジェクトはReactを使用した対話型チャットボットアプリケーションです。ユーザーからの質問に対して事前に設定された回答を提供し、必要に応じて外部リンクへの誘導やお問い合わせフォームを表示します。

## セットアップ方法

1. リポジトリをクローンする
   ```
   git clone [リポジトリのURL]
   ```

2. 依存パッケージをインストールする
   ```
   npm install
   ```

3. アプリケーションを起動する
   ```
   npm start
   ```
   ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

## 機能

- 対話型チャットインターフェース
- 複数の選択肢から回答を選択
- 外部リンクへの誘導
- お問い合わせフォーム

## プロジェクト構成

- `src/App.jsx`: メインのアプリケーションコンポーネント
- `src/dataset.js`: チャットの質問と回答のデータセット
- `src/components/`: UIコンポーネント（Chats, AnswersList, FormDialog）

# Create React Appについて

このプロジェクトは [Create React App](https://github.com/facebook/create-react-app) でブートストラップされています。

## 利用可能なスクリプト

プロジェクトディレクトリで以下のコマンドを実行できます：

### `npm start`

開発モードでアプリを実行します。\
ブラウザで [http://localhost:3000](http://localhost:3000) を開いて表示できます。

コードを変更すると、ページは自動的に再読み込みされます。\
コンソールに構文エラーも表示されます。

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
