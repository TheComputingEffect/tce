import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { pageVariants } from '../utils/variants';
import { PrimaryBtn, GhostBtn } from '../components/ui/Button';

export default function ThankYou() {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      {/* Animated checkmark */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(255, 90, 0, 0.08)',
          border: '2px solid rgba(255, 90, 0, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <svg
          viewBox="0 0 52 52"
          width="60"
          height="60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M14 26 L22 34 L38 18"
            stroke="var(--color-orange)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          />
        </svg>
      </motion.div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          Message Received!
        </h1>
        <p
          style={{
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            maxWidth: '480px',
            margin: '0 auto 1rem',
            lineHeight: 1.8,
            fontFamily: 'var(--font-body)',
          }}
        >
          Thank you for reaching out. We've received your message and are excited to connect with you.
        </p>

        {/* Response time badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 90, 0, 0.06)',
            border: '1px solid rgba(255, 90, 0, 0.15)',
            borderRadius: '100px',
            padding: '0.4rem 1rem',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }} />
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-orange)', fontWeight: 600 }}>
            Typically responding within 24 hours on business days
          </span>
        </div>

        {/* What happens next */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: 'var(--border-subtle)',
            borderRadius: '16px',
            padding: '1.5rem 2rem',
            marginBottom: '2.5rem',
            maxWidth: '400px',
            margin: '0 auto 2.5rem',
            boxShadow: 'var(--shadow-card)',
            textAlign: 'left',
          }}
        >
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            What happens next?
          </h3>
          {[
            'We review your message within 4–8 hours',
            'Our team prepares a tailored response',
            'We schedule a free discovery call',
            'Your project journey begins!',
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
              <div style={{
                width: '22px', height: '22px', borderRadius: '50%',
                background: 'var(--color-orange)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.7rem', fontWeight: 700, flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, fontFamily: 'var(--font-body)' }}>{step}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <GhostBtn to="/">
            <ArrowLeft size={15} />
            Back to Home
          </GhostBtn>
          <PrimaryBtn to="/services">
            View Our Services
            <ArrowRight size={15} />
          </PrimaryBtn>
        </div>
      </motion.div>
    </motion.div>
  );
}
