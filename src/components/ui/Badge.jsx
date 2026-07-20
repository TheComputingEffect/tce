import React from 'react';

export default function Badge({ children, className = '', accent = false }) {
  return (
    <span
      className={`badge ${className}`}
      style={accent ? { background: 'rgba(255, 90, 0, 0.08)', color: 'var(--color-orange)', border: '1px solid rgba(255, 90, 0, 0.18)' } : {}}
    >
      {children}
    </span>
  );
}
