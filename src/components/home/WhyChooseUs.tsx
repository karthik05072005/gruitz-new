import { motion } from "framer-motion";
import {
  Award,
  Shield,
  Heart,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "15+ Years of Expertise",
    description: "Decades of experience delivering exceptional digital solutions.",
  },
  {
    icon: Shield,
    title: "Honest & Transparent",
    description: "No hidden costs, clear communication throughout the project.",
  },
  {
    icon: Heart,
    title: "We Treat Your Business Like Ours",
    description: "Dedicated partnership approach with genuine care for your success.",
  },
  {
    icon: CheckCircle,
    title: "Verified on DesignRush",
    description: "Recognized as a top agency by leading industry platforms.",
  },
  {
    icon: TrendingUp,
    title: "Focused on Long-Term Growth",
    description: "Strategies designed for sustainable success, not quick fixes.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-custom">
        <SectionHeading
          badge="Why Choose Us"
          title="The Grituz Difference"
          description="We're committed to delivering excellence in everything we do."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 glass-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
