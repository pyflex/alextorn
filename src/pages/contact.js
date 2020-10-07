import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/main/layout'
import ContactForm from './../components/pagecomponents/contact-form/contact-form.component'

const ContactIndex = (props) => {
  const post = get(props, 'data.contentfulContactInfo')
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout>
      <Helmet title={`Kontakt | ${siteTitle}`} />
      <ContactForm data={post} />
    </Layout>
  )
}

export const contactFormData = graphql`
  query contactInfoQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulContactInfo(businessName: { eq: "Crispy Concept AB" }) {
      businessLocation {
        lat
        lon
      }
      businessName
      email
      phoneNumber
    }
  }
`

export default ContactIndex
