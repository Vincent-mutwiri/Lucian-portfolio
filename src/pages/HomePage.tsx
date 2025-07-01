// src/pages/HomePage.tsx
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import PublicationsSection from '@/components/PublicationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <PublicationsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};
export default HomePage;