---
path: "/lessons/lists"
date: "2017-11-07"
title: "Rendering Lists"
---

Let's start with an example. Create the `src/ListExample.js` in our project, and add the following

```js
import React from 'react'

const ListExample = ({ items }) => {
  const itemElements = items.map((item, index) => (<li key={index} >{item}</li>))

  return (
    <ul>
      {itemElements}
    </ul>
  )
}
```

Now add this lines to your `srcApp.js` render method

```js
<ListExample items={['foo', 'bar', 'bazz']}/>
```

Here we just mapped through the items array and assigned the result to `itemElements` variable. It's that simple. The only thing to note is that you need to specify keys for your elements.

In our example we used `index` as a key. You can do it as well, but only if you are sure that the order of your items won't change. Thats important, otherwise you might have significant issues with performance.

More preferred way is to have some unique field in your items that you can use as a key. 
