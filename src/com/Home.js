import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel, Nav, Container } from 'react-bootstrap';
import '../css/Body.css';
import { Link } from 'react-router-dom';
import CustomNavbar from './Navbar';
import Footer from './Footer';



export default function Home() {
    const [booksByCategory, setBooksByCategory] = useState({});
    const [categories, setCategories] = useState([]);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9999/books')
            .then((res) => {              
                const booksByCategoryMap = {};
                res.data.forEach(book => {
                    if (!booksByCategoryMap[book.categoryId]) {
                        booksByCategoryMap[book.categoryId] = [];
                    }
                    booksByCategoryMap[book.categoryId].push(book);
                });
                setBooksByCategory(booksByCategoryMap);
            })
            .catch((error) => console.log(error));

        axios.get('http://localhost:9999/categories')
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => console.log(error));

        axios.get('http://localhost:9999/carousel')
            .then((res) => {
                setCarousel(res.data);
            })
            .catch((error) => console.log(error));

    }, []);

    return (
       <section>
        <CustomNavbar/>
        <Container>
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

            <Nav className="justify-content-center mt-5">
                {categories.map((c) => (
                    <Nav.Item key={c.id}>
                        <Nav.Link href={`category?categoryId=${c.id}`}>
                            <h5 className='text-dark'>{c.name}</h5>
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>

            <section className="products">
                <div className="electronic-products">
                    <div className="category-container">
                        {categories.map((category) => (
                            <div className="category-row" key={category.id}>
                                <div className="d-flex category-info">
                                    <p className="card-title-c m-0" style={{ fontSize: 24, fontWeight: 700 }}>
                                        {category.name}
                                    </p>
                                    <Link to="#" className="view-all-link" style={{ color: 'blue' }}>
                                        View All
                                    </Link>
                                </div>

                                <div className="book-grid">
                                    {booksByCategory[category.id] && booksByCategory[category.id].map((book) => (
                                        <div className="book-card" key={book.id}>
                                            <img src={book.image} alt={book.title} style={{ width: 150, height: 150, borderRadius: 10 }} />
                                            <div className="book-info">
                                                <h4>{book.title}</h4>
                                                <p>by {book.author}</p>
                                                <p>Price: {book.price}</p>
                                                <button className="btn btn-primary card-btn mt-4" style={{ backgroundColor: 'black', color: '#fff' }}>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Container>
        <Footer/>
        </section>
    );
}
