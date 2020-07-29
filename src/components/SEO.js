import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site, wpPage } = useStaticQuery(query)

  console.log("Wordpress page stuff: ", wpPage)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata // This may have to be changed to match Query, ex:

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

// Prop Types tells us what props are *necessary* and specifies the type (I think)
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

//SEO only pulls from the Gatsby-config 'siteMetadata' default values. Still working on pulling SEO tags from Wordpress...
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
    wpPage {
      seo {
        canonical
        focuskw
        defaultDescription: metaDesc
        metaKeywords
        defaultTitle: title
        siteUrl: opengraphUrl
        opengraphImage {
          status
          uri
          title
        }
      }
    }
  }
`
/*
query SEO {
        allWpPage {
            nodes {
              seo {
                canonical
                focuskw
                defaultDescription: metaDesc
                metaKeywords
                defaultTitle: title
                siteUrl: opengraphUrl
                opengraphImage {
                  status
                  uri
                  title
                }
            }
        }
    }
*/
// Above the colons indicate 'aliases' for the query items. I.e. title gets renamed to defaultTitle
