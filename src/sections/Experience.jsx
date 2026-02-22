import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import SectionTitle from "../components/SectionTitle";
import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import js from "../assets/images/js.png";
import react from "../assets/images/atom.png";
import bootstrap from "../assets/images/bootstrap.png";
import webhosting from "../assets/images/globe.png";
import internshipCert from "../assets/internship.pdf";

function Experience() {
  // Array of skill icons
  const skills = [
    { id: 1, img: html, alt: "HTML" },
    { id: 2, img: css, alt: "CSS" },
    { id: 3, img: js, alt: "JavaScript" },
    { id: 4, img: react, alt: "React" },
    { id: 5, img: bootstrap, alt: "Bootstrap" },
    { id: 6, img: webhosting, alt: "Web Hosting" },
  ];

  return (
    <section id="experience" className="experience-section py-5">
      <Container>
        <SectionTitle
          title="Experience"
          subtitle="My Professional Journey So Far"
        />

        <Card className="experience-card shadow-sm p-4">
          <h4 className="mb-1">Web Developer Intern</h4>
          <h6 className="text-muted">
            Dhiksha Tech Solutions Pvt. Ltd, Chennai
          </h6>
          <p className="experience-duration">June 2025 – July 2025 · 1 Month</p>

          <p className="mt-3">
            Worked as a Web Developer Intern where I contributed to
            developing responsive web applications. Gained hands-on
            experience in frontend development using modern web
            technologies and collaborated with the development team
            on real-time projects.
          </p>

          {/* SKILLS IMAGES */}
          <div className="d-flex flex-wrap mt-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="me-3 mb-2"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={skill.img}
                  alt={skill.alt}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  title={skill.alt}
                />
              </div>
            ))}
          </div>

          {/* CERTIFICATE BUTTON */}
          <div className="mt-4">
            <Button
              variant="dark"
              href={internshipCert}
              target="_blank"
            >
              View Internship Certificate
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default Experience;
