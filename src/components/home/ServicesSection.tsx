import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, TrendingUp, Wrench, ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Custom-designed, high-converting websites tailored to your brand identity and business goals.",
    link: "/web-design",
  },
  {
    icon: TrendingUp,
    title: "Branding & Marketing",
    description:
      "Data-driven digital marketing strategies that attract and engage customers effectively.",
    link: "/digital-marketing",
  },
  {
    icon: Wrench,
    title: "Web Support",
    description:
      "Reliable website maintenance, security updates, and performance optimization services.",
    link: "/web-support",
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

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  to={service.link}
                  className="block glass-card-hover p-8 h-full group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                    >
                      <service.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <motion.h3
                      className="heading-sm mb-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <motion.div
                      className="flex items-center gap-2 text-primary font-medium"
                      whileHover={{ gap: "1rem" }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Learn More</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
