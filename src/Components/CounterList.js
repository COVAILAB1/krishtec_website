import React from "react";
import { Col } from "react-bootstrap";
export default function CounterList(props) {
  return (
    <>
      <Col xs="6" sm="3" className="text-center mb-4 mb-sm-0">
        <i className={`${props.icon} couterIcon`} aria-hidden="true"></i>
        <h1 className="mt-2 counter">{props.number}+</h1>
        <h5 className="font-weight-light text-uppercase">{props.info}</h5>
      </Col>
    </>
  );
}
