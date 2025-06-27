import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
import WOW from "wowjs";
import Slider from "../Components/Banner/Slider"; // Existing Slider
import Features from "../Components/Features";
import Lists from "../Components/Lists";
import TestimonialsSlider from "../Components/TestimonialsSlider";
import Footer from "../Components/Footer";
import ImageSlider from "../Components/ImageSlider"; // New ImageSlider
import "./Home.css";

export default function Home() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const footer = useMemo(() => {
    return <Footer />;
  }, []);

  return (
    <>
      <div className="fadeIn animated">
        <Row className="no-gutters bannerBg">
          <Container>
            <Row>
              <Col sm="12">
                {/* Original Slider */}
                <Slider />
              </Col>
            </Row>
          </Container>
        </Row>
        <div className="bg-img">
          {/* New ImageSlider Component */}
          <Row className="no-gutters mt-md-5">
            <Container>
              <Row>
                <Col sm="12">
                  <ImageSlider /> {/* New ImageSlider inserted here */}
                </Col>
              </Row>
            </Container>
          </Row>
          
          {/* Static KRISHTEC Text */}
          <div className="static-krishtec">
            <h1>Krishtec Offers Internship</h1>
          </div>
        </div>

              <div className="scrolling-text-container">
          <div className="scrolling-text-content">
            <p>
              For more details,{" "}
              <Link to="/internship" className="scrolling-link">
                Click here!!
              </Link>
            </p>
          </div>
        </div>
        {/* Rest of your Home component layout */}
        <Row className="no-gutters mt-md-5">
          <Container className="mt-md-5">
            <Row>
              <Features />
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters mt-sm-5">
          <Container className="mt-sm-5">
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
                <h1 className="mb-3 mt-4 font-weight-bold">
                  Colleges that have signed{" "}
                  <span className="textColor">MOU With KRISHTEC</span>
                </h1>
                <p>
                  KRISHTEC has established partnerships with leading academic
                  institutions through MOUs, fostering industry-academia
                  collaboration aimed at driving innovation and excellence.
                  These MOUs are designed to bridge the gap between theoretical
                  research and practical application, providing students with
                  hands-on experience in IoT-based solutions and other
                  cutting-edge technologies. Together, we aim to cultivate a new
                  generation of skilled professionals and advance research that
                  addresses real-world challenges, ensuring both academic growth
                  and industry relevance.
                </p>
              </Col>
              <Col sm="12" className="overflow-hidden">
                <TestimonialsSlider />
              </Col>
            </Row>
          </Container>
        </Row>

        {footer}
      </div>
    </>
  );
}