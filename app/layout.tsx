import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Next.js version of Link
import { 
  MessageCircle, 
  Instagram, 
  Facebook 
} from 'lucide-react';

import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Raiz de Santo | Roupas de Santo Sob Medida em São Paulo",
  description: "Confecção artesanal de roupas de santo sob medida para Umbanda e Candomblé em São Paulo. Respeito à tradição e acabamento premium.",
};

const LOGO_URL = "https://i.ibb.co/5xFmZ0MS/An-ncio-do-Instagram-para-Nova-Cole-o-com-Desconto-Rosa-e-Branco.png";
const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-secondary/30 pt-20 md:pt-24`}>
        <Navbar />

        <main>{children}</main>

        {/* Footer */}
        <footer className="py-20 md:py-24 px-6 bg-white border-t border-brand-accent/30">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 md:gap-20 mb-16 md:mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-10">
                <img 
                  src={LOGO_URL} 
                  alt="Raiz de Santo" 
                  width="48" 
                  height="48" 
                  loading="lazy"
                  className="h-12 w-12 rounded-full border border-brand-primary/5" 
                />
                <span className="font-serif text-3xl font-bold tracking-tight text-brand-primary">Raiz de Santo</span>
              </div>
              <p className="text-brand-ink/70 max-w-sm leading-relaxed text-base font-light">
                Tornando-se referência em <span className="font-medium text-brand-primary">roupas de santo sob medida</span> através do respeito à tradição e ao cliente. Confeccionando fé em cada detalhe.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] opacity-50 mb-10">Navegação</h3>
              <ul className="space-y-6 text-sm font-medium">
                <li><Link href="/roupas-umbanda" className="hover:text-brand-secondary transition-colors underline-offset-8">Roupas para Umbanda</Link></li>
                <li><Link href="/roupas-candomble" className="hover:text-brand-secondary transition-colors underline-offset-8">Roupas para Candomblé</Link></li>
                <li><Link href="/costura-sob-medida" className="hover:text-brand-secondary transition-colors underline-offset-8">Alta Costura Religiosa</Link></li>
                <li><Link href="/blog" className="hover:text-brand-secondary transition-colors underline-offset-8">Dicas de Axé (Blog)</Link></li>
                <li><Link href="/contato" className="hover:text-brand-secondary transition-colors underline-offset-8">Falar com Especialista</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] opacity-50 mb-10">Presença Social</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/raizdesanto" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-500 hover:rotate-6 border border-brand-accent/40 shadow-sm"><Instagram className="w-6 h-6" /></a>
                <a href="https://www.instagram.com/raizdesanto" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-500 hover:-rotate-6 border border-brand-accent/40 shadow-sm"><Facebook className="w-6 h-6" /></a>
              </div>
              <div className="mt-10 pt-10 border-t border-brand-accent/20">
                 <p className="text-xs text-brand-ink/70 font-medium font-sans">Atendimento Humanizado em São Paulo <br/> Envio Seguro para todo o Brasil.</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto pt-12 border-t border-brand-accent/20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] opacity-50 text-center">
            <p>© 2026 Raiz de Santo. São Paulo | Brasil</p>
          </div>
        </footer>

        {/* Sticky Floating WhatsApp */}
        <div className="fixed bottom-6 right-6 z-50">
           <a 
             href={whatsappUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
             aria-label="Falar no WhatsApp"
           >
             <MessageCircle className="w-6 h-6" />
             <span className="absolute right-full mr-4 bg-white text-brand-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-accent/30">
                Orçamento Rápido
             </span>
           </a>
        </div>
      </body>
    </html>
  );
}
