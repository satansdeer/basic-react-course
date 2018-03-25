import React from 'react'
import Link from 'gatsby-link'
import withAuthorization from './components/Session/withAuthorization'
import styles from './lesson-template.module.css'

function LessonTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  console.log('LessonTemplate --', frontmatter.title)
  return (
    <div className={styles.container}>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

const authCondition = authUser => !!authUser

export default withAuthorization(authCondition)(LessonTemplate)
