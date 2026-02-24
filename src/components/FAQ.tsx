'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Cuánto tiempo tarda en implementarse una automatización?',
    answer:
      'Depende de la complejidad. Un chatbot básico puede estar operativo en 5-7 días. Integraciones CRM complejas entre 2-4 semanas. Siempre empezamos con una auditoría gratuita para darte un roadmap realista.',
  },
  {
    question: '¿Necesito conocimientos técnicos para usar vuestras soluciones?',
    answer:
      'Absolutamente no. Diseñamos todo para que cualquier miembro de tu equipo pueda operar los sistemas sin formación técnica. Además, incluimos formación personalizada y soporte continuo.',
  },
  {
    question: '¿Qué pasa si algo falla en la automatización?',
    answer:
      'Implementamos monitorización 24/7 con alertas automáticas. Si ocurre un fallo, nuestro equipo lo detecta y resuelve antes de que impacte tu negocio. Además, todos los flujos tienen mecanismos de fallback.',
  },
  {
    question: '¿Puedo integrar IA con las herramientas que ya uso?',
    answer:
      'Sí. Trabajamos con más de 200 plataformas: Salesforce, HubSpot, Notion, Slack, Google Workspace, SAP, y muchas más. Si tu herramienta tiene API, podemos integrarla.',
  },
  {
    question: '¿Cuál es la inversión mínima para empezar?',
    answer:
      'La auditoría inicial es completamente gratuita y sin compromiso. A partir de ahí, los proyectos se adaptan al tamaño y necesidades de cada empresa. No hay permanencia ni cuotas ocultas.',
  },
  {
    question: '¿Trabajáis solo con empresas grandes?',
    answer:
      'No. Nuestra misión es democratizar la IA. Trabajamos con PYMES, startups y grandes empresas. Lo importante no es el tamaño, sino las ganas de optimizar y crecer.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-500/30">
      <button
        onClick={onClick}
        className="haptic-tap w-full flex items-center justify-between px-6 py-5 text-left gap-4 active:bg-black/5 dark:active:bg-white/5 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-black dark:text-white leading-snug pr-2">
          {question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-out"
        style={{
          maxHeight: isOpen ? '300px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 scroll-reveal">
          <span className="inline-block px-4 py-2 bg-black/5 dark:bg-white/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium mb-6 border border-black/10 dark:border-white/10">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Todo lo que necesitas saber antes de dar el paso.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 scroll-reveal" style={{ animationDelay: '0.15s' }}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
