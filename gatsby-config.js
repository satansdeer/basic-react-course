module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
  ],
}
