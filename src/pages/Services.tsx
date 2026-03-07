import { motion } from "framer-motion";
import { ArrowRight, Palette, TrendingUp, Wrench, Globe, PenTool, Bot, Code2, CheckCircle2, Zap, BarChart3, Users, DollarSign, LifeBuoy } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const mainServices = [
  {
    id: "web-design",
    icon: Palette,
    title: "Web Design",
    description: "We design and develop professional websites that look modern, load fast, work on all devices, and help turn visitors into customers.",
    features: ["Custom Website Design", "Mobile-Friendly Development", "Speed Optimization", "SEO-Friendly Website Structure"],
    link: "/web-design",
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "We help businesses grow online with proven digital marketing strategies that increase website traffic, generate quality leads, and improve online visibility.",
    features: ["Search Engine Optimization (SEO)", "Google & Social Media Ads", "Content Marketing", "Lead Tracking & Analytics"],
    link: "/digital-marketing",
  },
  {
    id: "branding",
    icon: PenTool,
    title: "Branding",
    description: "We build strong brand identities that help your business stand out, connect with customers, and stay consistent across all platforms.",
    features: ["Logo Design", "Brand Colors & Visual Style", "Brand Messaging", "Brand Guidelines"],
    link: "/branding",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    description: "We set up smart automation tools that save time, improve customer response, and simplify daily business operations.",
    features: ["AI Chatbots for Websites", "Automated Workflows", "CRM & Email Automation", "Customer Support Automation"],
    link: "/ai-automation",
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software",
    description: "We develop custom web applications and business software tailored to your specific needs, helping you manage operations more efficiently.",
    features: ["Web Application Development", "Business Management Systems", "System Integration", "Custom Feature Development"],
    link: "/custom-software",
  },
  {
    id: "web-support",
    icon: Wrench,
    title: "Web Support",
    description: "We provide ongoing website maintenance and support to keep your site secure, updated, and running smoothly at all times.",
    features: ["Website Updates", "Security Monitoring", "Performance Improvements", "Technical Support"],
    link: "/web-support",
  },
];

const grituzDifference = [
  { icon: Globe, title: "Custom Solutions", description: "Websites and marketing tailored to your business goals." },
  { icon: BarChart3, title: "Data Driven", description: "Strategies guided by analytics, insights, and measurable results." },
  { icon: Users, title: "Industry Experience", description: "Worked with startups, local businesses, and growing brands." },
  { icon: DollarSign, title: "Affordable Pricing", description: "Cost effective digital services without compromising quality." },
  { icon: Zap, title: "Scalable Growth", description: "Solutions built to grow as your business expands." },
  { icon: LifeBuoy, title: "Reliable Support", description: "Ongoing guidance and support beyond project completion." },
];

export default function Services() {
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
              Our Services
            </span>
            <h1 className="heading-xl mb-6">
              Comprehensive <span className="text-primary font-extrabold">Digital Solutions</span>
            </h1>
            <p className="body-lg text-muted-foreground">
              From stunning web design to result-driven marketing, we offer everything you need to grow and succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6 Main Services Grid */}
      <LazySection>
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="glass-card p-8 flex flex-col group hover:shadow-glow transition-all duration-300"
                  style={{ borderColor: 'rgba(139,92,246,0.15)' }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3">{service.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" size="sm" asChild className="mt-auto">
                    <Link to={service.link}>
                      Know More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* The Grituz Difference */}
      <LazySection>
        <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-lg text-gradient mb-4">The Grituz Difference</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Built on strategy, performance, and long-term support.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {grituzDifference.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card-hover p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* CTA */}
      <LazySection>
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              className="glass-card p-12 text-center max-w-4xl mx-auto hover:shadow-glow transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
              <div className="relative z-10 space-y-5">
                <h2 className="heading-lg text-gradient">Not Sure What Your Business Needs?</h2>
                <p className="body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Book a free consultation and we'll help you choose the right digital solution with clarity and confidence.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="hero" size="lg" className="bg-gradient-cta hover:shadow-glow transition-all duration-300" asChild>
                    <Link to="/contact">
                      Book a Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </LazySection>
    </Layout>
  );
}
