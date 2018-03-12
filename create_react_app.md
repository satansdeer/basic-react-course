# Create React App

I recommend to use `create-react-app` to set up the environment. It will save you a lot of time.

Without `create-react-app` you'd have to manually set up webpack, babel, set up styles loading, hot-reload support, add boilerplate files and set up testing environment.

Currently you don't even need to install `create-react-app`. If you have modern node (>=6) – you can use `npx`. With npm you don't have to install packages and you can just run them.

So if you have modern node – just run:

```sh
npx create-react-app react-app
```

And if you have older version – update it or install `create-react-app` globablly and run it:

```sh
yarn add global create-react-app
create-react-app react-app
```

## Remove Unnecessary Files

By default `create-react-app` creates a handflul of files, adds some styles and the logo image. We don't need them so run this command and remove those files:

```sh
rm src/App.css src/index.css src/logo.svg src/registerServiceWorker.js
```

Good, now we need to remove references to those files.

Open `src/index.js` and remove the line `import './index.css'.

In the end of file there is a line `registerServiceWorker()`, this is useful if you need to add caching for your app. For instance if you need to make your app available for offline usage or for users with slow networks. We don't need it now so just remove this line, also remove the `import` statement.

Your `src/index.js` should look like this:

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

Then open `src/App.js`, remove these lines:

```js
import './App.css'
import './logo.svg'
```

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

Now run the app. Switch back to terminal and run `yarn start`.

The script will start the server on 'localhost:3000', you should see the "Hello world" header.
