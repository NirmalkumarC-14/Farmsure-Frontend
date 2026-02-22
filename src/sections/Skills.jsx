import { Container } from "react-bootstrap";
import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/skillsData";

function Skills() {
  return (
    <section id="skills" className="skills-section py-5">

      <Container>

        <SectionTitle
          title="Skills"
          subtitle="Technologies I work with"
        />

        <div className="skills-wrapper">

          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Skills;
