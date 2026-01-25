import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Car, 
  MapPin, 
  Award, 
  Target, 
  Heart,
  CheckCircle
} from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Happy Customers" },
  { value: "50+", label: "Vehicles Fleet" },
  { value: "24/7", label: "Service Available" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide safe, reliable, and comfortable car travel services that exceed customer expectations while maintaining the highest standards of professionalism.",
  },
  {
    icon: Heart,
    title: "Our Vision",
    description: "To become the most trusted and preferred car travel service provider in Andhra Pradesh, known for excellence in customer service and reliability.",
  },
];

const whyUs = [
  "Experienced and professional drivers",
  "Well-maintained and sanitized vehicles",
  "Transparent and competitive pricing",
  "Punctual pickup and drop services",
  "GPS-enabled vehicles for safety",
  "24/7 customer support",
];

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About <span className="text-gold-gradient">Dhupam Car Travels</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Your trusted partner for car travel services in Narasararaopeta, Andhra Pradesh. 
              We've been serving customers with dedication and commitment for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gold-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of Trust & Reliability
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dhupam Car Travels was established with a vision to provide premium car travel 
                  services in Narasararaopeta and surrounding areas. What started as a small 
                  family business has grown into one of the most trusted travel service providers 
                  in the region.
                </p>
                <p>
                  Our founder believed that every journey should be a pleasant experience, and 
                  this philosophy continues to guide us today. We take pride in our well-maintained 
                  fleet of vehicles and our team of experienced, professional drivers.
                </p>
                <p>
                  Over the years, we have served thousands of satisfied customers, from daily 
                  commuters to families on vacations, and businesses requiring corporate travel 
                  solutions. Our commitment to safety, punctuality, and customer satisfaction 
                  has made us the preferred choice for car travel in the region.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <Card className="p-6 text-center bg-primary text-primary-foreground">
                <Users className="h-10 w-10 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Family Owned</h3>
                <p className="text-sm text-primary-foreground/70">Trusted family business serving the community</p>
              </Card>
              <Card className="p-6 text-center">
                <Car className="h-10 w-10 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Modern Fleet</h3>
                <p className="text-sm text-muted-foreground">Well-maintained vehicles for your comfort</p>
              </Card>
              <Card className="p-6 text-center">
                <MapPin className="h-10 w-10 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Local Experts</h3>
                <p className="text-sm text-muted-foreground">Deep knowledge of local routes</p>
              </Card>
              <Card className="p-6 text-center bg-accent text-secondary-foreground">
                <Award className="h-10 w-10 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Award Winning</h3>
                <p className="text-sm text-secondary-foreground/80">Recognized for excellence in service</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="border-none shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 mb-6 rounded-full gold-gradient flex items-center justify-center">
                    <value.icon className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Us?
              </h2>
              <p className="text-muted-foreground">
                Here's what sets Dhupam Car Travels apart from the rest.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {whyUs.map((item, index) => (
                <div 
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card shadow-sm animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-card-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
