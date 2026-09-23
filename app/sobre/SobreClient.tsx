"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  MessageCircle, 
  ChevronRight,
  Phone,
  Scissors,
  CheckCircle2
} from "lucide-react";

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";
const phoneHref = "tel:+5511969035273";

export default function SobreClient() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative pt-8 md:pt-14 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/15 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Nossa Essência e Tradição
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl mb-6 text-brand-primary leading-tight font-bold">
              A Raiz de Santo Nasceu de <br />
              <span className="italic text-brand-secondary">Dentro da Fé</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-ink/75 leading-relaxed font-light mx-auto max-w-2xl mb-8">
              Não somos uma confecção industrial em série. Somos praticantes que se cansaram de ver roupas de santo de baixa qualidade no mercado e decidiram criar peças dignas com as próprias mãos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5 text-brand-secondary" />
                Conversar com a Costureira
              </a>
              <a 
                href={phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-brand-accent/40 text-brand-primary font-bold text-sm hover:bg-brand-bg transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-secondary" />
                (11) 96903-5273
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Seção 1 — A história */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="w-12 h-1 bg-brand-secondary rounded-full" />
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-primary font-bold">Como tudo começou</h2>
          <div className="space-y-4 sm:space-y-6 text-brand-ink/75 text-base sm:text-lg leading-relaxed font-light">
            <p>A Raiz de Santo nasceu de uma necessidade real, sentida e vivida no chão do terreiro.</p>
            <p>
              Durante anos, buscamos roupas de santo que servissem com conforto real — que respeitassem o corpo, resistissem a muitos rituais e tivessem o acabamento que a divindade merece. O que encontrávamos eram sempre modelos industriais de tamanho padrão, tecidos sintéticos que esquentam e costuras frágeis que não aguentavam três lavagens.
            </p>
            <p>
              A solução foi costurar com dedicação própria. Unindo décadas de experiência em alfaiataria fina com a vivência religiosa de quem entende o valor de um camisu, de um alaká ou de uma saia rodada, criamos um atelier dedicado exclusivamente ao sagrado.
            </p>
            <p className="font-medium text-brand-primary italic">
              Hoje vestimos filhos e filhas de santo de norte a sul do Brasil, com pontualidade rigorosa e amor em cada pesponto.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2 — Valores */}
      <section className="py-20 px-4 sm:px-6 bg-brand-bg/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
              Nossos Fundamentos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold">
              Os princípios que guiam nossas agulhas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Respeito ao Axé", desc: "Cada peça é tratada com zelo litúrgico. Entendemos a energia sagrada de cada elemento." },
              { icon: Scissors, title: "Corte Anatômico", desc: "Modelagem sob medida sem adaptações apressadas. Conforto total para incorporar e dançar." },
              { icon: ShieldCheck, title: "Costura Reforçada", desc: "Acabamento intertravado em pontos de tensão para durar anos de giras e lavagens." },
              { icon: Sparkles, title: "Preço Justo", desc: "Mão de obra transparente a partir de R$150 para que todos possam vestir roupas dignas." }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mb-6 text-brand-primary border border-brand-accent/20">
                    <val.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-primary mb-2">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3 — Por que o atelier */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-primary font-bold mb-3">
              Por que escolher nosso atelier?
            </h2>
            <p className="text-xs uppercase tracking-widest text-brand-ink/50 font-bold">Diferença clara em cada detalhe</p>
          </div>

          <div className="grid gap-4">
            {[
              "Personalização absoluta do fundamento à modelagem.",
              "Ajuste perfeito para qualquer tipo de corpo, sem aperto ou sobras.",
              "Escolha livre de tecidos — percal, linho, lese — ou use seu próprio tecido.",
              "Conversa direta com a costureira que confecciona sua peça.",
              "Garantia de pontualidade na entrega da sua obrigação ou festividade."
            ].map((diff, i) => (
              <div key={i} className="flex gap-4 items-center p-5 bg-brand-bg/50 rounded-2xl border border-brand-accent/30">
                 <div className="w-8 h-8 rounded-xl bg-brand-secondary/20 flex items-center justify-center shrink-0 text-brand-primary">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
                 </div>
                 <p className="text-brand-ink/80 text-sm sm:text-base font-medium">{diff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final Section */}
      <section className="py-20 px-4 sm:px-6 bg-brand-primary text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Quer conhecer nosso <span className="italic text-brand-secondary">trabalho de perto?</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Agende uma visita ao atelier em São Paulo ou converse conosco pelo WhatsApp. O atendimento é acolhedor, transparente e sem compromisso.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-secondary text-brand-primary px-8 py-4 rounded-full text-sm sm:text-base font-bold hover:scale-105 transition-all shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <Link 
              href="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-bold text-sm sm:text-base hover:bg-white/10 transition-colors"
            >
              Enviar Mensagem
            </Link>
          </div>
          
          <div className="pt-8 border-t border-white/20 flex flex-wrap gap-4 justify-center text-xs font-semibold">
             <Link href="/roupas-umbanda" className="text-white/80 hover:text-brand-secondary inline-flex items-center gap-1">
                Roupas de Umbanda <ChevronRight className="w-3.5 h-3.5" />
             </Link>
             <span>•</span>
             <Link href="/roupas-candomble" className="text-white/80 hover:text-brand-secondary inline-flex items-center gap-1">
                Roupas de Candomblé <ChevronRight className="w-3.5 h-3.5" />
             </Link>
             <span>•</span>
             <Link href="/costura-sob-medida" className="text-white/80 hover:text-brand-secondary inline-flex items-center gap-1">
                Costura Sob Medida <ChevronRight className="w-3.5 h-3.5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
