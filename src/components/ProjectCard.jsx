import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import VideoModal from "./VideoModal";

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="shadow-sm h-100 project-card">
        
        {/* MEDIA SECTION */}
        <div className="media-wrapper" onClick={handleOpen}>
          
          {project.mediaType === "image" ? (
            <Card.Img
              variant="top"
              src={project.media}
              alt={project.title}
              className="project-media"
            />
          ) : (
            <div className="video-thumbnail">
              <video
                src={project.media}
                className="project-media"
                muted
              />
              {/* <div className="play-overlay"></div> */}
            </div>
          )}

        </div>

        {/* BODY */}
        <Card.Body className="d-flex flex-column">
          <Card.Title>{project.title}</Card.Title>

          <Card.Text className="flex-grow-1">
            {project.description}
          </Card.Text>
          <Card.Text className="flex-grow-1">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              GitHub Repository
            </a>
          </Card.Text>  
          {/* TECH STACK */}
          <div className="mb-3">
            {project.tech.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <Button variant="dark" onClick={handleOpen}>
            View Project
          </Button>
        </Card.Body>
      </Card>

      {/* VIDEO MODAL */}
      {project.mediaType === "video" && (
        <VideoModal
          show={showModal}
          handleClose={handleClose}
          videoSrc={project.media}
          title={project.title}
        />
      )}
    </>
  );
}

export default ProjectCard;
 