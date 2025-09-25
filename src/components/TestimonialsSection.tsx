
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const TestimonialsSection = () => {
  const [containerRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Akash B.",
      role: "Business Analyst",
      story: "After a single session, my resume was completely transformed. The new format and content highlighted my skills in a way I couldn't, leading to a 50% increase in interview calls.",
      outcome: "Landed a BA  role at a top fintech company from a Bank.",
      
    },
    {
      name: "Payal L.",
      role: "QA Engineer",
      story: "I was struggling to explain my complex projects. The project storytelling guidance helped me simplify my descriptions, and I finally started getting past the initial screening.",
      outcome: "Received 3 offers from mid-sized startups.",
      
    },
    {
      name: "Amit S.",
      role: "QA Engineer",
      story: "The mock interviews were a game-changer. They gave me the structure and confidence I needed to articulate my thoughts clearly. I felt prepared for any question.",
      outcome: "Transitioned to an SDET role with a 30% salary increase.",
    },
  ];

  return (
    <section ref={containerRef} className={`py-20 px-4 bg-background fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-light text-foreground mb-12 text-center">Client Success Stories</h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border shadow-sm card-hover-effect">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 italic">"{testimonial.story}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium mt-2">{testimonial.outcome}</p>
                  </div>
                  {testimonial.linkedin && (
                    <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
