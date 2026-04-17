import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import './Category.css';

// Import academic book images
import textbookImg from '../assets/books/Academic/textbook.jpg';
import referenceImg from '../assets/books/Academic/reference.jpg';
import studyGuideImg from '../assets/books/Academic/study guide.png';

function Academic() {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      const allBooks = JSON.parse(storedBooks);
      const academicBooks = allBooks.filter(book => book.category === 'academic');
      setBooks(academicBooks);
    } else {
      const defaultBooks = [
        { 
          id: 13, 
          title: "NCERT Mathematics Textbook For Class 9", 
          author: "Multiple Authors", 
          price: 299, 
          category: "academic",
          subcategory: "textbook",
          cover: textbookImg
        },
        { 
          id: 14, 
          title: "Official Reference Book (Classic Reprint)", 
          author: "Press Club of Chicago", 
          price: 399, 
          category: "academic",
          subcategory: "reference",
          cover: referenceImg
        },
        { 
          id: 15, 
          title: "The Only Study Guide You'll Ever Need", 
          author: "Jade Bowler", 
          price: 199, 
          category: "academic",
          subcategory: "study-guide",
          cover: studyGuideImg
        },
      ];
      setBooks(defaultBooks);
    }
  }, []);

  return (
    <div className="category-page academic">
      <div className="category-header">
        <i className="fa-solid fa-graduation-cap"></i>
        <h1>Academic Books</h1>
        <p>Textbooks | Reference Books | Study Guides</p>
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

export default Academic;