import { useEffect } from 'react';

/**
 * CursorGlow – matches the spec exactly.
 * Uses direct left/top positioning (not transform offset) so the
 * radial gradient is perfectly centred on the cursor.
 */
export default function CursorGlow() {
  useEffect(() => {
    const glow = document.querySelector('.cursor-glow') as HTMLElement | null;

    const moveGlow = (e: MouseEvent) => {
      if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', moveGlow);
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);

  return <div className="cursor-glow" />;
}
