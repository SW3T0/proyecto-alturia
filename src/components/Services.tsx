'use client';

import { useState, useEffect, useRef } from 'react';

function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingBubble, setTypingBubble] = useState<'user' | 'bot' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  const messages = [
    { sender: 'user', text: 'Necesito reducir el tiempo de respuesta de mis emails.' },
    { sender: 'bot', text: 'Podemos implementar un sistema que clasifique emails entrantes y redacte borradores automáticos. ¿Te gustaría ver una demo?' },
    { sender: 'user', text: 'Sí, por favor.' },
    { sender: 'bot', text: '¡Perfecto! Te agendo una demo para esta semana. ¿Prefieres martes o jueves?' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startSequence();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const startSequence = () => {
    let delay = 600;
    const timers: ReturnType<typeof setTimeout>[] = [];

    messages.forEach((msg, i) => {
      timers.push(setTimeout(() => {
        setTypingBubble(msg.sender as 'user' | 'bot');
        setIsTyping(true);
      }, delay));

      delay += msg.sender === 'bot' ? 1500 : 800;

      timers.push(setTimeout(() => {
        setIsTyping(false);
        setTypingBubble(null);
        setVisibleMessages(i + 1);
      }, delay));

      delay += 600;
    });

    timers.push(setTimeout(() => {
      setVisibleMessages(0);
      setIsTyping(false);
      setTypingBubble(null);
      hasStarted.current = false;
      setTimeout(() => {
        hasStarted.current = true;
        startSequence();
      }, 1000);
    }, delay + 2000));

    return () => timers.forEach(clearTimeout);
  };

  return (
    <div ref={containerRef} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 border border-black/5 dark:border-white/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-sm">AI</span>
        </div>
        <div>
          <span className="text-black dark:text-white text-sm font-medium">Alturia Bot</span>
          <span className="text-emerald-600 dark:text-emerald-400 text-xs ml-2">● En línea</span>
        </div>
      </div>
      <div className="space-y-3 h-[310px] overflow-hidden">
        {messages.slice(0, visibleMessages).map((msg, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ease-out ${
              msg.sender === 'user'
                ? 'bg-black/5 dark:bg-white/10 rounded-xl rounded-tl-none p-3 max-w-[80%]'
                : 'bg-emerald-500/10 border border-emerald-500/20 rounded-xl rounded-tr-none p-3 max-w-[80%] ml-auto'
            }`}
            style={{
              animation: 'messageSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            <p className={`text-sm ${msg.sender === 'user' ? 'text-gray-700 dark:text-gray-300' : 'text-gray-700 dark:text-gray-300'}`}>
              {msg.text}
            </p>
          </div>
        ))}

        {isTyping && (
          <div
            className={`flex gap-1 items-center p-3 rounded-xl w-16 ${
              typingBubble === 'bot'
                ? 'bg-emerald-500/10 border border-emerald-500/20 rounded-tr-none ml-auto'
                : 'bg-black/5 dark:bg-white/10 rounded-tl-none'
            }`}
            style={{ animation: 'messageSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
          >
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}
      </div>
    </div>
  );
}

function FlowDemo() {
  const [step, setStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          runFlow();
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const runFlow = () => {
    let delay = 400;
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let s = 1; s <= 6; s++) {
      timers.push(setTimeout(() => setStep(s), delay));
      delay += 700;
    }
    timers.push(setTimeout(() => {
      setStep(0);
      hasStarted.current = false;
      setTimeout(() => {
        hasStarted.current = true;
        runFlow();
      }, 800);
    }, delay + 1500));
    return () => timers.forEach(clearTimeout);
  };

  return (
    <div ref={containerRef} className="flex items-center justify-center gap-4 py-8">
      {/* Email node */}
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
        step >= 1 ? 'bg-amber-500/20 border-2 border-amber-500/60 scale-110 shadow-lg shadow-amber-500/20' : 'bg-amber-500/10 border border-amber-500/30'
      }`}>
        <svg className={`w-8 h-8 transition-colors duration-500 ${step >= 1 ? 'text-amber-500' : 'text-amber-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>

      {/* Arrow 1 */}
      <div className={`transition-all duration-500 ${step >= 2 ? 'text-emerald-500 scale-110' : 'text-gray-300 dark:text-gray-600'}`}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>

      {/* DB node */}
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
        step >= 3 ? 'bg-purple-500/20 border-2 border-purple-500/60 scale-110 shadow-lg shadow-purple-500/20' : 'bg-purple-500/10 border border-purple-500/30'
      }`}>
        <svg className={`w-8 h-8 transition-colors duration-500 ${step >= 3 ? 'text-purple-500' : 'text-purple-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      </div>

      {/* Arrow 2 */}
      <div className={`transition-all duration-500 ${step >= 4 ? 'text-emerald-500 scale-110' : 'text-gray-300 dark:text-gray-600'}`}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>

      {/* Check node */}
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
        step >= 5 ? 'bg-emerald-500/20 border-2 border-emerald-500/60 scale-110 shadow-lg shadow-emerald-500/20' : 'bg-emerald-500/10 border border-emerald-500/30'
      }`}>
        <svg className={`w-8 h-8 transition-colors duration-500 ${step >= 5 ? 'text-emerald-500' : 'text-emerald-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  );
}

function ChartDemo() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const heights = [40, 65, 45, 80, 55, 90, 70, 95];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight;
      const end = windowHeight * 0.4;
      const current = rect.top;
      const p = Math.max(0, Math.min(1, (start - current) / (start - end)));
      setProgress(p);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="flex items-end justify-center gap-2 h-24">
      {heights.map((height, i) => {
        const barProgress = Math.max(0, Math.min(1, (progress - i * 0.03) / 0.7));
        const barHeight = 4 + (height - 4) * barProgress;
        return (
          <div
            key={i}
            className="w-6 bg-gradient-to-t from-emerald-500/30 to-emerald-500 rounded-t-sm hover:from-emerald-500 hover:to-emerald-400"
            style={{
              height: `${barHeight}%`,
              transition: 'height 0.15s ease-out',
            }}
          />
        );
      })}
    </div>
  );
}

export default function Services() {

  return (
    <section id="soluciones" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
            Tecnología invisible,
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              resultados visibles.
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Creamos ecosistemas digitales a medida. Desde la captación del cliente hasta la 
            post-venta, todo conectado y automatizado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 scroll-reveal" style={{ animationDelay: '0.15s' }}>
          {/* Agentes de IA - Featured */}
          <div className="lg:row-span-2 group relative bg-gradient-to-b from-black/[0.03] dark:from-white/[0.03] to-transparent border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">
                MÁS SOLICITADO
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-4">Agentes de IA Generativa</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Asistentes que no duermen. Entienden lenguaje natural, consultan tu base de 
              conocimientos y ejecutan acciones en tus sistemas.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['Atención al cliente 24/7', 'Agendamiento automático', 'Cualificación de Leads'].map((feature, i) => (
                <span key={i} className="px-4 py-2 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              ))}
            </div>

            {/* Chat Demo */}
            <ChatDemo />
          </div>

          {/* Automatización de Flujos */}
          <div className="group relative bg-gradient-to-b from-black/[0.03] dark:from-white/[0.03] to-transparent border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Automatización de Flujos</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Conectamos tu CRM, Facturación y Email. Si pasa X en un sitio, ocurre Y en el otro. Sin errores humanos.
            </p>
            
            <FlowDemo />
          </div>

          {/* Business Intelligence */}
          <div className="group relative bg-gradient-to-b from-black/[0.03] dark:from-white/[0.03] to-transparent border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Business Intelligence</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Dashboards centralizados. Deja de perder tiempo cruzando Excels y empieza a tomar decisiones basadas en datos.
            </p>
            
            <ChartDemo />
          </div>
        </div>

        {/* Consultoría Section - Primer paso destacado */}
        <div className="mt-6 group relative scroll-reveal bg-gradient-to-br from-emerald-500/5 via-emerald-500/[0.02] to-transparent border-2 border-emerald-500/20 rounded-3xl p-8 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-500">
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">
              PRIMER PASO
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="md:max-w-xl">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-4 md:mt-0">¿No sabes por dónde empezar?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                <strong className="text-black dark:text-white">Auditoría gratuita de tu operativa.</strong> Analizamos tus procesos, identificamos cuellos de botella y te mostramos exactamente dónde la automatización puede ahorrarte tiempo y dinero.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                Sin compromiso. Sin tecnicismos. Solo respuestas claras.
              </p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 whitespace-nowrap hover:scale-[1.03] active:scale-[0.97] hover:gap-3 shadow-lg shadow-black/10"
            >
              Solicitar auditoría gratis
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
