import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import SkillsSection from "@/components/portfolio/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Ward Ekhtiar. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
