import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Car, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav/95 nav-blur">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Car className="h-8 w-8 text-accent" />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-nav-foreground">
                Dhupam Car Travels
              </span>
              <span className="text-xs text-accent hidden sm:block">
                Narasararaopeta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : "text-nav-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918247007708"
              className="flex items-center gap-2 text-nav-foreground/80 hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+91 82470 07708</span>
            </a>
            <Button variant="secondary" size="sm" asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-nav-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-nav-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-accent"
                      : "text-nav-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+918247007708"
                className="flex items-center gap-2 text-nav-foreground/80 py-2"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+91 82470 07708</span>
              </a>
              <Button variant="secondary" size="sm" asChild className="w-fit">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
