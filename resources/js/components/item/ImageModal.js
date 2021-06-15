import React from 'react'

import {Button, Modal} from 'react-bootstrap'



const ImageModal = ({show,handleClose,thumbnail})=>{

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Image</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">

          {
                thumbnail.includes('https://') ?
                <div className="item-thumbnail text-center">
                    <img className="" src={`${thumbnail}`} />
                </div>
                :
                <div className="item-thumbnail text-center">
                    <img className="" src={`/storage/${thumbnail}`} />
                </div>

          }
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ImageModal
