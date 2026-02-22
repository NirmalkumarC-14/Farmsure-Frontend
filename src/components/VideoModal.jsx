import { Modal } from "react-bootstrap";

function VideoModal({ show, handleClose, videoSrc, title }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >
      {/* HEADER */}
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100 text-dark">{title}</Modal.Title>
      </Modal.Header>

      {/* BODY */}
      <Modal.Body className="p-4">

        <video
          src={videoSrc}
          controls
          autoPlay
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px"
          }}
        />

      </Modal.Body>
    </Modal>
  );
}

export default VideoModal;
