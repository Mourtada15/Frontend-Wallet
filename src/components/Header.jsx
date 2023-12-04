import React from "react";
import Logo from "../images/Logo.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

    export default function Header() {
      return (
        <>
          <MDBNavbar light bgColor='white'>
          <MDBContainer fluid className='ml-6'>
              <MDBNavbarBrand href='#'>
                <img
                  src={Logo}
                  height='80'
                  alt='logo'
                  loading='lazy'
                />
              </MDBNavbarBrand>
            </MDBContainer>
          </MDBNavbar>
        </>
      );
    }
    

