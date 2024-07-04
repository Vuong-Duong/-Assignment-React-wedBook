import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import '../css/Re.css';

export default function Register() {
  const regexNumber = /^[0-9]*$/;
  const regexUsername = /^\S+$/;
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [formRegister, setFormRegister] = useState({
    number: "",
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:9999/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const validateForm = () => {
    const errors = {};

    if (!regexNumber.test(formRegister.number)) errors.number = "Number must be numeric.";
    if (!regexUsername.test(formRegister.username)) errors.username = "Username cannot contain spaces.";

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear error message when input changes
    });
  };

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      alert("Please enter the form fields correctly.");
      return;
    }

    const newId =
      users.length > 0
        ? Math.max(...users.map((user) => parseInt(user.id))) + 1
        : 1;

    axios.post("http://localhost:9999/users", {
        id: newId.toString(),
        ...formRegister,
      })
      .then((response) => {
        console.log("User registered successfully:", response.data);
        navigate("/login"); 
      })
      .catch((error) => console.error("Registration failed:", error));
  };

  return (
    <Container fluid className="p-5">
      <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

      <Card className='mx-5 mb-5 p-5 shadow-5 card' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <Card.Body className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md='6'>
                <Form.Group className='mb-4' controlId='formUsername'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formRegister.username}
                    onChange={handleInputChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md='6'>
                <Form.Group className='mb-4' controlId='formNumber'>
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    type='text'
                    name='number'
                    value={formRegister.number}
                    onChange={handleInputChange}
                    isInvalid={!!errors.number}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.number}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className='mb-4' controlId='formEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={formRegister.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className='mb-4' controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={formRegister.password}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className='d-flex justify-content-center mb-4' controlId='formNewsletter'>
              <Form.Check type='checkbox' label='Subscribe to our newsletter' />
            </Form.Group>

            <Button className='w-100 mb-4' size='md' type='submit'>
              Sign up
            </Button>
          </Form>

          <div className="text-center social-icons">
            <p>or sign up with:</p>

            <Button variant='link' className='mx-3' style={{ color: '#1266f1' }}>
              <FaFacebookF size="1em" />
            </Button>

            <Button variant='link' className='mx-3' style={{ color: '#1266f1' }}>
              <FaTwitter size="1em" />
            </Button>

            <Button variant='link' className='mx-3' style={{ color: '#1266f1' }}>
              <FaGoogle size="1em" />
            </Button>

            <Button variant='link' className='mx-3' style={{ color: '#1266f1' }}>
              <FaGithub size="1em" />
            </Button>
          </div>

        </Card.Body>
      </Card>

      {/* Footer */}
      <div className="fixed-bottom-custom bg-primary text-white py-4 px-4 px-xl-5">
        <Container className="d-md-flex justify-content-between align-items-center">
          <div className="text-center text-md-start mb-3 mb-md-0">
            &copy; 2020. All rights reserved.
          </div>
          <div className="text-center text-md-end">
            <Button variant='link' className='mx-3' style={{ color: 'white' }}>
              <FaFacebookF size="1em" />
            </Button>
            <Button variant='link' className='mx-3' style={{ color: 'white' }}>
              <FaTwitter size="1em" />
            </Button>
            <Button variant='link' className='mx-3' style={{ color: 'white' }}>
              <FaGoogle size="1em" />
            </Button>
            <Button variant='link' className='mx-3' style={{ color: 'white' }}>
              <FaGithub size="1em" />
            </Button>
          </div>
        </Container>
      </div>
    </Container>
  );
}
