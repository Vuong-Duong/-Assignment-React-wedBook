import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate,Link } from 'react-router-dom';
import { Form, Button, Container,Row } from 'react-bootstrap';
import SidebarAdmin from './SidebarAdmin';
import '../css/EditBook.css'; 

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({ title: '', author: '', price: '', categoryId: '', image: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:9999/books/${id}`)
      .then(res => setBook(res.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:9999/books/${id}`, book)
      .then(() => {
        navigate('/admin');
      })
      .catch(error => console.log(error));
  };

  return (
    
    <Container className="edit-book-container">
         <SidebarAdmin  />
      <h2>Edit Book</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={book.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category ID</Form.Label>
          <Form.Control
            type="text"
            name="categoryId"
            value={book.categoryId}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={book.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Row style={{marginTop:'30px'}}>
        <Button variant="primary" type="submit" style={{marginLeft:'15px'}}>Save Changes</Button>
        <Link to={'/Admin'}><Button variant="secondary" style={{marginLeft:'295px'}}>Close</Button></Link>
        </Row>
      </Form>
    </Container>
  );
};

export default EditBook;
