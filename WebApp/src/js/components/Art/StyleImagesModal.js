import React from "react";
import {Modal, Row, Button} from "react-bootstrap";

function StyleImagesModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Wähle einen gewünschten Style</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row xs={1} md={3} className="g-4">{props.getstyles}</Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Schließen</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default (StyleImagesModal);