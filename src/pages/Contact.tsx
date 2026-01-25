import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <AnimatedBlobs />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
              Contact Us
            </span>
            <h1 className="heading-xl mb-6">
              Let's Start a <span className="text-primary font-extrabold">Conversation</span>
            </h1>
            <p className="body-lg">
              Have a project in mind? We'd love to hear from you. Reach out and
              let's discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <LazySection>
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="heading-lg mb-4">Get in Touch</h2>
                  <p className="body-md">
                    We're here to help and answer any questions you might have. We
                    look forward to hearing from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Whitefield, Bangalore, India 560066
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:letstalk@grituz.com"
                        className="text-primary hover:underline"
                      >
                        letstalk@grituz.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Map Section */}
      <LazySection>
        <section className="pb-20">
          <div className="container-custom">
            <div className="glass-card overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124426.09367988945!2d77.61698716322953!3d12.913292744913844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1329c73049b1%3A0x81a90c45947c2a56!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704981234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grituz Location"
              />
            </div>
          </div>
        </section>
      </LazySection>
    </Layout>
  );
}
