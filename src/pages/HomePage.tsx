// src/pages/HomePage.tsx
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import PublicationsSection from '@/components/PublicationsSection';
import ProjectsSection from '@/components/ProjectsSection';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <PublicationsSection />
      <ProjectsSection />
    </main>
  );
};
export default HomePage;