import React, { useEffect } from "react";

import { Row, Container, Col } from "react-bootstrap";
import WOW from "wowjs";
import AboutBanner from "../Components/AboutBanner";
import Footer from "../Components/Footer";
import ServicesList from "../Components/ServicesList";
import ServicesList2 from "../Components/ServiceList2";
import customBanner from "../Images/img2.png"
export default function Services() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  }, []);

  return (
    <>
      <div className=" fadeIn animated ">
      <AboutBanner
          heading="KRISHTEC"
          customImage={customBanner}
        />
        
        <Row  className="no-gutters mt-4">
          <Container>
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
              
                <p style={{ marginTop: '50px' }} className=" font-italic">
                KrishtTec is a leading technology company specializing in innovative solutions across various domains. 
                We offer comprehensive internships that provide hands-on experience in cutting-edge technologies. 
                Our One Credit Courses are designed to enhance your skills with real-world applications.     
                </p>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters mt-sm-4">
          <Container className="mt-sm-5">
            <Row>
              <Col sm="12" className="mt-4 mb-5">
                <Row>
                {/* <Link to="/internship"> */}
    <ServicesList
      img={require("../Images/internship.jpg")}
      name="Internships"
      txt="We offer internships that provide hands-on experience in various cutting-edge technologies. Our program focuses on skill development and real-world application, ensuring you're well-prepared for your future career."
    />
  {/* </Link>  */}
<ServicesList
  img={require("../Images/r&D.jpg")}
  name="R&D"
  txt="Our Research and Development team is dedicated to exploring innovative solutions in areas like AI, IoT, and robotics. We foster creativity and problem-solving to drive advancements in modern technology."
/>
<ServicesList
  img={require("../Images/product_dev.jpg")}
  name="Product Development"
  txt="We specialize in product development from ideation to market-ready solutions. Our process involves prototyping, testing, and refinement to ensure your product meets industry standards and user needs."
/>
<ServicesList
  img={require("../Images/th (6).jpg")}
  name="One Credit Courses"
  txt="Our One Credit Courses offer intensive, hands-on learning experiences in various emerging technologies, including IoT, AI, and Embedded Systems. These courses are designed to equip students and professionals with practical skills in a short time, making them industry-ready."
/>
<ServicesList
  img={require("../Images/corporate-training (1).jpg")}
  name="Training"
  txt="We provide specialized corporate training programs aimed at enhancing technical skills in fields such as Machine Learning, IoT, and Automation. Our training is tailored to meet the unique needs of businesses, helping teams stay competitive in a rapidly evolving tech landscape."
/>

                </Row>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="no-gutters mt-sm-5">
          <Container className="mt-sm-5">
            <Row>
              <Col sm={{ offset: 2, span: 8 }} className="text-center">
                <h1 className="mb-3 mt-4 font-weight-bold">
                  <span className="textColor">Top Services</span>  We Provide
                  
                </h1>
              
              </Col>
              <Col sm="12" className="mt-5 mb-sm-5">
                <Row>
                  <ServicesList2
                    animateDuration="300ms"
                    img={require("../Images/robo.jpg")}
                    name="Robotics"
                    txt="LeGo robotics, M2M robo."
                    
                  />
                  <ServicesList2
                    animateDuration="600ms"
                    img={require("../Images/elaboration.jpg")}
                    name="Elaboration Of The Core"
                    txt="We are here for upgrading your skills."
                  />
                  <ServicesList2
                    animateDuration="900ms"
                    img={require("../Images/one credit course.jpg")}
                    name="Industry Offered OCC"
                    txt="OCC for Academic Institutes."
                    
                  />
                </Row>
                <Row className="mt-sm-5">
  <ServicesList2
    animateDuration="1200ms"
    img={require("../Images/iot-removebg-preview.png")}
    name="IoT"
    txt="Solution provider using Azure IoT, V4.0, Online Monitoring, ML, LoRa."
    imgClass="custom-image-size"
  />
  <ServicesList2
    animateDuration="1500ms"
    img={require("../Images/modern-removebg-preview.png")}
    name="Modern Technology"
    txt="DAS, RAS, Iv4.0, IoT, M2M, LoRa, LoRaWAN."
    imgClass="custom-image-size"
  />
  <ServicesList2
    animateDuration="1800ms"
    img={require("../Images/testing.jpg")}
    name="Testing For Perfection"
    txt="Circuit Testing."
    imgClass="custom-image-size"
  />
  <ServicesList2
    animateDuration="2100ms"
    img={require("../Images/Screenshot 2024-09-23 103335 (1).png")}
    name="Led Screen Displays"
    txt="Wonderful Indoor And Outdoor Screens..."
    imgClass="custom-image-size"
  />
</Row>

              </Col>
            </Row>
          </Container>
        </Row>

        <Footer />
      </div>
    </>
  );
}
