import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Database, Cloud, Brain } from "lucide-react";

const TechFlowMap = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const techNodes = [
    {
      title: "System & Scripting",
      icon: Code,
      color: "hsl(var(--cyber-blue))",
      skills: ["C", "Python", "Bash", "Assembly", "Linux"]
    },
    {
      title: "AI / ML",
      icon: Brain,
      color: "hsl(var(--neon-glow))",
      skills: ["TensorFlow", "PyTorch", "Hugging Face", "OpenCV", "NLP"]
    },
    {
      title: "Cloud & Data",
      icon: Cloud,
      color: "hsl(var(--cyber-violet))",
      skills: ["AWS", "Docker", "Kafka", "Spark", "Terraform"]
    },
    {
      title: "Software",
      icon: Database,
      color: "hsl(200 100% 50%)",
      skills: ["Node.js", "Django", "Flask", "Java", "React"]
    }
  ];

  return (
    <section id="skills" className="relative py-16 overflow-hidden">
      {/* Unified background matching hero */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--cyber-blue))]/5 to-[hsl(var(--background))]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[hsl(var(--cyber-blue))] via-[hsl(var(--cyber-violet))] to-[hsl(var(--neon-glow))] rounded-full blur-3xl opacity-5 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-header">Tech Stack</h2>
        </motion.div>

        {/* Interactive Flow Map */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {techNodes.map((node, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredNode(index)}
                onHoverEnd={() => setHoveredNode(null)}
                className="relative flex flex-col items-center"
              >
                {/* Connection lines */}
                {index < techNodes.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 origin-left"
                    style={{ 
                      background: `linear-gradient(90deg, ${node.color}, ${techNodes[index + 1].color})`,
                      opacity: 0.3
                    }}
                  />
                )}

                {/* Node */}
                <motion.div
                  animate={{
                    scale: hoveredNode === index ? 1.15 : 1,
                    boxShadow: hoveredNode === index 
                      ? `0 0 30px ${node.color}80` 
                      : `0 0 10px ${node.color}30`
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-16 h-16 rounded-full glass-card neon-border flex items-center justify-center cursor-pointer relative z-10"
                  style={{ backgroundColor: `${node.color}10` }}
                >
                  <node.icon className="w-7 h-7" style={{ color: node.color }} />
                </motion.div>

                {/* Label */}
                <motion.p
                  className="mt-3 text-xs font-bold text-center font-mono"
                  style={{ color: node.color }}
                >
                  {node.title}
                </motion.p>

                {/* Expanded skills on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{
                    opacity: hoveredNode === index ? 1 : 0,
                    y: hoveredNode === index ? 0 : 10,
                    scale: hoveredNode === index ? 1 : 0.9,
                    pointerEvents: hoveredNode === index ? "auto" : "none"
                  }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-20 left-1/2 -translate-x-1/2 w-40 glass-card neon-glow rounded-lg p-3 z-20"
                >
                  <div className="space-y-1">
                    {node.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-[10px] font-medium text-muted-foreground"
                      >
                        • {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFlowMap;
