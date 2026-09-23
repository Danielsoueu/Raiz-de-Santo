import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { 
  MessageCircle, 
  Instagram, 
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';

import Navbar from "./components/Navbar";
import { localBusinessSchema, BASE_URL } from "../lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

const LOGO_URL = "https://i.ibb.co/5xFmZ0MS/An-ncio-do-Instagram-para-Nova-Cole-o-com-Desconto-Rosa-e-Branco.png";
const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";
const phoneHref = "tel:+5511969035273";

export const viewport: Viewport = {
  themeColor: "#523c21",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Raiz de Santo | Roupas de Santo Sob Medida em São Paulo",
    template: "%s | Raiz de Santo",
  },
  description: "Roupas de Umbanda e Candomblé sob medida em São Paulo. Modelagem exclusiva, tecidos nobres (percal, lese, linho) e acabamento artesanal durável. Mão de obra a partir de R$150. Atendimento presencial e envio para todo o Brasil.",
  keywords: [
    "roupa de santo",
    "roupas de umbanda sob medida",
    "roupas de candomble sob medida",
    "atelier de roupas de santo sao paulo",
    "saia de baiana sob medida",
    "roupa de racao umbanda",
    "pano da costa candomble",
    "camisu lese",
    "kit obrigacao candomble",
    "costura afro religiosa sp"
  ],
  authors: [{ name: "Raiz de Santo", url: BASE_URL }],
  creator: "Raiz de Santo",
  publisher: "Raiz de Santo",
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/icon.svg",
  },
  verification: {
    google: "googleb370d7549e62df93",
  },
  openGraph: {
    title: "Raiz de Santo | Roupas de Santo Sob Medida em São Paulo",
    description: "Roupas de Umbanda e Candomblé sob medida em São Paulo. Modelagem exclusiva, tecidos premium e acabamento artesanal. Atendimento presencial e envio para todo o Brasil.",
    url: BASE_URL,
    siteName: "Raiz de Santo",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "Raiz de Santo - Atelier Afro-Religioso",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raiz de Santo | Roupas de Santo Sob Medida",
    description: "Roupas de Umbanda e Candomblé sob medida em São Paulo. Modelagem exclusiva, tecidos nobres e respeito ao fundamento.",
    images: [LOGO_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = 2026;

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-secondary/30 pt-16 md:pt-20 overflow-x-hidden`}>
        <Navbar />
        <GoogleAnalytics gaId="G-M0P4QCM8JW" />

        <main className="overflow-x-hidden">{children}</main>

        {/* Footer */}
        <footer className="py-16 md:py-20 px-6 bg-white border-t border-brand-accent/30 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            
            {/* Brand column with Clickable Logo */}
            <div className="space-y-6">
              <Link 
                href="/" 
                className="flex items-center gap-3 group w-fit"
                aria-label="Raiz de Santo - Início"
              >
                <Image 
                  src={LOGO_URL} 
                  alt="Logo Raiz de Santo" 
                  width={48} 
                  height={48} 
                  priority
                  referrerPolicy="no-referrer"
                  className="h-12 w-12 rounded-full border border-brand-primary/15 group-hover:scale-105 transition-transform" 
                />
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-primary group-hover:text-brand-secondary transition-colors">
                  Raiz de Santo
                </span>
              </Link>
              
              <p className="text-brand-ink/75 max-w-sm leading-relaxed text-sm font-light">
                Atelier especializado em <span className="font-medium text-brand-primary">roupas de santo sob medida</span> na capital paulista. Costuramos para Umbanda e Candomblé com respeito aos preceitos da sua casa e amor à tradição.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://www.instagram.com/raizdesanto" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram da Raiz de Santo" 
                  className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center hover:bg-brand-primary hover:text-white text-brand-primary transition-all duration-300 border border-brand-accent/40 shadow-sm"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="WhatsApp da Raiz de Santo" 
                  className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center hover:bg-[#25D366] hover:text-white text-brand-primary transition-all duration-300 border border-brand-accent/40 shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a 
                  href={phoneHref} 
                  aria-label="Ligar para Raiz de Santo" 
                  className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center hover:bg-brand-primary hover:text-white text-brand-primary transition-all duration-300 border border-brand-accent/40 shadow-sm"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Navegação Rápida */}
            <div>
              <h3 className="font-bold text-[11px] uppercase tracking-[0.25em] text-brand-primary opacity-70 mb-6">
                Coleções & Serviços
              </h3>
              <ul className="space-y-3.5 text-sm font-medium">
                <li>
                  <Link href="/roupas-umbanda" className="text-brand-ink/80 hover:text-brand-secondary transition-colors inline-block py-1">
                    Roupas para Umbanda
                  </Link>
                </li>
                <li>
                  <Link href="/roupas-candomble" className="text-brand-ink/80 hover:text-brand-secondary transition-colors inline-block py-1">
                    Roupas para Candomblé
                  </Link>
                </li>
                <li>
                  <Link href="/costura-sob-medida" className="text-brand-ink/80 hover:text-brand-secondary transition-colors inline-block py-1">
                    Alta Costura Sob Medida
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="text-brand-ink/80 hover:text-brand-secondary transition-colors inline-block py-1">
                    Quem Somos (Nossa História)
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-brand-ink/80 hover:text-brand-secondary transition-colors inline-block py-1">
                    Blog de Dicas & Axé
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-brand-ink/80 hover:text-brand-secondary transition-colors inline-block py-1">
                    Pedir Orçamento Gratuito
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contato Direto e Telefones Clicáveis */}
            <div>
              <h3 className="font-bold text-[11px] uppercase tracking-[0.25em] text-brand-primary opacity-70 mb-6">
                Fale Diretamente
              </h3>
              <ul className="space-y-4 text-sm font-light text-brand-ink/80">
                <li>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/50 mb-1">WhatsApp & Ligações</p>
                  <a 
                    href={phoneHref} 
                    className="font-bold text-brand-primary hover:text-brand-secondary transition-colors inline-flex items-center gap-2 text-base"
                  >
                    <Phone className="w-4 h-4 text-brand-secondary" />
                    (11) 96903-5273
                  </a>
                </li>
                <li>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/50 mb-1">Orçamento Rápido</p>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    Conversar no WhatsApp
                  </a>
                </li>
                <li>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/50 mb-1">Horário de Atendimento</p>
                  <div className="flex items-center gap-2 text-xs text-brand-ink/70">
                    <Clock className="w-3.5 h-3.5 text-brand-secondary" />
                    Segunda a Sábado: 09h às 18h
                  </div>
                </li>
              </ul>
            </div>

            {/* Ateliê e Entrega */}
            <div>
              <h3 className="font-bold text-[11px] uppercase tracking-[0.25em] text-brand-primary opacity-70 mb-6">
                Atelier & Envio
              </h3>
              <div className="p-5 rounded-2xl bg-brand-bg border border-brand-accent/30 space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-primary mt-1 shrink-0" />
                  <p className="text-xs text-brand-ink/80 leading-relaxed">
                    <strong className="font-semibold text-brand-primary block">São Paulo — Capital</strong>
                    Atendimento presencial no atelier com hora marcada para medição e prova de tecidos.
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-accent/20">
                  <p className="text-[11px] font-medium text-brand-primary flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
                    Envio para todo o Brasil via Correios e Transportadora com rastreio.
                  </p>
                </div>
              </div>
            </div>

          </div>
          
          {/* Copyright line */}
          <div className="max-w-7xl mx-auto pt-8 border-t border-brand-accent/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-brand-ink/60 text-center sm:text-left">
            <p>© {currentYear} Raiz de Santo. Alta Costura Afro-Religiosa Sob Medida em São Paulo. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4 text-[11px]">
              <Link href="/sobre" className="hover:text-brand-primary transition-colors">Sobre Nós</Link>
              <span>•</span>
              <Link href="/contato" className="hover:text-brand-primary transition-colors">Contato</Link>
              <span>•</span>
              <Link href="/blog" className="hover:text-brand-primary transition-colors">Blog</Link>
            </div>
          </div>
        </footer>

        {/* Sticky Floating WhatsApp Button - Optimized for Mobile & Desktop */}
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
           <a 
             href={whatsappUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative border-2 border-white/30"
             aria-label="Falar com a Raiz de Santo no WhatsApp"
           >
             <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
             <span className="hidden sm:inline-block absolute right-full mr-3 bg-white text-brand-primary text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-accent/30">
                Orçamento no WhatsApp
             </span>
           </a>
        </div>
      </body>
    </html>
  );
}
