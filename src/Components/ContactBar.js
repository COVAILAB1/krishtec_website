import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ContactBar() {
  return (
    <>
      <Row className="no-gutters mt-5 mb-sm-5">
        <Container>
          <Row>
            <Col sm={{ offset: 2, span: 8 }} className="text-center">
              <h1 className="mb-4">
                Get, keep and grow more customers. We’re here to help.
              </h1>
              <Link
                className="btn-lg knowMoreBtn text-white text-decoration-none"
                to="/Contact"
              >
                Contact us
              </Link>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
