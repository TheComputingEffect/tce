import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { pageVariants } from '../utils/variants';
import { PrimaryBtn } from '../components/ui/Button';

export default function NotFound() {
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
      {/* Large 404 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 'clamp(6rem, 15vw, 10rem)',
            fontWeight: 800,
            color: 'var(--color-orange)',
            lineHeight: 1,
            marginBottom: '0',
            opacity: 0.95,
            letterSpacing: '-0.03em',
          }}
        >
          404
        </div>
      </motion.div>

      {/* Broken circuit SVG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ marginBottom: '1.5rem' }}
      >
        <svg viewBox="0 0 280 60" width="280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 30 L80 30" stroke="#FF5A00" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
          <circle cx="80" cy="30" r="5" fill="rgba(255,90,0,0.2)" stroke="#FF5A00" strokeWidth="1.5" strokeOpacity="0.5"/>
          <path d="M80 30 L100 10 L120 50 L140 10 L160 50 L168 30" stroke="#FF5A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeDasharray="4 4"/>
          <circle cx="168" cy="30" r="5" fill="rgba(255,90,0,0.2)" stroke="#FF5A00" strokeWidth="1.5" strokeOpacity="0.5"/>
          <path d="M168 30 L200 30" stroke="#FF5A00" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3" strokeDasharray="4 4"/>
          <circle cx="200" cy="30" r="3" fill="#FF5A00" opacity="0.3"/>
          {/* Broken section */}
          <path d="M210 20 L220 40" stroke="#FF5A00" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
          <path d="M230 20 L240 40" stroke="#FF5A00" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4"/>
          <path d="M250 30 L260 30" stroke="#FF5A00" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3"/>
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            color: 'var(--text-primary)',
            marginBottom: '0.875rem',
            fontWeight: 700,
          }}
        >
          Page Not Found
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            maxWidth: '400px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
          }}
        >
          The page you're looking for seems to have wandered off. Let's get you back on track.
        </p>
        <PrimaryBtn to="/">
          <Home size={16} />
          Take Me Home
        </PrimaryBtn>
      </motion.div>
    </motion.div>
  );
}
