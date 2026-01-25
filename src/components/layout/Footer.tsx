import { Link } from "react-router-dom";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/grituz-logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const services = [
  { name: "Web Design", path: "/services#web-design" },
  { name: "Branding", path: "/services#branding" },
  { name: "Digital Marketing", path: "/services#marketing" },
  { name: "Web Support", path: "/services#support" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="heading-sm text-background mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-background/70">
                Get the latest insights and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 w-full md:w-72"
              />
              <Button variant="hero" size="icon" className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Grituz" className="h-12 brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed">
              A premium web design and digital marketing agency helping
              businesses build powerful online presence since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:letstalk@grituz.com"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  letstalk@grituz.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Whitefield, Bangalore, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <p className="text-center text-background/50 text-sm">
            © 2026 Grituz. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
