import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer-section py-4">

      <Container className="text-center">

        {/* NAME / COPYRIGHT */}
        <p className="mb-2">
          © {new Date().getFullYear()} NirmalkumarC. All Rights Reserved.
        </p>

        {/* BACK TO TOP */}
        <div className="mt-2">
          <a href="#hero" className="back-to-top">
            ↑ Back to Top
          </a>
        </div>

      </Container>

    </footer>
  );
}

export default Footer;
