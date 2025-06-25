import React, { useEffect, useRef, useState } from "react";
import { Row, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import companyLogo from "../Images/ic3.png";
import iso from "../Images/iso.png";
import InternshipPage from "../Pages/InternshipPage";
import OneCreditCourse from '../Pages/OneCreditCourse';
import ThreeCreditCourse from '../Pages/ThreeCreditCourse';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import Chatbot from "./ChatBot";
import './Menubar.css';

export default function Menubar() {
  const navbarScroll = useRef(null);
  const [menucolor, setMenuColor] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbarScroll.current.classList.add("navbarBg");
      setMenuColor(true);
    } else {
      navbarScroll.current.classList.remove("navbarBg");
      setMenuColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router basename="">
      <Row className="no-gutters fixed-top" ref={navbarScroll}>
        <Container>
          <Row>
            <div className="w-100">
              <Navbar expand="sm" expanded={expanded} className={menucolor ? "scrollLink" : ""}>
                <Navbar.Brand>
                  <NavLink to="/" exact className="blackColor text-decoration-none d-flex align-items-center">
                    <img src={companyLogo} alt="Internship in 5G" style={{ height: "60px" }} />
                  </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto menu-items">
                    <NavLink to="/" exact className="nav-link" onClick={() => setExpanded(false)}>Home</NavLink>
                    <NavDropdown
                      title="Services"
                      id="services-dropdown"
                      onMouseEnter={(e) => e.target.click()}
                      onMouseLeave={(e) => e.target.blur()}
                    >
                      <NavDropdown
                        title="For Industry"
                        id="industry-dropdown"
                        drop="start"
                        className="dropdown-submenu"
                      >
                        <NavDropdown.Item>
                          Software Automation
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          Hardware Automation
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          Industrial Robotics
                        </NavDropdown.Item>
                        <NavDropdown
                          title="Industrial IoT"
                          id="industrial-iot-dropdown"
                          drop="start"
                          className="dropdown-submenu"
                        >
                          <NavDropdown
                            title="Industrial IoT Gateways"
                            id="iot-gateways-dropdown"
                            drop="start"
                            className="dropdown-submenu"
                          >
                            <NavDropdown.Item>
                              MPC-311
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              UCM-316
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              MPC-730
                            </NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown.Item>
                            IP65/IP68 Dataloggers
                          </NavDropdown.Item>
                          <NavDropdown
                            title="Wireless Modbus Bridges"
                            id="modbus-dropdown"
                            drop="start"
                            className="dropdown-submenu"
                          >
                            <NavDropdown.Item>
                              DM-108
                            </NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown
                            title="Data Acquisition Modules"
                            id="data-acquisition-dropdown"
                            drop="start"
                            className="dropdown-submenu"
                          >
                            <NavDropdown.Item>
                              AIM-8
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              DIN-32
                            </NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown
                            title="M-Bus Converters"
                            id="mbus-converter-dropdown"
                            drop="start"
                            className="dropdown-submenu"
                          >
                            <NavDropdown.Item>
                              RS485/RS232 to M-Bus Converter
                            </NavDropdown.Item>
                          </NavDropdown>
                        </NavDropdown>
                        <NavDropdown.Item>
                          ADAS
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          Precision Agriculture
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          Water Quality Management
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          Atal Kits
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          LoRa
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown
                        title="For Academics"
                        id="academics-dropdown"
                        drop="start"
                        className="dropdown-submenu"
                      >
                        <NavDropdown
                          title="L&D"
                          id="ld-dropdown"
                          drop="start"
                          className="dropdown-submenu"
                        >
                          <NavDropdown
                            title="Credit Course"
                            id="credit-course-dropdown"
                            drop="start"
                            className="dropdown-submenu"
                          >
                            <NavDropdown.Item as={NavLink} to="/credit-course-1" onClick={() => setExpanded(false)}>
                              One Credit Course
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/credit-course-3" onClick={() => setExpanded(false)}>
                              Three Credit Course
                            </NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown.Item as={NavLink} to="/Internship" onClick={() => setExpanded(false)}>
                            Internship
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown.Item>
                          COE-IOT,AI SETUP
                        </NavDropdown.Item>
                     
                      </NavDropdown>
                    </NavDropdown>
                                        <NavLink to="/About" className="nav-link" onClick={() => setExpanded(false)}>About Us</NavLink>

                    <NavLink to="/Contact" className="nav-link" onClick={() => setExpanded(false)}>Contact</NavLink>
                  </Nav>
                  <div className="right-icons d-flex align-items-center">
                    <img src={iso} alt="iso" className="d-none d-sm-block iso-image" />
                    <a className="mail-icon-container" href="https://krishtec.co.in/webmail">
                      <FaEnvelope className="icon" />
                    </a>
                    <a className="profile-icon-container" href="https://www.zoho.com/people/login.html">
                      <FaUser className="icon" />
                    </a>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Row>
        </Container>
      </Row>
      <ScrollToTop>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Internship" component={InternshipPage} />
        <Route path="/credit-course-1" component={OneCreditCourse} />
        <Route path="/credit-course-3" component={ThreeCreditCourse} />
      </ScrollToTop>
      <Chatbot />
    </Router>
  );
}