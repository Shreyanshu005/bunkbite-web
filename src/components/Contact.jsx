import { motion } from 'framer-motion';
import logo from '../assets/newlogo.png';
import appStoreBadge from '../assets/app-store-badge.svg';
import googlePlayBadge from '../assets/google-play-badge.svg';
import appScreenshot from '../assets/IMG_1956.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Download BunkBite</h2>
        <p className="section-subtitle">
          Start ordering delicious food from your college canteen today!
        </p>

        <div className="download-container">
          <motion.div
            className="download-section"
            id="download"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Download BunkBite</h3>
            <p>Start ordering delicious food from your college canteen today!</p>

            <div className="download-buttons">
              <a href="https://apps.apple.com/in/app/bunkbite/id6755028590" target="_blank" rel="noopener noreferrer">
                <img src={appStoreBadge} alt="Download on the App Store" className="store-badge-large" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.bunkbite.app.canteenapp" target="_blank" rel="noopener noreferrer">
                <img src={googlePlayBadge} alt="Get it on Google Play" className="store-badge-large" />
              </a>
            </div>

            <div className="app-mockup">
              <div className="mockup-glow"></div>
              <div className="mockup-phone">
                <div className="mockup-notch"></div>
                <div className="mockup-button mockup-button-left"></div>
                <div className="mockup-button mockup-button-right mockup-button-right-top"></div>
                <div className="mockup-button mockup-button-right mockup-button-right-bottom"></div>
                <div className="mockup-screen">
                  <img src={appScreenshot} alt="BunkBite App" className="mockup-screenshot" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
