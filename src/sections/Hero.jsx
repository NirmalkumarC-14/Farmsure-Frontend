import { Container, Row, Col, Button } from "react-bootstrap";
import heroimg from "../assets/images/hero.jpg";
import resume from "../assets/resume.pdf";
function Hero() {
  return (
    <section id="hero" className="hero-section d-flex align-items-center">

      <Container>
        <Row className="align-items-center">
          {/* RIGHT IMAGE */}
          <Col md={6} className="text-center">

            <img
              src={heroimg}
              alt="profile"
              className="hero-image"
            />

          </Col>

          {/* LEFT CONTENT */}
          <Col md={6}>

            <h1 className="hero-title">
              Hi, I'm <span>Nirmalkumar C</span>
            </h1>

            <h4 className="hero-subtitle">
              A Passionate Web Developer 
            </h4>

            <p className="hero-text">
              I build responsive web applications and modern
              digital solutions using React and frontend
              technologies.
            </p>

            <div className="hero-buttons">

              <Button
                variant="dark"
                href="#projects"
                className="me-3"
              >
                View Projects
              </Button>

              <Button
                variant="outline-dark"
                href={resume}
                target="_blank"
              >
                Download Resume
              </Button>

            </div>

          </Col>


        </Row>
      </Container>

    </section>
  );
}

export default Hero;
