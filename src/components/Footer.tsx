import { motion } from "framer-motion";
import { Heart, Code, Brain, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-primary/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E121B] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--cyber-blue))] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Main message */}
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-muted-foreground">Built with</span>
            <Heart className="w-5 h-5 text-[hsl(var(--cyber-blue))] fill-[hsl(var(--cyber-blue))] animate-pulse" />
            <Code className="w-5 h-5 text-[hsl(var(--cyber-violet))]" />
            <Brain className="w-5 h-5 text-[hsl(var(--neon-glow))]" />
            <Sparkles className="w-5 h-5 text-[hsl(var(--cyber-blue))] animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Umadevi Thulluru. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Crafted with <span className="gradient-text font-semibold">React</span>, 
              <span className="gradient-text font-semibold"> TypeScript</span>, and 
              <span className="gradient-text font-semibold"> Framer Motion</span>
            </p>
          </div>

          {/* Easter egg */}
          <div className="pt-4">
            <p className="text-xs text-muted-foreground font-mono opacity-50 hover:opacity-100 transition-opacity">
              <span className="text-[hsl(var(--cyber-blue))]">{"{"}</span>
              <span className="text-[hsl(var(--neon-glow))]"> "status"</span>: 
              <span className="text-[hsl(var(--cyber-violet))]"> "building_the_future"</span>
              <span className="text-[hsl(var(--cyber-blue))]"> {"}"}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
