import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-6 border-t border-primary/10 overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs text-muted-foreground font-mono">
            <span className="gradient-text font-semibold">Umadevi Thulluru</span> • Building Intelligent Systems
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
