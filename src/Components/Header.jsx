import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { FaLaptopCode } from "react-icons/fa6";

function Header() {
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
    </div>
  )
}

export default Header