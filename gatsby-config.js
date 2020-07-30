module.exports = {
  // A supposed best practice is to place site meta information here
  siteMetadata: {
    title: "The Relay Resource",
    description:
      "Relay is a resource to help families throughout the COVID-19 pandemic. Read our story and learn more about us here at Relay.",
    url: "https://www.therelayresource.com",
    image: "/img/logo.svg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
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
        credentials: require("./keys/relay-cms-key.json"),
      },
    },
  ],
}
