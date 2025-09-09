import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DashboardMetrics from "@/components/DashboardMetrics";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import AnalyticsProjects from "@/components/AnalyticsProjects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Umadevi Thulluru | Data & Business Analyst";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <DashboardMetrics />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <AnalyticsProjects />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
