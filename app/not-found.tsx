import Link from "next/link";
import { Sparkles, Compass, Home, MessageCircle, ChevronRight, Scissors } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Não Encontrada | 404 — Raiz de Santo",
  description: "A página procurada não foi encontrada ou mudou de caminho. Volte para a página inicial da Raiz de Santo e conheça nossas roupas de santo sob medida.",
};

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Estava navegando no site da Raiz de Santo e gostaria de informações sobre roupas sob medida.";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20 bg-brand-bg relative overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full mx-auto text-center relative z-10">
        <div className="w-24 h-24 mx-auto mb-8 rounded-[2rem] bg-white border border-brand-accent/30 shadow-xl flex items-center justify-center relative">
          <Compass className="w-12 h-12 text-brand-secondary" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-brand-primary text-brand-secondary flex items-center justify-center shadow-md">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/15 text-brand-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">
          Erro 404 • Ponto Desconhecido
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-primary font-bold mb-6 leading-tight">
          Caminho não encontrado <br />
          <span className="italic text-brand-secondary">no terreiro</span>
        </h1>

        <p className="text-brand-ink/75 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto mb-10">
          Parece que esta página tomou outro rumo ou mudou de lugar. Mas não se preocupe: o axé continua firme e todos os nossos caminhos continuam abertos para você.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase hover:scale-105 transition-all shadow-xl"
          >
            <Home className="w-4 h-4" />
            Voltar para o Início
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-secondary text-brand-primary px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-brand-secondary/90 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </div>

        {/* Quick links to core sections */}
        <div className="pt-8 border-t border-brand-accent/20">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-ink/50 mb-6">
            Navegue pelas nossas confecções
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/roupas-umbanda"
              className="px-4 py-2 rounded-full bg-white border border-brand-accent/30 text-xs font-medium text-brand-primary hover:bg-brand-primary hover:text-white transition-colors shadow-sm"
            >
              Roupas de Umbanda
            </Link>
            <Link
              href="/roupas-candomble"
              className="px-4 py-2 rounded-full bg-white border border-brand-accent/30 text-xs font-medium text-brand-primary hover:bg-brand-primary hover:text-white transition-colors shadow-sm"
            >
              Roupas de Candomblé
            </Link>
            <Link
              href="/costura-sob-medida"
              className="px-4 py-2 rounded-full bg-white border border-brand-accent/30 text-xs font-medium text-brand-primary hover:bg-brand-primary hover:text-white transition-colors shadow-sm"
            >
              Costura Sob Medida
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full bg-white border border-brand-accent/30 text-xs font-medium text-brand-primary hover:bg-brand-primary hover:text-white transition-colors shadow-sm"
            >
              Dicas de Axé (Blog)
            </Link>
            <Link
              href="/contato"
              className="px-4 py-2 rounded-full bg-white border border-brand-accent/30 text-xs font-medium text-brand-primary hover:bg-brand-primary hover:text-white transition-colors shadow-sm"
            >
              Pedir Orçamento
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
