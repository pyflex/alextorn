import React from 'react';

import get from 'lodash/get';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const simpleApp = ({ data }) => {
  const data1 = get(data, 'file.childImageSharp.fluid');
  console.log(data1);
  return (
    <>
      <div>
        <div style={{ maxHeight: '100%', height: '300px' }}>
          <Img
            style={{ maxHeight: '100%' }}
            imgStyle={{ objectFit: 'contain' }}
            fluid={data1}
          />
        </div>
        <h1>Hello there, from Alexander The Legend</h1>
        <Img className="img rounded" fluid={data1} />
        <div className="section about-description">
          <Img alt="..." className="path path4" fluid={data1} />
        </div>
      </div>
    </>
  );
};

export const testQuery = graphql`
  query testQuery {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "1234.png" }) {
      childImageSharp {
        fluid(maxWidth: 380, maxHeight: 380, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default simpleApp;
