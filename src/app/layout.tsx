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
  keywords: ["IA", "Inteligencia Artificial", "Automatización", "Workflows", "Agentes IA", "Machine Learning", "Transformación Digital"],
  authors: [{ name: "Alturia" }],
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
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
        url: "/og-image.svg",
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
    images: ["/og-image.svg"],
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
