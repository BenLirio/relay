import React from "react"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Content, { HTMLContent } from "../components/Content"
import CategoryPosts from "../components/CategoryPosts"

export const CategoryPageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  allWordpressPost,
}) => {
  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <CategoryPosts allWordpressPost={allWordpressPost} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

const CategoryPage = ({ data }) => {
  const { wordpressCategory } = data
  const { allWordpressPost } = data
  return (
    <CategoryPageTemplate
      allWordpressPost={allWordpressPost}
      content={"category.content"}
      contentComponent={"HTMLContent"}
      description={"post.excerpt"}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${wordpressCategory.name}`}</title>
          <meta name="description" content={"${category.excerpt}"} />
        </Helmet>
      }
      tags={["post.frontmatter.tags"]}
      title={wordpressCategory.name}
    />
  )
}

export default CategoryPage

export const pageQuery = graphql`
  query WordpressCategoryByID($id: String!, $wordpress_id: Int!) {
    wordpressCategory(id: { eq: $id }) {
      name
    }
    allWordpressPost(
      filter: {
        categories: { elemMatch: { wordpress_id: { eq: $wordpress_id } } }
      }
    ) {
      edges {
        node {
          title
          id
          path
        }
      }
    }
  }
`
