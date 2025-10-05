import Navbar from "@/components/Navbar";
import FuturisticHero from "@/components/FuturisticHero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import InteractiveProjectsShowcase from "@/components/InteractiveProjectsShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = "Umadevi Thulluru | Software Engineer | Data Engineer | AI/ML Developer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio of Umadevi Thulluru - Software Engineer, Data Engineer, and AI/ML Developer specializing in building intelligent, scalable data-driven systems.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0E121B] via-[#1A1F2E] to-[#0E121B] text-foreground dark">
      <Navbar />
      <main className="relative">
        <FuturisticHero />
        <AboutSection />
        <SkillsSection />
        <InteractiveProjectsShowcase />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
