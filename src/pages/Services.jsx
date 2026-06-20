import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ShoppingCart, Receipt, Bot, Search, Megaphone, Terminal,
  CheckCircle, ChevronDown, ChevronRight, Clock
} from 'lucide-react';
import { fadeUp, scaleIn, staggerContainer, slideInLeft, slideInRight, viewport, pageVariants } from '../utils/variants';
import SectionHeading from '../components/ui/SectionHeading';
import ConsultationBanner from '../components/global/ConsultationBanner';
import { PrimaryBtn, GhostBtn } from '../components/ui/Button';

// ── Page Hero ─────────────────────────────────────────────────────────────────
function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section style={{
      minHeight: '50vh', display: 'flex', alignItems: 'flex-end',
      paddingTop: '80px',
      background: 'linear-gradient(to bottom, var(--hero-bg-start, #EAD7BB), transparent)',
    }}>
      <div className="container" style={{ padding: '4rem 1.5rem 3rem' }}>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: '#BC6C25' }}>Home</Link>
          <ChevronRight size={13} />
          <span>{breadcrumb}</span>
        </motion.div>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--text-primary)', maxWidth: '720px', marginBottom: '1rem' }}>
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}
            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.75 }}>
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

// ── Services data ─────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: <Globe size={40} />,
    name: 'Website Development',
    tagline: '50 Cube: Your Website for ₹5,000',
    desc: [
      'Your business needs a website. We make it simple with our 50 Cube package — answer 50 questions, get your website in 50 hours, pay just ₹5,000. No hidden costs.',
      'We build fast, mobile-friendly websites that look professional and help your customers find you online. Whether you\'re a bakery, a clinic, or a coaching center — we\'ve got you covered.',
      'Every website is responsive, SEO-optimized, and comes with 30 days of free support after delivery.',
    ],
    features: ['Fully responsive design', 'Mobile-friendly', 'Contact form & WhatsApp link', 'Google Maps integration', 'Basic SEO setup', '30 days free support'],
    visual: (
      <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="260" height="180" rx="12" fill="rgba(188,108,37,0.06)" stroke="#BC6C25" strokeWidth="1.5" strokeOpacity="0.3"/>
        <rect x="20" y="20" width="260" height="36" rx="12" fill="rgba(74,55,40,0.08)"/>
        <circle cx="42" cy="38" r="6" fill="#BC6C25" opacity="0.4"/>
        <circle cx="60" cy="38" r="6" fill="#D4A373" opacity="0.4"/>
        <circle cx="78" cy="38" r="6" fill="rgba(74,55,40,0.2)"/>
        <rect x="40" y="72" width="140" height="10" rx="5" fill="rgba(74,55,40,0.15)"/>
        <rect x="40" y="90" width="100" height="6" rx="3" fill="rgba(74,55,40,0.10)"/>
        <rect x="40" y="102" width="120" height="6" rx="3" fill="rgba(74,55,40,0.08)"/>
        <rect x="40" y="124" width="72" height="28" rx="8" fill="#BC6C25" opacity="0.8"/>
        <rect x="180" y="72" width="80" height="80" rx="12" fill="rgba(212,163,115,0.15)" stroke="#D4A373" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    icon: <Receipt size={40} />,
    name: 'Billing Systems',
    tagline: 'Never Lose Track of Payments Again',
    desc: [
      'Running a business means dealing with invoices, payments, and receipts every day. Our billing systems make all of that simple and organized.',
      'We build custom billing software tailored to how your business works — whether you need GST invoicing, payment tracking, or expense management.',
      'Everything is digital, searchable, and secure. No more lost receipts or manual calculations.',
    ],
    features: ['GST-compliant invoicing', 'Payment tracking', 'Expense management', 'Customer records', 'Reports & analytics', 'Mobile access'],
    visual: (
      <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="20" width="180" height="180" rx="12" fill="rgba(188,108,37,0.06)" stroke="#BC6C25" strokeWidth="1.5" strokeOpacity="0.3"/>
        <rect x="80" y="40" width="140" height="12" rx="6" fill="rgba(74,55,40,0.15)"/>
        <rect x="80" y="60" width="100" height="8" rx="4" fill="rgba(74,55,40,0.10)"/>
        <rect x="80" y="80" width="140" height="1" fill="rgba(74,55,40,0.1)"/>
        <rect x="80" y="92" width="60" height="6" rx="3" fill="rgba(74,55,40,0.12)"/>
        <rect x="190" y="92" width="30" height="6" rx="3" fill="#BC6C25" opacity="0.6"/>
        <rect x="80" y="108" width="60" height="6" rx="3" fill="rgba(74,55,40,0.12)"/>
        <rect x="190" y="108" width="30" height="6" rx="3" fill="#BC6C25" opacity="0.6"/>
        <rect x="80" y="124" width="60" height="6" rx="3" fill="rgba(74,55,40,0.12)"/>
        <rect x="190" y="124" width="30" height="6" rx="3" fill="#BC6C25" opacity="0.6"/>
        <rect x="80" y="145" width="140" height="1" fill="rgba(74,55,40,0.1)"/>
        <rect x="150" y="158" width="70" height="8" rx="4" fill="#BC6C25" opacity="0.8"/>
      </svg>
    ),
  },
  {
    icon: <ShoppingCart size={40} />,
    name: 'E-Commerce Applications',
    tagline: 'Sell Your Products Online, Easily',
    desc: [
      'Want to sell online? We build e-commerce stores that are easy for you to manage and easy for your customers to shop from.',
      'From product catalogs to shopping carts to payment integration — we handle everything so you can focus on your products.',
      'Whether you sell 10 products or 10,000 — your store will be fast, secure, and ready to grow with your business.',
    ],
    features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Order management', 'Inventory tracking', 'Mobile-friendly store'],
    visual: (
      <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="100" height="120" rx="10" fill="rgba(188,108,37,0.08)" stroke="#D4A373" strokeWidth="1"/>
        <rect x="40" y="40" width="80" height="50" rx="8" fill="rgba(212,163,115,0.2)"/>
        <rect x="40" y="100" width="60" height="6" rx="3" fill="rgba(74,55,40,0.15)"/>
        <rect x="40" y="112" width="40" height="8" rx="4" fill="#BC6C25" opacity="0.7"/>
        <rect x="170" y="30" width="100" height="120" rx="10" fill="rgba(188,108,37,0.08)" stroke="#D4A373" strokeWidth="1"/>
        <rect x="180" y="40" width="80" height="50" rx="8" fill="rgba(212,163,115,0.2)"/>
        <rect x="180" y="100" width="60" height="6" rx="3" fill="rgba(74,55,40,0.15)"/>
        <rect x="180" y="112" width="40" height="8" rx="4" fill="#BC6C25" opacity="0.7"/>
        <rect x="100" y="170" width="100" height="30" rx="8" fill="#BC6C25" opacity="0.8"/>
      </svg>
    ),
  },
  {
    icon: <Bot size={40} />,
    name: 'AI Automations',
    tagline: 'Let Technology Do the Repetitive Work',
    desc: [
      'Save hours every week with AI-powered automations. From chatbots that answer customer questions to workflows that run themselves.',
      'We build smart tools that handle the boring stuff so you can focus on growing your business.',
      'Our AI solutions are practical and affordable — designed for small businesses, not just big corporations.',
    ],
    features: ['AI chatbots', 'Workflow automation', 'Email automation', 'Data processing', 'Smart notifications', 'Custom AI tools'],
    visual: (
      <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="110" r="60" fill="rgba(188,108,37,0.06)" stroke="#BC6C25" strokeWidth="1.5" strokeOpacity="0.4"/>
        <circle cx="150" cy="110" r="35" fill="rgba(188,108,37,0.10)" />
        <circle cx="138" cy="102" r="5" fill="#BC6C25" opacity="0.8"/>
        <circle cx="162" cy="102" r="5" fill="#BC6C25" opacity="0.8"/>
        <path d="M138 122 Q150 132 162 122" stroke="#BC6C25" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <line x1="150" y1="50" x2="150" y2="30" stroke="#D4A373" strokeWidth="1.5"/>
        <circle cx="150" cy="25" r="5" fill="#D4A373" opacity="0.5"/>
        <path d="M90 80 L80 60" stroke="#D4A373" strokeWidth="1" strokeOpacity="0.5"/>
        <path d="M210 80 L220 60" stroke="#D4A373" strokeWidth="1" strokeOpacity="0.5"/>
        <path d="M90 140 L70 160" stroke="#D4A373" strokeWidth="1" strokeOpacity="0.5"/>
        <path d="M210 140 L230 160" stroke="#D4A373" strokeWidth="1" strokeOpacity="0.5"/>
      </svg>
    ),
  },
  {
    icon: <Terminal size={40} />,
    name: 'Custom Software',
    tagline: 'Built for Your Business, by Your Team',
    desc: [
      'Off-the-shelf software doesn\'t always fit. When you need something custom, we build it from scratch — designed exactly for how you work.',
      'From management systems to internal tools, we translate your requirements into clean, reliable software.',
      'We use modern technologies and follow a clear process so you always know what\'s happening with your project.',
    ],
    features: ['Requirements analysis', 'Custom development', 'API integrations', 'Database design', 'Testing & QA', 'Documentation'],
    visual: (
      <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="260" height="180" rx="10" fill="rgba(30,21,15,0.06)" stroke="rgba(74,55,40,0.2)" strokeWidth="1"/>
        <rect x="20" y="20" width="260" height="28" rx="10" fill="rgba(74,55,40,0.12)"/>
        <circle cx="38" cy="34" r="5" fill="rgba(188,108,37,0.5)"/>
        <circle cx="54" cy="34" r="5" fill="rgba(212,163,115,0.5)"/>
        <circle cx="70" cy="34" r="5" fill="rgba(74,55,40,0.3)"/>
        <rect x="36" y="60" width="20" height="6" rx="3" fill="#BC6C25" opacity="0.7"/>
        <rect x="62" y="60" width="60" height="6" rx="3" fill="rgba(212,163,115,0.6)"/>
        <rect x="52" y="74" width="40" height="6" rx="3" fill="rgba(188,108,37,0.4)"/>
        <rect x="98" y="74" width="80" height="6" rx="3" fill="rgba(74,55,40,0.2)"/>
        <rect x="52" y="88" width="60" height="6" rx="3" fill="rgba(212,163,115,0.5)"/>
        <rect x="36" y="102" width="20" height="6" rx="3" fill="#BC6C25" opacity="0.6"/>
        <rect x="62" y="102" width="100" height="6" rx="3" fill="rgba(74,55,40,0.25)"/>
        <rect x="36" y="144" width="8" height="12" rx="1" fill="#BC6C25" opacity="0.8"/>
      </svg>
    ),
  },
  {
    icon: <Megaphone size={40} />,
    name: 'Digital Marketing',
    tagline: 'Get More Customers Online',
    desc: [
      'Having a website is just the start. We help you get found by the right people through smart digital marketing strategies.',
      'From social media management to Google Ads to content marketing — we create campaigns that bring real customers to your business.',
      'We keep things simple and measurable. You\'ll always know what\'s working and what your money is doing.',
    ],
    features: ['Social media management', 'Google & Meta Ads', 'Content marketing', 'SEO optimization', 'Analytics & reporting', 'Brand awareness'],
    visual: (
      <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M80 100 L140 70 L200 50 L200 160 L140 140 L80 110 Z" fill="rgba(188,108,37,0.12)" stroke="#BC6C25" strokeWidth="1.5" strokeOpacity="0.5"/>
        <rect x="56" y="98" width="24" height="28" rx="4" fill="rgba(74,55,40,0.12)" stroke="#D4A373" strokeWidth="1" strokeOpacity="0.4"/>
        <path d="M215 80 Q230 105 215 130" stroke="#BC6C25" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeOpacity="0.5"/>
        <path d="M225 65 Q250 105 225 145" stroke="#BC6C25" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeOpacity="0.35"/>
        <path d="M238 50 Q272 105 238 160" stroke="#BC6C25" strokeWidth="1" fill="none" strokeLinecap="round" strokeOpacity="0.2"/>
        <rect x="30" y="160" width="80" height="40" rx="8" fill="rgba(188,108,37,0.06)" stroke="#BC6C25" strokeWidth="0.8" strokeOpacity="0.3"/>
        <rect x="40" y="168" width="50" height="6" rx="3" fill="rgba(74,55,40,0.2)"/>
        <rect x="40" y="180" width="35" height="10" rx="4" fill="#BC6C25" opacity="0.5"/>
      </svg>
    ),
  },
];

