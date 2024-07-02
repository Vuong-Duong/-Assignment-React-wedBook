import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel, Nav, Container } from 'react-bootstrap';
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
        </Container>
    );
}
