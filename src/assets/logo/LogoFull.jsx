import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import LogoIcon from './LogoIcon';

export default function LogoFull({ height = 40, showTagline = false, className = '' }) {
  const { isDark } = useTheme();
  
  const textColor = isDark ? '#FFF8F1' : '#2B1200';
  const orangeAccent = '#FF5A00';

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      style={{ height: showTagline ? 'auto' : height }}
    >
      <LogoIcon size={height} />
      <div className="flex flex-col justify-center" style={{ lineHeight: 1.1 }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: `${height * 0.38}px`,
            color: textColor,
            letterSpacing: '-0.02em',
          }}
        >
          The Computing
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: `${height * 0.34}px`,
            color: orangeAccent,
            letterSpacing: '0.08em',
          }}
        >
          EFFECT
        </div>
        {showTagline && (
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: `${height * 0.16}px`,
              color: isDark ? 'rgba(255, 248, 241, 0.5)' : 'rgba(74, 34, 0, 0.6)',
              letterSpacing: '0.18em',
              marginTop: '4px',
              textTransform: 'uppercase',
            }}
          >
            Technology · Growth · People
          </div>
        )}
      </div>
    </div>
  );
}
