import { motion } from 'framer-motion';
import { Mail, Bug, MessageSquare, Users, Clock } from 'lucide-react';
import './Support.css';

const supportOptions = [
  {
    icon: <Mail size={28} />,
    title: 'General Support',
    description: 'For general inquiries and assistance',
    email: 'support@bunkbite.me'
  },
  {
    icon: <Bug size={28} />,
    title: 'Report a Bug',
    description: 'Help us improve by reporting issues',
    email: 'bugs@bunkbite.me'
  },
  {
    icon: <MessageSquare size={28} />,
    title: 'Feedback',
    description: 'Share your thoughts and suggestions',
    email: 'feedback@bunkbite.me'
  },
  {
    icon: <Users size={28} />,
    title: 'Partnerships',
    description: 'Interested in partnering with us?',
    email: 'partners@bunkbite.me'
  }
];

const Support = () => {
  return (
    <section id="support" className="section support-section">
      <div className="container">
        <h2 className="section-title">Support & Help</h2>
        <p className="section-subtitle">
          We're here to help! Reach out to us for any assistance you need.
        </p>

        <div className="support-grid">
          {supportOptions.map((option, index) => (
            <motion.a
              key={index}
              href={`mailto:${option.email}`}
              className="support-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="support-icon">{option.icon}</div>
              <h3 className="support-title">{option.title}</h3>
              <p className="support-description">{option.description}</p>
              <span className="support-email">{option.email}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="response-time"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Clock size={20} />
          <span>We typically respond within 24-48 hours</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;
