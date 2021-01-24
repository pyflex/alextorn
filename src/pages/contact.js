const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// nodejs library that concatenates classes
import classnames from 'classnames';

// reactstrap components
import {
  Badge,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import ColorNavbar from 'components/Navbars/ColorNavbar.js';
import DemoFooter from 'components/Footers/DemoFooter.js';

import ContactUsMap from 'ownComponents/contactUsMap.component.js';

class ContactUs extends React.Component {
  state = {};

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add('contact-page');
  }

  componentWillUnmount() {
    document.body.classList.remove('contact-page');
  }

  render() {
    const data = get(this.props, 'data.contentfulContactInfo');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    console.log(this.props);
    return (
      <>
        <Helmet title={`Contact us | ${siteTitle}`} />
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="page-header header-filter contactus-3">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  'url(' + require('assets/img/andre-benz.jpg') + ')',
              }}
            />
            <Container>
              <Row>
                <Col className="text-center" md="12">
                  <h1 className="title">Got a question?</h1>
                  <h3>We'd like to talk more about what you need</h3>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="main">
            <Container fluid>
              <Row className="infos mb-5">
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-primary">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require('assets/img/feature-blob/primary.png')}
                      />
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <h4 className="info-title">Address</h4>
                    <p className="description">12124 First Street, nr 54</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-info">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require('assets/img/feature-blob/info.png')}
                      />
                      <i className="tim-icons icon-email-85" />
                    </div>
                    <h4 className="info-title">Email</h4>
                    <p className="description">{data.email || null}</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-warning">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require('assets/img/feature-blob/warning.png')}
                      />
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <h4 className="info-title">Phone Number</h4>
                    <p className="description">{data.phoneNumber || null}</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-success">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require('assets/img/feature-blob/success.png')}
                      />
                      <i className="tim-icons icon-single-02" />
                    </div>
                    <h4 className="info-title">Contact</h4>
                    <p className="description">{data.businessName || null}</p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 mb-4 pt-5">
                <Col className="ml-auto mr-auto text-center mt-5" md="8">
                  <Badge color="info">Leave a message</Badge>
                  <h1 className="title">
                    Tell us more about <b>yourself</b>
                  </h1>
                  <h4 className="desc">
                    Whether you have questions or you would just like to say
                    hello, contact us.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="mx-auto" md="10">
                  <Form
                    className="p-3"
                    id="contact-form-1"
                    method="post"
                    role="form"
                  >
                    <CardBody>
                      <Row>
                        <Col md="6">
                          <label>First name</label>
                          <InputGroup
                            className={classnames({
                              'input-group-focus': this.state.firstNameFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="First Name..."
                              placeholder="First Name..."
                              type="text"
                              onFocus={(e) =>
                                this.setState({ firstNameFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ firstNameFocus: false })
                              }
                            />
                          </InputGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup
                              className={classnames({
                                'input-group-focus': this.state.lastNameFocus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Last Name..."
                                placeholder="Last Name..."
                                type="text"
                                onFocus={(e) =>
                                  this.setState({ lastNameFocus: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ lastNameFocus: false })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label>Email address</label>
                        <InputGroup
                          className={classnames({
                            'input-group-focus': this.state.emailFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email Here..."
                            type="text"
                            onFocus={(e) => this.setState({ emailFocus: true })}
                            onBlur={(e) => this.setState({ emailFocus: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Your message</label>
                        <Input
                          id="message-1"
                          name="message"
                          rows="6"
                          type="textarea"
                        />
                      </FormGroup>
                      <Row>
                        <Col className="ml-auto" md="6">
                          <Button
                            className="btn-round pull-right"
                            color="primary"
                          >
                            Send Message
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
          <ContactUsMap
            businessLocation={data.businessLocation}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className="map" />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default ContactUs;

export const contactFormData = graphql`
  query contactInfoQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulContactInfo(businessName: { eq: "Unknown" }) {
      businessLocation {
        lat
        lon
      }
      businessName
      email
      phoneNumber
    }
  }
`;
