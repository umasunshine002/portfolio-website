import { motion } from "framer-motion";
import { Rocket, Wrench, Lightbulb } from "lucide-react";

const JourneyPhases = () => {
  const phases = [
    {
      icon: Lightbulb,
      title: "Foundation",
      color: "hsl(var(--cyber-blue))",
      items: [
        "🧠 Built from scratch: bootloaders, kernels, memory managers (x86 Assembly)",
        "⚙️ Low-level systems thinking → high-level AI architecture",
        "📚 Studied systems, algorithms, and machine intelligence"
      ]
    },
    {
      icon: Wrench,
      title: "Build",
      color: "hsl(var(--cyber-violet))",
      items: [
        "🔧 Real-time pipelines: Kafka, Spark, Airflow, Terraform",
        "🤖 ML models: CNNs, NLP, transformers, sentiment analysis",
        "☁️ Cloud-native: AWS, GCP, Docker, microservices"
      ]
    },
    {
      icon: Rocket,
      title: "Launch",
      color: "hsl(var(--neon-glow))",
      items: [
        "🚀 Shipped production systems at scale",
        "💡 Open-source contributions & research",
        "🌐 Building intelligent, human-centered products"
      ]
    }
  ];

  return (
    <section id="journey" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[hsl(var(--cyber-violet))] rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-header mb-4">My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From low-level systems to intelligent applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="glass-card neon-border p-8 rounded-2xl hover:neon-glow transition-all duration-300">
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center mx-auto"
                  style={{ backgroundColor: `${phase.color}20` }}
                >
                  <phase.icon className="w-8 h-8" style={{ color: phase.color }} />
                </div>
                
                <h3 
                  className="text-3xl font-bold text-center mb-8"
                  style={{ color: phase.color }}
                >
                  {phase.title}
                </h3>
                
                <div className="space-y-4">
                  {phase.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Connecting arrow */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="text-4xl"
                    style={{ color: phase.color }}
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyPhases;
