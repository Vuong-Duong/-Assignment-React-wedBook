import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Form, Col, Row, Button } from 'react-bootstrap';
import SidebarAdmin from './SidebarAdmin';
import { Link } from 'react-router-dom';
import '../css/Admin.css'; 

const Admin = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchData(); 
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isSidebarOpen = window.innerWidth > 1100; 
      setSidebarOpen(isSidebarOpen);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:9999/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9999/books/${id}`)
      .then(() => {
        
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={`home-section ${sidebarOpen ? 'shifted' : ''}`}>
      <SidebarAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Container fluid className={`${sidebarOpen ? 'content-open' : 'content-closed'}`}>
        <Row className="justify-content-md-center mt-4">
          <Col md={11} className="ml-4">
            <h4 className='text-info'>List Product</h4>
            <Row className={`search-row ${sidebarOpen ? 'shifted' : ''}`}>
              <Form onSubmit={handleSearch}>
                <Form.Group>
                  <Form.Control
                    placeholder='Enter title to search'
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                    
                  />
                </Form.Group>
              </Form>
            </Row>
            <Table bordered hover className="table-shifted" style={{ marginTop: '20px', textAlign: 'center' }}>
              <thead style={{ backgroundColor: 'black', color: 'white' }}>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {books.filter(book => book.title.toLowerCase().startsWith(searchTerm.toLowerCase()))
                  .map(book => (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>
                        <img src={book.image} alt={book.title} style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
                      </td>
                      <td>{book.price}</td>
                      <td>{book.categoryId}</td>
                      <td><Button variant='danger' onClick={() => handleDelete(book.id)}>Delete</Button></td>
                      <td>  <Link to={`/edit-book/${book.id}`}>
                          <Button variant='success' style={{ color: 'white' }}>Edit</Button>
                        </Link></td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
