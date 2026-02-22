import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../components/SectionTitle";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        {/* SECTION TITLE */}
        <SectionTitle
          title="Contact Me"
          subtitle="Open for internships and freelance opportunities"
        />

        <Row className="justify-content-center mt-4">
          <Col md={8} lg={6}>
            <div className="contact-info text-center">

              {/* EMAIL */}
              <h5>Email</h5>
              <p>
                <a href="mailto:nirmalkumarc14@gmail.com">
                  nirmalkumarc14@gmail.com
                </a>
              </p>

              {/* PHONE */}
              <h5>Phone</h5>
              <p>+91 8825433469</p>

              {/* LOCATION */}
              <h5>Location</h5>
              <p>Chennai, Tamil Nadu, India</p>

              {/* SOCIAL LINKS */}
              <div className="social-links mt-4 flex justify-center gap-6">
                <a
                    href="https://www.linkedin.com/in/nirmalkumar-c"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-transform duration-300 hover:scale-110"
                    style={{ fontSize: "3rem", color: "#0A66C2", margin: "0 15px" }}
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/NirmalkumarC-14"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-800 hover:text-black transition-transform duration-300 hover:scale-110"
                    style={{ fontSize: "3rem", color: "#000000", margin: "0 15px" }}
                >
                    <FaGithub />
                </a>
               </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
