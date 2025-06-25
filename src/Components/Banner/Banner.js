import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Banner(props) {
  return (
    <>
      <Row className="no-gutters mt-5 mb-sm-3 mb-2">
        <Col lg="6" className="pt-5">
          <h1 className="mt-3">{props.heading}</h1>
          <p>{props.text}</p>
          {props.children}
        </Col>
      </Row>
    </>
  );
}
