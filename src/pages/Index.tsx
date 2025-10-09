import Navbar from "@/components/Navbar";
import FuturisticHero from "@/components/FuturisticHero";
import JourneyPhases from "@/components/JourneyPhases";
import WorkflowArchitecture from "@/components/WorkflowArchitecture";
import InteractiveProjects from "@/components/InteractiveProjects";
import EducationSection from "@/components/EducationSection";
import CareerRoadmap from "@/components/CareerRoadmap";
import CertificationsSection from "@/components/CertificationsSection";
import ContactHub from "@/components/ContactHub";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = "Uma Devi Thulluru | AI & ML Engineer • Data Engineer • Software Developer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Computer Science Engineer passionate about crafting intelligent, data-driven systems that bridge AI, software, and creativity. Expertise in ML, NLP, data engineering, cloud infrastructure, and system-level development.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E121B] via-[#1A1F2E] to-[#0E121B] text-foreground overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <FuturisticHero />
        <JourneyPhases />
        <WorkflowArchitecture />
        <InteractiveProjects />
        <EducationSection />
        <CareerRoadmap />
        <CertificationsSection />
        <ContactHub />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
