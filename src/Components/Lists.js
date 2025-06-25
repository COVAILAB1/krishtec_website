import React from "react";
import { Row, Col } from "react-bootstrap";
export default function Lists(props) {
  return (
    <>
      <Row
        className="mt-4 mt-sm-3 animated wow fadeInUp text-center text-sm-left"
        data-wow-duration={props.animateDuration}
      >
        <Col sm="3">
          <img src={props.img} alt="" className="img-fluid  mb-3 mb-sm-0" />
        </Col>
        <Col sm="9">
          <h4>{props.heading}</h4>
          <p>{props.text}</p>
        </Col>
      </Row>
    </>
  );
}
