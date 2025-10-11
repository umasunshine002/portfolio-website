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
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">Connect</h2>

          {/* Classic terminal console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black border-2 border-green-500/30 rounded-lg overflow-hidden mb-8 shadow-[0_0_30px_rgba(34,197,94,0.15)]"
          >
            <div className="bg-green-950/30 border-b border-green-500/30 px-4 py-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-green-500" />
              <span className="font-mono text-sm text-green-500">contact.sh</span>
            </div>
            
            <div className="p-6 font-mono text-sm text-left bg-black">
              <div className="mb-3">
                <span className="text-green-500">$</span>
                <span className="text-green-400/80"> cat contact.info</span>
              </div>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-3 group">
                  <Linkedin className="w-4 h-4 text-green-500" />
                  <a 
                    href="https://www.linkedin.com/in/umadevithulluru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleTerminalClick("→ Opening LinkedIn...")}
                    className="text-green-400 hover:text-green-300 transition-colors underline decoration-green-500/30 hover:decoration-green-500"
                  >
                    linkedin.com/in/umadevithulluru
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-green-500" />
                  <a 
                    href={`mailto:${email}`}
                    onClick={() => handleTerminalClick("→ Composing email...")}
                    className="text-green-400 hover:text-green-300 transition-colors underline decoration-green-500/30 hover:decoration-green-500"
                  >
                    {email}
                  </a>
                </div>
              </div>
              {terminalText && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-green-500"
                >
                  {terminalText}
                  <span className="animate-pulse">_</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHub;
