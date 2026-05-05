"use client";

import { MessageCircle, Check, Scissors } from 'lucide-react';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de Umbanda.";

export default function Umbanda() {
  return (
    <>
      <header className="pt-40 pb-20 px-6 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-7xl mb-8 text-brand-primary leading-tight">
            Roupas de <span className="italic text-brand-secondary">Umbanda</span> <br /> Sob Medida
          </h1>
          <p className="text-lg md:text-xl text-brand-ink/70 max-w-2xl mx-auto leading-relaxed">
            Confeccionamos trajes que aliam a pureza do branco ao mistério das cores das entidades. Respeito ao fundamento da sua casa.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-primary">Fé, Conforto e <span className="italic">Axé</span></h2>
              <p className="text-brand-ink/70 mb-8 leading-relaxed">
                Na Umbanda, a vestimenta é parte do trabalho espiritual. Por isso, usamos tecidos leves e respiráveis, ideais para longas sessões de trabalho e incorporação.
              </p>
              <ul className="space-y-4">
                {[
                  "Roupas de Ração em Percal ou Algodão",
                  "Saias com mais de 5 metros de roda",
                  "Calças e Abadás com corte tradicional",
                  "Roupas coloridas para Linha de Esquerda",
                  "Trajes para Caboclos, Pretos Velhos e Marinheiros"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-sm font-medium text-brand-ink/80">
                    <Check className="w-5 h-5 text-brand-secondary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-bg rounded-[3rem] p-8 border border-brand-accent flex flex-col items-center justify-center text-center">
              <Scissors className="w-12 h-12 text-brand-secondary mb-6" />
              <h3 className="font-serif text-2xl text-brand-primary mb-4">Costuramos o seu sonho</h3>
              <p className="text-sm text-brand-ink/60 mb-8">Tem um tecido especial ou um desenho específico pedido pela entidade? Nós realizamos.</p>
              <a href={whatsappUrl} className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">Orçar Agora</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-bg text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl mb-10 text-brand-primary">Onde comprar roupas de Umbanda em SP?</h2>
          <p className="text-lg text-brand-ink/70 mb-12">
            Localizados em São Paulo, atendemos presencialmente para medição e prova. Se estiver em outro estado, enviamos guias de medição simples para garantir o ajuste perfeito.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-2 bg-white border border-brand-accent rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary/60">Atendimento Humanizado</span>
            <span className="px-6 py-2 bg-white border border-brand-accent rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary/60">Envio para todo Brasil</span>
            <span className="px-6 py-2 bg-white border border-brand-accent rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary/60">Preço Direto da Costureira</span>
          </div>
        </div>
      </section>
    </>
  );
}
