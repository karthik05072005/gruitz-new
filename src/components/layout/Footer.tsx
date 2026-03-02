import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const servicesLinks = [
  { name: "Web Design", path: "/web-design" },
  { name: "Digital Marketing", path: "/digital-marketing" },
  { name: "Branding", path: "/contact?service=branding" },
  { name: "AI Automation", path: "/ai-automation" },
  { name: "Custom Software", path: "/custom-software" },
  { name: "Web Support", path: "/web-support" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary/30 to-background border-t border-glass-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Brand & Intro */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="heading-lg text-gradient font-bold">GRITUZ</h3>
              <p className="text-sm text-muted-foreground tracking-wider font-medium">
                Redefining Horizons
              </p>
            </div>
            <p className="body-sm text-muted-foreground leading-relaxed max-w-xs">
              Building scalable digital solutions that help growing businesses thrive.
              From websites and branding to marketing, automation, and custom software,
              we turn ideas into measurable growth.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-card/50 border border-glass-border flex items-center justify-center hover:bg-card hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="heading-sm text-foreground font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="heading-sm text-foreground font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="heading-sm text-foreground font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  Whitefield, Bengaluru, Karnataka 560037, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:letstalk@grituz.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  letstalk@grituz.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-glass-border">
        <div className="container-custom py-6">
          <p className="text-center text-muted-foreground text-sm">
            © 2026 Grituz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
