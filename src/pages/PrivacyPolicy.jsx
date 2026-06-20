import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { fadeUp, viewport, pageVariants } from '../utils/variants';

const SECTIONS = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly to us, such as when you fill out our contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide. We also collect certain information automatically when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about your use of our site through cookies and similar technologies.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use the information we collect to provide, maintain, and improve our services; respond to your inquiries and fulfill your requests; send you technical notices, updates, and support messages; send promotional communications, such as information about our services (you can opt out at any time); monitor and analyze trends, usage, and activities in connection with our services; and comply with legal obligations.',
  },
  {
    title: '3. Information Sharing',
    content: 'We do not share your personal information with third parties except in the following circumstances: with your consent; with service providers who assist us in our operations (these parties are bound by confidentiality agreements); to comply with applicable laws, regulations, or legal process; to protect the rights, property, or safety of The Computing Effect, our clients, or others; or in connection with any merger, sale of company assets, or other business transaction.',
  },
  {
    title: '4. Data Security',
    content: 'We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of your information. We use industry-standard encryption (SSL/TLS) for data in transit and follow best practices for data storage.',
  },
  {
    title: '5. Cookies & Tracking',
    content: 'We use cookies and similar tracking technologies to analyze website traffic, remember your preferences, and personalize content. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service. We use Google Analytics to understand how visitors interact with our website.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to access, update, or delete your personal information at any time. You may also object to or restrict the processing of your personal data. To exercise these rights, please contact us at hello@thecomputingeffect.com. We will respond to your request within 30 days. If you are located in the European Economic Area, you have additional rights under GDPR.',
  },
  {
    title: '7. Data Retention',
    content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.',
  },
  {
    title: '8. Third-Party Links',
    content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to review their privacy policies. This Privacy Policy applies only to information collected by The Computing Effect.',
  },
  {
    title: '9. Children\'s Privacy',
    content: 'Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately and we will delete the information.',
  },
  {
    title: '10. Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically. Your continued use of our services after any changes constitutes acceptance of the updated policy.',
  },
  {
    title: '11. Contact Us',
    content: 'If you have any questions about this Privacy Policy or our data practices, please contact us at: hello@thecomputingeffect.com. We are committed to resolving any concerns you may have about your privacy.',
  },
];

export default function PrivacyPolicy() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      {/* Hero */}
      <section style={{
        minHeight: '35vh', display: 'flex', alignItems: 'flex-end',
        paddingTop: '80px',
        background: 'linear-gradient(135deg, rgba(250,246,240,0.9) 0%, rgba(234,215,187,0.6) 100%)',
        borderBottom: 'var(--border-subtle)',
      }}>
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: '#BC6C25' }}>Home</Link>
            <ChevronRight size={13} />
            <span>Privacy Policy</span>
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Privacy Policy
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Last Updated: June 2025 · Effective Date: June 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-py">
        <div className="container" style={{ maxWidth: '760px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            style={{ background: 'rgba(188,108,37,0.05)', border: '1px solid rgba(188,108,37,0.15)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.75 }}>
              At The Computing Effect, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read this policy carefully.
            </p>
          </motion.div>

          {SECTIONS.map(({ title, content }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: i * 0.05 }}
              style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: 'var(--border-subtle)' }}
            >
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.875rem' }}>{title}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.9375rem' }}>{content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
