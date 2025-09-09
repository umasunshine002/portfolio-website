import { useState, useEffect } from "react";
import { Building, Clock, Activity, BarChart3, Server, Database, Calendar, ChevronRight, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
  logoColor?: string;
  duration: string;
  impact: {
    performance: number;
    efficiency: number;
    automation: number;
  };
}

const experiences: ExperienceItem[] = [
  {
    title: "Data Engineer Intern",
    company: "KBTS Technologies",
    location: "Ypsilanti, Michigan",
    period: "Jan 2025 – Apr 2025",
    duration: "4 months",
    description: [
      "Built and automated scalable, end-to-end data pipelines on Google Cloud Platform (GCP) using Kestra, dbt, and Apache Kafka for both real-time and batch data processing.",
      "Designed and deployed analytics-ready data models and ETL workflows; visualized insights through dynamic dashboards in Looker Studio to support data-driven decision-making.",
      "Provisioned and managed cloud infrastructure with Terraform, and deployed containerized services using Docker, improving reliability, consistency, and scalability."
    ],
    tags: ["GCP", "Kestra", "dbt", "Kafka", "Terraform", "Docker", "ETL", "Looker Studio"],
    logoColor: "#4285F4",
    impact: {
      performance: 95,
      efficiency: 87,
      automation: 92
    }
  },
  {
    title: "Associate Consultant",
    company: "Applied Information Sciences (AIS)",
    location: "Hyderabad, Telangana",
    period: "Mar 2023 – Jun 2023",
    duration: "4 months",
    description: [
      "Engineered a Full-Stack Employee Management System using MySQL and JDBC, enhancing data access and management, and designed a responsive UI with Java Swing and JavaFX to improve user experience and reduce support queries.",
      "Leveraged Microsoft Power Platform (Power Apps, Power Automate, Power BI) to automate internal processes, streamline employee onboarding, and create automated workflows, significantly reducing manual tasks and cycle times.",
      "Developed Real-time Data Integration by connecting Power Platform tools to SQL databases, enabling seamless updates across apps and reports, while contributing to an Agile environment through active sprint participation and collaborative development."
    ],
    tags: ["MySQL", "JDBC", "Java Swing", "JavaFX", "Power Platform", "Azure", "Agile"],
    logoColor: "#0078D4",
    impact: {
      performance: 88,
      efficiency: 94,
      automation: 85
    }
  }
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [systemTime, setSystemTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-center mb-16">Experience Dashboard</h2>
        
        {/* System Status Bar */}
        <div className="max-w-6xl mx-auto mb-8">
          <Card className="border border-primary/20 bg-black/90 text-green-400">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-accent/20 border-b border-primary/20 pb-2">
              <CardTitle className="font-mono text-sm flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  experience@career-dashboard:~$
                </span>
                <span className="text-xs text-muted-foreground">
                  {systemTime.toLocaleString()}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 font-mono text-xs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>$ total_experience: 8+ months</div>
                <div>$ active_projects: {experiences.length}</div>
                <div>$ system_status: <span className="text-green-400 animate-pulse">ACTIVE</span></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border border-primary/20 bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm hover:from-card/80 hover:to-muted/50 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <CardHeader className="border-b border-primary/20">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="p-3 rounded-lg border"
                      style={{ 
                        backgroundColor: `${exp.logoColor}15`,
                        borderColor: `${exp.logoColor}30`
                      }}
                    >
                      <Building size={24} style={{ color: exp.logoColor }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <p className="text-lg font-semibold text-primary">{exp.title}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period} • {exp.duration}
                      </p>
                    </div>
                  </div>
                  
                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                      <div className="text-lg font-bold" style={{ color: exp.logoColor }}>
                        {exp.impact.performance}%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Efficiency</div>
                      <div className="text-lg font-bold" style={{ color: exp.logoColor }}>
                        {exp.impact.efficiency}%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Automation</div>
                      <div className="text-lg font-bold" style={{ color: exp.logoColor }}>
                        {exp.impact.automation}%
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Achievements */}
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li 
                          key={i} 
                          className="flex text-sm leading-relaxed"
                          style={{
                            animationDelay: activeIndex === index ? `${i * 100}ms` : '0ms'
                          }}
                        >
                          <ChevronRight 
                            size={16} 
                            className="mt-1 mr-2 flex-shrink-0 transition-colors duration-300"
                            style={{ color: activeIndex === index ? exp.logoColor : '' }}
                          />
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills & Impact Bars */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-primary" />
                      Impact Metrics
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Performance</span>
                          <span>{exp.impact.performance}%</span>
                        </div>
                        <Progress 
                          value={exp.impact.performance} 
                          className="h-2"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Efficiency</span>
                          <span>{exp.impact.efficiency}%</span>
                        </div>
                        <Progress 
                          value={exp.impact.efficiency} 
                          className="h-2"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Automation</span>
                          <span>{exp.impact.automation}%</span>
                        </div>
                        <Progress 
                          value={exp.impact.automation} 
                          className="h-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-4 border-t border-primary/10">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Server className="w-4 h-4 text-primary" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-medium py-1.5 px-3 rounded-full border transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: `${exp.logoColor}10`, 
                          color: exp.logoColor,
                          borderColor: `${exp.logoColor}30`
                        }}
                      >
                        {tag}
                      </span>
                    ))}
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

export default ExperienceSection;
