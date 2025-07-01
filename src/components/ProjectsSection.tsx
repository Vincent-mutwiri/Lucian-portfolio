// src/components/ProjectsSection.tsx
import projectsData from '@/data/projects.json';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-foreground">
          Key Projects
        </h2>
        
        {/* A responsive grid for the project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter>
                {/* A wrapper for the skill badges */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;