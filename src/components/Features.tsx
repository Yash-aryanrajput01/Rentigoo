import { Shield, Clock, DollarSign, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "All items are verified and insured. Rent with confidence knowing you're protected."
    },
    {
      icon: Clock,
      title: "Flexible Duration",
      description: "Rent for a day, week, month, or longer. No long-term commitments required."
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Save money by renting instead of buying. Access premium items at fraction of the cost."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is here to help you every step of the way."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Rentigoo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We make renting simple, secure, and convenient for everyone
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;