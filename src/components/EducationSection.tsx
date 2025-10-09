import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Eastern Michigan University",
      location: "Ypsilanti, MI",
      period: "Aug 2023 – Apr 2025",
      gpa: "3.88/4.0"
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Sreenidhi Institute of Science and Technology",
      location: "Hyderabad, Telangana",
      period: "Aug 2019 – May 2023",
      gpa: "3.87/4.0"
    }
  ];

  return (
    <section id="education" className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(var(--neon-glow))] rounded-full blur-3xl opacity-5 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in computer science and engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="glass-card neon-border p-6 hover:neon-glow transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--cyber-blue))]20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-[hsl(var(--cyber-blue))]" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold gradient-text mb-1">{edu.degree}</h3>
                    <p className="text-base text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-mono text-[hsl(var(--cyber-blue))]">{edu.period}</span>
                      <span className="text-sm font-mono text-[hsl(var(--neon-glow))]">GPA: {edu.gpa}</span>
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
