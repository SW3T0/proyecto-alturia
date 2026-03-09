'use client';

import Link from 'next/link';

export default function About() {
  const pillars = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Compromiso Total',
      description: 'No vendemos horas, vendemos resultados. Trabajamos con un número limitado de clientes para garantizar una atención obsesiva al detalle.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'Infraestructura Robusta',
      description: 'Sistemas diseñados para escalar. Usamos servidores seguros y APIs redundantes para asegurar que tus automatizaciones nunca se detengan.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Seguridad Grado A',
      description: 'Tus datos son sagrados. Implementamos encriptación de extremo a extremo y cumplimos rigurosamente con la RGPD europea.',
    },
  ];

  return (
    <>
      {/* El Estándar Alturia */}
      <section id="metodo" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16 scroll-reveal">
            <span className="inline-block px-4 py-2 bg-black/5 dark:bg-white/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium mb-6 border border-black/10 dark:border-white/10">
              MANIFIESTO
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              El Estándar Alturia
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              No somos una agencia convencional. Somos tu partner tecnológico. Construimos 
              sobre tres pilares fundamentales para garantizar escalabilidad.
            </p>
          </div>

          {/* Pillars grid */}
          <div className="grid md:grid-cols-3 gap-6 scroll-reveal" style={{ animationDelay: '0.15s' }}>
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-black/[0.03] dark:from-white/[0.03] to-transparent border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros - About Section */}
      <section id="nosotros" className="py-24 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
        {/* Subtle gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center scroll-reveal">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-8 leading-tight">
              La eficiencia no es un lujo,
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                es una necesidad.
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
              <p>
                Fundada en A Coruña, Alturia nació de una frustración: ver cómo empresas brillantes 
                desperdiciaban su talento humano en tareas mecánicas.
              </p>
              <p>
                Creemos que el futuro del trabajo no consiste en reemplazar a las personas, sino 
                en liberarlas. Nuestra misión es democratizar el acceso a la Inteligencia Artificial 
                de alto nivel para las PYMES españolas.
              </p>
            </div>

            <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-8">— El equipo de Alturia.</p>

            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors mb-12"
            >
              Conoce nuestra historia
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Quote */}
            <div className="bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-3xl p-8 md:p-12">
              <svg className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 italic leading-relaxed mb-6">
                La automatización aplicada a una operación eficiente magnificará la eficiencia. 
                La automatización aplicada a una operación ineficiente magnificará la ineficiencia.
              </p>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold">BILL GATES</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
