import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/main/layout'

const RootIndex = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <Layout>
      <Helmet title={`Hem | ${siteTitle}`} />
      <h1>This is Crispy Concept.</h1>
      <p>{siteTitle}</p>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
