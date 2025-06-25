import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Icons from react-icons

function Footer() {
  return (
    <>
      <Row className="no-gutters footerBg text-white">
        <Container>
          <Row>
            <Col sm="12">
            <Row>
  <Col  md="4">
    <h1 style={{position:"relative",marginTop:"40px"}}>KRISHTEC</h1>
    <p style={{ color: "white" }}>
      Developer of IoT-based systems intended to solve environmental challenges and help in industrial and home automation.
    </p>
  </Col>

                <Col md="2">
                  <h5>Resources</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/" className="text-white">
                        Home
                      </Link>
                    </li><br></br>
                    <li>
                      <Link to="/About" className="text-white">
                        About
                      </Link>
                    </li><br></br>
                    <li>
                      <Link to="/Services" className="text-white">
                        Services
                      </Link>
                    </li><br></br>
                    <li>
                      <Link to="/Contact" className="text-white">
                        Contact
                      </Link>
                    </li><br></br>
                  </ul>
                </Col>
                <Col md="3">
                  <h5>Opening Hours</h5>
                  <ul className="list-unstyled">
                    <li>Monday: 10.00 am - 7.00 pm</li><br></br>
                    <li>Tuesday: 10.00 am - 7.00 pm</li><br></br>
                    <li>Wednesday: 10.00 am - 7.00 pm</li><br></br>
                    <li>Thursday: 10.00 am - 7.00 pm</li><br></br>
                    <li>Friday: 10.00 am - 7.00 pm</li><br></br>
                    <li>Saturday: 10.00 am - 4.00 pm</li><br></br>
                    <li>Sunday: Closed</li>
                  </ul>
                </Col>
                <Col md="3">
                  <h5>Contact Us</h5>
                  <ul className="list-unstyled">
                    <li>Ist Floor, Sanhasa Square,</li>
                    <li>Bharathi Park, 3rd Cross,</li>
                    <li>Coimbatore-641043</li><br></br>
                    <li>
                      Phone:{" "}
                      <a href="tel:+919894954680" className="text-white">
                        +91 9894954680
                      </a>
                    </li>
                    <li>
                      Phone:{" "}
                      <a href="tel:+917825933039" className="text-white">
                        +91 7825933039<br></br><br></br>
                      </a>
                    </li>
                    <li>
                      Email:{" "}
                      <a href="mailto:director@krishtec.co.in" className="text-white">
                        director@krishtec.co.in
                      </a>
                    </li><br></br>
                    <li>
                      Website:{" "}
                      <a href="https://www.krishtec.co.in" className="text-white">
                        www.KrishTec.co.in
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col sm="12" className="text-center">
                  <hr className="mt-5" />
                  <p className="text-white">
                    Follow Us:
                    <span className="ml-3">
                      <a href="https://www.facebook.com/krishtec/" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaFacebook className="mx-2" size={24} />
                      </a>
                      <a href="https://www.linkedin.com/company/krishtec/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaTwitter className="mx-2" size={24} />
                      </a>
                      <a href="https://www.instagram.com/covailabs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaInstagram className="mx-2" size={24} />
                      </a>
                      <a href="https://www.linkedin.com/company/krishtec/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaLinkedin className="mx-2" size={24} />
                      </a>
                    </span>
                  </p>
                  <p className="text-white">
                    ISO 9001: 2015 Certified
                  </p>
                  <p className="text-white">
                    Copyright ©  KRISHTEC 
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}

export default Footer;
