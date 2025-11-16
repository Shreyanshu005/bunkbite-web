import { motion } from 'framer-motion';
import './Legal.css';

const Privacy = () => {
  return (
    <motion.div
      className="legal-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: November 17, 2024</p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to BunkBite ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name and contact information (phone number)</li>
              <li>College/university information</li>
              <li>Order history and preferences</li>
              <li>Payment information (processed securely through Razorpay)</li>
            </ul>

            <h3>2.2 Usage Data</h3>
            <p>We automatically collect certain information when you use our app:</p>
            <ul>
              <li>Device information (model, operating system)</li>
              <li>App usage statistics</li>
              <li>Log data and diagnostics</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process and fulfill your food orders</li>
              <li>Send order status notifications</li>
              <li>Improve our app and services</li>
              <li>Provide customer support</li>
              <li>Prevent fraud and ensure security</li>
              <li>Communicate important updates about our service</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal data. We may share your information with:</p>
            <ul>
              <li><strong>Canteen Partners:</strong> To fulfill your orders</li>
              <li><strong>Payment Processors:</strong> Razorpay for secure payment processing</li>
              <li><strong>Service Providers:</strong> Third-party services that help us operate our app</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2>7. Guest Browsing</h2>
            <p>
              You can browse canteen menus without creating an account. No personal information is collected during guest browsing. Data collection only begins when you create an account and place orders.
            </p>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>
            <p>
              Our service is intended for college and university students. We do not knowingly collect information from individuals under 13 years of age.
            </p>
          </section>

          <section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>If you have questions about this privacy policy, please contact us:</p>
            <ul>
              <li>Email: <a href="mailto:privacy@bunkbite.me">privacy@bunkbite.me</a></li>
              <li>Support: <a href="mailto:support@bunkbite.me">support@bunkbite.me</a></li>
            </ul>
          </section>

          <section>
            <h2>11. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your account and data at any time by contacting our support team.
            </p>
          </section>

          <section>
            <h2>12. Third-Party Links</h2>
            <p>
              Our app may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <div className="legal-footer">
            <p>
              By using BunkBite, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;
