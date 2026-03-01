import { motion } from "framer-motion";

/**
 * GrowthFramework – Kodexa "Intelligence Pipeline" design
 * Horizontal pipeline with glowing circle nodes connected by dashed lines.
 * No icons — only numbered glow dots + title + description below each node.
 */

const steps = [
  {
    title: "Discovery & Insight",
    description: "Understanding your business, audience, and growth gaps.",
  },
  {
    title: "Strategy & Architecture",
    description: "Designing structured plans aligned with your goals.",
  },
  {
    title: "Design & Development",
    description: "Building high-performance, scalable digital solutions.",
  },
  {
    title: "Optimization & Growth",
    description: "Monitoring, refining, and improving long-term performance.",
  },
];

export default function GrowthFramework() {
  return (
    <section
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #0d0818 0%, #110c22 100%)",
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-white text-center mb-6"
            style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The Grituz Digital Growth Framework
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-center"
            style={{ color: "rgba(196,181,253,0.65)", fontSize: "1rem", lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            "We transform ideas into scalable digital solutions through a structured strategy, design,
            and technology process built for measurable business growth."
          </motion.p>
        </motion.div>

        {/* Pipeline */}
        <div className="relative">
          {/* Connecting dashed line between nodes */}
          <div
            className="absolute top-[22px] left-[8%] right-[8%] hidden lg:block"
            style={{
              borderTop: "1.5px dashed rgba(139,92,246,0.3)",
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.13 }}
              >
                {/* Circle node */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Outer glow ring */}
                  <div
                    className="absolute -inset-3 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
                      filter: "blur(8px)",
                    }}
                  />
                  {/* Main dot */}
                  <div
                    className="relative w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                      boxShadow: "0 0 18px rgba(124,58,237,0.6), 0 0 6px rgba(124,58,237,0.4)",
                    }}
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ background: "rgba(255,255,255,0.9)" }}
                    />
                  </div>
                </motion.div>

                {/* Text */}
                <h3
                  className="font-bold mb-2 text-white"
                  style={{ fontSize: "0.95rem" }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.83rem",
                    lineHeight: 1.65,
                    color: "rgba(196,181,253,0.6)",
                    maxWidth: "180px",
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
