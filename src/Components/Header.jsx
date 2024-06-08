import React, { useEffect, useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { FaLaptopCode } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Header() {
  const [token, setToken] = useState(false)
  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.clear()
    navigate('/')
  }
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(true)
    }
    else {
      setToken(false)
    }
  }, [])


  return (
    <div>
      

        <MDBNavbar light bgColor='secondary'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='/'>
              <FaLaptopCode className='fs-1 m-1' />
              Project Fair
            </MDBNavbarBrand>
            
              <button onClick={logout} className='btn fs-1 text-light'><IoIosLogOut />
</button>
            
          </MDBContainer>
        </MDBNavbar>



    </div>
  )
}

export default Header