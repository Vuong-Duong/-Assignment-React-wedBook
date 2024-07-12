import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Carousel, Pagination } from 'react-bootstrap';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import '../css/BookList.css';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [carousel, setCarousel] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    useEffect(() => {
        // Fetch categories
        axios.get('http://localhost:9999/categories')
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => console.log('Error fetching categories:', error));

        // Fetch books
        axios.get('http://localhost:9999/books')
            .then((res) => {
                setBooks(res.data);
                setFilteredBooks(res.data);
            })
            .catch((error) => console.log('Error fetching books:', error));

        // Fetch carousel items
        axios.get('http://localhost:9999/carousel')
            .then((res) => {
                setCarousel(res.data);
            })
            .catch((error) => console.log('Error fetching carousel items:', error));
    }, []);

    const handleCategoryChange = (categoryId) => {
        setCurrentCategory(categoryId);
        if (categoryId === '') {
            setFilteredBooks(books);
        } else {
            const filtered = books.filter(book => book.categoryId == categoryId);
            setFilteredBooks(filtered);
        }
        setCurrentPage(1); 
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredBooks.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <section>
            <CustomNavbar />
            <Carousel>
                {carousel.map(item => (
                    <Carousel.Item key={item.id}>
                        <img
                            className="carousel-image"
                            src={item.image}
                            alt={item.title}
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Container fluid>
                <Row style={{ marginTop: '5%' }}>
                    <Col md={3} className="categoryList">
                        <div className="card bg-light mb-2">
                            <div className="card-header bg-dark text-white text-uppercase">
                                <i className="fa fa-list"></i> Categories
                            </div>
                            <ul className="list-group category_block">
                                <li className="list-group-item" onClick={() => handleCategoryChange('')}>
                                    All Categories
                                </li>
                                {categories.map((category) => (
                                    <li key={category.id} className="list-group-item" onClick={() => handleCategoryChange(category.id)}>
                                        {category.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col md={9}>
                        <Container className="book-grid">
                            {currentItems.map((book) => (
                                <div className="book-card" key={book.id}>
                                    <img src={book.image} alt={book.title} style={{ width: 150, height: 150, borderRadius: 10 }} />
                                    <div className="book-info">
                                        <Link to={`/Detail/${book.id}`} className="link-style">
                                            <h4>{book.title}</h4>
                                        </Link>
                                        <p>by {book.author}</p>
                                        <p>Price: {book.price}</p>
                                        <button className="btn btn-primary card-btn mt-4" style={{ backgroundColor: 'black', color: '#fff' }}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Container>
                        <div className="pagination-container">
                            <Pagination className="pagination">
                                <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} />
                                {[...Array(Math.ceil(filteredBooks.length / itemsPerPage)).keys()].map((number) => (
                                    <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => setCurrentPage(number + 1)}>
                                        {number + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredBooks.length / itemsPerPage)} />
                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </section>
    );
}
