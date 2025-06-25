import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import AboutBanner from "../Components/AboutBanner";
import CounterList from "../Components/CounterList";
import CountUpAnimation from "../Components/CountUpAnimation";
import Footer from "../Components/Footer";
import ContactBar from "../Components/ContactBar";
import customBanner from "../Images/img3.png";
import video from "../Images/cube.mp4"
import Lists from '../Components/Lists';
export default function About() {
  return (
    <>
      <div className="fadeIn animated">
        <AboutBanner
          heading="KRISHTEC"
          customImage={customBanner}
        />

        <Row className="no-gutters mt-4">
          <Container>
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
                <blockquote className="mt-4 font-italic">
                  <sup>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </sup>{" "}
                  At KRISHTEC, we are committed to driving innovation and solving complex environmental and industrial challenges. Our expertise in IoT and Machine Learning empowers us to deliver cutting-edge solutions that enhance operational efficiency and sustainability.{" "}
                  <sup>
                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                  </sup>
                </blockquote>
              </Col>
            </Row>
          </Container>
        </Row>

        {/* Video Section */}
        <Row className="no-gutters mt-sm-5">
          <Container className="mt-sm-5">
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
                {/* <h1 className="mb-3 mt-4 font-weight-bold">
                  What we are  <span className="textColor">doing here</span>
                </h1> */}
                <p>
                  Learn more about KRISHTEC, our mission, and the solutions we offer to our clients.
                </p>
              </Col>
              <Col sm={{ offset: 2, span: 8 }} className="mt-4 mb-5">
                {/* Embedding Video (YouTube example) */}
                <div className="video-container justify-content-center">
                <a href={video} target="_blank" rel="noopener noreferrer">
              <video  autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
           <Row className="no-gutters mt-sm-5">
          <Container className="mt-md-5 pt-md-5 mt-5">
            <Row>
            <Col md="6">
  <img
    src={require("../Images/left-image.png")}
    alt="krishtec"
    className="img-fluid mt-md-5 mb-4 mb-md-0 d-none d-md-block"
  />
</Col>

              <Col md="6">
                <Lists
                  img={require("../Images/about-icon-01.png")}
                  heading="Developer of IoT-based systems"
                  text="KRISHTEC is a leader in IoT-based systems intended to solve environmental challenges and help in industrial and home automation."
                  animateDuration="300ms"
                />
                <Lists
                  img={require("../Images/about-icon-01.png")}
                  heading="Founded in 2014"
                  text="Started with an intention to create an Industry-Academic relationship, KRISHTEC was selected as one of the top ten startups at IISF 2017 in Chennai."
                  animateDuration="600ms"
                />
              <Lists
  img={require("../Images/about-icon-01.png")}
  heading="Automation and AI"
  text="Harnessing cutting-edge technologies, we deliver innovative automation and AI solutions to enhance operational efficiency and drive business transformation."
  animateDuration="900ms"
/>

                <Lists
                  img={require("../Images/about-icon-01.png")}
                  heading="Expanding services"
                  text="We are involved in the development of ML, WSN, IoT, M2M, ADAS, and LoRA-based products."
                  animateDuration="1200ms"
                />
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters couterSection py-4 text-white mt-5">
          <div className="overlay2"></div>
          <Container>
            <Row className="my-4 justify-content-between">
              <CounterList
                icon="fa fa-users"
                number={<CountUpAnimation endAnimation={7} />}
                info="Services Offered"
              />
              
              <CounterList
                icon="fa fa-calendar"
                number={<CountUpAnimation endAnimation={10} />}
                info="Years in Business"
              />
              <CounterList
                icon="fa fa-graduation-cap fa-3x mb-3"
                number={<CountUpAnimation endAnimation={10} />}
                info="Courses Offered"
              />
            </Row>
          </Container>
        </Row>

        <ContactBar />
        <Footer />
      </div>
    </>
  );
}
