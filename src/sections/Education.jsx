import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SectionTitle from "../components/SectionTitle";

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Business Systems",
    duration: "2023 - 2027",
    institution: "Sri Sairam Engineering College",
    marks: "8.21 CGPA",
    location: "Chennai, Tamil Nadu",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC / 12th)",
    duration: "2022 - 2023",
    institution: "Achyuta Academy, CBSE",
    marks: "92.4%",
    location: "Dindigul, Tamil Nadu",
  },
  {
    id: 3,
    degree: "Secondary School Leaving Certificate (SSLC / 10th)",
    duration: "2019 - 2020",
    institution: "Shri Maharishi Vidya Mandir, CBSE",
    marks: "71%",
    location: "Dindigul, Tamil Nadu",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-5 bg-white">
      <Container>
        {/* Section Title */}
        <SectionTitle
          title="Education"
          subtitle="My Academic Journey"
        />

        <Row className="mt-4">
          {educationData.map((item) => (
            <Col md={12} lg={4} key={item.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{item.degree}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.institution} | {item.duration}
                  </Card.Subtitle>
                  {item.marks && <Card.Text>Percentage / GPA: {item.marks}</Card.Text>}
                  <Card.Text>Location: {item.location}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
