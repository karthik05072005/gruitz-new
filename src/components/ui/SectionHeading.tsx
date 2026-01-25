import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
          {badge}
        </span>
      )}
      <h2 className="heading-lg mb-4">{title}</h2>
      {description && (
        <p className="body-lg max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
}
