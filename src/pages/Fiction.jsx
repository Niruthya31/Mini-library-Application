import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import './Category.css';

import bookOfNight from '../assets/books/Fiction/novels.jpg';
import silentPatient from '../assets/books/Fiction/thriller.jpg';
import rosesOfRed from '../assets/books/Fiction/romance.jpg';
import fallToEarth from '../assets/books/Fiction/si-fi.jpg';

function Fiction() {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      const allBooks = JSON.parse(storedBooks);
      const fictionBooks = allBooks.filter(book => book.category === 'fiction');
      setBooks(fictionBooks);
    } else {
      const defaultBooks = [
        { 
          id: 1, 
          title: "Book of Night", 
          author: "Holly Black", 
          price: 299, 
          category: "fiction", 
          genre: "novel",
          cover: bookOfNight
        },
        { 
          id: 2, 
          title: "The Silent Patient", 
          author: "Alex Michaelides", 
          price: 260, 
          category: "fiction", 
          genre: "thriller",
          cover: silentPatient
        },
        { 
          id: 3, 
          title: "Roses of Red", 
          author: "DV Fischer", 
          price: 360, 
          category: "fiction", 
          genre: "romance",
          cover: rosesOfRed
        },
        { 
          id: 4, 
          title: "Fall to Earth", 
          author: "Ken Britz", 
          price: 399, 
          category: "fiction", 
          genre: "sci-fi",
          cover: fallToEarth
        },
      ];
      setBooks(defaultBooks);
    }
  }, []);

  return (
    <div className="category-page fiction">
      <div className="category-header">
        <i className="fa-solid fa-book-open"></i>
        <h1>Fiction Books</h1>
        <p>Novels | Thrillers | Romance | Sci-Fi</p>
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

export default Fiction;