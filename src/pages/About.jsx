import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Users, Heart, Award, ArrowRight, Code, Terminal, ChevronRight } from 'lucide-react';
import { fadeUp, staggerContainer, slideInLeft, viewport, pageVariants } from '../utils/variants';
import SectionHeading from '../components/ui/SectionHeading';

// ── Page Hero ────────────────────────────────────────────────────────────────
function PageHero({ breadcrumb, title, subtitle }) {
  return (
    <section
      style={{
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: '90px',
        background: 'linear-gradient(to bottom, rgba(255, 90, 0, 0.05), transparent)',
        borderBottom: '1px solid rgba(255,248,241,0.06)'
      }}
    >
      <div className="container" style={{ padding: '4rem 1.5rem 3rem' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.8rem', color: 'rgba(255,248,241,0.45)' }}>
          <Link to="/" style={{ color: 'var(--color-orange)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <span>{breadcrumb}</span>
        </div>
        
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 800,
            color: '#FFF8F1',
            maxWidth: '740px',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.15
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{ fontSize: '1rem', color: 'rgba(255,248,241,0.6)', maxWidth: '580px', margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.6 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

// ── Developer Card with interactive json profiles ───────────────────────────
function DeveloperCard({ name, role, initials, techStack, bio }) {
  const [activeTab, setActiveTab] = useState('bio'); // bio | schema

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(255,90,0,0.08)',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        boxShadow: '0 15px 35px rgba(20,9,10,0.15)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      {/* Avatar details */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="avatar-circle" style={{ margin: 0, width: '48px', height: '48px', fontSize: '1.1rem' }}>{initials}</div>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: '1.15rem', fontWeight: 800, color: '#FFF8F1', margin: 0 }}>
            {name}
          </h3>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {role}
          </span>
        </div>
      </div>

      {/* Tabs list */}
      <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,248,241,0.08)', paddingBottom: '2px', gap: '1rem' }}>
        {['bio', 'schema'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === tab ? '#FFF8F1' : 'rgba(255,248,241,0.4)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              paddingBottom: '6px',
              borderBottom: activeTab === tab ? '2px solid var(--color-orange)' : '2px solid transparent',
              transition: 'all 0.2s',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ minHeight: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          {activeTab === 'bio' ? (
            <motion.p
              key="bio"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              style={{ fontSize: '0.85rem', color: 'rgba(255,248,241,0.7)', lineHeight: 1.6, margin: 0 }}
            >
              {bio}
            </motion.p>
          ) : (
            <motion.div
              key="schema"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              style={{
                background: '#14090A',
                border: '1px solid rgba(255,248,241,0.06)',
                borderRadius: '12px',
                padding: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.7rem',
                color: 'rgba(255,248,241,0.75)',
                lineHeight: 1.5,
              }}
            >
              <div><span style={{ color: '#FF5A00' }}>"engineer"</span>: &#123;</div>
              <div style={{ paddingLeft: '1rem' }}><span style={{ color: '#D2861A' }}>"focus"</span>: "{techStack.focus}",</div>
              <div style={{ paddingLeft: '1rem' }}><span style={{ color: '#D2861A' }}>"stack"</span>: {JSON.stringify(techStack.stack)}</div>
              <div>&#125;</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const TEAM_MEMBERS = [
  {
    name: 'Aryan Kapoor',
    role: 'Founder & Systems Architect',
    initials: 'AK',
    techStack: {
      focus: 'Distributed Database Systems',
      stack: ['PostgreSQL', 'Node.js', 'Express', 'Google Cloud SQL']
    },
    bio: 'Aryan leads core systems design. He specializes in designing offline-first POS synchronization databases, invoice generators, and operational cloud mapping.'
  },
  {
    name: 'Sneha Mehta',
    role: 'Full-Stack Developer',
    initials: 'SM',
    techStack: {
      focus: 'Client Frontends & NLP integrations',
      stack: ['React.js', 'Tailwind CSS', 'Gemini AI Pro', 'Vite']
    },
    bio: 'Sneha coordinates frontend architectures and AI prompt pipelines. She specializes in building headless web storefronts, custom checkout pipelines, and data entry automations.'
  }
];

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit" style={{ background: '#14090A' }}>
      
      {/* Page Hero */}
      <PageHero 
        breadcrumb="About" 
        title="We build technology that creates opportunities." 
        subtitle="A small team on purpose — focused on custom system designs and transparent delivery."
      />

      {/* ── ORIGIN STORY ────────────────────────── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            {/* Story details */}
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <SectionHeading
                eyebrow="Our Story"
                title="Direct Communication. Superior Output."
                subtitle="Based in Coimbatore, we started with a mission: replace legacy spreadsheet bottlenecks with unified web platforms."
              />
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem', fontSize: '0.925rem', color: 'rgba(255,248,241,0.7)', lineHeight: 1.7 }}>
                <p>
                  Most software agencies hand client requirements down to account managers, translators, and junior developers. The client ends up communicating with managers rather than the builders of their platform.
                </p>
                <p>
                  <strong>We work differently.</strong> The Computing Effect is a direct developer studio. When you collaborate with us, your point of contact is the engineer writing your application's logic. This direct developer channel removes bugs, saves timeline overhead, and guarantees solid product execution.
                </p>
              </div>
            </motion.div>

            {/* Core Mission highlight */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={viewport}
              style={{
                background: 'var(--bg-card)',
                padding: '3rem 2rem',
                borderRadius: '28px',
                border: '1px solid rgba(255,90,0,0.1)',
                boxShadow: '0 20px 40px rgba(20,9,10,0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', width: '150px', height: '150px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,90,0,0.06) 0%, transparent 70%)', top: '10px', right: '10px' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-orange)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                Operational Motto
              </span>
              <blockquote style={{ fontFamily: "var(--font-display)", fontSize: '1.5rem', fontWeight: 800, color: '#FFF8F1', lineHeight: 1.3, margin: '0 0 1.5rem 0', letterSpacing: '-0.02em' }}>
                "We build technology that creates opportunities. We build the people who build the future."
              </blockquote>
              
              <div style={{ borderTop: '1px solid rgba(255,248,241,0.08)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.85rem', color: '#FFF8F1', fontWeight: 600 }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-orange)' }} />
                  <span>Growing Together</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.85rem', color: '#FFF8F1', fontWeight: 600 }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-gold)' }} />
                  <span>Rising Together</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.85rem', color: '#FFF8F1', fontWeight: 600 }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-success)' }} />
                  <span>Succeeding Together</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CORE PILLARS GRID ───────────────────── */}
      <section style={{ padding: '6rem 0', background: '#1A0D0E', borderTop: '1px solid rgba(255,90,0,0.06)', borderBottom: '1px solid rgba(255,90,0,0.06)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Our Pillars"
            title="The Values That Guide Our Code"
            subtitle="We develop systems following rigid operational standards."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '4rem',
            }}
          >
            {[
              { icon: <Shield size={24} />, title: 'Quality Assured', desc: 'Every line of database schemas and backend code is tested for latency and layout shifting prior to production launch.' },
              { icon: <Users size={24} />, title: 'Developer Communication', desc: 'No account managers or translators. Review project milestones directly with the engineering staff writing your code.' },
              { icon: <TrendingUp size={24} />, title: 'Zero Vendor Lock-in', desc: 'We deliver complete intellectual property handoffs, transferring full repositories and database control to you on deployment.' }
            ].map(pillar => (
              <div
                key={pillar.title}
                style={{
                  background: 'var(--bg-page)',
                  border: '1px solid rgba(255,90,0,0.06)',
                  borderRadius: '20px',
                  padding: '2rem 1.75rem',
                }}
              >
                <div style={{ color: 'var(--color-orange)', marginBottom: '1rem' }}>{pillar.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: '1.15rem', fontWeight: 800, color: '#FFF8F1', margin: '0 0 0.5rem 0' }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.825rem', color: 'rgba(255,248,241,0.65)', lineHeight: 1.6, margin: 0 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE DEVELOPERS MATRIX ────────── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Engineering Team"
            title="Who Builds Your Software"
            subtitle="Work directly with developer expertise to map database relationships and API gateway configurations."
            align="center"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            {TEAM_MEMBERS.map(member => (
              <DeveloperCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTATION CTA BANNER ──────────────── */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid rgba(255, 90, 0, 0.08)',
              borderRadius: '32px',
              padding: '4.5rem 2rem',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 800, color: '#FFF8F1', marginBottom: '1rem' }}>
              Ready to meet our engineers?
            </h3>
            <p style={{ color: 'rgba(255,248,241,0.65)', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
              Skip sales reps. Get straight to sketching system design blueprints and listing API schema parameters with our development team.
            </p>
            <Link
              to="/contact"
              style={{
                background: 'var(--color-orange)',
                color: '#fff',
                textDecoration: 'none',
                padding: '0.875rem 2.25rem',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: 700,
                display: 'inline-block',
                boxShadow: '0 8px 24px rgba(255, 90, 0, 0.2)',
              }}
            >
              Start Technical Scoping
            </Link>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
