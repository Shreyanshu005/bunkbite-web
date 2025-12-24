import { motion } from 'framer-motion';
import logo from '../assets/bunkbite_logo.png';
import appStoreBadge from '../assets/app-store-badge.svg';
import googlePlayBadge from '../assets/google-play-badge.svg';
import apkFile from '../assets/app-release - Copy.apk';
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Download BunkBite</h3>
            <p>Start ordering delicious food from your college canteen today!</p>

            <div className="download-buttons">
              <a href="https://apps.apple.com/in/app/bunkbite/id6755028590" target="_blank" rel="noopener noreferrer">
                <img src={appStoreBadge} alt="Download on the App Store" className="store-badge-large" />
              </a>
              <div className="coming-soon-card">
                <img src={googlePlayBadge} alt="Google Play - Coming Soon" className="store-badge-large" style={{ opacity: 0.3 }} />
                <div className="coming-soon-content">
                  <span className="coming-soon-label">Coming Soon on Play Store</span>
                  <p className="direct-download">Want to try now? <a href={apkFile} download="Bunkbite.apk" className="apk-link">Download directly</a></p>
                </div>
              </div>
            </div>

            <div className="app-mockup">
              <div className="mockup-glow"></div>
              <div className="mockup-phone">
                <div className="mockup-screen">
                  <div className="mockup-notch"></div>
                  <div className="mockup-content">
                    <img src={logo} alt="BunkBite Logo" className="mockup-app-icon" />
                    <div className="mockup-text">BunkBite</div>
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

export default Contact;
