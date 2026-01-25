import { motion } from "framer-motion";
import { ArrowRight, Palette, TrendingUp, Wrench, Globe, PenTool, ShoppingBag, RefreshCw, FileText, Layout as LayoutIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CTABanner from "@/components/home/CTABanner";

const mainServices = [
  {
    id: "web-design",
    icon: Palette,
    title: "Web Design",
    description:
      "We create stunning, user-centric websites that not only look beautiful but also convert visitors into customers. Our designs are tailored to reflect your brand identity and meet your business objectives.",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "Performance Optimization",
      "SEO-Friendly Structure",
    ],
  },
  {
    id: "branding",
    icon: PenTool,
    title: "Branding",
    description:
      "Build a strong, memorable brand identity that resonates with your target audience. We create cohesive brand experiences across all touchpoints.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Strategy",
    ],
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Drive targeted traffic and generate leads with our data-driven digital marketing strategies. We help you reach the right audience at the right time.",
    features: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Marketing",
      "Email Campaigns",
    ],
  },
  {
    id: "support",
    icon: Wrench,
    title: "Website Support",
    description:
      "Keep your website running smoothly with our comprehensive maintenance and support services. We handle the technical side so you can focus on your business.",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Performance Optimization",
      "Technical Support",
    ],
  },
];

const subServices = [
  { icon: PenTool, title: "Logo Design" },
  { icon: Globe, title: "WordPress Design" },
  { icon: ShoppingBag, title: "Shopify Design" },
  { icon: RefreshCw, title: "Website Redesign" },
  { icon: FileText, title: "Blog Design" },
  { icon: LayoutIcon, title: "GoDaddy Web Design" },
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
            <p className="body-lg">
              From stunning web design to result-driven marketing, we offer
              everything you need to succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <LazySection>
        <section className="section-padding">
          <div className="container-custom">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="heading-lg mb-4">{service.title}</h2>
                  <p className="body-md mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" asChild>
                    <Link to="/get-quote">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-3" />
                    <div className="relative glass-card p-12 flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-primary/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* Sub Services */}
      <LazySection>
        <section className="section-padding bg-gradient-section">
          <div className="container-custom">
            <SectionHeading
              badge="More Services"
              title="Specialized Solutions"
              description="Additional services to meet your specific needs."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card-hover p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{service.title}</h3>
                    <Link
                      to="/get-quote"
                      className="text-sm text-primary hover:underline"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        <CTABanner />
      </LazySection>
    </Layout>
  );
}
