
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Career Help Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Current Role/Goal: ${formData.role}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:oknononsenseguy@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Request Sent",
      description: "I'll reach out in 24–48 hours. Thanks for reaching out!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", role: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-slate-700">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-slate-700">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="role" className="text-slate-700">Current Role/Goal</Label>
            <Input
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g., Backend Developer looking to switch to DevOps"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="message" className="text-slate-700">How can I help?</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell me about what you're working on or what you need help with..."
              className="mt-1"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3"
          >
            Send Request
          </Button>
        </form>
        
        <div className="mt-6 pt-6 border-t border-slate-200 text-center text-slate-600">
          <p className="text-sm">I'll reach out in 24–48 hours.</p>
          {/* <p className="text-sm font-medium">It's free — or pay what you want.</p> */}
          <p className="text-sm">I care more about results than rates.</p>
        </div>
      </CardContent>
    </Card>
  );
};
