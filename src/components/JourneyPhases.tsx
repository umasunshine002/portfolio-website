import { motion } from "framer-motion";
import { Rocket, Wrench, Lightbulb } from "lucide-react";

const JourneyPhases = () => {
  const phases = [
    {
      icon: Lightbulb,
      title: "Foundation",
      color: "hsl(var(--cyber-blue))",
      items: [
        "Built x86 OS from scratch — bootloader, protected mode, BIOS interrupts",
        "Mastered C, C++, Assembly, Python — systems thinking to AI architecture",
        "Studied algorithms, data structures, OS fundamentals, and machine learning"
      ]
    },
    {
      icon: Wrench,
      title: "Build",
      color: "hsl(var(--cyber-violet))",
      items: [
        "Real-time pipelines: Kafka + Spark streaming, Kestra, dbt, Terraform on GCP",
        "ML/AI: CNNs for facial recognition, NLP transformers, sentiment analysis at scale",
        "Full-stack: Django + React dashboards, MySQL/MongoDB, Docker microservices"
      ]
    },
    {
      icon: Rocket,
      title: "Launch",
      color: "hsl(var(--neon-glow))",
      items: [
        "Data Engineer Intern @ KBTS — automated GCP pipelines, Looker dashboards",
        "Graduate Assistant @ EMU — Python automation, Flask apps, 50% efficiency boost",
        "Associate Consultant @ AIS — Power Platform automation, Java Swing UIs"
      ]
    }
  ];

  return (
    <section id="journey" className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[hsl(var(--cyber-violet))] rounded-full blur-3xl opacity-5 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">My Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From low-level systems to intelligent applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="glass-card neon-border p-5 rounded-xl hover:neon-glow transition-all duration-300">
                <div 
                  className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center mx-auto"
                  style={{ backgroundColor: `${phase.color}20` }}
                >
                  <phase.icon className="w-6 h-6" style={{ color: phase.color }} />
                </div>
                
                <h3 
                  className="text-xl font-bold text-center mb-4"
                  style={{ color: phase.color }}
                >
                  {phase.title}
                </h3>
                
                <div className="space-y-2">
                  {phase.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                      className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[10px] mt-0.5" style={{ color: phase.color }}>●</span>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Connecting arrow */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    className="text-3xl"
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
