import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-12 w-12 text-white mr-4" />
            <span className="text-white/90 text-lg font-medium">Join 50,000+ happy renters</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Start Renting?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join our community today and discover a smarter way to get what you need
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 h-auto"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 h-auto"
            >
              Explore Categories
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default CTA;