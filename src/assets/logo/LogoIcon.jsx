import React from 'react';
import { useTheme } from '../../context/ThemeContext';

// Hexagonal CE Monogram — Icon Mark
export default function LogoIcon({ size = 40, className = '' }) {
  const { isDark } = useTheme();
  const accent = isDark ? '#EAD7BB' : '#BC6C25';
  const dark = isDark ? '#EAD7BB' : '#4A3728';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="The Computing Effect Logo Icon"
    >
      {/* Hexagon outer */}
      <path
        d="M40 4L72 22V58L40 76L8 58V22L40 4Z"
        fill={isDark ? '#2A1F18' : accent}
        stroke={accent}
        strokeWidth="1.5"
      />
      {/* Hexagon inner ring */}
      <path
        d="M40 12L64 26V54L40 68L16 54V26L40 12Z"
        fill="none"
        stroke={isDark ? accent : '#FFFFFF'}
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      {/* C letter */}
      <path
        d="M36 28C29.373 28 24 33.373 24 40C24 46.627 29.373 52 36 52C39.314 52 42.314 50.686 44.485 48.515"
        stroke={isDark ? dark : '#FFFFFF'}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* E letter */}
      <path
        d="M48 28H56M48 28V52M48 28H56M48 52H56M48 40H54"
        stroke={isDark ? dark : '#FFFFFF'}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
