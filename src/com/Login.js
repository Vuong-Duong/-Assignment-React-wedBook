import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:9999/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError('');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      // Lưu thông tin người dùng vào session
      sessionStorage.setItem('userId', user.id);
      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('role', user.role);
  
      // Chuyển hướng sau khi đăng nhập thành công
      const role = parseInt(user.role, 10); 
      if (role === 1) {
        navigate('/');
      } else if (role === 2) {
        navigate('/admin');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    
    <MDBContainer fluid className="p-0">
     <Link to={'/'}> <Button variant='success' style={{ marginRight:'80%',color: 'white', marginTop:'15px' }}>Back To Home</Button></Link>
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
            <hr className="flex-grow-1" />
            <span className="mx-4">or</span>
            <hr className="flex-grow-1" />
          </div>

          <MDBInput wrapperClass='mb-4' label='User Name' id='formControlLg' type='text' size="lg" value={username} onChange={handleUsernameChange} />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={handlePasswordChange} />

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#" className="text-decoration-none">Forgot password?</a>
          </div>

          {error && <p className="text-danger mb-4">{error}</p>}

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn onClick={handleLogin} className="mb-0 px-5" size='lg' style={{ width: '170px', height: '50px' }}>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to={'/register'} className="link-danger">Register</Link></p>
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
              <MDBIcon fab icon='facebook-f' size="md" />
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='twitter' size="md" />
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='google' size="md" />
            </MDBBtn>
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='linkedin-in' size="md" />
            </MDBBtn>
          </div>
        </MDBContainer>
      </div>
    </MDBContainer>
  );
}
