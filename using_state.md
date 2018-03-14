# Using State

Create new component. Let's call is `StateExample`. Open the `src/StateExample.js` and add the following code

```js
import React, { Component } from 'react'

class StateExample extends React.Component {
  handleClick(event){
    console.log(event)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}

export default StateExample
```

Let's make this compoenent count amount of clicks on our button. We'll need to store tha amount of clicks somewhere.

For this case React has default property `state` let's define our state by adding `constructor` method

```js
constructor(){
  super()
  this.state = {
    count: 0
  }
}
```

First we had to call `super` to be able to use `this`. This is just ES6 rules. Then we define our state. And as you can see, the state is actually just a plain object.

Now lets update our state and increment the `count` on every click.

Turns out that you can't do this directly. React has special method for it, called `setState`. 

Let's add it to our `handleClick` function.

```js
handleClick() {
  this.setState({
    count: this.state.count + 1
  })
}
```

If you run this code – you'll get an error because `this` in our function belongs to it's internal scope. In order to give `this` the scope of our compoenent – you have several options.

You can call `bind(this)` explicitly. Either in constructor

```
this.handleClick = this.handleClick.bind(this)
```

Or in your event prop definition `onClick={this.handleClick.bind(this)}`

Another option is to use fat arrow functions do define your handlers

```js
handleClick = event => {
  this.setState({
    count: this.state.count + 1
  })
}
```

This way your function will get the proper reference to `this` automatically.

Now let's display the value from our state.

Accessing state is very similar to accessing props, you just call `state` instead of `props`.

Add `div` where we'll display the clicks count

```js
<div>{`Count ${this.state.count}`}</div>
```

Click the button – the count number will increase.

The `setState` updates only the keys that you list in your updated object. For instance, if our initial `state` would contatain any other fields, like some text value – after we'd call `setState` with count field – that text key would remain unchanged.

Try to add some variable to your state and then update the state with `setState` method.