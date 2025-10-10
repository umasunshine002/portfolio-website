import { motion } from "framer-motion";
import { Award, Shield, BookOpen, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: Shield,
      color: "hsl(var(--cyber-blue))"
    },
    {
      name: "Career Essentials in Data Analysis",
      issuer: "Microsoft & LinkedIn",
      icon: Brain,
      color: "hsl(var(--cyber-violet))"
    },
    {
      name: "Elements of AI",
      issuer: "University of Helsinki",
      icon: BookOpen,
      color: "hsl(var(--neon-glow))"
    },
    {
      name: "AI Essentials (Prompt Engineering & Multimodal AI)",
      issuer: "Google",
      icon: Brain,
      color: "hsl(200 100% 50%)"
    },
    {
      name: "Machine Learning Foundations",
      issuer: "AWS (AICTE)",
      icon: Brain,
      color: "hsl(var(--cyber-blue))"
    },
    {
      name: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase",
      icon: Award,
      color: "hsl(var(--cyber-violet))"
    }
  ];

  return (
    <section id="certifications" className="relative py-16 overflow-hidden">
      {/* Background effects matching hero */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[hsl(var(--cyber-blue))] to-transparent rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-header">Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="glass-card neon-border p-4 h-full hover:neon-glow transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <cert.icon className="w-5 h-5" style={{ color: cert.color }} />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-bold gradient-text mb-0.5">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
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

export default CertificationsSection;
