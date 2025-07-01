// src/components/ContactSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-foreground">
          Get In Touch
        </h2>
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 grid md:grid-cols-2 gap-12">
            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
                <p className="text-muted-foreground mt-2">
                  Feel free to reach out via email, phone, or find me on LinkedIn. I'm always open to discussing new projects and opportunities.
                </p>
              </div>
              <div className="space-y-4">
                <a href="mailto:talumayabi@gmail.com" className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">talumayabi@gmail.com</span>
                </a>
                <a href="tel:+254707040331" className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">+254 707 040 331</span>
                </a>
                <a href="https://www.linkedin.com/in/lucian-talu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">linkedin.com/in/lucian-talu</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            {/* IMPORTANT: The `data-netlify` attribute makes this form work on Netlify */}
            <form name="contact" method="POST" data-netlify="true">
              {/* This hidden input is required by Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="name">Your Name</Label>
                  <Input type="text" id="name" name="name" required />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">Your Email</Label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>

          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;