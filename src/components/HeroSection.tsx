import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const textElements = useRef<(HTMLParagraphElement | HTMLHeadingElement | HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Text animation
    textElements.current.forEach((element, index) => {
      if (!element) return;
      setTimeout(() => {
        element.classList.add("opacity-100", "translate-y-0");
      }, index * 200);
    });

    // Particle animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(99, 102, 241, ${Math.random() * 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };
    animate();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      particles.forEach(particle => {
        const dx = e.clientX - particle.x;
        const dy = e.clientY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          particle.speedX = -dx * 0.02;
          particle.speedY = -dy * 0.02;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12 md:py-24">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Content container */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image on the left */}
          <div className="flex-shrink-0 w-1/3">
            <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 border-4 border-primary/20 shadow-xl shadow-primary/10 relative transition-all duration-1000 ease-out hover:rotate-3 hover:scale-105 group">
              <img
                src="/lovable-uploads/9a26e5a1-3506-488a-a363-6a6e2b94a51f.png"
                alt="Umadevi Thulluru"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Text on the right */}
          <div className="flex-1 text-center md:text-left">
            <p
              ref={(el) => (textElements.current[0] = el)}
              className="text-lg font-medium text-primary mb-4 opacity-0 -translate-y-10 transition-all duration-700 animate-float"
            >
              Hello, I'm
            </p>

            <h1
              ref={(el) => (textElements.current[1] = el)}
              className="text-5xl md:text-6xl font-bold mb-6 opacity-0 -translate-y-10 transition-all duration-700 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x"
            >
              Umadevi Thulluru
            </h1>

            <h2
              ref={(el) => (textElements.current[2] = el)}
              className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8 opacity-0 -translate-y-10 transition-all duration-700"
            >
              Computer Science Graduate & Tech Enthusiast
            </h2>

            <p
              ref={(el) => (textElements.current[3] = el)}
              className="text-lg mb-6 opacity-0 -translate-y-10 transition-all duration-700"
            >
              Driven by a passion for crafting meaningful solutions through code, I bring a solid foundation in Computer Science and hands-on experience in real-time data pipelines, cloud technologies, and full-stack development. I thrive at the intersection of creativity and technology—translating ideas into impactful, user-centered applications.
            </p>

            <p
              ref={(el) => (textElements.current[4] = el)}
              className="text-lg mb-10 opacity-0 -translate-y-10 transition-all duration-700"
            >
              Currently seeking opportunities where I can contribute, collaborate, and continue growing as a developer, while solving real-world challenges through innovative engineering.
            </p>

            <div
              ref={(el) => (textElements.current[5] = el)}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 opacity-0 -translate-y-10 transition-all duration-700"
            >
              <Button size="lg" className="relative overflow-hidden group animate-pulse-subtle">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-50 group-hover:opacity-70 transition-opacity"></span>
                <span className="relative z-10">
                  <a href="#projects">View My Projects</a>
                </span>
              </Button>

              <Button size="lg" variant="outline" className="relative overflow-hidden group">
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary to-accent opacity-20 group-hover:w-full transition-all duration-300"></span>
                <span className="relative z-10">
                  <a href="#contact">Get In Touch</a>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

