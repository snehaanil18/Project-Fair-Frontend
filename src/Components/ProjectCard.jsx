import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: '22rem' }} onClick={handleShow}>
        <Card.Img height={'300px'} variant="top" src="https://www.fieldpromax.com/wp-content/uploads/2022/07/Untitled-design-1.gif" />
        <Card.Body>
          <Card.Title className='text-center'>Project Title</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <img src="https://www.fieldpromax.com/wp-content/uploads/2022/07/Untitled-design-1.gif" width={'100%'} alt="" />
            </div>
            <div className="col-6">
              <h2>Project Title</h2>
              <p>Description : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nesciunt aspernatur vitae animi natus illoatur molestias.</p>
              <p>Technology used : <b>React, Node</b></p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div >
            <Button className='btn-primary me-3'><a className=' text-light' href=""><FaGithub /></a></Button>
            <Button className='me-3'><a className=' text-light' href=""><FaLink /></a></Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard