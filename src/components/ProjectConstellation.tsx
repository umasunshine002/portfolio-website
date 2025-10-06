import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Github, Database, Brain, Activity, ShoppingCart, Code2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  x: number;
  y: number;
  icon: any;
  color: string;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  architecture: string[];
  codeSnippet: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Real-Time Twitter Sentiment",
    category: "AI/ML",
    x: 20,
    y: 30,
    icon: Activity,
    color: "#00D9FF",
    description: "End-to-end streaming NLP pipeline with Kafka + Spark processing 10K+ tweets/day at 84% accuracy",
    technologies: ["Kafka", "Spark", "MongoDB", "Django", "NLP", "TF-IDF"],
    metrics: [
      { label: "Accuracy", value: "84%" },
      { label: "Latency", value: "<5s" },
      { label: "Volume", value: "10K+/day" }
    ],
    architecture: [
      "Twitter API → Kafka Producer",
      "Kafka Stream → Spark Processing",
      "TF-IDF → ML Classification",
      "MongoDB → Django REST API",
      "Live Dashboard Visualization"
    ],
    codeSnippet: `# Kafka Producer for Twitter Stream
producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=lambda v: json.dumps(v).encode()
)
for tweet in stream.filter(track=keywords):
    producer.send('tweets', tweet)`,
    githubLink: "https://github.com/umasunshine002"
  },
  {
    id: 2,
    title: "Hospital Data Pipeline",
    category: "Data Engineering",
    x: 50,
    y: 20,
    icon: Database,
    color: "#06FFF0",
    description: "Scalable GCP pipeline handling 1M+ daily events with Kestra orchestration, dbt transformations, real-time analytics",
    technologies: ["GCP", "BigQuery", "Kestra", "dbt", "Kafka", "Terraform"],
    metrics: [
      { label: "Events/Day", value: "1M+" },
      { label: "Reliability", value: "+40%" },
      { label: "Uptime", value: "99.9%" }
    ],
    architecture: [
      "Kafka Streams → GCP Storage",
      "Kestra Orchestration Workflows",
      "dbt → BigQuery Transformations",
      "Terraform Infrastructure as Code",
      "Looker Studio Dashboards"
    ],
    codeSnippet: `-- dbt model: daily_metrics.sql
{{ config(materialized='incremental') }}
SELECT 
  date_trunc('day', event_time) as day,
  count(*) as event_count,
  avg(processing_time) as avg_latency
FROM {{ source('raw', 'events') }}
GROUP BY 1`,
    githubLink: "https://github.com/umasunshine002"
  },
  {
    id: 3,
    title: "Medicine Recommender",
    category: "AI/ML",
    x: 75,
    y: 60,
    icon: Brain,
    color: "#A855F7",
    description: "ML-powered recommendation system analyzing 5K+ medicines via cosine similarity, 60% faster recommendations",
    technologies: ["Python", "Streamlit", "Cosine Similarity", "Scikit-learn"],
    metrics: [
      { label: "Database", value: "5K+" },
      { label: "Speed", value: "+60%" },
      { label: "Accuracy", value: "92%" }
    ],
    architecture: [
      "Medicine DB → Feature Extraction",
      "Vector Space Model Creation",
      "Cosine Similarity Algorithm",
      "Streamlit Web Interface",
      "Cache Layer for Speed"
    ],
    codeSnippet: `from sklearn.metrics.pairwise import cosine_similarity
# Compute similarity matrix
similarity = cosine_similarity(medicine_vectors)
# Get top 5 recommendations
recommendations = similarity[idx].argsort()[-5:][::-1]`,
    githubLink: "https://github.com/umasunshine002"
  },
  {
    id: 4,
    title: "E-commerce Platform",
    category: "Software Engineering",
    x: 30,
    y: 75,
    icon: ShoppingCart,
    color: "#FF6B6B",
    description: "Full-stack store with Stripe payments, MySQL backend, 80% reduction in manual inventory updates",
    technologies: ["Node.js", "Express", "MySQL", "Stripe", "AWS"],
    metrics: [
      { label: "Manual Reduction", value: "80%" },
      { label: "Payment Success", value: "99.8%" },
      { label: "Response Time", value: "<200ms" }
    ],
    architecture: [
      "Express.js API Gateway",
      "MySQL Database (Optimized)",
      "Stripe Payment Integration",
      "Admin Dashboard",
      "AWS Auto-scaling Deployment"
    ],
    codeSnippet: `// Stripe payment processing
const paymentIntent = await stripe.paymentIntents.create({
  amount: order.total * 100,
  currency: 'usd',
  metadata: { orderId: order.id }
});
res.json({ clientSecret: paymentIntent.client_secret });`,
    githubLink: "https://github.com/umasunshine002"
  }
];

