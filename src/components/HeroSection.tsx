
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-hero-pattern">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <div className="animate-fade-in">
            <p className="text-lg font-medium text-primary mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Umadevi Thulluru
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8">
              Computer Science Graduate & Tech Enthusiast
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto md:mx-0">
              Passionate about building meaningful solutions through code. 
              Currently exploring opportunities in data processing and web development
              where I can contribute and grow my skills.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View My Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
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
