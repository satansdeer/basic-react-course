---
path: "/lessons/jsx"
date: "2017-11-07"
title: "JSX"
---

## Contents

* [JSX Syntax](#the_syntax)
* [Why Import React](#why_import_react)

<a name="the_syntax"></a>
## JSX Syntax

As you can see `jsx` looks pretty much like `html`. But keep in mind that it is not `html`.

Here are a few key differences

* `className` instead of `class` attribute. `class` is reserved word in javascript, and as you remember your `jsx` code will be transpiled to javascript in the end. So we use `className` instead of `class`. It looks like this `<div className="awesome-class"></div>`.
* All the attributes with a dash in the name become camel-cased instead. 
* User-defined components should always start with capital letter. This also allows to easily tell when you see custom components or something that just represents html element.
* You can pass javascript expressions as attributes values. To do this wrap your expression into curly braces. For example `<div tabIndex={ 1 + 2 }></div>`.
* You can use the javascript expression as components child. `<div>{ 1 + 1 }</div>`. It will be evaluated so in your browser you'll see `<div>2</div>`

But the main difference is that `jsx` is actually a javascript expression. It evaluates to regular javascript object. This means that you can do anything that you could do with a regular javascript object. You can assign it to a variable or constant, use inside `if` statements and `for` loops and return from functions.

<a name="why_import_react" style="display: block; position: relative; top: -150px"></a>
## Why Import React

Open the `src/App.js` file. Notice that we imported `React` but actually never use it? Actually, this is an illusion. Usage of `React` module is abstracted from us by the `jsx` syntax.

Look at the `render` method

```jsx
render() {
  return (
    <h1>Hello world!</h1>
  );
}
```

It is not valid javascript. To make it available for our browser to interpret – we have an additional step when babel converts it to javascript code. So after `babel` will convert this script the return statement will look like this

```js
return React.createElement(
    "h1",
    null,
    "Hello world"
  );
```

And this is why you need to have `React` imported. Your component is using it _implicitly_.

This also means that you can write your react code using plain javascript syntax. It's totally impractical though.
