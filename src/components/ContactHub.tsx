import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Terminal } from "lucide-react";
import { useState } from "react";

const ContactHub = () => {
  const [terminalText, setTerminalText] = useState("");
  const email = "umathulluru02@gmail.com";

  const handleTerminalClick = (text: string) => {
    setTerminalText(text);
    setTimeout(() => setTerminalText(""), 2000);
  };

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
          <h2 className="section-header mb-12">Connect</h2>

          {/* Terminal-style contact box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card neon-border rounded-2xl overflow-hidden mb-8"
          >
            <div className="bg-[hsl(var(--card))] border-b border-[hsl(var(--cyber-blue))] px-4 py-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[hsl(var(--cyber-blue))]" />
              <span className="font-mono text-sm text-[hsl(var(--cyber-blue))]">contact.sh</span>
            </div>
            
            <div className="p-8 font-mono text-sm text-left">
              <div className="mb-2">
                <span className="text-[hsl(var(--neon-glow))]">$</span>
                <span className="text-muted-foreground"> cat contact.info</span>
              </div>
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-[hsl(var(--cyber-blue))]" />
                  <a 
                    href="https://www.linkedin.com/in/umadevithulluru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleTerminalClick("Opening LinkedIn...")}
                    className="text-[hsl(var(--cyber-blue))] hover:underline"
                  >
                    linkedin.com/in/umadevithulluru
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[hsl(var(--cyber-violet))]" />
                  <a 
                    href={`mailto:${email}`}
                    onClick={() => handleTerminalClick("Composing email...")}
                    className="text-[hsl(var(--cyber-violet))] hover:underline"
                  >
                    {email}
                  </a>
                </div>
              </div>
              {terminalText && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-[hsl(var(--neon-glow))]"
                >
                  {terminalText}
                  <span className="animate-pulse">_</span>
                </motion.div>
              )}
            </div>
          </motion.div>

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
