import { motion } from "framer-motion";
import { Code, Database, Cloud, Cpu, Brain, BarChart3 } from "lucide-react";

const WorkflowArchitecture = () => {
  const techLayers = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      color: "hsl(var(--cyber-blue))",
      skills: ["Python", "Java", "C++", "JavaScript", "HTML/CSS", "PHP", "SQL", "JavaFX", "Java Swing"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "hsl(var(--cyber-violet))",
      skills: ["AWS (EC2, S3, RDS, Lambda)", "GCP", "Docker", "Terraform", "CloudFormation"]
    },
    {
      title: "Data Engineering",
      icon: Database,
      color: "hsl(var(--neon-glow))",
      skills: ["Kafka", "Spark", "Kestra", "dbt", "MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "hsl(200 100% 50%)",
      skills: ["NumPy", "Pandas", "OpenCV", "TensorFlow", "Cosine Similarity", "NLP"]
    },
    {
      title: "Automation & Integration",
      icon: Cpu,
      color: "hsl(280 100% 60%)",
      skills: ["Microsoft Power Platform", "Power Apps", "Power Automate", "Power BI", "Google Apps Script"]
    },
    {
      title: "Visualization & Web",
      icon: BarChart3,
      color: "hsl(160 100% 50%)",
      skills: ["Looker Studio", "Flask", "Django", "Node.js", "React"]
    }
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[hsl(var(--cyber-blue))] rounded-full blur-3xl opacity-5 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            End-to-end expertise across the technology stack
          </p>
        </motion.div>

        {/* Compact Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {techLayers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="glass-card p-6 rounded-2xl neon-border hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${layer.color}20` }}
                  >
                    <layer.icon className="w-6 h-6" style={{ color: layer.color }} />
                  </div>
                  <h3 className="text-lg font-bold gradient-text">{layer.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {layer.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.03 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 rounded-lg text-xs font-medium glass-card cursor-pointer"
                      style={{ 
                        borderLeft: `2px solid ${layer.color}`,
                        boxShadow: `0 0 8px ${layer.color}15`
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowArchitecture;
