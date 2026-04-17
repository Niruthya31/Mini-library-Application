import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import williamShakespear from '../assets/authors/William-Shakespeare.jpg';
import charlesDickens from '../assets/authors/charles-Dickens.jpg';
import franzKafka from '../assets/authors/Franz-Kafka.jpg';
import fyodorDostoevsky from '../assets/authors/Fyodor-Dostoevsky.jpg';
import gabrielMarquez from '../assets/authors/Gabriel-Garcia-Marquez.jpg';
import georgeMartin from '../assets/authors/George-R.R.Martin.jpg';
import jkRowling from '../assets/authors/J.K.Rowling img.jpg';
import jrrTolkien from '../assets/authors/J.R.R.Tolkien.jpg';
import janeAusten from '../assets/authors/Jane-Austen.jpg';
import stephenKing from '../assets/authors/Stephen-King.jpg';

function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCategoryClick = (category) => {
    navigate(`/${category}`);
  };


  const authors = [
    { id: 1, name: "William Shakespeare", img: williamShakespear },
    { id: 2, name: "Charles Dickens", img: charlesDickens },
    { id: 3, name: "Franz Kafka", img: franzKafka },
    { id: 4, name: "Fyodor Dostoevsky", img: fyodorDostoevsky },
    { id: 5, name: "Gabriel Garcia Marquez", img: gabrielMarquez },
    { id: 6, name: "George R.R. Martin", img: georgeMartin },
    { id: 7, name: "J.K. Rowling", img: jkRowling },
    { id: 8, name: "J.R.R. Tolkien", img: jrrTolkien },
    { id: 9, name: "Jane Austen", img: janeAusten },
    { id: 10, name: "Stephen King", img: stephenKing },
  ];

 
  const authorsPerPage = 4;
  const totalPages = Math.ceil(authors.length / authorsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  };

  const startIndex = currentIndex * authorsPerPage;
  const visibleAuthors = authors.slice(startIndex, startIndex + authorsPerPage);

  return (
    <div className="home">
      
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Mini Library</h2>
          <p>
            At Mini Library, we believe every book opens a new door to adventure. Our carefully curated collection offers something special for every reader, from timeless classics to the latest bestsellers.
          </p>
          <div className="about-features">
            <div className="feature">
              <i className="fa-solid fa-book-open"></i>
              <h3>10,000+ Books</h3>
              <p>Wide collection across all genres</p>
            </div>
            <div className="feature">
              <i className="fa-solid fa-truck-fast"></i>
              <h3>Free Shipping</h3>
              <p>On orders over 5%</p>
            </div>
            <div className="feature">
              <i className="fa-solid fa-star"></i>
              <h3>4.9 Rating</h3>
              <p>From 5,000+ happy readers</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="categories-preview">
        <div className="container">
          <h2>Main Categories</h2>
          <div className="category-grid">
            <div className="category-card" onClick={() => handleCategoryClick('fiction')}>
              <i className="fa-solid fa-book"></i>
              <h3>Fiction</h3>
              <p>Novels, thrillers, romance, sci-fi</p>
              <button className="category-btn">Explore →</button>
            </div>
            <div className="category-card" onClick={() => handleCategoryClick('nonfiction')}>
              <i className="fa-solid fa-book-atlas"></i>
              <h3>Non-Fiction</h3>
              <p>Biography, history, self-help, business</p>
              <button className="category-btn">Explore →</button>
            </div>
            <div className="category-card" onClick={() => handleCategoryClick('kidsbooks')}>
              <i className="fa-solid fa-child"></i>
              <h3>Kids Books</h3>
              <p>Picture books, young readers, educational</p>
              <button className="category-btn">Explore →</button>
            </div>
            <div className="category-card" onClick={() => handleCategoryClick('academic')}>
              <i className="fa-solid fa-graduation-cap"></i>
              <h3>Academic</h3>
              <p>Textbooks, reference, study guides</p>
              <button className="category-btn">Explore →</button>
            </div>
          </div>
        </div>
      </section>

  
      <section className="authors-section">
        <div className="container">
          <h2>Famous Authors</h2>
          <div className="authors-carousel">
            <button className="carousel-btn prev-btn" onClick={goToPrevious}>
              ‹
            </button>
            
            <div className="authors-container">
              {visibleAuthors.map((author) => (
                <div key={author.id} className="author-card">
                  <div className="author-image">
                    <img src={author.img} alt={author.name} />
                  </div>
                  <h3>{author.name}</h3>
                </div>
              ))}
            </div>
  
            <button className="carousel-btn next-btn" onClick={goToNext}>
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;