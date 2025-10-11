import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Terminal, Cpu, Brain, Sparkles } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const FuturisticHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Neural network canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes: Array<{x: number; y: number; vx: number; vy: number}> = [];
    const numNodes = 50;

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(14, 18, 27, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#00D9FF";
        ctx.fill();

        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1A1F2E] via-[#252B3D] to-[#1A1F2E]">
      {/* Neural network background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Particle background */}
      <ParticleBackground />

      {/* Scanline effect */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-10">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[hsl(var(--cyber-blue))] to-transparent animate-[scanline_8s_linear_infinite]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-10 circuit-pattern opacity-30" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto space-y-8"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card neon-border"
          >
            <div className="w-2 h-2 bg-[hsl(var(--neon-glow))] rounded-full animate-pulse" />
            <span className="text-sm font-mono text-[hsl(var(--cyber-blue))]">
              <Terminal className="w-3 h-3 inline mr-1" />
              SYSTEM.STATUS → AVAILABLE
            </span>
          </motion.div>

          {/* Main heading with highlighted name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-foreground" style={{ textShadow: "0 0 60px hsl(var(--cyber-blue) / 0.7)" }}>
                Umadevi Thulluru
              </span>
            </h1>
            <p className="text-xl md:text-3xl font-semibold mb-6">
              <span className="gradient-text">
                Turning caffeine and code into intelligent systems.
              </span>
            </p>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-16"
          >
            Computer Science Engineer passionate about crafting intelligent, data-driven systems that bridge AI, software, and creativity.
          </motion.p>

          {/* Passion Pillars - Smaller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16"
          >
            {[
              {
                icon: Brain,
                title: "AI & ML",
                subtitle: "Data to understanding",
                color: "hsl(var(--cyber-blue))"
              },
              {
                icon: Cpu,
                title: "Data & Cloud",
                subtitle: "Raw data to systems",
                color: "hsl(var(--cyber-violet))"
              },
              {
                icon: Terminal,
                title: "Software & OS",
                subtitle: "Ground-up engineering",
                color: "hsl(var(--neon-glow))"
              },
              {
                icon: Sparkles,
                title: "Creative Tech",
                subtitle: "Edge of intelligence",
                color: "hsl(200 100% 50%)"
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-4 rounded-xl neon-border group cursor-pointer"
              >
                <div 
                  className="w-10 h-10 rounded-lg mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110 mx-auto"
                  style={{ backgroundColor: `${pillar.color}20` }}
                >
                  <pillar.icon className="w-5 h-5" style={{ color: pillar.color }} />
                </div>
                <h3 className="text-sm font-bold mb-1 gradient-text text-center">{pillar.title}</h3>
                <p className="text-xs text-muted-foreground text-center">{pillar.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group relative overflow-hidden px-8 py-6 text-lg neon-glow bg-[hsl(var(--cyber-blue))] hover:bg-[hsl(var(--cyber-blue))] border-2 border-[hsl(var(--cyber-blue))]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work ↓
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--cyber-blue))] via-[hsl(var(--cyber-violet))] to-[hsl(var(--neon-glow))] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            {[
              { icon: Github, href: "https://github.com/Umadevithulluru", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/umadevithulluru/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:umathulluru02@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card neon-border p-4 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--cyber-blue))]/50 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-[hsl(var(--cyber-blue))]" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <ArrowDown className="w-8 h-8 text-[hsl(var(--cyber-blue))]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturisticHero;