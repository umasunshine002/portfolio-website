import { motion } from "framer-motion";
import { Lightbulb, Wrench, Rocket } from "lucide-react";

const HorizontalJourney = () => {
  const phases = [
    {
      icon: Lightbulb,
      title: "Foundation",
      color: "hsl(var(--cyber-blue))",
      desc: "Built x86 OS from scratch • Mastered C, Python, Assembly • Studied algorithms & ML"
    },
    {
      icon: Wrench,
      title: "Build",
      color: "hsl(var(--cyber-violet))",
      desc: "Real-time Kafka + Spark pipelines • ML/AI systems • Full-stack with Django + React"
    },
    {
      icon: Rocket,
      title: "Launch",
      color: "hsl(var(--neon-glow))",
      desc: "Data Engineer @ KBTS • Graduate Assistant @ EMU • Associate Consultant @ AIS"
    }
  ];

  return (
    <section id="journey" className="relative py-16 overflow-hidden">
      {/* Unified background matching hero */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--cyber-violet))]/5 to-[hsl(var(--background))]" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[hsl(var(--cyber-violet))] to-transparent rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-header">My Journey</h2>
        </motion.div>

        {/* Horizontal Path */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 md:gap-0 relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--cyber-blue))] via-[hsl(var(--cyber-violet))] to-[hsl(var(--neon-glow))] opacity-30" />

            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center"
              >
                {/* Icon Node */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-16 h-16 rounded-full glass-card neon-border flex items-center justify-center cursor-pointer relative z-10 mb-3"
                  style={{ 
                    backgroundColor: `${phase.color}15`,
                    boxShadow: `0 0 20px ${phase.color}40`
                  }}
                >
                  <phase.icon className="w-7 h-7" style={{ color: phase.color }} />
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-lg font-bold mb-2 font-mono"
                  style={{ color: phase.color }}
                >
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-[250px]">
                  {phase.desc}
                </p>

                {/* Arrow connector (hidden on last item and mobile) */}
                {index < phases.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    className="hidden md:block absolute top-8 -right-4 text-2xl z-20"
                    style={{ color: phase.color }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalJourney;
