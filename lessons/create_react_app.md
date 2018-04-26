---
path: "/lessons/create-react-app"
date: "2017-11-07"
title: "Create React App"
---

`youtube:https://www.youtube.com/embed/t52xUdcSxNs`

## Contents

* [Generating New Project](#generating_new_project)
* [The Folder Structure](#the_folder_structure)
* [Running The App](#running_the_app)

<a name="generating_new_project"></a>
## Generating New Project

We'll use `create-react-app` to set up the boilerplate. I totally recommend using it when starting the new project, it's easy to use and save lots of time.

Without `create-react-app` you'd have to manually set up webpack, babel, set up styles loading, hot-reload support, add boilerplate files and set up a testing environment.

It makes some technical decisions for you, but if you don't like them or you need some specific setup - you can always `eject` the app and use a custom setup. We won't cover ejecting process and manual configuration in this course.

In modern node versions you don't even need to install the `create-react-app` package. If your node version is equal to or higher than 6 - you'll have the `npx` package available.

'npx' allows you to run packages without installing them. With `create-react-app` it would look like this:

```sh
npx create-react-app react-app
```

If you have an older version – update it or install `create-react-app` globally and run it:

```bash
yarn add global create-react-app
create-react-app react-app
```

<a name="the_folder_structure"></a>
## The Folder Structure

By default `create-react-app` creates a handful of files, let's go through them.

In project root along with other files, it creates two folders `public` and `src`.

In `public` folder we have static files `index.html`, `favicon.ico` and `manifest.json`.

* `index.html` is our template, it contains page metadata, link to our `js` bundle and our layout with `<div id="root">` which we'll use later to render our app. 
* `favicon.ico` is basically an icon of your site, it is usually shown along with the site title on the tabs of your browser.
* `manifest.json` allows installing your web-app to the home screen of the device. It provides useful information like what icon should be used or what should be the app name.

In `src` folder there is `index.js`, `App.js`, test for `App.js`, bunch of `css` files, `logo.svg` and and `registerServiceWorker.js`.

* `index.js` is an entry point for our app. This is where `create-react-app` script starts to build your app from.
* `App.js` is our app's root component, we'll get back to it later.
* `registerServiceWorker.js` initializes a service worker for your app. Service workers are kind of proxies between your app and server, they intercept and modify navigation and resource requests. They allow you to improve your app experience on slow internet connections and even offline.

<a name="running_the_app"></a>
## Running The App

Let's modify our app a bit, you know, to feel like at home.

Open `src/App.js`, remove `logo.svg` import:

Also, let's clean up the `render` method. Make the file look like this:

```jsx
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

Now run the app. Switch back to the terminal and run `yarn start` (or `npm start` if you don't use yarn).

The script will start the server on 'localhost:3000', you should see the "Hello world" header.
