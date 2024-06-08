import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import { allProjectsAPI } from '../Services/allAPIs'

function Projects() {
  
  const [searchKey,setSearchKey] = useState("") // 1. To hold the search key
  const [allUserProject,setAllUserProject] = useState([])
  const getAllProjects = async(req,res) => {
    //get token? authenticated
    if(sessionStorage.getItem('token')){
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type":"multipart/form-data",
          "Authorization":"Bearer " +token
      }
      const result = await allProjectsAPI(searchKey,reqHeader)
      console.log(result);
      if(result.status===200){
        setAllUserProject(result.data)
      }
      else{
        console.log(result.response.data);
      }
    }
    }

  console.log(allUserProject);

  useEffect(()=>{
    getAllProjects()
  },[searchKey])

  return (
    <div>
      <h2 className='text-center m-4'>All Projects</h2>
      {/* 2 set Onchange in input field */}
      <input type="search" onChange={e => setSearchKey(e.target.value)} placeholder='Search by Technology' className='form-control mx-auto w-50' /> 
      <div className="row p-5">
        {
          allUserProject?.length>0 ?allUserProject.map(item => (
            <div className="col">
            <ProjectCard project={item}/>
          </div>
          )):'cant fetch project'
        }

      </div>
    </div>
  )
}

export default Projects