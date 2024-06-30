import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand href="home">Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="products">Products</Nav.Link>
                        <Nav.Link href="blog">Blog</Nav.Link>
                        <Nav.Link href="my-order">My Order</Nav.Link>
                    </Nav>
                    <Form className="d-flex mx-5 w-50" action="search" method="post">
                        <FormControl type="text" name="txt" placeholder="Search..." className="mr-2" />
                        <Button type="submit" variant="secondary">
                            <i className="bi bi-search"></i>
                        </Button>
                    </Form>
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
