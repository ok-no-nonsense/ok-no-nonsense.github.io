
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Database, Brain, TestTube ,InfinityIcon,PackageIcon} from "lucide-react";

export const WhoIHelp = () => {
  const profiles = [
    {
      icon: Code,
      role: "Full-stack developer",
      goal: "switching to cloud"
    },
    {
      icon: TestTube,
      role: "QA tester",
      goal: "aiming for SDET roles"
    },
    {
      icon: Database,
      role: "Backend engineer",
      goal: "transitioning to ML"
    },	
    {
      icon: Brain,
      role: "Career switcher",
      goal: "entering tech"
    },
    {
      icon: InfinityIcon,
      role: "DevOps engineer",
      goal: "manual tester to DevOps"
    },
    {
      icon: PackageIcon,
      role: "Product manager",
      goal: "transitioning to PM"
    }

  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-foreground mb-8 text-center">Who I've Helped</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map((profile, index) => (
            <Card key={index} className="border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <profile.icon className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{profile.role}</p>
                    <p className="text-xs text-muted-foreground">{profile.goal}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
