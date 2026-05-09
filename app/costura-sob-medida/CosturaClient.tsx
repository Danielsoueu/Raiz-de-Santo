"use client";

import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Check, 
  Scissors, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Quote,
  MapPin,
  Clock,
  Heart,
  MousePointer2
} from 'lucide-react';
import Link from 'next/link';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para costura sob medida.";

export default function CosturaClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="pt-32 md:pt-48 pb-20 px-6 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-3xl md:text-7xl mb-8 text-brand-primary leading-tight">
              Roupa de Santo Sob Medida — <br className="hidden md:block" />
              <span className="italic text-brand-secondary">Porque Fé Não Cabe em P, M ou G</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-ink/70 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
              Criamos o molde do zero para o seu corpo. Cada corte, cada costura e cada tecido escolhido com atenção ao que você precisa — e ao que o seu Orixá ou entidade merece.
            </p>
            <a 
              href={whatsappUrl}
              className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:scale-105 transition-all shadow-xl shadow-brand-primary/20"
            >
              <MousePointer2 className="w-5 h-5" />
              Quero agendar minha medição
            </a>
          </motion.div>
        </div>
        <Scissors className="absolute -top-10 -left-10 w-64 h-64 opacity-5 text-brand-primary rotate-12" />
      </header>

      {/* Seção 1 — Texto principal (SEO + apresentação) */}
      <section className="py-24 px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-brand-primary">O problema com as roupas de santo prontas — e como a gente resolve.</h2>
          <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed font-light">
            <p>
              Quem pratica Umbanda ou Candomblé sabe a dificuldade: entrar em uma loja de artigos religiosos, pegar uma roupa de ração no cabide e torcer para que o "M" ou o "G" sirva. Às vezes aperta na cintura. Às vezes a saia não tem roda suficiente. Às vezes o tecido é tão fino que não dura nem três lavagens.
            </p>
            <p>
              Roupa de santo não é roupa qualquer. Ela precisa respeitar o corpo de quem vai usá-la, aguentar rituais intensos, sobreviver a muitas lavagens e ainda chegar ao pé do santo com dignidade. Isso não acontece com tamanho padrão.
            </p>
            <p>
              Na <span className="font-bold text-brand-primary">Raiz de Santo</span>, toda peça começa do zero. Criamos o molde para o seu corpo, escolhemos o tecido certo para o seu uso e costuramos com o tempo e o cuidado que cada ponto exige. Não fazemos <span className="italic">fast fashion</span> religioso. Fazemos roupa de santo de verdade — sob medida, com mão de obra a partir de <span className="font-bold">R$150</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2 — Como funciona o processo */}
      <section className="py-24 px-6 bg-brand-bg/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-4">Como funciona o processo</h2>
            <p className="text-brand-ink/60 uppercase tracking-[0.2em] text-[10px] font-bold">Do primeiro contato à entrega: simples, claro e sem surpresa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Conversa de Axé", desc: "Entendemos o tipo de peça, a nação, o fundamento e o tecido que você deseja." },
              { step: "2", title: "Medição Precisa", desc: "No atelier (SP) ou guia em vídeo com as 5 medidas principais para ajuste perfeito." },
              { step: "3", title: "Escolha do Tecido", desc: "Percal, lese, linho ou o que você trouxer. Sem taxas extras por material próprio." },
              { step: "4", title: "Costura com Cuidado", desc: "Máquinas profissionais e reforço manual em pontos de tensão como cinturas e barras." },
              { step: "5", title: "Entrega ou Envio", desc: "Retirada em SP ou envio nacional seguro, embalado para proteger o axé." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-brand-accent/30 relative">
                <span className="absolute top-6 right-8 text-4xl font-serif italic text-brand-accent/40">{item.step}</span>
                <h3 className="font-bold text-xl text-brand-primary mb-4 pr-10">{item.title}</h3>
                <p className="text-sm text-brand-ink/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3 — Diferenciais */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">O que torna a costura da <br /><span className="italic text-brand-secondary">Raiz de Santo</span> diferente</h2>
               <div className="space-y-8">
                  {[
                    { title: "Modelagem Exclusiva", desc: "O molde começa do zero para suas medidas. Sem apertos, sem sobra de tecido e sem adaptações de moldes prontos.", icon: Scissors },
                    { title: "Costuras para Durar", desc: "Acabamento intertravado e reforço manual nos pontos de maior tensão. Feito para anos de rituais e lavagens.", icon: ShieldCheck },
                    { title: "Tempo do Axé", desc: "Sem pressa e sem atalho. Cada peça recebe atenção individual e o prazo combinado é real.", icon: Clock },
                    { title: "Curadoria de Tecidos", desc: "Percal de alta gramatura, lese legítimo e linho encorpado. Qualidade que o seu Orixá merece.", icon: Sparkles },
                  ].map((feat, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex gap-6 items-start p-6 rounded-3xl hover:bg-brand-bg/40 transition-all"
                    >
                      <div className="bg-brand-primary p-3 rounded-2xl shadow-lg">
                         <feat.icon className="w-6 h-6 text-brand-secondary" />
                      </div>
                      <div>
                         <h3 className="font-bold text-xl mb-2 text-brand-primary">{feat.title}</h3>
                         <p className="text-brand-ink/70 text-sm leading-relaxed">{feat.desc}</p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="aspect-[4/5] bg-brand-bg rounded-[4rem] relative overflow-hidden shadow-2xl flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-brand-primary opacity-5" />
                  <div className="bg-white p-12 rounded-[3rem] shadow-2xl relative z-10 text-center max-w-xs border border-brand-accent/20">
                     <p className="font-serif text-3xl text-brand-primary mb-6 italic italic">"A fé não cabe em padrões industriais."</p>
                     <div className="h-0.5 w-12 bg-brand-secondary mx-auto mb-6" />
                     <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">— Alinhado ao seu Corpo</p>
                  </div>
                  <Sparkles className="absolute bottom-12 right-12 w-24 h-24 text-brand-secondary/20" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 — Para quem é */}
      <section className="py-24 px-6 bg-brand-bg/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            <div className="flex-1 order-2 lg:order-1">
               <div className="grid gap-6">
                  {[
                    "Médiuns e filhos de santo de qualquer nação ou linha",
                    "Mães e pais de santo que querem vestir a sua casa com dignidade",
                    "Pessoas com corpos que as roupas prontas nunca servem bem",
                    "Quem tem um pedido específico da entidade ou do Babalorixá",
                    "Terreiros que precisam de uniformes ou kits completos"
                  ].map((text, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-accent/20 flex items-center gap-4 transition-transform hover:translate-x-2">
                       <Check className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                       <span className="text-brand-ink/80 font-medium">{text}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="flex-1 order-1 lg:order-2 space-y-8">
              <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">Para quem é <br /><span className="italic text-brand-secondary">este serviço?</span></h2>
              <p className="text-lg text-brand-ink/70 leading-relaxed font-light">
                Não importa se você está pedindo sua primeira roupa de ração ou o traje mais importante da sua vida religiosa. Estamos prontos para trabalhar com todos os corpos e todas as medidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 — Atendimento */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-4 italic">Atendimento presencial e à distância</h2>
            <p className="text-brand-ink/60 uppercase tracking-[0.2em] text-[10px] font-bold">Em São Paulo ou em qualquer estado do Brasil</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-brand-primary p-12 rounded-[4rem] text-white shadow-xl relative overflow-hidden">
               <MapPin className="w-12 h-12 text-brand-secondary mb-8" />
               <h3 className="font-serif text-3xl mb-4">Atelier em São Paulo — Capital</h3>
               <p className="text-white/80 mb-10 leading-relaxed">Venha até nós. Agende um horário, conheça os tecidos na mão, tome um café e tire suas medidas com a nossa costureira. Um atendimento sem pressa e humanizado.</p>
               <a href={whatsappUrl} className="inline-flex items-center gap-2 bg-brand-secondary text-brand-primary font-bold px-8 py-4 rounded-full hover:bg-white transition-all">
                 Pedir endereço <ChevronRight className="w-4 h-4" />
               </a>
            </div>
            <div className="bg-brand-bg p-12 rounded-[4rem] text-brand-primary border border-brand-accent shadow-sm relative overflow-hidden">
               <Zap className="w-12 h-12 text-brand-secondary mb-8" />
               <h3 className="font-serif text-3xl mb-4">Atendimento à Distância</h3>
               <p className="text-brand-ink/70 mb-10 leading-relaxed">Já vestimos filhos de santo em todo o Brasil. Enviamos um guia em vídeo ensinando como tirar as 5 medidas principais com fita métrica. A distância não muda o cuidado.</p>
               <a href={whatsappUrl} className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-all shadow-lg">
                 Quero orçar online <ChevronRight className="w-4 h-4" />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6 — Preços */}
      <section className="py-24 px-6 bg-brand-bg border-y border-brand-accent/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
           <div className="flex-1 space-y-8">
              <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">Preço justo e <br /><span className="italic text-brand-secondary">transparente</span></h2>
              <p className="text-lg text-brand-ink/70 leading-relaxed font-light">
                Sabemos que o orçamento de quem vive a religião no dia a dia é real. Por isso, trabalhamos com transparência total desde o início: você sabe exatamente o que está pagando.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-white rounded-3xl border border-brand-accent/20">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/50 mb-2">Mão de Obra</p>
                    <p className="font-serif text-2xl text-brand-primary">De R$150</p>
                 </div>
                 <div className="p-6 bg-white rounded-3xl border border-brand-accent/20">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/50 mb-2">Sem Taxa Extra</p>
                    <p className="font-serif text-lg text-brand-primary leading-tight">Pode trazer seu tecido</p>
                 </div>
              </div>
           </div>
           <div className="flex-1 bg-white p-12 rounded-[4rem] shadow-2xl border border-brand-accent/20 text-center">
              <Quote className="w-12 h-12 text-brand-secondary mx-auto mb-10 opacity-30" />
              <h3 className="font-serif text-3xl md:text-4xl italic text-brand-primary leading-tight mb-8">
                "Feito para o seu corpo. Costurado para o seu axé. Entregue com o respeito que a sua fé merece."
              </h3>
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-brand-ink/40">— Raiz de Santo</p>
           </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-serif text-3xl md:text-6xl text-brand-primary leading-tight">
             Pronto para ter uma roupa de santo <br /><span className="italic text-brand-secondary">que realmente serve?</span>
          </h2>
          <p className="text-lg text-brand-ink/70 max-w-2xl mx-auto font-light">
            Conta pra gente o que você precisa — a peça, o prazo, o tecido que tem em mente. A conversa é gratuita e sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={whatsappUrl}
              className="bg-brand-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Agendar minha medição pelo WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center items-center pt-8 border-t border-brand-accent/30">
             <Link href="/roupas-umbanda" className="text-brand-ink/60 hover:text-brand-primary font-medium flex items-center gap-2">Ver roupas de Umbanda <ChevronRight className="w-4 h-4" /></Link>
             <Link href="/roupas-candomble" className="text-brand-ink/60 hover:text-brand-primary font-medium flex items-center gap-2">Ver roupas de Candomblé <ChevronRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
