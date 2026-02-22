import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import SectionTitle from "../components/SectionTitle";

// Imported certificate images
import CloudCert from "../assets/images/Cloud Computing-udemy.jpg";
import javafullstack from "../assets/images/udemy.jpg";
import figma from "../assets/images/LUEFGSEP124335_page-0001.jpg";
import python from "../assets/images/The Joy of Computing using Python.jpg";
import java from "../assets/images/Nirmalkumar C_NPTEL_ Programming in java_page-0001.jpg";
import probra from "../assets/images/Product and Brand Management_page-0001.jpg";
import pysch from "../assets/images/Psychology of Learning.jpg";

// Certificates data array
const certificatesData = [
  {
    id: 1,
    src: CloudCert,
    title: "Cloud Computing Certificate",
    description: "Completed a course on Cloud Computing fundamentals and deployment models.",
  },
  {
    id: 2,
    src: javafullstack,
    title: "Fullstack Java Certificate",
    description: "Udemy course on Fullstack Java development with practical projects.",
  },
  {
    id: 3,
    src: figma,
    title: "Figma Design Certificate",
    description: "Completed UI/UX design course using Figma for prototyping and design workflows.",
  },
  {
    id: 4,
    src: python,
    title: "Python Programming Certificate",
    description: "Completed course on Python programming, including data structures and problem-solving.",
  },
  {
    id: 5,
    src: java,
    title: "Programming in Java Certificate",
    description: "NPTEL course on Java programming with a focus on OOPS and application development.",
  },
  {
    id: 6,
    src: probra,
    title: "Product & Brand Management Certificate",
    description: "Completed course on marketing strategies, brand building, and product management.",
  },
  {
    id: 7,
    src: pysch,
    title: "Psychology of Learning Certificate",
    description: "Completed course on learning psychology and cognitive development principles.",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-5 bg-light">
      <Container>
        {/* Section Title */}
        <SectionTitle
          title="Certificates"
          subtitle="All My Achievements and Recognitions"
        />

        {/* Grid layout */}
        <Row className="mt-4">
          {certificatesData.map((item) => (
            <Col md={6} lg={4} key={item.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.src}
                  style={{ objectFit: "contain", maxHeight: "300px" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
