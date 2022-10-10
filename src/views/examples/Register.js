import React from "react";

// reactstrap components
import {
  Button,
  Card,
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
  NavItem,
  Nav,
} from "reactstrap";

import Logo from "../../assets/img/logo.png";

class Register extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="section mx-5 mt--100">
              <img alt="..." src={Logo} style={{ height: 200 }} />
            </div>
            <div className="shape shape-style-1 bg-gradient-default">
              <span>
                <img
                  alt="..."
                  src={Logo}
                  style={{ height: 50, borderRadius: 50 }}
                />{" "}
              </span>
              <span>
                <img
                  alt="..."
                  src={Logo}
                  style={{ height: 50, borderRadius: 50 }}
                />{" "}
              </span>
              <span>
                <img
                  alt="..."
                  src={Logo}
                  style={{ height: 50, borderRadius: 50 }}
                />{" "}
              </span>
              <span>
                <img
                  alt="..."
                  src={Logo}
                  style={{ height: 50, borderRadius: 50 }}
                />{" "}
              </span>
              <span>
                <img
                  alt="..."
                  src={Logo}
                  style={{ height: 50, borderRadius: 50 }}
                />{" "}
              </span>
              <span>
                <img
                  alt="..."
                  src={Logo}
                  style={{ height: 50, borderRadius: 50 }}
                />{" "}
              </span>
              <span>
                <img
                  alt="..."
                  src={Logo}
                  style={{ height: 50, borderRadius: 50 }}
                />{" "}
              </span>
            </div>
            <Container className="pt-lg-7 mt--300">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <h4 className="text-primary">Sign Up Here ...</h4>
                      </div>
                      <Form role="form">
                        <Row>
                          <Col>
                            <FormGroup>
                              <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-hat-3" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="First Name" type="text" />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-hat-3" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Last Name" type="text" />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-hat-3" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  placeholder="Date of Birth"
                                  type="text"
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col>
                            <FormGroup>
                              <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-hat-3" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Gender" type="text" />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-hat-3" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Phone Number" type="text" />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-hat-3" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Address" type="text" />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>

                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Row>
                            <Col>
                              <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-lock-circle-open" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  placeholder="Password"
                                  type="password"
                                  autoComplete="off"
                                />
                              </InputGroup>
                            </Col>
                            <Col>
                              <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-lock-circle-open" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  placeholder="Re-Password"
                                  type="password"
                                  autoComplete="off"
                                />
                              </InputGroup>
                            </Col>
                          </Row>
                        </FormGroup>
                        <div className="d-flex flex-row ">
                          <div>
                              <Button
                            className="mt-4"
                            color="primary"
                            type="button"
                          >
                            Create account
                          </Button>
                          </div>
                          <div className="pt-5 d-flex flex-row">
                            <span className="px-2">or </span> <Nav><NavItem><span className="text-primary">Sign In</span></NavItem></Nav>
                          </div>
                         
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Register;
