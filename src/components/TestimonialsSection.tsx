
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "My resume looked 10x better after a single session.",
      role: "Backend Developer"
    },
    {
      quote: "You helped me simplify my project section, and I finally started getting calls.",
      role: "Full-stack Engineer"
    },
    {
      quote: "Your mock interviews gave me structure I didn't have before.",
      role: "QA Engineer"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">Feedback</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="p-6">
                <blockquote className="text-slate-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-sm text-slate-500">— {testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
