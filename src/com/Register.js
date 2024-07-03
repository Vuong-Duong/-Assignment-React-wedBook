import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import '../css/Re.css';

export default function Register() {
  return (
    <Container fluid className="p-5">
      <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

      <Card className='mx-5 mb-5 p-5 shadow-5 card' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <Card.Body className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>

          <Form>
            <Row>
              <Col md='6'>
                <Form.Group className='mb-4' controlId='formFirstName'>
                  <Form.Label>First name</Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>

              <Col md='6'>
                <Form.Group className='mb-4' controlId='formLastName'>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className='mb-4' controlId='formEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' />
            </Form.Group>

            <Form.Group className='mb-4' controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' />
            </Form.Group>

            <Form.Group className='d-flex justify-content-center mb-4' controlId='formNewsletter'>
              <Form.Check type='checkbox' label='Subscribe to our newsletter' />
            </Form.Group>

            <Button className='w-100 mb-4' size='md'>Sign up</Button>
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
