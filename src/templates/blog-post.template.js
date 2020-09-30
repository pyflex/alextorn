import React from 'react'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import richTextOptions from './../components/contentful/options'
import Layout from '../components/main/layout'

const BlogPostTemplate = (props) => {
  const post = get(props, 'data.contentfulBlogPostTest')
  const siteTitle = get(props, 'data.site.siteMetaData.title')

  return (
    <Layout location={props.location}>
      <Helmet title={`${post.title} | ${siteTitle}`} />
      <Img
        className="featureImage"
        alt={post.featureImage.file.fileName}
        fluid={post.featureImage.fluid}
      />
      <h1>{post.title}</h1>
      <p>{post.updatedAt}</p>
      <div className="description">{post.description.description}</div>
      <div className="article">
        {documentToReactComponents(post.article.json, richTextOptions)}
      </div>
      <div className="author">
        <Img
          style={{ maxWidth: '300px' }}
          alt={post.author.authorImage.file.fileName}
          fluid={post.author.authorImage.fluid}
        />
        {post.author.name}
      </div>
    </Layout>
  )
}

export const pageData = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPostTest(slug: { eq: $slug }) {
      title
      updatedAt(formatString: "MMMM Do, YYYY")
      description {
        description
      }
      article {
        json
      }
      author {
        name
        authorImage {
          file {
            fileName
            url
          }
          fluid(maxWidth: 300, background: "rgb:000000") {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
      featureImage {
        file {
          fileName
          url
        }
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default BlogPostTemplate
