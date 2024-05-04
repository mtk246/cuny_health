import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ChatBot from './chatbot';

function ChatbotPopup({ bmiValue, caloriesPerDay }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className="sticky-button-container">
            <Button variant="primary" onClick={handleShow} className="sticky-button badge rounded-pill p-3 btn-success">
                Chat with AI here
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>AI ChatBot</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ChatBot bmiValue={bmiValue} caloriesPerDay={caloriesPerDay} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    </>
  );
}

export default ChatbotPopup;