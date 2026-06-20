import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

// Inline SVG social icons (Lucide v1 doesn't include platform icons)
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
import LogoFull from '../../assets/logo/LogoFull';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
];

const SOCIAL_LINKS = [
  { icon: <LinkedinIcon />, href: '#', label: 'LinkedIn' },
  { icon: <TwitterIcon />, href: '#', label: 'Twitter / X' },
  { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
  { icon: <GithubIcon />, href: '#', label: 'GitHub' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer style={{ position: 'relative', zIndex: 1 }}>
      {/* Main footer */}
      <div
        style={{
          background: '#4A3728',
          borderTop: '1px solid rgba(212,163,115,0.2)',
        }}
      >
        <div className="container" style={{ padding: '4rem 1.5rem 3rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '3rem',
            }}
          >
            {/* Column 1: Logo + Tagline + Socials */}
            <div>
              <div style={{ marginBottom: '1rem' }}>
                {/* Override logo colors for dark footer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg width="40" height="40" viewBox="0 0 80 80" fill="none">
                    <path d="M40 4L72 22V58L40 76L8 58V22L40 4Z" fill="#BC6C25" stroke="#D4A373" strokeWidth="1.5"/>
                    <path d="M40 12L64 26V54L40 68L16 54V26L40 12Z" fill="none" stroke="#EAD7BB" strokeWidth="1" strokeOpacity="0.3"/>
                    <path d="M36 28C29.373 28 24 33.373 24 40C24 46.627 29.373 52 36 52C39.314 52 42.314 50.686 44.485 48.515" stroke="#EAD7BB" strokeWidth="4" strokeLinecap="round" fill="none"/>
                    <path d="M48 28H56M48 28V52M48 52H56M48 40H54" stroke="#EAD7BB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.1rem', color: '#EAD7BB', lineHeight: 1.1 }}>The Computing</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '0.85rem', color: '#BC6C25', letterSpacing: '0.1em' }}>EFFECT</div>
                  </div>
                </div>
              </div>
              <p style={{ color: 'rgba(234,215,187,0.70)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem', marginTop: '1rem' }}>
                Growing Together, Rising Together, Succeeding Together.
              </p>
              <p style={{ color: 'rgba(234,215,187,0.55)', fontSize: '0.825rem', marginBottom: '1.25rem' }}>
                We build technology. We build people.
              </p>
              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '0.625rem' }}>
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
                      borderRadius: '8px',
                      background: 'rgba(234,215,187,0.08)',
                      border: '1px solid rgba(234,215,187,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#EAD7BB',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#BC6C25'; e.currentTarget.style.borderColor = '#BC6C25'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(234,215,187,0.08)'; e.currentTarget.style.borderColor = 'rgba(234,215,187,0.12)'; }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#EAD7BB', fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {QUICK_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      style={{ color: 'rgba(234,215,187,0.70)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.375rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#BC6C25'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(234,215,187,0.70)'}
                    >
                      <ArrowRight size={13} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact + Newsletter */}
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#EAD7BB', fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                Get In Touch
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                <a href="mailto:thecomputingeffect@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'rgba(234,215,187,0.70)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#BC6C25'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(234,215,187,0.70)'}
                >
                  <Mail size={15} color="#BC6C25" />
                  thecomputingeffect@gmail.com
                </a>
                <a href="https://wa.me/919003888478" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'rgba(234,215,187,0.70)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#BC6C25'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(234,215,187,0.70)'}
                >
                  <Phone size={15} color="#BC6C25" />
                  +91 9003 888 478
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: 'rgba(234,215,187,0.70)', fontSize: '0.875rem' }}>
                  <MapPin size={15} color="#BC6C25" style={{ marginTop: '2px', flexShrink: 0 }} />
                  56, Marudhakutty Nagar, 1st Cross, Rathinapuri, Coimbatore – 641027
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h5 style={{ color: '#EAD7BB', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  Stay Updated
                </h5>
                {subscribed ? (
                  <div style={{ color: '#BC6C25', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>✓</span> You're in! Watch your inbox.
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
                        background: 'rgba(234,215,187,0.08)',
                        border: '1px solid rgba(234,215,187,0.15)',
                        borderRadius: '8px',
                        padding: '0.6rem 0.875rem',
                        color: '#EAD7BB',
                        fontSize: '0.875rem',
                        outline: 'none',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        background: '#BC6C25',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '0.6rem 1rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: "'Inter', sans-serif",
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          background: '#1E150F',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          textAlign: 'center',
        }}
      >
        <p style={{ color: 'rgba(234,215,187,0.45)', fontSize: '0.8125rem', margin: 0 }}>
          © {new Date().getFullYear()} The Computing Effect. All rights reserved.
        </p>
        <p style={{ color: 'rgba(234,215,187,0.35)', fontSize: '0.8125rem', margin: 0 }}>
          Built with ❤️ — Growing Together
        </p>
      </div>
    </footer>
  );
}
