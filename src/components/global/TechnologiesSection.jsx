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
  { value: '10+', label: 'Happy Clients', bgColor: 'rgba(34, 197, 94, 0.04)', numColor: '#22C55E' }, // TODO: client to confirm real number
  { value: '12+', label: 'Projects Built', bgColor: 'rgba(255, 90, 0, 0.04)', numColor: '#FF5A00' }, // TODO: client to confirm real number
  { value: '3+', label: 'Developers', bgColor: 'rgba(210, 134, 26, 0.04)', numColor: '#D2861A' }, // TODO: client to confirm real number
  { value: '100%', label: 'On-Time Launch', bgColor: 'rgba(34, 197, 94, 0.04)', numColor: '#22C55E' },
];

// ── Single marquee row ──────────────────────────────────────────────────────
function MarqueeRow({ logos, direction = 'left', speed = 30 }) {
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
              boxShadow: '0 2px 12px rgba(43, 18, 0, 0.04)',
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
        border: '2px dashed rgba(255, 90, 0, 0.25)',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(43, 18, 0, 0.12)',
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
                fontFamily: "var(--font-display)",
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
            background: '#FF5A00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(255, 90, 0, 0.35)',
            zIndex: 5,
            border: '3px solid var(--bg-card)',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
            <path d="M 75 30 A 35 35 0 1 0 75 70" stroke="#FF5A00" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M 34 32 H 60" stroke="#FFF8F1" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M 47 32 V 55" stroke="#FFF8F1" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M 47 55 C 47 62, 36 62, 36 68" stroke="#FFF8F1" strokeWidth="6" strokeLinecap="round" fill="none" />
            <circle cx="36" cy="72" r="5" fill="#FFF8F1" />
            <path d="M 47 55 V 70" stroke="#FFF8F1" strokeWidth="6" strokeLinecap="round" fill="none" />
            <circle cx="47" cy="74.5" r="5" fill="#FFF8F1" />
            <path d="M 47 55 C 47 62, 58 62, 58 68" stroke="#FFF8F1" strokeWidth="6" strokeLinecap="round" fill="none" />
            <circle cx="58" cy="72" r="5" fill="#FFF8F1" />
            <path d="M 54 39 H 64" stroke="#FF5A00" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 54 48 H 62" stroke="#FF5A00" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 54 57 H 64" stroke="#FF5A00" strokeWidth="6" strokeLinecap="round" fill="none" />
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
              background: 'rgba(255, 90, 0, 0.08)',
              border: '1px solid rgba(255, 90, 0, 0.20)',
              borderRadius: '100px',
              padding: '0.4rem 1rem',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#FF5A00',
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
                color: '#FF5A00',
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
            fontFamily: "var(--font-display)",
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          Driving Growth Through Modern Technology
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
