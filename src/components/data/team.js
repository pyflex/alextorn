import React from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

const Team = (props) => {
  return (
    <>
      <div className="cd-section" id="teams">
        <div className="team-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">About me</h2>
                <h4 className="description">
                  I'm the sole founder of this project. A simple blog this far.
                  I'm pushing this blog and project of mine but don't like to
                  attach my name to it.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" lg="10">
                <Card className="card-profile card-horizontal">
                  <Row>
                    <Col xl="7">
                      <div className="card-image no-mask">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require('assets/img/comete-coco.jpg')}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col xl="5">
                      <CardBody className="mt-3">
                        <h6 className="card-category">Name</h6>
                        <CardTitle tag="h4">Zero</CardTitle>
                        <br />
                        <h6 className="card-category">Position</h6>
                        <CardTitle tag="h4">Founder, CEO</CardTitle>
                        <br />
                        <Row>
                          <Col lg="4">
                            <h6 className="card-category">Followers</h6>
                            <CardTitle tag="h4">Unknown</CardTitle>
                          </Col>
                          <Col lg="4">
                            <h6 className="card-category">Projects</h6>
                            <CardTitle tag="h4">Unknown</CardTitle>
                          </Col>
                        </Row>
                      </CardBody>
                      <CardFooter>
                        <h6 className="card-category">Team</h6>
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          id="tooltip147210950"
                        >
                          <img
                            alt="..."
                            src={require('assets/img/james.jpg')}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip147210950"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar rounded-circle ml-1"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          id="tooltip908194662"
                        >
                          <img alt="..." src={require('assets/img/ryan.jpg')} />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip908194662"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar rounded-circle ml-1"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          id="tooltip337528324"
                        >
                          <img alt="..." src={require('assets/img/lora.jpg')} />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip337528324"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar rounded-circle ml-1"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          id="tooltip403139101"
                        >
                          <img alt="..." src={require('assets/img/mike.jpg')} />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip403139101"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </CardFooter>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Team;
