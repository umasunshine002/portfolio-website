import { motion } from "framer-motion";
import { Award, Shield, BookOpen, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
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
      issuer: "AWS (AICTE Academy)",
      icon: Brain,
      color: "hsl(var(--cyber-blue))"
    },
    {
      name: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co.",
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

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-7xl mx-auto px-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-background/40 border-border/30 p-3 hover:bg-background/60 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center gap-2">
                  <cert.icon className="w-5 h-5" style={{ color: cert.color, opacity: 0.7 }} />
                  <div>
                    <p className="text-xs font-bold text-foreground/90 mb-1">{cert.name}</p>
                    <p className="text-[10px] text-muted-foreground/70">{cert.issuer}</p>
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
