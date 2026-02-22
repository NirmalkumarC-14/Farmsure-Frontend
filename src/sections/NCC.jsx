import React from "react";
import { Container, Row, Col, Card, Carousel  } from "react-bootstrap";
import SectionTitle from "../components/SectionTitle";
import ncc1 from "../assets/images/ncc1.jpg";
import ncc2 from "../assets/images/ncc 2.jpeg";
import bcert from "../assets/images/bcert.jpeg";
import blc from "../assets/images/blc.png";

const nccMedia = [
  { id: 1, src: ncc1, alt: "NCC Photo 1" },
  { id: 2, src: ncc2, alt: "NCC Camp 2" },
  { id: 3, src: bcert, alt: "NCC Certificate" },
  { id: 4, src: blc, alt: "BLC Camp" },
];

const NCC = () => {
  const nccAchievements = [
    {
      id: 1,
      title: "ANNUAL TRAINING CAMPS",
      // year: "July 2024 & July 2025",
      description:
        "Completed a 10-day NCC training camp with drill exercises, field craft, and sports competitions.",
    },
    {
      id: 2,
      title: "Basic Leadership Course Camp (BLC)",
     
      description:
        "Attended a 12-day leadership training camp focusing on team-building and leadership skills and further got selected for Advanced leadership camp.",
    },
    {
      id: 3,
      title: "B & C-Certificate Examination",
      
      description: "Successfully completed the B & C-Certificate examination with A grade in both.",
    },
  ];


  return (
    <section id="ncc" className="py-5 bg-light">
      <Container>
        {/* Section Title */}
        <SectionTitle
          title="National Cadet Corps (NCC)  (2023-2026)"
          subtitle="My NCC Journey"
        />

        <Carousel fade className="my-4">
          {nccMedia.map((item) => (
            <Carousel.Item key={item.id} interval={3000}>
              <img
              className="d-block mx-auto rounded shadow"
              src={item.src}
              alt={item.alt}
              style={{
                width: "auto",          // keep original width
                height: "auto",         // keep original height
                maxWidth: "100%",       // scale down if larger than container
                maxHeight: "600px",     // optional, so extremely tall images don't break layout
              }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <Row className="mt-4">
          <SectionTitle
          subtitle="Key Contributions and Achievements"
          />
          {nccAchievements.map((item) => (
            <Col md={6} lg={4} key={item.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <br />
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

export default NCC;
