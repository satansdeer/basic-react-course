# Create React App

I recommend to use `create-react-app` to set up the environment. It will save you a lot of time.

Without `create-react-app` you'd have to manually set up webpack, babel, set up styles loading, hot-reload support, add boilerplate files and set up testing environment.

Currently you don't even need to install `create-react-app`. If you have modern node (>=6) – you can use `npx`. With npm you don't have to install packages and you can just run them.

So if you have modern node – just run:

```sh
npx create-react-app react-app
```

If you have older version – update it or install `create-react-app` globally and run it:

```sh
yarn add global create-react-app
create-react-app react-app
```

## Getting Familiar With File Structure

By default `create-react-app` creates a handflul of files, let's go through them.

In project root along with other files it creates two folders `public` and `src`.

In `public` folder we have static files `index.html`, `favicon.ico` and `manifest.json`.

* `index.html` is our template, it contains page metadata, link to our `js` bundle and our layout with `<div id="root">` which we'll use later to render our app. 
* `favicon.ico` is basically an icon of your site, it is usuall shown along with site title on your browsers tabs.
* `manifest.json` allows to install your web-app to the homescreen of the device. It provides useful information like what icon should be used or app name to display.

In `src` folder there is `index.js`, `App.js`, test for `App.js`, bunch of `css` files, `logo.svg` and and `registerServiceWorker.js`.

* `index.js` is an entry point of our app. This is wrere `create-react-app` script starts to build your app from.
* `App.js` is our app's root component, we'll get back to it later.
* `registerServiceWorker.js` initializes a service worker for your app. Service workers are kind of proxies between your app and server, they intercept and modify navigation and resource requests. They allow to make your app available on slow interrnet or even offline. 

Let's modify our app a bit, you know, to feel like at home.

Open `src/App.js`, remove `logo.svg` import:

Also let's clean up the `render` method. Make the file look like this:

```js
import React, { Component } from "react";

class App extends Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

export default App;
```

As we don't use `logo.svg` anymore – remove it:

```sh
rm src/logo.svg
```

Now run the app. Switch back to terminal and run `yarn start` (or `npm start` if you don't use yarn).

The script will start the server on 'localhost:3000', you should see the "Hello world" header.
