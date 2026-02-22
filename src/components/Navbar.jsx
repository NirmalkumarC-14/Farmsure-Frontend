import { Navbar, Nav, Container } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className="shadow-sm"
    >
      <Container>

        {/* LOGO / BRAND */}
        <Navbar.Brand href="#hero" className="fw-bold">
          Nirmalkumar C
        </Navbar.Brand>

        {/* MOBILE TOGGLE */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* NAV LINKS */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link href="#hero">Home</Nav.Link>

            <Nav.Link href="#about">About</Nav.Link>

            <Nav.Link href="#projects">Projects</Nav.Link>

            <Nav.Link href="#experience">Experience</Nav.Link>

            <Nav.Link href="#education">Education</Nav.Link>

            <Nav.Link href="#certificates">Certificates</Nav.Link>

            <Nav.Link href="#skills">Skills</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
