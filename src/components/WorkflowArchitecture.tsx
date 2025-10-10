import { motion } from "framer-motion";
import { Code, Database, Cloud, Brain } from "lucide-react";

const WorkflowArchitecture = () => {
  const techCategories = [
    {
      title: "System & Scripting",
      icon: Code,
      color: "hsl(var(--cyber-blue))",
      skills: ["C", "Python", "Bash", "Assembly", "Linux", "OSDev"]
    },
    {
      title: "AI / ML / Data Science",
      icon: Brain,
      color: "hsl(var(--neon-glow))",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "Hugging Face", "OpenCV", "LLMs", "NLP", "Pandas", "NumPy"]
    },
    {
      title: "Cloud & Data Engineering",
      icon: Cloud,
      color: "hsl(var(--cyber-violet))",
      skills: ["AWS", "Docker", "Kafka", "Spark", "MongoDB", "PostgreSQL", "Terraform", "ETL"]
    },
    {
      title: "Software & Web",
      icon: Database,
      color: "hsl(200 100% 50%)",
      skills: ["Node.js", "Django", "Flask", "Java", "Spring Boot", "React", "Git"]
    }
  ];

  return (
    <section id="skills" className="relative py-16 overflow-hidden">
      {/* Background effects matching hero */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[hsl(var(--cyber-blue))] via-[hsl(var(--cyber-violet))] to-[hsl(var(--neon-glow))] rounded-full blur-3xl opacity-5 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-header">Tech Stack</h2>
        </motion.div>

        {/* Compact flow visualization */}
        <div className="max-w-5xl mx-auto space-y-4">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="glass-card p-4 rounded-xl neon-border hover:neon-glow transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <category.icon className="w-5 h-5" style={{ color: category.color }} />
                  </div>
                  <h3 
                    className="text-base font-bold font-mono"
                    style={{ color: category.color }}
                  >
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-1.5 ml-11">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.02 }}
                      className="px-2.5 py-1 rounded-md text-xs font-medium glass-card hover:scale-105 transition-transform cursor-default"
                      style={{ 
                        borderLeft: `2px solid ${category.color}`,
                        boxShadow: `0 0 6px ${category.color}10`
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
