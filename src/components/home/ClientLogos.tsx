import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const clients = [
  "TechStart",
  "Fashion Hub",
  "Finance Solutions",
  "Wellness Studio",
  "Digital First",
  "Growth Labs",
];

export default function ClientLogos() {
  return (
    <section className="py-16 border-y border-border">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-8"
        >
          Trusted by Leading Brands
        </motion.p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-2xl font-bold text-muted-foreground/40 hover:text-primary transition-colors"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
