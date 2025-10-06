import { motion } from "framer-motion";
import { Activity, Zap, Target, Clock } from "lucide-react";

const LiveStatusPanel = () => {
  const stats = [
    {
      label: "Active Project",
      value: "Hospital Pipeline",
      icon: Activity,
      color: "hsl(var(--cyber-blue))",
      detail: "GCP + Kestra + dbt"
    },
    {
      label: "Throughput",
      value: "1M+ Events",
      icon: Zap,
      color: "hsl(var(--neon-glow))",
      detail: "Per day"
    },
    {
      label: "Model Accuracy",
      value: "84%",
      icon: Target,
      color: "hsl(var(--cyber-violet))",
      detail: "Real-time NLP"
    },
    {
      label: "Uptime",
      value: "99.9%",
      icon: Clock,
      color: "#06FFF0",
      detail: "Production systems"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + index * 0.1 }}
          className="glass-card neon-border p-6 rounded-2xl hover:scale-105 transition-all group relative overflow-hidden"
        >
          {/* Animated background pulse */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{ 
              background: `radial-gradient(circle at center, ${stat.color}, transparent 70%)`
            }}
          />
          
          {/* Icon */}
          <div className="relative z-10">
            <div 
              className="inline-flex p-2 rounded-lg mb-3 transition-transform group-hover:scale-110"
              style={{ backgroundColor: `${stat.color}20` }}
            >
              <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
            </div>
            
            {/* Value */}
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
              {stat.value}
            </div>
            
            {/* Label */}
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {stat.label}
            </div>
            
            {/* Detail */}
            <div 
              className="text-xs font-mono opacity-70"
              style={{ color: stat.color }}
            >
              {stat.detail}
            </div>
          </div>
          
          {/* Pulse indicator */}
          <div 
            className="absolute top-3 right-3 w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: stat.color }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default LiveStatusPanel;
