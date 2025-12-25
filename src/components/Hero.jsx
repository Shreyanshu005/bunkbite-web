import { motion } from 'framer-motion';
import logo from '../assets/bunkbite_logo.png';
import appStoreBadge from '../assets/app-store-badge.svg';
import googlePlayBadge from '../assets/google-play-badge.svg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Skip the Line,<br />
              <span className="gradient-text">Savor the Time</span>
            </h1>
            <p className="hero-subtitle">
              Order delicious meals from your college canteen with BunkBite.
              Browse menus, customize orders, and pick up when ready - all from your phone.
            </p>
            <div className="hero-buttons">
              <a href="https://apps.apple.com/in/app/bunkbite/id6755028590" target="_blank" rel="noopener noreferrer">
                <img src={appStoreBadge} alt="Download on the App Store" className="store-badge" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.bunkbite.app.canteenapp" target="_blank" rel="noopener noreferrer">
                <img src={googlePlayBadge} alt="Get it on Google Play" className="store-badge" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-preview">
                  <div className="preview-header">
                    <div className="preview-dot"></div>
                    <div className="preview-dot"></div>
                    <div className="preview-dot"></div>
                  </div>
                  <div className="preview-content">
                    <img src={logo} alt="BunkBite Logo" className="preview-icon" />
                    <h3>Welcome to BunkBite!</h3>
                    <p>Browse canteens & order food</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
