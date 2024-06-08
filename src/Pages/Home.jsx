import React, { useEffect, useState } from 'react'
import Programmer from '../assets/programmer.webp'
import ProjectCard from '../Components/ProjectCard'
import { homeProjectAPI } from '../Services/allAPIs'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { FaLaptopCode } from "react-icons/fa6";
  
function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [homeProject,setHomeProject] = useState([])

    const getHomeProject = async(req,res) => {
        const result = await homeProjectAPI()
        console.log(result);
        if(result.status==200){
            setHomeProject(result.data)
            console.log(homeProject);
        }
        else{
            console.log(result.response.data);
        }
    }

    useEffect(() => {
        getHomeProject()
        if (sessionStorage.getItem("token")) {
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
        }
    },[])

    return (
        <div>
                        <MDBNavbar light bgColor='secondary'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
          <FaLaptopCode className='fs-1 m-1' />
          Project Fair
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-center text-light mt-3'>Project Fair</h1>
                    <p style={{ textAlign: 'justify' }} className='mx-4 text-light'>A project management system is a model for overseeing the execution of a project. It can provide a framework for managing expectations, delegating responsibilities and creating procedures. A project management system may use specialized project management software or make use of common professional software packages.</p>
                    {
                        isLoggedIn ?
                            <div className="text-center">
                                <a href="dashboard" className='btn btn-secondary mt-3 mb-5'>Manage your Projects</a>
                            </div>
                            : <div className="text-center">
                                <a href="login" className='btn btn-secondary mt-3 mb-5'>Get Started</a>
                            </div>
                    }

                </div>
                <div className="col-md-6">
                    <img src={Programmer} width={'100%'} height={'400x'} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{ height: '500px' }}>
                    <h1 className='text-center text-white m-5'>Explore Our Projects</h1>
                    <marquee width='100%' height='500px' direction="left">
                        <div className='row'>
                            {homeProject.length>0?homeProject.map(item => (
                                <div className='col'> <ProjectCard project={item}/></div>
                            )):'<h1>null</h1>'}
                        </div>
                       
                    </marquee>
                </div>
            </div>
            <div className=" row m-3">
                <h1 className='text-center text-white m-4'>Our Services</h1>
                <div className="col-4">
                    <div className="card text-light shadow p-5">
                        <h3 className='text-center'>Web Designing</h3>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi debitis explicabo assumenda aliquid ea corrupti odit molestias obcaecati voluptatem nemo repellendus totam neque cumque tempore maiores voluptate praesentium, consectetur recusandae?
                        </p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-light shadow p-5">
                        <h3 className='text-center'>Web Designing</h3>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi debitis explicabo assumenda aliquid ea corrupti odit molestias obcaecati voluptatem nemo repellendus totam neque cumque tempore maiores voluptate praesentium, consectetur recusandae?
                        </p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-light shadow p-5">
                        <h3 className='text-center'>Web Designing</h3>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi debitis explicabo assumenda aliquid ea corrupti odit molestias obcaecati voluptatem nemo repellendus totam neque cumque tempore maiores voluptate praesentium, consectetur recusandae?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home