import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import '../css/Detail.css';

const Detail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:9999/books/${id}`);
      setBook(response.data);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  if (!book) {
    return (
      <section>
        <CustomNavbar />
        <Container className="mt-4">
          <p>Loading...</p>
        </Container>
        <Footer />
      </section>
    );
  }

  return (
    <section>
      <CustomNavbar />
      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <Card>
              {book.image && <Card.Img variant="top" src={book.image} className="book-image" />}
            </Card>
          </Col>
          <Col md={8}>
            <Card.Body style={{marginLeft:'20%'}}>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>Author: {book.author}</Card.Text>
              <Card.Text>Price: ${book.price}</Card.Text>
              <div className="details">
                <h2>Details</h2>
                <p >Lorem ipsum dolor sit amet</p>
                <p>Category: {book.categoryId}</p>
              </div>
              <Button variant="primary" onClick={() => alert('Add to cart')} style={{marginTop:'20%', width:'300px',height:'50px'}} >Add to Cart</Button>
            </Card.Body>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
};

export default Detail;
