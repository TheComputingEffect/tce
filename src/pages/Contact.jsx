import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  MapPin, Mail, Phone, Send, MessageCircle
} from 'lucide-react';
import { fadeUp, viewport, pageVariants } from '../utils/variants';

const SERVICES_OPTIONS = [
  'Website Development', 'Billing Systems', 'E-Commerce Applications',
  'AI Automations & Integrations', 'Custom Software', 'Digital Transformation', 'Other',
];

const BUDGET_OPTIONS = [
  'Under ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000+', 'Not sure yet',
];

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Required';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    navigate('/thank-you');
  };

  const inputStyle = (field) => ({
    width: '100%',
    background: 'var(--input-bg)',
    border: `1px solid ${errors[field] ? '#EF4444' : 'var(--input-border)'}`,
    borderRadius: '8px',
    padding: '0.6rem 0.8rem',
    fontFamily: "var(--font-body)",
    fontSize: '0.85rem',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  });

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        minHeight: 'calc(100vh - 80px)', // navbar offset
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '2.5rem',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
      className="contact-page-wrapper"
    >
      <style>{`
        @media (max-width: 991px) {
          .contact-page-wrapper {
            min-height: auto !important;
            overflow: visible !important;
            padding-top: 100px !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .info-cards-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .info-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%', justifyContent: 'center' }}>
        
        {/* Compact Title */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>
            Let's Start a Conversation
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.4, margin: 0 }}>
            Speak directly with our engineering team to scope your system requirements.
          </p>
        </div>

        {/* 2-Column Balanced Layout */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: 4 Cards (arranged in a 2x2 grid) */}
          <div
            className="info-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: '1rem',
            }}
          >
            {/* Card 1: Direct Call */}
            <div
              className="glass"
              style={{
                borderRadius: '16px',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ color: 'var(--color-orange)', marginBottom: '0.75rem' }}><Phone size={24} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>Call Us</h3>
              <a href="tel:+919003888478" style={{ fontSize: '0.825rem', color: 'var(--color-orange)', fontWeight: 600, textDecoration: 'none' }}>
                +91 9003 888 478
              </a>
            </div>

            {/* Card 2: WhatsApp */}
            <a
              href="https://wa.me/919003888478?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="glass"
              style={{
                borderRadius: '16px',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-card)',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ color: '#22C55E', marginBottom: '0.75rem' }}><MessageCircle size={24} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>WhatsApp</h3>
              <span style={{ fontSize: '0.825rem', color: 'var(--color-orange)', fontWeight: 600 }}>
                Chat Live Now
              </span>
            </a>

            {/* Card 3: Email */}
            <div
              className="glass"
              style={{
                borderRadius: '16px',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ color: 'var(--color-gold)', marginBottom: '0.75rem' }}><Mail size={24} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>Email Us</h3>
              <a href="mailto:thecomputingeffect@gmail.com" style={{ fontSize: '0.825rem', color: 'var(--color-orange)', fontWeight: 600, textDecoration: 'none', wordBreak: 'break-all' }}>
                thecomputingeffect@gmail.com
              </a>
            </div>

            {/* Card 4: Location */}
            <div
              className="glass"
              style={{
                borderRadius: '16px',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ color: 'var(--color-orange)', marginBottom: '0.75rem' }}><MapPin size={24} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>Our Location</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0 }}>
                Rathinapuri, Coimbatore – 641027
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div
            className="glass"
            style={{
              borderRadius: '20px',
              padding: '1.75rem',
              border: '1px solid var(--glass-border)',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }} noValidate>
              
              {/* Name */}
              <div>
                <label className="form-label" htmlFor="contact-name" style={{ fontSize: '0.75rem', marginBottom: '0.25rem', display: 'block' }}>Full Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  style={inputStyle('name')}
                  onFocus={e => { e.target.style.borderColor = 'var(--color-orange)'; e.target.style.boxShadow = 'var(--input-focus-shadow)'; }}
                  onBlur={e => { e.target.style.borderColor = errors.name ? '#EF4444' : 'var(--input-border)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Email + Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label className="form-label" htmlFor="contact-email" style={{ fontSize: '0.75rem', marginBottom: '0.25rem', display: 'block' }}>Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@email.com"
                    style={inputStyle('email')}
                    onFocus={e => { e.target.style.borderColor = 'var(--color-orange)'; e.target.style.boxShadow = 'var(--input-focus-shadow)'; }}
                    onBlur={e => { e.target.style.borderColor = errors.email ? '#EF4444' : 'var(--input-border)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="contact-phone" style={{ fontSize: '0.75rem', marginBottom: '0.25rem', display: 'block' }}>Phone (optional)</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+91 XXXXX"
                    style={inputStyle('phone')}
                    onFocus={e => { e.target.style.borderColor = 'var(--color-orange)'; e.target.style.boxShadow = 'var(--input-focus-shadow)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--input-border)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>

              {/* Service + Budget */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label className="form-label" htmlFor="contact-service" style={{ fontSize: '0.75rem', marginBottom: '0.25rem', display: 'block' }}>Interested In</label>
                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={update('service')}
                    style={{ ...inputStyle('service'), cursor: 'pointer' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--color-orange)'; e.target.style.boxShadow = 'var(--input-focus-shadow)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--input-border)'; e.target.style.boxShadow = 'none'; }}
                  >
                    <option value="">Select a service</option>
                    {SERVICES_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label" htmlFor="contact-budget" style={{ fontSize: '0.75rem', marginBottom: '0.25rem', display: 'block' }}>Budget Range</label>
                  <select
                    id="contact-budget"
                    value={form.budget}
                    onChange={update('budget')}
                    style={{ ...inputStyle('budget'), cursor: 'pointer' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--color-orange)'; e.target.style.boxShadow = 'var(--input-focus-shadow)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--input-border)'; e.target.style.boxShadow = 'none'; }}
                  >
                    <option value="">Select budget</option>
                    {BUDGET_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="form-label" htmlFor="contact-message" style={{ fontSize: '0.75rem', marginBottom: '0.25rem', display: 'block' }}>Project Description *</label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={update('message')}
                  rows={3}
                  placeholder="Describe your goals..."
                  style={{ ...inputStyle('message'), resize: 'vertical' }}
                  onFocus={e => { e.target.style.borderColor = 'var(--color-orange)'; e.target.style.boxShadow = 'var(--input-focus-shadow)'; }}
                  onBlur={e => { e.target.style.borderColor = errors.message ? '#EF4444' : 'var(--input-border)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  background: 'var(--color-orange)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontFamily: "var(--font-body)",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  opacity: loading ? 0.8 : 1,
                  boxShadow: 'var(--shadow-btn)',
                  transition: 'all 0.2s ease',
                  marginTop: '0.25rem',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-orange-dark)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-orange)'}
              >
                {loading ? (
                  <>
                    <div style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin-slow 0.8s linear infinite' }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
