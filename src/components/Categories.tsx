import { Card, CardContent } from "@/components/ui/card";
import { Sofa, Laptop, Car, Camera, Gamepad2, Hammer } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: Sofa,
      title: "Furniture",
      description: "Chairs, tables, sofas, and more",
      count: "2,847 items"
    },
    {
      icon: Laptop,
      title: "Electronics",
      description: "Laptops, tablets, phones, TVs",
      count: "1,923 items"
    },
    {
      icon: Car,
      title: "Vehicles",
      description: "Cars, bikes, scooters, trucks",
      count: "856 items"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Cameras, lenses, lighting",
      count: "421 items"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Consoles, games, accessories",
      count: "634 items"
    },
    {
      icon: Hammer,
      title: "Tools",
      description: "Power tools, equipment, gear",
      count: "1,287 items"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover thousands of items across multiple categories, all available for rent
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-background/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <span className="text-sm font-medium text-brand-primary">
                    {category.count}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;