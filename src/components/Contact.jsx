import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Apple, PlayCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have questions? We'd love to hear from you.
        </p>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div>
                <h3>Email Us</h3>
                <a href="mailto:support@bunkbite.me">support@bunkbite.me</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div>
                <h3>Call Us</h3>
                <a href="tel:+911234567890">+91 123 456 7890</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h3>Office Address</h3>
                <p>Bengaluru, Karnataka<br />India - 560001</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div>
                <h3>Support Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </motion.div>

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
              <a href="#" className="download-btn app-store">
                <Apple size={32} />
                <div>
                  <span className="small">Download on the</span>
                  <span className="large">App Store</span>
                </div>
              </a>
              <a href="#" className="download-btn play-store">
                <PlayCircle size={32} />
                <div>
                  <span className="small">Get it on</span>
                  <span className="large">Google Play</span>
                </div>
              </a>
            </div>

            <div className="app-mockup">
              <div className="mockup-glow"></div>
              <div className="mockup-phone">
                <div className="mockup-screen">
                  <div className="mockup-notch"></div>
                  <div className="mockup-content">
                    <div className="mockup-app-icon">🍔</div>
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
