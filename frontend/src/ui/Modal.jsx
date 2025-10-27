import { Modal as BootStrapModal, Button } from "react-bootstrap";


function Modal({ show, onHide, title, children }) {
  return (
    <BootStrapModal show={show} onHide={onHide} centered>
      <BootStrapModal.Header closeButton>
        <BootStrapModal.Title>{title}</BootStrapModal.Title>
      </BootStrapModal.Header>

      <BootStrapModal.Body>
        {children}

      </BootStrapModal.Body>

      {/* <BootStrapModal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save
        </Button>
      </BootStrapModal.Footer> */}
    </BootStrapModal>
  )
}

export default Modal