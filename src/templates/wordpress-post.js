import React from "react"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Content, { HTMLContent } from "../components/Content"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

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
            <PostContent content={content} />
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

const BlogPost = ({ data }) => {
  const { wordpressPost } = data
  return (
    <BlogPostTemplate
      content={wordpressPost.content}
      contentComponent={HTMLContent}
      description={wordpressPost.excerpt}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${wordpressPost.title}`}</title>
          <meta name="description" content={`${wordpressPost.excerpt}`} />
        </Helmet>
      }
      tags={["post.frontmatter.tags"]}
      title={wordpressPost.title}
    />
  )
}

export default BlogPost

export const pageQuery = graphql`
  query WordpressPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      excerpt
      content
    }
  }
`
