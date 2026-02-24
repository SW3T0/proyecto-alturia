'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tapCount, setTapCount] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 150, 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrolled = scrollProgress > 0.1;
  const isDark = theme === 'dark';

  // Easter egg: 7 taps on logo
  const handleLogoTap = () => {
    if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    const next = tapCount + 1;
    if (next >= 7) {
      setEasterEgg(true);
      setTapCount(0);
      // Reset after animation
      setTimeout(() => setEasterEgg(false), 3000);
    } else {
      setTapCount(next);
      tapTimerRef.current = setTimeout(() => setTapCount(0), 2000);
    }
  };

  const navLinks = [
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Método', href: '#metodo' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Soporte', href: '#contacto' },
  ];

  // Valores interpolados según el scroll
  const maxWidth = 1280 - (1280 - 720) * scrollProgress;
  const bgOpacity = scrollProgress * 0.75;
  const blur = scrollProgress * 20;
  const shadowOpacity = scrollProgress * (isDark ? 0.4 : 0.1);
  const borderRadius = 16 + scrollProgress * 18;
  const borderOpacity = scrollProgress * 0.06;
  const paddingX = 32 - scrollProgress * 12;
  const paddingY = 8 - scrollProgress * 2;

  const bgColor = isDark
    ? `rgba(20, 20, 20, ${bgOpacity})`
    : `rgba(255, 255, 255, ${bgOpacity})`;
  const borderColor = isDark
    ? `rgba(255, 255, 255, ${borderOpacity})`
    : `rgba(0, 0, 0, ${borderOpacity})`;

  return (
    <div className="fixed w-full z-50 flex justify-center px-4"
      style={{ paddingTop: `${16 - scrollProgress * 4}px` }}
    >
      <nav
        style={{
          maxWidth: `${maxWidth}px`,
          backgroundColor: bgColor,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          boxShadow: `0 8px 32px rgba(0, 0, 0, ${shadowOpacity})`,
          border: `1px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`,
          padding: `${paddingY}px ${paddingX}px`,
          transition: 'max-width 0.1s ease-out, border-radius 0.1s ease-out',
        }}
        className="w-full"
      >
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={(e) => { e.preventDefault(); handleLogoTap(); }}>
            <div
              ref={logoRef}
              className={`rounded-xl flex items-center justify-center bg-black dark:bg-white transition-all duration-300 ${scrolled ? 'w-7 h-7' : 'w-8 h-8'} ${easterEgg ? 'easter-egg-active' : ''}`}
            >
              <span className="text-white dark:text-black font-bold text-lg">A</span>
            </div>
            <span className={`font-bold text-gray-900 dark:text-white transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
              Alturia
            </span>
          </Link>

          {/* Easter egg overlay */}
          {easterEgg && (
            <div className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center">
              <div className="text-center" style={{ animation: 'heroFadeIn 0.5s ease-out forwards' }}>
                <p className="text-6xl mb-2">🤖</p>
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  ¡Has encontrado el secreto de Alturia!
                </p>
              </div>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 text-sm font-medium px-4 py-2 rounded-xl"
              >
                {link.name}
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
              aria-label="Cambiar tema"
            >
              <span key={theme} className="theme-toggle-icon block">
                {isDark ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </span>
            </button>

            <Link
              href="#contacto"
              className="ml-1 px-5 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium shadow-[0_2px_8px_rgba(0,0,0,0.25)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.15)] hover:bg-gray-800 dark:hover:bg-gray-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Cambiar tema"
            >
              <span key={theme} className="theme-toggle-icon block">
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="py-3 space-y-1 border-t border-black/5 dark:border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="haptic-tap block py-2.5 px-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 font-medium rounded-xl"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium mt-2"
            >
              Contactar
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
