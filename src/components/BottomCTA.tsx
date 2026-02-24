'use client';

import { useState, useEffect } from 'react';

export default function BottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 500px)
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bottom-cta-enter">
      <div className="bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-t border-black/10 dark:border-white/10 px-4 py-3 safe-area-bottom">
        <a
          href="mailto:hola@alturia.net"
          className="haptic-tap flex items-center justify-center gap-2 w-full py-3.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-[15px] shadow-[0_-2px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_-2px_20px_rgba(255,255,255,0.05)] active:scale-[0.97] transition-transform duration-150"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Agendar auditoría
        </a>
      </div>
    </div>
  );
}
