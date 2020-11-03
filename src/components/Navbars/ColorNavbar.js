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

import { Link } from 'gatsby';

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

class ColorNavbar extends React.Component {
  state = {
    navbarColor: 'navbar-transparent',
  };
  componentDidMount() {
    window.addEventListener('scroll', this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeNavbarColor);
  }
  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        navbarColor: 'bg-info',
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: 'navbar-transparent',
      });
    }
  };
  render() {
    return (
      <>
        <Navbar className={'fixed-top ' + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <button className="navbar-toggler" id="example-header-4">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
              <Link to="/" className="navbar-brand">
                Zero
              </Link>
            </div>
            <UncontrolledCollapse navbar toggler="#example-header-4">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      Zero <span>Project</span>
                    </Link>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="example-header-4">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="mx-auto" navbar>
                <NavItem className="active">
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/blog">Blog</Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact">Contact</Link>
                </NavItem>
              </Nav>
              <Nav className="nav navbar-right" navbar>
                <NavItem>
                  <Link to="/features">
                    <Button
                      className="animation-on-hover"
                      color="primary"
                      size="sm"
                    >
                      <p>Features</p>
                    </Button>
                  </Link>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ColorNavbar;
