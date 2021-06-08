import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import NewReceivingItem from './NewReceivingItem'

export default function NewReceivingItemModal({show, handleClose,receiving_id}) {

    return (
        <div>

            <Modal
                size="xl"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <NewReceivingItem receiving_id={receiving_id} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>

        </div>
    )
}
