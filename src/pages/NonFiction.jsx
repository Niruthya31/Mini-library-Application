import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import './Category.css';

import biographyImg from '../assets/books/Non-Fiction/biography.jpg';
import historyImg from '../assets/books/Non-Fiction/history.jpg';
import selfHelpImg from '../assets/books/Non-Fiction/self help.webp';
import businessImg from '../assets/books/Non-Fiction/Business.webp';

function NonFiction() {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      const allBooks = JSON.parse(storedBooks);
      const nonFictionBooks = allBooks.filter(book => book.category === 'nonfiction');
      setBooks(nonFictionBooks);
    } else {
      const defaultBooks = [
        { 
          id: 5, 
          title: "Albert Einstein: A Biography", 
          author: "Greenwood Biographies", 
          price: 249, 
          category: "nonfiction",
          genre: "biography",
          cover: biographyImg
        },
        { 
          id: 6, 
          title: "Speaking Of History: Conversations About India's Past And Present", 
          author: "Various Authors", 
          price: 299, 
          category: "nonfiction",
          genre: "history",
          cover: historyImg
        },
        { 
          id: 7, 
          title: "Ikigai: The Japanese Secret to a Long and Happy Life", 
          author: "Hector Garcia", 
          price: 199, 
          category: "nonfiction",
          genre: "self-help",
          cover: selfHelpImg
        },
        { 
          id: 8, 
          title: "Rich Dad Poor Dad", 
          author: "Robert Kiyosaki", 
          price: 159, 
          category: "nonfiction",
          genre: "business",
          cover: businessImg
        },
      ];
      setBooks(defaultBooks);
    }
  }, []);

  return (
    <div className="category-page nonfiction">
      <div className="category-header">
        <i className="fa-solid fa-book-atlas"></i>
        <h1>Non-Fiction Books</h1>
        <p>Biography | History | Self-Help | Business</p>
      </div>
      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <div className="book-image-container">
              <img 
                src={book.cover} 
                alt={book.title}
                className="book-cover-image"
              />
            </div>
            <h3>{book.title}</h3>
            <p className="author">by {book.author}</p>
            <p className="price">Rs : {book.price.toFixed(2)}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(book)}>
              <i className="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonFiction;