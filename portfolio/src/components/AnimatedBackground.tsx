import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  trail: { x: number; y: number; opacity: number }[];
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 20000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: Math.random() > 0.5 ? '#00ffff' : '#ff0080',
          trail: []
        });
      }
      
      particlesRef.current = particles;
    };

    const drawParticle = (particle: Particle) => {
      // Draw trail
      particle.trail.forEach((point, index) => {
        ctx.save();
        ctx.globalAlpha = point.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, particle.size * (index / particle.trail.length), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw main particle
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add cyberpunk glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = particle.color;
      ctx.fill();
      
      // Add inner glow
      ctx.globalAlpha = particle.opacity * 0.5;
      ctx.shadowBlur = 40;
      ctx.fill();
      ctx.restore();
    };

    const drawConnections = () => {
      const particles = particlesRef.current;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.3;
            
            // Create gradient line
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, particles[i].color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
            gradient.addColorStop(1, particles[j].color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawMatrix = () => {
      // Draw matrix-like falling characters
      ctx.fillStyle = 'rgba(0, 255, 255, 0.05)';
      ctx.font = '12px monospace';
      
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const char = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(char, x, y);
      }
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach(particle => {
        // Update trail
        particle.trail.unshift({ x: particle.x, y: particle.y, opacity: particle.opacity });
        if (particle.trail.length > 10) {
          particle.trail.pop();
        }
        
        // Update trail opacity
        particle.trail.forEach((point, index) => {
          point.opacity = particle.opacity * (1 - index / particle.trail.length) * 0.5;
        });

        // Mouse interaction with cyberpunk effect
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx -= (dx / distance) * force * 0.02;
          particle.vy -= (dy / distance) * force * 0.02;
          
          // Increase glow near mouse
          particle.opacity = Math.min(1, particle.opacity + force * 0.1);
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary collision with wrap-around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Add some randomness for cyberpunk feel
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Limit velocity
        const maxVel = 3;
        particle.vx = Math.max(-maxVel, Math.min(maxVel, particle.vx));
        particle.vy = Math.max(-maxVel, Math.min(maxVel, particle.vy));

        // Opacity animation
        particle.opacity += (Math.random() - 0.5) * 0.02;
        particle.opacity = Math.max(0.2, Math.min(1, particle.opacity));
      });
    };

    const animate = () => {
      // Create trailing effect instead of clearing completely
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      drawMatrix();
      drawConnections();
      
      particlesRef.current.forEach(drawParticle);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(45deg, #000000, #001122)' }}
    />
  );
};

export default AnimatedBackground;