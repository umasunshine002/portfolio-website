
import { User, Code, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    "Python", "Java", "C++", "JavaScript", "HTML", "CSS", "PHP", "SQL", 
    "JavaFX", "Flask", "AWS", "GCP", "dbt", "Kestra", "Kafka", "Spark", 
    "Terraform", "Docker", "ETL", "React", "NumPy", "Pandas", "MongoDB", 
    "OpenCV", "Node.js"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-header">About Me</h2>
        
        <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-white to-muted/50">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed mb-8">
              I'm a Computer Science graduate with a passion for solving problems through technology. 
              During my studies and internships, I've gained experience with data systems and web development 
              projects. I enjoy working with data pipelines, building applications, and learning new 
              technologies. My goal is to continue growing as a developer and eventually contribute to 
              projects that make a positive impact.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-foreground/90">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
