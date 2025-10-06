import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Database, Brain, Sparkles, Rocket, Zap } from "lucide-react";

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const journey = [
    {
      phase: "Foundation",
      icon: Code,
      color: "hsl(var(--cyber-blue))",
      text: "Started with computer science fundamentals, building a strong foundation in algorithms, data structures, and software engineering principles"
    },
    {
      phase: "Evolution",
      icon: Database,
      color: "hsl(var(--cyber-violet))",
      text: "Evolved into data engineering, mastering pipelines, real-time streaming with Kafka & Spark, and cloud-native architectures on GCP & AWS"
    },
    {
      phase: "Innovation",
      icon: Brain,
      color: "hsl(var(--neon-glow))",
      text: "Now bridging AI/ML with engineering—building intelligent systems that don't just process data, but learn, predict, and adapt"
    }
  ];

  const coreValues = [
    { icon: Sparkles, label: "Innovation-Driven", desc: "Always exploring cutting-edge tech" },
    { icon: Rocket, label: "Performance-Focused", desc: "Optimize for scale and speed" },
    { icon: Zap, label: "Impact-Oriented", desc: "Build solutions that matter" }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[hsl(var(--cyber-blue))] rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--cyber-violet))] rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-header text-center mb-8">The Story</h2>
          <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-20">
            Building Intelligent Systems that Connect <span className="text-[hsl(var(--cyber-blue))] font-semibold">Data</span>, 
            <span className="text-[hsl(var(--cyber-violet))] font-semibold"> Code</span>, and 
            <span className="text-[hsl(var(--neon-glow))] font-semibold"> Creativity</span>
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="max-w-5xl mx-auto mb-20">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-12 last:mb-0"
            >
              <Card className="glass-card neon-border p-8 hover:scale-105 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div 
                    className="p-4 rounded-2xl neon-glow flex-shrink-0"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 gradient-text">{item.phase}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass-card p-6 text-center hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/50">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[hsl(var(--cyber-blue))] to-[hsl(var(--cyber-violet))] flex items-center justify-center neon-glow">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 gradient-text">{value.label}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;