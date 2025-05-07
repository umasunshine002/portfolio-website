
import { User, Code, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    "Python", "Java", "C++", "JavaScript", "HTML", "CSS", "PHP", "SQL", 
    "JavaFX", "Flask", "AWS", "GCP", "dbt", "Kestra", "Kafka", "Spark", 
    "Terraform", "Docker", "ETL", "React", "NumPy", "Pandas", "MongoDB", 
    "OpenCV", "Node.js"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-header">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <User className="mr-2 text-primary" size={20} />
                Who I Am
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm a Data Engineer and Full Stack Developer with a Master's degree in Computer Science. 
                I specialize in building scalable data pipelines, analytics solutions, and robust applications. 
                My passion lies in turning complex data problems into valuable insights and creating efficient, 
                user-friendly applications.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Code className="mr-2 text-primary" size={20} />
                What I Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I build end-to-end data solutions, develop full-stack applications, and implement cloud infrastructure.
                With experience in GCP and AWS, I create efficient data pipelines, design analytics-ready data models,
                and develop interactive dashboards and applications that solve real-world problems.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Award className="mr-2 text-primary" size={20} />
                My Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I believe in building reliable, scalable, and maintainable solutions. I'm committed to 
                continuous learning and staying updated with the latest technologies. I approach problems 
                methodically and enjoy collaborating with teams to deliver high-quality results that exceed expectations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="tech-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
