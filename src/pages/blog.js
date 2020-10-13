import React from 'react'
import get from 'lodash/get'
import { Img } from 'gatsby-image'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/main/layout'
import ArticlePreview from './../components/pagecomponents/article-preview/article-preview.component'

const BlogIndex = (props) => {
  const posts = get(props, 'data.allContentfulBlogPost.edges')
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  // sitetitle not showing: undefined
  // failed production (vipsjpeg): https://stackoverflow.com/questions/58974472/gatsby-contentful-netlify-how-to-render-tracedsvg-images-in-production
  return (
    <Layout>
      <Helmet title={`Blogg | ${siteTitle}`} />
      <ul>
        {posts.map(({ node }) => {
          return (
            <li key={node.title}>
              <ArticlePreview article={node} />
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const allBlogPostsPreview = graphql`
  query BlogPostPreview {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          author {
            name
            authorImage {
              file {
                fileName
              }
              fluid(maxWidth: 300, background: "rgb:000000") {
                ...GatsbyContentfulFluid
              }
            }
          }
          title
          description {
            description
          }
          updatedAt(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

export default BlogIndex
