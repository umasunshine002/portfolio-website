import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Texas at Arlington",
      period: "2023 - 2025",
      gpa: "3.8/4.0",
      focus: "Artificial Intelligence, Machine Learning, Data Engineering",
      achievements: [
        "Graduate Assistant - ML Research Lab",
        "Advanced coursework in Deep Learning and NLP",
        "Thesis: Real-Time Data Processing Systems"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Osmania University",
      period: "2019 - 2023",
      gpa: "3.6/4.0",
      focus: "Systems Programming, Algorithms, Database Systems",
      achievements: [
        "Built custom x86 Operating System from scratch",
        "Led tech club initiatives and workshops",
        "Outstanding Academic Performance Award"
      ]
    }
  ];

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[hsl(var(--neon-glow))] rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-header mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in computer science and intelligent systems
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="glass-card neon-border p-8 hover:neon-glow transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--cyber-blue))]20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-[hsl(var(--cyber-blue))]" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold gradient-text mb-2">{edu.degree}</h3>
                    <p className="text-lg text-muted-foreground mb-1">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-sm font-mono text-[hsl(var(--cyber-blue))]">{edu.period}</span>
                      <span className="text-sm font-mono text-[hsl(var(--neon-glow))]">GPA: {edu.gpa}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      Focus: {edu.focus}
                    </p>
                    
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-[hsl(var(--cyber-violet))] mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
