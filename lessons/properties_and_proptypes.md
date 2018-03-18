---
path: "/lessons/properties-and-proptypes"
date: "2017-11-07"
title: "Properties And Proptypes"
---

Our `Header` component can only display the `Hello world` text. Let's make it possible to change it by passing the `prop` to it.

Open `src/Header.js` and add the following line before the `return` statement

```js
const { text } = this.props;
```

Now remove the `Hello world` text from between the `<h1>` tags and put this expression instead

```js
{ text }
```

As we don't pass the `text` prop to our component now – you'll see that our app renders an empty page. We can use `propTypes` to prevent our component from being used with wrong property type or make some properties required.

First, let's tell that our `text` prop is expecting a `string`

Add the following code to our component definition

```js
Header.PropTypes = {
  text: React.PropTypes.string,
}
```

Now let's make this prop required. It's easy – just add `required` in the end

```js
text: React.PropTypes.string.required,
```

The app will throw an error. Let's fix it by providing the `text` in our `App` component.

```js
<Header text="Hello world"/>
```

Prop types can be used to restrict to certain types of data or make them required. You can also provide default values for some of your component's properties by defining `defaultProps`.

```js
Header.defaultProps = {
  text: "Default header"
}
```
