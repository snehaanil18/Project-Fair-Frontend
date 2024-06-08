import React, { useContext, useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { serverURL } from '../Services/serverURL';
import { updateUserProjectAPI } from '../Services/allAPIs';
import { editProjectResponseContext } from '../ContextAPI/ContextShare';


function EditProject({projects}) {
  const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)
  const [preview, setPreview] = useState('')
  const [fileStatus, setFileStatus] = useState(false)
  const [projectData, setProjectData] = useState({
    id: projects._id,
    title: projects.title,
    languages: projects.languages,
    github: projects.github,
    livelink: projects.livelink,
    overview: projects.overview,
    projectImage: ""
  })

console.log(projects);
  const [show, setShow] = useState(false);
  const handleClose = () =>{
     setShow(false);
     setProjectData({
      id: projects._id,
      title: projects.title,
      languages: projects.languages,
      github: projects.github,
      livelink: projects.livelink,
      overview: projects.overview,
      projectImage: ""
     })
     setPreview("")
    }
  const handleShow = () => setShow(true);


console.log(projectData);
  useEffect(() => {
    console.log(projectData.projectImage.type);
    if (projectData.projectImage.type == "image/png" || projectData.projectImage.type == "image/jpeg" || projectData.projectImage.type == "image/jpg") {
      console.log('generate image url');
      console.log(URL.createObjectURL(projectData.projectImage));
      setPreview(URL.createObjectURL(projectData.projectImage))
      setFileStatus(false)
    }
    else {
      console.log('Please upload png/jpg/jpeg format images');
      setFileStatus(true)
    }
  }, [projectData.projectImage])

  const updateProject = async() => {
    const {id,title,languages,github,livelink,overview,projectImage} = projectData
    const reqBody = new FormData()
    reqBody.append("title",title)
    reqBody.append("languages",languages)
    reqBody.append("github",github)
    reqBody.append("livelink",livelink)
    reqBody.append("overview",overview)
    preview? reqBody.append("projectImage",projectImage) : reqBody.append("projectImage",projects.projectImage)

    const token = sessionStorage.getItem("token");
    console.log(token);
    if(preview){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }

      //api call
      const result = await updateUserProjectAPI(id,reqBody,reqHeader)
      console.log(result);
      if(result.status===200){
        alert("project updated")
        setEditProjectResponse(result.data)
        handleClose()
      }
      else{
        alert("project not updated")
        setEditProjectResponse(result.response.data)
        handleClose()
      }
    }
    else{
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }

      //api call
      const result = await updateUserProjectAPI(id,reqBody,reqHeader)
      console.log(result);
      if(result.status===200){
        alert("project updated")
        
        handleClose()
        setEditProjectResponse(result.data)
      }
      else{
        alert("project not updated")
        setEditProjectResponse(result.response.data)
      }
    }
  }

  return (
    <div>
      <button onClick={handleShow} className='btn fs-5'><FaRegEdit /></button>

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
                <input onChange={e => setProjectData({ ...projectData, projectImage: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                <img width={'200px'} src={preview?preview:`${serverURL}/uploads/${projects.projectImage}`} alt="" />
                {fileStatus && <p className='text-danger mt-2'>* Please upload png/jpg/jpeg format images</p>}

              </label>
            </div>
            <div className="col-6">
              <input type="text" onChange={e => setProjectData({ ...projectData, title: e.target.value })} value={projectData.title} placeholder='Project Title' className='form-control mb-2' />
              <input type="text" onChange={e => setProjectData({ ...projectData, languages: e.target.value })} value={projectData.languages} placeholder='Languages Used' className='form-control mb-2' />
              <input type="text" onChange={e => setProjectData({ ...projectData, github: e.target.value })} value={projectData.github} placeholder='Github' className='form-control mb-2' />
              <input type="text" onChange={e => setProjectData({ ...projectData, livelink: e.target.value })} value={projectData.livelink} placeholder='Live Link' className='form-control mb-2' />
              <input type="text" onChange={e => setProjectData({ ...projectData, overview: e.target.value })} value={projectData.overview} placeholder='Overview' className='form-control mb-2' />
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button onClick={updateProject} style={{ backgroundColor: '#B58900' }} className='btn text-light' >UPDATE</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditProject