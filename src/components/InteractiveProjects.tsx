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
      description: "Live streaming dashboard analyzing sentiment from Twitter data in real-time with sub-second latency",
      tools: ["Kafka", "Spark Streaming", "MongoDB", "Django", "NLP", "React"],
      visual: "📊",
      details: "Built a comprehensive real-time data pipeline that processes Twitter streams at scale, analyzing sentiment using advanced NLP models and visualizing results through an interactive dashboard. The system handles 10,000+ tweets per minute with sub-second latency, providing actionable insights into public opinion trends. Features include custom sentiment models, topic clustering, hashtag analytics, and geographic visualization of tweet origins.",
      architecture: ["Twitter API → Kafka Producer", "Spark Streaming Consumer with micro-batching", "NLP Sentiment Model (VADER + Custom Transformers)", "MongoDB Time-Series Storage", "Django REST API with WebSockets", "React Dashboard with real-time charts"]
    },
    {
      title: "Facial Recognition System",
      category: "AI/ML",
      description: "Deep learning-powered face detection and recognition system with real-time processing capabilities",
      tools: ["CNN", "OpenCV", "TensorFlow", "Python", "Keras", "NumPy"],
      visual: "🎯",
      details: "Implemented a high-accuracy convolutional neural network for facial recognition achieving 95%+ accuracy across diverse datasets. The system features real-time face detection, multi-face tracking, face encoding using 128-dimensional embeddings, and user authentication capabilities. Includes preprocessing pipelines for image normalization, augmentation techniques for model robustness, and efficient similarity matching using cosine distance metrics.",
      architecture: ["Video/Image Input", "Face Detection (Haar Cascades + HOG)", "CNN Feature Extraction (ResNet-50 backbone)", "128-D Face Encoding", "Cosine Similarity Matching", "Authentication & User Management"]
    },
    {
      title: "Medicine Recommendation System",
      category: "AI/ML",
      description: "NLP-powered intelligent medicine recommendation engine with drug interaction checking",
      tools: ["NLP", "Transformers", "BERT", "Flask", "scikit-learn", "Pandas"],
      visual: "💊",
      details: "Developed an intelligent healthcare system using state-of-the-art transformer models (BERT) to analyze patient symptoms and recommend appropriate medications. The system incorporates a comprehensive medical knowledge base, performs drug interaction checking to ensure patient safety, suggests optimal dosages based on patient profiles, and provides detailed medication information. Features include symptom-to-disease mapping, multi-symptom analysis, and contraindication warnings.",
      architecture: ["Symptom Input & Processing", "NLP Symptom Analysis (BERT Embeddings)", "Disease Classification Model", "Medical Knowledge Base Query", "Drug Interaction Check (RxNorm API)", "Recommendation Engine with Dosage Calculator"]
    },
    {
      title: "E-commerce Platform with Stripe",
      category: "Web",
      description: "Full-stack e-commerce solution with integrated payment processing and order management",
      tools: ["Node.js", "Django", "Stripe API", "PostgreSQL", "Redis", "React"],
      visual: "🛒",
      details: "Built a complete e-commerce platform featuring product catalog management, intelligent shopping cart with session persistence, secure checkout flow, and robust payment processing using Stripe API. The system supports multiple payment methods (cards, wallets, bank transfers), implements real-time inventory tracking, provides order status updates via email notifications, and includes an admin dashboard for product and order management. Features advanced search and filtering, user reviews, and wishlist functionality.",
      architecture: ["Product Catalog (PostgreSQL)", "Shopping Cart System (Redis Session)", "User Authentication (JWT)", "Stripe Payment Gateway Integration", "Order Processing Pipeline", "Email Notification Service", "Admin Dashboard"]
    },
    {
      title: "Custom Operating System (os623)",
      category: "Systems",
      description: "x86 operating system built from scratch with bootloader, protected mode, and basic shell",
      tools: ["x86 Assembly", "BIOS Interrupts", "Protected Mode", "C", "GDB", "QEMU"],
      visual: "⚙️",
      details: "Developed a custom operating system from the ground up, featuring a two-stage bootloader written in x86 assembly, protected mode operation with GDT setup, interrupt handling system (IDT), basic memory management with paging, and a command-line shell interface. The OS includes fundamental system calls, keyboard driver implementation, VGA text mode display driver, and a simple file system. This project demonstrates deep understanding of computer architecture, low-level programming, and systems design.",
      architecture: ["BIOS Boot Sequence", "Stage 1 Bootloader (512-byte)", "Stage 2 Bootloader (Kernel Loader)", "Protected Mode Switch & GDT Setup", "Kernel Initialization & IDT", "Memory Manager (Paging)", "Device Drivers (Keyboard, VGA)", "Shell Interface & System Calls"]
    }
  ];

  const categories = ["All", "AI/ML", "Data", "Systems", "Web"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--neon-glow))] rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-header mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transforming complex problems into intelligent solutions
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                variant={filter === cat ? "default" : "outline"}
                className={`px-6 py-2 ${
                  filter === cat 
                    ? "bg-[hsl(var(--cyber-blue))] border-[hsl(var(--cyber-blue))] neon-glow" 
                    : "border-[hsl(var(--cyber-blue))] text-[hsl(var(--cyber-blue))] hover:bg-[hsl(var(--cyber-blue))]/10"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards - Medium size */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <Card className="glass-card p-5 h-full neon-border hover:neon-glow transition-all duration-300">
                <div className="text-3xl mb-3">{project.visual}</div>
                <h3 className="text-lg font-bold gradient-text mb-2">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tools.slice(0, 4).map((tool, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-full text-[10px] font-medium glass-card"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 4 && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium glass-card">
                      +{project.tools.length - 4}
                    </span>
                  )}
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full text-xs border-[hsl(var(--cyber-blue))] text-[hsl(var(--cyber-blue))] hover:bg-[hsl(var(--cyber-blue))]/10"
                >
                  View Details
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card neon-glow rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
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
