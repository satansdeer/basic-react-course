import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

import SignOutButton from '../SignOut'
import * as routes from '../../constants/routes'

const Navigation = () => (
  <div className={styles.container}>
    <h2 className={styles.header}>Navigation</h2>
    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      <h3>Intro</h3>
      <li>
        <Link to="/lessons/intro/">🐣 Introduction</Link>
      </li>
      <li>
        <Link to="/lessons/how-to-use/">❓ How to use this course</Link>
      </li>
    </ul>
    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      <h3>Setup</h3>
      <li>
        <Link to="/lessons/node-and-yarn/">👷 Required Tools</Link>
      </li>
      <li>
        <Link to="/lessons/create-react-app/">👷 Create React App</Link>
      </li>
      <li>
        <Link to="/lessons/lint-and-prettier">👷 Lint and prettier</Link>
      </li>
    </ul>
    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      <h3>React Concepts</h3>
      <li>
        <Link to="/lessons/jsx/">📝 JSX</Link>
      </li>
      <li>
        <Link to="/lessons/custom-component/">
          📝 Creating Custom Component
        </Link>
      </li>
      <li>
        <Link to="/lessons/styles/">📝 Styling Components</Link>
      </li>
      <li>
        <Link to="/lessons/properties-and-proptypes/">
          📝 Properties And Proptypes
        </Link>
      </li>
      <li>
        <Link to="/lessons/build-loader">👾 Build: Loader</Link>
      </li>
      <li>
        <Link to="/lessons/lists/">📝 Rendering Lists</Link>
      </li>
      <li>
        <Link to="/lessons/build-hackernews">👾 Build: Hackernews Viewer</Link>
      </li>
      <li>
        <Link to="/lessons/handling-events/">📝 Handling Events</Link>
      </li>
      <li>
        <Link to="/lessons/conditional-rendering/">
          📝 Conditional Rendering
        </Link>
      </li>
      <li>
        <Link to="/lessons/using-state/">📝 Using State</Link>
      </li>
      <li>
        <Link to="/lessons/build-datetime-input">👾 Build: Datetime input</Link>
      </li>
      <li>
        <Link to="/lessons/stateless-components/">
          📝 Stateles React Components
        </Link>
      </li>
      <li>
        <Link to="/lessons/react-lifecycle-methods/">
          📝 React Lifecycle Methods
        </Link>
      </li>
      <li>
        <Link to="/lessons/using-refs/">📝 Using Refs</Link>
      </li>
      <li>
        <Link to="/lessons/forms/">📝 Working With Forms</Link>
      </li>
      <li>
        <Link to="/lessons/build-basic-form">👾 Build: BasicForm</Link>
      </li>
    </ul>
    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      <h3>Working with react</h3>
      <li>
        <Link to="/lessons/structuring-application/">
          📝 Structuring application
        </Link>
      </li>
      <li>
        <Link to="/lessons/testing-with-jest/">
          📝 Testing components with Jest
        </Link>
      </li>
    </ul>
  </div>
)

export default Navigation
