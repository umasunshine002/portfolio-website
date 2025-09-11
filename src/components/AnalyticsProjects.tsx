import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, TrendingUp, BarChart3, Database, Activity, Zap, Brain, FileText } from "lucide-react";
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

  // Real-time sentiment analysis data pipeline visualization
  const sentimentData = [
    { time: '00:00', positive: 45, negative: 25, neutral: 30, volume: 1200 },
    { time: '04:00', positive: 52, negative: 18, neutral: 30, volume: 2100 },
    { time: '08:00', positive: 38, negative: 35, neutral: 27, volume: 4500 },
    { time: '12:00', positive: 65, negative: 15, neutral: 20, volume: 6800 },
    { time: '16:00', positive: 58, negative: 22, neutral: 20, volume: 5200 },
    { time: '20:00', positive: 48, negative: 28, neutral: 24, volume: 3100 }
  ];

  // E-commerce recommendation system accuracy
  const recommendationAccuracy = [
    { metric: 'Top 5 Recommendations', accuracy: 85 },
    { metric: 'Cosine Similarity', accuracy: 78 },
    { metric: 'User Engagement', accuracy: 92 },
    { metric: 'Conversion Rate', accuracy: 67 }
  ];

  // Database performance metrics
  const dbPerformanceData = [
    { operation: 'SELECT', responseTime: 45, throughput: 95 },
    { operation: 'INSERT', responseTime: 32, throughput: 88 },
    { operation: 'UPDATE', responseTime: 58, throughput: 82 },
    { operation: 'DELETE', responseTime: 28, throughput: 90 },
    { operation: 'JOIN', responseTime: 125, throughput: 75 }
  ];

  const projects = [
    {
      title: "Real-Time Twitter Sentiment Analysis Pipeline",
      description: "Developed an end-to-end real-time NLP pipeline to classify tweets within 5 seconds of posting, achieving 84% accuracy on TF-IDF based model with streaming keyword analytics and sentiment trends.",
      metrics: ["84% Accuracy on tweet classification", "5-second real-time processing", "Kafka streaming integration", "Live predictions into Django dashboard"],
      technologies: ["Apache Kafka", "Spark Streaming", "MongoDB", "Django", "Python", "NLP"],
      githubLink: "https://github.com/umasunshine002",
      icon: Activity,
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="time" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#f9fafb'
              }} 
            />
            <Area type="monotone" dataKey="positive" stackId="1" stroke="#10b981" fill="#10b981" opacity={0.6} />
            <Area type="monotone" dataKey="neutral" stackId="1" stroke="#6b7280" fill="#6b7280" opacity={0.6} />
            <Area type="monotone" dataKey="negative" stackId="1" stroke="#ef4444" fill="#ef4444" opacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      ),
      pipelineVisualization: (
        <div className="bg-black/90 border border-primary/30 rounded-lg p-4 text-green-400 font-mono text-xs">
          <div className="space-y-2">
            <div>Twitter API → Kafka Producer → Stream Processing</div>
            <div className="flex items-center">
              <span className="text-yellow-400">└─</span> Real-time data ingestion
            </div>
            <div>Spark Streaming → NLP Model → Sentiment Classification</div>
            <div className="flex items-center">
              <span className="text-yellow-400">└─</span> TF-IDF vectorization + ML pipeline
            </div>
            <div>MongoDB Storage → Django API → Live Dashboard</div>
            <div className="flex items-center">
              <span className="text-yellow-400">└─</span> Real-time visualization & analytics
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Alternative Medicine Recommendation System",
      description: "Engineered ML-based recommendation engine to suggest top 5 medicine alternatives based on chemical composition, improving recommendation speed by 60% with precompiled pickle vectors and cosine similarity.",
      metrics: ["60% speed improvement", "Chemical composition analysis", "Cosine similarity algorithm", "Streamlit web interface"],
      technologies: ["Python", "Streamlit", "Pickle", "Cosine Similarity", "Pandas", "Scikit-learn"],
      githubLink: "https://github.com/umasunshine002",
      icon: Brain,
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={recommendationAccuracy}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="metric" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#f9fafb'
              }} 
            />
            <Bar dataKey="accuracy" fill="#8b5cf6" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      ),
      pipelineVisualization: (
        <div className="bg-black/90 border border-primary/30 rounded-lg p-4 text-green-400 font-mono text-xs">
          <div className="space-y-2">
            <div>Medicine Database → Feature Extraction → Vector Space</div>
            <div className="flex items-center">
              <span className="text-yellow-400">└─</span> Chemical composition preprocessing
            </div>
            <div>Cosine Similarity → Ranking Algorithm → Top 5 Results</div>
            <div className="flex items-center">
              <span className="text-yellow-400">└─</span> ML-based similarity matching
            </div>
            <div>Pickle Serialization → Streamlit UI → User Interface</div>
            <div className="flex items-center">
              <span className="text-yellow-400">└─</span> Fast recommendation delivery
            </div>
          </div>
        </div>
      )
    },
    {
      title: "E-commerce Store Database & Analytics",
      description: "Built secure, scalable e-commerce platform with MySQL database, integrated Stripe API for secure payment processing, and implemented admin inventory management system reducing manual updates by 80%.",
      metrics: ["Secure payment integration", "80% reduction in manual updates", "Admin inventory system", "AWS cloud deployment"],
      technologies: ["MySQL", "AWS", "Stripe API", "Node.js", "Express", "RESTful APIs"],
      githubLink: "https://github.com/umasunshine002",
      icon: Database,
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={dbPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="operation" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#f9fafb'
              }} 
            />
            <Line type="monotone" dataKey="responseTime" stroke="#10b981" strokeWidth={3} name="Response Time (ms)" />
            <Line type="monotone" dataKey="throughput" stroke="#3b82f6" strokeWidth={3} name="Throughput %" />
          </LineChart>
        </ResponsiveContainer>
      ),
      pipelineVisualization: (
        <div className="bg-black/90 border border-primary/30 rounded-lg p-4 text-green-400 font-mono text-xs">
          <div className="space-y-2">
            <div>Frontend → Express.js API → MySQL Database</div>
            <div className="flex items-center">
              <span className="text-yellow-400">└─</span> RESTful API architecture
            </div>
            <div>Stripe Integration → Payment Processing → Order Management</div>
            <div className="flex items-center">
              <span className="text-yellow-400">└─</span> Secure transaction handling
            </div>
            <div>Admin Dashboard → Inventory Control → AWS Deployment</div>
            <div className="flex items-center">
              <span className="text-yellow-400">└─</span> Automated inventory management
            </div>
          </div>
        </div>
      )
    }
  ];

  const performanceData = [
    { metric: 'ML Model Accuracy', value: 84 },
    { metric: 'Data Processing Speed', value: 95 },
    { metric: 'System Reliability', value: 99 },
    { metric: 'User Satisfaction', value: 92 }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <h2 
          className="section-header text-center mb-16 opacity-100"
          ref={sectionRef}
        >
          Analytics Projects Portfolio
        </h2>

        {/* Performance Metrics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {performanceData.map((item, index) => (
            <Card key={index} className="card-hover text-center border border-primary/20">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-1">{item.value}%</div>
                <div className="text-sm text-muted-foreground">{item.metric}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Cards with Detailed Visualizations */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden border border-primary/20">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Project Info */}
                <div className="lg:col-span-2 p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Data Pipeline Visualization */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Data Pipeline Architecture
                      </h4>
                      {project.pipelineVisualization}
                    </div>

                    {/* Key Results */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Key Results & Impact
                      </h4>
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
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="bg-secondary/20 hover:bg-secondary/40 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View Source Code
                      </a>
                    </Button>
                  </CardContent>
                </div>

                {/* Chart Visualization */}
                <div className="bg-muted/20 p-8 flex flex-col justify-center border-l border-primary/10">
                  <div className="w-full">
                    <h4 className="font-semibold mb-4 text-center text-primary flex items-center justify-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Performance Analytics
                    </h4>
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