// src/components/PublicationsSection.tsx
import publicationsData from '@/data/publications.json';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// 1. Import the icons we need from lucide-react
import { BookMarked, Mic, ExternalLink } from 'lucide-react';

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-foreground">
          Publications & Talks
        </h2>

        {/* 2. A responsive grid for the publication cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {publicationsData.map((item) => (
            <Card key={item.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start gap-4">
                  {/* 3. Conditional icon based on the item type */}
                  <div className="text-primary mt-1">
                    {item.type === 'Journal Article' ? (
                      <BookMarked size={24} />
                    ) : (
                      <Mic size={24} />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {item.type} · {item.year}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{item.venue}</p>
              </CardContent>
              
              {/* 4. Display the button ONLY if a link exists */}
              {item.link && (
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;