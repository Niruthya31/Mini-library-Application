import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Navbar.css';

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleAboutClick = () => {
    navigate('/');
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleCategoryClick = (category) => {
    setShowDropdown(false);
    navigate(`/${category}`);
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
      setShowPopup(false);
    } else {
      alert('Please enter your email');
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-top-row">
          <div className="logo">
            <h1> Mini Library</h1>
          </div>
          <div className="nav-right">
            <nav className="nav-links">
              <button onClick={handleHomeClick} className="nav-btn">Home</button>
              <button onClick={handleAboutClick} className="nav-btn">About</button>
              <li
                className="dropdown"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button className="nav-btn">Main Categories </button>
                {showDropdown && (
                  <ul className="dropdown-menu">
                    <li onClick={() => handleCategoryClick('fiction')}> Fiction</li>
                    <li onClick={() => handleCategoryClick('nonfiction')}> Non-Fiction</li>
                    <li onClick={() => handleCategoryClick('kidsbooks')}> Kids Books</li>
                    <li onClick={() => handleCategoryClick('academic')}>Academic</li>
                  </ul>
                )}
              </li>
              <button onClick={handleContactClick} className="nav-btn">Contact</button>
            </nav>

          
            <Link to="/cart" className="cart-icon-link">
              <i className="fa-solid fa-cart-arrow-down" style={{ color: '#e9c008' }}></i>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </div>
        </div>

      
        {isHomePage && (
          <div className="header-bottom-section">
            <div className='hero-header'>
              <h1 className="center-logo"> Mini Library</h1>
              <p className="tagline">"Books are infinite in number and time is short."</p>
              <p className="tagline">"The secret of knowledge is to take what is essential."</p>
              <p className="tagline">"Take that and try to live up to it."</p>
              <button className="subscribe-btn" onClick={() => setShowPopup(true)}>
                Subscribe
              </button>
            </div>
          </div>
        )}
      </header>

  
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Subscribe to Mini Library</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="popup-input"
            />
            <button onClick={handleSubscribe} className="popup-subscribe-btn">
              Subscribe
            </button>
            <button className="popup-close" onClick={() => setShowPopup(false)}>×</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;