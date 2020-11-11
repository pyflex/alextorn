/*!

=========================================================
* BLK Design System PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import ArticlePreview from 'ownComponents/article-preview.component.js';

// nodejs library that concatenates classes
import classnames from 'classnames';
// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';

// core components
import ColorNavbar from 'components/Navbars/ColorNavbar.js';
import DemoFooter from 'components/Footers/DemoFooter.js';

class BlogPosts extends React.Component {
  state = {
    transform: null,
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add('blog-posts');
    if (window.innerWidth >= 768) {
      var windowScrollTop = window.pageYOffset / 3;
      this.setState({
        transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
      });
      window.addEventListener('scroll', this.resetTransform);
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('blog-posts');
    if (window.innerWidth >= 768) {
      window.removeEventListener('scroll', this.resetTransform);
    }
  }

  resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    });
  };

  render() {
    const posts = get(this.props, 'data.allContentfulBlogPost.edges');
    const images = get(this.props, 'data');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <>
        <Helmet title={`Blog | ${siteTitle}`} />
        <ColorNavbar />

        <div className="wrapper" ref="wrapper">
          <div className="page-header page-header-small header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  'url(' + require('assets/img/ruvim-noga.jpg') + ')',
                transform: this.state.transform,
              }}
            />
            <div className="content-center">
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <h1 className="title">
                    A Place for Entrepreneurs to Share and Discover New Stories
                  </h1>
                  <Button
                    className="btn-round btn-icon"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    className="btn-round btn-icon ml-1"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </Col>
              </Row>
            </div>
          </div>

          <div className="main main-raised">
            <Container>
              <Row>
                {posts.map(({ node }) => {
                  return <ArticlePreview article={node} key={node.title} />;
                })}
              </Row>
            </Container>
          </div>
          <DemoFooter />
        </div>
      </>
    );
  }
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
          title
          description {
            description
          }
          tag {
            tag
          }
          author {
            name
            authorImage {
              file {
                fileName
                url
              }
              fluid(quality: 90, maxHeight: 30, maxWidth: 30) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
          featureImage {
            file {
              fileName
              url
            }
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          slug
          updatedAt(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`;

export default BlogPosts;
