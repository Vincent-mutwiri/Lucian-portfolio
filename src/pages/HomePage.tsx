// src/pages/HomePage.tsx
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import PublicationsSection from '@/components/PublicationsSection';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <PublicationsSection />
    </main>
  );
};
export default HomePage;