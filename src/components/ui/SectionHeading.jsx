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
  const headingColor = light ? '#EAD7BB' : 'var(--text-primary)';
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
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
          fontWeight: 700,
          color: headingColor,
          lineHeight: 1.2,
          maxWidth: '600px',
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
            color: light ? 'rgba(234,215,187,0.75)' : 'var(--text-secondary)',
            maxWidth: '540px',
            lineHeight: 1.75,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
