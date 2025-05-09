import { Book, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Eastern Michigan University",
    location: "Ypsilanti, MI",
    period: "Aug 2023 - Apr 2025",
    gpa: "3.88/4"
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Sreenidhi Institute of Science and Technology",
    location: "Hyderabad, Telangana",
    period: "Aug 2019 - May 2023",
    gpa: "3.87/4"
  }
];

const EducationSection = () => {
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

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 
          className="section-header opacity-0 translate-y-10 transition-all duration-700 ease-out"
          ref={sectionRef}
        >
          Education
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="card-hover opacity-0 translate-y-10 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    <Book className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-lg font-medium mb-3">{edu.institution}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar size={16} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="mt-3 px-3 py-1 inline-block bg-primary/10 rounded-md text-primary text-sm font-medium">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
