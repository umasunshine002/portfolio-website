import { motion } from "framer-motion";
import { Heart, Code, Brain, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-primary/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E121B] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="gradient-text font-semibold">Uma Devi Thulluru</span> — Building Intelligent Systems — Online
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
