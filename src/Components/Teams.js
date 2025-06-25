import React from "react";
import { Col } from "react-bootstrap";
export default function Teams(props) {
  return (
    <>
      <Col sm="4" className="teams">
        <img src={props.img} alt="" className="img-fluid rounded mb-3" />
        <h5>{props.name}</h5>
        <h6>{props.title}</h6>
        <p className="mt-3">{props.txt}</p>
      </Col>
    </>
  );
}
