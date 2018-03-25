import React from 'react'

const containerStyle = {
  padding: 20,
  paddingTop: 80,
  paddingBottom: 80,
  maxWidth: 800,
  margin: 'auto',
}

const headerStyle = {
  textAlign: 'center',
  marginBottom: 40,
}

const AboutTheCourse = () => (
  <div style={containerStyle}>
    <h3 style={headerStyle}>What You'll Learn</h3>
    <section>
      <p>
        This course covers all the <strong>essential topics</strong> reqruired
        to build modern javascript applications using ReactJS.
      </p>
      <p>
        First you will learn the fundamentals and the <strong>core idea</strong>{' '}
        behind the ReactJS framework. You will learn to think in ReactJS terms.
      </p>
      <p>
        Then you'll go through all the moving parts you'll need to build your
        application and <strong>within minutes</strong> you’ll grasp Components,
        JSX, State, Props, Events and Forms along with best practices to build
        real apps.
      </p>
    </section>
  </div>
)

export default AboutTheCourse
