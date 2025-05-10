import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image on the left */}
          <div className="flex-shrink-0">
            <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 border-4 border-primary/20 shadow-xl">
              <img
                src="/lovable-uploads/9a26e5a1-3506-488a-a363-6a6e2b94a51f.png"
                alt="Umadevi Thulluru"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text on the right */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg font-medium text-primary mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Umadevi Thulluru
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8">
              Computer Science Graduate & Tech Enthusiast
            </h2>

            <p className="text-lg mb-6">
              Driven by a passion for crafting meaningful solutions through code, I bring a solid foundation in Computer Science and hands-on experience in real-time data pipelines, cloud technologies, and full-stack development. I thrive at the intersection of creativity and technology—translating ideas into impactful, user-centered applications.
            </p>

            <p className="text-lg mb-10">
              Currently seeking opportunities where I can contribute, collaborate, and continue growing as a developer, while solving real-world challenges through innovative engineering.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#projects">View My Projects</a>
              </Button>

              <Button size="lg" variant="outline" className="border-primary hover:bg-primary/10">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

