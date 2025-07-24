
import { ContactForm } from "@/components/ContactForm";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhoIHelp } from "@/components/WhoIHelp";
import { CompaniesSection } from "@/components/CompaniesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      {
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-8 leading-tight">
          Career Support for Software Professionals
          <span className="block text-slate-600 font-normal text-3xl md:text-4xl mt-4">
            — Clear, Honest, Results-Focused
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Resume refinement, LinkedIn optimization, GitHub portfolio review, mock interviews, 
          project storytelling, and portfolio website building — everything you need to present 
          your skills with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            onClick={scrollToContact}
            className="bg-slate-800 hover:bg-slate-900 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        

        {/* Trust Indicators */ }
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Proven Results</h3>
            <p className="text-slate-600">People I've helped got interviews at Apple, Deloitte, TCS, and more</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">24-48 Hour Response</h3>
            <p className="text-slate-600">Quick turnaround on all requests and revisions</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 rounded-full p-4 mb-4">
              <CheckCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Transparent Pricing</h3>
            <p className="text-slate-600">Clear packages with no hidden costs or surprises</p>
          </div>
        </div>
      </section>
        }

      {/* How I Work */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-slate-800 mb-12 text-center">How I Work</h2>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-12">
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p className="text-xl font-medium text-slate-800">
                  I don't sell dreams. I help you present your real skills clearly.
                </p>
                <p>No guarantees of jobs. No unrealistic promises.</p>
                <p>
                  Just honest feedback based on what hiring teams actually look for, 
                  delivered quickly and professionally.
                </p>
                <div className="pt-6 border-t border-slate-200">
                  <p className="font-medium">
                    The result? People I've supported got interviews at 
                    <span className="text-slate-900"> Apple, Deloitte, Infosys, TCS, Capgemini, and more</span> — 
                    quietly and confidently.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Companies Section */}
      <CompaniesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Who I've Helped */}
      <WhoIHelp />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-light text-slate-800 mb-4 text-center">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 mb-12 text-center">
            Tell me what you need help with, and I'll get back to you within 24-48 hours.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-slate-800 text-slate-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:oknononsenseguy@gmail.com" className="hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-lg font-light mb-2">
            Quietly helping people build stronger software careers.
          </p>
          <p className="text-sm text-slate-400">
            Professional career support • Quick responses • Fair pricing
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
