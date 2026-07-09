import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import LogoFull from '../../assets/logo/LogoFull';

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.635L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
];

const SOCIAL_LINKS = [
  { icon: <LinkedinIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter / X' },
  { icon: <InstagramIcon />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <GithubIcon />, href: 'https://github.com', label: 'GitHub' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255, 90, 0, 0.12)', background: '#14090A' }}>
      {/* Footer Main */}
      <div style={{ padding: '5rem 0 4rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '3rem',
            }}
          >
            {/* Col 1: Logo & Mission Statement */}
            <div>
              <div style={{ marginBottom: '1.25rem' }}>
                <LogoFull height={40} showTagline={false} />
              </div>
              <p style={{ color: 'rgba(255, 248, 241, 0.65)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.5rem', fontFamily: 'var(--font-body)' }}>
                We engineer integrated digital solutions that streamline operation processes. Custom POS, website, and database systems working as one system.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {SOCIAL_LINKS.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255, 248, 241, 0.03)',
                      border: '1px solid rgba(255, 248, 241, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFF8F1',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--color-orange)';
                      e.currentTarget.style.borderColor = 'var(--color-orange)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255, 248, 241, 0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255, 248, 241, 0.08)';
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: '#FFF8F1', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Navigation
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
                {QUICK_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      style={{
                        color: 'rgba(255, 248, 241, 0.65)',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.2s',
                        fontFamily: 'var(--font-body)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--color-orange)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'rgba(255, 248, 241, 0.65)';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <ArrowRight size={12} color="var(--color-orange)" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Direct Contact channels */}
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: '#FFF8F1', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Office Studio
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <a
                  href="mailto:thecomputingeffect@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255, 248, 241, 0.65)',
                    fontSize: '0.85rem',
                    transition: 'color 0.2s',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 248, 241, 0.65)'}
                >
                  <Mail size={14} color="var(--color-orange)" />
                  thecomputingeffect@gmail.com
                </a>
                <a
                  href="https://wa.me/919003888478"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255, 248, 241, 0.65)',
                    fontSize: '0.85rem',
                    transition: 'color 0.2s',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 248, 241, 0.65)'}
                >
                  <Phone size={14} color="var(--color-orange)" />
                  +91 9003 888 478
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(255, 248, 241, 0.65)', fontSize: '0.85rem', fontFamily: 'var(--font-body)' }}>
                  <MapPin size={14} color="var(--color-orange)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>56, Marudhakutty Nagar, 1st Cross, Rathinapuri, Coimbatore - 641027</span>
                </div>
              </div>
            </div>

            {/* Col 4: Newsletter capture */}
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: '#FFF8F1', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Stay Informed
              </h4>
              <p style={{ color: 'rgba(255, 248, 241, 0.55)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
                Subscribe to receive operational tips on databases, POS checkouts, and automations.
              </p>
              {subscribed ? (
                <div style={{ color: 'var(--color-orange)', fontSize: '0.85rem', fontWeight: 600 }}>
                  ✓ Subscription confirmed.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    style={{
                      flex: 1,
                      background: 'rgba(255,248,241,0.03)',
                      border: '1px solid rgba(255,248,241,0.1)',
                      borderRadius: '8px',
                      padding: '0.5rem 0.75rem',
                      color: '#FFF8F1',
                      fontSize: '0.8rem',
                      outline: 'none',
                      fontFamily: "var(--font-body)",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: 'var(--color-orange)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.5rem 1rem',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: "var(--font-body)",
                      transition: 'background 0.2s',
                    }}
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div
        style={{
          background: '#0c0506',
          padding: '1.5rem 0',
          borderTop: '1px solid rgba(255,90,0,0.05)',
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', mdDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255, 248, 241, 0.4)' }}>
            © {new Date().getFullYear()} The Computing Effect. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem' }}>
            <Link to="/privacy-policy" style={{ color: 'rgba(255, 248, 241, 0.5)', textDecoration: 'none' }} className="hover:text-[var(--color-orange)]">Privacy Policy</Link>
            <span style={{ color: 'rgba(255, 248, 241, 0.2)' }}>|</span>
            <Link to="/terms" style={{ color: 'rgba(255, 248, 241, 0.5)', textDecoration: 'none' }} className="hover:text-[var(--color-orange)]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
