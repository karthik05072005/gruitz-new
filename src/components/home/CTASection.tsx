import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * CTASection – Full-width glass-card CTA before footer.
 * Same card design language as the rest of the site.
 * Single primary button, centered layout, subtle hover animation.
 */
export default function CTASection() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #110c22 0%, #0d0818 100%)" }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: "relative",
            maxWidth: "860px",
            margin: "0 auto",
            padding: "3.5rem 3rem",
            textAlign: "center",
            background: "rgba(109,40,217,0.07)",
            border: "1px solid rgba(139,92,246,0.18)",
            borderRadius: "20px",
            backdropFilter: "blur(12px)",
            overflow: "hidden",
          }}
        >
          {/* Top-edge shimmer line */}
          <div
            style={{
              position: "absolute",
              top: 0, left: "10%", right: "10%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.45), transparent)",
            }}
          />

          {/* Corner glow blobs */}
          <div
            style={{
              position: "absolute",
              width: "260px", height: "260px",
              top: "-80px", right: "-80px",
              background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "200px", height: "200px",
              bottom: "-60px", left: "-60px",
              background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
              filter: "blur(35px)",
              pointerEvents: "none",
            }}
          />

          <div className="relative z-10 space-y-5">
            <motion.h2
              style={{
                fontSize: "clamp(1.65rem, 3vw, 2.4rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                background: "linear-gradient(90deg, #c4b5fd 0%, #a44ef4 60%, #9637ec 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Ready to Strengthen Your Digital Presence?
            </motion.h2>

            <motion.p
              style={{
                color: "rgba(196,181,253,0.65)",
                fontSize: "0.97rem",
                lineHeight: 1.72,
                maxWidth: "560px",
                margin: "0 auto",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              Let's discuss your goals and explore the right strategy for your business. Whether you need
              a website, branding, marketing, or automation, we'll help you move forward with clarity and
              confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.26 }}
              style={{ paddingTop: "0.5rem" }}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{ display: "inline-block" }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 36px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    background: "linear-gradient(135deg, #9637ec 0%, #a44ef4 100%)",
                    color: "#fff",
                    boxShadow: "0 4px 20px rgba(150,55,236,0.4)",
                    transition: "box-shadow 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 28px rgba(164,78,244,0.58)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(150,55,236,0.4)")}
                >
                  Book a Free Consultation
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
