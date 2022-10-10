import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardImg,
  Container,
  Row,
  Col,
  CardHeader,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import MedicalImg from "../../assets/img/theme/t-w-1.jpg";

import Img1 from "../../assets/img/theme/m-h.png";
import Img2 from "../../assets/img/theme/k-t.png";
import Img3 from "../../assets/img/theme/s-d.png";
import Img4 from "../../assets/img/theme/tt-l.png";

import SimpleFooter from "components/Footers/SimpleFooter.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-primary">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        YOU ARE NOT ALONG
                        <span>connect with sentry</span>
                      </h1>
                      <p className="lead text-white">
                        " We belive no-one affected by mental illness should be
                        along when they face crisis, distress or despair. "
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Card style={{ borderRadius: 20 }}>
                <CardImg
                  style={{ height: 500, width: 1000, borderRadius: 20 }}
                  src={MedicalImg}
                />
              </Card>
            </Container>
          </section>
          <section className="section section-lg mt--100">
            <Row className="p-5 border-0 bg-secondary">
              <Col className="">
                <Card style={{ borderRadius: 20 }}>
                  <CardHeader
                    className="text-center text-white bg-gradient-info p-0 pt-1"
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  >
                    <h6 className="text-white">TIPS TO BOOST YOUR </h6>
                    <h6 className="text-white">MENTAL HEALTH </h6>
                  </CardHeader>
                  <img
                    className=""
                    src={Img1}
                    alt="Card"
                    height={260}
                    style={{
                      borderRadius: 20,
                    }}
                  />
                </Card>
              </Col>
              <Col className="">
                <Card style={{ borderRadius: 20 }}>
                  <img
                    className=""
                    src={Img2}
                    alt="Card"
                    height={150}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <div
                    className="card-body p-0"
                    style={{
                      borderBottomRightRadius: 20,
                      borderBottomLeftRadius: 20,
                      height: 182
                    }}
                  >
                    <p className="card-text bg-gradient-info text-white px-1">
                      KEEP IT COOL FOR A GOOD NIGHT'S SLEEP
                    </p>
                    <div className="p-2">
                    <small className="card-text">
                    A community in which all people achieve their full
                        potential for health and well-being across the lifespan.
                        We work to be trusted by patients, a valued partner in
                    </small>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col className="">
              <Card style={{ borderRadius: 20 }}>
                  <img
                    className=""
                    src={Img3}
                    alt="Card"
                    height={150}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <div
                    className="card-body p-0"
                    style={{
                      borderBottomRightRadius: 20,
                      borderBottomLeftRadius: 20,
                      height: 182
                    }}
                  >
                    <p className="card-text bg-gradient-info text-white px-1">
                      START DAY WITH YOUR CUP OF TEA
                    </p>
                    <div className="p-2">
                    <small className="card-text">
                    A community in which all people achieve their full
                        potential for health and well-being across the lifespan.
                        We work to be trusted by patients, a valued partner in
                    </small>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col className="">
              <Card style={{ borderRadius: 20 }}>
                  <img
                    className=""
                    src={Img4}
                    alt="Card"
                    height={150}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <div
                    className="card-body p-0"
                    style={{
                      borderBottomRightRadius: 20,
                      borderBottomLeftRadius: 20,
                      height: 182
                    }}
                  >
                    <p className="card-text bg-gradient-info text-white px-1">
                     TAKE TIME TO LAUGH
                    </p>
                    <div className="p-2">
                    <small className="card-text">
                    A community in which all people achieve their full
                        potential for health and well-being across the lifespan.
                        We work to be trusted by patients, a valued partner in
                    </small>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/team-work-1.png")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Our Vision
                      </h4>
                      <p className="lead text-italic text-white">
                        A community in which all people achieve their full
                        potential for health and well-being across the lifespan.
                        We work to be trusted by patients, a valued partner in
                        the community, and creators of positive change.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="text-center">
                      <h3>ARE YOU OKAY ?</h3>
                      <h3>HEAL YOUR MIND AND SOUL</h3>
                    </div>

                    <p className="lead">
                      Close your eyes for a moment and take a few deep breaths.
                      Check-in with yourself: how are you feeling mentally? And
                      emotionally?
                    </p>
                    <p>
                      What about your body? See if you can notice any mental or
                      physical tension or sensations.
                    </p>
                    <p>
                      What about your body? See if you can notice any mental or
                      physical tension or sensations.
                    </p>
                    <Button color="info">GET STARTED</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
