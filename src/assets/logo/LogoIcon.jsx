import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function LogoIcon({ size = 40, className = '' }) {
  const { isDark } = useTheme();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="The Computing Effect Logo Icon"
    >
      <defs>
        <linearGradient id="logo-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5A00" />
          <stop offset="100%" stopColor="#D2861A" />
        </linearGradient>
      </defs>

      {/* Ring: Orange-to-gold gradient ring, partially encircling (open on the right) */}
      <path
        d="M 75 30 A 35 35 0 1 0 75 70"
        stroke="url(#logo-ring-grad)"
        strokeWidth="6.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* "T": Dark espresso in light mode, cream/white in dark mode */}
      {/* Top horizontal bar of T */}
      <path
        d="M 34 32 H 60"
        stroke={isDark ? '#FFF8F1' : '#2B1200'}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Stem of T splitting into circuit roots at bottom */}
      <path
        d="M 47 32 V 55"
        stroke={isDark ? '#FFF8F1' : '#2B1200'}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Left split root */}
      <path
        d="M 47 55 C 47 62, 36 62, 36 68"
        stroke={isDark ? '#FFF8F1' : '#2B1200'}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx="36"
        cy="72"
        r="4.5"
        fill={isDark ? '#FFF8F1' : '#2B1200'}
      />

      {/* Center split root */}
      <path
        d="M 47 55 V 70"
        stroke={isDark ? '#FFF8F1' : '#2B1200'}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx="47"
        cy="74.5"
        r="4.5"
        fill={isDark ? '#FFF8F1' : '#2B1200'}
      />

      {/* Right split root */}
      <path
        d="M 47 55 C 47 62, 58 62, 58 68"
        stroke={isDark ? '#FFF8F1' : '#2B1200'}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx="58"
        cy="72"
        r="4.5"
        fill={isDark ? '#FFF8F1' : '#2B1200'}
      />

      {/* "E"-bar elements: Orange horizontal bars on the right side of the T stem */}
      <path
        d="M 54 39 H 64"
        stroke="#FF5A00"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M 54 48 H 62"
        stroke="#FF5A00"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M 54 57 H 64"
        stroke="#FF5A00"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
