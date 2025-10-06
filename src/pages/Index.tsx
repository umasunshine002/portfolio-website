import Navbar from "@/components/Navbar";
import FuturisticHero from "@/components/FuturisticHero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectConstellation from "@/components/ProjectConstellation";
import ThreeActStory from "@/components/ThreeActStory";
import ContactHub from "@/components/ContactHub";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = "Umadevi Thulluru | Interactive Developer Atelier — AI • ML • Data Engineering";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Interactive developer portfolio of Umadevi Thulluru - An immersive studio showcasing intelligent systems, real-time pipelines, ML models, and production-grade infrastructure. Explore the Project Constellation.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E121B] via-[#1A1F2E] to-[#0E121B] text-foreground overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <FuturisticHero />
        <ThreeActStory />
        <AboutSection />
        <SkillsSection />
        <ProjectConstellation />
        <ContactHub />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
