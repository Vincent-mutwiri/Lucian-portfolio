// src/components/Hero.tsx
import heroImage from '@/assets/lucian-headshot.jpg';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="about" className="bg-background py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground leading-tight">
            Lucian Talu Mayabi
          </h1>
          <p className="text-xl md:text-2xl font-sans text-primary mt-2">
            STEM Educator · Applied Mathematics Researcher
          </p>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto md:mx-0">
            Building bridges between complex mathematical concepts and real-world applications through innovative education and research.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Button asChild size="lg">
              <a href="/lucian_talu_cv.pdf" download>Download CV</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center order-first md:order-last">
          <img
            src={heroImage}
            alt="Professional headshot of Lucian Talu Mayabi"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-background"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;