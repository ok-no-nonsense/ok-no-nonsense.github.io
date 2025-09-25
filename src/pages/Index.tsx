import { CompaniesSection } from "@/components/CompaniesSection";
import { ContactForm } from "@/components/ContactForm";
import { FaqSection } from "@/components/FaqSection";
import { SocialProof } from "@/components/SocialProof";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhoIHelp } from "@/components/WhoIHelp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, CheckCircle, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { ModeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      {/* Hero Section */}
      {
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-light text-slate-800 dark:text-slate-200 mb-8 leading-tight">
          Career Support for Software Professionals
          <span className="block text-slate-600 dark:text-slate-400 font-normal text-3xl md:text-4xl mt-4">
            Clear, Honest, Results-Focused
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Resume refinement, LinkedIn optimization, GitHub portfolio review, mock interviews, 
          project storytelling, and portfolio website building everything you need to present 
          your skills with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            onClick={scrollToContact}
            className="bg-slate-800 hover:bg-slate-900 dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-slate-800 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg"
          >
            Let’s Build Your Career
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        

        {/* Trust Indicators */ }
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-green-100 dark:bg-green-900/20 rounded-full p-4 mb-4">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Proven Results</h3>
            <p className="text-slate-600 dark:text-slate-400">People I've helped got interviews at Apple, Deloitte, TCS, and more</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full p-4 mb-4">
              <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">24-48 Hour Response</h3>
            <p className="text-slate-600 dark:text-slate-400">Quick turnaround on all requests and revisions</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full p-4 mb-4">
              <CheckCircle className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Personalized Support</h3>
            <p className="text-slate-600 dark:text-slate-400">Direct access and customized advice for your specific career goals</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-red-100 dark:bg-red-900/20 rounded-full p-4 mb-4">
              <Brain className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">AI-Powered ATS</h3>
            <p className="text-slate-600 dark:text-slate-400">Custom model trained on thousands of resumes and job descriptions</p>
          </div>
        </div>
      </section>
        }



      {/* How I Work */}
      <section className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-slate-800 dark:text-slate-200 mb-12 text-center">How I Work</h2>
          
          <Card className="border-0 shadow-sm bg-slate-50 dark:bg-slate-900">
            <CardContent className="p-12">
              <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                <p className="text-xl font-medium text-slate-800 dark:text-slate-200">
                  I don't sell dreams. I help you present your real skills clearly.
                </p>
                <p>No guarantees of jobs. No unrealistic promises.</p>
                <p>
                  Just honest feedback based on what hiring teams actually look for, 
                  delivered quickly and professionally.
                </p>
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <p className="font-medium">
                    The result? People I've supported got interviews at 
                    <span className="text-slate-900 dark:text-slate-100"> Apple, Deloitte, Infosys, TCS, Capgemini, and more</span> — 
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
      <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-light text-slate-800 dark:text-slate-200 mb-4 text-center">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 text-center">
            Tell me what you need help with, and I'll get back to you within 24-48 hours. You can also reach me directly on WhatsApp for a faster response.
          </p>
          <div className="flex justify-center mb-12">
            <a href="https://wa.me/7410083453" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              <img src="/logos/whatsapp.png" alt="WhatsApp" className="h-6 w-6 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-8">Or, fill out the form below:</p>
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Social Proof */}
      <SocialProof />

      {/* Footer */}
      <footer className="py-16 px-4 bg-slate-800 dark:bg-slate-950 text-slate-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            
            <a href="https://www.linkedin.com/in/no-nonsenseguy/" className="hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://wa.me/7410083453" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <img src="/logos/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
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
