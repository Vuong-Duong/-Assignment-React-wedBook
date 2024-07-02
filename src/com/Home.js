import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel, Nav, Container, section } from 'react-bootstrap';
import '../css/Body.css';

export default function Home() {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9999/books')
            .then((res) => {
                setBooks(res.data);
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
                                <div className="category-info">
                                    <p className="card-title-c" style={{ fontSize: 24, fontWeight: 700 }}>
                                        {category.name}
                                    </p>
                                    <img src={category.imageC} alt={category.name} style={{ width: 100, height: 100, borderRadius: 10 }} />
                                </div>
                                <button className="btn btn-primary card-btn mt-4" style={{ backgroundColor: '#337ab7', color: '#fff', padding: 10, borderRadius: 5 }}>
                                    View All
                                </button>
                                <div className="swiper-button-next">
                                    <div className="next-icon">
                                        <i className="fa-solid fa-chevron-right fa-xl"></i>
                                    </div>
                                </div>
                                <div className="book-carousel">
                                    {books.filter((book) => book.categoryId === category.id).map((book) => (
                                        <div className="book-card" key={book.id}>
                                            <img src={book.image} alt={book.title} style={{ width: 150, height: 150, borderRadius: 10 }} />
                                            <div className="book-info">
                                                <h4>{book.title}</h4>
                                                <p>by {book.author}</p>
                                                <p>Price: {book.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="swiper-button-prev">
                                    <div className="prev-icon">
                                        <i className="fa-solid fa-chevron-left fa-xl"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </section>
        </Container>
    );
}
