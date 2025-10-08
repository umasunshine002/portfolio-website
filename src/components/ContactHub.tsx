import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const ContactHub = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[hsl(var(--cyber-blue))] via-[hsl(var(--cyber-violet))] to-[hsl(var(--neon-glow))] rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="section-header mb-12">Let's Connect</h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
            <motion.a
              href="https://www.linkedin.com/in/umadevithulluru/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <Card className="glass-card neon-border p-8 hover:neon-glow transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--cyber-blue))]20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8 text-[hsl(var(--cyber-blue))]" />
                </div>
                <p className="text-xl font-bold gradient-text">LinkedIn</p>
              </Card>
            </motion.a>

            <motion.a
              href="mailto:umathulluru02@gmail.com"
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <Card className="glass-card neon-border p-8 hover:neon-glow transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--cyber-violet))]20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-[hsl(var(--cyber-violet))]" />
                </div>
                <p className="text-xl font-bold gradient-text">Email</p>
              </Card>
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-muted-foreground font-mono"
          >
            Crafted by Uma Devi Thulluru • Always Building the Future.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHub;
