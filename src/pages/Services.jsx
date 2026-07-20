import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ShoppingCart, Receipt, Bot, Terminal, TrendingUp, CheckCircle,
  ChevronDown, ChevronRight, Clock, Shield, Sparkles, Send, UserCheck
} from 'lucide-react';
import { fadeUp, slideInLeft, viewport, pageVariants } from '../utils/variants';
import SectionHeading from '../components/ui/SectionHeading';

// ── Page Hero ─────────────────────────────────────────────────────────────────
function PageHero({ title, subtitle, breadcrumb }) {
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.8rem', color: 'rgba(255,248,241,0.45)' }}>
          <Link to="/" style={{ color: 'var(--color-orange)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <span>{breadcrumb}</span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            color: '#FFF8F1',
            maxWidth: '720px',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.15
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: '1rem', color: 'rgba(255,248,241,0.6)', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

// ── INTERACTIVE AI PROMPT CLASSIFIER WIDGET ──────────────────────────────────
function AiClassifier() {
  const [inputText, setInputText] = useState("Where is my delivery? This is the third time it is late and I want a refund.");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleClassify = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      
      const txt = inputText.toLowerCase();
      let category = 'General Support Inquiry';
      let sentiment = 'Neutral';
      let urgency = 'Medium';
      let draft = '';

      if (txt.includes('refund') || txt.includes('late') || txt.includes('delayed') || txt.includes('delivery')) {
        category = 'Logistics / Refund Ticket';
        sentiment = 'Negative (Frustrated Customer)';
        urgency = 'High (Priority 1)';
        draft = "Dear customer, we sincerely apologize that your order TCE-LOG-478 is delayed. We have checked with our courier partner and flagged your ticket. A refund process has been queued in our billing pipeline. An agent will contact you shortly.";
      } else if (txt.includes('buy') || txt.includes('price') || txt.includes('order') || txt.includes('quote') || txt.includes('bulk')) {
        category = 'B2B Sales Lead';
        sentiment = 'Positive (Purchase Intent)';
        urgency = 'Medium (Priority 2)';
        draft = "Hello, thank you for your bulk supply query. We have logged your request into our CRM ledger. A technical consultant will compile a custom pricing quote and email it to you within 2 business hours.";
      } else {
        category = 'Technical Helpdesk';
        sentiment = 'Neutral (Inquisitive)';
        urgency = 'Low (Priority 3)';
        draft = "Hi there, thank you for writing in. We have indexed your support ticket. An operations engineer is checking your database credentials and will dispatch updates shortly.";
      }

      setResult({ category, sentiment, urgency, draft });
    }, 1200);
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '380px',
        background: 'rgba(20,9,10,0.6)',
        border: '1px solid rgba(255, 90, 0, 0.15)',
        borderRadius: '24px',
        padding: '1.75rem',
        boxShadow: '0 15px 35px rgba(20,9,10,0.3)',
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
      }}
    >
      <span style={{ fontSize: '0.625rem', fontWeight: 800, color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem' }}>
        Live NLP Prompt Tester
      </span>
      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF8F1', margin: '0 0 1rem 0' }}>
        Automate Inquiry Classification
      </h4>

      <form onSubmit={handleClassify} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <textarea
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Type client email/query..."
          style={{
            width: '100%',
            height: '70px',
            background: 'rgba(255,248,241,0.03)',
            border: '1px solid rgba(255,248,241,0.1)',
            borderRadius: '12px',
            padding: '0.6rem 0.75rem',
            color: '#FFF8F1',
            fontSize: '0.75rem',
            outline: 'none',
            resize: 'none',
            fontFamily: 'var(--font-body)',
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            background: loading ? 'rgba(255,248,241,0.05)' : 'var(--color-orange)',
            border: 'none',
            color: '#fff',
            borderRadius: '10px',
            padding: '0.6rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'background 0.2s',
          }}
        >
          {loading ? (
            <>
              <Sparkles size={13} className="animate-spin" /> Classifying query...
            </>
          ) : (
            <>
              <Send size={13} /> Analyze Client Query
            </>
          )}
        </button>
      </form>

      <AnimatePresence>
        {result && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              marginTop: '1.25rem',
              borderTop: '1px solid rgba(255,248,241,0.08)',
              paddingTop: '1rem',
              fontSize: '0.7rem',
              lineHeight: 1.5,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ color: 'rgba(255,248,241,0.45)' }}>Category:</span>
              <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>{result.category}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ color: 'rgba(255,248,241,0.45)' }}>Sentiment:</span>
              <span style={{ color: 'var(--color-orange)', fontWeight: 700 }}>{result.sentiment}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ color: 'rgba(255,248,241,0.45)' }}>Urgency:</span>
              <span style={{ color: '#22C55E', fontWeight: 700 }}>{result.urgency}</span>
            </div>

            <div style={{ background: '#14090A', border: '1px solid rgba(255,248,241,0.06)', borderRadius: '10px', padding: '0.75rem', color: 'rgba(255,248,241,0.65)' }}>
              <div style={{ fontWeight: 700, color: '#FFF8F1', marginBottom: '2px', fontSize: '0.65rem', textTransform: 'uppercase' }}>Auto response draft</div>
              "{result.draft}"
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {items.map(({ q, a }, i) => (
        <div key={i} className="accordion-item" style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,90,0,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: open === i ? 'var(--color-orange)' : '#FFF8F1',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-body)',
            }}
          >
            {q}
            <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={18} color={open === i ? 'var(--color-orange)' : 'rgba(255,248,241,0.3)'} />
            </motion.div>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  padding: '0 1.5rem 1.5rem 1.5rem',
                  fontSize: '0.875rem',
                  color: 'rgba(255,248,241,0.65)',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-body)',
                }}>
                  {a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ── SERVICES DATA ─────────────────────────────────────────────────────────────
const SERVICES_DETAIL = [
  {
    id: 'web-dev',
    icon: <Globe size={32} />,
    name: 'Web Engineering',
    tagline: 'High-Performance Storefronts & Portals',
    desc: 'We engineer frontends using React and Vite, bypassing slow templates. Every application is optimized for mobile responsiveness, page speed loads, and structured local indexing (SEO).',
    bullets: [
      'Responsive frameworks configured for mobile, tablet, and desktop',
      'Global caching and image compression for page load speeds under 1.5s',
      'Semantic structure complying with standard accessibility checklists',
      'Local search schema layout for visibility optimization',
      'Direct WhatsApp checkout and chat hooks',
      'Optimized deployment on cloud servers with secure SSL configure'
    ],
    accent: 'var(--color-orange)'
  },
  {
    id: 'custom-software',
    icon: <Terminal size={32} />,
    name: 'Unified POS Databases',
    tagline: 'Real-Time Sync Systems',
    desc: 'Our primary technical specialty. We sync offline checkout counters, web orders, and inventory records into a single database core. Say goodbye to mismatched stock sheets.',
    bullets: [
      'Database sync locks running between counter POS and online sales databases',
      'Custom transaction invoicing layouts with GST calculations',
      'Automatic low-stock warning triggers sent to dashboard lists',
      'Relational tables documenting transaction and client profiles',
      'Multi-branch stock sync support pipeline configurations',
      'Code repositories built cleanly on Node.js and PostgreSQL'
    ],
    accent: 'var(--color-gold)'
  },
  {
    id: 'ai-automation',
    icon: <Bot size={32} />,
    name: 'AI Agent Automations',
    tagline: 'Streamlining Workflows',
    desc: 'We integrate machine learning APIs to classify support tickets, parse customer details, and automate spreadsheet logging.',
    bullets: [
      'Custom Gemini API routing integration matching parameters',
      'Automated email query sentiment classifiers',
      'Database logging scripts updating spreadsheets dynamically',
      'Support assistant bots matching client guidelines',
      'Operational task automations connecting workflow endpoints',
      'Developer review and logging monitoring configured post-launch'
    ],
    accent: 'var(--color-orange)'
  }
];

const FAQS = [
  { 
    q: 'How do you estimate development timelines?', 
    a: 'Timelines vary by system scope. A custom marketing site takes 1-2 weeks. Complex database projects (like inventory-billing cores) require 4-6 weeks. We break down milestones in our initial proposal.' 
  },
  { 
    q: 'What is your technology stack?', 
    a: 'We write clean code utilizing React.js, Vite, and Tailwind CSS on frontends. Backends are built on Node.js, Express, and PostgreSQL databases, deployed securely on cloud servers.' 
  },
  { 
    q: 'Who owns the intellectual property and code?', 
    a: 'You do. Once the project launches and payments clear, the complete source code, database structures, and keys are handed directly to you. We do not charge recurring license fees.' 
  },
  { 
    q: 'What post-launch support do you provide?', 
    a: 'Every system launch includes 30 days of active developer monitoring. Following this, we offer flexible hosting support agreements for database backups, security patches, and minor code updates.' 
  }
];

export default function Services() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit" style={{ background: '#14090A' }}>
      
      {/* Page Hero */}
      <PageHero 
        breadcrumb="Services" 
        title="We Develop Systems that Drive Operational Growth" 
        subtitle="Custom software and responsive web applications mapped to your operational needs."
      />

      {/* ── SERVICES DETAILED LIST ──────────────── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {SERVICES_DETAIL.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.name} 
                id={service.id}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '4rem', 
                  alignItems: 'center' 
                }}
              >
                
                {/* Visual / Text Column */}
                <motion.div 
                  variants={slideInLeft} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={viewport}
                  style={{ order: isEven ? 1 : 2 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '8px', background: 'rgba(255,90,0,0.08)', borderRadius: '10px', color: 'var(--color-orange)' }}>
                      {service.icon}
                    </div>
                    {service.tagline && <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{service.tagline}</span>}
                  </div>
                  
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: '1.75rem', fontWeight: 800, color: '#FFF8F1', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
                    {service.name}
                  </h2>
                  <p style={{ fontSize: '0.925rem', color: 'rgba(255,248,241,0.7)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {service.desc}
                  </p>
                  
                  {/* Capabilities List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {service.bullets.map((bullet) => (
                      <div key={bullet} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.85rem', color: 'rgba(255,248,241,0.65)' }}>
                        <CheckCircle size={15} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Styled Decorative Panel Column */}
                <motion.div 
                  variants={fadeUp} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={viewport}
                  style={{ 
                    order: isEven ? 2 : 1,
                    background: 'var(--bg-card)',
                    border: '1px solid rgba(255,90,0,0.08)',
                    borderRadius: '24px',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    boxShadow: '0 15px 35px rgba(20,9,10,0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '300px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', background: `radial-gradient(circle, ${service.accent} 0%, transparent 70%)`, opacity: 0.1, filter: 'blur(30px)' }} />
                  
                  {service.id === 'custom-software' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '280px', position: 'relative', zIndex: 1 }}>
                      <div style={{ background: '#14090A', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ color: '#22C55E' }}><CheckCircle size={18} /></div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FFF8F1' }}>Billing: GST Invoice Issued</span>
                      </div>
                      <div style={{ background: '#14090A', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ color: 'var(--color-orange)' }}><Receipt size={18} /></div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FFF8F1' }}>POS: Counter Sale Sync</span>
                      </div>
                      <div style={{ background: '#14090A', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ color: 'var(--color-gold)' }}><ShoppingCart size={18} /></div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FFF8F1' }}>Stock Qty Auto-Reduced</span>
                      </div>
                    </div>
                  ) : service.id === 'ai-automation' ? (
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <AiClassifier />
                    </div>
                  ) : (
                    <div style={{ position: 'relative', zIndex: 1, color: '#FFF8F1' }}>
                      <div style={{ display: 'flex', justify: 'center', color: 'var(--color-orange)', marginBottom: '1rem', justifyContent: 'center' }}>{service.icon}</div>
                      <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: '1.25rem' }}>{service.name}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'rgba(255,248,241,0.5)', marginTop: '0.5rem', maxWidth: '200px', margin: '0.5rem auto 0' }}>Clean interface designs mapping user journeys.</p>
                    </div>
                  )}
                </motion.div>

              </div>
            );
          })}
        </div>
      </section>

      {/* ── PROJECT FAQ SECTION ────────────────── */}
      <section style={{ padding: '6rem 0', background: '#1A0D0E', borderTop: '1px solid rgba(255,90,0,0.08)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <SectionHeading
            eyebrow="FAQ"
            title="Operational Planning FAQ"
            subtitle="Honest, direct answers about code handoffs, timelines, and launch support."
            align="center"
          />
          <div style={{ marginTop: '3.5rem' }}>
            <Accordion items={FAQS} />
          </div>
        </div>
      </section>

    </motion.div>
  );
}
