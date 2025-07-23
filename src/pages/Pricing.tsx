
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  const scrollToContact = () => {
    // Navigate to home page and scroll to contact
    window.location.href = "/#contact";
  };

  const basicFeatures = [
    "Resume refinement",
    "GitHub portfolio review",
    "LinkedIn profile clarity & optimization"
  ];

  const premiumFeatures = [
    ...basicFeatures,
    "Mock interviews",
    "Project storytelling guidance",
    "Personal portfolio website building"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="py-8 px-4 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <nav className="flex justify-between items-center">
            <a href="/" className="text-xl font-light text-slate-800">
              Career Support
            </a>
            <a 
              href="/" 
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              ← Back to Home
            </a>
          </nav>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Simple, Honest Pricing
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the support package that fits your career goals. 
              No hidden fees, no subscriptions — just straightforward help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Package */}
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-light text-slate-800 mb-2">
                  Essential
                </CardTitle>
                <div className="text-4xl font-light text-slate-800 mb-2">
                  ₹499
                </div>
                <p className="text-slate-600">
                  Perfect for polishing your professional presence
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-4 mb-8">
                  {basicFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-slate-700 hover:bg-slate-800 text-white"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-slate-200 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-slate-800 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl font-light text-slate-800 mb-2">
                  Complete
                </CardTitle>
                <div className="text-4xl font-light text-slate-800 mb-2">
                  ₹999
                </div>
                <p className="text-slate-600">
                  Everything you need for career transition success
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-4 mb-8">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white"
                >
                  Get Complete Support
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              All packages include personalized guidance and honest feedback
            </p>
            <p className="text-sm text-slate-500">
              Payment after initial consultation • No advance fees
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-800 text-slate-300">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-light">
            Quietly helping people build stronger software careers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
