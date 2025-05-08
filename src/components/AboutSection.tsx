import { useEffect, useRef } from "react";

const AboutSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    "Python", "Java", "C++", "JavaScript", "HTML", "CSS", "PHP", "SQL", 
    "JavaFX", "Flask", "AWS", "GCP", "dbt", "Kestra", "Kafka", "Spark", 
    "Terraform", "Docker", "ETL", "React", "NumPy", "Pandas", "MongoDB", 
    "OpenCV", "Node.js"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    });

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-center opacity-100 mb-10">Skills</h2>
        <div
          ref={skillsRef}
          className="flex flex-wrap gap-2 justify-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
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
    </section>
  );
};

export default AboutSection;

