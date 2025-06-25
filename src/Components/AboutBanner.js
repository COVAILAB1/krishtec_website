import React from "react";
import { Row, Container, Col } from "react-bootstrap";
export default function AboutBanner(props) {
  return (
    <>
      
      <Row className="no-gutters pt-5" style={{ position: "relative" }}>
        {/* Adding custom image */}
        <img
          src={props.customImage}
          alt=""
          style={{
            width: "100%",
            height: "35vh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div className="overlay"></div>
        <Container className="my-5">
          <Row>
            <Col sm="12" className="text-center mb-4">
            <h1 className="yellowColor" style={{ fontStyle: "italic" }}>
  {props.heading}
</h1>

              <hr className="lineStyle" />
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
