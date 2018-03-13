# Conditional Rendering

Let's imagine that we need to have a component that takes some boolean prop and then renders one or another template depending on it.

Create new component `Conditional Example` with following code

```
import React, { Component } from 'react';

class ConditionalExample extends Component {
  render() {
    const { showUnicorn } = this.props;
  }
}

ConditionalExample.PropTypes = {
    showUnicorn: React.PropTypes.boolean
}

export default ConditionalExample;
```

So how do we render template conditionally? Here are two options.

You can two multiple return statements inside your components render method.

```js
render(){
  const { showUnicorn } = this.props;
  if(showUnicorn){
    return (
      <div>'Here is a unicorn: 🦄'</div>
    )
    return (<div>Sorry, no unicorn for you.</div>)
  }
}
```

It will work if you need to render completely different layout depending on some prop. But what if you need to conditionally render only part of the template?

Here is another option you can use javascript ternary operator inside the template.

As you remember you can use javascript expressions inside `jsx` if you enclose them in curly braces. Also, you should remember that `jsx` is, in the end, a javascript expression as well so it can be used as an argument to ternary operator. Like this

```js
render(){
  const { showUnicorn } = this.props;
  return(
    <div>
      { showUnicorn
        ? <div>'Here is a unicorn: 🦄'</div>
        : <div>Sorry, no unicorn for you.</div>
      }
    </div>
  )
}
```