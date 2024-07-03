import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand href="home">Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Form className="d-flex mx-5 w-50" action="search" method="post">
                        <FormControl type="text" name="txt" placeholder="Search..." className="mr-2" />
                        <Button type="submit" variant="secondary">
                            <i className="bi bi-search"></i>
                        </Button>
                    </Form>
                    <Nav className="mr-auto" style={{marginLetf:'10%'}}>
                        <Nav.Link href="products">Products</Nav.Link>
                        <Nav.Link href="blog">Blog</Nav.Link>
                        <Nav.Link href="my-order">My Order</Nav.Link>
                        <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                    </Nav>

                    <div className="d-flex">
                        <Button variant="secondary">
                            <i class="bi bi-cart"></i>
                        </Button>

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
