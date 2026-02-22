import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">

          {/* About Content */}
          <Col md={12}>
            <h2 className="fw-bold mb-3 text-center">About Me</h2>

            <p justify="true" className="mb-4">
              I am a passionate <strong>Fullstack Web Developer</strong> with a
              strong interest in building responsive and user‑friendly web
              applications. I enjoy turning ideas into real‑world digital
              solutions using modern web technologies.
            </p>

            <p justify="true" className="mb-4">
              I have experience working with <strong>React, JavaScript,
              Bootstrap, HTML, CSS, Java and Python</strong>, and I continuously focus on
              improving my frontend and backend development skills.
            </p>

            <p justify="true"  className="mb-4">
              During my journey, I completed a <strong>Web Developer Internship</strong> at <strong>Dhiksha Tech Solutions Pvt Ltd</strong>,
              where I worked on real‑time projects and gained hands‑on industry experience.
            </p>

            <p className="mb-0" justify="true">
              My goal is to grow as a developer, contribute to impactful
              projects, and build scalable applications that solve practical
              problems.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;