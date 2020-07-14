module.exports = {
  siteMetadata: {
    title: "Gatsby + Netlify CMS Starter",
    description:
      "This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.",
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
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "therelayresource.com",
        protocol: "https",
        restApiPrefix: "wp-json",
        useACF: true,
        auth: {
          htaccess_user: "web-app",
          htaccess_pass: "*DWuU(QaTV9&(FKuR91*bHp@",
          htaccess_sendImmediately: false,
        },
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ]
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
