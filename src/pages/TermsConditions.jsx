import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { fadeUp, viewport, pageVariants } from '../utils/variants';

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using The Computing Effect\'s website and services, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any modifications.',
  },
  {
    title: '2. Services Description',
    content: 'The Computing Effect provides IT services including web development, mobile application development, UI/UX design, SEO services, digital marketing, and custom software development. The specific scope, deliverables, timelines, and pricing for each project are defined in individual service agreements or proposals signed by both parties.',
  },
  {
    title: '3. Client Responsibilities',
    content: 'As a client, you are responsible for providing accurate and complete information required for project completion; timely feedback and approvals within agreed response windows; providing access to necessary systems, assets, and credentials as required; ensuring all content, images, and materials provided are legally owned or licensed; and making payments according to the agreed schedule.',
  },
  {
    title: '4. Intellectual Property',
    content: 'Upon receipt of full payment, all custom work created specifically for you — including designs, code, and content — becomes your intellectual property. We retain the right to use project work in our portfolio unless confidentiality is explicitly agreed upon. Pre-existing materials, third-party libraries, and open-source components remain subject to their respective licenses. The Computing Effect retains ownership of proprietary tools, methodologies, and frameworks developed independently.',
  },
  {
    title: '5. Payment Terms',
    content: 'Payment terms are specified in individual project agreements. Generally, a deposit of 30–50% is required before project commencement. Remaining payments are milestone-based as outlined in the project proposal. Late payments may result in project suspension after a 7-day grace period. All prices are exclusive of applicable taxes unless stated otherwise.',
  },
  {
    title: '6. Confidentiality',
    content: 'Both parties agree to keep confidential all non-public information shared during the project engagement. We will not disclose your business information, project details, or trade secrets to third parties without your consent. We are happy to sign formal NDAs upon request before any sensitive project discussions.',
  },
  {
    title: '7. Revisions and Change Requests',
    content: 'Each project includes a defined number of revision rounds as specified in the project proposal. Additional revisions beyond the agreed scope will be billed at our standard hourly rate. Significant scope changes will require a revised proposal and additional cost estimation. All change requests should be submitted in writing to ensure proper tracking and documentation.',
  },
  {
    title: '8. Project Timelines',
    content: 'Project timelines are estimated based on the agreed scope and your timely provision of required information. Delays caused by late client feedback, incomplete information, or scope changes may extend project timelines. We will communicate any timeline adjustments promptly and work collaboratively to minimize disruption.',
  },
  {
    title: '9. Warranty and Support',
    content: 'All completed projects include a 30-day warranty period for bug fixes related to the original project scope at no additional charge. This warranty does not cover issues caused by client modifications, third-party updates, or changes in scope. Post-warranty support is available under our maintenance retainer packages.',
  },
  {
    title: '10. Limitation of Liability',
    content: 'The Computing Effect\'s liability is limited to the total amount paid for the specific project or service in question. We are not liable for any indirect, incidental, consequential, or punitive damages arising from the use of our services, including lost profits, data loss, or business interruption. We make no warranties, express or implied, beyond those explicitly stated in project agreements.',
  },
  {
    title: '11. Termination',
    content: 'Either party may terminate a project engagement with 14 days written notice. Upon termination, you will be invoiced for all work completed up to the termination date. Deposits are non-refundable unless termination is due to our material breach of the agreement. All work completed to date will be delivered upon receipt of final payment.',
  },
  {
    title: '12. Dispute Resolution',
    content: 'Any disputes arising from these terms or our services will first be addressed through good-faith negotiation between the parties. If resolution cannot be reached within 30 days, disputes will be resolved through binding arbitration in accordance with applicable Indian law. Both parties agree to waive the right to a jury trial for any disputes covered by these terms.',
  },
  {
    title: '13. Governing Law',
    content: 'These Terms and Conditions are governed by the laws of India. Any legal proceedings arising from these terms will be conducted in the appropriate courts of India. If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.',
  },
  {
    title: '14. Contact Information',
    content: 'For questions about these Terms and Conditions, please contact us at hello@thecomputingeffect.com. We are committed to transparent communication and will respond to all inquiries within 2 business days.',
  },
];

export default function TermsConditions() {
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
            <span>Terms & Conditions</span>
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Terms & Conditions
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
            style={{ background: 'rgba(74,55,40,0.04)', border: 'var(--border-subtle)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.75 }}>
              Please read these Terms and Conditions carefully before using The Computing Effect's website or engaging our services. These terms govern your relationship with us and outline both parties' rights and responsibilities.
            </p>
          </motion.div>

          {SECTIONS.map(({ title, content }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: i * 0.04 }}
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
