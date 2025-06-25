import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import AboutBanner from "../Components/AboutBanner";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Map from "../Components/Map";

export default function About() {
  return (
    <>
      <div className=" fadeIn animated ">
        <AboutBanner heading="KRISHTEC"
        
         />
        <Row className="no-gutters mt-4">
          <Container>
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
                <p className=" font-italic">
                  If you need this contact form to send email to your inbox, you
                  may follow our contact page for more detail.
                </p>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters mt-sm-3">
          <Container className="mt-sm-5">
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
                <h1 className="mb-3 mt-4 font-weight-bold">
                  Contact <span className="textColor">Us</span>
                </h1>
                <p>Let’s have a discussion</p>
              </Col>
              <Col sm={{ offset: 2, span: 8 }} className="mt-4 mb-5">
                <Row>
                  <Col sm="12">
                    <ContactForm />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters mt-sm-5">
          <Col sm="12">
            <Map />
          </Col>
        </Row>

        <Footer />
      </div>
    </>
  );
}
