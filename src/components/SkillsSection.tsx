import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, TrendingUp, Brain } from "lucide-react";

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  const analyticsSkills = [
    { name: "SQL & Database Management", level: 95, category: "Data Management" },
    { name: "Python (Pandas, NumPy)", level: 90, category: "Programming" },
    { name: "Data Visualization", level: 88, category: "Visualization" },
    { name: "Statistical Analysis", level: 85, category: "Analytics" },
    { name: "Business Intelligence Tools", level: 82, category: "BI Tools" },
    { name: "ETL/Data Pipelines", level: 87, category: "Data Engineering" },
    { name: "Excel Advanced Analytics", level: 93, category: "Analytics" },
    { name: "Machine Learning", level: 78, category: "AI/ML" }
  ];

  const tools = [
    { name: "Power BI", category: "BI" },
    { name: "Tableau", category: "BI" },
    { name: "Looker Studio", category: "BI" },
    { name: "Apache Spark", category: "Big Data" },
    { name: "Kafka", category: "Streaming" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "GCP", category: "Cloud" },
    { name: "dbt", category: "Data Tools" },
    { name: "Kestra", category: "Orchestration" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (skillsRef.current) observer.observe(skillsRef.current);
    if (chartRef.current) observer.observe(chartRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (chartRef.current) observer.unobserve(chartRef.current);
    };
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Data Management":
      case "Database":
        return Database;
      case "BI Tools":
      case "BI":
        return BarChart3;
      case "Analytics":
        return TrendingUp;
      case "AI/ML":
        return Brain;
      default:
        return BarChart3;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Data Management": "bg-blue-500/10 text-blue-600",
      "Programming": "bg-green-500/10 text-green-600",
      "Visualization": "bg-purple-500/10 text-purple-600",
      "Analytics": "bg-orange-500/10 text-orange-600",
      "BI Tools": "bg-pink-500/10 text-pink-600",
      "Data Engineering": "bg-cyan-500/10 text-cyan-600",
      "AI/ML": "bg-red-500/10 text-red-600",
      "BI": "bg-purple-500/10 text-purple-600",
      "Big Data": "bg-indigo-500/10 text-indigo-600",
      "Streaming": "bg-yellow-500/10 text-yellow-600",
      "Database": "bg-blue-500/10 text-blue-600",
      "Cloud": "bg-sky-500/10 text-sky-600",
      "Data Tools": "bg-emerald-500/10 text-emerald-600",
      "Orchestration": "bg-violet-500/10 text-violet-600"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-600";
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-center opacity-100 mb-16">Analytics & Data Skills</h2>
        
        {/* Skills Proficiency Chart */}
        <div
          ref={chartRef}
          className="grid md:grid-cols-2 gap-8 mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Skills Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {analyticsSkills.map((skill, index) => {
                const IconComponent = getCategoryIcon(skill.category);
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className={`${getCategoryColor(tool.category)} transition-all duration-300 hover:scale-105`}
                  >
                    {tool.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

