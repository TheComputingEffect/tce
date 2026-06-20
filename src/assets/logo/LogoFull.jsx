import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import LogoIcon from './LogoIcon';

// Full horizontal logo: Icon + Wordmark
export default function LogoFull({ height = 40, className = '' }) {
  const { isDark } = useTheme();
  const textColor = isDark ? '#EAD7BB' : '#4A3728';
  const accentColor = '#BC6C25';

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      style={{ height }}
    >
      <LogoIcon size={height} />
      <div style={{ lineHeight: 1 }}>
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: `${height * 0.38}px`,
            color: textColor,
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}
        >
          The Computing
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 500,
            fontSize: `${height * 0.32}px`,
            color: accentColor,
            letterSpacing: '0.08em',
            lineHeight: 1.2,
          }}
        >
          EFFECT
        </div>
      </div>
    </div>
  );
}
