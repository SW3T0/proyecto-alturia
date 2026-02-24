'use client';

import Link from 'next/link';

export default function Hero() {
  const companies = ['VORTEX', 'NEXUS', 'SFERA', 'GLOBAL', 'PRIME', 'AURA', 'SYNTH', 'OMEGA', 'ZENITH', 'FLUX'];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
    >
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(800px,200vw)] h-[600px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/5 dark:from-emerald-500/10 via-transparent to-transparent" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(rgba(128,128,128,.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(128,128,128,.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-black/5 dark:bg-white/10 backdrop-blur-sm rounded-full border border-black/10 dark:border-white/10 mb-8 opacity-0" style={{ animation: 'heroFadeIn 0.8s ease-out 0.1s forwards' }}>
          <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
            Automatización e IA para empresas
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-[2.25rem] sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 leading-[1.1] tracking-tight opacity-0" style={{ animation: 'heroFadeIn 0.8s ease-out 0.3s forwards' }}>
          Escala tu negocio
          <br />
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            en piloto automático.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0" style={{ animation: 'heroFadeIn 0.8s ease-out 0.5s forwards' }}>
          Eliminamos el caos operativo. Alturia integra Inteligencia Artificial y 
          automatizaciones para que tu equipo se enfoque en crecer, no en tareas repetitivas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 opacity-0 w-full" style={{ animation: 'heroFadeIn 0.8s ease-out 0.7s forwards' }}>
          <Link
            href="#contacto"
            className="haptic-tap group px-6 sm:px-8 py-4 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black rounded-full font-semibold text-[15px] sm:text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-white/10 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Empezar transformación
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <Link
            href="#soluciones"
            className="px-6 sm:px-8 py-4 bg-black/5 dark:bg-white/10 backdrop-blur-sm text-black dark:text-white rounded-full font-semibold text-[15px] sm:text-base border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Ver demostración
          </Link>
        </div>

        {/* Trust banner */}
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-6">
            Empresas que confían en nosotros
          </p>
          
          {/* Logos carousel */}
          <div className="relative overflow-hidden max-w-[100vw]">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...companies, ...companies].map((company, index) => (
                <span
                  key={index}
                  className="mx-8 text-gray-400 dark:text-gray-600 font-bold text-lg tracking-wider hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 dark:bg-gray-600 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
