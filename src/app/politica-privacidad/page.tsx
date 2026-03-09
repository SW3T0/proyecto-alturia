import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Alturia",
  description: "Política de privacidad y protección de datos de Alturia Agency S.L. conforme al RGPD.",
};

export default function PoliticaPrivacidad() {
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
          
          <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-8">
            Política de Privacidad
          </h1>
          
          <p className="text-gray-500 dark:text-gray-400 mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            {/* Introducción */}
            <section>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                En Alturia Agency S.L. estamos comprometidos con la protección de tu privacidad. Esta Política de 
                Privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal de acuerdo 
                con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de 
                Datos Personales y garantía de los derechos digitales (LOPDGDD).
              </p>
            </section>

            {/* Sección 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                1. Responsable del tratamiento
              </h2>
              <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Responsable:</strong> Alturia Agency S.L.</p>
                <p><strong>NIF:</strong> [PENDIENTE]</p>
                <p><strong>Dirección:</strong> [DIRECCIÓN], A Coruña, España</p>
                <p><strong>Email:</strong> hola@alturia.net</p>
                <p><strong>Teléfono:</strong> +34 687 569 481</p>
              </div>
            </section>

            {/* Sección 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                2. Datos que recopilamos
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Recopilamos información que nos proporcionas directamente cuando:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Completas un formulario de contacto (nombre, email, empresa, mensaje)</li>
                <li>Solicitas una auditoría gratuita</li>
                <li>Te comunicas con nosotros por email o WhatsApp</li>
                <li>Te suscribes a nuestra newsletter</li>
              </ul>
            </section>

            {/* Sección 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                3. Finalidad del tratamiento
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Tratamos tus datos personales para las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Gestión de consultas:</strong> Responder a tus solicitudes de información y contacto.</li>
                <li><strong>Prestación de servicios:</strong> Elaborar propuestas y ejecutar los servicios contratados.</li>
                <li><strong>Comunicaciones comerciales:</strong> Enviarte información sobre nuestros servicios (solo con tu consentimiento).</li>
                <li><strong>Mejora del servicio:</strong> Analizar el uso del sitio web para mejorar la experiencia del usuario.</li>
              </ul>
            </section>

            {/* Sección 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                4. Base legal del tratamiento
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Consentimiento:</strong> Cuando nos contactas o solicitas información.</li>
                <li><strong>Ejecución de contrato:</strong> Para la prestación de los servicios contratados.</li>
                <li><strong>Interés legítimo:</strong> Para el análisis y mejora de nuestros servicios.</li>
                <li><strong>Obligación legal:</strong> Cumplimiento de obligaciones fiscales y mercantiles.</li>
              </ul>
            </section>

            {/* Sección 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                5. Destinatarios de los datos
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                No vendemos ni compartimos tus datos personales con terceros, excepto:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Proveedores de servicios necesarios para nuestra actividad (hosting, email marketing)</li>
                <li>Administraciones públicas cuando exista obligación legal</li>
                <li>Con tu consentimiento expreso para cualquier otro caso</li>
              </ul>
            </section>

            {/* Sección 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                6. Conservación de datos
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Conservamos tus datos durante el tiempo necesario para cumplir con la finalidad para la que fueron 
                recogidos y para determinar las posibles responsabilidades derivadas. Los datos de clientes se 
                conservan durante la relación comercial y, posteriormente, durante los plazos legales de prescripción 
                (generalmente 5 años para obligaciones fiscales).
              </p>
            </section>

            {/* Sección 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                7. Tus derechos
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Tienes derecho a:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-black dark:text-white mb-1">Acceso</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Conocer qué datos tenemos sobre ti</p>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-black dark:text-white mb-1">Rectificación</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Corregir datos inexactos</p>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-black dark:text-white mb-1">Supresión</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Solicitar la eliminación de tus datos</p>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-black dark:text-white mb-1">Oposición</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Oponerte a ciertos tratamientos</p>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-black dark:text-white mb-1">Limitación</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Restringir el tratamiento</p>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-black dark:text-white mb-1">Portabilidad</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Recibir tus datos en formato portable</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                Para ejercer estos derechos, envía un email a{" "}
                <a href="mailto:hola@alturia.net" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                  hola@alturia.net
                </a>{" "}
                indicando tu solicitud y adjuntando copia de tu DNI.
              </p>
            </section>

            {/* Sección 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                8. Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y 
                realizar análisis estadísticos. Puedes configurar tu navegador para rechazar las cookies, aunque 
                esto puede afectar a la funcionalidad del sitio. Para más información, consulta nuestra política 
                de cookies.
              </p>
            </section>

            {/* Sección 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                9. Seguridad
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus 
                datos personales, incluyendo el uso de conexiones cifradas (HTTPS), almacenamiento seguro y acceso 
                restringido a la información.
              </p>
            </section>

            {/* Sección 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                10. Reclamaciones
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Si consideras que el tratamiento de tus datos no se ajusta a la normativa, puedes presentar una 
                reclamación ante la Agencia Española de Protección de Datos (AEPD) -{" "}
                <a 
                  href="https://www.aepd.es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  www.aepd.es
                </a>
              </p>
            </section>

            {/* Sección 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                11. Modificaciones
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Nos reservamos el derecho de modificar esta Política de Privacidad para adaptarla a novedades 
                legislativas o cambios en nuestras prácticas. Te recomendamos revisarla periódicamente.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
