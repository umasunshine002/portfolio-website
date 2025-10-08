import { motion } from "framer-motion";
import { Code, Database, Cloud, Cpu, Brain, BarChart3, Layers } from "lucide-react";

const WorkflowArchitecture = () => {
  const techLayers = [
    {
      title: "Foundational Layer: Systems & Scripting",
      icon: Code,
      color: "hsl(var(--cyber-blue))",
      skills: ["C", "C++", "Python", "Bash", "PowerShell", "Assembly", "Shell Scripting"]
    },
    {
      title: "Data & Storage Layer: Databases",
      icon: Database,
      color: "hsl(var(--cyber-violet))",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "BigQuery", "SQLite"]
    },
    {
      title: "Processing & Infrastructure Layer",
      icon: Cpu,
      color: "hsl(var(--neon-glow))",
      skills: ["Apache Spark", "Hadoop", "Kafka", "Docker", "Airflow", "Terraform"]
    },
    {
      title: "Cloud & DevOps Layer",
      icon: Cloud,
      color: "hsl(200 100% 50%)",
      skills: ["AWS (EC2, S3, RDS, Lambda, CloudWatch)", "GCP (BigQuery, GCS, Compute Engine)"]
    },
    {
      title: "Machine Learning & AI Layer",
      icon: Brain,
      color: "hsl(280 100% 60%)",
      skills: ["TensorFlow", "PyTorch", "Hugging Face", "Transformers", "OpenAI APIs", "Scikit-learn", "NLP"]
    },
    {
      title: "Visualization & Application Layer",
      icon: BarChart3,
      color: "hsl(160 100% 50%)",
      skills: ["Tableau", "Looker Studio", "Power BI", "Streamlit", "Flask", "Django", "HTML/CSS/JS"]
    }
  ];

  const additionalSkills = [
    "Data Wrangling", "API Integration", "RESTful Design", "Git/GitHub", 
    "Data Modeling", "ETL Design", "Unit Testing", "Agile", "JSON", 
    "XML", "Pandas", "NumPy"
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[hsl(var(--cyber-blue))] rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[hsl(var(--cyber-violet))] rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-header mb-4">Workflow Architecture & Core Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end system understanding across the entire technology stack
          </p>
        </motion.div>

        {/* Layered Architecture */}
        <div className="max-w-6xl mx-auto space-y-6 mb-20">
          {techLayers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl neon-border hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: `${layer.color}20` }}
                  >
                    <layer.icon className="w-8 h-8" style={{ color: layer.color }} />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">{layer.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {layer.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 rounded-lg text-sm font-medium glass-card cursor-pointer"
                      style={{ 
                        borderLeft: `3px solid ${layer.color}`,
                        boxShadow: `0 0 10px ${layer.color}20`
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Connecting line to next layer */}
              {index < techLayers.length - 1 && (
                <div 
                  className="absolute left-1/2 -bottom-3 w-1 h-6 transform -translate-x-1/2"
                  style={{ 
                    background: `linear-gradient(to bottom, ${layer.color}, ${techLayers[index + 1].color})`,
                    opacity: 0.3
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-card p-8 rounded-2xl neon-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-[hsl(var(--cyber-blue))]20">
                <Layers className="w-8 h-8 text-[hsl(var(--cyber-blue))]" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Additional Skills & Tools</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  className="px-4 py-2 rounded-full glass-card text-sm font-medium cursor-pointer neon-glow"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowArchitecture;
