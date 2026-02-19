import { motion } from 'framer-motion';
import logo from '../assets/newlogo.png';
import appStoreBadge from '../assets/app-store-badge.svg';
import googlePlayBadge from '../assets/google-play-badge.svg';
import appScreenshot from '../assets/IMG_1956.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-button phone-button-left"></div>
              <div className="phone-button phone-button-right phone-button-right-top"></div>
              <div className="phone-button phone-button-right phone-button-right-bottom"></div>
              <div className="phone-screen">
                <img src={appScreenshot} alt="BunkBite App" className="app-screenshot" loading="eager" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