const ProjectConstellation = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [connections, setConnections] = useState<Array<[number, number, number, number]>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw constellation connections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const newConnections: Array<[number, number, number, number]> = [];
    
    projects.forEach((p1, i) => {
      projects.slice(i + 1).forEach((p2) => {
        const x1 = (p1.x / 100) * canvas.width;
        const y1 = (p1.y / 100) * canvas.height;
        const x2 = (p2.x / 100) * canvas.width;
        const y2 = (p2.y / 100) * canvas.height;
        
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        
        if (distance < 400) {
          newConnections.push([x1, y1, x2, y2]);
        }
      });
    });

    setConnections(newConnections);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      connections.forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(0, 217, 255, 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [connections.length]);

  return (
    <section id="projects" className="py-32 relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2E] via-[#0E121B] to-[#1A1F2E]" />
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-header">Project Constellation</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive 2.5D map of production systems — click any node to explore architecture, metrics & code
          </p>
        </motion.div>

        {/* Constellation Canvas */}
        <div className="relative w-full h-[600px] mb-16">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          
          {/* Project Nodes */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.2, zIndex: 50 }}
              className="absolute cursor-pointer"
              style={{
                left: `${project.x}%`,
                top: `${project.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Node glow */}
              <div 
                className="absolute inset-0 rounded-full blur-xl opacity-60 animate-pulse"
                style={{ 
                  backgroundColor: project.color,
                  width: '80px',
                  height: '80px',
                  transform: 'translate(-25%, -25%)'
                }}
              />
              
              {/* Node */}
              <div 
                className="relative w-16 h-16 rounded-full flex items-center justify-center glass-card border-2 transition-all"
                style={{ borderColor: project.color }}
              >
                <project.icon className="w-8 h-8" style={{ color: project.color }} />
              </div>
              
              {/* Label */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-mono px-2 py-1 glass-card rounded" style={{ color: project.color }}>
                  {project.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Holographic Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.28 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <Card 
                className="glass-card neon-border p-8 max-w-5xl w-full max-h-[85vh] overflow-y-auto pointer-events-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 hover:bg-red-500/20"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="p-4 rounded-2xl glass-card"
                    style={{ backgroundColor: `${selectedProject.color}20` }}
                  >
                    <selectedProject.icon className="w-12 h-12" style={{ color: selectedProject.color }} />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2" style={{ backgroundColor: `${selectedProject.color}30` }}>
                      {selectedProject.category}
                    </Badge>
                    <h2 className="text-4xl font-bold gradient-text mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {selectedProject.metrics.map((metric, i) => (
                    <div key={i} className="glass-card neon-border p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold" style={{ color: selectedProject.color }}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Architecture Diagram */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5" style={{ color: selectedProject.color }} />
                    Architecture
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.architecture.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 glass-card p-4 rounded-lg"
                      >
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                          style={{ backgroundColor: `${selectedProject.color}30`, color: selectedProject.color }}
                        >
                          {i + 1}
                        </div>
                        <span className="text-sm font-mono">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Code Snippet */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5" style={{ color: selectedProject.color }} />
                    Code Sample
                  </h3>
                  <pre className="glass-card p-6 rounded-xl overflow-x-auto">
                    <code className="text-sm font-mono text-[hsl(var(--neon-glow))]">
                      {selectedProject.codeSnippet}
                    </code>
                  </pre>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" style={{ borderColor: selectedProject.color }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <Button
                  className="w-full"
                  style={{ backgroundColor: selectedProject.color }}
                  asChild
                >
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </a>
                </Button>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectConstellation;
