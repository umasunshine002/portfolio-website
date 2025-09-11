import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart3, Brain, Terminal } from "lucide-react";

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const professionalSummary = [
    "Detail-oriented Business & Data Analyst with strong foundation in computer science",
    "Hands-on experience bridging technical solutions with business needs",
    "Skilled in analyzing processes, building dashboards, and delivering actionable insights",
    "Proven expertise in ML-ready datasets, automated workflows, and cloud platforms"
  ];

  const coreCompetencies = [
    { category: "Analytics", skills: ["Statistical Analysis", "Data Mining", "Predictive Modeling", "Business Intelligence"], icon: BarChart3, color: "text-blue-500" },
    { category: "Programming", skills: ["Python", "SQL", "Java", "JavaScript"], icon: Code, color: "text-green-500" },
    { category: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB", "BigQuery"], icon: Database, color: "text-purple-500" },
    { category: "AI/ML", skills: ["Scikit-learn", "Pandas", "NumPy", "Keras"], icon: Brain, color: "text-orange-500" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-center mb-16">Professional Summary</h2>
        
        <div
          ref={aboutRef}
          className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
        >
          {/* Console-Style Summary */}
          <Card className="mb-12 border border-primary/20 bg-black/90 text-green-400">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-accent/20 border-b border-primary/20">
              <CardTitle className="font-mono text-sm flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                analyst@profile-summary:~$ cat professional_overview.txt
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 font-mono text-sm space-y-3">
              {professionalSummary.map((point, index) => (
                <div key={index} className="flex">
                  <span className="text-yellow-400 mr-3">{index + 1}.</span>
                  <span>{point}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Core Competencies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCompetencies.map((competency, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <competency.icon className={`w-6 h-6 ${competency.color}`} />
                  </div>
                  <CardTitle className="text-lg">{competency.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {competency.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="w-full justify-center text-xs bg-secondary/20 hover:bg-secondary/40 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;