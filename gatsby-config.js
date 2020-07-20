module.exports = {
  siteMetadata: {
    title: "Gatsby + Netlify CMS Starter",
    description:
      "This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support.
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-theme-material-ui`,
    },
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: `https://therelayresource.com/graphql`,
      },
    },
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1ZarUDaXOGxN6cedlX2mLl6lbF_uGxKMnO4OXisLpM8s",
        worksheetTitle: "people",
        credentials: require("./relay-cms-key.json"),
      },
    },
  ],
}
