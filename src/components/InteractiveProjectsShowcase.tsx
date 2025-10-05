import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Database,
  Brain,
  Activity,
  ShoppingCart,
  X,
  Zap,
  GitBranch,
  Layers
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  icon: any;
  iconColor: string;
  metrics: { label: string; value: string }[];
  architecture: string[];
  githubLink: string;
  problemSolution: { problem: string; solution: string; results: string };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Real-Time Twitter Sentiment Analysis",
    category: "AI/ML",
    description: "End-to-end real-time NLP pipeline classifying tweets within 5 seconds.",
    fullDescription:
      "Developed a production-grade streaming sentiment analysis system processing 10K+ tweets daily with 84% accuracy using TF-IDF vectorization and machine learning pipeline.",
    technologies: [
      "Apache Kafka",
      "Spark Streaming",
      "MongoDB",
      "Django",
      "Python",
      "NLP",
      "TF-IDF",
      "Scikit-learn"
    ],
    icon: Activity,
    iconColor: "#00D9FF",
    metrics: [
      { label: "Accuracy", value: "84%" },
      { label: "Processing Time", value: "< 5s" },
      { label: "Daily Volume", value: "10K+" },
      { label: "Uptime", value: "99.9%" }
    ],
    architecture: [
      "Twitter API → Kafka Producer (Real-time ingestion)",
      "Kafka Stream → Spark Streaming (Distributed processing)",
      "TF-IDF Vectorization → ML Model (NLP classification)",
      "MongoDB Storage (High-throughput writes)",
      "Django REST API → Live Dashboard (Real-time visualization)"
    ],
    githubLink: "https://github.com/umasunshine002",
    problemSolution: {
      problem:
        "Need for real-time sentiment tracking of social media conversations to gauge public opinion instantly.",
      solution:
        "Built a distributed streaming architecture using Kafka and Spark to process and classify tweets in real-time with machine learning.",
      results:
        "Achieved 84% classification accuracy with sub-5-second latency, processing over 10,000 tweets daily with zero downtime."
    }
  },
  {
    id: 2,
    title: "Alternative Medicine Recommendation System",
    category: "AI/ML",
    description: "ML-based recommendation engine for medicine alternatives using chemical composition.",
    fullDescription:
      "Engineered an intelligent recommendation system analyzing 5,000+ medicines using cosine similarity on chemical composition vectors, achieving 60% faster recommendations.",
    technologies: [
      "Python",
      "Streamlit",
      "Pickle",
      "Cosine Similarity",
      "Pandas",
      "Scikit-learn",
      "NumPy"
    ],
    icon: Brain,
    iconColor: "#A855F7",
    metrics: [
      { label: "Database Size", value: "5,000+" },
      { label: "Speed Improvement", value: "60%" },
      { label: "Accuracy", value: "92%" },
      { label: "Response Time", value: "< 1s" }
    ],
    architecture: [
      "Medicine Database → Feature Extraction (Chemical composition analysis)",
      "Vector Space Model → Pickle Serialization (Optimized storage)",
      "Cosine Similarity Algorithm → Ranking System (Top 5 recommendations)",
      "Streamlit Web Interface → User Input/Output (Real-time interaction)",
      "Cache Layer → Fast Retrieval (Sub-second responses)"
    ],
    githubLink: "https://github.com/umasunshine002",
    problemSolution: {
      problem:
        "Pharmacists need quick, accurate alternative medicine recommendations based on chemical composition.",
      solution:
        "Developed a cosine similarity-based ML system with precompiled vectors for instant similarity matching across 5,000+ medicines.",
      results:
        "Reduced recommendation time by 60% with 92% accuracy, enabling real-time prescription alternatives via intuitive web interface."
    }
  },
  {
    id: 3,
    title: "Hospital Data Pipeline (Kestra + GCP)",
    category: "Data Engineering",
    description: "Scalable ETL pipeline processing 1M+ daily healthcare events on GCP.",
    fullDescription:
      "Built enterprise-grade data infrastructure handling music streaming analytics with automated workflows, dbt transformations, and real-time dashboards.",
    technologies: [
      "GCP",
      "BigQuery",
      "Kestra",
      "dbt",
      "Apache Kafka",
      "Terraform",
      "Docker",
      "Looker Studio"
    ],
    icon: Database,
    iconColor: "#06FFF0",
    metrics: [
      { label: "Events/Day", value: "1M+" },
      { label: "Reliability", value: "40%↑" },
      { label: "Processing Speed", value: "Real-time" },
      { label: "Data Quality", value: "99.5%" }
    ],
    architecture: [
      "Kafka Streams → GCP Cloud Storage (Event ingestion)",
      "Kestra Workflows → Automated Orchestration (Error handling + alerts)",
      "dbt Models → BigQuery Transformations (ML-ready datasets)",
      "Terraform IaC → Infrastructure Provisioning (Automated deployment)",
      "Docker Containers → Reproducible Environments (CI/CD pipeline)",
      "Looker Studio Dashboards → Analytics Visualization (KPI tracking)"
    ],
    githubLink: "https://github.com/umasunshine002",
    problemSolution: {
      problem:
        "Need for scalable, reliable healthcare data pipeline handling millions of events with complex transformations.",
      solution:
        "Architected cloud-native ETL system using GCP, Kafka streaming, dbt modeling, and Kestra orchestration with full IaC automation.",
      results:
        "Successfully processing 1M+ daily events with 40% improved reliability, automated workflows, and real-time analytics dashboards."
    }
  },
  {
    id: 4,
    title: "E-commerce Platform with Stripe Integration",
    category: "Software Engineering",
    description: "Secure, scalable e-commerce store with payment processing and inventory management.",
    fullDescription:
      "Developed full-stack e-commerce platform with MySQL backend, Stripe payment integration, and automated inventory management reducing manual updates by 80%.",
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "AWS",
      "Stripe API",
      "RESTful APIs",
      "JavaScript"
    ],
    icon: ShoppingCart,
    iconColor: "#FF6B6B",
    metrics: [
      { label: "Manual Reduction", value: "80%" },
      { label: "Payment Success", value: "99.8%" },
      { label: "Response Time", value: "< 200ms" },
      { label: "Uptime", value: "99.9%" }
    ],
    architecture: [
      "Frontend → Express.js API Gateway (RESTful architecture)",
      "MySQL Database → Optimized Queries (Indexed tables)",
      "Stripe API Integration → Secure Payment Processing (PCI compliant)",
      "Admin Dashboard → Inventory Management (Real-time updates)",
      "AWS Deployment → Load Balancing (Auto-scaling infrastructure)",
      "Authentication Layer → JWT Tokens (Secure sessions)"
    ],
    githubLink: "https://github.com/umasunshine002",
    problemSolution: {
      problem:
        "E-commerce businesses need secure payment processing and efficient inventory management to reduce manual overhead.",
      solution:
        "Built full-stack platform integrating Stripe for payments, MySQL for data management, and admin tools for inventory automation.",
      results:
        "Achieved 80% reduction in manual updates, 99.8% payment success rate, and deployed on AWS with 99.9% uptime."
    }
  }
];

const InteractiveProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "AI/ML", "Data Engineering", "Software Engineering"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2E] via-[#0E121B] to-[#1A1F2E] opacity-50" />
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-header">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
            Interactive showcase of production-ready systems spanning AI/ML, Data Engineering, and Software Development.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all ${
                filter === category
                  ? "neon-glow bg-[hsl(var(--cyber-blue))] border-[hsl(var(--cyber-blue))]"
                  : "border-[hsl(var(--cyber-blue))]/30 hover:border-[hsl(var(--cyber-blue))]"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <Card className="glass-card neon-border p-6 h-full hover:shadow-2xl hover:shadow-[hsl(var(--cyber-blue))]/30 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-xl glass-card"
                      style={{
                        backgroundColor: `${project.iconColor}20`,
                        borderColor: `${project.iconColor}40`
                      }}
                    >
                      <project.icon
                        className="w-8 h-8"
                        style={{ color: project.iconColor }}
                      />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2" style={{ backgroundColor: `${project.iconColor}30` }}>
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2 gradient-text">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.metrics.slice(0, 2).map((metric, i) => (
                      <div key={i} className="glass-card p-3 rounded-lg text-center">
                        <div className="text-xl font-bold" style={{ color: project.iconColor }}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full"
                    style={{ color: project.iconColor }}
                  >
                    View Details →
                  </Button>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card neon-border p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div
                    className="p-4 rounded-xl glass-card"
                    style={{
                      backgroundColor: `${selectedProject.iconColor}20`,
                      borderColor: `${selectedProject.iconColor}40`
                    }}
                  >
                    <selectedProject.icon
                      className="w-10 h-10"
                      style={{ color: selectedProject.iconColor }}
                    />
                  </div>
                  <div>
                    <Badge className="mb-2" style={{ backgroundColor: `${selectedProject.iconColor}30` }}>
                      {selectedProject.category}
                    </Badge>
                    <h2 className="text-3xl font-bold gradient-text">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="hover:bg-red-500/20"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {selectedProject.fullDescription}
              </p>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {selectedProject.metrics.map((metric, i) => (
                  <div key={i} className="glass-card p-4 rounded-xl text-center neon-border">
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: selectedProject.iconColor }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Problem-Solution-Results */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Problem
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.problemSolution.problem}
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
                    <GitBranch className="w-4 h-4" />
                    Solution
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.problemSolution.solution}
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Results
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.problemSolution.results}
                  </p>
                </div>
              </div>

              {/* Architecture */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5" style={{ color: selectedProject.iconColor }} />
                  System Architecture
                </h3>
                <div className="glass-card p-6 rounded-xl bg-black/40 font-mono text-sm">
                  {selectedProject.architecture.map((step, i) => (
                    <div key={i} className="mb-2 flex items-start gap-2">
                      <span style={{ color: selectedProject.iconColor }}>
                        {i + 1}.
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="hover:scale-110 transition-transform"
                      style={{ borderColor: `${selectedProject.iconColor}50` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  className="flex-1"
                  style={{ backgroundColor: selectedProject.iconColor }}
                  asChild
                >
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </a>
                </Button>
                <Button variant="outline" className="flex-1">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InteractiveProjectsShowcase;