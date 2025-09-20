import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 pt-4">
        <div className="bg-background/90 backdrop-blur-md border border-border rounded-2xl shadow-card px-6 py-4">
          <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-1">
              {/* Leaf icons */}
              <div className="flex items-center">
                <div className="w-3 h-3 border border-foreground rounded-full"></div>
                <div className="w-3 h-3 bg-brand-primary rounded-full ml-1"></div>
              </div>
              {/* Text */}
              <span className="font-bold text-xl">
                <span className="text-brand-primary">Renti</span>
                <span className="text-foreground">goo</span>
              </span>
            </div>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  location.pathname === item.path
                    ? "text-brand-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;