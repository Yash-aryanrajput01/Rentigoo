import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", path: "/#features" },
      { name: "Categories", path: "/categories" },
      { name: "Pricing", path: "/#pricing" },
      { name: "API", path: "/#api" },
    ],
    company: [
      { name: "About", path: "/about" },
      { name: "Blog", path: "/#blog" },
      { name: "Careers", path: "/#careers" },
      { name: "Contact", path: "/contact" },
    ],
    support: [
      { name: "Help Center", path: "/#help" },
      { name: "Documentation", path: "/#docs" },
      { name: "Community", path: "/#community" },
      { name: "Status", path: "/#status" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/#privacy" },
      { name: "Terms of Service", path: "/#terms" },
      { name: "Cookie Policy", path: "/#cookies" },
      { name: "GDPR", path: "/#gdpr" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "𝕏" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "GitHub", href: "#", icon: "⚡" },
    { name: "Discord", href: "#", icon: "💬" },
  ];

  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
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
            <p className="text-muted-foreground mb-6 max-w-md">
              The ultimate rental platform connecting people with the things they need, 
              anytime, anywhere. Experience seamless rentals with our modern platform.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-sm font-medium">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest updates on new features and rental opportunities.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Rentigoo. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Made with ❤️ for renters everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
