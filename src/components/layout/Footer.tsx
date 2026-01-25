import { Link } from "react-router-dom";
import { Car, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Car className="h-8 w-8 text-accent" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Dhupam Car Travels</span>
                <span className="text-xs text-accent">Narasararaopeta</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Your trusted partner for safe and comfortable car travel services
              across Andhra Pradesh and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span>Local Taxi Service</span>
              <span>Outstation Trips</span>
              <span>Airport Transfers</span>
              <span>Wedding Car Rental</span>
              <span>Corporate Travel</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Narasararaopeta,
                  <br />
                  Andhra Pradesh, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+918247007708"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +91 82470 07708
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@dhupamcartravels.com"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  info@dhupamcartravels.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  24/7 Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Dhupam Car Travels. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
