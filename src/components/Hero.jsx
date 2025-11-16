import { motion } from 'framer-motion';
import { Apple, PlayCircle } from 'lucide-react';
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
              <a href="#download" className="btn btn-primary">
                <Apple size={20} />
                Download on App Store
              </a>
              <a href="#download" className="btn btn-secondary">
                <PlayCircle size={20} />
                Get it on Google Play
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
                    <div className="preview-icon">🍔</div>
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
