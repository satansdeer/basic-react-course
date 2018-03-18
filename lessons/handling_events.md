---
path: "/lessons/handling-events"
date: "2017-11-07"
title: "Handling Events"
---

Handling events with React is very similar to handling events with DOM. But if with DOM events it's considered as a bad practice to apply events listeners in your html code – in React it's common practice and is totally fine.

Let's create a component. Create `src/EventsExample.js` with following code

```jsx
import React, { Component } from 'react'

class EventsExample extends React.Component {
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

export default EventsExample
```

Now add this component to your `src/App.js` layout.

As you can see – in React we use CamelCase notation rather than lowercase. So it's `onClick` instead of `onclick`.

Also keep in mind that React normalizes events, so they behave similarly in all browsers, but also it means that this is not the same kind of event that would fire if you would use `onclick` on your dom element and event handling works a bit differently. For example you can't return `false` frow your handler and have to call `event.preventDefault()` to prevent element default element behavior.
