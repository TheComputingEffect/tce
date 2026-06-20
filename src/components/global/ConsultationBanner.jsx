import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { fadeUp, viewport } from '../../utils/variants';

export default function ConsultationBanner({ 
  headline = "Ready to Build Something Extraordinary?",
  subtext = "Let's turn your vision into reality. Our team is ready to help you create something remarkable.",
  primaryLabel = "Start Your Project",
  secondaryLabel = "Schedule a Free Call",
  primaryTo = "/contact",
}) {
  return (
    <section className="dark-section">
      <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              color: '#EAD7BB',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            {headline}
          </h2>
          <p style={{ color: '#D4A373', fontSize: '1.0625rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            {subtext}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to={primaryTo}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#BC6C25',
                color: '#fff',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '0.9375rem',
                padding: '0.8rem 1.75rem',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(188,108,37,0.30)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <ArrowRight size={16} />
              {primaryLabel}
            </Link>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                color: '#EAD7BB',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '0.9375rem',
                padding: '0.8rem 1.75rem',
                borderRadius: '8px',
                border: '1.5px solid rgba(234,215,187,0.4)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Calendar size={16} />
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
