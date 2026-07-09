import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Users, Layers, LayoutGrid, Mail, ArrowUpRight } from 'lucide-react';
import LogoIcon from '../../assets/logo/LogoIcon';

const NAV_LINKS = [
  { label: 'Home', to: '/', icon: <Home size={16} /> },
  { label: 'About', to: '/about', icon: <Users size={16} /> },
  { label: 'Services', to: '/services', icon: <Layers size={16} /> },
  { label: 'Portfolio', to: '/portfolio', icon: <LayoutGrid size={16} /> },
  { label: 'Contact', to: '/contact', icon: <Mail size={16} /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: scrolled ? '1rem' : '0',
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 1rem',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: scrolled ? '1000px' : 'var(--container-max)',
            background: scrolled ? 'rgba(26, 13, 14, 0.75)' : 'transparent',
            border: scrolled ? '1px solid rgba(255, 90, 0, 0.15)' : '1px solid transparent',
            borderRadius: scrolled ? '100px' : '0',
            padding: scrolled ? '0.5rem 2rem' : '1rem 1.5rem',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
            boxShadow: scrolled ? '0 12px 40px rgba(20,9,10,0.3)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Logo Column */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" aria-label="The Computing Effect — Home" className="flex items-center">
              <LogoIcon size={36} className="hover:scale-105 transition-transform duration-200" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav
            className="hidden md:flex items-center gap-6"
            style={{
              justifyContent: 'center',
            }}
          >
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  fontFamily: "var(--font-body)",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.85rem',
                  color: isActive ? 'var(--color-orange)' : 'rgba(255, 248, 241, 0.75)',
                  padding: '0.4rem 0.75rem',
                  position: 'relative',
                  transition: 'color 0.25s ease',
                  textDecoration: 'none',
                })}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLine"
                        style={{
                          position: 'absolute',
                          bottom: '-4px',
                          left: '8px',
                          right: '8px',
                          height: '2px',
                          background: 'var(--color-orange)',
                          borderRadius: '2px',
                          boxShadow: '0 0 10px rgba(255, 90, 0, 0.5)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="hidden sm:block">
              <Link
                to="/contact"
                style={{
                  background: 'rgba(255, 90, 0, 0.08)',
                  border: '1px solid rgba(255, 90, 0, 0.2)',
                  color: '#fff',
                  borderRadius: '100px',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-orange)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 90, 0, 0.08)'; }}
              >
                Get Started <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Mobile hamburger menu */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 248, 241, 0.15)',
                background: 'rgba(255, 248, 241, 0.03)',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#FFF8F1',
              }}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Off-Canvas Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(20, 9, 10, 0.6)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 998,
              }}
            />

            {/* Drawer */}
            <motion.div
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '80%',
                maxWidth: '320px',
                height: '100vh',
                background: '#1A0D0E',
                borderLeft: '1px solid rgba(255, 90, 0, 0.12)',
                boxShadow: '-10px 0 40px rgba(20,9,10,0.4)',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem 1.5rem',
              }}
            >
              {/* Drawer header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
                <LogoIcon size={32} />
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 248, 241, 0.15)',
                    background: 'rgba(255, 248, 241, 0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#FFF8F1',
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Navigation list */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                {NAV_LINKS.map(({ label, to, icon }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      style={({ isActive }) => ({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontFamily: 'var(--font-body)',
                        fontWeight: isActive ? 700 : 500,
                        fontSize: '1rem',
                        color: isActive ? 'var(--color-orange)' : 'rgba(255,248,241,0.7)',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        background: isActive ? 'rgba(255, 90, 0, 0.08)' : 'transparent',
                        border: isActive ? '1px solid rgba(255, 90, 0, 0.15)' : '1px solid transparent',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease',
                      })}
                      className="mobile-nav-link"
                    >
                      <span style={{ color: 'var(--color-orange)' }}>{icon}</span>
                      <span>{label}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* CTA Drawer button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: 'auto' }}
              >
                <Link
                  to="/contact"
                  style={{
                    background: 'var(--color-orange)',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    padding: '0.875rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    display: 'block',
                    textAlign: 'center',
                    boxShadow: '0 8px 24px rgba(255, 90, 0, 0.2)',
                  }}
                >
                  Request Consultation
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
