import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Code2, Database, Brain, BarChart3, Terminal, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const textElements = useRef<(HTMLParagraphElement | HTMLHeadingElement | HTMLDivElement | null)[]>([]);
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    "Software Engineer",
    "Data Engineer", 
    "ML/AI Specialist",
    "Business Analyst"
  ];

  useEffect(() => {
    textElements.current.forEach((element, index) => {
      if (!element) return;
      setTimeout(() => {
        element.classList.add("opacity-100", "translate-y-0");
      }, index * 150);
    });

    const bg1 = document.querySelector(".bg-element-1");
    const bg2 = document.querySelector(".bg-element-2");
    const bg3 = document.querySelector(".bg-element-3");

    if (bg1 && bg2 && bg3) {
      setTimeout(() => {
        bg1.classList.add("opacity-30");
        bg2.classList.add("opacity-30");
        bg3.classList.add("opacity-20");
      }, 300);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (bg1) (bg1 as HTMLElement).style.transform = `translate(${x * 30}px, ${y * 30}px) scale(1.1)`;
      if (bg2) (bg2 as HTMLElement).style.transform = `translate(${-x * 40}px, ${-y * 40}px) scale(1.1)`;
      if (bg3) (bg3 as HTMLElement).style.transform = `translate(${x * -20}px, ${y * 20}px) rotate(${x * 10}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typing animation for roles
  useEffect(() => {
    let currentText = "";
    let charIndex = 0;
    const currentRole = roles[currentRoleIndex];
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        currentText += currentRole[charIndex];
        setTypedText(currentText);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (currentText.length > 0) {
              currentText = currentText.slice(0, -1);
              setTypedText(currentText);
            } else {
              clearInterval(deleteInterval);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start" 
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 md:py-32">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-0 transition-all duration-2000 bg-element-1 animate-pulse-slight"></div>
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-0 transition-all duration-2000 bg-element-2 animate-pulse-slight"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-secondary/30 rounded-full blur-2xl opacity-0 transition-all duration-2000 bg-element-3 animate-float"></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="glass-card p-4 neon-glow">
            <Database className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        <div className="absolute top-32 right-20 animate-float" style={{animationDelay: '1s'}}>
          <div className="glass-card p-4 neon-glow">
            <Brain className="w-6 h-6 text-accent" />
          </div>
        </div>
        
        <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="glass-card p-4 neon-glow">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: '3s'}}>
          <div className="glass-card p-4 neon-glow">
            <BarChart3 className="w-6 h-6 text-accent" />
          </div>
        </div>

        {/* Data flow lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent data-flow"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent data-flow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent data-flow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Intro tag */}
          <div
            ref={(el) => (textElements.current[0] = el)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 opacity-0 -translate-y-10 transition-all duration-700"
          >
            <Terminal className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name with gradient */}
          <h1
            ref={(el) => (textElements.current[1] = el)}
            className="text-6xl md:text-8xl font-bold opacity-0 -translate-y-10 transition-all duration-700"
          >
            <span className="gradient-text">Umadevi Thulluru</span>
          </h1>

          {/* Dynamic typing role */}
          <div
            ref={(el) => (textElements.current[2] = el)}
            className="h-12 md:h-16 opacity-0 -translate-y-10 transition-all duration-700"
          >
            <p className="text-3xl md:text-4xl font-bold text-foreground">
              {typedText}
              <span className="typing-cursor text-primary"></span>
            </p>
          </div>

          {/* Tagline */}
          <p
            ref={(el) => (textElements.current[3] = el)}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 -translate-y-10 transition-all duration-700 leading-relaxed"
          >
            Building scalable ML systems, end-to-end data pipelines, and actionable analytics solutions.
            <br />
            <span className="text-primary font-semibold">MS in Computer Science</span> with{" "}
            <span className="text-accent font-semibold">3.88 GPA</span>
          </p>

          {/* Stats bar */}
          <div
            ref={(el) => (textElements.current[4] = el)}
            className="flex flex-wrap justify-center gap-6 md:gap-8 py-6 opacity-0 -translate-y-10 transition-all duration-700"
          >
            <div className="glass-card px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold gradient-text">3.88</div>
              <div className="text-xs text-muted-foreground mt-1">GPA</div>
            </div>
            <div className="glass-card px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold gradient-text">1M+</div>
              <div className="text-xs text-muted-foreground mt-1">Events Processed</div>
            </div>
            <div className="glass-card px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold gradient-text">40%</div>
              <div className="text-xs text-muted-foreground mt-1">Efficiency Boost</div>
            </div>
            <div className="glass-card px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold gradient-text">84%</div>
              <div className="text-xs text-muted-foreground mt-1">ML Accuracy</div>
            </div>
          </div>

          {/* CTAs */}
          <div
            ref={(el) => (textElements.current[5] = el)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 -translate-y-10 transition-all duration-700"
          >
            <Button 
              size="lg" 
              className="relative overflow-hidden group px-8 py-6 text-lg neon-glow"
              onClick={() => scrollToSection("projects")}
            >
              <span className="relative z-10 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                View Projects
              </span>
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              className="relative overflow-hidden group px-8 py-6 text-lg border-primary/30 hover:border-primary"
              onClick={() => scrollToSection("contact")}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </span>
            </Button>
          </div>

          {/* Social links */}
          <div
            ref={(el) => (textElements.current[6] = el)}
            className="flex items-center justify-center gap-4 opacity-0 -translate-y-10 transition-all duration-700"
          >
            <a 
              href="https://github.com/Umadevithulluru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:scale-110 transition-transform neon-glow"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/umadevithulluru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:scale-110 transition-transform neon-glow"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="mailto:umathulluru02@gmail.com"
              className="glass-card p-3 rounded-full hover:scale-110 transition-transform neon-glow"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;