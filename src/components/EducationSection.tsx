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
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">Education</h2>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex-shrink-0 w-[320px]"
            >
              <Card className="bg-background/40 border-border/30 p-4 h-full hover:bg-background/60 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-4 h-4 text-primary/70" />
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <h3 className="text-sm font-bold text-foreground/90 mb-1 line-clamp-2">{edu.degree}</h3>
                    <p className="text-xs text-muted-foreground mb-0.5">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground/70 mb-1">{edu.location}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-mono text-primary/70">{edu.period}</span>
                      <span className="font-mono text-primary/60">GPA: {edu.gpa}</span>
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
