import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/variants';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false, // for dark-background sections
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'items-start';
  const headingColor = light ? '#FFF8F1' : 'var(--text-primary)';
  const ruleMargin = align === 'center' ? 'mx-auto' : '';

  return (
    <motion.div
      className={`flex flex-col ${alignClass} ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
          fontWeight: 800,
          color: headingColor,
          lineHeight: 1.2,
          maxWidth: '600px',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      <div className={`decorative-rule ${ruleMargin}`} style={{ marginTop: '0.75rem' }} />
      {subtitle && (
        <p
          style={{
            marginTop: '1rem',
            fontSize: '1rem',
            color: light ? 'rgba(255,248,241,0.7)' : 'var(--text-secondary)',
            maxWidth: '540px',
            lineHeight: 1.75,
            fontFamily: 'var(--font-body)',
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
