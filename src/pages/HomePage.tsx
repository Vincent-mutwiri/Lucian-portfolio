// src/pages/HomePage.tsx
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import PublicationsSection from '@/components/PublicationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Seo from '@/components/Seo';

const HomePage = () => {
  return (
    <main>
      <Seo title="Lucian Talu Mayabi | Portfolio" description="The official portfolio of Lucian Talu Mayabi, a Kenyan STEM educator, curriculum designer, and applied mathematics researcher." />
      <Hero />
      <ExperienceSection />
      <PublicationsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};
export default HomePage;