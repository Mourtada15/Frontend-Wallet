import React from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';


export default function Form() {
  return (
    <>


    <MDBContainer fluid className="form-container">

      <MDBRow className='justify-content-left align-items-center m-5'>

        <MDBCard className='custom-card'>
          <MDBCardBody className='px-4'>

            <h1 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h1>

            <MDBRow className='mb-4'>
              <MDBCol md='6' lg='5'>
              <div className='mb-4'>
              <label htmlFor='form1' className='form-label custom-label'>First Name</label>
                    <MDBInput id='form1' type='text' size='lg' />
                  </div>
              </MDBCol>

              <MDBCol md='6' lg='5'>
              <div className='mb-4'>
                    <label htmlFor='form2' className='form-label custom-label'>Last Name</label>
                    <MDBInput id='form2' type='text' size='lg' />
                  </div>
              </MDBCol>
            </MDBRow>
            <MDBRow className='mb-4'>
            <MDBCol md='6' lg='5'>
            <div className='mb-4'>
                    <label htmlFor='form4' className='form-label custom-label'>Email</label>
                    <MDBInput id='form4' type='email' size='lg' />
                  </div>
              </MDBCol>

              <MDBCol md='6' lg='5'>
              <div className='mb-4'>
                    <label htmlFor='form5' className='form-label custom-label'>Password</label>
                    <MDBInput id='form5' type='password' size='lg' />
                  </div>

              </MDBCol>
            </MDBRow>
            <MDBRow className='mb-4'>
              <MDBCol md='6' lg='5'>
              <div className='mb-4'>
                    <label className="fw-bold custom-label">Role </label>
                    <br />
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='User' inline  className='custom-radio'
                      labelClass='custom-label' />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Merchant' inline  className='custom-radio'
                      labelClass='custom-label' />
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Admin' inline  className='custom-radio'
                      labelClass='custom-label' />
                  </div>
              </MDBCol>
            </MDBRow>

          

            <MDBBtn size='lg'>Sign up</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
    </>
  );
};

