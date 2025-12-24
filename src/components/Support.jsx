import { motion } from 'framer-motion';
import { Smartphone, Bug, MessageSquare, Users } from 'lucide-react';
import './Support.css';

const supportOptions = [
  {
    icon: <Smartphone size={28} />,
    title: 'In-App Support',
    description: 'Get help directly through the BunkBite app',

  },
  {
    icon: <Bug size={28} />,
    title: 'Report a Bug',
    description: 'Help us improve by reporting issues',

  },
  {
    icon: <MessageSquare size={28} />,
    title: 'Feedback',
    description: 'Share your thoughts and suggestions',

  },
  {
    icon: <Users size={28} />,
    title: 'Partnerships',
    description: 'Interested in partnering with us?',

  }
];

const Support = () => {
  return (
    <section id="support" className="section support-section">
      <div className="container">
        <h2 className="section-title">Support & Help</h2>
        <p className="section-subtitle">
          Download the BunkBite app to access our full support features
        </p>

        <div className="support-grid">
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              className="support-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="support-icon">{option.icon}</div>
              <h3 className="support-title">{option.title}</h3>
              <p className="support-description">{option.description}</p>
              <span className="support-action">{option.action}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="support-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>All support features are available in the BunkBite mobile app</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;
