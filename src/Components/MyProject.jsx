import React from 'react'
import AddProject from '../Components/AddProject'
import { IoLogoGithub } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function MyProject() {


    return (
        <div>
            <div className='d-flex justify-content-around'>
                <h3>My Projects</h3>
                <AddProject />
            </div>
            <div className='row shadow p-5 m-5 border border-dark'>
                <div className="col-6">
                    <h4>Project Title</h4>
                </div>
                <div className="col-6 d-flex justify-content-evenly">
                    <button className='btn fs-5'><IoLogoGithub /></button>
                    <button className='btn fs-5'><FaRegEdit /></button>
                    <button className='btn fs-5'><MdDelete /></button>
                </div>
            </div>
        </div>
    )
}

export default MyProject