import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

const CategoriesPage = () => {
  const items = [
    {
      id: 1,
      name: "MacBook Pro 16-inch",
      category: "Electronics",
      price: "$45/day",
      rating: 4.9,
      image: "💻",
      location: "San Francisco, CA",
      available: true
    },
    {
      id: 2,
      name: "Modern Sectional Sofa",
      category: "Furniture",
      price: "$25/day",
      rating: 4.8,
      image: "🛋️",
      location: "Los Angeles, CA",
      available: true
    },
    {
      id: 3,
      name: "Tesla Model 3",
      category: "Vehicles",
      price: "$89/day",
      rating: 4.9,
      image: "🚗",
      location: "Miami, FL",
      available: false
    },
    {
      id: 4,
      name: "Canon EOS R5 Camera",
      category: "Photography",
      price: "$35/day",
      rating: 4.7,
      image: "📷",
      location: "New York, NY",
      available: true
    },
    {
      id: 5,
      name: "PlayStation 5",
      category: "Gaming",
      price: "$15/day",
      rating: 4.8,
      image: "🎮",
      location: "Chicago, IL",
      available: true
    },
    {
      id: 6,
      name: "Professional Drill Set",
      category: "Tools",
      price: "$12/day",
      rating: 4.6,
      image: "🔧",
      location: "Austin, TX",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Browse All Categories
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover thousands of items available for rent in your area
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search for anything..." 
                    className="pl-10 h-12 text-lg"
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-12 px-6"
                >
                  <Filter className="mr-2 h-5 w-5" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Items Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <Card 
                  key={item.id} 
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-card flex items-center justify-center text-6xl">
                    {item.image}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {item.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-brand-primary">
                          {item.price}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          {item.rating}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      📍 {item.location}
                    </p>
                    
                    <Button 
                      className={`w-full ${
                        item.available 
                          ? "bg-gradient-primary hover:shadow-glow" 
                          : "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={!item.available}
                    >
                      {item.available ? "Rent Now" : "Unavailable"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                size="lg"
                variant="outline"
                className="px-8"
              >
                Load More Items
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesPage;