import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  MapPin, Mail, Phone, Send, ChevronDown, ChevronRight, MessageCircle
} from 'lucide-react';
import { fadeUp, scaleIn, staggerContainer, slideInLeft, slideInRight, viewport, pageVariants } from '../utils/variants';
import SectionHeading from '../components/ui/SectionHeading';
import { PrimaryBtn } from '../components/ui/Button';

// ── FAQ Data ──────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'How quickly do you respond?', a: 'We respond to all inquiries within 4–8 business hours. For urgent matters, WhatsApp is the fastest way to reach us.' },
  { q: 'What information should I prepare before reaching out?', a: 'A brief description of your project, your budget range, and your ideal timeline. The more context you share, the more helpful our initial response will be.' },
  { q: 'Do you offer free consultations?', a: 'Yes! We offer a complimentary 30-minute discovery call to understand your project and explore how we can help — no strings attached.' },
  { q: 'What is your onboarding process?', a: 'Once we agree to work together, we share a project brief, sign an agreement, and kick off with a detailed planning session within 2 business days.' },
  { q: 'Can we communicate in languages other than English?', a: 'Yes, our team is fluent in English and Hindi. We can accommodate other languages with advance notice.' },
];

function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {items.map(({ q, a }, i) => (
        <div key={i} className="accordion-item">
          <button
            className={`accordion-trigger ${open === i ? 'active' : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {q}
            <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={18} color={open === i ? '#BC6C25' : 'var(--text-muted)'} />
            </motion.div>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden' }}
              >
                <div className="accordion-content">{a}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

const SERVICES_OPTIONS = [
  'Website Development (50 Cube)', 'Billing Systems', 'E-Commerce Applications',
  'AI Automations', 'Custom Software', 'Digital Marketing', 'Other',
];

const BUDGET_OPTIONS = [
  'Under ₹10,000', '₹10,000 – ₹25,000', '₹25,000 – ₹50,000', '₹50,000+', 'Not sure yet',
];

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Please describe your project';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate network request
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    navigate('/thank-you');
  };

  const inputStyle = (field) => ({
    width: '100%',
    background: 'var(--input-bg)',
    border: `1px solid ${errors[field] ? '#EF4444' : 'var(--input-border)'}`,
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9375rem',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  });

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      {/* Hero */}
      <section style={{
        minHeight: '40vh', display: 'flex', alignItems: 'flex-end',
        paddingTop: '80px',
        background: 'linear-gradient(to bottom, var(--hero-bg-start, #EAD7BB), transparent)',
      }}>
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: '#BC6C25' }}>Home</Link>
            <ChevronRight size={13} />
            <span>Contact</span>
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.875rem' }}>
            Let's Start a Conversation
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: '520px', lineHeight: 1.75 }}>
            Whether you have a project in mind, a question, or just want to say hello — we're here and excited to connect.
          </motion.p>
        </div>
      </section>

      {/* Info Cards */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}
          >
            {[
              { icon: <MapPin size={24} />, label: 'Our Location', value: '56, Marudhakutty Nagar, 1st Cross, Rathinapuri, Coimbatore – 641027' },
              { icon: <Mail size={24} />, label: 'Email Us', value: 'thecomputingeffect@gmail.com', href: 'mailto:thecomputingeffect@gmail.com' },
              { icon: <Phone size={24} />, label: 'Call / WhatsApp', value: '+91 9003 888 478', href: 'https://wa.me/919003888478?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services' },
            ].map(({ icon, label, value, href }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="glass"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{ borderRadius: '20px', padding: '2rem', textAlign: 'center', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-card)' }}
              >
                <div style={{ color: '#BC6C25', display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>{icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>{label}</div>
                {href ? (
                  <a href={href} style={{ fontSize: '0.875rem', color: '#BC6C25', wordBreak: 'break-word' }}>{value}</a>
                ) : (
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Map area */}
      <section style={{ paddingBottom: '0' }}>
        <div className="container" style={{ paddingBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Form */}
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <SectionHeading eyebrow="Contact Form" title="Send Us a Message" />
              <form onSubmit={handleSubmit} style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }} noValidate>
                {/* Name */}
                <div>
                  <label className="form-label" htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your full name"
                    style={inputStyle('name')}
                    onFocus={e => { e.target.style.borderColor = '#BC6C25'; e.target.style.boxShadow = 'var(--input-focus-shadow)'; }}
                    onBlur={e => { e.target.style.borderColor = errors.name ? '#EF4444' : 'var(--input-border)'; e.target.style.boxShadow = 'none'; }}
                  />
                  {errors.name && <p style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.25rem' }}>{errors.name}</p>}
                </div>

                {/* Email + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label className="form-label" htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@example.com"
                      style={inputStyle('email')}
                      onFocus={e => { e.target.style.borderColor = '#BC6C25'; e.target.style.boxShadow = 'var(--input-focus-shadow)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.email ? '#EF4444' : 'var(--input-border)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.email && <p style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.25rem' }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-phone">Phone (optional)</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+91 XXXXX XXXXX"
                      style={inputStyle('phone')}
                      onFocus={e => { e.target.style.borderColor = '#BC6C25'; e.target.style.boxShadow = 'var(--input-focus-shadow)'; }}
                      onBlur={e => { e.target.style.borderColor = 'var(--input-border)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                </div>

                {/* Service + Budget */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label className="form-label" htmlFor="contact-service">Service Interested In</label>
                    <select
                      id="contact-service"
                      value={form.service}
                      onChange={update('service')}
                      style={{ ...inputStyle('service'), cursor: 'pointer' }}
                    >
                      <option value="">Select a service</option>
                      {SERVICES_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-budget">Project Budget Range</label>
                    <select
                      id="contact-budget"
                      value={form.budget}
                      onChange={update('budget')}
                      style={{ ...inputStyle('budget'), cursor: 'pointer' }}
                    >
                      <option value="">Select budget</option>
                      {BUDGET_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label" htmlFor="contact-message">Project Description *</label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={update('message')}
                    rows={5}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    style={{ ...inputStyle('message'), resize: 'vertical', fontFamily: "'Inter', sans-serif" }}
                    onFocus={e => { e.target.style.borderColor = '#BC6C25'; e.target.style.boxShadow = 'var(--input-focus-shadow)'; }}
                    onBlur={e => { e.target.style.borderColor = errors.message ? '#EF4444' : 'var(--input-border)'; e.target.style.boxShadow = 'none'; }}
                  />
                  {errors.message && <p style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.25rem' }}>{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    background: '#BC6C25',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.875rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: "'Inter', sans-serif",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    opacity: loading ? 0.8 : 1,
                    boxShadow: '0 4px 16px rgba(188,108,37,0.25)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {loading ? (
                    <>
                      <div style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin-slow 0.8s linear infinite' }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info sidebar */}
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewport} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Why reach out */}
              <div style={{ background: 'var(--bg-card)', border: 'var(--border-subtle)', borderRadius: '20px', padding: '2rem', boxShadow: 'var(--shadow-card)' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                  Why Reach Out?
                </h3>
                {[
                  '30-minute free discovery call',
                  'Response within 4–8 business hours',
                  'No obligation — just a conversation',
                  'Detailed proposal at no cost',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', marginBottom: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#BC6C25', marginTop: '6px', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>

              {/* WhatsApp shortcut */}
              <a
                href="https://wa.me/919003888478?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: '#25D366',
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(37,211,102,0.25)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <MessageCircle size={28} color="#fff" />
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', fontFamily: "'Inter', sans-serif" }}>Chat on WhatsApp</div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem' }}>Fastest way to reach us</div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Google Map — Coimbatore, Rathinapuri */}
        <div style={{ position: 'relative', height: '320px', background: 'rgba(74,55,40,0.06)', border: 'var(--border-subtle)', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3!2d76.96!3d11.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858d7f0000001%3A0x1!2sRathinapuri%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.05)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Computing Effect — Coimbatore"
          />
          {/* Overlay badge */}
          <div style={{
            position: 'absolute', top: '1.5rem', left: '1.5rem',
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            padding: '0.875rem 1.25rem',
            border: 'var(--border-subtle)',
            boxShadow: 'var(--shadow-card)',
          }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#4A3728', fontSize: '0.95rem' }}>The Computing Effect</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(74,55,40,0.65)', marginTop: '0.2rem' }}>Rathinapuri, Coimbatore</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py" style={{ background: 'var(--bg-card-alt)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <SectionHeading eyebrow="FAQ" title="Before You Reach Out" subtitle="Quick answers to common questions." />
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewport}>
              <Accordion items={FAQS} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="dark-section">
        <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#EAD7BB', marginBottom: '0.75rem' }}>
              Prefer to Talk Directly?
            </h2>
            <p style={{ color: '#D4A373', marginBottom: '2rem' }}>Message us on WhatsApp — we're available and responsive.</p>
            <a
              href="https://wa.me/919003888478?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                background: '#25D366', color: '#fff',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700, fontSize: '1rem',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
              }}
            >
              <MessageCircle size={20} />
              Message Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
