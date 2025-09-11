import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, TrendingUp, Brain, Code, Cloud, Wrench, Cpu } from "lucide-react";

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  // Core Business Analytics Skills
  const coreAnalyticsSkills = [
    { name: "SQL & Database Management", level: 95, category: "Data Management" },
    { name: "Python (Pandas, NumPy)", level: 92, category: "Programming" },
    { name: "Power BI & Tableau", level: 88, category: "BI Tools" },
    { name: "Statistical Analysis", level: 85, category: "Analytics" },
    { name: "Data Visualization", level: 90, category: "Analytics" },
    { name: "Business Process Analysis", level: 87, category: "Business Analysis" }
  ];

  // AI/ML Tools and Technologies
  const aiMlSkills = [
    { name: "Scikit-learn", level: 85, category: "Machine Learning" },
    { name: "TensorFlow/Keras", level: 78, category: "Deep Learning" },
    { name: "NLP & Text Analytics", level: 82, category: "AI/ML" },
    { name: "Predictive Modeling", level: 88, category: "Machine Learning" },
    { name: "Feature Engineering", level: 85, category: "ML Engineering" },
    { name: "Model Validation", level: 87, category: "ML Engineering" }
  ];

  // Data Engineering & Big Data Tools
  const dataEngineeringSkills = [
    { name: "Apache Kafka", level: 87, category: "Streaming" },
    { name: "Apache Spark", level: 83, category: "Big Data" },
    { name: "ETL/ELT Pipelines", level: 90, category: "Data Engineering" },
    { name: "dbt (Data Transform)", level: 85, category: "Data Engineering" },
    { name: "Kestra Orchestration", level: 88, category: "Workflow" },
    { name: "Docker & Terraform", level: 82, category: "DevOps" },
    { name: "Cloud Platforms (AWS, GCP)", level: 83, category: "Cloud" }
  ];

  // Comprehensive tools and technologies from resume
  const programmingLanguages = [
    { name: "Python", category: "Programming", color: "hsl(210, 60%, 45%)" },
    { name: "SQL", category: "Database", color: "hsl(210, 40%, 40%)" },
    { name: "Java", category: "Programming", color: "hsl(30, 100%, 55%)" },
    { name: "JavaScript", category: "Web Dev", color: "hsl(54, 100%, 65%)" },
    { name: "C++", category: "Programming", color: "hsl(210, 100%, 35%)" }
  ];

  const databases = [
    { name: "MySQL", category: "Relational", color: "hsl(210, 50%, 45%)" },
    { name: "PostgreSQL", category: "Relational", color: "hsl(210, 40%, 40%)" },
    { name: "MongoDB", category: "NoSQL", color: "hsl(120, 50%, 50%)" },
    { name: "BigQuery", category: "Cloud", color: "hsl(220, 100%, 60%)" }
  ];

  const frameworks = [
    { name: "Django", category: "Web Framework", color: "hsl(160, 100%, 50%)" },
    { name: "Flask", category: "Web Framework", color: "hsl(0, 0%, 20%)" },
    { name: "Streamlit", category: "Data Apps", color: "hsl(0, 100%, 60%)" },
    { name: "Pandas", category: "Data Analysis", color: "hsl(240, 100%, 30%)" },
    { name: "NumPy", category: "Scientific Computing", color: "hsl(200, 100%, 25%)" },
    { name: "Scikit-learn", category: "Machine Learning", color: "hsl(30, 100%, 55%)" },
    { name: "Keras", category: "Deep Learning", color: "hsl(0, 100%, 40%)" }
  ];

  const cloudAndDevOps = [
    { name: "AWS", category: "Cloud Platform", color: "hsl(35, 100%, 50%)" },
    { name: "GCP", category: "Cloud Platform", color: "hsl(220, 100%, 60%)" },
    { name: "Docker", category: "Containerization", color: "hsl(210, 100%, 55%)" },
    { name: "Terraform", category: "Infrastructure", color: "hsl(260, 80%, 60%)" },
    { name: "Apache Kafka", category: "Streaming", color: "hsl(0, 0%, 15%)" },
    { name: "Apache Spark", category: "Big Data", color: "hsl(15, 80%, 55%)" },
    { name: "Kestra", category: "Orchestration", color: "hsl(260, 80%, 60%)" },
    { name: "dbt", category: "Data Transform", color: "hsl(10, 100%, 65%)" }
  ];

  const analyticsTools = [
    { name: "Power BI", category: "Business Intelligence", color: "hsl(50, 90%, 50%)" },
    { name: "Tableau", category: "Data Visualization", color: "hsl(25, 80%, 55%)" },
    { name: "Looker Studio", category: "Reporting", color: "hsl(220, 100%, 60%)" },
    { name: "Power Platform", category: "Automation", color: "hsl(290, 60%, 40%)" },
    { name: "Microsoft Office", category: "Productivity", color: "hsl(15, 100%, 45%)" }
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
        
        {/* Skills Proficiency Charts */}
        <div
          ref={chartRef}
          className="grid lg:grid-cols-3 gap-8 mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          {/* Core Analytics Skills */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Core Analytics Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {coreAnalyticsSkills.map((skill, index) => {
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

          {/* AI/ML Tools */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI/ML Tools & Techniques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiMlSkills.map((skill, index) => {
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

          {/* Data Engineering & Big Data */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                Data Engineering & Big Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {dataEngineeringSkills.map((skill, index) => {
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

