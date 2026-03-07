import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, TrendingUp, Palette, Bot, Code, Wrench } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Design",
    description: "Custom-designed, fully developed websites built for performance and scalability.",
    link: "/web-design"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "SEO, paid campaigns, and content strategies that increase visibility and qualified leads.",
    link: "/digital-marketing"
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Strategic brand identity, logo design, messaging systems, and visual consistency.",
    link: "/services#branding"
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Smart automation workflows and AI tools that improve efficiency and customer experience.",
    link: "/ai-automation"
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored web applications and business software built around your operational needs.",
    link: "/custom-software"
  },
  {
    icon: Wrench,
    title: "Web Support",
    description: "Ongoing updates, security monitoring, and performance optimization for long-term stability.",
    link: "/web-support"
  }
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="heading-lg text-gradient mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Core Digital Services
          </motion.h2>
          <motion.p
            className="body-lg max-w-3xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            End-to-end digital and software solutions designed to build, scale, and support your business growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-card p-6 sm:p-8 h-full flex flex-col hover:shadow-glow transition-all duration-300">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="heading-sm text-foreground group-hover:text-gradient transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="body-md text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <motion.div
                  className="pt-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
