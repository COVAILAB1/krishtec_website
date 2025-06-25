import React from "react";
import { Col } from "react-bootstrap";
export default function ServicesList(props) {
  return (
    <>
      <Col sm="4" className="teams text-center ">
        <div className="servicesList p-3">
          <img src={props.img} alt="" className="img-fluid rounded mb-3 mt-3" />
          <h5>{props.name}</h5>

          <p className="mt-3">{props.txt}</p>
        </div>
      </Col>
    </>
  );
}
