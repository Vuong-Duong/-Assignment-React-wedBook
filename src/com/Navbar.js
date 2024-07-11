import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [users,setUsers] = useState([]);

    useEffect(() => {      
        const username = sessionStorage.getItem('username');
        if (username) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);


    const handleLogout = () => {
        // Xóa thông tin session
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('role');
        setIsLoggedIn(false);
        navigate('/');
    };
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Form className="d-flex mx-5 w-50" action="search" method="post">
                        <FormControl type="text" name="txt" placeholder="Search..." className="mr-2" />
                        <Button type="submit" variant="secondary">
                            <i className="bi bi-search"></i>
                        </Button>
                    </Form>
                    <Nav className="mr-auto" style={{ marginLeft: '10%' }}>
                        <Nav.Link href="products">Products</Nav.Link>
                        <Nav.Link href="blog">Blog</Nav.Link>
                        <Nav.Link href="my-order">My Order</Nav.Link>
                        {isLoggedIn ? (
                            <>                        
                                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                            </>
                        ) : (
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        )}
                    </Nav>
                    <div className="d-flex">
                        <Button variant="secondary">
                            <i class="bi bi-cart"></i>
                        </Button>

                    </div>
                    {isLoggedIn && (
                        <div className="d-flex align-items-center text-white mx-3 ml-4">
                            <Link to="/profile" className='text-light'> <i className="bi bi-person-circle"></i>
                            <span className="mx-2">{users.username}</span>
                           Profile</Link>
                        </div>          
                    )}
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
