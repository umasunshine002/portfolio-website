
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold gradient-text">
              Umadevi Thulluru<span className="text-foreground">.dev</span>
            </a>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://www.linkedin.com/in/umadeviThulluru"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors transform hover:scale-125 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="hover:animate-pulse" />
            </a>
            <a
              href="https://github.com/umasunshine002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors transform hover:scale-125 transition-transform duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="hover:animate-pulse" />
            </a>
            <a
              href="mailto:umadevit67@gmail.com"
              className="hover:text-primary transition-colors transform hover:scale-125 transition-transform duration-300"
              aria-label="Email"
            >
              <Mail size={20} className="hover:animate-pulse" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© Umadevi Thulluru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
