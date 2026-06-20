import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, scaleIn, viewport } from '../../utils/variants';

// ── Technology logo data ────────────────────────────────────────────────────
const TECH_LOGOS = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
];

// Split into 4 rows for the marquee
const ROW_1 = TECH_LOGOS.slice(0, 8);
const ROW_2 = TECH_LOGOS.slice(4, 12);
const ROW_3 = TECH_LOGOS.slice(8, 16);
const ROW_4 = [...TECH_LOGOS.slice(12), ...TECH_LOGOS.slice(0, 4)];

// ── Stats data ──────────────────────────────────────────────────────────────
const STATS = [
  { value: '10+', label: 'Happy Clients', bgColor: 'rgba(34, 197, 94, 0.10)', numColor: '#22C55E' },
  { value: '05+', label: 'Projects Delivered', bgColor: 'rgba(234, 179, 8, 0.10)', numColor: '#EAB308' },
  { value: '03+', label: 'Team Members', bgColor: 'rgba(239, 68, 68, 0.10)', numColor: '#EF4444' },
  { value: '06+', label: 'Services Offered', bgColor: 'rgba(59, 130, 246, 0.10)', numColor: '#3B82F6' },
];

// ── Single marquee row ──────────────────────────────────────────────────────
function MarqueeRow({ logos, direction = 'left', speed = 30 }) {
  // Duplicate logos for seamless infinite loop
  const duplicated = [...logos, ...logos, ...logos];
  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';
  const duration = `${speed}s`;

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        padding: '0.5rem 0',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          width: 'max-content',
          animation: `${animationName} ${duration} linear infinite`,
        }}
      >
        {duplicated.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            style={{
              width: '72px',
              height: '72px',
              background: 'var(--bg-card)',
              borderRadius: '14px',
              boxShadow: '0 2px 12px rgba(74, 55, 40, 0.06)',
              border: 'var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              width={36}
              height={36}
              loading="lazy"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Central Stats Card ──────────────────────────────────────────────────────
function StatsCard() {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        width: '320px',
        maxWidth: '90%',
        background: 'var(--bg-card)',
        border: '2px dashed rgba(188, 108, 37, 0.30)',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(74, 55, 40, 0.15)',
        overflow: 'hidden',
      }}
    >
      {/* 2x2 Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          position: 'relative',
        }}
      >
        {STATS.map(({ value, label, bgColor, numColor }, i) => (
          <div
            key={label}
            style={{
              padding: '1.5rem 1rem',
              textAlign: 'center',
              background: bgColor,
              borderRight: i % 2 === 0 ? '1px solid var(--border-color)' : 'none',
              borderBottom: i < 2 ? '1px solid var(--border-color)' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.75rem',
                fontWeight: 800,
                color: numColor,
                lineHeight: 1,
                marginBottom: '0.375rem',
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {label}
            </div>
          </div>
        ))}

        {/* Center logo circle */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#BC6C25',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(188, 108, 37, 0.35)',
            zIndex: 5,
            border: '3px solid var(--bg-card)',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 80 80" fill="none">
            <path d="M36 28C29.373 28 24 33.373 24 40C24 46.627 29.373 52 36 52C39.314 52 42.314 50.686 44.485 48.515" stroke="#EAD7BB" strokeWidth="5" strokeLinecap="round" fill="none"/>
            <path d="M48 28H56M48 28V52M48 52H56M48 40H54" stroke="#EAD7BB" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Technologies Section ───────────────────────────────────────────────
export default function TechnologiesSection() {
  return (
    <section
      style={{
        background: 'var(--bg-card-alt)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Marquee keyframes — injected once */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="container">
        {/* Section Label Pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.20)',
              borderRadius: '100px',
              padding: '0.4rem 1rem',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#22C55E',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#22C55E',
              }}
            >
              Technologies
            </span>
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          Driving Excellence Through Technology
        </motion.h2>
      </div>

      {/* Marquee Grid with Stats Card Overlay */}
      <div style={{ position: 'relative', padding: '1rem 0' }}>
        {/* Floating logo rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <MarqueeRow logos={ROW_1} direction="left" speed={35} />
          <MarqueeRow logos={ROW_2} direction="right" speed={30} />
          <MarqueeRow logos={ROW_3} direction="left" speed={28} />
          <MarqueeRow logos={ROW_4} direction="right" speed={32} />
        </div>

        {/* Central Stats Card — overlaid in the middle */}
        <StatsCard />
      </div>
    </section>
  );
}
