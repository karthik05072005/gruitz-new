import { motion } from "framer-motion";
import { MessageSquare, Zap, TrendingUp } from "lucide-react";

/**
 * AdvantageSection – Kodexa "Engineering Intelligence" style:
 * Left: bold 2-line heading + subtext paragraph
 * Right: empty (negative space)
 * Below: 3 horizontal cards side by side with icon + title + description
 */

const advantages = [
  {
    icon: MessageSquare,
    title: "We Listen First",
    description: "We understand your goals, challenges, and vision before designing or building anything.",
  },
  {
    icon: Zap,
    title: "We Build With Purpose",
    description: "Every website, campaign, and automation system is created to drive meaningful business growth.",
  },
  {
    icon: TrendingUp,
    title: "We Grow With You",
    description: "Through continuous support and optimization, we evolve your digital systems as you scale.",
  },
];

export default function AdvantageSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #0d0818 0%, #110c22 100%)" }}
    >
      <div className="container-custom">

        {/* Top: 2-column heading + description */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left — Bold heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(1.8rem, 3.6vw, 2.9rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Helping Small Businesses{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #c4b5fd 0%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dream Bigger
              </span>
            </h2>
          </motion.div>

          {/* Right — Subtext */}
          <motion.p
            style={{
              color: "rgba(196,181,253,0.65)",
              fontSize: "0.97rem",
              lineHeight: 1.78,
              paddingTop: "0.5rem",
            }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            At Grituz Software Services, we believe every growing business deserves more than just
            a website. We partner with you to build strong digital foundations that create real
            opportunities, steady growth, and long-term success.
          </motion.p>
        </div>

        {/* Bottom: 3 horizontal cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(139,92,246,0.10)",
                borderRadius: "16px",
                padding: "1.75rem 1.75rem",
                backdropFilter: "blur(10px)",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(139,92,246,0.22)")}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(139,92,246,0.10)")}
            >
              {/* Icon */}
              <div
                className="mb-5 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.18)" }}
              >
                <adv.icon style={{ width: "19px", height: "19px", color: "#a78bfa" }} />
              </div>

              {/* Title */}
              <h3
                className="text-white font-bold mb-3"
                style={{ fontSize: "1.0rem" }}
              >
                {adv.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "0.85rem", lineHeight: 1.72, color: "rgba(196,181,253,0.6)" }}>
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
