import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/grituz-logo.png';

/**
 * GrituzLogo – Refined to match the reference image:
 * [G icon] | GRITUZ (bold)
 *            Redefining Horizons (small, spaced)
 *
 * • Logo background blends seamlessly with dark header (no box)
 * • Subtle slow shimmer/pulse on the G icon
 * • Horizontal alignment of icon and text block
 * • Premium typographic hierarchy
 */
export default function GrituzLogo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3.5 group"
      style={{ textDecoration: 'none' }}
    >
      {/* G Icon */}
      <motion.div
        className="relative flex-shrink-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ width: '44px', height: '44px' }}
      >
        {/* Slow pulsing glow behind icon */}
        <motion.div
          style={{
            position: 'absolute',
            inset: '-6px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* G logo image with soft shimmer filter animation */}
        <motion.img
          src={logoImage}
          alt="Grituz G"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            position: 'relative',
            zIndex: 1,
          }}
          animate={{
            filter: [
              'drop-shadow(0 0 3px rgba(139,92,246,0.25))',
              'drop-shadow(0 0 7px rgba(139,92,246,0.50))',
              'drop-shadow(0 0 3px rgba(139,92,246,0.25))',
            ],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Text Block */}
      <div className="flex flex-col leading-none">
        {/* GRITUZ */}
        <span
          style={{
            fontFamily: 'inherit',
            fontWeight: 700,
            fontSize: '1.2rem',
            letterSpacing: '0.08em',
            color: '#f5f0ff',
            lineHeight: 1,
            marginBottom: '5px',
          }}
        >
          GRITUZ
        </span>
        {/* Tagline */}
        <span
          style={{
            fontWeight: 400,
            fontSize: '0.65rem',
            letterSpacing: '0.17em',
            color: 'rgba(196,181,253,0.55)',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          Redefining Horizons
        </span>
      </div>
    </Link>
  );
}
