'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Chatbots AI', href: '#soluciones' },
      { name: 'Automatización CRM', href: '#soluciones' },
      { name: 'Make / Zapier', href: '#soluciones' },
      { name: 'Consultoría de Datos', href: '#soluciones' },
    ],
    empresa: [
      { name: 'Sobre nosotros', href: '#nosotros' },
      { name: 'Antes y Después', href: '#resultados' },
      { name: 'Aviso Legal', href: '/aviso-legal' },
      { name: 'Política de Privacidad', href: '/politica-privacidad' },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-[#050505] text-black dark:text-white border-t border-black/5 dark:border-white/10 transition-colors duration-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                <img src="/logo_sin_letras.svg" alt="Alturia" className="w-full h-full object-contain invert dark:invert-0 transition-all duration-300" />
              </div>
              <span className="text-lg font-semibold text-black dark:text-white">
                Alturia
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 max-w-md">
              Transformamos la operativa de las empresas españolas mediante automatización 
              inteligente e IA. Menos caos, más rentabilidad.
            </p>
            <a href="mailto:hola@alturia.net" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 text-sm mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hola@alturia.net
            </a>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95"
                title="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 text-sm hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4">Compañía</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 text-sm hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} Alturia Agency S.L. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 dark:text-gray-600 text-sm">
              Diseñado en A Coruña, España
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
