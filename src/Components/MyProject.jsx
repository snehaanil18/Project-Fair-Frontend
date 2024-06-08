import React, { useContext, useEffect, useState } from 'react'
import AddProject from '../Components/AddProject'
import { IoLogoGithub } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { deleteProjectAPI, userProjectsAPI } from '../Services/allAPIs';
import { addProjectResponseContext, editProjectResponseContext } from '../ContextAPI/ContextShare';
import EditProject from './EditProject';

function MyProject() {


    const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)

    const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext)

    const [projects, setProjects] = useState([])

    const getProjects = async (req, res) => {
        if (sessionStorage.getItem('token')) {
            const token = sessionStorage.getItem('token')
            console.log(token);
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
            const result = await userProjectsAPI(reqHeader)
            console.log(result);
            if (result.status === 200) {
                setProjects(result.data)
            }
            else {
                console.log(result.response.data);
            }
        }
    }

    useEffect(() => {
        getProjects()
    }, [addProjectResponse,editProjectResponse])



    const handleDelete = async (_id) => {
        if (sessionStorage.getItem('token')) {
            const token = sessionStorage.getItem('token')
            console.log(token);
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
            const result = await deleteProjectAPI(_id, reqHeader)
            console.log(result);
            alert('delete success')
            getProjects()
        }
    }

    console.log(projects);

    return (
        <div>
            <div className='d-flex justify-content-around'>
                <h3>My Projects</h3>
                <AddProject />
            </div>
            {projects.length > 0 ? projects.map(item => (
                <div className='row shadow p-5 m-5 border border-dark'>
                    <div className="col-6">
                        <h4 className='text-light'>{item.title}</h4>
                    </div>
                    <div className="col-6 d-flex justify-content-evenly">
                        <button className='btn fs-5' ><a href={item.github}><IoLogoGithub /></a></button>
                        <EditProject projects={item}/>
                        <button onClick={() => handleDelete(item._id)} className='btn fs-5'><MdDelete /></button>
                    </div>
                </div>
            )) : 'No projects'}

        </div>
    )
}

export default MyProject