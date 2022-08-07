# このリポジトリについて
1. おおもとは　<code> > npx create-react-app . </code> コマンドで自動生成しました
2. [動画教材](https://youtu.be/nRCNL9T3J98)を参考にして不要なファイルおよびApp.cssの内容を削除しました

# ハンズオン解説

## -01 「タスクを追加」ボタンの作り方 
[🌵branch:step01](https://github.com/yuasys/js-react-tutorial/edit/step1/README.md)

1. 「タスクを追加」ボタンのonClick属性に _任意の関数名handleAddTodo_ を設定する

~~~html
    <button onClick={handleAddTodo} >タスクを追加</button>
~~~

2. 関数Appの中で _関数handleAddTodo_ を定義する

~~~javascript
const handleAddTodo = () => {
    //タスクを追加する
 }
~~~

3. タスクを入力するinput要素の入力値を取得する  
   (1)  useRefと呼ばれるhooksメソッドをreactから取得する
   
   ~~~javascript
   import {useRef} from "react":
   ~~~
   
    (2) 関数Appの中でuseRefの変数todoNameRef(変数名任意)を宣言する
    
    ~~~javascript
    const todoNameRef = useRef();
    ~~~
    
    (3) 取得したいinput要素にref属性を追加し、その値として任意のuseRef変数( _ここではtodoNameRef_ )を設定する
    
    ~~~html
    <input type="text" ref={todoNameRef} />
    ~~~
    

<hr/>

# HTML要素の復習

### `<label>`    
<a href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/label" target="_blank" rel=“noopener”>Mdnで詳しい解説を読む</a>

- `<label>` を `<input>` 要素に関連付けるには、 `<input>` に id 属性を設定しなければなりません。そして `<label>` に for 属性を設定して、値を input の id と同じにします。

~~~html
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" " id="cheese">
~~~
- 他の方法として、 `<input>` を直接 `<label>` の内側に入れることができますが、この場合は関連付けが明確なので、 for および id 属性は必要ありません。

~~~html
<label>Do you like peas?
<input type="checkbox" name="peas">
</label>
~~~


<hr/>
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
