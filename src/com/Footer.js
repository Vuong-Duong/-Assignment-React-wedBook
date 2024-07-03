import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import '../css/footer.css';

const Footer = () => {
    return (
        <footer className="footer text-light bg-dark">
            <Container fluid>
                <Row className='mt-3'>
                    <Col md={3} lg={4} xl={3}>
                        <h5>About</h5>
                        <hr className="bg-light mb-2 mt-0 d-inline-block mx-auto w-25" />
                        <p className="mb-0">
                            liên quan đến sản phẩm
                        </p>
                    </Col>
                    <Col md={4} lg={3} xl={3}>
                        <h5>Contact</h5>
                        <hr className="bg-light mb-2 mt-0 d-inline-block mx-auto w-25" />
                        <ul className="list-unstyled">
                            <li><i className="bi bi-house-door mr-2"></i> My Shop</li>
                            <li><i className="bi bi-envelope mr-2"></i> duongvdhe173014@gmail.com</li>
                            <li><i className="bi bi-phone mr-2"></i> + 33 12 14 15 16</li>
                            <li><i className="bi bi-printer mr-2"></i> + 33 12 14 15 16</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
