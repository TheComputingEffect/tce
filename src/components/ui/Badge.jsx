import React from 'react';

export default function Badge({ children, className = '', accent = false }) {
  return (
    <span
      className={`badge ${className}`}
      style={accent ? { background: 'rgba(188,108,37,0.15)', color: '#BC6C25' } : {}}
    >
      {children}
    </span>
  );
}
