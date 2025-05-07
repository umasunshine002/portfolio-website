
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <div className="animate-fade-in">
            <p className="text-lg font-medium text-primary mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Umadevi Thulluru
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Computer Science Graduate & Tech Enthusiast
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              Passionate about building meaningful solutions through code. 
              Currently exploring opportunities where I can contribute and grow my skills.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <Button size="lg" className="relative overflow-hidden group">
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

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll down">
              <ArrowDown size={24} className="text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
