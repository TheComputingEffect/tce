import React from 'react';
import { Link } from 'react-router-dom';

// ===== PRIMARY BUTTON =====
export function PrimaryBtn({ children, to, href, onClick, className = '', type = 'button', disabled = false, ...props }) {
  const classes = `btn btn-primary ${className}`;
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  return <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>{children}</button>;
}

// ===== SECONDARY BUTTON =====
export function SecondaryBtn({ children, to, href, onClick, className = '', type = 'button', ...props }) {
  const classes = `btn btn-secondary ${className}`;
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  return <button type={type} className={classes} onClick={onClick} {...props}>{children}</button>;
}

// ===== GHOST BUTTON =====
export function GhostBtn({ children, to, href, onClick, className = '', type = 'button', ...props }) {
  const classes = `btn btn-ghost ${className}`;
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  return <button type={type} className={classes} onClick={onClick} {...props}>{children}</button>;
}
