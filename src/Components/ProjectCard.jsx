import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { serverURL } from '../Services/serverURL';

function ProjectCard({project}) {
  console.log(project);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: '24rem' }} onClick={handleShow}>
        <Card.Img height={'300px'} variant="top" src={project?`${serverURL}/uploads/${project.projectImage}`:"https://www.fieldpromax.com/wp-content/uploads/2022/07/Untitled-design-1.gif"} />
        <Card.Body>
          <Card.Title className='text-center'>{project.title}</Card.Title>
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
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 p-3">
              <img src={project?`${serverURL}/uploads/${project.projectImage}`:"https://www.fieldpromax.com/wp-content/uploads/2022/07/Untitled-design-1.gif"} width={'100%'} alt="" />
            </div>
            <div className="col-6">
              <h2>{project.title}</h2>
              <p>Description :{project.overview}</p>
              <p>Technology used : <b>{project.languages}</b></p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div >
            <Button className='btn-primary me-3'><a className=' text-light' href={project.github}><FaGithub /></a></Button>
            <Button className='me-3'><a className=' text-light' href={project.livelink}><FaLink /></a></Button>
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