import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection />
      
      <SectionReveal>
        <AboutSection />
      </SectionReveal>
      
      <SectionReveal>
        <TechStackSection />
      </SectionReveal>
      
      <SectionReveal>
        <ExperienceSection />
      </SectionReveal>
      
      <SectionReveal>
        <ProjectsSection />
      </SectionReveal>
      
      <SectionReveal>
        <AchievementsSection />
      </SectionReveal>

      <SectionReveal>
        <GallerySection />
      </SectionReveal>
      
      <SectionReveal>
        <ContactSection />
      </SectionReveal>
      
      <Footer />
    </main>
  );
}
