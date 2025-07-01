// src/components/ExperienceSection.tsx
import experienceData from '@/data/experience.json';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-foreground">
          Professional Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* The vertical line */}
          <div className="absolute left-4 top-4 w-0.5 h-full bg-border -ml-px"></div>

          {experienceData.map((job) => (
            <div key={job.id} className="relative pl-12 mb-8">
              {/* The timeline dot */}
              <div className="absolute left-0 top-1 w-8 h-8 bg-primary rounded-full border-4 border-secondary flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary font-heading">{job.role}</CardTitle>
                  <CardDescription className="pt-1">
                    {job.company} · {job.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {job.duties.map((duty, i) => (
                      <li key={i}>{duty}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;