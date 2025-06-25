// src/Pages/MouPage.js
import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { FaUniversity, FaHandshake, FaFileSignature } from "react-icons/fa"; // Icons for university, handshake, and document
import './MOUpage.css'

export default function MouPage() {
  return (
    <section id="mouPage" className="mt-9">
      <Container>
        <h2 className="text-center mb-4">Memorandum of Understanding (MOU) Overview</h2>
        
        <Row className="mb-4">
          <Col lg={4} md={6} sm={12}>
            <Card className="shadow-lg border-primary">
              <Card.Body>
                <FaUniversity size={50} color="#007bff" className="mb-3" />
                <Card.Title>Academic Collaborations</Card.Title>
                <Card.Text>
                  Our MOU with various academic institutions fosters collaboration in research, curriculum development, and student exchange programs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="shadow-lg border-success">
              <Card.Body>
                <FaHandshake size={50} color="#28a745" className="mb-3" />
                <Card.Title>Industry Partnerships</Card.Title>
                <Card.Text>
                  Through strategic partnerships with industries, we aim to bridge the gap between academia and the workforce, enhancing employability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="shadow-lg border-info">
              <Card.Body>
                <FaFileSignature size={50} color="#17a2b8" className="mb-3" />
                <Card.Title>Research Agreements</Card.Title>
                <Card.Text>
                  Our research MOUs outline collaborative efforts to advance scientific inquiry and innovation in key areas of technology and engineering.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h3 className="text-center mb-4" id="mou-importance">Why MOU Matters?</h3>
        <Row>
          <Col>
            <Card className="border-light">
              <Card.Body>
                <Card.Title>Purpose of MOU</Card.Title>
                <Card.Text>
                  An MOU serves as a formal agreement between organizations, outlining the framework for cooperation, shared goals, and mutual expectations. This ensures clear communication and direction in collaborative ventures.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-light">
              <Card.Body>
                <Card.Title>Benefits of MOU</Card.Title>
                <Card.Text>
                  MOUs help clarify the roles and responsibilities of each party, ensuring smoother execution of projects, reducing misunderstandings, and fostering long-term partnerships.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h3 className="text-center mb-4" id="college-details">College Collaborations</h3>
        <Row>
          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card className="shadow-lg border-primary">
              <Card.Body>
                <Card.Title>KIT - Kalaignarkarunanidhi Institute of Technology</Card.Title>
                <Card.Text>
                  KIT, Coimbatore, is a renowned institution known for its academic excellence and technological advancements. Our partnership focuses on research collaboration and student exchange programs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card className="shadow-lg border-success">
              <Card.Body>
                <Card.Title>VCE - Vivekanandha College of Engineering</Card.Title>
                <Card.Text>
                  Vivekanandha College of Engineering for Women in Tiruchengode is a pioneer in promoting women in engineering. Our collaboration focuses on developing women's technical skills and advancing engineering research.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card className="shadow-lg border-info">
              <Card.Body>
                <Card.Title>BEC - Builders Engineering College</Card.Title>
                <Card.Text>
                  Builders Engineering College, Nathakadaiyur, is an emerging engineering college, and we are collaborating on research and innovation projects that drive the future of technology.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card className="shadow-lg border-warning">
              <Card.Body>
                <Card.Title>GEC - Government Engineering College</Card.Title>
                <Card.Text>
                  Government Engineering College, Dharmapuri, is known for its focus on providing quality engineering education. Our MOU with them supports research development in renewable energy and sustainable technologies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
