import React from "react";
import { Row, Col } from "react-bootstrap";
export default function Testimonials(props) {
  return (
    <>
      <Row className="testimonialslider no-gutters rounded text-white m-md-5 text-center">
        <Col sm="12">
          <img src={props.imgSrc} alt="" />
          <h4>{props.Name}</h4>
          <p className="text-white">{props.feedback}</p>
          {props.children}
          <br />
          <small>{props.title}</small>
        </Col>
      </Row>
    </>
  );
}
