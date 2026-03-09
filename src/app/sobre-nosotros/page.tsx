import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Alturia",
  description: "Conoce al equipo de Alturia. El factor humano detrás de la automatización. Devolvemos el control del tiempo a quienes dirigen un negocio.",
};

export default function SobreNosotros() {
  const sectores = [
    {
      titulo: "Servicios Profesionales",
      descripcion: "Eliminamos la carga documental en asesorías, despachos y agencias.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      titulo: "Salud y Bienestar",
      descripcion: "Optimizamos la operativa diaria en farmacias, consultas médicas y centros especializados, donde el orden y la agilidad son fundamentales.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      titulo: "Comercio y Hostelería",
      descripcion: "Automatizamos desde la gestión de pedidos hasta la comunicación con el cliente, asegurando que nada quede al azar.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Header */}
      <div className="pt-32 pb-16 px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          
          <span className="inline-block px-4 py-2 bg-black/5 dark:bg-white/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium mb-6 border border-black/10 dark:border-white/10">
            SOBRE NOSOTROS
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
            El factor humano detrás de la
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              automatización
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            En Alturia, no solo implementamos tecnología; devolvemos el control del tiempo 
            a quienes dirigen un negocio.
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-12">
            {/* Intro */}
            <section>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Nacimos para resolver un problema común en el tejido empresarial: la carga de tareas 
                manuales y repetitivas que frenan el crecimiento y generan un estrés innecesario.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Nuestra misión es clara: <strong className="text-black dark:text-white">ayudamos a las empresas a liberarse 
                de los procesos más tediosos</strong> para que puedan enfocarse en lo que verdaderamente aporta valor, 
                ya sea la estrategia comercial o la atención directa a sus clientes.
              </p>
            </section>

            {/* El Estándar Alturia */}
            <section className="bg-gradient-to-b from-black/[0.03] dark:from-white/[0.03] to-transparent border border-black/10 dark:border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-black dark:text-white">
                  El Estándar Alturia
                </h2>
              </div>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-4">
                Seguridad y Optimización a medida
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                La confianza es el pilar de cualquier automatización. Por eso, trabajamos bajo lo que llamamos 
                el <strong className="text-black dark:text-white">Estándar Alturia</strong>: un entorno digital robusto donde aplicamos medidas de 
                seguridad de grado empresarial. Al gestionar nosotros la infraestructura técnica, podemos 
                optimizar cada proceso al detalle y ofrecer soluciones de seguridad totalmente a medida.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                De este modo, garantizamos que la operativa de tu negocio no solo sea más rápida, sino que 
                esté protegida bajo los más altos estándares.
              </p>
            </section>

            {/* Proximidad y Compromiso */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                Proximidad y Compromiso Activo
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Aunque la tecnología de Alturia no tiene fronteras, valoramos profundamente la cercanía. 
                Operamos con fuerza desde <strong className="text-black dark:text-white">A Coruña (Galicia)</strong> y <strong className="text-black dark:text-white">Valencia</strong>, 
                conectando con el tejido empresarial local para entender sus desafíos de primera mano, 
                sin cerrar nuestras puertas a proyectos de cualquier otra ubicación que busquen una 
                transformación inteligente.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                Lo que nos diferencia es nuestro <strong className="text-black dark:text-white">seguimiento activo</strong>. En Alturia no creemos 
                en "instalar y desaparecer"; nos involucramos en tu estructura de manera personalizada y 
                entregada. Estamos ahí para todo lo que necesites, asegurando que cada sistema implementado 
                evolucione al ritmo de tu empresa y funcione siempre a pleno rendimiento.
              </p>
            </section>

            {/* Sectores */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                Especialización y Sectores Clave
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Nuestras soluciones de automatización e IA son flexibles y se adaptan a cualquier estructura 
                que busque eficiencia, aunque contamos con una sólida experiencia en sectores donde la 
                gestión administrativa es crítica:
              </p>
              
              <div className="grid gap-4">
                {sectores.map((sector, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-5 bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      {sector.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white mb-1">
                        {sector.titulo}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {sector.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cierre */}
            <section className="text-center pt-8 border-t border-black/10 dark:border-white/10">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed italic">
                En definitiva, en Alturia no buscamos una colaboración puntual, sino convertirnos en 
                tu <strong className="text-black dark:text-white not-italic">socio tecnológico de confianza</strong>.
              </p>
              <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mt-4">
                Transformamos el tiempo perdido en eficiencia real y, sobre todo, en tranquilidad para ti.
              </p>
            </section>

            {/* CTA */}
            <section className="pt-4">
              <div className="bg-gradient-to-b from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-3xl p-8 text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                  ¿Quieres conocernos mejor?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Agenda una llamada sin compromiso y cuéntanos sobre tu proyecto.
                </p>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-[1.03]"
                >
                  Contactar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
