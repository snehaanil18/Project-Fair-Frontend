import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button style={{ backgroundColor: '#2AA198' }} className='btn btn-success' onClick={handleShow}>Add</button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 p-5">
              <label>
                <input type="file" style={{ display: 'none' }} />
                <img width={'200px'} src="https://user-images.githubusercontent.com/115187902/230700872-d5f44b85-56c7-4e27-80a4-6e2db901e60c.gif" alt="" />
              </label>
            </div>
            <div className="col-6">
              <input type="text" placeholder='Project Title' className='form-control mb-2' />
              <input type="text" placeholder='Languages Used' className='form-control mb-2' />
              <input type="text" placeholder='Github' className='form-control mb-2' />
              <input type="text" placeholder='Live Link' className='form-control mb-2' />
              <input type="text" placeholder='Overview' className='form-control mb-2' />
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button style={{backgroundColor:'#B58900'}} className='btn text-light'>ADD</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject