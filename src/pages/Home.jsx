import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ShoppingCart, Receipt, Bot, Terminal, Megaphone,
  CheckCircle, Zap, Headphones, TrendingUp, Heart,
  Compass, Code2, Rocket, ArrowRight, ChevronRight,
  Star, Shield, Clock, MessageCircle, HelpCircle
} from 'lucide-react';
import { fadeUp, fadeIn, scaleIn, staggerContainer, slideInLeft, slideInRight, viewport } from '../utils/variants';
import SectionHeading from '../components/ui/SectionHeading';
import { PrimaryBtn, SecondaryBtn, GhostBtn } from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ConsultationBanner from '../components/global/ConsultationBanner';
import TechnologiesSection from '../components/global/TechnologiesSection';
import { pageVariants } from '../utils/variants';

// ── Hero Composition: Simple & Honest ───────────────────────────────────────
function HeroComposition() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '480px',
        height: '420px',
        margin: '0 auto',
      }}
      className="hero-composition"
    >
      {/* Ambient soft background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(188,108,37,0.12) 0%, transparent 70%)',
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      />

      {/* Card 1: 50 Cube Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ y: -8, zIndex: 5, transition: { duration: 0.2 } }}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '260px',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '1.25rem',
          boxShadow: 'var(--shadow-card)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          zIndex: 1,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#BC6C25', fontFamily: 'Inter', letterSpacing: '0.04em', textTransform: 'uppercase' }}>50 Cube Package</span>
          <span style={{ fontSize: '0.65rem', color: '#22C55E', fontWeight: 600, background: 'rgba(34,197,94,0.10)', padding: '2px 8px', borderRadius: '100px' }}>Popular</span>
        </div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>
          ₹5,000
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem', marginBottom: '0.875rem' }}>Complete website package</div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {[
            { num: '50', label: 'Questions' },
            { num: '50', label: 'Hours' },
            { num: '₹5K', label: 'Price' },
          ].map(({ num, label }) => (
            <div key={label} style={{ flex: 1, textAlign: 'center', padding: '0.5rem', background: 'rgba(188,108,37,0.08)', borderRadius: '8px' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 700, color: '#BC6C25' }}>{num}</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Card 2: Code Terminal */}
      <motion.div
        initial={{ opacity: 0, x: -30, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ y: -8, zIndex: 5, transition: { duration: 0.2 } }}
        style={{
          position: 'absolute',
          top: '70px',
          left: '0',
          width: '240px',
          background: '#1E150F',
          border: '1px solid rgba(234,215,187,0.15)',
          borderRadius: '12px',
          padding: '1rem',
          boxShadow: '0 20px 40px rgba(30,21,15,0.25)',
          zIndex: 2,
        }}
      >
        <div style={{ display: 'flex', gap: '6px', marginBottom: '0.75rem', alignItems: 'center' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#EF4444' }} />
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#F59E0B' }} />
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981' }} />
          <span style={{ fontSize: '0.6rem', color: 'rgba(234,215,187,0.4)', marginLeft: '0.5rem', fontFamily: 'Inter', fontWeight: 500 }}>your_website.js</span>
        </div>
        <div style={{ fontFamily: "Courier New, Courier, monospace", fontSize: '0.7rem', color: '#EAD7BB', lineHeight: 1.6 }}>
          <div><span style={{ color: '#D4A373' }}>const</span> website = &#123;</div>
          <div style={{ paddingLeft: '0.75rem' }}>price: <span style={{ color: '#22C55E' }}>₹5,000</span>,</div>
          <div style={{ paddingLeft: '0.75rem' }}>time: <span style={{ color: '#BC6C25' }}>"50 hours"</span>,</div>
          <div style={{ paddingLeft: '0.75rem' }}>quality: <span style={{ color: '#BC6C25' }}>"premium"</span></div>
          <div>&#125;;</div>
          <div style={{ marginTop: '0.25rem' }}><span style={{ color: '#10B981' }}>// Your business, online ✓</span></div>
        </div>
      </motion.div>

      {/* Card 3: Client Trust Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ y: -8, zIndex: 5, transition: { duration: 0.2 } }}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '15px',
          width: '250px',
          background: 'var(--bg-card)',
          border: 'var(--border-subtle)',
          borderRadius: '16px',
          padding: '1.25rem',
          boxShadow: 'var(--shadow-card)',
          zIndex: 3,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#BC6C25', fontFamily: 'Inter', letterSpacing: '0.04em', textTransform: 'uppercase' }}>✦ Client Progress</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', background: 'rgba(34,197,94,0.10)', color: '#22C55E', padding: '2px 8px', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 600 }}>
            Active
          </span>
        </div>
        
        {/* Progress items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {[
            { label: 'Bakery Website', progress: 100 },
            { label: 'Billing System', progress: 75 },
            { label: 'E-Commerce Store', progress: 40 },
          ].map(({ label, progress }) => (
            <div key={label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: 500 }}>
                <span>{label}</span>
                <span style={{ fontWeight: 600, color: progress === 100 ? '#22C55E' : '#BC6C25' }}>{progress === 100 ? '✓ Done' : `${progress}%`}</span>
              </div>
              <div style={{ height: '3px', background: 'rgba(188,108,37,0.12)', borderRadius: '100px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1.2, delay: 0.8 + Math.random() * 0.3, ease: 'easeOut' }}
                  style={{ height: '100%', background: progress === 100 ? '#22C55E' : '#BC6C25', borderRadius: '100px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ── Service Card ────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: <Globe size={22} />, name: 'Website Development', desc: 'Professional websites that help your business get found online. Starting at just ₹5,000.' },
  { icon: <Receipt size={22} />, name: 'Billing Systems', desc: 'Simple, reliable billing software so you never lose track of payments again.' },
  { icon: <ShoppingCart size={22} />, name: 'E-Commerce Apps', desc: "Sell your products online with a store that's easy to manage and easy to buy from." },
  { icon: <Bot size={22} />, name: 'AI Automations', desc: 'Save time with smart automations — from chatbots to workflow tools that work for you.' },
  { icon: <Terminal size={22} />, name: 'Custom Software', desc: 'Got a unique problem? We build custom software that fits your business perfectly.' },
  { icon: <Megaphone size={22} />, name: 'Digital Marketing', desc: 'Get more customers online with social media, ads, and marketing that actually works.' },
];

function ServiceCard({ service }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(74,55,40,0.16)', transition: { duration: 0.2 } }}
      style={{
        background: 'var(--bg-card)',
        border: 'var(--border-subtle)',
        borderRadius: '20px',
        padding: '1.75rem',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        cursor: 'default',
      }}
    >
      <div style={{
        width: '48px', height: '48px',
        background: 'rgba(188,108,37,0.10)',
        borderRadius: '12px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#BC6C25',
      }}>
        {service.icon}
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
        {service.name}
      </h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
        {service.desc}
      </p>
      <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#BC6C25', fontSize: '0.85rem', fontWeight: 500, marginTop: 'auto' }}>
        Learn more <ChevronRight size={14} />
      </Link>
    </motion.div>
  );
}

// ── Process Steps ────────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  { num: '01', icon: <MessageCircle size={20} />, title: 'Tell Us Your Problem', desc: 'We ask 50 simple questions to understand exactly what your business needs.' },
  { num: '02', icon: <Code2 size={20} />, title: 'We Build It', desc: 'Our team gets to work — your website is built in 50 hours or less.' },
  { num: '03', icon: <Rocket size={20} />, title: 'You Go Live', desc: 'Your website is launched. You pay ₹5,000. No hidden costs. Done!' },
];

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      {/* ── HERO ────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '80px',
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-12 lg:py-16">
            {/* Left Column (Content) */}
            <motion.div 
              variants={slideInLeft} 
              initial="hidden" 
              animate="visible"
              className="lg:col-span-7"
            >
              {/* Badge */}
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  background: 'rgba(188,108,37,0.08)', 
                  border: '1px solid rgba(188,108,37,0.18)', 
                  borderRadius: '100px', 
                  padding: '0.4rem 1rem', 
                  marginBottom: '1.5rem' 
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#BC6C25' }}>
                  Software for Everyone — 10+ Clients Served
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.12,
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Your Business Deserves a <span style={{ color: '#BC6C25' }}>Website</span>.<br />
                We Make It Happen — <span style={{ color: '#BC6C25' }}>₹5,000</span>.
              </h1>

              {/* Supporting Paragraph */}
              <p style={{
                fontSize: '1.08rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                maxWidth: '540px',
                marginBottom: '2.5rem',
              }}>
                We're a small, passionate team from Coimbatore building affordable websites, billing systems, and custom software for businesses just like yours. No tech jargon. No hidden costs. Just results.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <PrimaryBtn to="/contact" style={{ padding: '0.875rem 2rem', fontSize: '0.95rem' }}>
                  Get Your Website <ArrowRight size={16} />
                </PrimaryBtn>
                <SecondaryBtn to="/services" style={{ padding: '0.875rem 2rem', fontSize: '0.95rem' }}>
                  See Our Services
                </SecondaryBtn>
              </div>

              {/* Honest Statistics */}
              <div
                style={{
                  display: 'flex',
                  gap: '2.5rem',
                  flexWrap: 'wrap',
                  paddingTop: '2rem',
                  borderTop: 'var(--border-subtle)',
                }}
              >
                {[
                  { num: '10+', label: 'Happy Clients' },
                  { num: '3 Months', label: '& Counting' },
                  { num: '100%', label: 'Delivery Rate' },
                ].map(({ num, label }) => (
                  <div key={label} style={{ flex: '1 1 120px' }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#BC6C25', lineHeight: 1 }}>{num}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '0.35rem' }}>{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column (Visual Composition) */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 flex justify-center items-center"
            >
              <HeroComposition />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 50 CUBE PACKAGE ─────────────────────── */}
      <section className="section-py" style={{ background: 'var(--bg-card-alt)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Our Flagship Offer"
            title="The 50 Cube Package"
            subtitle="50 Questions + 50 Hours + ₹5,000 = Your Website"
            align="center"
            className="mb-12"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{
              maxWidth: '800px',
              margin: '3rem auto 0',
              background: 'var(--bg-card)',
              border: '2px solid rgba(188,108,37,0.20)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(74,55,40,0.12)',
            }}
          >
            {/* Top pricing strip */}
            <div style={{
              background: '#4A3728',
              padding: '2rem 2.5rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EAD7BB' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                pointerEvents: 'none',
              }} />
              <div style={{ fontSize: '0.75rem', color: '#D4A373', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Complete Website Package
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, color: '#EAD7BB', lineHeight: 1 }}>
                ₹5,000
              </div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(234,215,187,0.65)', marginTop: '0.5rem' }}>
                One-time payment. No hidden costs. No monthly fees.
              </div>
            </div>

            {/* 3 pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: 'var(--border-subtle)' }}>
              {[
                { num: '50', label: 'Questions', icon: <HelpCircle size={24} />, desc: 'We ask 50 simple questions to understand your business' },
                { num: '50', label: 'Hours', icon: <Clock size={24} />, desc: 'Your website is built and delivered in 50 hours' },
                { num: '₹5K', label: 'Price', icon: <Shield size={24} />, desc: 'Fixed price. No surprises. No negotiations.' },
              ].map(({ num, label, icon, desc }, i) => (
                <div
                  key={label}
                  style={{
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    borderRight: i < 2 ? 'var(--border-subtle)' : 'none',
                  }}
                >
                  <div style={{ color: '#BC6C25', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>{icon}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#BC6C25', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem', marginBottom: '0.5rem' }}>{label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>

            {/* What's included */}
            <div style={{ padding: '2rem 2.5rem' }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                What's Included:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
                {[
                  'Professional website design',
                  'Mobile-friendly responsive layout',
                  'Contact form & WhatsApp link',
                  'Google Maps integration',
                  'Basic SEO setup',
                  'Free domain guidance',
                  '30 days free support',
                  'Delivered in 50 hours',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={15} color="#22C55E" />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <PrimaryBtn to="/contact" style={{ padding: '0.875rem 2.5rem', fontSize: '1rem' }}>
                  Get Your Website for ₹5,000 <ArrowRight size={16} />
                </PrimaryBtn>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                  No credit card needed. Just tell us about your business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── SERVICES OVERVIEW ───────────────────── */}
      <section className="section-py">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Everything Your Business Needs to Go Digital"
            subtitle="From websites to billing systems to AI — we've got you covered."
            align="center"
            className="mb-12"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '3rem',
            }}
          >
            {SERVICES.map((svc) => (
              <ServiceCard key={svc.name} service={svc} />
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <GhostBtn to="/services">Explore All Services <ArrowRight size={15} /></GhostBtn>
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── WHY TRUST US ─────────────────────────── */}
      <section className="section-py">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left */}
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="We're New. And That's Our Superpower."
                subtitle="Here's why small businesses love working with us — even though we're just 3 months old."
              />
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '1.75rem' }}>
                {[
                  'No middlemen — you talk directly to the people building your software',
                  'Transparent pricing — what we quote is what you pay, always',
                  'We use the latest technology — not outdated tools from 10 years ago',
                  'We actually care about your business — every client matters to us',
                  '10+ businesses already trust us — join them',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={18} color="#BC6C25" style={{ flexShrink: 0, marginTop: '2px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right — feature cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
            >
              {[
                { icon: <Zap size={24} />, title: 'Fast Delivery', desc: '50 hours or less for websites.' },
                { icon: <Shield size={24} />, title: 'Fixed Pricing', desc: 'No hidden fees. Ever.' },
                { icon: <Heart size={24} />, title: 'We Actually Care', desc: 'Your success is our success.' },
                { icon: <TrendingUp size={24} />, title: 'Latest Tech', desc: 'Modern tools, modern results.' },
              ].map(({ icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="glass"
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  style={{
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  <div style={{ color: '#BC6C25', marginBottom: '0.75rem' }}>{icon}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.375rem' }}>{title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── HOW IT WORKS (50 Cube Process) ────────── */}
      <section className="section-py">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="Getting Your Website Is This Simple"
            subtitle="Three steps. Zero confusion. That's the 50 Cube way."
            align="center"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0',
              marginTop: '3.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.num}>
                <motion.div
                  variants={fadeUp}
                  style={{
                    flex: '1 1 240px',
                    maxWidth: '320px',
                    textAlign: 'center',
                    padding: '1.5rem 1rem',
                    background: i === 0 ? '#4A3728' : 'var(--bg-card)',
                    borderRadius: '16px',
                    border: 'var(--border-subtle)',
                    boxShadow: 'var(--shadow-card)',
                    minWidth: '200px',
                  }}
                >
                  <div style={{
                    width: '56px', height: '56px',
                    background: i === 0 ? 'rgba(234,215,187,0.15)' : 'rgba(188,108,37,0.10)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 0.875rem',
                    color: i === 0 ? '#EAD7BB' : '#BC6C25',
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#BC6C25', letterSpacing: '0.1em', marginBottom: '0.375rem' }}>{step.num}</div>
                  <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: i === 0 ? '#EAD7BB' : 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}>{step.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: i === 0 ? 'rgba(234,215,187,0.7)' : 'var(--text-muted)', lineHeight: 1.6 }}>{step.desc}</p>
                </motion.div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '2px',
                    background: 'linear-gradient(to right, #D4A373, rgba(212,163,115,0.3))',
                    marginTop: '3rem',
                    alignSelf: 'center',
                  }} />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── TECHNOLOGIES ─────────────────────────── */}
      <TechnologiesSection />

      <hr className="section-divider" />

      {/* ── SOCIAL PROOF (Honest) ────────────────── */}
      <section className="section-py">
        <div className="container">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Trust a 3-Month-Old Startup?"
            subtitle="Fair question. Here's our honest answer."
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '3rem',
            }}
          >
            {[
              {
                icon: <Star size={28} />,
                title: '10+ Real Clients',
                desc: "We've already helped over 10 businesses get online. We're small, but we deliver. Ask any of our clients.",
              },
              {
                icon: <Shield size={28} />,
                title: 'Fixed ₹5,000 Price',
                desc: "Our pricing is transparent and disruptive. You know exactly what you're paying before we start. No surprises.",
              },
              {
                icon: <Zap size={28} />,
                title: 'Latest Technology',
                desc: "We don't use outdated tools. We build with React, Node.js, and modern frameworks — the same tech used by top companies.",
              },
              {
                icon: <Heart size={28} />,
                title: 'We Actually Care',
                desc: "When you have 10 clients, every single one matters. We're not a big agency where you're just a ticket number.",
              },
              {
                icon: <Headphones size={28} />,
                title: '30 Days Free Support',
                desc: "After delivery, we don't disappear. You get 30 days of free support to make sure everything works perfectly.",
              },
              {
                icon: <TrendingUp size={28} />,
                title: 'Growing With You',
                desc: "We're at the start of our journey too. When you grow, we grow. That's why we're invested in your success.",
              },
            ].map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '20px',
                  padding: '2rem',
                  border: 'var(--border-subtle)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ color: '#BC6C25', marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Google Reviews CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{
              textAlign: 'center',
              marginTop: '3rem',
              padding: '2rem',
              background: 'rgba(188,108,37,0.06)',
              border: '1px solid rgba(188,108,37,0.15)',
              borderRadius: '16px',
            }}
          >
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.1rem', color: '#BC6C25', marginBottom: '0.5rem' }}>
              "Don't take our word for it — check out what our clients say"
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              We're building our reputation one happy client at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <ConsultationBanner
        headline="Ready to Get Your Business Online?"
        subtext="Tell us your problem. We'll build your solution. Starting at just ₹5,000."
        primaryLabel="Get Started Now"
      />
    </motion.div>
  );
}
