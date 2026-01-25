import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, TrendingUp, Wrench, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Custom-designed, high-converting websites tailored to your brand identity and business goals.",
    link: "/services#web-design",
  },
  {
    icon: TrendingUp,
    title: "Branding & Marketing",
    description:
      "Data-driven digital marketing strategies that attract and engage customers effectively.",
    link: "/services#marketing",
  },
  {
    icon: Wrench,
    title: "Web Support",
    description:
      "Reliable website maintenance, security updates, and performance optimization services.",
    link: "/services#support",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-custom">
        <SectionHeading
          badge="Our Services"
          title="Hire Us For"
          description="We offer comprehensive digital solutions to help your business thrive online."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="block glass-card-hover p-8 h-full group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="heading-sm mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
