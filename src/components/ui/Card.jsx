import React from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '../../utils/variants';

export default function Card({ children, className = '', glass = false, style = {}, onClick }) {
  return (
    <motion.div
      className={`card ${glass ? 'glass' : ''} ${className}`}
      whileHover={cardHover}
      style={style}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
