'use client';

export default function BeforeAfter() {
  const transformations = [
    {
      title: 'Gestión de emails y consultas',
      before: {
        stats: '3-4 horas/día',
        description: 'Responder manualmente cada email, copiar datos a hojas de cálculo, perder consultas importantes.',
      },
      after: {
        stats: '15 min/día',
        description: 'IA clasifica, responde automáticamente las consultas frecuentes y escala solo lo crítico.',
      },
      improvement: '90% menos tiempo',
    },
    {
      title: 'Facturación y cobros',
      before: {
        stats: '2 días/mes',
        description: 'Crear facturas manualmente, perseguir impagos, reconciliar en Excel.',
      },
      after: {
        stats: '2 horas/mes',
        description: 'Facturas automáticas, recordatorios de pago inteligentes, conciliación en tiempo real.',
      },
      improvement: '95% automatizado',
    },
    {
      title: 'Onboarding de clientes',
      before: {
        stats: '1-2 semanas',
        description: 'Emails manuales, documentos perdidos, seguimiento caótico del proceso.',
      },
      after: {
        stats: '48 horas',
        description: 'Flujo automatizado con formularios inteligentes, firma digital y seguimiento automático.',
      },
      improvement: '7x más rápido',
    },
  ];

  return (
    <section id="resultados" className="py-24 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block px-4 py-2 bg-black/5 dark:bg-white/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium mb-6 border border-black/10 dark:border-white/10">
            TRANSFORMACIÓN REAL
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
            Antes vs Después
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Así es como cambia la operativa de nuestros clientes después de implementar 
            automatización e IA. Resultados típicos en 30-60 días.
          </p>
        </div>

        {/* Transformations grid */}
        <div className="space-y-8">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="scroll-reveal bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Title bar */}
              <div className="px-6 py-4 border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
                <h3 className="text-lg font-bold text-black dark:text-white">{item.title}</h3>
              </div>

              {/* Before/After comparison */}
              <div className="grid md:grid-cols-2">
                {/* Before */}
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 bg-red-500/[0.02]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-red-600 dark:text-red-400 uppercase tracking-wide">Antes</span>
                  </div>
                  <p className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">{item.before.stats}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.before.description}</p>
                </div>

                {/* After */}
                <div className="p-6 md:p-8 bg-emerald-500/[0.02]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">Después</span>
                  </div>
                  <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">{item.after.stats}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.after.description}</p>
                </div>
              </div>

              {/* Improvement badge */}
              <div className="px-6 py-3 border-t border-black/10 dark:border-white/10 bg-emerald-500/5 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{item.improvement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 scroll-reveal">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Quiero estos resultados
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
