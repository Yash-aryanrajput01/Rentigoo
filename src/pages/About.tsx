import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Globe } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "50K+", label: "Happy Users" },
    { number: "100K+", label: "Items Listed" },
    { number: "500+", label: "Cities Covered" },
    { number: "99.9%", label: "Uptime" }
  ];

  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", emoji: "👩‍💼" },
    { name: "Mike Chen", role: "CTO", emoji: "👨‍💻" },
    { name: "Emily Davis", role: "Head of Design", emoji: "👩‍🎨" },
    { name: "Alex Rodriguez", role: "Head of Operations", emoji: "👨‍💼" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Rentigoo
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing the way people access the things they need, 
              making renting as simple as a few clicks.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At Rentigoo, we believe in a world where access matters more than ownership. 
                  Our platform connects people who need items with those who have them, 
                  creating a sustainable sharing economy that benefits everyone.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're a student needing furniture for a semester, a professional 
                  requiring equipment for a project, or someone who wants to try before buying, 
                  we make it possible.
                </p>
              </div>
              <div className="bg-gradient-card rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-brand-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Community First",
                  description: "Building trust and connections between people"
                },
                {
                  icon: Target,
                  title: "Purpose Driven",
                  description: "Every feature serves our users' real needs"
                },
                {
                  icon: Award,
                  title: "Quality Focused",
                  description: "Excellence in everything we build and offer"
                },
                {
                  icon: Globe,
                  title: "Sustainability",
                  description: "Reducing waste through smart sharing"
                }
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center border-0 bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate professionals working to make renting effortless
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-6xl mb-4">{member.emoji}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your journey with Rentigoo today and discover a better way to access what you need.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 h-auto"
            >
              Get Started Now
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;