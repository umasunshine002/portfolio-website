import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, ExternalLink, Mail, Linkedin, Github, FileText } from "lucide-react";
import BackToHome from "@/components/BackToHome";
import ParticleBackground from "@/components/ParticleBackground";

const Contact = () => {
  const [terminalText, setTerminalText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    document.title = "Connect | Uma Devi Thulluru";

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleLinkClick = (platform: string) => {
    setTerminalText(`> Redirecting to ${platform}...`);
    setTimeout(() => {
      setTerminalText("");
    }, 2000);
  };

  const terminalLines = [
    { type: "system", text: "SYSTEM INITIALIZED" },
    { type: "separator", text: "━".repeat(60) },
    { type: "header", text: "CONTACT TERMINAL v2.0" },
    { type: "separator", text: "━".repeat(60) },
    { type: "status", text: "> STATUS: AVAILABLE FOR OPPORTUNITIES" },
    { type: "empty", text: "" },
    { type: "label", text: "CONNECT:" },
  ];

  const contactLinks = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/umadevithulluru/",
      icon: Linkedin,
      command: "--linkedin"
    },
    {
      platform: "GitHub",
      url: "https://github.com/Umadevithulluru",
      icon: Github,
      command: "--github"
    },
    {
      platform: "Email",
      url: "mailto:umadevithulluru@gmail.com",
      icon: Mail,
      command: "--email",
      display: "umadevithulluru@gmail.com"
    },
    {
      platform: "Resume",
      url: "/UT_Resume.pdf",
      icon: FileText,
      command: "--resume"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2E] via-[#252B3D] to-[#1A1F2E] text-foreground overflow-x-hidden">
      <ParticleBackground />
      <BackToHome />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-32 pb-20 relative z-10 flex items-center justify-center min-h-screen"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full max-w-4xl"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Connect</h1>
            <p className="text-xl text-muted-foreground">
              Let's build something intelligent together
            </p>
          </div>

          {/* Terminal */}
          <div className="bg-black border-2 border-[#00FF00] rounded-lg shadow-2xl overflow-hidden" style={{ boxShadow: "0 0 40px rgba(0, 255, 0, 0.3)" }}>
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] border-b border-[#00FF00] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Terminal className="w-4 h-4 text-[#00FF00]" />
                <span className="font-mono text-sm text-[#00FF00]">contact@umadevi:~</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm space-y-2" style={{ backgroundColor: "#000000" }}>
              {/* Static terminal lines */}
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`
                    ${line.type === "system" ? "text-[#00FF00] font-bold" : ""}
                    ${line.type === "separator" ? "text-[#00FF00] opacity-50" : ""}
                    ${line.type === "header" ? "text-[#00FFFF] font-bold text-center text-lg" : ""}
                    ${line.type === "status" ? "text-[#00FF00]" : ""}
                    ${line.type === "label" ? "text-[#00FFFF] font-bold mt-4" : ""}
                  `}
                >
                  {line.text}
                </motion.div>
              ))}

              {/* Contact Links */}
              <div className="space-y-3 mt-4">
                {contactLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleLinkClick(link.platform)}
                      className="flex items-center gap-3 text-[#00FF00] hover:text-[#00FFFF] hover:bg-[#00FF00]/10 p-3 rounded transition-all duration-300 group"
                    >
                      <span className="text-[#00FF00]">&gt;</span>
                      <span>connect {link.command}</span>
                      <link.icon className="w-4 h-4" />
                      {link.display && <span className="text-[#00FFFF]">[{link.display}]</span>}
                      <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Dynamic feedback */}
              {terminalText && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#00FFFF] mt-4"
                >
                  {terminalText}
                </motion.div>
              )}

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8 pt-4 border-t border-[#00FF00]/30"
              >
                <p className="text-[#00FF00]">
                  &gt; status: <span className="text-[#00FFFF]">OPEN FOR AI, DATA, AND CLOUD ENGINEERING ROLES</span>
                  <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-muted-foreground">
              © Uma Devi Thulluru | Engineering Intelligence
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
