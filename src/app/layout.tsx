import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alturia | Integración de Inteligencia Artificial para Empresas",
  description: "Transformamos tu negocio con soluciones de IA: automatización inteligente, workflows optimizados y agentes de IA personalizados. Líderes en integración de inteligencia artificial.",
  keywords: ["IA", "Inteligencia Artificial", "Automatización", "Workflows", "Agentes IA", "Machine Learning", "Transformación Digital", "PYMES España", "A Coruña", "Chatbots", "CRM"],
  authors: [{ name: "Alturia" }],
  creator: "Alturia Agency S.L.",
  publisher: "Alturia Agency S.L.",
  metadataBase: new URL('https://alturia.net'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/alturia_favicon.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Alturia | Integración de Inteligencia Artificial",
    description: "Automatización inteligente, workflows optimizados y agentes de IA personalizados para llevar tu empresa al siguiente nivel.",
    type: "website",
    locale: "es_ES",
    url: "https://alturia.net",
    siteName: "Alturia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alturia – Automatización e IA para empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alturia | Integración de Inteligencia Artificial",
    description: "Escala tu negocio en piloto automático con IA y automatización.",
    images: ["/og-image.png"],
  },
  verification: {
    // google: 'tu-codigo-google-search-console', // Añadir cuando lo tengas
    // yandex: 'tu-codigo-yandex',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Schema.org JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://alturia.net/#organization",
                  "name": "Alturia",
                  "legalName": "Alturia Agency S.L.",
                  "url": "https://alturia.net",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://alturia.net/logo_sin_letras.svg",
                    "width": 512,
                    "height": 512
                  },
                  "description": "Automatización e Inteligencia Artificial para empresas. Transformamos la operativa de las PYMES españolas mediante chatbots IA, automatización de workflows y Business Intelligence.",
                  "email": "hola@alturia.net",
                  "telephone": "+34687569481",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "A Coruña",
                    "addressRegion": "Galicia",
                    "addressCountry": "ES"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "España"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/alturia",
                    "https://twitter.com/alturia"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+34687569481",
                    "contactType": "sales",
                    "availableLanguage": ["Spanish", "English"]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://alturia.net/#website",
                  "url": "https://alturia.net",
                  "name": "Alturia",
                  "description": "Integración de Inteligencia Artificial para Empresas",
                  "publisher": {
                    "@id": "https://alturia.net/#organization"
                  },
                  "inLanguage": "es-ES"
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://alturia.net/#localbusiness",
                  "name": "Alturia",
                  "image": "https://alturia.net/logo_sin_letras.svg",
                  "priceRange": "€€",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "A Coruña",
                    "addressRegion": "Galicia",
                    "addressCountry": "ES"
                  },
                  "telephone": "+34687569481",
                  "email": "hola@alturia.net",
                  "url": "https://alturia.net",
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                },
                {
                  "@type": "Service",
                  "serviceType": "Automatización e Inteligencia Artificial",
                  "provider": {
                    "@id": "https://alturia.net/#organization"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "España"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios de Automatización",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Agentes de IA Generativa",
                          "description": "Chatbots y asistentes inteligentes para atención al cliente 24/7"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Automatización de Flujos",
                          "description": "Conexión de CRM, facturación y email con automatizaciones inteligentes"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Business Intelligence",
                          "description": "Dashboards centralizados y análisis de datos para toma de decisiones"
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
        
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            })();
          `,
        }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
