import React from 'react'
import Link from 'gatsby-link'

const LessonsPage = () => (
  <div>
    <p>
      Welcome to this course, you can start by reading the following chapters.
    </p>
    <p>Now go build something great.</p>
    <h2>Contents</h2>
    <ul>
      <li>
        <Link to="/lessons/create-react-app/">Create React App</Link>
      </li>
      <li>
        <Link to="/lessons/jsx/">JSX</Link>
      </li>
      <li>
        <Link to="/lessons/custom-component/">Creating Custom Component</Link>
      </li>
      <li>
        <Link to="/lessons/properties-and-proptypes/">
          Properties And Proptypes
        </Link>
      </li>
      <li>
        <Link to="/lessons/conditional-rendering/">Conditional Rendering</Link>
      </li>
      <li>
        <Link to="/lessons/handling-events/">Handling Events</Link>
      </li>
      <li>
        <Link to="/lessons/using-state/">Using State</Link>
      </li>
      <li>
        <Link to="/lessons/stateless-components/">
          React Components, Pure and Stateless
        </Link>
      </li>
      <li>
        <Link to="/lessons/react-lifecycle-methods/">
          React Lifecycle Methods
        </Link>
      </li>
      <li>
        <Link to="/lessons/using-refs/">Using Refs</Link>
      </li>
      <li>
        <Link to="/lessons/forms/">Working With Forms</Link>
      </li>
      <li>
        <Link to="/lessons/lists/">Rendering Lists</Link>
      </li>
      <li>
        <Link to="/lessons/styles/">Styling Components</Link>
      </li>
    </ul>
  </div>
)

export default LessonsPage
