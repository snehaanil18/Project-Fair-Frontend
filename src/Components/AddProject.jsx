import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../Services/allAPIs';
import { addProjectResponseContext } from '../ContextAPI/ContextShare';

function AddProject() {

  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)

  const [fileStatus,setFileStatus] = useState(false)
  
  const [token,setToken] = useState("")

  const [preview,setPreview] = useState('')
  const [projectData,setProjectData] = useState({
    title:"",
    languages:"",
    github:"",
    livelink:"",
    overview:"",
    projectImage:""
  })
  console.log(projectData);

  useEffect(()=>{
    console.log(projectData.projectImage.type);
    if(projectData.projectImage.type=="image/png" || projectData.projectImage.type=="image/jpeg" ||projectData.projectImage.type=="image/jpg"){
      console.log('generate image url');
      console.log(URL.createObjectURL(projectData.projectImage));
      setPreview(URL.createObjectURL(projectData.projectImage))
      setFileStatus(false)
    }
    else{
      console.log('Please upload png/jpg/jpeg format images');
      setFileStatus(true)
    }
  },[projectData.projectImage])

  const handleAddProject = async() =>{
    const {title,languages,github,livelink,overview,projectImage} = projectData

    if(!title||!languages||!github||!livelink||!overview||!projectImage){
      alert("please fill details")
    }
    else{
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("github",github)
      reqBody.append("livelink",livelink)
      reqBody.append("overview",overview)
      reqBody.append("projectImage",projectImage)
      
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        //api call
        const result = await addProjectAPI(reqBody,reqHeader)
        console.log(result);

        if(result.status==200){
          alert("Project added successfully")
          setAddProjectResponse(result.data)
          handleClose()
          setProjectData({
            title:"",
            languages:"",
            github:"",
            livelink:"",
            overview:"",
            projectImage:""
          })
          setPreview('')
        }
        else{
          alert(result.response.data)
        }
      }
    }
  }

  useEffect(() => {
    console.log("useEffect for token is triggered");
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
      console.log(token);
      
    }
    else{
      setToken("")
    }
  },[token])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button style={{ backgroundColor: '#2AA198' }} className='btn text-light' onClick={handleShow}>Add</button>

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
                <input onChange={e => setProjectData({...projectData,projectImage:e.target.files[0]})} type="file" style={{ display: 'none' }} />
                <img width={'200px'} src={preview?preview:"https://user-images.githubusercontent.com/115187902/230700872-d5f44b85-56c7-4e27-80a4-6e2db901e60c.gif"} alt="" />
                {fileStatus && <p className='text-danger mt-2'>* Please upload png/jpg/jpeg format images</p>}
                
              </label>
            </div>
            <div className="col-6">
              <input type="text" onChange={e => setProjectData({...projectData,title:e.target.value})}  placeholder='Project Title' className='form-control mb-2' />
              <input type="text" onChange={e => setProjectData({...projectData,languages:e.target.value})} placeholder='Languages Used' className='form-control mb-2' />
              <input type="text" onChange={e => setProjectData({...projectData,github:e.target.value})} placeholder='Github' className='form-control mb-2' />
              <input type="text" onChange={e => setProjectData({...projectData,livelink:e.target.value})} placeholder='Live Link' className='form-control mb-2' />
              <input type="text" onChange={e => setProjectData({...projectData,overview:e.target.value})} placeholder='Overview' className='form-control mb-2' />
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button style={{backgroundColor:'#B58900'}} className='btn text-light' onClick={handleAddProject}>ADD</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject