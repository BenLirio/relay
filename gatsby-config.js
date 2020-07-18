const axios = require('axios')
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
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "therelayresource.com",
        protocol: "https",
        restApiPrefix: "wp-json",
        useACF: true,
        auth: {
          htaccess_user: "web-app",
          htaccess_pass: "*DWuU(QaTV9&(FKuR91*bHp@",
          htaccess_sendImmediately: true,
        },
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        normalizers: normalizers => {
          return [...normalizers, mapContentToJson]
        }
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
const mapContentToJson = {
  name: `mapContentToJson`,
  normalizer: async ({ entities }) => {
    const content = entities.filter(e => e.__type === `wordpress__POST`)
    for (let i = 0; i < entities.length; i++) {
      entity = entities[i]
      if (entity.__type === `wordpress__POST`) {
        try {
          const res = await axios({
            url: 'https://parser-zzgjhpjxia-uc.a.run.app/',
            method: 'POST',
            data: { html: entity.content }
          })
          console.log('res.data', res.data)
          entity.foo = JSON.stringify(res.data)
        } catch (error) {
        }
        if (!entity.foo) {
          entity.foo = 'error'
        }
      }
    }
    return entities
  }
}