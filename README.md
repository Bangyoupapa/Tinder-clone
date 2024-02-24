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


在開始建置tinder-clone，選擇免費的firebase做成後端的建置(放置人物的資料和照片）。
我選擇用Create-React-App來做這次的app，因為它已經幫我們寫好很多事情了。

在index.css先讓margin:0，來避免掉一開始內建會給的margin（設計網頁會比較輕鬆）

在App.js，架構會分成Header,TinderCards,Buttons, ChatScreen, Individual ChatScreen。

首先先來寫Header.js。為了要有tinder的圖案，我們需要先到material－UI（要注意版本）。
在寫這邊時，我有用emotion寫，比較相容。
在寫這邊的CSS，我先用display:flex，這樣圖案才會乖乖排成一列。接著用justify-content:space-between，讓內容可以在中間，而兩個圖案可以卡在最外邊兩側。最後，
我用border-bottom:1px solid加顏色，在圖案下方畫一個淺淺的分割線。
再來，我要跑出tinder logo，基本上就是把圖案存在src(source)的images file裡，再輸入進來。
在我修改logo的大小時，object-fit:contain可以讓圖案維持原本的比例而不會跑掉。
font-size:large讓他變大一點點。
header的css再加align-items:center，可以讓圖案全部水平對齊。
為了讓按鍵在按的時候有按下去的感覺，我從material-ui import IconButton，並讓他夾著我原本的按鍵。















在tinder clone被做完以後，接下來就是製作出docker image。其實那之前還要加一堆有的沒的。

cloud build 要找到他的service account還真不容易，你看我還要弄那些有的沒的，點開右上角google自己送的東東。
