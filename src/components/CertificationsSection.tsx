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
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">Certifications</h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-background/40 border-border/30 px-3 py-2 hover:bg-background/60 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <cert.icon className="w-3 h-3" style={{ color: cert.color, opacity: 0.7 }} />
                  <span className="text-xs font-medium text-foreground/80">{cert.name}</span>
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