// ── FAQ Data ──────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'What is your typical development timeline?', a: 'Our 50 Cube website package is delivered in 50 hours. For custom software and more complex projects, timelines vary from 2–12 weeks depending on scope.' },
  { q: 'What is the 50 Cube package?', a: '50 Cube is our flagship website package: we ask you 50 simple questions, build your website in 50 hours, and charge just ₹5,000. No hidden costs, no monthly fees.' },
  { q: 'Do you provide post-launch support?', a: 'Absolutely. We offer ongoing maintenance, bug fixes, and feature updates. All projects include a 30-day free support window, with optional monthly retainer packages thereafter.' },
  { q: 'What technologies do you work with?', a: 'We use React, Next.js, Node.js, React Native, Python, PostgreSQL, MongoDB, Firebase, and more — chosen based on your project\'s specific needs for scalability and performance.' },
  { q: 'Can you work with our existing team?', a: 'Yes! We collaborate seamlessly with in-house teams. We can slot in as a development partner, provide specialized skills, or augment your team\'s capacity for specific project phases.' },
  { q: 'How do you handle project communication?', a: 'We use structured communication with weekly progress updates, sprint reviews, and a dedicated Slack or WhatsApp channel. You\'ll always know where your project stands.' },
  { q: 'What is your pricing structure?', a: 'We offer fixed-price projects for well-defined scopes and hourly/monthly retainer models for ongoing work. All pricing is transparent — no hidden fees, ever.' },
  { q: 'Do you sign NDAs?', a: 'Yes, we are happy to sign Non-Disclosure Agreements before any sensitive project discussions. Protecting your intellectual property is a priority for us.' },
  { q: 'Can you redesign our existing website?', a: 'Absolutely. We review your existing site, understand your goals, and redesign it with better UX, modern aesthetics, and improved performance while preserving SEO value.' },
];

