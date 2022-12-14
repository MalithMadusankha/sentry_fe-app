import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  CardBody,
  CardText,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import Img1 from "../../assets/img/theme/m-h-1.jpg";
import Img2 from "../../assets/img/theme/c-d.jpg";
import Img3 from "../../assets/img/theme/p-v.jpg";
import Img4 from "../../assets/img/theme/prv-v.jpg";
import ChatBot from "../../assets/img/theme/chat-bot.jpg";

class PatientProfile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            <div className="shape shape-style-1 bg-gradient-info">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

          <section className="section mt--300">
            <Container>
              <Card className="card-profile shadow">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-2-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Edit Profile
                        </Button>
                       
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4"></Col>
                  </Row>
                  <div className="text-center mt-5 pt-5">
                    <h3>Jessica Jones</h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      1996-05-16
                    </div>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Female
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      0713180097
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      jones@gmail.com
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          An doctor of considerable range, Ryan ??? the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy ???
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
            <Row className="mt-5 p-5 border-0 bg-secondary">
              <Col className="">
                <Card style={{ borderRadius: 20 }}>
                  <img
                    class=""
                    src={Img1}
                    alt="Card"
                    height={150}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <div
                    class="card-body bg-gradient-info"
                    style={{
                      borderBottomRightRadius: 20,
                      borderBottomLeftRadius: 20,
                    }}
                  >
                    <h6 class="card-text text-white">
                      MADICAL HISTORY
                    </h6>
                  </div>
                </Card>
              </Col>
              <Col className="">
                <Card style={{ borderRadius: 20 }}>
                  <img
                    class=""
                    src={Img2}
                    alt="Card"
                    height={150}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <div
                    class="card-body bg-gradient-info p-2"
                    style={{
                      borderBottomRightRadius: 20,
                      borderBottomLeftRadius: 20,
                    }}
                  >
                    <h6 class="card-text text-white">CHAT WITH YOUR DOCTOR</h6>
                    <small class="card-text text-white ">(messaging platform)</small>
                  </div>
                </Card>
              </Col>
              <Col className="">
                <Card style={{ borderRadius: 20 }}>
                  <img
                    class=""
                    src={Img3}
                    alt="Card"
                    height={150}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <div
                    class="card-body bg-gradient-info"
                    style={{
                      borderBottomRightRadius: 20,
                      borderBottomLeftRadius: 20,
                    }}
                  >
                    <h6 class="card-text text-white">UPLOAD PATIENT VIDEO</h6>
                  </div>
                </Card>
              </Col>
              <Col className="">
                <Card style={{ borderRadius: 20 }}>
                  <img
                    class=""
                    src={Img4}
                    alt="Card"
                    height={150}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <div
                    class="card-body bg-gradient-info"
                    style={{
                      borderBottomRightRadius: 20,
                      borderBottomLeftRadius: 20,
                    }}
                  >
                    <h6 class="card-text text-white">PATIENT PREVIOUS VIDEO</h6>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row className="mt-5 p-5 border-0">
              
              <Col className="ms-5">
                <Card style={{ borderRadius: 20, height: 350, width: 700 }}>
                  <img
                    class=""
                    src={ChatBot}
                    alt="Card"
                    height={350}
                    style={{
                      borderRadius: 20,
                      width: 700,
                    }}
                  />
                </Card>
              </Col>
              <Col className="">
                <Card
                  className="bg-gradient-info "
                  style={{ borderRadius: 20, height: 350, width: 400 }}
                >
                  <h4 className="text-white fw-bold mt-4 text-center">
                    SBOT
                  </h4>
                  <CardBody>
                    <CardText className="text-white">
                      HI, I'M SBOT !!
                    </CardText>
                    <div className="mt-2">
                      <CardText className="text-white">
                        <small>I'M HERE FOR YOU 24/7. 
                        NO COUCHES, NO MEDS, NO CHLOHOOD STUFF.
                        JUST STRATEGES TO IMPROVE YOUR MOOD.</small>
                      </CardText>
                    </div>
                    <div className="mt-5 text-center">
                      <Button style={{ borderRadius: 20 }}>
                        LET'S START
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default PatientProfile;
