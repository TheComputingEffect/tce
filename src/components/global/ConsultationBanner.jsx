import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { fadeUp, viewport } from '../../utils/variants';

export default function ConsultationBanner({ 
  headline = "Ready to Build Something Great?",
  subtext = "Let's turn your vision into operational reality. Work directly with our developers to review your database schemas and map out integrations.",
  primaryLabel = "Start Your Project",
  secondaryLabel = "Schedule Scoping Call",
  primaryTo = "/contact",
}) {
  return (
    <section style={{ padding: '6rem 0', background: '#14090A' }}>
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid rgba(255, 90, 0, 0.08)',
            borderRadius: '32px',
            padding: '5rem 2.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,90,0,0.04) 0%, transparent 70%)', top: '-50px', left: '-50px' }} />
          
          <div style={{ position: 'relative', zIndex: 5, maxWidth: '640px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: '#FFF8F1',
                marginBottom: '1rem',
                lineHeight: 1.2,
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              {headline}
            </h2>
            <p style={{ color: 'rgba(255,248,241,0.65)', fontSize: '0.95rem', marginBottom: '2.25rem', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>
              {subtext}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to={primaryTo}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--color-orange)',
                  color: '#fff',
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(255, 90, 0, 0.2)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                {primaryLabel} <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255, 248, 241, 0.02)',
                  color: '#FFF8F1',
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,248,241,0.1)',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,248,241,0.08)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,248,241,0.02)'}
              >
                <Calendar size={14} color="var(--color-orange)" />
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
