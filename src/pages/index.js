import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';

const RootIndex = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  return (
    <>
      <Helmet title={`Home | ${siteTitle}`} />
      <h1>Presenting Alex.</h1>
      <p>{siteTitle}</p>
    </>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
