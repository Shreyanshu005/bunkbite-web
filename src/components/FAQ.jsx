import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: 'How do I create an account?',
    answer: 'You can sign up using your Email id. We\'ll send you an OTP to verify your account. No mobile number required!'
  },
  {
    question: 'Can I browse menus without signing in?',
    answer: 'Yes! You can browse all canteen menus and food items without creating an account. Sign in only when you\'re ready to place an order.'
  },
  {
    question: 'What payment methods are supported?',
    answer: 'We support all major payment methods through Razorpay including UPI, debit/credit cards and net banking.'
  },


  {
    question: 'Is there a minimum order amount?',
    answer: 'Minimum order amounts may vary by canteen. You\'ll see any requirements before checkout.'
  },
  {
    question: 'Which canteens are available?',
    answer: 'Available canteens depend on your college. Open the app to see all canteens registered with BunkBite at your location.'
  },
  {
    question: 'What if I have an issue with my order?',
    answer: 'Report the issue directly through the app and our support team will resolve it promptly.'
  }
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="faq-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button
        className={`faq-question ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <ChevronDown className={`chevron ${isOpen ? 'rotate' : ''}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about BunkBite
        </p>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
