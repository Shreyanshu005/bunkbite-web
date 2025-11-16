import { motion } from 'framer-motion';
import './Legal.css';

const Terms = () => {
  return (
    <motion.div
      className="legal-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="legal-content">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: November 17, 2024</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using BunkBite ("the App"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>
              BunkBite is a mobile application platform that facilitates food ordering from college and university canteens. We provide a technology platform connecting students with canteen vendors but do not directly provide food services.
            </p>
          </section>

          <section>
            <h2>3. User Accounts</h2>
            <h3>3.1 Account Creation</h3>
            <ul>
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must be a student or authorized user of the educational institution</li>
              <li>One account per user; sharing accounts is prohibited</li>
            </ul>

            <h3>3.2 Guest Access</h3>
            <p>
              You may browse canteen menus without creating an account. However, placing orders requires account registration.
            </p>
          </section>

          <section>
            <h2>4. Orders and Payments</h2>
            <h3>4.1 Placing Orders</h3>
            <ul>
              <li>All orders are subject to availability</li>
              <li>Prices are displayed in Indian Rupees (INR)</li>
              <li>We reserve the right to refuse or cancel orders</li>
              <li>Order confirmation does not guarantee fulfillment</li>
            </ul>

            <h3>4.2 Payment Terms</h3>
            <ul>
              <li>Payment is processed through Razorpay, our secure payment gateway</li>
              <li>All payments must be made in advance</li>
              <li>We accept UPI, debit/credit cards, net banking, and wallets</li>
              <li>You agree to pay all applicable charges and taxes</li>
            </ul>

            <h3>4.3 Cancellations and Refunds</h3>
            <ul>
              <li>Orders can be cancelled within 5 minutes of placement</li>
              <li>Refunds for cancelled orders will be processed within 5-7 business days</li>
              <li>No refunds once food preparation has started</li>
              <li>Refunds are subject to our refund policy</li>
            </ul>
          </section>

          <section>
            <h2>5. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Use the App only for lawful purposes</li>
              <li>Provide accurate order and contact information</li>
              <li>Pick up orders at the designated time</li>
              <li>Not misuse or attempt to manipulate the App</li>
              <li>Respect canteen staff and other users</li>
              <li>Not share your account credentials</li>
            </ul>
          </section>

          <section>
            <h2>6. Prohibited Activities</h2>
            <p>You may not:</p>
            <ul>
              <li>Use the App for fraudulent purposes</li>
              <li>Interfere with the App's operation</li>
              <li>Reverse engineer or copy any part of the App</li>
              <li>Use automated systems to access the App</li>
              <li>Harass or abuse other users or staff</li>
              <li>Share or resell food purchased through the App for commercial purposes</li>
            </ul>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              All content, features, and functionality of BunkBite, including but not limited to text, graphics, logos, and software, are owned by BunkBite and protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2>8. Disclaimers and Limitations of Liability</h2>
            <h3>8.1 Service Availability</h3>
            <p>
              We strive to maintain uninterrupted service but do not guarantee that the App will be available at all times. We are not liable for any temporary unavailability.
            </p>

            <h3>8.2 Food Quality</h3>
            <p>
              While we partner with canteens to ensure quality, we are not responsible for the actual preparation and quality of food. Direct food-related concerns should be addressed with the respective canteen.
            </p>

            <h3>8.3 Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, BunkBite shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.
            </p>
          </section>

          <section>
            <h2>9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for violation of these Terms. You may also delete your account at any time through the App settings or by contacting support.
            </p>
          </section>

          <section>
            <h2>10. Privacy</h2>
            <p>
              Your use of the App is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2>11. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will notify users of material changes via the App or email. Continued use of the App after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka, India.
            </p>
          </section>

          <section>
            <h2>13. Contact Information</h2>
            <p>For questions about these Terms, please contact us:</p>
            <ul>
              <li>Email: <a href="mailto:legal@bunkbite.me">legal@bunkbite.me</a></li>
              <li>Support: <a href="mailto:support@bunkbite.me">support@bunkbite.me</a></li>
            </ul>
          </section>

          <section>
            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section>
            <h2>15. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and BunkBite regarding the use of the App.
            </p>
          </section>

          <div className="legal-footer">
            <p>
              By using BunkBite, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;
