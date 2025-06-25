import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import Testimonials from "../Components/Testimonials";
export default function TestimonialsSlider() {
  return (
    <>
      <Carousel
        interval={3000}
        pauseOnHover={false}
        nextIcon={<i className="fa fa-angle-right" />}
        prevIcon={<i className="fa fa-angle-left" />}
        className="testimonialCarousel"
      >
        <Carousel.Item>
          <Row className="py-5">
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/KIT.png")}
                Name=""
                title=""
                feedback="KIT- Kalaignarkarunanidhi Institute of Technology, Coimbatore.            "
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
              </Testimonials>
            </Col>
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/VCE.png")}
                Name=""
                title=""
                feedback="Vivekanandha College of Engineering for Women, Tiruchengode.                                 "
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>

              </Testimonials>
            </Col>
          </Row>
        </Carousel.Item>
       
        <Carousel.Item>
          <Row className="py-5">
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/BEC.png")}
                Name=""
                title=""
                feedback="Builders Engineering College, Nathakadaiyur.     "
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>

              </Testimonials>
            </Col>
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/GEC.png")}
                Name=""
                title=""
                feedback="Government Engineering College, Dharmapuri.    "
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>

              </Testimonials>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="py-5">
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/SEC.png")}
                Name=""
                title=""
                feedback="Sengunthar Engineering College, Tiruchengode."
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
              </Testimonials>
            </Col>
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/KCE.png")}
                Name=""
                title=""
                feedback="Karpagam College of Engineering, Coimbatore.        "
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>

                <i className="fa fa-star fa-spin"></i>
              </Testimonials>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="py-5">
            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
              <Testimonials
                imgSrc={require("../Images/VCE.png")}
                Name=""
                title=""
                feedback="Vivekanandha College of Technology for Women, Tiruchengode.             "
              >
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
                <i className="fa fa-star fa-spin"></i>
              </Testimonials>
            </Col>
           
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
