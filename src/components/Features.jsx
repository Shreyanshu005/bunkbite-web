import { motion } from 'framer-motion';
import { Smartphone, Clock, ShoppingCart, Search, Bell, Shield } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <Smartphone size={32} />,
    title: 'Easy Mobile Ordering',
    description: 'Browse menus and place orders directly from your smartphone - quick and convenient.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Save Time',
    description: 'Skip the canteen queue. Order ahead and pick up when your food is ready.'
  },
  {
    icon: <ShoppingCart size={32} />,
    title: 'Smart Cart',
    description: 'Add items to your cart, customize orders, and checkout in seconds.'
  },
  {
    icon: <Search size={32} />,
    title: 'Browse Menus',
    description: 'Explore all available items from multiple canteens in one place. No login required to browse!'
  },
  {
    icon: <Bell size={32} />,
    title: 'Order Notifications',
    description: 'Get real-time updates when your order is being prepared and ready for pickup.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Secure Payments',
    description: 'Pay safely with Razorpay integration supporting UPI, cards, and wallets.'
  }
];

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title">Why Choose BunkBite?</h2>
        <p className="section-subtitle">
          Everything you need for a seamless canteen ordering experience
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
