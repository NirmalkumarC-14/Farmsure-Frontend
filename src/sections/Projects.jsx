import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projectsData";

function Projects() {
  return (
    <section id="projects" className="projects-section py-5">

      <Container>

        {/* SECTION TITLE */}
        <SectionTitle
          title="My Projects"
          subtitle="Feel Free To Explore My Work"
        />

        {/* PROJECTS GRID */}
        <Row className="g-4">

          {projects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={6}>
              <ProjectCard project={project} />
            </Col>
          ))}

        </Row>

      </Container>
    </section>
  );
}

export default Projects;
