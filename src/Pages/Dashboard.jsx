import React, { useEffect, useState } from 'react'
import Profile from '../Components/Profile'
import MyProject from '../Components/MyProject'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'


function Dashboard() {
  const [username, setUsername] = useState('')


  useEffect(() => {
    if (sessionStorage.getItem('username')) {
      setUsername(sessionStorage.getItem('username'))
    }
    else {
      setUsername('')
    }
  }, [])
  return (
    
    <div>
      <Header/>
      <div className="row">
        <h2 className='text-center m-2'>Welcome <span className='text-light'>{username}</span></h2>
        <div className="col-lg-6">
          <MyProject />
        </div>
        <div className="col-lg-6">
          <Profile />
        </div>
      </div>
      <div className='text-center my-5'>
        <Link to={'/projects'}>
          <button style={{ backgroundColor: '#2AA198' }} className='btn text-light'>View all users Projects</button>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard