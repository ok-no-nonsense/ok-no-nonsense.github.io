
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Star } from "lucide-react";

export const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      label: "Recent Clients",
      value: "15+",
      description: "in the last quarter",
    },
    {
      icon: Briefcase,
      label: "Completed Projects",
      value: "50+",
      description: "Resume & LinkedIn makeovers",
    },
    {
      icon: Star,
      label: "Positive Reviews",
      value: "4.9/5",
      description: "Average rating",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <Card key={stat.label} className="border">
              <CardContent className="p-8">
                <stat.icon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-lg font-semibold text-foreground mt-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
