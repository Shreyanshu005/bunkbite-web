import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/newlogo.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src={logo} alt="BunkBite Logo" className="logo-icon" />
            <span className="logo-text">BunkBite</span>
          </Link>

          <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>

          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="nav-links-container">
              <button onClick={() => scrollToSection('features')} className="nav-link nav-link-mobile" style={{ '--i': 1 }}>
                Features
              </button>
              <button onClick={() => scrollToSection('support')} className="nav-link nav-link-mobile" style={{ '--i': 2 }}>
                Support
              </button>
              <button onClick={() => scrollToSection('faq')} className="nav-link nav-link-mobile" style={{ '--i': 3 }}>
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link nav-link-mobile" style={{ '--i': 4 }}>
                Contact
              </button>
              <Link to="/privacy" className="nav-link nav-link-mobile" style={{ '--i': 5 }}>Privacy Policy</Link>
              <Link to="/terms" className="nav-link nav-link-mobile" style={{ '--i': 6 }}>Terms</Link>
            </div>
          </nav>

          <button
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
