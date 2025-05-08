
import { Code, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, delay = 0 }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <Card 
      className="flex flex-col h-full card-hover overflow-hidden opacity-0 translate-y-10 transition-all duration-700 ease-out"
      ref={cardRef}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <div className="bg-primary/10 rounded-full p-1.5">
            <Code size={16} className="text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-secondary/10 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-3 pt-0">
        {githubLink && (
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={14} />
              <span>Code</span>
            </a>
          </Button>
        )}
        {liveLink && (
          <Button size="sm" className="gap-1" asChild>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects = [
    {
      title: "Real-Time Sentiment Analysis",
      description: "Developed a scalable Django app for real-time sentiment analysis using Spark for processing, Kafka for streaming, and MongoDB for storage.",
      technologies: ["Apache Spark", "Kafka", "MongoDB", "Django", "Real-time Processing"],
      githubLink: "#"
    },
    {
      title: "Facial Recognition System",
      description: "Developed a facial recognition system using Python and OpenCV, integrating machine learning for precise identity verification.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      githubLink: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Built a feature-rich e-commerce platform with search functionality, user authentication, and Stripe integration for secure payment processing.",
      technologies: ["Node.js", "PHP", "AWS", "Stripe", "Authentication"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 
          className="section-header opacity-0 translate-y-10 transition-all duration-700 ease-out"
          ref={sectionRef}
        >
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              delay={index * 200} // Stagger the animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
