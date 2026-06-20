import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, TrendingUp, Users, Lightbulb, Star, Heart,
  ChevronRight
} from 'lucide-react';

// Inline LinkedIn icon (Lucide v1 doesn't include platform icons)
const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
import { fadeUp, scaleIn, staggerContainer, slideInLeft, slideInRight, viewport, pageVariants } from '../utils/variants';
import SectionHeading from '../components/ui/SectionHeading';
import ConsultationBanner from '../components/global/ConsultationBanner';
import { GhostBtn } from '../components/ui/Button';

// ── Page Hero ────────────────────────────────────────────────────────────────
function PageHero({ breadcrumb, title, subtitle }) {
  return (
    <section
      style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: '80px',
        background: 'linear-gradient(to bottom, var(--hero-bg-start, #EAD7BB), transparent)',
      }}
    >
      <div className="container" style={{ padding: '4rem 1.5rem 3rem' }}>
        {/* Breadcrumb */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}
        >
          <Link to="/" style={{ color: '#BC6C25' }}>Home</Link>
          <ChevronRight size={13} />
          <span>{breadcrumb}</span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            maxWidth: '700px',
            marginBottom: '1rem',
          }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.0625rem', color: '#BC6C25', fontWeight: 500, fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

// ── Core Values ──────────────────────────────────────────────────────────────
const VALUES = [
  { icon: <Shield size={28} />, name: 'Trust', desc: 'We build relationships grounded in honesty, reliability, and integrity.' },
  { icon: <TrendingUp size={28} />, name: 'Growth', desc: 'We are committed to continuous learning and helping everyone grow.' },
  { icon: <Users size={28} />, name: 'Community', desc: 'We celebrate collective success and support each other unconditionally.' },
  { icon: <Lightbulb size={28} />, name: 'Innovation', desc: 'We embrace new ideas and challenge the status quo to stay ahead.' },
  { icon: <Star size={28} />, name: 'Excellence', desc: 'We hold ourselves to the highest standards in everything we deliver.' },
  { icon: <Heart size={28} />, name: 'Empathy', desc: 'We listen deeply and treat every person with care and compassion.' },
];

// ── Team Members ─────────────────────────────────────────────────────────────
const TEAM = [
  { name: 'Aryan Kapoor', role: 'Founder & Lead Developer', bio: 'Started The Computing Effect with a vision to make software affordable for every business.', initials: 'AK' },
  { name: 'Sneha Mehta', role: 'Full-Stack Developer', bio: 'Passionate about building clean, fast websites that actually help businesses grow.', initials: 'SM' },
  { name: 'Rohan Verma', role: 'UI/UX & Frontend', bio: 'Believes every business deserves a beautiful website, no matter the budget.', initials: 'RV' },
];

