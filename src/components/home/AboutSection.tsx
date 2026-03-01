import { motion } from "framer-motion";
import { Calendar, Users, Target, Heart, Eye, Award } from "lucide-react";

/**
 * AboutSection – Kodexa-inspired 3-column layout:
 * • Left: 4 small info cards stacked
 * • Center: larger "Who We Are" card (slightly elevated)
 * • Right: 3 mission/vision/commitment cards
 * All typography refined: smaller, better line-height, more padding, softer borders.
 */

const leftCards = [
  { icon: Calendar, title: "Founded in 2022", description: "A young and fast-growing software services company focused on digital innovation." },
  { icon: Users, title: "Global Collaboration", description: "Seamless teamwork across time zones to support businesses worldwide." },
  { icon: Target, title: "Skilled & Agile Team", description: "A focused team blending creativity, strategy, and technical expertise." },
  { icon: Heart, title: "Client-First Approach", description: "We prioritize transparency, clarity, and long-term relationships." },
];

const rightCards = [
  { icon: Target, title: "Our Mission", description: "To help growing businesses build impactful digital experiences through strategic design, marketing, and intelligent technology solutions that drive measurable growth." },
  { icon: Eye, title: "Our Vision", description: "To be a trusted digital partner for modern businesses, known for clarity, creativity, and performance-driven results." },
  { icon: Award, title: "Our Commitment", description: "Clear communication, reliable delivery, and long-term partnership at every stage of your growth." },
];

const cardStyle = {
  border: "1px solid rgba(139,92,246,0.10)",
  background: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
};

export default function AboutSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #110c22 0%, #0d0818 100%)" }}
    >
      <div className="container-custom">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            About{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #c4b5fd 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Grituz
            </span>
          </motion.h2>
          <motion.p
            style={{ color: "rgba(196,181,253,0.6)", fontSize: "0.97rem", lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A growing software solutions partner built for modern businesses.
          </motion.p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">

          {/* LEFT – 4 small cards */}
          <div className="space-y-4">
            {leftCards.map((card, i) => (
              <motion.div
                key={card.title}
                style={{ ...cardStyle, padding: "1.4rem 1.5rem" }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                whileHover={{ y: -3, borderColor: "rgba(139,92,246,0.22)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(124,58,237,0.18)" }}
                  >
                    <card.icon style={{ width: "17px", height: "17px", color: "#a78bfa" }} />
                  </div>
                  <div>
                    <h4
                      className="text-white font-semibold mb-1"
                      style={{ fontSize: "0.88rem" }}
                    >
                      {card.title}
                    </h4>
                    <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "rgba(196,181,253,0.55)" }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER – Who We Are (featured card) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              style={{
                ...cardStyle,
                padding: "2.25rem 2rem",
                border: "1px solid rgba(139,92,246,0.2)",
                background: "rgba(109,40,217,0.07)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle inner glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.4), transparent)",
                }}
              />
              <div className="relative z-10 space-y-5">
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    background: "linear-gradient(90deg, #e9d5ff 0%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Who We Are
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "rgba(196,181,253,0.65)", maxWidth: "340px" }}>
                  Founded in 2022, Grituz is an emerging software solutions company helping small and medium
                  businesses build, scale, and optimize their digital presence. We combine strategy, creativity, and
                  technology to deliver reliable digital systems that create measurable and sustainable growth.
                </p>
                <div
                  style={{
                    width: "48px", height: "2px",
                    background: "linear-gradient(90deg, #7c3aed, #a78bfa)",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT – 3 mission/vision cards */}
          <div className="space-y-4">
            {rightCards.map((card, i) => (
              <motion.div
                key={card.title}
                style={{ ...cardStyle, padding: "1.4rem 1.5rem" }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                whileHover={{ y: -3, borderColor: "rgba(139,92,246,0.22)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(124,58,237,0.18)" }}
                  >
                    <card.icon style={{ width: "17px", height: "17px", color: "#a78bfa" }} />
                  </div>
                  <div>
                    <h4
                      className="text-white font-semibold mb-1"
                      style={{ fontSize: "0.88rem" }}
                    >
                      {card.title}
                    </h4>
                    <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "rgba(196,181,253,0.55)" }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
