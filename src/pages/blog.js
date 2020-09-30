import React from 'react'
import { get } from 'lodash/get'
import { Img } from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/main/layout'

const BlogIndex = (props) => {
  // const post = get(props, 'data.contentfulBlogPostTest')
  // const siteTitle = get(props, 'data.site.siteMetaData.title')
  return (
    <Layout>
      <h1>Hello there from BLOG</h1>
    </Layout>
  )
}

export default BlogIndex
