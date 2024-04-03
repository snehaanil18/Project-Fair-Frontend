import React from 'react'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <div>
      <h2 className='text-center m-4'>All Projects</h2>
      <input type="search" placeholder='Search by Technology' className='form-control mx-auto w-50' />
      <div className="row p-5">
        <div className="col">
          <ProjectCard/>
        </div>
      </div>
    </div>
  )
}

export default Projects