// ── Process Steps ─────────────────────────────────────────────────────────────
const DEV_PROCESS = [
  { num: '01', title: 'Requirements Gathering', duration: '1–2 days', desc: 'Deep dive into your business goals, user needs, and technical requirements.' },
  { num: '02', title: 'Proposal & Planning', duration: '2–3 days', desc: 'Detailed project plan, timeline, milestones, and cost breakdown presented for approval.' },
  { num: '03', title: 'Design & Development', duration: 'Varies', desc: 'Agile sprints with regular reviews, ensuring you see progress throughout the build.' },
  { num: '04', title: 'QA Testing', duration: '3–5 days', desc: 'Comprehensive testing across devices, browsers, and user scenarios before launch.' },
  { num: '05', title: 'Launch & Handover', duration: '1 day', desc: 'Smooth go-live, full knowledge transfer, and documentation for your team.' },
];

// ── Accordion ─────────────────────────────────────────────────────────────────
function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {items.map(({ q, a }, i) => (
        <div key={i} className="accordion-item">
          <button
            className={`accordion-trigger ${open === i ? 'active' : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
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
                transition={{ duration: 0.25, ease: 'easeOut' }}
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

export default function Services() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <PageHero
        breadcrumb="Services"
        title="Complete Digital Solutions for Forward-Thinking Businesses"
        subtitle="We combine technical excellence with creative thinking to deliver solutions that truly move the needle for your business."
      />

      {/* Overview paragraph */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.85 }}>
            Our services are designed to work together as a cohesive digital ecosystem. Whether you need a single solution or a fully integrated approach — we bring strategy, creativity, and engineering excellence to everything we build.
          </motion.p>
        </div>
      </section>

      {/* Individual service sections */}
      {SERVICES.map((svc, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={svc.name}
            className="section-py"
            style={{ background: i % 2 !== 0 ? 'var(--bg-card-alt)' : 'transparent' }}
          >
            <div className="container">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center',
                }}
              >
                {/* Text column */}
                <motion.div
                  variants={isEven ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  style={{ order: isEven ? 0 : 1 }}
                >
                  <div style={{ color: '#BC6C25', marginBottom: '1rem' }}>{svc.icon}</div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#BC6C25', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {svc.tagline}
                  </span>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 700, color: 'var(--text-primary)', margin: '0.5rem 0 1rem', lineHeight: 1.2 }}>
                    {svc.name}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.5rem' }}>
                    {svc.desc.map((p, j) => (
                      <p key={j} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>{p}</p>
                    ))}
                  </div>
                  {/* Features */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {svc.features.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={15} color="#BC6C25" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <PrimaryBtn to="/contact">Get a Quote</PrimaryBtn>
                </motion.div>

                {/* Visual column */}
                <motion.div
                  variants={isEven ? slideInRight : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  style={{
                    order: isEven ? 1 : 0,
                    background: 'var(--bg-card)',
                    border: 'var(--border-subtle)',
                    borderRadius: '20px',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  {svc.visual}
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      <hr className="section-divider" />

      {/* Development Process */}
      <section className="section-py">
        <div className="container">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Development Process"
            subtitle="A clear, structured approach that keeps you informed and in control."
            align="center"
          />
          <div style={{ maxWidth: '700px', margin: '3rem auto 0', position: 'relative' }}>
            {/* Vertical connector line */}
            <div style={{
              position: 'absolute', left: '28px', top: '28px', bottom: '28px',
              width: '2px',
              background: 'linear-gradient(to bottom, #BC6C25, rgba(212,163,115,0.2))',
            }} />
            {DEV_PROCESS.map(({ num, title, duration, desc }, i) => (
              <motion.div
                key={num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  paddingBottom: '2rem',
                  position: 'relative',
                }}
              >
                {/* Number circle */}
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: i === 0 ? '#BC6C25' : 'var(--bg-card)',
                  border: `2px solid ${i === 0 ? '#BC6C25' : 'rgba(188,108,37,0.3)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700, fontSize: '1.1rem',
                  color: i === 0 ? '#fff' : '#BC6C25',
                  flexShrink: 0, zIndex: 1,
                  boxShadow: 'var(--shadow-card)',
                }}>
                  {num}
                </div>
                <div style={{ paddingTop: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.375rem' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', color: 'var(--text-primary)' }}>{title}</h3>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: '#BC6C25', background: 'rgba(188,108,37,0.08)', padding: '0.2rem 0.5rem', borderRadius: '100px', fontWeight: 500 }}>
                      <Clock size={11} />{duration}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* FAQ */}
      <section className="section-py" style={{ background: 'var(--bg-card-alt)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently Asked Questions"
                subtitle="Have a question not listed here? Reach out — we love to talk."
              />
              <PrimaryBtn to="/contact" style={{ marginTop: '1.5rem' }}>Ask a Question</PrimaryBtn>
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewport}>
              <Accordion items={FAQS} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationBanner
        headline="Let's Build Your Next Digital Product"
        subtext="From first idea to final launch — we're your committed technology partner."
        primaryLabel="Start a Project"
      />
    </motion.div>
  );
}
