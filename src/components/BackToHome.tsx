import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BackToHome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 left-4 z-40"
    >
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 glass-card neon-border rounded-lg hover:neon-glow transition-all duration-300 group"
      >
        <ArrowLeft className="w-4 h-4 text-[hsl(var(--cyber-blue))] group-hover:translate-x-[-4px] transition-transform" />
        <span className="text-sm font-medium text-[hsl(var(--cyber-blue))]">Back to Home</span>
      </Link>
    </motion.div>
  );
};

export default BackToHome;
