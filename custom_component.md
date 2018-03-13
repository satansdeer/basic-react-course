# Custom Components

Currently, we render our header using an `<h1>` tag provided by default. Let's learn how to create custom ones.

Create a new file `src/Header.js`. As you remember, first we need to import `React`, also we need to import `Component`, otherwise, we would have to write `React.Component` to `extend` from.

Just like in our `App` component file – define a new class that extends `Component`. Define `render` method. This method is used by default to return your components layout. For now, let's just copy the return statement from the `App.js`. Return `<h1>Hello world</h1>`.

Don't forget to export your class. `export default Header`

Now open your `src/App.js` and import our newly created component.

Remove the line `<h1>Hello world</h1>` and put `<Header />` instead.

Congratulations, you've just defined and used your first custom react component.