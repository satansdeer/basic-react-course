---
path: "/lessons/styles"
date: "2017-11-07"
title: "Styling Components"
---

There are several options to style your components. By default `create-react-app` sets up `webpack` so it properly loads stylesheet files. In this course I encourage you to use what `create-react-app` provides.

Using them is super simple – you just define your stylesheet in a separate file and then import it in your component so it will be loaded.

For example create the `src/StyledComponent.css` with following contents

```css
.StyledComponent {
  margin: 20px;
  background-color: #ff0000;
  width: 100px;
  height: 100px;
}
```

Then create the `src/StyledComponent.js`, where you can use your style like this

```js
import React, { Component } from 'react';
import './StyledComponent.css'; 

class StyledComponent extends Component {
  render() {
    return <div className="StyledComponent" />;
  }
}
```

Add this component to your `App.js` render method.

Yay - you see the red square!

Other cool thing about the `create-react-native` css setup is that it post-processes you css files and for instance it adds vendor prefixes automatically, so you don't have to worry about it.
