import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Car,
  Shield,
  Clock,
  MapPin,
  Users,
  Award,
  ArrowRight,
  Phone,
} from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const services = [
  {
    icon: Car,
    title: "Local Taxi Service",
    description:
      "Reliable local transportation within Narasararaopeta and nearby areas.",
  },
  {
    icon: MapPin,
    title: "Outstation Trips",
    description:
      "Comfortable long-distance travel to any destination across India.",
  },
  {
    icon: Users,
    title: "Corporate Travel",
    description:
      "Professional car services for business meetings and corporate events.",
  },
  {
    icon: Award,
    title: "Wedding Car Rental",
    description:
      "Luxury and decorated cars for your special wedding occasions.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "All our vehicles are regularly maintained and drivers are professionally trained.",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description:
      "Round-the-clock service for all your travel needs, anytime, anywhere.",
  },
  {
    icon: Car,
    title: "Well-Maintained Fleet",
    description:
      "Modern, clean, and comfortable vehicles for a pleasant journey.",
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 hero-gradient opacity-80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-slide-up">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Trusted Car Travel Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Your Journey,
              <br />
              <span className="text-gold-gradient">Our Commitment</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
              Experience safe, comfortable, and reliable car travel services in
              Narasararaopeta. Whether it's local trips or outstation journeys,
              we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact" className="gap-2">
                  Book Your Ride <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                // className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="tel:+918247007708" className="gap-2">
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose{" "}
              <span className="text-gold-gradient">Dhupam Car Travels?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With years of experience in car travel services, we ensure your
              journey is safe, comfortable, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="border-none shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gold-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of car travel services to meet all your
              transportation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 rounded-lg gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/services" className="gap-2">
                View All Services <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us today for the best car travel experience in
            Narasararaopeta. Available 24/7 for your convenience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              // className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+918247007708">+91 82470 07708</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
