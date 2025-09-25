
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const CompaniesSection = () => {
  const [containerRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const companies = [
    { name: "Apple", logo: "/logos/apple.png", brandColor: "#000000" },
    { name: "Deloitte", logo: "/logos/deloitte.png", brandColor: "#86BC25" },
    { name: "Accenture", logo: "/logos/accenture.png", brandColor: "#A100FF" },
    { name: "Capgemini", logo: "/logos/capgemini.jpg", brandColor: "#0091D0" },
    { name: "Cognizant", logo: "/logos/cognizant.jpg", brandColor: "#1A2B5B" },
    { name: "Wipro", logo: "/logos/wipro.png", brandColor: "#FE5BAC" },
    { name: "HCL", logo: "/logos/hcl.jpg", brandColor: "#0066B3" },
    { name: "Barclays", logo: "/logos/barclays.jpg", brandColor: "#00AEF3" },
    { name: "Epam", logo: "/logos/epam.jpg", brandColor: "#00B2A9" },
    { name: "Fiserv", logo: "/logos/fiserv.jpg", brandColor: "#FF5000" },
    { name: "Coforge", logo: "/logos/coforge.jpg", brandColor: "#1B75BC" },
    { name: "NTT Data", logo: "/logos/ntt_data.jpg", brandColor: "#0097C4" },
    { name: "Dentsu", logo: "/logos/dentsu.png", brandColor: "#222222" },
    { name: "Dassault", logo: "/logos/dassault.jpg", brandColor: "#00549F" },
    { name: "CGI", logo: "/logos/cgi.jpg", brandColor: "#D70A53" },
    { name: "Talentica", logo: "/logos/talentica.jpg", brandColor: "#1B75BC" },
    { name: "EQ Technologies", logo: "/logos/eq_technologies.jpg", brandColor: "#00ADEF" },
    { name: "RTS", logo: "/logos/rts.jpg", brandColor: "#E30613" },
    { name: "M&G", logo: "/logos/m&g.jpg", brandColor: "#005EB8" },
    { name: "LTI Mindtree", logo: "/logos/lti.jpg", brandColor: "#00205B" },
    { name: "Datamatic", logo: "/logos/datamatics.png", brandColor: "#e30022" },
    { name: "Publicis Sapient", logo: "/logos/publicissapient.jpg", brandColor: "#9B0101" },
    { name: "GitHub", logo: "/logos/github.svg", brandColor: "#181717" },
    { name: "Stack Overflow", logo: "/logos/stackoverflow.svg", brandColor: "#F58025" }
  ];

  return (
    <section ref={containerRef} className={`py-16 px-4 bg-background fade-in-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-foreground mb-4 text-center">Trusted By Professionals at Top Companies & Platforms</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Quiet success stories — people landing interviews at top companies after working together on their applications.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <Card key={index} className="bg-card border group card-hover-effect">
              <CardContent className="p-4 flex flex-col items-center justify-center h-24 relative">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={`max-h-10 max-w-full object-contain transition-all duration-300 ${['Apple', 'Dentsu', 'GitHub', 'Stack Overflow', 'Deloitte', 'Accenture'].includes(company.name) ? 'dark:invert' : ''}`}
                />
                <p className="text-xs text-center mt-2 text-foreground absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{company.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            And many more...
          </p>
        </div>
      </div>
    </section>
  );
};
