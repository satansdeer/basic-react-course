---
path: "/lessons/stateless-components"
date: "2017-11-07"
title: "React Components, Pure and Stateless"
---

In all previous examples we always created components as classes, extending the `React.Component`. Actually it's overkill for a lot of cases.

Here, I want to present pure stateless functional component. Here is how our header component could look.

```js
const HeaderCompoenent = {text} => <h1>{text}</h1>
```

These components are often referred as pure, stateless or functional. You can call them however you like, in this course I'll call them functional.

Anyway, the idea of these components is super simple. They take props and render the layout depending on them. No state, no lifecycle hooks. Pure and deterministic. For one input there is always one output, this makes them super easy to test.

In react functional components are being called with param `props` that you can break into specific props using destructuring assignment, like in that `HeaderComponent` example. An alternative (less beautiful and practic) would be

```js
const HeaderComponent = props => <h1>{props.text}</h1>
```

But it is much more useful to destructurize props right in function declaration because it makes used props more explicit. You don't have to search inside your layout what props did you actually use here.

So the final outline would be – use stateless functional components whenever possible, this way you let the reader of your code know that this component is dumb and it only contains presentational logic. That will make your code more predictable and your work easier.
