module.exports = {
  siteMetadata: {
    title: `The Relay Resource`,
    description: `A COVID-19 resource page`,
    author: `@Ben Lirio`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WORDPRESS",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wordpress",
        // Url to query from
        url: "https://therelayresource.com/graphql",
      },
    },
  ],
}
