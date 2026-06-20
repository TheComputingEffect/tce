import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, Moon, Menu, X, 
  Home, Users, Layers, LayoutGrid, Mail 
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import LogoFull from '../../assets/logo/LogoFull';
import { PrimaryBtn } from '../ui/Button';

const NAV_LINKS = [
  { label: 'Home', to: '/', icon: <Home size={18} /> },
  { label: 'About', to: '/about', icon: <Users size={18} /> },
  { label: 'Services', to: '/services', icon: <Layers size={18} /> },
  { label: 'Portfolio', to: '/portfolio', icon: <LayoutGrid size={18} /> },
  { label: 'Contact', to: '/contact', icon: <Mail size={18} /> },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
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
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navbarBg = scrolled
    ? isDark
      ? 'rgba(30,21,15,0.92)'
      : 'rgba(250,246,240,0.88)'
    : 'transparent';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: navbarBg,
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? 'var(--border-subtle)' : '1px solid transparent',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 24px rgba(74,55,40,0.08)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo Column */}
          <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center' }}>
            <Link to="/" aria-label="The Computing Effect — Home">
              <LogoFull height={38} />
            </Link>
          </div>

          {/* Desktop Nav Column (Centered) - hidden on mobile (no flex styled inline) */}
          <nav 
            className="hidden md:flex items-center gap-6" 
            style={{ 
              flex: '1 1 auto', 
              justifyContent: 'center' 
            }}
          >
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.9rem',
                  color: isActive ? '#BC6C25' : 'var(--text-primary)',
                  padding: '0.35rem 0.5rem',
                  position: 'relative',
                  transition: 'all 0.25s ease',
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
                          background: '#BC6C25',
                          borderRadius: '2px',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Column (CTA + Toggle) */}
          <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.75rem' }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1.5px solid var(--border-color)',
                background: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* CTA — hidden on small mobile */}
            <div className="hidden sm:block">
              <PrimaryBtn to="/contact" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                Get a Consultation
              </PrimaryBtn>
            </div>

            {/* Hamburger - displays flex on mobile only, hides on desktop */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                border: '1.5px solid var(--border-color)',
                background: 'var(--bg-card)',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Off-Canvas Side Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark Semi-Transparent Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(30, 21, 15, 0.4)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                zIndex: 998,
              }}
            />

            {/* Premium Off-Canvas Side Drawer */}
            <motion.div
              ref={menuRef}
              className="mobile-nav-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '80%',
                maxWidth: '350px',
                height: '100vh',
                background: 'var(--bg-card)',
                borderLeft: 'var(--border-subtle)',
                boxShadow: '-8px 0 32px rgba(74, 55, 40, 0.12)',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem 1.5rem 2.5rem 1.5rem',
              }}
            >
              {/* Top Section: Logo & Close Button */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
                <LogoFull height={32} />
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    border: '1.5px solid var(--border-color)',
                    background: 'var(--bg-page)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--text-primary)',
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Middle Section: Navigation links with icons */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                {NAV_LINKS.map(({ label, to, icon }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      style={({ isActive }) => ({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: isActive ? 600 : 500,
                        fontSize: '1.05rem',
                        color: isActive ? '#BC6C25' : 'var(--text-primary)',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        background: isActive ? 'rgba(188,108,37,0.08)' : 'transparent',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      })}
                      className="mobile-nav-link"
                    >
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {icon}
                      </span>
                      <span>{label}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Section: Primary CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                style={{ marginTop: 'auto' }}
              >
                <PrimaryBtn to="/contact" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem' }}>
                  Get a Consultation
                </PrimaryBtn>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
