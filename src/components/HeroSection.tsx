import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const textElements = useRef<(HTMLParagraphElement | HTMLHeadingElement | HTMLDivElement | null)[]>([]);

  useEffect(() => {
    textElements.current.forEach((element, index) => {
      if (!element) return;
      setTimeout(() => {
        element.classList.add("opacity-100", "translate-y-0");
      }, index * 200);
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

      if (bg1) (bg1 as HTMLElement).style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      if (bg2) (bg2 as HTMLElement).style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
      if (bg3) (bg3 as HTMLElement).style.transform = `translate(${x * -15}px, ${y * 15}px) rotate(${x * 5}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Add smooth scrolling function
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12 md:py-24">
      {/* Background visuals */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-0 transition-opacity duration-1000"></div>
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-0 transition-all duration-1500 bg-element-1"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-0 transition-all duration-1500 bg-element-2"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-2xl opacity-0 transition-all duration-1500 bg-element-3"></div>
      </div>

      {/* Content container */}
      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Dashboard Console Interface */}
        <div className="flex-shrink-0 w-1/3">
          <div className="relative">
            {/* Main Dashboard */}
            <div className="bg-black/90 border border-primary/30 rounded-lg p-4 shadow-2xl shadow-primary/20">
              <div className="border-b border-primary/20 pb-2 mb-4">
                <div className="flex items-center justify-between text-green-400 font-mono text-xs">
                  <span>■ ANALYST CONSOLE</span>
                  <span className="animate-pulse">●</span>
                </div>
              </div>
              
              <div className="space-y-2 text-green-400 font-mono text-xs">
                <div className="flex justify-between">
                  <span>System:</span>
                  <span className="text-blue-400">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span>Role:</span>
                  <span className="text-yellow-400">DATA ANALYST</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-green-400 animate-pulse">SEEKING</span>
                </div>
                <div className="border-t border-primary/20 pt-2 mt-2">
                  <div className="text-xs text-muted-foreground">Skills Loading...</div>
                  <div className="w-full bg-primary/20 rounded h-1 mt-1">
                    <div className="bg-primary h-1 rounded animate-pulse" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Data Chips */}
            <div className="absolute -top-4 -right-4 bg-primary/10 border border-primary/30 rounded px-2 py-1 text-xs font-mono text-primary animate-bounce">
              SQL
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent/10 border border-accent/30 rounded px-2 py-1 text-xs font-mono text-accent animate-bounce" style={{animationDelay: '0.5s'}}>
              Python
            </div>
            <div className="absolute top-1/2 -right-6 bg-secondary/10 border border-secondary/30 rounded px-2 py-1 text-xs font-mono text-secondary animate-bounce" style={{animationDelay: '1s'}}>
              Tableau
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-2/3 text-center md:text-left">
          <p
            ref={(el) => (textElements.current[0] = el)}
            className="text-lg font-medium text-primary mb-4 opacity-0 -translate-y-10 transition-all duration-700 animate-float"
          >
            Hello, I'm
          </p>

          <h1
            ref={(el) => (textElements.current[1] = el)}
            className="text-5xl md:text-6xl font-bold mb-6 opacity-0 -translate-y-10 transition-all duration-700 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-x"
          >
            Umadevi Thulluru
          </h1>

          <h2
            ref={(el) => (textElements.current[2] = el)}
            className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8 opacity-0 -translate-y-10 transition-all duration-700"
          >
            Data & Business Analyst | Dashboard Expert
          </h2>

          <p
            ref={(el) => (textElements.current[3] = el)}
            className="text-lg mb-6 opacity-0 -translate-y-10 transition-all duration-700"
          >
            Transforming raw data into actionable insights through advanced analytics, interactive dashboards, and strategic business intelligence. With expertise in data pipelines, visualization tools, and statistical analysis, I excel at uncovering trends and driving data-informed decision making.
          </p>

          <p
            ref={(el) => (textElements.current[4] = el)}
            className="text-lg mb-10 opacity-0 -translate-y-10 transition-all duration-700"
          >
           Currently seeking Business Analyst and Data Analyst opportunities where I can leverage my analytical skills, technical expertise, and passion for storytelling with data to drive organizational success.
          </p>

          <div
            ref={(el) => (textElements.current[5] = el)}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 opacity-0 -translate-y-10 transition-all duration-700"
          >
            <Button 
              size="lg" 
              className="relative overflow-hidden group animate-pulse-subtle"
              onClick={() => scrollToSection("projects")}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-50 group-hover:opacity-70 transition-opacity"></span>
              <span className="relative z-10">
                View Analytics Projects
              </span>
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              className="relative overflow-hidden group"
              onClick={() => scrollToSection("contact")}
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary to-accent opacity-20 group-hover:w-full transition-all duration-300"></span>
              <span className="relative z-10">
                Get In Touch
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
