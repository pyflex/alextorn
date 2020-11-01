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
import React from 'react'

// tag={Link}

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap'

class ColorNavbar extends React.Component {
  state = {
    navbarColor: 'navbar-transparent',
  }
  componentDidMount() {
    window.addEventListener('scroll', this.changeNavbarColor)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeNavbarColor)
  }
  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        navbarColor: 'bg-info',
      })
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: 'navbar-transparent',
      })
    }
  }
  render() {
    return (
      <>
        <Navbar className={'fixed-top ' + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand id="tooltip6619950104">
                <span>BLK•</span> Design System PRO React
              </NavbarBrand>
              <UncontrolledTooltip delay={0} target="tooltip6619950104">
                Designed and Coded by Creative Tim
              </UncontrolledTooltip>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      BLK• <span>PRO React</span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i className="fa fa-cogs d-lg-none d-xl-none" />
                    Getting started
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-with-icons">
                    <DropdownItem>
                      <i className="tim-icons icon-paper" />
                      Components
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-bullet-list-67" />
                      Presentation Page
                    </DropdownItem>
                    <DropdownItem
                      href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                      target="_blank"
                    >
                      <i className="tim-icons icon-book-bookmark" />
                      Documentation
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i aria-hidden={true} className="tim-icons icon-paper" />
                    <p>Sections</p>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <i className="tim-icons icon-app" />
                      Headers
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-settings" />
                      Features
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-align-left-2" />
                      Blogs
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-user-run" />
                      Teams
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-paper" />
                      Projects
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-money-coins" />
                      Pricing
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-chat-33" />
                      Testimonials
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-mobile" />
                      Contact Us
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-chart-bar-32" />
                      Tables
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-paper" />
                      Accordion
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-book-bookmark"
                    />
                    <p>Examples</p>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <i className="tim-icons icon-bulb-63" />
                      About-us
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-align-center" />
                      Blog Post
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-chart-bar-32" />
                      Blog Posts
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-square-pin" />
                      Contact Us
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-paper" />
                      Landing Page
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-coins" />
                      Pricing
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-basket-simple" />
                      Ecommerce Page
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-bag-16" />
                      Product Page
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-lock-circle" />
                      Profile Page
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-button-power" />
                      404 Error Page
                    </DropdownItem>
                    <DropdownItem>
                      <i className="tim-icons icon-alert-circle-exc" />
                      500 Error Page
                    </DropdownItem>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        color="default"
                        className="dropdown-item"
                        tag="a"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="tim-icons icon-book-bookmark"
                        />
                        App Pages
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>
                          <i className="tim-icons icon-lock-circle" />
                          Account Settings
                        </DropdownItem>
                        <DropdownItem>
                          <i className="tim-icons icon-tablet-2" />
                          Login Page
                        </DropdownItem>
                        <DropdownItem>
                          <i className="tim-icons icon-laptop" />
                          Register Page
                        </DropdownItem>
                        <DropdownItem>
                          <i className="tim-icons icon-molecule-40" />
                          Reset Page
                        </DropdownItem>
                        <DropdownItem>
                          <i className="tim-icons icon-notes" />
                          Invoice Page
                        </DropdownItem>
                        <DropdownItem>
                          <i className="tim-icons icon-basket-simple" />
                          Checkout Page
                        </DropdownItem>
                        <DropdownItem>
                          <i className="tim-icons icon-email-85" />
                          Chat Page
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Button
                    className="nav-link"
                    color="default"
                    href="https://www.creative-tim.com/product/blk-design-system-pro-react?reaf=blkdspr-pages-navbar"
                    size="sm"
                    target="_blank"
                  >
                    <p>Buy Now</p>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default ColorNavbar
