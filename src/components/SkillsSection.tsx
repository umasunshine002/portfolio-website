import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, TrendingUp, Brain, Code, Cloud, Wrench, Cpu } from "lucide-react";

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  // Skills from resume with accurate proficiency levels
  const analyticsSkills = [
    { name: "SQL & Database Management", level: 95, category: "Data Management" },
    { name: "Python (Pandas, NumPy, Scikit-learn)", level: 92, category: "Programming" },
    { name: "Power BI & Tableau", level: 88, category: "BI Tools" },
    { name: "Statistical Analysis & ML", level: 85, category: "Analytics" },
    { name: "ETL/Data Pipelines (Kafka, Spark)", level: 87, category: "Data Engineering" },
    { name: "Cloud Platforms (AWS, GCP)", level: 83, category: "Cloud" },
    { name: "Java & JavaScript", level: 80, category: "Programming" },
    { name: "Docker & Terraform", level: 82, category: "DevOps" }
  ];

  // Comprehensive tools and technologies from resume
  const programmingLanguages = [
    { name: "Python", category: "Programming", color: "#3776ab" },
    { name: "SQL", category: "Database", color: "#336791" },
    { name: "Java", category: "Programming", color: "#f89820" },
    { name: "JavaScript", category: "Web Dev", color: "#f7df1e" },
    { name: "C++", category: "Programming", color: "#00599c" }
  ];

  const databases = [
    { name: "MySQL", category: "Relational", color: "#4479a1" },
    { name: "PostgreSQL", category: "Relational", color: "#336791" },
    { name: "MongoDB", category: "NoSQL", color: "#47a248" },
    { name: "BigQuery", category: "Cloud", color: "#4285f4" }
  ];

  const frameworks = [
    { name: "Django", category: "Web Framework", color: "#092e20" },
    { name: "Flask", category: "Web Framework", color: "#000000" },
    { name: "Streamlit", category: "Data Apps", color: "#ff4b4b" },
    { name: "Pandas", category: "Data Analysis", color: "#150458" },
    { name: "NumPy", category: "Scientific Computing", color: "#013243" },
    { name: "Scikit-learn", category: "Machine Learning", color: "#f7931e" },
    { name: "Keras", category: "Deep Learning", color: "#d00000" }
  ];

  const cloudAndDevOps = [
    { name: "AWS", category: "Cloud Platform", color: "#ff9900" },
    { name: "GCP", category: "Cloud Platform", color: "#4285f4" },
    { name: "Docker", category: "Containerization", color: "#2496ed" },
    { name: "Terraform", category: "Infrastructure", color: "#623ce4" },
    { name: "Apache Kafka", category: "Streaming", color: "#231f20" },
    { name: "Apache Spark", category: "Big Data", color: "#e25a1c" },
    { name: "Kestra", category: "Orchestration", color: "#7c3aed" },
    { name: "dbt", category: "Data Transform", color: "#ff694b" }
  ];

  const analyticsTools = [
    { name: "Power BI", category: "Business Intelligence", color: "#f2c811" },
    { name: "Tableau", category: "Data Visualization", color: "#e97627" },
    { name: "Looker Studio", category: "Reporting", color: "#4285f4" },
    { name: "Power Platform", category: "Automation", color: "#742774" },
    { name: "Microsoft Office", category: "Productivity", color: "#d83b01" }
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
        <h2 className="section-header text-center opacity-100 mb-16">Technical Skills & Expertise</h2>
        
        {/* Skills Proficiency Chart */}
        <div
          ref={chartRef}
          className="grid lg:grid-cols-2 gap-8 mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Core Skills Proficiency
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

          {/* Technology Categories */}
          <div className="space-y-6">
            {/* Programming Languages */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Code className="w-5 h-5 text-primary" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((lang, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: `${lang.color}15`, 
                        borderColor: `${lang.color}50`,
                        color: lang.color 
                      }}
                    >
                      {lang.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Analytics & BI Tools */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Analytics & BI Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {analyticsTools.map((tool, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: `${tool.color}15`, 
                        borderColor: `${tool.color}50`,
                        color: tool.color 
                      }}
                    >
                      {tool.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Databases */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Databases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {databases.map((db, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="w-full justify-center transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: `${db.color}15`, 
                      borderColor: `${db.color}50`,
                      color: db.color 
                    }}
                  >
                    {db.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frameworks & Libraries */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                Frameworks & Libraries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {frameworks.slice(0, 4).map((framework, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="w-full justify-center transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: `${framework.color}15`, 
                      borderColor: `${framework.color}50`,
                      color: framework.color 
                    }}
                  >
                    {framework.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cloud & DevOps */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-primary" />
                Cloud & DevOps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {cloudAndDevOps.slice(0, 4).map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="w-full justify-center transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: `${tool.color}15`, 
                      borderColor: `${tool.color}50`,
                      color: tool.color 
                    }}
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

