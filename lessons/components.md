---
path: "/lessons/components"
date: "2017-11-07"
title: "Components"
---

## Contents

* [What Is Component](#what_is_component)
* [Class Components](#class_components)
* [Functional Components](#functional_components)
* [Let's Make First Component](#first_component)

<a name="what_is_component" style="display: block; position: relative; top: -150px"></a>
## What Is Component

Components are basic building blocks of react application. Each component takes some inputs through `props` and returns react nodes (other components or elements) describing what should be displayed on the screen.

Essentially when building react application - you define a tree, starting with your root component and then returning components that return other components, that return other components... Until you've described the whole application.

![component tree](/component-tree.jpg)

<a name="class_components" style="display: block; position: relative; top: -150px"></a>
## Class Components

One of the ways to define React components is to use classes. You are already familiar with it. For example: `src/App.js` is react component and it is defined as a class extending `React.Component`.

```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
```

Class components have method `render()` that should return their layout.

This is the most "powerful" way to define React components. You have control over it's lifecycle (when it's initialized, mounted, unmounted) and also you can have internal state.

We'll talk about React component [lifecycle methods](/lessons/react-lifecycle-methods) and [state](using-state) in next chapters, for now remember a simple rule of thumb:

> Use class components when you need to have internal state.

<a name="functional_components" style="display: block; position: relative; top: -150px"></a>
## Functional Components

In most cases __class component__ is an overkill. When component doesn't have internal state and you don't need to control it's __lifecycle__ - you can define component as a function.

This function will accept `props` attribute and return some layout.

```jsx
function SomeComponent() {
    return <div>Foo bar</div>;
}
```

This is most simple and straightforward way. Just define a function that accepts `props` and return some `JSX`.

<a name="first_component" style="display: block; position: relative; top: -150px"></a>
## Let's Make First Component

Create a new file `src/Header.js`. This is very simple component, we we'll define it as a function.

Make it look like this:

```jsx
import React from 'react'

export default () => {
	return <h1>Hello world</h1>
}
```

Now open your `src/App.js` and import our newly created component.

Remove the line `<h1>Hello world</h1>` and put `<Header />` instead.

Congratulations, you've just defined and used your first custom react component.
