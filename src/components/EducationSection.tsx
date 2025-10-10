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
    <section id="education" className="relative py-16 overflow-hidden">
      {/* Unified background matching hero */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--neon-glow))]/5 to-[hsl(var(--background))]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-[hsl(var(--neon-glow))] to-transparent rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-header">Education</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="glass-card neon-border p-5 hover:neon-glow transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[hsl(var(--cyber-blue))]/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-[hsl(var(--cyber-blue))]" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold gradient-text mb-1">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground mb-0.5">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mb-2">{edu.location}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono text-[hsl(var(--cyber-blue))]">{edu.period}</span>
                      <span className="text-xs font-mono text-[hsl(var(--neon-glow))]">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
