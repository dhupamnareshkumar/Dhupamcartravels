import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: [
      "Main Road, Narasararaopeta",
      "Palnadu District",
      "Andhra Pradesh, India",
    ],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 82470 07708", "+91 82470 07708"],
    links: ["tel:+918247007708", "tel:+918247007708"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@dhupamcartravels.com", "booking@dhupamcartravels.com"],
    links: [
      "mailto:info@dhupamcartravels.com",
      "mailto:booking@dhupamcartravels.com",
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Sunday", "24 Hours Available"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Get in <span className="text-gold-gradient">Touch</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Have a question or need to book a ride? We're here to help! Reach
              out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) =>
                      info.links ? (
                        <a
                          key={detail}
                          href={info.links[i]}
                          className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p
                          key={detail}
                          className="text-sm text-muted-foreground"
                        >
                          {detail}
                        </p>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="h-6 w-6 text-accent" />
                    <CardTitle className="text-2xl">
                      Send us a Message
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service</option>
                        <option value="local">Local Taxi Service</option>
                        <option value="outstation">Outstation Trip</option>
                        <option value="airport">Airport Transfer</option>
                        <option value="wedding">Wedding Car Rental</option>
                        <option value="corporate">Corporate Travel</option>
                        <option value="group">Group Tour</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your travel requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8 animate-scale-in">
              {/* Map Placeholder */}
              <Card className="overflow-hidden shadow-lg">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30740.841047774556!2d79.87!3d16.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75!2sNarasaraopet!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dhupam Car Travels Location"
                  />
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    Quick Contact
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For immediate assistance or urgent bookings, call us
                    directly. We're available 24 hours a day, 7 days a week.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex-1" asChild>
                      <a href="tel:+918247007708">
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href="https://wa.me/917702678910"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
