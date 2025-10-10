import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tools: string[];
  visual: string;
  details: string;
  architecture: string[];
}

const InteractiveProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      title: "Real-Time Twitter Sentiment Analysis",
      category: "AI/ML",
      description: "Live streaming dashboard analyzing sentiment from Twitter data in real-time",
      tools: ["Kafka", "Spark Streaming", "MongoDB", "Django"],
      visual: "📊 Live Dashboard",
      details: "Built a real-time data pipeline that processes Twitter streams, analyzes sentiment using NLP models, and visualizes results on an interactive dashboard. Handles 10K+ tweets per minute with sub-second latency.",
      architecture: ["Twitter API → Kafka Producer", "Spark Streaming Consumer", "Sentiment ML Model", "MongoDB Storage", "Django REST API → React Dashboard"]
    },
    {
      title: "Facial Recognition System",
      category: "AI/ML",
      description: "Deep learning-powered face detection and recognition system",
      tools: ["CNN", "OpenCV", "TensorFlow", "Python"],
      visual: "🎯 Face Detection",
      details: "Implemented a convolutional neural network for facial recognition with 95%+ accuracy. Features real-time detection, face encoding, and user authentication capabilities.",
      architecture: ["Image Preprocessing", "CNN Feature Extraction", "Face Encoding", "Similarity Matching", "Authentication Pipeline"]
    },
    {
      title: "Medicine Recommendation System",
      category: "AI/ML",
      description: "NLP-powered system for intelligent medicine recommendations",
      tools: ["NLP", "Transformers", "Deep Learning", "Flask"],
      visual: "💊 Smart Recommendations",
      details: "Developed an intelligent system using transformer models to analyze symptoms and recommend appropriate medications. Includes drug interaction checking and dosage suggestions.",
      architecture: ["Symptom Input Processing", "NLP Symptom Analysis", "Knowledge Base Query", "Drug Interaction Check", "Recommendation Engine"]
    },
    {
      title: "E-commerce Platform with Stripe",
      category: "Web",
      description: "Full-stack e-commerce solution with integrated payment processing",
      tools: ["Node.js", "Django", "Stripe API", "PostgreSQL"],
      visual: "🛒 Checkout Flow",
      details: "Built a complete e-commerce platform with product management, shopping cart, secure checkout, and payment processing using Stripe API. Supports multiple payment methods and order tracking.",
      architecture: ["Product Catalog", "Shopping Cart System", "Stripe Payment Gateway", "Order Management", "User Authentication"]
    },
    {
      title: "Custom Operating System (os623 series)",
      category: "Systems",
      description: "x86 operating system built from scratch with bootloader and protected mode",
      tools: ["x86 Assembly", "BIOS Interrupts", "Protected Mode", "C"],
      visual: "⚙️ Boot Sequence",
      details: "Developed a custom operating system featuring bootloader, memory management, interrupt handling, and protected mode operation. Includes basic shell and file system implementation.",
      architecture: ["BIOS Boot", "Bootloader (Assembly)", "Protected Mode Switch", "Kernel Initialization", "Memory Manager", "Shell Interface"]
    }
  ];

  const categories = ["All", "AI/ML", "Data", "Systems", "Web"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-16 overflow-hidden">
      {/* Unified background matching hero */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--neon-glow))]/5 to-[hsl(var(--background))]" />
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[hsl(var(--neon-glow))] via-transparent to-[hsl(var(--cyber-violet))] rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-header">Featured Projects</h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                variant={filter === cat ? "default" : "outline"}
                size="sm"
                className={`px-4 py-1.5 text-sm font-mono transition-all duration-300 ${
                  filter === cat 
                    ? "bg-[hsl(var(--cyber-blue))] border-[hsl(var(--cyber-blue))] neon-glow" 
                    : "border-[hsl(var(--cyber-blue))]/40 text-[hsl(var(--cyber-blue))] hover:bg-[hsl(var(--cyber-blue))]/10 hover:border-[hsl(var(--cyber-blue))]"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <Card className="glass-card p-5 h-full neon-border hover:neon-glow transition-all duration-300">
                <div className="text-3xl mb-3">{project.visual}</div>
                <h3 className="text-lg font-bold gradient-text mb-2">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tools.slice(0, 3).map((tool, i) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-medium glass-card"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium glass-card">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full text-xs border-[hsl(var(--cyber-blue))]/40 text-[hsl(var(--cyber-blue))] hover:bg-[hsl(var(--cyber-blue))]/10 hover:border-[hsl(var(--cyber-blue))] transition-all"
                >
                  View Details
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.35, 
                ease: [0.16, 1, 0.3, 1]
              }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card neon-glow rounded-2xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <Button
                onClick={() => setSelectedProject(null)}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-[hsl(var(--cyber-blue))] hover:bg-[hsl(var(--cyber-blue))]/10"
              >
                <X className="w-6 h-6" />
              </Button>

              <div className="text-5xl mb-6">{selectedProject.visual}</div>
              <h2 className="text-4xl font-bold gradient-text mb-4">{selectedProject.title}</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--cyber-blue))] mb-3">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--cyber-violet))] mb-3">Architecture Flow</h3>
                <div className="space-y-2">
                  {selectedProject.architecture.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-[hsl(var(--cyber-blue))]20 flex items-center justify-center text-sm font-bold text-[hsl(var(--cyber-blue))]">
                        {index + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--neon-glow))] mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-lg glass-card neon-border text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InteractiveProjects;
