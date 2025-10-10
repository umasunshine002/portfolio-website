import Navbar from "@/components/Navbar";
import FuturisticHero from "@/components/FuturisticHero";
import HorizontalJourney from "@/components/HorizontalJourney";
import TechFlowMap from "@/components/TechFlowMap";
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
    document.title = "Umadevi Thulluru | AI & ML Engineer • Data Engineer • Software Developer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Computer Science Engineer passionate about crafting intelligent, data-driven systems. Expertise in ML, NLP, data engineering, cloud infrastructure, and system-level development.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2E] via-[#252B3D] to-[#1A1F2E] text-foreground overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <FuturisticHero />
        <HorizontalJourney />
        <TechFlowMap />
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