// ── Timeline ─────────────────────────────────────────────────────────────────
const TIMELINE = [
  { year: 'Mar 2026', title: 'Founded', desc: 'Born in Coimbatore with a simple mission — make software affordable for small businesses.' },
  { year: 'Apr 2026', title: 'First Clients', desc: 'Delivered our first websites and billing systems. Started building trust one project at a time.' },
  { year: 'May 2026', title: '50 Cube Launched', desc: 'Created our flagship 50 Cube package — 50 Questions, 50 Hours, ₹5,000. A game-changer for small businesses.' },
  { year: 'Jun 2026', title: '10+ Clients', desc: '10+ businesses now trust us. Growing steadily, serving clients across Coimbatore and beyond.' },
];

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <PageHero
        breadcrumb="About"
        title="The Story Behind The Computing Effect"
        subtitle="Built on purpose. Driven by people."
      />

      {/* ── OUR STORY ───────────────────────────── */}
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
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <SectionHeading eyebrow="Our Story" title="From a Vision to a Movement" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                  We started The Computing Effect because we saw too many small businesses getting charged too much for something they deserved — a good website and reliable software. We're here to change that.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                  We're a small team of developers based in Coimbatore, and we believe that every business — no matter how small — deserves professional software at a fair price. That's why we created the 50 Cube package: 50 questions, 50 hours, ₹5,000.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                  We're just 3 months old, but we've already served 10+ clients. We're growing fast because we do honest work at honest prices. Every client matters to us — because right now, every client is the foundation of our story.
                </p>
              </div>
            </motion.div>

            {/* Decorative timeline dots */}
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewport}>
              <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                {/* Vertical line */}
                <div style={{
                  position: 'absolute', left: '10px', top: 0, bottom: 0,
                  width: '2px',
                  background: 'linear-gradient(to bottom, #BC6C25, rgba(212,163,115,0.2))',
                  borderRadius: '2px',
                }} />
                {TIMELINE.slice(0, 3).map(({ year, title, desc }, i) => (
                  <div key={year} style={{ position: 'relative', paddingBottom: '2rem' }}>
                    <div style={{
                      position: 'absolute', left: '-2rem',
                      width: '20px', height: '20px',
                      borderRadius: '50%',
                      background: i === 0 ? '#BC6C25' : 'var(--bg-card)',
                      border: `2px solid #BC6C25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {i === 0 && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#BC6C25', letterSpacing: '0.05em' }}>{year}</span>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-primary)', marginBottom: '0.375rem' }}>{title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION ─────────────────────────────── */}
      <section style={{ background: '#4A3728', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EAD7BB' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={viewport}>
            <span className="eyebrow">Our Mission</span>
            {/* Large quote mark */}
            <div style={{ fontSize: '6rem', lineHeight: 1, color: '#BC6C25', opacity: 0.3, fontFamily: "'Playfair Display', serif", marginBottom: '-1rem' }}>"</div>
            <blockquote style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
              color: '#EAD7BB',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}>
              To make software accessible to every business, no matter how small or new. We believe that technology shouldn't be expensive or complicated — it should just work for you.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── VISION ──────────────────────────────── */}
      <section className="section-py">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Vision text */}
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <SectionHeading eyebrow="Our Vision" title="A Future Built Together" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginTop: '1.5rem' }}>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.9375rem' }}>
                  At The Computing Effect, we believe that true success is never achieved alone. Our vision is to create a community where every individual who joins us is empowered to grow, learn, and reach greater heights in their personal and professional journey.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.9375rem' }}>
                  We envision a workplace built on trust, friendship, collaboration, and mutual respect — where every team member feels valued, supported, and inspired to succeed. As a company grows, its people should grow with it.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.9375rem' }}>
                  A core part of our vision is addressing unemployment by providing opportunities for aspiring professionals, students, and individuals seeking a better future. Through mentorship, training, and real-world experience, we help people gain the skills, confidence, and stability needed to improve their lives.
                </p>
              </div>
            </motion.div>

            {/* Brand meaning cards */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { color: '#3B82F6', label: 'Trust & Knowledge', desc: 'Stability, professional growth, and the depth of expertise we bring to every engagement.' },
                { color: '#22C55E', label: 'Opportunity & Growth', desc: 'Progress, renewal, and our commitment to creating meaningful opportunities for everyone.' },
                { color: '#F8FAFC', border: '#E2E8F0', desc: 'Transparency, honesty, and our commitment to a supportive and open environment.', label: 'Clarity & Transparency' },
              ].map(({ color, label, desc, border }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    background: 'var(--bg-card)',
                    border: 'var(--border-subtle)',
                    borderRadius: '14px',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div style={{ width: '18px', height: '18px', borderRadius: '4px', background: color, border: border ? `1px solid ${border}` : 'none', flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '0.375rem' }}>{label}</div>
                    <div style={{ fontSize: '0.8375rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{desc}</div>
                  </div>
                </motion.div>
              ))}

              {/* Vision motto */}
              <motion.div
                variants={fadeUp}
                style={{
                  marginTop: '0.5rem',
                  textAlign: 'center',
                  padding: '1.75rem',
                  background: 'rgba(188,108,37,0.06)',
                  border: '1px solid rgba(188,108,37,0.15)',
                  borderRadius: '16px',
                }}
              >
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: '1.1rem',
                  color: '#BC6C25',
                  lineHeight: 1.6,
                }}>
                  "Growing Together, Rising Together, Succeeding Together."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── CORE VALUES ─────────────────────────── */}
      <section className="section-py" style={{ background: 'var(--bg-card-alt)' }}>
        <div className="container">
          <SectionHeading eyebrow="What We Stand For" title="Our Core Values" align="center" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              marginTop: '3rem',
            }}
          >
            {VALUES.map(({ icon, name, desc }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '16px',
                  borderTop: '3px solid #BC6C25',
                  padding: '1.75rem',
                  boxShadow: 'var(--shadow-card)',
                  border: 'var(--border-subtle)',
                  borderTopWidth: '3px',
                  borderTopColor: '#BC6C25',
                }}
              >
                <div style={{ color: '#BC6C25', marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── TEAM ────────────────────────────────── */}
      <section className="section-py">
        <div className="container">
          <SectionHeading
            eyebrow="The People"
            title="Meet Our Team"
            subtitle="Talented individuals united by a shared purpose."
            align="center"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              marginTop: '3rem',
            }}
          >
            {TEAM.map(({ name, role, bio, initials }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '20px',
                  padding: '2rem 1.5rem',
                  border: 'var(--border-subtle)',
                  boxShadow: 'var(--shadow-card)',
                  textAlign: 'center',
                }}
              >
                {/* Avatar */}
                <div className="avatar-circle" style={{ width: '72px', height: '72px', fontSize: '1.5rem', margin: '0 auto 1rem', borderRadius: '50%' }}>
                  {initials}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{name}</h3>
                <div style={{ fontSize: '0.8rem', color: '#BC6C25', fontWeight: 500, marginBottom: '0.75rem' }}>{role}</div>
                <p style={{ fontSize: '0.8375rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{bio}</p>
                <a
                  href="#"
                  aria-label={`${name} on LinkedIn`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '32px', height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(188,108,37,0.08)',
                    border: '1px solid rgba(188,108,37,0.15)',
                    color: '#BC6C25',
                  }}
                >
                  <LinkedinIcon size={15} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── TIMELINE ────────────────────────────── */}
      <section className="section-py" style={{ background: 'var(--bg-card-alt)' }}>
        <div className="container">
          <SectionHeading eyebrow="Our Journey" title="Timeline of Growth" align="center" />
          <div style={{ position: 'relative', marginTop: '3.5rem', maxWidth: '700px', margin: '3.5rem auto 0' }}>
            {/* Center line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0, bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, rgba(212,163,115,0.2), #D4A373, rgba(212,163,115,0.2))',
              transform: 'translateX(-50%)',
            }} />
            {TIMELINE.map(({ year, title, desc }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={year}
                  variants={isLeft ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  style={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    paddingBottom: '2.5rem',
                    position: 'relative',
                  }}
                >
                  {/* Year badge */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: '1rem',
                    background: '#BC6C25',
                    color: '#fff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.625rem',
                    borderRadius: '100px',
                    zIndex: 2,
                    whiteSpace: 'nowrap',
                  }}>
                    {year}
                  </div>
                  {/* Card */}
                  <div
                    style={{
                      width: '44%',
                      background: 'var(--bg-card)',
                      borderRadius: '14px',
                      padding: '1.25rem',
                      border: 'var(--border-subtle)',
                      boxShadow: 'var(--shadow-card)',
                      marginTop: '0.5rem',
                    }}
                  >
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.375rem' }}>{title}</h4>
                    <p style={{ fontSize: '0.8375rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <ConsultationBanner
        headline="Ready to Work With a Team That Cares?"
        subtext="Whether you're building something new or scaling what exists — we're here for you."
        primaryLabel="Start a Conversation"
      />
    </motion.div>
  );
}
