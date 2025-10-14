import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/Logo.png";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    description: "We're looking for an experienced frontend developer to join our growing team and help build the future of online shopping.",
  },
  {
    id: 2,
    title: "Product Manager",
    location: "Remote",
    type: "Full-time",
    department: "Product",
    description: "Lead product strategy and development for our mobile shopping experience. Work closely with design and engineering teams.",
  },
  {
    id: 3,
    title: "UX Designer",
    location: "Remote",
    type: "Full-time",
    department: "Design",
    description: "Create intuitive and delightful user experiences for millions of shoppers. Collaborate with product and engineering teams.",
  },
  {
    id: 4,
    title: "Marketing Manager",
    location: "Remote",
    type: "Full-time",
    department: "Marketing",
    description: "Drive growth through creative marketing campaigns. Manage social media, content strategy, and brand partnerships.",
  },
  {
    id: 5,
    title: "Delivery Person",
    location: "Remote",
    type: "Part-time",
    department: "Operations",
    description: "Deliver packages to customers in your area. Flexible hours and competitive pay. Help us get orders to our customers quickly and safely.",
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for applying. We'll review your application and get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", coverLetter: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <img src={logo} alt="BuyIt Logo" className="h-8 w-auto mr-2" />
              <span className="text-2xl font-bold text-primary">BuyIt</span>
            </a>
            <div className="flex gap-6">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/careers" className="text-primary font-medium">
                Careers
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Join Our Team
          </h1>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Help us revolutionize online shopping. We're building something special and we want you to be part of it.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Benefits</h3>
              <p className="text-muted-foreground">
                Health insurance, 401k matching, and unlimited PTO
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Learn, grow, and advance your career with us
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Remote Friendly</h3>
              <p className="text-muted-foreground">
                Work from anywhere with flexible schedules
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base">
                        {job.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{job.department}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.department}</span>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button onClick={() => setSelectedJob(job)}>Apply Now</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Apply for {job.title}</DialogTitle>
                        <DialogDescription>
                          Fill out the form below to submit your application.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="coverLetter">Cover Letter</Label>
                          <Textarea
                            id="coverLetter"
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            required
                            className="mt-2 min-h-[150px]"
                            placeholder="Tell us why you're a great fit for this position..."
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Submit Application
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 BuyIt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Careers;
