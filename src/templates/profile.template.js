import React from 'react'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/components/layout'

const ProfilePage = (props) => {
  // idea of adding social networks
  const author = get(props, 'data.contentfulAuthor')
  const post = get(props, 'data.allContentfulBlogPost')
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  console.log(post)
  console.log(author)

  return (
    <Layout>
      <Helmet title={`${author.name} | ${siteTitle}`} />
      <p>Hello there from profile!</p>
    </Layout>
  )
}

export const profilePageData = graphql`
  query profileAndBlogPostById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulAuthor(id: { eq: $id }) {
      name
      businessTitle
      description {
        description
      }
      authorImage {
        file {
          fileName
        }
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulBlogPost(filter: { author: { id: { eq: $id } } }) {
      edges {
        node {
          updatedAt(formatString: "MMMM Do, YYYY")
          title
          tag {
            tag
          }
          featureImage {
            fluid {
              tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProfilePage
