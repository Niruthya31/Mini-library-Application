import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import './Category.css';

import pictureBookImg from '../assets/books/kids/picture-book.jpg';
import coloringBookImg from '../assets/books/kids/coloring-book.jpg';
import youngReaderImg from '../assets/books/kids/young-reader.jpg';
import characterBooksImg from '../assets/books/kids/character-books.jpg';

function KidsBooks() {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      const allBooks = JSON.parse(storedBooks);
      const kidsBooks = allBooks.filter(book => book.category === 'kidsbooks');
      setBooks(kidsBooks);
    } else {
      const defaultBooks = [
        { 
          id: 9, 
          title: "Writing Picture Books: A Hands-On Guide From Story Creation to Publication", 
          author: "Ann Whitford Paul", 
          price: 24.99, 
          category: "kidsbooks",
          subcategory: "picture-book",
          cover: pictureBookImg
        },
        { 
          id: 10, 
          title: "Little Corner Cute & Comfy Coloring Book", 
          author: "Lukas Sommer", 
          price: 12.99, 
          category: "kidsbooks",
          subcategory: "coloring-book",
          cover: coloringBookImg
        },
        { 
          id: 11, 
          title: "The Essential Collection for Young Readers", 
          author: "Ruskin Bond", 
          price: 18.99, 
          category: "kidsbooks",
          subcategory: "young-reader",
          cover: youngReaderImg
        },
        { 
          id: 12, 
          title: "My First Ruskin Bond Collection", 
          author: "Ruskin Bond", 
          price: 15.99, 
          category: "kidsbooks",
          subcategory: "character-books",
          cover: characterBooksImg
        },
      ];
      setBooks(defaultBooks);
    }
  }, []);

  return (
    <div className="category-page kidsbooks">
      <div className="category-header">
        <i className="fa-solid fa-child"></i>
        <h1>Kids Books</h1>
        <p>Picture Books | Young Readers | Coloring Books | Character Books</p>
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

export default KidsBooks;