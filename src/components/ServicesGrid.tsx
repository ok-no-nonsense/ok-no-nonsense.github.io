
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Linkedin, Github, MessageSquare, BookOpen, Globe } from "lucide-react";

export const ServicesGrid = () => {
  const services = [
    {
      icon: FileText,
      title: "Resume refinement",
      description: "for all levels & roles"
    },
    {
      icon: Linkedin,
      title: "LinkedIn profile clarity",
      description: "& keyword optimization"
    },
    {
      icon: Github,
      title: "GitHub/project portfolio",
      description: "review"
    },
    {
      icon: MessageSquare,
      title: "Mock interviews",
      description: "technical, behavioral, system design"
    },
    {
      icon: BookOpen,
      title: "Project storytelling",
      description: "for job seekers or switchers"
    },
    {
      icon: Globe,
      title: "Portfolio website building",
      description: "personal brand & showcase"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-slate-800 mb-1">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
