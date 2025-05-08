
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const skills = [
    "Python", "Java", "C++", "JavaScript", "HTML", "CSS", "PHP", "SQL", 
    "JavaFX", "Flask", "AWS", "GCP", "dbt", "Kestra", "Kafka", "Spark", 
    "Terraform", "Docker", "ETL", "React", "NumPy", "Pandas", "MongoDB", 
    "OpenCV", "Node.js"
  ];
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          if (entry.target === imageRef.current) {
            entry.target.classList.add('scale-100', 'rotate-0');
          } else {
            entry.target.classList.add('translate-y-0');
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 
          ref={sectionRef} 
          className="section-header text-center md:text-left opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 flex justify-center">
            <div 
              ref={imageRef} 
              className="rounded-full overflow-hidden w-64 h-64 border-4 border-primary/20 shadow-xl shadow-primary/10 relative opacity-0 scale-90 rotate-6 transition-all duration-1000 ease-out hover:rotate-3 hover:scale-105"
            >
              <img 
                src="/lovable-uploads/9a26e5a1-3506-488a-a363-6a6e2b94a51f.png" 
                alt="Umadevi Thulluru" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="md:col-span-2">
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-6 text-foreground/90">Technical Skills</h3>
                <div 
                  ref={skillsRef} 
                  className="flex flex-wrap gap-2 opacity-0 translate-y-10 transition-all duration-700 delay-500 ease-out"
                >
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="tech-tag transform transition-all hover:scale-110 hover:shadow-md hover:bg-primary/20"
                      style={{ 
                        animationDelay: `${index * 50}ms`, 
                        transitionDelay: `${index * 30}ms`,
                        animation: `float ${2 + (index % 3)}s ease-in-out infinite` 
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
