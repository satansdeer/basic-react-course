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
      <li>
        <Link to="/lessons/intro/">Introduction</Link>
      </li>
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
          Stateles React Components
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

export default Navigation
