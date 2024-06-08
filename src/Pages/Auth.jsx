import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { loginAPI, registerAPI } from '../Services/allAPIs'
import {useNavigate} from 'react-router-dom'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { FaLaptopCode } from "react-icons/fa6";

function Auth({register}) {

  const navigate = useNavigate()

  const [userData,setUserData] = useState({   // to hold user details
    username:"",
    email:"",
    password:""
  })

const handleRegister = async(e) => {
  e.preventDefault()
  if(!userData.username||!userData.email||!userData.password){
    Swal.fire({
      title: 'Warning',
      text: 'Please fill the form',
      icon: 'warning',
      confirmButtonText: 'Back'
    })
  }
  else{
    const result = await registerAPI(userData)
    console.log(result);
    if(result.status===200){
      Swal.fire({
        title: 'Success',
        text: 'Successfully registered',
        icon: 'success',
        confirmButtonText: 'Back'
      })
      setUserData({
        username:"",
        email:"",
        password:""
      })
      navigate('/login')
    }
    else if(result.response.status===406){
      Swal.fire({
        title: 'Error',
        text: result.response.data,
        icon: 'error',
        confirmButtonText: 'Back'
      })

    }
  }
  console.log(userData);
}


//login
const handleLogin = async(e) => {
  e.preventDefault()
  if(!userData.email||!userData.password){
    Swal.fire({
      title: 'Warning',
      text: 'Please fill the form',
      icon: 'warning',
      confirmButtonText: 'Back'
    })
  }
  else{

    const result = await loginAPI(userData)
    console.log(result);
    if(result.status===200){

      sessionStorage.setItem("username",result.data.existingUser.username)
      sessionStorage.setItem("token",result.data.token)
      
      Swal.fire({
        title: 'Success',
        text: 'Login Successfull',
        icon: 'success',
        confirmButtonText: 'Back'
      })
      setUserData({
        email:"",
        password:""
      })
      navigate('/')
    }
    else if(result.response.status===404){
      Swal.fire({
        title: 'Error',
        text: result.response.data,
        icon: 'error',
        confirmButtonText: 'Back'
      })

    }
  }
  console.log(userData);
}


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
        <div className="p-5 col-lg-6">
          <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-638053,resizemode-75,msid-84146083/prime/technology-and-startups/booting-up-developer-economy-how-tech-startups-are-helping-coders-build-and-test-software-faster.jpg" width={'100%'} alt="" />
        </div>
        <div className="px-5 col-lg-6">
          <form style={{height:'440px'}} className='shadow text-dark bg-secondary'>
            <h2 className='text-center p-3  mt-5'>Project Fair</h2>
            <h4 className='text-center'>
            {
              register? 'Register Here' : 'Login Here'
            }
            </h4>
            <div className='mx-5 px-5 mt-5 pb-4'>
              {
                register &&
                <input type="text" 
                onChange={e => setUserData({...userData,username:e.target.value})} value={userData.username}
                placeholder='username' className='form-control mt-3' />
              }
              <input type="text" 
              onChange={e => setUserData({...userData,email:e.target.value})} value={userData.email}
              placeholder='email' className='form-control mt-3' />

              <input type="password" onChange={e => setUserData({...userData,password:e.target.value})} value={userData.password} placeholder='password' className='form-control mt-3' />
            </div>
            {
              register?
              <div className="text-center">
                <button onClick={handleRegister}  className='m-3 btn btn-dark'>Register</button>
                <p>Already Registered? <Link className='text-dark' to={'/login'}>Login here...</Link></p>
              </div>
              :
              <div className="text-center">
              <button onClick={handleLogin} className='m-3 btn btn-dark'>Login</button>
              <p className='mt-3'>New to here? <Link className='text-dark' to={'/register'}>Register here...</Link></p>
            </div>
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth