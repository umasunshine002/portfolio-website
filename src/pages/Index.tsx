import Navbar from "@/components/Navbar";
import FuturisticHero from "@/components/FuturisticHero";
import AboutSection from "@/components/AboutSection";
import WorkflowArchitecture from "@/components/WorkflowArchitecture";
import InteractiveProjects from "@/components/InteractiveProjects";
import CareerRoadmap from "@/components/CareerRoadmap";
import ContactHub from "@/components/ContactHub";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = "Uma Devi Thulluru | AI Engineer • Data Engineer • Software Developer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Exploring Intelligence, Data, and Design. Uma Devi Thulluru\'s portfolio showcasing expertise in AI/ML, data engineering, cloud infrastructure, and intelligent system development.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E121B] via-[#1A1F2E] to-[#0E121B] text-foreground overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <FuturisticHero />
        <AboutSection />
        <WorkflowArchitecture />
        <InteractiveProjects />
        <CareerRoadmap />
        <ContactHub />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
