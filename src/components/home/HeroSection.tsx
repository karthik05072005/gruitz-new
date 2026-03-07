import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Energy Arc SVG – Animated electric arcs
   Matches spec: pulseArc keyframe, colours, glow filter
────────────────────────────────────────────── */
interface EnergyArc {
  id: number;
  color: string;
  duration: number;
  delay: number;
  path: string;
}

function EnergyFieldSVG() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [arcs, setArcs] = useState<EnergyArc[]>([]);

  const colors = ["#9f6bff", "#7a5cff", "#b794f6", "#818cf8"];

  const generateRandomPath = (width: number, height: number): string => {
    const r = () => Math.random();
    return `M ${r() * width} ${r() * height} C ${r() * width} ${r() * height}, ${r() * width} ${r() * height}, ${r() * width} ${r() * height}`;
  };

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const newArcs: EnergyArc[] = Array.from({ length: 4 }, (_, i) => ({
        id: Date.now() + i,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 8 + Math.random() * 6,
        delay: Math.random() * 4,
        path: generateRandomPath(width, height),
      }));
      setArcs(newArcs);
    };

    update();
    const interval = setInterval(update, 10000); // reduced frequency to 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <svg className="absolute inset-0 w-full h-full" style={{ filter: "blur(0.5px)" }}>
        <defs>
          <filter id="heroGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {arcs.map((arc) => (
          <g key={arc.id}>
            <path
              d={arc.path}
              fill="none"
              stroke={arc.color}
              strokeWidth="2"
              strokeDasharray="1200"
              opacity="0.6"
              filter="url(#heroGlow)"
              style={{
                animation: `pulseArc ${arc.duration}s ${arc.delay}s ease-in-out infinite`,
              }}
            />
            <path
              d={arc.path}
              fill="none"
              stroke={arc.color}
              strokeWidth="1"
              strokeDasharray="1200"
              opacity="0.3"
              style={{
                animation: `pulseArc ${arc.duration}s ${arc.delay + 0.5}s ease-in-out infinite`,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HeroSection – All 5 animation layers combined
────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d0818 0%, #130d2a 50%, #0a0614 100%)" }}
    >
      {/* ── LAYER 1: Aurora Background (moving gradient blobs) ── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Aurora blob 1 – top-left */}
        <div
          style={{
            position: "absolute",
            width: "900px", height: "900px",
            top: "-400px", left: "-350px",
            background: "radial-gradient(circle, rgba(109,40,217,0.22) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "auroraMove 18s ease-in-out infinite alternate",
          }}
        />
        {/* Aurora blob 2 – top-right */}
        <div
          style={{
            position: "absolute",
            width: "800px", height: "800px",
            top: "-350px", right: "-300px",
            background: "radial-gradient(circle, rgba(88,28,135,0.18) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "auroraMove 18s ease-in-out infinite alternate",
            animationDelay: "6s",
          }}
        />
        {/* Aurora blob 3 – bottom-center */}
        <div
          style={{
            position: "absolute",
            width: "700px", height: "700px",
            bottom: "-300px", left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
            filter: "blur(65px)",
            animation: "auroraMove 18s ease-in-out infinite alternate",
            animationDelay: "12s",
          }}
        />
      </div>

      {/* ── LAYER 2: Floating Glass Shapes ── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            width: "280px", height: "280px",
            top: "10%", left: "8%",
            borderRadius: "50%",
            opacity: 0.12,
            background: "linear-gradient(135deg, rgba(159,107,255,0.3) 0%, rgba(122,92,255,0.3) 100%)",
            filter: "blur(28px)",
            animation: "float 12s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "240px", height: "240px",
            top: "55%", right: "8%",
            borderRadius: "50%",
            opacity: 0.10,
            background: "linear-gradient(135deg, rgba(183,148,246,0.3) 0%, rgba(129,140,248,0.3) 100%)",
            filter: "blur(24px)",
            animation: "float 12s ease-in-out infinite alternate",
            animationDelay: "6s",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "200px", height: "200px",
            bottom: "12%", left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
            opacity: 0.08,
            background: "linear-gradient(135deg, rgba(109,40,217,0.3) 0%, rgba(167,139,250,0.3) 100%)",
            filter: "blur(22px)",
            animation: "float 12s ease-in-out infinite alternate",
            animationDelay: "3s",
          }}
        />
      </div>

      {/* ── LAYER 3: Energy Field SVG Arcs ── */}
      <EnergyFieldSVG />

      {/* ── LAYER 4: Very faint static arc decoration (bottom-right) ── */}
      <svg
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{ opacity: 0.06, zIndex: 1 }}
        width="600"
        height="400"
        viewBox="0 0 600 400"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="580" cy="420" rx="340" ry="200" stroke="#a78bfa" strokeWidth="1" />
        <ellipse cx="580" cy="420" rx="260" ry="150" stroke="#a78bfa" strokeWidth="0.8" />
        <ellipse cx="580" cy="420" rx="180" ry="100" stroke="#a78bfa" strokeWidth="0.6" />
      </svg>

      {/* ── LAYER 5: Content with Framer Motion text animations ── */}
      <div className="container-custom relative pt-28 pb-36" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center">

          {/* H1 – per spec: opacity 0 y 40 → opacity 1 y 0, duration 1s */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(2.15rem, 5vw, 3.85rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            <span className="block text-white">Digital Solutions</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg, #b76af7 0%, #a44ef4 50%, #9637ec 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Engineered for Business
            </span>
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg, #a44ef4 0%, #9637ec 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Growth
            </span>
          </motion.h1>

          {/* Paragraph – per spec: y 30, delay 0.3s, duration 1s */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              maxWidth: "660px",
              margin: "0 auto",
              marginTop: "2rem",
              marginBottom: "2.75rem",
              fontSize: "clamp(0.95rem, 1.8vw, 1.07rem)",
              lineHeight: 1.6,
              color: "rgba(196,181,253,0.75)",
            }}
          >
            Grituz builds scalable web design, digital marketing, and AI automation solutions
            that drive measurable business growth.
          </motion.p>

          {/* Buttons – per spec: y 20, delay 0.5s, duration 0.6s */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Primary – with hover -translate-y-1 + shadow per spec */}
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ y: -1, boxShadow: "0 8px 24px rgba(164,78,244,0.45)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Link
                to="/services"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "16px 36px",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  background: "linear-gradient(135deg, #9637ec 0%, #a44ef4 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 18px rgba(150,55,236,0.4)",
                  textDecoration: "none",
                  transition: "box-shadow 0.3s",
                  width: "100%",
                }}
              >
                Explore Solutions <ArrowRight style={{ width: 18, height: 18 }} />
              </Link>
            </motion.div>

            {/* Secondary */}
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Link
                to="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px 32px",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#e2d9f3",
                  border: "1px solid rgba(164,78,244,0.4)",
                  background: "rgba(150,55,236,0.10)",
                  backdropFilter: "blur(8px)",
                  textDecoration: "none",
                  transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
                  width: "100%",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(150,55,236,0.18)";
                  el.style.borderColor = "rgba(164,78,244,0.55)";
                  el.style.boxShadow = "0 6px 20px rgba(150,55,236,0.28)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(150,55,236,0.10)";
                  el.style.borderColor = "rgba(164,78,244,0.4)";
                  el.style.boxShadow = "none";
                }}
              >
                Book a Consultation
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
