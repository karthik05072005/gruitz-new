import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * GrowthFramework – Kodexa "Intelligence Pipeline" design
 * Features:
 *  - Active step cycling every 3s
 *  - SVG data flow lines with traveling signal dots
 *  - Enhanced: ambient orbs + mesh grid + more floating particles
 *  - Glass-card steps with hover + active animations
 *  - "Currently Active" card removed (no content value)
 */

const steps = [
  {
    number: "01",
    title: "Discovery & Insight",
    description: "Understanding your business, audience, and growth gaps through deep research.",
  },
  {
    number: "02",
    title: "Strategy & Architecture",
    description: "Designing structured plans and scalable systems aligned with your goals.",
  },
  {
    number: "03",
    title: "Design & Development",
    description: "Building high-performance, visually powerful digital solutions.",
  },
  {
    number: "04",
    title: "Optimization & Growth",
    description: "Monitoring, refining, and improving long-term measurable performance.",
  },
];

/* ── Floating Particles ── */
const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  delay: `${(i * 0.5) % 5}s`,
  duration: `${12 + (i * 2.5) % 12}s`,
  size: i % 3 === 0 ? "4px" : "2px",
  opacity: i % 4 === 0 ? 0.55 : 0.3,
}));

/* ── Pipeline Step Component ── */
function PipelineStep({
  step,
  index,
  isActive,
}: {
  step: typeof steps[0];
  index: number;
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.13 }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center text-center"
    >
      {/* Glow ring + circle node */}
      <div className="relative mb-6">
        {/* Outer ambient glow */}
        <motion.div
          className="absolute -inset-4 rounded-full"
          animate={{
            opacity: isActive ? [0.4, 0.9, 0.4] : [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            background: "radial-gradient(circle, rgba(164,78,244,0.5) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />

        {/* Main dot */}
        <motion.div
          className="relative w-14 h-14 rounded-full flex items-center justify-center z-10"
          animate={{
            scale: isActive ? [1, 1.1, 1] : 1,
            boxShadow: isActive
              ? [
                "0 0 20px rgba(164,78,244,0.5)",
                "0 0 40px rgba(164,78,244,0.9)",
                "0 0 20px rgba(164,78,244,0.5)",
              ]
              : "0 0 15px rgba(150,55,236,0.4)",
          }}
          transition={{
            scale: { duration: 2, repeat: Infinity },
            boxShadow: { duration: 0.3 },
          }}
          style={{
            background: isActive
              ? "linear-gradient(135deg, #a44ef4 0%, #9637ec 100%)"
              : "linear-gradient(135deg, rgba(150,55,236,0.5) 0%, rgba(107,28,201,0.5) 100%)",
            border: `2px solid ${isActive ? "rgba(164,78,244,0.8)" : "rgba(150,55,236,0.3)"}`,
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: isActive ? "#fff" : "rgba(196,181,253,0.7)",
              letterSpacing: "0.04em",
            }}
          >
            {step.number}
          </span>
        </motion.div>
      </div>

      {/* Text */}
      <h3
        className="font-bold mb-2"
        style={{
          fontSize: "0.95rem",
          color: isActive ? "#e2d9f3" : "rgba(255,255,255,0.75)",
          transition: "color 0.3s",
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontSize: "0.82rem",
          lineHeight: 1.65,
          color: "rgba(196,181,253,0.55)",
          maxWidth: "180px",
        }}
      >
        {step.description}
      </p>
    </motion.div>
  );
}

export default function GrowthFramework() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0818 0%, #110c22 100%)" }}
    >
      {/* ── Large ambient orbs ── */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{ opacity: [0.07, 0.14, 0.07], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "520px",
          height: "520px",
          top: "-200px",
          left: "-180px",
          background: "radial-gradient(circle, rgba(164,78,244,0.35) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        className="absolute pointer-events-none"
        animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          width: "460px",
          height: "460px",
          bottom: "-180px",
          right: "-140px",
          background: "radial-gradient(circle, rgba(107,28,201,0.4) 0%, transparent 65%)",
          filter: "blur(55px)",
        }}
      />
      <motion.div
        className="absolute pointer-events-none"
        animate={{ opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{
          width: "300px",
          height: "300px",
          top: "40%",
          left: "45%",
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── SVG Mesh Grid ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="meshGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M60 0 L0 0 0 60" fill="none" stroke="rgba(164,78,244,1)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#meshGrid)" />
      </svg>

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full animate-float"
            style={{
              width: p.size,
              height: p.size,
              background: `rgba(164,78,244,${p.opacity})`,
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-white text-center mb-6"
            style={{
              fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
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
            We transform ideas into scalable digital solutions through a structured strategy,
            design, and technology process built for measurable business growth.
          </motion.p>
        </motion.div>

        {/* ── SVG Data Flow Lines ── */}
        <div className="relative">
          <svg
            className="absolute top-[28px] left-0 right-0 w-full hidden lg:block"
            style={{ height: "56px", overflow: "visible", zIndex: 0 }}
            viewBox="0 0 1000 56"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9637ec" stopOpacity="0" />
                <stop offset="50%" stopColor="#a44ef4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#9637ec" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Static dashed connector line */}
            <line
              x1="100" y1="28" x2="900" y2="28"
              stroke="rgba(164,78,244,0.2)"
              strokeWidth="1.5"
              strokeDasharray="6 10"
            />

            {/* Animated flow overlay */}
            <line
              x1="100" y1="28" x2="900" y2="28"
              stroke="url(#flowGrad)"
              strokeWidth="1.5"
              className="flow-line"
              style={{
                strokeDasharray: "6 10",
                animation: "flowMove 6s linear infinite",
                opacity: 0.6,
              }}
            />

            {/* Traveling signal dot 1 */}
            <circle r="4" fill="#a44ef4" opacity="0.9">
              <animateMotion dur="4s" repeatCount="indefinite" begin="0s">
                <mpath href="#pipelinePath" />
              </animateMotion>
            </circle>

            {/* Traveling signal dot 2 */}
            <circle r="3" fill="#b76af7" opacity="0.7">
              <animateMotion dur="4s" repeatCount="indefinite" begin="2s">
                <mpath href="#pipelinePath" />
              </animateMotion>
            </circle>

            {/* Motion path */}
            <path
              id="pipelinePath"
              d="M100,28 L900,28"
              fill="none"
              stroke="none"
            />
          </svg>

          {/* ── Pipeline Steps ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <PipelineStep
                key={step.title}
                step={step}
                index={i}
                isActive={activeStep === i}
              />
            ))}
          </div>
        </div>

        {/* ── Step Indicator Dots ── */}
        <div className="flex justify-center gap-3 mt-12">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              style={{
                width: i === activeStep ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background:
                  i === activeStep
                    ? "linear-gradient(90deg, #9637ec, #a44ef4)"
                    : "rgba(164,78,244,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease",
                padding: 0,
              }}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
