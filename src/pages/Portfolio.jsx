import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye, ArrowRight, ArrowLeft, Terminal, Shield, ArrowUpRight } from 'lucide-react';
import { pageVariants } from '../utils/variants';
import { PROJECTS } from '../data/projects';

// ── INTERACTIVE CONSTELLATION CANVAS BACKGROUND ──────────────────────────────
function ConstellationBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const particleCount = 45;
    const connectionDistance = 110;
    const mouse = { x: null, y: null, radius: 150 };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 90, 0, 0.4)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - dist / connectionDistance) * 0.12;
            ctx.strokeStyle = `rgba(255, 90, 0, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw mouse interactive lines
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            const alpha = (1 - dist / mouse.radius) * 0.25;
            ctx.strokeStyle = `rgba(210, 134, 26, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'all',
        opacity: 0.8,
      }}
    />
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Dynamic filter lists
  const filteredProjects = PROJECTS.filter(p => {
    return activeCategory === "All" || p.category === activeCategory;
  });

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit" style={{ background: '#14090A', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ── 1. Bespoke Hero Constellation Block ── */}
      <section
        style={{
          position: 'relative',
          padding: '8rem 0 6rem 0',
          borderBottom: '1px solid rgba(255, 90, 0, 0.08)',
          background: 'radial-gradient(circle at 50% 100%, rgba(43, 18, 0, 0.4) 0%, #14090A 100%)',
          overflow: 'hidden',
        }}
      >
        <ConstellationBackground />

        {/* Ambient gradient blob */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 90, 0, 0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 5, textAlign: 'center', maxWidth: '800px' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-orange)',
              background: 'rgba(255, 90, 0, 0.08)',
              padding: '6px 16px',
              borderRadius: '100px',
              border: '1px solid rgba(255, 90, 0, 0.15)',
              display: 'inline-block',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-body)',
            }}
          >
            Engineering Showcase
          </span>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              fontWeight: 800,
              color: '#FFF8F1',
              letterSpacing: '-0.03em',
              margin: '0 0 1rem 0',
              lineHeight: 1.1,
            }}
          >
            Crafting Digital Platforms
          </h1>
          <p
            style={{
              color: 'rgba(255, 248, 241, 0.7)',
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              lineHeight: 1.6,
              margin: '0 auto',
              maxWidth: '600px',
              fontFamily: 'var(--font-body)',
            }}
          >
            A selective window into our real-time POS cores, custom e-commerce engines, and production-grade AI pipelines.
          </p>
        </div>
      </section>

      {/* ── 2. Showcase Grid & Categories ────────── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          
          {/* Categories Pill selectors */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
            {["All", "Enterprise Software", "Web Development", "AI Solutions", "Automation"].map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '100px',
                    border: isActive ? '1px solid var(--color-orange)' : '1px solid rgba(255, 248, 241, 0.08)',
                    background: isActive ? 'var(--color-orange)' : 'rgba(255, 248, 241, 0.02)',
                    color: isActive ? '#fff' : 'rgba(255, 248, 241, 0.7)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    fontFamily: 'var(--font-body)',
                    boxShadow: isActive ? '0 4px 15px rgba(255, 90, 0, 0.2)' : 'none',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  style={{
                    background: 'var(--color-espresso)',
                    border: '1px solid rgba(255, 90, 0, 0.06)',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 20px 40px rgba(20,9,10,0.3)',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Neon top line on hover */}
                  <div
                    className="hover-neon"
                    style={{
                      height: '2px',
                      background: 'var(--color-orange)',
                      width: '100%',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                      transformOrigin: 'left',
                    }}
                  />

                  {/* Thumbnail cover color gradient */}
                  <div
                    style={{
                      height: '220px',
                      background: project.coverImage,
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Floating pill tags */}
                    <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', display: 'flex', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#fff', background: 'rgba(20,9,10,0.6)', padding: '4px 10px', borderRadius: '100px', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
                        {project.year}
                      </span>
                    </div>

                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '50%',
                        background: 'rgba(255,248,241,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,248,241,0.2)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <Eye size={22} color="#fff" />
                    </div>
                  </div>

                  {/* Description details content */}
                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {project.client}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(255,248,241,0.5)', fontWeight: 600 }}>
                        {project.industry}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: '1.35rem', fontWeight: 800, color: '#FFF8F1', margin: 0, letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                      {project.title}
                    </h3>
                    
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,248,241,0.6)', lineHeight: 1.6, margin: 0 }}>
                      {project.subtitle}
                    </p>

                    {/* Bottom layout elements */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,248,241,0.06)', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        {project.technologies.slice(0, 2).map(tech => (
                          <span key={tech} style={{ fontSize: '0.65rem', color: 'rgba(255,248,241,0.5)', background: 'rgba(255,248,241,0.03)', border: '1px solid rgba(255,248,241,0.08)', padding: '2px 8px', borderRadius: '4px' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-orange)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Case Study <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ── 3. Bespoke CTA Consultation Call ────── */}
      <section style={{ background: '#14090A', paddingBottom: '6rem' }}>
        <div className="container">
          <div
            style={{
              background: 'var(--color-espresso)',
              backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(255, 90, 0, 0.05) 0%, transparent 60%)',
              border: '1px solid rgba(255, 90, 0, 0.08)',
              borderRadius: '32px',
              padding: '5rem 2.5rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#FFF8F1', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Let's Build Something Significant
              </h3>
              <p style={{ color: 'rgba(255, 248, 241, 0.65)', lineHeight: 1.6, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
                Have a challenging POS synchronization problem, custom payment checkout pipeline, or AI pipeline you'd like to implement? We'd love to hear from you.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <Link
                  to="/contact"
                  style={{
                    background: 'var(--color-orange)',
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '1rem 2.5rem',
                    borderRadius: '16px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    boxShadow: '0 8px 24px rgba(255, 90, 0, 0.25)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Narrative modal overlays ────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(20, 9, 10, 0.8)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 15, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              style={{
                width: '100%',
                maxWidth: '780px',
                maxHeight: '90vh',
                background: 'var(--color-espresso)',
                borderRadius: '32px',
                border: '1px solid rgba(255,90,0,0.12)',
                boxShadow: '0 30px 100px rgba(20,9,10,0.5)',
                overflowY: 'auto',
                position: 'relative',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Cover visual banner */}
              <div style={{ height: '180px', background: selectedProject.coverImage, position: 'relative' }}>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    background: 'rgba(20,9,10,0.7)',
                    color: '#fff',
                    border: '1px solid rgba(255,248,241,0.15)',
                    borderRadius: '100px',
                    padding: '0.5rem 1.25rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)'
                  }}
                >
                  <ArrowLeft size={16} /> Back
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '2.5rem' }}>
                
                {/* Header */}
                <div style={{ borderBottom: '1px solid rgba(255,248,241,0.08)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 850, color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {selectedProject.category}
                    </span>
                    <span style={{ color: 'rgba(255,248,241,0.2)' }}>•</span>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,248,241,0.4)', fontWeight: 600 }}>Launch Year {selectedProject.year}</span>
                  </div>

                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: '1.85rem', fontWeight: 800, color: '#FFF8F1', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                    {selectedProject.title}
                  </h2>
                </div>

                {/* Grid info stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', background: 'rgba(255,248,241,0.02)', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,248,241,0.06)', marginBottom: '2rem' }}>
                  <div>
                    <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,248,241,0.4)', display: 'block', marginBottom: '4px' }}>Client</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF8F1' }}>{selectedProject.client}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,248,241,0.4)', display: 'block', marginBottom: '4px' }}>Industry</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF8F1' }}>{selectedProject.industry}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,248,241,0.4)', display: 'block', marginBottom: '4px' }}>Timeline</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF8F1' }}>{selectedProject.timeline}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,248,241,0.4)', display: 'block', marginBottom: '4px' }}>Team Size</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF8F1' }}>{selectedProject.teamSize}</span>
                  </div>
                </div>

                {/* Narrative: Challenge & Solution */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2.5rem' }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: '1.15rem', fontWeight: 700, color: '#FFF8F1', marginBottom: '0.5rem' }}>Overview</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,248,241,0.7)', lineHeight: 1.65, margin: 0 }}>{selectedProject.description}</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
                    <div>
                      <h4 style={{ fontSize: '0.825rem', fontWeight: 700, color: '#FFF8F1', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Challenge</h4>
                      <p style={{ fontSize: '0.825rem', color: 'rgba(255,248,241,0.6)', lineHeight: 1.55, margin: 0 }}>{selectedProject.challenge}</p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.825rem', fontWeight: 700, color: '#FFF8F1', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Solution</h4>
                      <p style={{ fontSize: '0.825rem', color: 'rgba(255,248,241,0.6)', lineHeight: 1.55, margin: 0 }}>{selectedProject.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics cards */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: '1.15rem', fontWeight: 700, color: '#FFF8F1', marginBottom: '1rem' }}>Business Outcomes</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    {selectedProject.metrics.map((m, i) => (
                      <div key={i} style={{ background: 'rgba(255,248,241,0.01)', border: '1px solid rgba(255,248,241,0.06)', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: '1.65rem', fontWeight: 800, color: 'var(--color-orange)', lineHeight: 1, marginBottom: '0.35rem' }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.675rem', color: 'rgba(255,248,241,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Services list */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', borderTop: '1px solid rgba(255,248,241,0.08)', paddingTop: '2rem', marginBottom: '2.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '0.825rem', fontWeight: 700, color: '#FFF8F1', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tech Stack</h4>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {selectedProject.technologies.map(t => (
                        <span key={t} style={{ fontSize: '0.725rem', color: 'rgba(255,248,241,0.6)', background: 'rgba(255,248,241,0.02)', border: '1px solid rgba(255,248,241,0.06)', padding: '4px 10px', borderRadius: '6px' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.825rem', fontWeight: 700, color: '#FFF8F1', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Services</h4>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {selectedProject.services.map(s => (
                        <span key={s} style={{ fontSize: '0.725rem', color: 'var(--color-orange)', background: 'rgba(255,90,0,0.05)', border: '1px solid rgba(255,90,0,0.12)', padding: '4px 10px', borderRadius: '6px', fontWeight: 600 }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial block */}
                {selectedProject.testimonial && (
                  <div style={{ background: 'rgba(255,90,0,0.01)', border: '1px solid rgba(255,90,0,0.06)', borderRadius: '20px', padding: '1.75rem', marginBottom: '2rem' }}>
                    <blockquote style={{ fontSize: '0.875rem', color: 'rgba(255,248,241,0.7)', lineHeight: 1.6, fontStyle: 'italic', margin: '0 0 1.25rem 0' }}>
                      "{selectedProject.testimonial.review}"
                    </blockquote>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div className="avatar-circle" style={{ width: '36px', height: '36px', fontSize: '0.8rem', margin: 0, background: 'var(--color-orange)', color: '#fff', fontWeight: 700 }}>
                        {selectedProject.testimonial.avatar}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF8F1' }}>{selectedProject.testimonial.reviewer}</div>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,248,241,0.4)', fontWeight: 500 }}>{selectedProject.testimonial.role} · {selectedProject.testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', borderTop: '1px solid rgba(255,248,241,0.08)', paddingTop: '1.5rem' }}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255,248,241,0.15)',
                      color: 'rgba(255,248,241,0.8)',
                      padding: '0.6rem 1.5rem',
                      borderRadius: '10px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    Close Case
                  </button>
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'var(--color-orange)',
                      color: '#fff',
                      textDecoration: 'none',
                      padding: '0.6rem 1.5rem',
                      borderRadius: '10px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      boxShadow: '0 4px 15px rgba(255, 90, 0, 0.2)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    Launch Live Demo <ExternalLink size={14} />
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
