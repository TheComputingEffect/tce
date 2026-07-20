import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, Terminal, Bot, PenTool, TrendingUp, CheckCircle, Zap, Shield, Clock,
  ArrowRight, AlertCircle, ShoppingCart, RefreshCw, Layers, Check
} from 'lucide-react';
import { fadeUp, staggerContainer, viewport, pageVariants } from '../utils/variants';
import SectionHeading from '../components/ui/SectionHeading';
import TechnologiesSection from '../components/global/TechnologiesSection';

// ── INTERACTIVE POS SIMULATOR WIDGET ─────────────────────────────────────────
function PosSimulator() {
  const [stock, setStock] = useState(48);
  const [status, setStatus] = useState('idle'); // idle | connecting | printing | finished
  const [latency, setLatency] = useState(null);
  const [receipts, setReceipts] = useState([]);

  const handleCheckout = () => {
    if (status !== 'idle') return;
    setStatus('connecting');
    setLatency(Math.floor(Math.random() * 8) + 4); // 4-11ms latency

    setTimeout(() => {
      setStatus('printing');
      setStock(prev => Math.max(0, prev - 1));
      
      setTimeout(() => {
        setStatus('finished');
        const newReceipt = {
          id: Date.now(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          item: "Espresso Roast Coffee Bag",
          qty: 1,
          gst: "18%",
          total: "₹720.00"
        };
        setReceipts(prev => [newReceipt, ...prev].slice(0, 2));

        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      }, 1500);
    }, 1000);
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '460px',
        background: 'rgba(26, 13, 14, 0.85)',
        border: '1px solid rgba(255, 90, 0, 0.18)',
        borderRadius: '28px',
        padding: '2rem 1.5rem',
        boxShadow: '0 25px 60px rgba(20,9,10,0.4)',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Top dashboard header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,248,241,0.08)', paddingBottom: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: status === 'connecting' ? '#F59E0B' : status === 'printing' ? '#3B82F6' : '#22C55E', animation: status !== 'idle' ? 'pulse-ring 1.5s infinite' : 'none' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#FFF8F1', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Central Sync Engine
          </span>
        </div>
        <span style={{ fontSize: '0.65rem', color: '#22C55E', fontWeight: 700, background: 'rgba(34,197,94,0.1)', padding: '2px 8px', borderRadius: '100px' }}>
          Live Connection
        </span>
      </div>

      {/* Simulator product dashboard */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,248,241,0.03)', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255,248,241,0.06)' }}>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFF8F1', margin: 0 }}>Espresso Roast Bag</h4>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,248,241,0.45)' }}>SKU: ERB-2026</span>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--color-orange)', fontWeight: 600, display: 'block', textTransform: 'uppercase' }}>Central Stock</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF8F1', fontFamily: 'var(--font-display)' }}>{stock}</span>
          </div>
        </div>

        {/* Action button trigger */}
        <button
          onClick={handleCheckout}
          disabled={status !== 'idle'}
          style={{
            width: '100%',
            background: status === 'idle' ? 'var(--color-orange)' : 'rgba(255,248,241,0.05)',
            border: status === 'idle' ? 'none' : '1px solid rgba(255,248,241,0.1)',
            color: '#fff',
            borderRadius: '16px',
            padding: '1rem',
            fontSize: '0.85rem',
            fontWeight: 700,
            cursor: status === 'idle' ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s',
            boxShadow: status === 'idle' ? '0 8px 20px rgba(255, 90, 0, 0.2)' : 'none',
          }}
        >
          {status === 'idle' && (
            <>
              <ShoppingCart size={16} /> Process Counter Checkout
            </>
          )}
          {status === 'connecting' && (
            <>
              <RefreshCw size={16} className="animate-spin" /> Verifying Ledger Balance...
            </>
          )}
          {status === 'printing' && (
            <>
              <RefreshCw size={16} className="animate-spin" /> Issuing Compliant GST Invoice...
            </>
          )}
          {status === 'finished' && (
            <>
              <Check size={16} color="#22C55E" /> Database Synced!
            </>
          )}
        </button>
      </div>

      {/* Output Console / Receipt screen */}
      <div
        style={{
          background: '#14090A',
          border: '1px solid rgba(255,248,241,0.08)',
          borderRadius: '18px',
          padding: '1.25rem',
          minHeight: '140px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontFamily: 'monospace',
          fontSize: '0.72rem',
          color: 'rgba(255,248,241,0.7)',
          lineHeight: 1.6,
        }}
      >
        <AnimatePresence mode="wait">
          {status === 'idle' && receipts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: 'center', color: 'rgba(255,248,241,0.3)' }}>
              // System idle. Click "Process Checkout" <br /> to trigger a live database transaction.
            </motion.div>
          )}

          {status === 'connecting' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ color: 'var(--color-gold)' }}>
              <div>&gt; INITIALIZING checkout_transaction_hook()</div>
              <div>&gt; Connecting to PostgreSQL database core...</div>
              <div>&gt; Lock database record: SKU ERB-2026</div>
            </motion.div>
          )}

          {status === 'printing' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ color: '#FFF8F1' }}>
              <div>&gt; CONNECTION SECURED in {latency}ms</div>
              <div>&gt; Subtract central stock inventory count</div>
              <div>&gt; Compiling CGST (9%) + SGST (9%) invoicing module</div>
              <div>&gt; Output: Print thermal invoice layout...</div>
            </motion.div>
          )}

          {(status === 'finished' || (status === 'idle' && receipts.length > 0)) && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div style={{ color: '#22C55E', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>✓ INVENTORY SYNCED SECURELY</span>
                <span>{latency}ms</span>
              </div>
              <div style={{ borderTop: '1px dashed rgba(255,248,241,0.15)', paddingTop: '0.5rem', color: 'rgba(255,248,241,0.5)' }}>
                {receipts.slice(0, 1).map(r => (
                  <div key={r.id}>
                    <div>Invoice: TCE-POS-{r.id.toString().substring(8)}</div>
                    <div>Timestamp: {r.time}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFF8F1', marginTop: '0.25rem' }}>
                      <span>1x {r.item}</span>
                      <span>{r.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── capabilities card ────────────────────────────────────────────────────────
function CapabilityCard({ icon, name, desc, index }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(255, 90, 0, 0.08)',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        boxShadow: '0 15px 35px rgba(20,9,10,0.15)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div
        style={{
          width: '52px',
          height: '52px',
          background: 'rgba(255, 90, 0, 0.06)',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-orange)',
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: '1.25rem', fontWeight: 800, color: '#FFF8F1', margin: 0 }}>
        {name}
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'rgba(255,248,241,0.7)', lineHeight: 1.65, margin: 0 }}>
        {desc}
      </p>
    </motion.div>
  );
}

const CAPABILITIES = [
  {
    icon: <Globe size={24} />,
    name: 'Web Engineering',
    desc: 'Bespoke web applications built with headless frameworks (React, Vite) optimized for mobile conversion and search visibility.'
  },
  {
    icon: <Terminal size={24} />,
    name: 'Unified POS Billing',
    desc: 'Real-time billing engines that update inventory, calculate GST taxes, and sync sales channels automatically on transaction.'
  },
  {
    icon: <Bot size={24} />,
    name: 'AI Agent Automations',
    desc: 'Custom workflows and classifiers utilizing Vertex AI and Gemini APIs to automate data indexing and ticketing tasks.'
  },
  {
    icon: <Layers size={24} />,
    name: 'Spreadsheet Modernization',
    desc: 'Migrating legacy client spreadsheets and operational logs into structured, scalable cloud databases.'
  }
];

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      
      {/* ── HERO SECTION ────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '90px',
          background: 'radial-gradient(circle at 10% 20%, rgba(43, 18, 0, 0.3) 0%, #14090A 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Soft background light */}
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 90, 0, 0.05) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-12 lg:py-16">
            
            {/* Left Content column */}
            <div className="lg:col-span-7">
              {/* Eyebrow badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255, 90, 0, 0.08)',
                  border: '1px solid rgba(255, 90, 0, 0.15)',
                  borderRadius: '100px',
                  padding: '6px 14px',
                  marginBottom: '1.5rem'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-orange)' }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-orange)' }}>
                  Coimbatore · Software Engineering Studio
                </span>
              </div>

              {/* Title display */}
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                  fontWeight: 800,
                  color: '#FFF8F1',
                  lineHeight: 1.1,
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                We build the software that runs your entire business — <span style={{ color: 'var(--color-orange)' }}>integrated & synced.</span>
              </h1>

              {/* Paragraph details */}
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'rgba(255,248,241,0.7)',
                  lineHeight: 1.8,
                  maxWidth: '560px',
                  marginBottom: '2.5rem',
                  fontFamily: 'var(--font-body)',
                }}
              >
                We sync your web storefronts, checkouts, and stock ledgers in one database system. You speak directly with our engineers, ensuring transparent deliverables and rapid execution.
              </p>

              {/* CTA buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  style={{
                    background: 'var(--color-orange)',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    padding: '1rem 2.25rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    boxShadow: '0 8px 24px rgba(255, 90, 0, 0.25)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                >
                  Start Your Project
                </Link>
                <Link
                  to="/portfolio"
                  style={{
                    background: 'rgba(255,248,241,0.03)',
                    border: '1px solid rgba(255,248,241,0.12)',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    padding: '1rem 2.25rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,248,241,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,248,241,0.03)'}
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Right Interactive Simulator column */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <PosSimulator />
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. CAPABILITIES GRID SECTION ────────── */}
      <section style={{ padding: '6rem 0', background: '#14090A' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="Systems Engineered for Growth"
            subtitle="We replace legacy spreadsheets and disconnected systems with custom cloud engines."
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
            {CAPABILITIES.map((cap, i) => (
              <CapabilityCard key={cap.name} {...cap} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DIRECT DEV STORY BLOCK ───────────── */}
      <section style={{ padding: '6rem 0', background: '#1A0D0E', borderTop: '1px solid rgba(255,90,0,0.08)', borderBottom: '1px solid rgba(255,90,0,0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            {/* Story text */}
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-orange)',
                  background: 'rgba(255, 90, 0, 0.08)',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  display: 'inline-block',
                  marginBottom: '1rem',
                }}
              >
                Our Model
              </span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#FFF8F1', margin: '0 0 1.25rem 0', lineHeight: 1.15 }}>
                Direct Communication. Zero Hand-Offs.
              </h2>
              <p style={{ color: 'rgba(255,248,241,0.7)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Traditional agencies pass your specifications through multiple accounts executives and managers before it ever reaches a coder. Requirements get diluted, bugs increase, and delivery timelines expand.
              </p>
              <p style={{ color: 'rgba(255,248,241,0.7)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                We work as a tight engineering studio. When you build with us, your point of contact is the system architect writing your codebase. Direct lines, transparent milestones, and reliable output.
              </p>

              <div style={{ borderLeft: '3px solid var(--color-orange)', paddingLeft: '1.25rem' }}>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255,248,241,0.4)', fontWeight: 700, display: 'block', letterSpacing: '0.06em' }}>Our Standards</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-gold)', fontStyle: 'italic' }}>
                  "Technology with integrity. Code built to support operations."
                </span>
              </div>
            </div>

            {/* Visual breakdown diagram */}
            <div
              style={{
                background: 'rgba(20,9,10,0.5)',
                border: '1px solid rgba(255,90,0,0.12)',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                boxShadow: '0 15px 35px rgba(20,9,10,0.2)',
              }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: '1.2rem', fontWeight: 800, color: '#FFF8F1', marginBottom: '1.5rem', margin: 0 }}>
                Development Framework
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
                {[
                  { title: 'Sprint-Based Scoping', desc: 'Work is planned in clear 1-week blocks with active dev previews.' },
                  { title: 'Direct Engineer Slack/WhatsApp', desc: 'Instant access to developer staff. No translators.' },
                  { title: 'Complete IP Handoff', desc: 'All database schemas and source repositories belong to you on launch.' }
                ].map((item, idx) => (
                  <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-orange)', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFF8F1', margin: '0 0 2px 0' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'rgba(255,248,241,0.5)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. TECHNOLOGIES CAROUSEL SECTION ───── */}
      <TechnologiesSection />

    </motion.div>
  );
}
