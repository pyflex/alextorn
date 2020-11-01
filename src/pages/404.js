import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core component
import ColorNavbar from 'components/Navbars/ColorNavbar.js';
import DemoFooter from 'components/Footers/DemoFooter.js';

const NotFound = () => {
  return (
    <>
      <ColorNavbar />
      <div className="wrapper">
        <div className="page-header error-page header-filter">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                'url(' + require('assets/img/braden-collum.jpg') + ')',
            }}
          />
          <Container>
            <Row>
              <Col md="12">
                <h1 className="title">404</h1>
                <h2 className="description">Page not found :(</h2>
                <h4 className="description">
                  Ooooups! Looks like you got lost.
                </h4>
              </Col>
            </Row>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
};

export default NotFound;
