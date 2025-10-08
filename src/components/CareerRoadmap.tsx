import { motion } from "framer-motion";
import { Cloud, Code, GraduationCap, Database, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const CareerRoadmap = () => {
  const experiences = [
    {
      icon: Cloud,
      role: "Cloud Intern (AWS)",
      company: "Amazon Web Services",
      period: "2023",
      color: "hsl(var(--cyber-blue))",
      achievements: [
        "Cloud infrastructure setup and automation",
        "Deployment pipeline optimization",
        "Scripting for AWS resource management"
      ]
    },
    {
      icon: Code,
      role: "Software Engineer",
      company: "AIS",
      period: "2023-2024",
      color: "hsl(var(--cyber-violet))",
      achievements: [
        "Backend API development and integration",
        "System performance optimization",
        "Microservices architecture design"
      ]
    },
    {
      icon: GraduationCap,
      role: "Graduate Assistant",
      company: "University Research Lab",
      period: "2024",
      color: "hsl(var(--neon-glow))",
      achievements: [
        "ML research and experimentation",
        "Teaching support for CS courses",
        "Academic paper contributions"
      ]
    },
    {
      icon: Database,
      role: "Data Engineering Projects",
      company: "Personal & Contract Work",
      period: "2024-Present",
      color: "hsl(200 100% 50%)",
      achievements: [
        "Real-time data pipelines with Spark",
        "GCP workflow optimization",
        "ETL pipeline architecture"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--cyber-blue))] rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-header mb-4">Career Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Evolution through cloud, software, research, and data engineering
          </p>
        </motion.div>

        {/* Horizontal scrollable roadmap for desktop */}
        <div className="hidden lg:block overflow-x-auto pb-8">
          <div className="flex gap-8 min-w-max px-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <Card className="glass-card neon-border p-8 w-[350px] hover:neon-glow transition-all duration-300">
                  <div 
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center mx-auto"
                    style={{ backgroundColor: `${exp.color}20` }}
                  >
                    <exp.icon className="w-8 h-8" style={{ color: exp.color }} />
                  </div>
                  
                  <h3 className="text-2xl font-bold gradient-text text-center mb-2">{exp.role}</h3>
                  <p className="text-center text-sm text-muted-foreground mb-1">{exp.company}</p>
                  <p className="text-center text-xs font-mono mb-6" style={{ color: exp.color }}>{exp.period}</p>
                  
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: exp.color }}
                        />
                        <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Connecting line */}
                {index < experiences.length - 1 && (
                  <div 
                    className="absolute top-1/2 -right-8 w-8 h-1"
                    style={{ 
                      background: `linear-gradient(to right, ${exp.color}, ${experiences[index + 1].color})`,
                      opacity: 0.5
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical layout for mobile/tablet */}
        <div className="lg:hidden space-y-8 max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <Card className="glass-card neon-border p-6 hover:neon-glow transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${exp.color}20` }}
                  >
                    <exp.icon className="w-7 h-7" style={{ color: exp.color }} />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold gradient-text mb-1">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
                    <p className="text-xs font-mono mb-4" style={{ color: exp.color }}>{exp.period}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div 
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: exp.color }}
                          />
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Connecting line for mobile */}
              {index < experiences.length - 1 && (
                <div 
                  className="w-1 h-8 mx-auto my-2"
                  style={{ 
                    background: `linear-gradient(to bottom, ${exp.color}, ${experiences[index + 1].color})`,
                    opacity: 0.5
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmap;
