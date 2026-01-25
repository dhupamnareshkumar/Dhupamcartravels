import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Car, 
  MapPin, 
  Plane, 
  Heart, 
  Briefcase, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Local Taxi Service",
    description: "Reliable and affordable local taxi service within Narasararaopeta and nearby areas. Perfect for daily commute, shopping trips, or medical appointments.",
    features: [
      "Pickup from your doorstep",
      "Experienced local drivers",
      "Affordable rates",
      "Clean & sanitized vehicles",
    ],
  },
  {
    icon: MapPin,
    title: "Outstation Trips",
    description: "Comfortable long-distance travel to any destination. Whether it's a pilgrimage, family vacation, or business trip, we've got you covered.",
    features: [
      "One-way & round trips",
      "Multiple city tours",
      "Flexible packages",
      "Rest stops as needed",
    ],
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Punctual airport pickup and drop services to Vijayawada, Hyderabad, and other nearby airports. Never miss a flight with our reliable service.",
    features: [
      "Flight tracking",
      "Meet & greet service",
      "24/7 availability",
      "Luggage assistance",
    ],
  },
  {
    icon: Heart,
    title: "Wedding Car Rental",
    description: "Make your special day even more memorable with our premium wedding car services. Decorated luxury vehicles for the bride and groom.",
    features: [
      "Luxury vehicle options",
      "Beautiful decorations",
      "Chauffeur service",
      "Photography friendly",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Professional car services for business executives and corporate events. Impress your clients with our premium travel solutions.",
    features: [
      "Executive vehicles",
      "Professional drivers",
      "Billing options",
      "Priority service",
    ],
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Spacious vehicles for family gatherings, group outings, and temple visits. Comfortable seating for large groups.",
    features: [
      "Tempo Traveller available",
      "Large group capacity",
      "Tour guide options",
      "Customizable itinerary",
    ],
  },
];

const vehicleTypes = [
  { name: "Sedan", capacity: "4 Passengers", example: "Swift Dzire, Honda Amaze" },
  { name: "SUV", capacity: "6-7 Passengers", example: "Innova, Ertiga" },
  { name: "Luxury", capacity: "4 Passengers", example: "Honda City, Ciaz" },
  { name: "Tempo Traveller", capacity: "12-15 Passengers", example: "Force Traveller" },
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              We offer a comprehensive range of car travel services to meet all your 
              transportation needs. From local trips to long-distance journeys, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 mb-4 rounded-lg gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gold-gradient">Vehicle Fleet</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of well-maintained vehicles to suit your needs and budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <Card 
                key={vehicle.name}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Car className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">
                    {vehicle.capacity}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {vehicle.example}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need a Ride?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us now to book your car or get a quote for your travel needs. 
            We're available 24/7 to assist you.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact" className="gap-2">
              Book Now <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
