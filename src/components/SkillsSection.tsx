import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Brain, Database, Code, Cloud, Sparkles, Cpu, Network, Layers } from "lucide-react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "hsl(var(--cyber-blue))",
      skills: [
        { name: "TensorFlow & PyTorch", level: 85 },
        { name: "Scikit-learn & Keras", level: 88 },
        { name: "NLP & LLMs", level: 82 },
        { name: "Computer Vision", level: 78 },
        { name: "Predictive Modeling", level: 90 }
      ]
    },
    {
      title: "Data Engineering",
      icon: Database,
      color: "hsl(var(--cyber-violet))",
      skills: [
        { name: "Apache Kafka & Spark", level: 87 },
        { name: "ETL/ELT Pipelines", level: 92 },
        { name: "dbt & Kestra", level: 85 },
        { name: "Data Warehousing", level: 88 },
        { name: "Stream Processing", level: 86 }
      ]
    },
    {
      title: "Software Engineering",
      icon: Code,
      color: "hsl(var(--neon-glow))",
      skills: [
        { name: "Python & C/C++", level: 95 },
        { name: "JavaScript & TypeScript", level: 88 },
        { name: "SQL & NoSQL", level: 92 },
        { name: "System Design", level: 85 },
        { name: "API Development", level: 90 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "hsl(200 100% 50%)",
      skills: [
        { name: "GCP & AWS", level: 86 },
        { name: "Docker & Kubernetes", level: 82 },
        { name: "Terraform & IaC", level: 85 },
        { name: "CI/CD Pipelines", level: 88 },
        { name: "Monitoring & Logging", level: 84 }
      ]
    }
  ];

  const technologies = [
    { name: "Python", icon: Code, category: "Language" },
    { name: "TensorFlow", icon: Brain, category: "ML" },
    { name: "Kafka", icon: Network, category: "Streaming" },
    { name: "Spark", icon: Cpu, category: "Big Data" },
    { name: "Docker", icon: Layers, category: "DevOps" },
    { name: "GCP", icon: Cloud, category: "Cloud" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "Kubernetes", icon: Sparkles, category: "Orchestration" }
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--cyber-violet))] rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-header text-center mb-8">Tech Arsenal</h2>
          <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-20">
            Full-stack technical expertise across the entire data & AI lifecycle
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setActiveCategory(category.title)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <Card className={`glass-card p-8 h-full transition-all duration-500 ${
                activeCategory === category.title ? 'neon-glow scale-105' : ''
              }`}>
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="p-4 rounded-2xl"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <category.icon className="w-8 h-8" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-bold" style={{ color: category.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.1, duration: 0.8 }}
                          className="h-full rounded-full"
                          style={{ 
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}cc)`,
                            boxShadow: `0 0 10px ${category.color}80`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="glass-card p-6 rounded-2xl cursor-pointer neon-border"
              >
                <tech.icon className="w-10 h-10 text-[hsl(var(--cyber-blue))] mx-auto mb-2" />
                <p className="text-sm font-medium text-center">{tech.name}</p>
                <p className="text-xs text-muted-foreground text-center mt-1">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

