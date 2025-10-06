import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send, Terminal, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactHub = () => {
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const lines = [
      "$ initializing contact_module.py",
      "✓ Communication channels: ACTIVE",
      "✓ Response protocol: < 24 hours",
      "✓ Availability status: OPEN TO OPPORTUNITIES",
      "$ Ready to connect --mode=professional"
    ];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setConsoleLines(prev => [...prev, line]);
      }, index * 400);
    });

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/umadevithulluru/",
      color: "hsl(210 100% 50%)",
      description: "Connect professionally"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Umadevithulluru",
      color: "hsl(var(--cyber-violet))",
      description: "View my code"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:umathulluru02@gmail.com",
      color: "hsl(var(--neon-glow))",
      description: "Direct message"
    }
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--cyber-blue))] rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-header text-center mb-8">Let's Connect</h2>
          <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-20">
            Open to opportunities in <span className="text-[hsl(var(--cyber-blue))] font-semibold">Software Engineering</span>, 
            <span className="text-[hsl(var(--cyber-violet))] font-semibold"> Data Engineering</span>, and 
            <span className="text-[hsl(var(--neon-glow))] font-semibold"> AI/ML Development</span>
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Status Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="glass-card p-6 text-center border-2 border-primary/20">
              <Activity className="w-8 h-8 text-[hsl(var(--cyber-blue))] mx-auto mb-3 animate-pulse" />
              <div className="text-2xl font-bold gradient-text mb-1">Active</div>
              <div className="text-sm text-muted-foreground">Status</div>
            </Card>
            <Card className="glass-card p-6 text-center border-2 border-primary/20">
              <Send className="w-8 h-8 text-[hsl(var(--cyber-violet))] mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">&lt; 24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </Card>
            <Card className="glass-card p-6 text-center border-2 border-primary/20">
              <Terminal className="w-8 h-8 text-[hsl(var(--neon-glow))] mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">Open</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Terminal Console */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-card border-2 border-[hsl(var(--cyber-blue))]/30 bg-black/80 overflow-hidden">
                <div className="bg-gradient-to-r from-[hsl(var(--cyber-blue))]/20 to-[hsl(var(--cyber-violet))]/20 border-b border-[hsl(var(--cyber-blue))]/30 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[hsl(var(--cyber-blue))]" />
                      <span className="font-mono text-sm text-[hsl(var(--cyber-blue))]">contact@umadevi:~$</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      {currentTime.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2 font-mono text-sm text-green-400 h-80 overflow-y-auto">
                  {consoleLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {line}
                    </motion.div>
                  ))}
                  <div className="flex items-center mt-4">
                    <span className="text-green-400">$ </span>
                    <div className="w-2 h-4 bg-green-400 animate-pulse ml-1" />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="block"
                >
                  <Card className="glass-card p-6 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 neon-glow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div 
                          className="p-4 rounded-2xl"
                          style={{ backgroundColor: `${link.color}20` }}
                        >
                          <link.icon className="w-6 h-6" style={{ color: link.color }} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold gradient-text mb-1">{link.name}</h4>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                      </div>
                      <Send className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </Card>
                </motion.a>
              ))}

              {/* Call to Action */}
              <Card className="glass-card p-8 border-2 border-[hsl(var(--neon-glow))]/30 text-center">
                <h4 className="text-2xl font-bold gradient-text mb-4">Ready to Collaborate?</h4>
                <p className="text-muted-foreground mb-6">
                  Let's build intelligent systems that scale and make an impact
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="neon-glow bg-[hsl(var(--cyber-blue))] hover:bg-[hsl(var(--cyber-blue))]/80 border-2 border-[hsl(var(--cyber-blue))]"
                >
                  <a href="mailto:umathulluru02@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </a>
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHub;
