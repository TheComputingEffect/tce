import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bell, ArrowLeft } from 'lucide-react';
import { fadeUp, scaleIn, viewport, pageVariants } from '../utils/variants';
import { PrimaryBtn, GhostBtn } from '../components/ui/Button';

export default function Portfolio() {
  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setNotified(true); setEmail(''); }
  };

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
      {/* Animated logo */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ marginBottom: '2rem' }}
      >
        <svg width="96" height="96" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 4L72 22V58L40 76L8 58V22L40 4Z" fill="rgba(188,108,37,0.15)" stroke="#BC6C25" strokeWidth="1.5"/>
          <path d="M40 12L64 26V54L40 68L16 54V26L40 12Z" fill="none" stroke="#BC6C25" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M36 28C29.373 28 24 33.373 24 40C24 46.627 29.373 52 36 52C39.314 52 42.314 50.686 44.485 48.515" stroke="#BC6C25" strokeWidth="4" strokeLinecap="round" fill="none"/>
          <path d="M48 28H56M48 28V52M48 52H56M48 40H54" stroke="#BC6C25" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '1rem',
          }}
        >
          Our Work Speaks for Itself
        </h1>
        <p
          style={{
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            margin: '0 auto 2rem',
            lineHeight: 1.8,
          }}
        >
          We're curating our finest projects for this space. Come back soon — great things take time.
        </p>

        {/* Decorative progress bar */}
        <div style={{ maxWidth: '300px', margin: '0 auto 2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            <span>Building portfolio...</span>
            <span>65%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem' }}>
            {['Design', 'Development', 'Review', 'Launch'].map((step, i) => (
              <div key={step} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: i < 2 ? '#BC6C25' : 'rgba(188,108,37,0.3)',
                  margin: '0 auto 4px',
                }} />
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Email capture */}
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.875rem' }}>
            Be the first to know when we launch:
          </p>
          {notified ? (
            <div style={{ color: '#BC6C25', fontWeight: 600 }}>
              ✓ We'll notify you at launch!
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="form-input"
                style={{ maxWidth: '260px' }}
              />
              <PrimaryBtn type="submit">
                <Bell size={15} />
                Notify Me
              </PrimaryBtn>
            </form>
          )}
        </div>

        <GhostBtn to="/">
          <ArrowLeft size={15} />
          Back to Home
        </GhostBtn>
      </motion.div>
    </motion.div>
  );
}
