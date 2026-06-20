import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieNotice() {
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem('tce-cookies-accepted');
    } catch {
      return true;
    }
  });

  const accept = () => {
    try { localStorage.setItem('tce-cookies-accepted', '1'); } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="cookie-notice"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Cookie size={20} color="#BC6C25" style={{ flexShrink: 0 }} />
          <p style={{ color: 'var(--text-primary)', fontSize: '0.875rem', flex: 1, minWidth: 200 }}>
            We use cookies to enhance your experience and understand how you use our site.
          </p>
          <div style={{ display: 'flex', gap: '0.625rem', flexShrink: 0 }}>
            <Link
              to="/privacy-policy"
              style={{ fontSize: '0.8125rem', color: '#BC6C25', textDecoration: 'underline' }}
            >
              Learn More
            </Link>
            <button
              onClick={accept}
              style={{
                background: '#BC6C25',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '0.4rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
