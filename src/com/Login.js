import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <MDBContainer fluid className="p-0">
      <Button className='mt-4' style={{marginRight:'80%'}}><Link to={'/'} className='text-light'>Back to Home</Link></Button>
      <MDBRow className="justify-content-center align-items-center">
        <MDBCol md='6' className='p-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>

        
        <MDBCol md='6' className='p-5'>
          <div className="d-flex flex-row align-items-center justify-content-center mb-4">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
          </div>

          <div className="divider d-flex align-items-center mb-4">
            
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#" className="text-decoration-none">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link  to={'/register'} className="link-danger">Register</Link></p>
          </div>
        </MDBCol>

      </MDBRow>

      {/* Footer */}
      <div className="fixed-bottom w-100 bg-primary text-white py-4 px-4 px-xl-5">
        <MDBContainer className="d-md-flex justify-content-between align-items-center">
          <div className="text-center text-md-start mb-3 mb-md-0">
            &copy; 2020. All rights reserved.
          </div>
          <div className="text-center text-md-end">
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='facebook-f' size="md"/>
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='twitter' size="md"/>
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='google' size="md"/>
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='linkedin-in' size="md"/>
            </MDBBtn>
          </div>
        </MDBContainer>
      </div>

    </MDBContainer>
  );
}
