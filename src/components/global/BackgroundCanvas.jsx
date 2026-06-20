import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function BackgroundCanvas() {
  const { isDark } = useTheme();

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Base gradient layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'radial-gradient(ellipse at 20% 50%, rgba(74,55,40,0.5) 0%, #1E150F 60%)'
            : 'radial-gradient(ellipse at 20% 50%, #EAD7BB 0%, #FAF6F0 60%)',
          transition: 'background 0.4s ease',
        }}
      />

      {/* SVG hexagonal grid pattern */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: isDark ? 0.06 : 0.12 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hex-pattern" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon
              points="30,2 56,16 56,44 30,58 4,44 4,16"
              fill="none"
              stroke="#D4A373"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" />
      </svg>

      {/* Bokeh blobs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(188,108,37,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(188,108,37,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-8%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(212,163,115,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(212,163,115,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '40%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(74,55,40,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(234,215,187,0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translateY(-50%)',
        }}
      />
    </div>
  );
}
