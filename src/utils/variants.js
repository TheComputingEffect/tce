// ============================================================
// THE COMPUTING EFFECT — FRAMER MOTION VARIANTS
// Single source of truth for all animations
// ============================================================

// Detect reduced motion preference
export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Safe wrapper — disables animations if user prefers reduced motion
const safe = (variant) =>
  prefersReducedMotion
    ? { hidden: {}, visible: {}, exit: {} }
    : variant;

export const fadeUp = safe({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
});

export const fadeDown = safe({
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
});

export const fadeIn = safe({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
});

export const scaleIn = safe({
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
});

export const slideInLeft = safe({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
});

export const slideInRight = safe({
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
});

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Card hover — used with whileHover
export const cardHover = prefersReducedMotion
  ? {}
  : { y: -6, transition: { duration: 0.2, ease: 'easeOut' } };

// Page transition
export const pageVariants = safe({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
});

// Viewport settings (shared)
export const viewport = { once: true, margin: '-80px' };
