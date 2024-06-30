import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

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
        <Carousel>
            {carousel.map(item => (
                <Carousel.Item key={item.id}>
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt={item.title}
                    />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
