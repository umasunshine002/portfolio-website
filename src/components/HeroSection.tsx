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
        {/* Image on the left */}
        <div className="flex-shrink-0 w-1/3">
          <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 border-4 border-primary/20 shadow-xl shadow-primary/10 relative transition-all duration-1000 ease-out hover:rotate-3 hover:scale-105">
            <img
              src="/lovable-uploads/9a26e5a1-3506-488a-a363-6a6e2b94a51f.png"
              alt="Umadevi Thulluru"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Text on the right */}
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
            Computer Science Graduate & Tech Enthusiast
          </h2>

          <p
            ref={(el) => (textElements.current[3] = el)}
            className="text-lg mb-6 opacity-0 -translate-y-10 transition-all duration-700"
          >
            Passionate about building meaningful solutions through code. I hold a degree in Computer Science and have
            experience working with real-time data pipelines, cloud platforms, and full-stack development. I love
            combining creativity and code to build impactful user experiences.
          </p>

          <p
            ref={(el) => (textElements.current[4] = el)}
            className="text-lg mb-10 opacity-0 -translate-y-10 transition-all duration-700"
          >
            Currently exploring opportunities where I can contribute and grow my skills.
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
  );
};

export default HeroSection;

