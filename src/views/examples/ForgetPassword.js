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
} from "reactstrap";

import Logo from "../../assets/img/logo.png";

class ForgetPassword extends React.Component {
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
                        <h4 className="text-primary">Forget Your Password ? </h4>
                        <h6>Enter your correct email address</h6>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
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
                        </FormGroup>
                        <FormGroup>
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
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                          >
                            Done
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <small>Sing Up</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <small>Sign In</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default ForgetPassword;
