import { motion } from "framer-motion";
import { Award, Shield, BookOpen, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    { name: "AWS Cloud Practitioner", issuer: "AWS", icon: Shield, color: "hsl(var(--cyber-blue))" },
    { name: "Data Analysis", issuer: "Microsoft", icon: Brain, color: "hsl(var(--cyber-violet))" },
    { name: "Elements of AI", issuer: "Helsinki Uni", icon: BookOpen, color: "hsl(var(--neon-glow))" },
    { name: "AI Essentials", issuer: "Google", icon: Brain, color: "hsl(200 100% 50%)" },
    { name: "ML Foundations", issuer: "AWS", icon: Brain, color: "hsl(var(--cyber-blue))" },
    { name: "SWE Simulation", issuer: "JPMorgan", icon: Award, color: "hsl(var(--cyber-violet))" }
  ];

  return (
    <section id="certifications" className="relative py-16 overflow-hidden">
      {/* Unified background matching hero */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--cyber-blue))]/5 to-[hsl(var(--background))]" />
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <Card className="glass-card neon-border p-3 h-full hover:neon-glow transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-2">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <cert.icon className="w-4 h-4" style={{ color: cert.color }} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold gradient-text leading-tight mb-0.5">{cert.name}</h3>
                    <p className="text-[9px] text-muted-foreground">{cert.issuer}</p>
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
