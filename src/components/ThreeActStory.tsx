import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Wrench, Rocket } from "lucide-react";

const acts = [
  {
    title: "Foundation",
    icon: GraduationCap,
    color: "hsl(var(--cyber-blue))",
    bullets: [
      "🎓 Master's in Data Science @ Eastern Michigan • GPA 3.88/4.0",
      "💻 Built OS bootloader in x86 Assembly, explored kernel internals",
      "🤖 Research: Hybrid ML architectures (LSTM + CNN + RNN fusion)",
      "📊 Statistical modeling, large-scale dataset analysis, algorithm design"
    ]
  },
  {
    title: "Build",
    icon: Wrench,
    color: "hsl(var(--neon-glow))",
    bullets: [
      "⚡ Real-time pipelines: Kafka + Spark streaming, 10K+ events/sec",
      "☁️ GCP infrastructure: BigQuery, dbt, Terraform, Kestra orchestration",
      "🧠 NLP sentiment analysis: 84% accuracy, TF-IDF + Scikit-learn",
      "🔧 Full-stack dev: Django, Node.js, MySQL, Stripe, AWS deployment"
    ]
  },
  {
    title: "Launch",
    icon: Rocket,
    color: "hsl(var(--cyber-violet))",
    bullets: [
      "🚀 Production systems handling 1M+ daily events at 99.9% uptime",
      "📈 40% reliability boost via automated workflows & error handling",
      "🎯 ML models deployed end-to-end: data → training → API → dashboards",
      "💡 Building intelligent, scalable systems that bridge AI, data & software"
    ]
  }
];

const ThreeActStory = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--cyber-violet))] rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-header">My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three acts of building intelligent systems — from theory to production
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {acts.map((act, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="glass-card neon-border p-8 h-full hover:scale-105 transition-all duration-500 relative group">
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{ 
                    background: `radial-gradient(circle at center, ${act.color}, transparent 70%)`
                  }}
                />

                {/* Icon */}
                <div className="relative z-10">
                  <div 
                    className="inline-flex p-4 rounded-2xl mb-6"
                    style={{ 
                      backgroundColor: `${act.color}20`,
                      boxShadow: `0 0 30px ${act.color}40`
                    }}
                  >
                    <act.icon className="w-10 h-10" style={{ color: act.color }} />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-3xl font-bold mb-6"
                    style={{ color: act.color }}
                  >
                    {act.title}
                  </h3>

                  {/* Bullets */}
                  <div className="space-y-4">
                    {act.bullets.map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="text-sm leading-relaxed text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {bullet}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Act number */}
                <div 
                  className="absolute top-6 right-6 text-6xl font-bold opacity-10"
                  style={{ color: act.color }}
                >
                  {index + 1}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeActStory;
