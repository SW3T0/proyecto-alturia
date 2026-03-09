import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal | Alturia",
  description: "Aviso legal y condiciones de uso del sitio web de Alturia Agency S.L.",
};

export default function AvisoLegal() {
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
            Aviso Legal
          </h1>
          
          <p className="text-gray-500 dark:text-gray-400 mb-12">
            Última actualización: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            {/* Sección 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                1. Datos identificativos
              </h2>
              <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Denominación social:</strong> Alturia Agency S.L.</p>
                <p><strong>NIF:</strong> [PENDIENTE]</p>
                <p><strong>Domicilio social:</strong> [DIRECCIÓN], A Coruña, España</p>
                <p><strong>Email:</strong> hola@alturia.net</p>
                <p><strong>Teléfono:</strong> +34 687 569 481</p>
                <p><strong>Inscripción registral:</strong> [DATOS DEL REGISTRO MERCANTIL]</p>
              </div>
            </section>

            {/* Sección 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                2. Objeto y ámbito de aplicación
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                El presente Aviso Legal regula el acceso y uso del sitio web alturia.net (en adelante, "el Sitio Web"), 
                titularidad de Alturia Agency S.L. El acceso al Sitio Web atribuye la condición de usuario e implica 
                la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
              </p>
            </section>

            {/* Sección 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                3. Propiedad intelectual e industrial
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Todos los contenidos del Sitio Web, incluyendo a título enunciativo pero no limitativo: textos, 
                fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales 
                o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Alturia Agency S.L. 
                o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno de los 
                derechos de explotación sobre los mismos.
              </p>
            </section>

            {/* Sección 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                4. Condiciones de uso
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, el presente Aviso Legal, 
                y las demás condiciones, reglamentos e instrucciones que pudieran ser de aplicación. El usuario se 
                obliga a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>No utilizar el Sitio Web con fines ilícitos o contrarios al orden público.</li>
                <li>No introducir o difundir virus informáticos o cualesquiera otros sistemas que puedan causar daños.</li>
                <li>No intentar acceder y/o utilizar las cuentas de otros usuarios.</li>
                <li>No reproducir, copiar, distribuir o modificar los contenidos sin autorización expresa.</li>
              </ul>
            </section>

            {/* Sección 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                5. Exclusión de responsabilidad
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Alturia Agency S.L. no se hace responsable de los daños y perjuicios que pudieran derivarse de 
                interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones 
                en el funcionamiento operativo del sistema electrónico. Asimismo, tampoco responde de los retrasos 
                o bloqueos en el uso causados por deficiencias o sobrecargas de Internet o en otros sistemas electrónicos.
              </p>
            </section>

            {/* Sección 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                6. Enlaces a terceros
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                El Sitio Web puede contener enlaces a sitios web de terceros. Alturia Agency S.L. no asume ninguna 
                responsabilidad por el contenido, veracidad o funcionamiento de dichos sitios externos.
              </p>
            </section>

            {/* Sección 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                7. Legislación aplicable y jurisdicción
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Las presentes condiciones se rigen por la legislación española. Para cualquier controversia que 
                pudiera surgir en relación con el acceso o uso del Sitio Web, las partes se someten a la jurisdicción 
                de los Juzgados y Tribunales de A Coruña, con renuncia expresa a cualquier otro fuero que pudiera 
                corresponderles.
              </p>
            </section>

            {/* Sección 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                8. Contacto
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Para cualquier consulta relacionada con este Aviso Legal, puede contactarnos en{" "}
                <a href="mailto:hola@alturia.net" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                  hola@alturia.net
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
