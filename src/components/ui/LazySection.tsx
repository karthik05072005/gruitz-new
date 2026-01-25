import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLazyLoad } from "@/hooks/useLazyLoad";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function LazySection({
  children,
  className = "",
  delay = 0,
}: LazySectionProps) {
  const { ref, isVisible } = useLazyLoad({ threshold: 0.1 });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
