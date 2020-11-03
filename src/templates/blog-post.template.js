import React from 'react';
import Img from 'gatsby-image';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { FaFacebookF, FaDribbble, FaLinkedin } from 'react-icons/fa';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import richTextOptions from './../components/contentful/options';

// core components
import ColorNavbar from 'components/Navbars/ColorNavbar.js';
import DemoFooter from 'components/Footers/DemoFooter.js';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';

class BlogPostTemplate extends React.Component {
  state = {};
  render() {
    const post = get(this.props, 'data.contentfulBlogPost');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <ColorNavbar />

        {/* Title with Image */}
        <div className="wrapper" ref="wrapper">
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              data-parallax={true}
              style={{
                backgroundImage: `url(${post.featureImage.fluid.src})`,
              }}
            />
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h1 className="title">{post.title}</h1>
                  <div className="author">
                    <img
                      alt={post.author.authorImage.file.fileName}
                      className="avatar img-raised"
                      src={post.author.authorImage.file.url}
                    />
                  </div>
                  <br />
                  <h4 className="description">{post.author.name}</h4>
                </Col>
              </Row>
            </Container>
          </div>
          {/* End title with Image */}

          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  {documentToReactComponents(
                    post.article.json,
                    richTextOptions
                  )}
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section section-blog-info">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <Row>
                    <Col md="10">
                      <div className="blog-tags">
                        Tag: 
                        <Badge color="primary" className="ml-1">
                          {post.tag.tag}
                        </Badge>
                        {/* <Badge color="primary">Photography</Badge>
                        <Badge color="primary" className="ml-1">
                          Stories
                        </Badge>
                        <Badge color="primary" className="ml-1">
                          Castle
                        </Badge> */}
                      </div>
                    </Col>
                    <hr />
                    <Col className="ml-auto mr-auto" md="8">
                      <Card className="card-profile profile-bg">
                        <CardHeader
                          style={{
                            backgroundImage:
                              'url(' +
                              require('assets/img/ruvim-noga.jpg') +
                              ')',
                          }}
                        >
                          <div className="card-avatar">
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <Img
                                alt={post.author.authorImage.file.fileName}
                                className="img img-raised"
                                fluid={post.author.authorImage.fluid}
                              />
                            </a>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <CardTitle tag="h3">{post.author.name}</CardTitle>
                          <h6 className="category text-primary">
                            {post.author.businessTitle}
                          </h6>
                          <p className="card-description">
                            {post.author.description.description}
                          </p>
                        </CardBody>
                        <CardFooter>
                          <div className="follow float-left">
                            <Button
                              color="primary"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              size="sm"
                            >
                              Follow
                            </Button>
                          </div>
                          <div className="d-inline float-right">
                            <Button
                              className="btn-icon btn-round mr-1"
                              color="dribbble"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <FaDribbble />
                            </Button>
                            <Button
                              className="btn-icon btn-round mr-1"
                              color="linkedin"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <FaLinkedin />
                            </Button>
                            <Button
                              className="btn-icon btn-round"
                              color="behance"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <FaFacebookF />
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <DemoFooter />
        </div>
      </>
    );
  }
}

export const pageData = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      updatedAt(formatString: "MMMM Do, YYYY")
      description {
        description
      }
      tag {
        tag
      }
      article {
        json
      }
      author {
        name
        businessTitle
        authorImage {
          file {
            fileName
            url
          }

          fluid(quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }

        description {
          description
        }
      }
      featureImage {
        file {
          fileName
          url
        }
        fluid(quality: 100) {
          src
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

export default BlogPostTemplate;
