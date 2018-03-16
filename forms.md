# Working With Forms

Create new component `src/FormExapmle.js` with following content

```js
import React, { Component } from 'react'

class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

In this example we made React control what is rendered in our form and made it update our text input value. While it gives you a lot of control and can be useful in some cases – it can be overwhelming to write handlers for every input. As an alternative you can provide the `name` property and access your elements by it in your handler.

Here is another example

```js
import React, { Component } from 'react'

class FormExample extends Component {
  handleSubmit(event) {
    const { first_name, last_name } = event.target
    alert(`A name was submitted: ${first_name} ${last_name}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
           type="text"
           name="first_name"
          />
        </label>
        <label>
          Last Name:
          <input
           type="text"
           name="last_name"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

Here we defined the `name` property and now can access it from `event.target` by their names.o

And there is the third option. You can assign `ref` to your elements and access them directly.