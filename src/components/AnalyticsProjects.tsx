import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, TrendingUp, BarChart3, Database, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const AnalyticsProjects = () => {
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

  // Sample data for charts
  const salesData = [
    { month: 'Jan', revenue: 65000, users: 120 },
    { month: 'Feb', revenue: 78000, users: 145 },
    { month: 'Mar', revenue: 82000, users: 162 },
    { month: 'Apr', revenue: 95000, users: 198 },
    { month: 'May', revenue: 105000, users: 225 },
    { month: 'Jun', revenue: 118000, users: 267 }
  ];

  const categoryData = [
    { name: 'E-commerce', value: 35, color: '#8884d8' },
    { name: 'Analytics', value: 25, color: '#82ca9d' },
    { name: 'Automation', value: 20, color: '#ffc658' },
    { name: 'Visualization', value: 20, color: '#ff7c7c' }
  ];

  const performanceData = [
    { metric: 'Data Accuracy', value: 98.5 },
    { metric: 'Processing Speed', value: 95.2 },
    { metric: 'User Satisfaction', value: 94.8 },
    { metric: 'System Uptime', value: 99.9 }
  ];

  const projects = [
    {
      title: "E-commerce Analytics Dashboard",
      description: "Built comprehensive analytics dashboard tracking revenue, customer behavior, and product performance with real-time data processing and automated reporting.",
      metrics: ["$2.1M Revenue Tracked", "15% Conversion Increase", "Real-time Processing"],
      technologies: ["Power BI", "SQL", "Python", "Azure"],
      githubLink: "https://github.com/umasunshine002",
      icon: BarChart3,
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#f9fafb'
              }} 
            />
            <Bar dataKey="revenue" fill="#8b5cf6" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Real-Time Sentiment Analysis System",
      description: "Developed scalable sentiment analysis platform processing social media data streams, providing actionable insights for brand monitoring and customer engagement strategies.",
      metrics: ["1M+ Posts Analyzed", "Real-time Processing", "85% Accuracy"],
      technologies: ["Apache Spark", "Kafka", "MongoDB", "Django"],
      githubLink: "https://github.com/umasunshine002",
      icon: TrendingUp,
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#f9fafb'
              }} 
            />
            <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Business Intelligence Automation",
      description: "Automated data pipeline and reporting system reducing manual reporting time by 80% and providing executives with real-time business intelligence dashboards.",
      metrics: ["80% Time Reduction", "Automated Reports", "Executive Dashboard"],
      technologies: ["Power Platform", "Azure", "SQL Server", "Power Automate"],
      githubLink: "https://github.com/umasunshine002",
      icon: Database,
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#f9fafb'
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      )
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <h2 
          className="section-header text-center mb-16 opacity-100"
          ref={sectionRef}
        >
          Analytics Projects & Dashboards
        </h2>

        {/* Performance Metrics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {performanceData.map((item, index) => (
            <Card key={index} className="card-hover text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-1">{item.value}%</div>
                <div className="text-sm text-muted-foreground">{item.metric}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Cards with Charts */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Info */}
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Key Metrics */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">Key Results</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="bg-secondary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  </CardContent>
                </div>

                {/* Chart Visualization */}
                <div className="bg-muted/20 p-8 flex items-center justify-center border-l">
                  <div className="w-full">
                    <h4 className="font-semibold mb-4 text-center text-primary">Data Visualization</h4>
                    {project.chart}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsProjects;