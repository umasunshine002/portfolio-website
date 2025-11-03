import Navbar from "@/components/Navbar";
import FuturisticHero from "@/components/FuturisticHero";
import JourneyPhases from "@/components/JourneyPhases";
import WorkflowArchitecture from "@/components/WorkflowArchitecture";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#1A1F2E] via-[#252B3D] to-[#1A1F2E] text-foreground overflow-x-hidden"
    >
      <Navbar />
      <main className="relative">
        <FuturisticHero />
        <WorkflowArchitecture />
        <JourneyPhases />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
