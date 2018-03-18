---
path: "/lessons/using-refs"
date: "2017-11-07"
title: "Using Refs"
---

The normal way of how React component can affect its children – is by passing `props` to it. While this declarative way is preferred – it's not always possible.

For example what if you have text input and you need to set focus on it programmatically, or play/pause video element?

For all those cases you can use `ref`.

Defining refs is super simple, you just assign it to a variable and then you can reference it in your methods functions

```js
import React, { Component } from 'react'

class InputFocusExample extends React {
  handleClick() {
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <input
          ref={(input) => { this.textInput = input; }}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}
```

Actually you can event pass it to other components if needed.

While you can add `ref` to custom components – it's important to note that those components shold be class based. You can't assign `ref` to stateless components, because they don't have instances.
