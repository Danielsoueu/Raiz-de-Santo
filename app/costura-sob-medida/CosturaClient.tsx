"use client";

import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Check, 
  Scissors, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Quote,
  MapPin, 
  Clock, 
  Phone,
  Video
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';
import { trackWhatsAppClick } from '../../lib/analytics';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de agendar uma medição ou orçamento para costura sob medida de roupas de santo.";
const phoneHref = "tel:+5511969035273";

export default function CosturaClient() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans overflow-x-hidden">
      <Breadcrumbs items={[{ label: "Costura Sob Medida" }]} />

      {/* Hero Section */}
      <header className="pt-8 md:pt-14 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/15 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Modelagem Exclusiva • Feita do Zero
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-brand-primary leading-tight font-bold">
              Roupa de Santo Sob Medida — <br className="hidden sm:block" />
              <span className="italic text-brand-secondary">Porque Fé Não Cabe em P, M ou G</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-ink/75 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
              Desenhamos o molde do zero para as proporções do seu corpo. Cada corte, costura e acabamento pensado para o seu conforto na gira e com o respeito que o sagrado merece.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5 text-brand-secondary" />
                Agendar Medição no WhatsApp
              </a>
              <a 
                href={phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-brand-accent/40 text-brand-primary font-bold text-sm hover:bg-brand-bg transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-secondary" />
                Ligar: (11) 96903-5273
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Seção 1 — Texto explicativo */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
              Problema Real x Solução Sob Medida
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-primary font-bold">
              O problema das roupas industriais de prateleira
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6 text-brand-ink/75 text-base sm:text-lg leading-relaxed font-light">
            <p>
              Quem é de Umbanda ou Candomblé conhece bem o desafio: entrar em uma loja de artigos religiosos, escolher uma peça no cabide e torcer para servir direito. Geralmente o elástico aperta demais, a manga limita o movimento dos braços ou o tecido fino rasga após poucas lavagens.
            </p>
            <p>
              Roupa de santo não pode ser descartável. Ela precisa acompanhar o corpo com leveza, permitir movimentos amplos durante a incorporação e suportar anos de giras e lavagens sem desbotar ou descosturar.
            </p>
            <p className="font-medium text-brand-primary italic">
              Na Raiz de Santo, criamos peças sob medida a partir de R$150 de mão de obra. Sem estoque parado, sem formatos genéricos e com atenção a cada detalhe solicitado pela sua casa.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2 — Como funciona o processo */}
      <section className="py-20 px-4 sm:px-6 bg-brand-bg/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
              Metodologia Transparente
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold mb-3">
              Como funciona nossa confecção
            </h2>
            <p className="text-brand-ink/60 uppercase tracking-widest text-xs font-bold">
              Do primeiro contato à entrega: simples, claro e pontual
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Conversa Inicial", desc: "Entendemos a tradição da sua casa, o modelo desejado e o tecido de preferência." },
              { step: "2", title: "Medição Precisa", desc: "No atelier presencial em SP ou com nosso guia em vídeo descomplicado." },
              { step: "3", title: "Escolha do Tecido", desc: "Percal, lese ou linho do nosso catálogo, ou costuramos com o tecido que você trouxer." },
              { step: "4", title: "Costura com Axé", desc: "Corte artesanal, costuras duplas e reforço manual em áreas de maior tração." },
              { step: "5", title: "Entrega com Rastreio", desc: "Retirada em São Paulo ou despacho pelos Correios para todo o território nacional." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-7 rounded-[2.5rem] border border-brand-accent/30 relative flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-3xl font-serif italic text-brand-secondary/40 font-bold block mb-3">{item.step}</span>
                  <h3 className="font-serif font-bold text-lg text-brand-primary mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3 — Diferenciais */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
                   Acabamento Superior
                 </span>
                 <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold leading-tight">
                   O que torna a nossa costura diferente
                 </h2>
               </div>

               <div className="space-y-6">
                  {[
                    { title: "Modelagem Exclusiva", desc: "O molde começa do zero para as suas curvas e altura. Sem peças apertadas e sem excesso de tecido embaraçando.", icon: Scissors },
                    { title: "Costuras para Durar", desc: "Acabamento intertravado e reforço nos pontos críticos. Peças feitas para resistir a anos de rituais e lavagens regulares.", icon: ShieldCheck },
                    { title: "Pontualidade Sagrada", desc: "Respeitamos integralmente o prazo da sua cerimônia ou saída de santo. O que combinamos é rigorosamente cumprido.", icon: Clock },
                    { title: "Curadoria de Tecidos", desc: "Percal 200/300 fios, lese legítimo de algodão e linho puro. Conforto térmico comprovado no barracão.", icon: Sparkles },
                  ].map((feat, i) => (
                    <div 
                      key={i}
                      className="flex gap-4 sm:gap-6 items-start p-5 rounded-2xl bg-brand-bg/40 border border-brand-accent/20"
                    >
                      <div className="bg-brand-primary p-3 rounded-2xl shadow-sm shrink-0 text-brand-secondary">
                         <feat.icon className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="font-bold text-base sm:text-lg mb-1 text-brand-primary">{feat.title}</h3>
                         <p className="text-brand-ink/70 text-xs sm:text-sm leading-relaxed font-light">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="flex justify-center">
               <div className="w-full max-w-md aspect-square bg-brand-bg rounded-[3.5rem] border border-brand-accent/40 p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-lg relative">
                  <p className="font-serif text-2xl sm:text-3xl text-brand-primary mb-4 italic font-bold">
                    &quot;A fé não cabe em moldes padronizados de loja.&quot;
                  </p>
                  <div className="h-0.5 w-12 bg-brand-secondary mx-auto mb-4" />
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-ink/50">
                    Alinhado ao seu Corpo e ao seu Axé
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 — Atendimento */}
      <section className="py-20 px-4 sm:px-6 bg-brand-bg/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold mb-3">
              Atendimento presencial e à distância
            </h2>
            <p className="text-brand-ink/60 uppercase tracking-widest text-xs font-bold">
              Na capital paulista ou com entrega para todo o Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-brand-primary p-8 sm:p-10 rounded-[3rem] text-white shadow-xl flex flex-col justify-between">
               <div>
                 <MapPin className="w-10 h-10 text-brand-secondary mb-6" />
                 <h3 className="font-serif text-2xl font-bold mb-3">Atelier em São Paulo</h3>
                 <p className="text-white/80 text-xs sm:text-sm mb-8 leading-relaxed font-light">
                   Venha nos visitar com horário marcado. Toque nos tecidos, conheça as amostras e tire suas medidas com a nossa costureira em um ambiente acolhedor.
                 </p>
               </div>
               <a 
                 href={whatsappUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-brand-secondary text-brand-primary font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider hover:bg-white transition-all w-fit"
               >
                 Agendar no WhatsApp <ChevronRight className="w-4 h-4" />
               </a>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-[3rem] text-brand-primary border border-brand-accent/40 shadow-sm flex flex-col justify-between">
               <div>
                 <Video className="w-10 h-10 text-brand-secondary mb-6" />
                 <h3 className="font-serif text-2xl font-bold mb-3">Atendimento à Distância</h3>
                 <p className="text-brand-ink/70 text-xs sm:text-sm mb-8 leading-relaxed font-light">
                   Já vestimos clientes em dezenas de cidades. Enviamos nosso guia em vídeo passo a passo para você tirar as medidas sem complicação.
                 </p>
               </div>
               <a 
                 href={whatsappUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider hover:bg-brand-primary/90 transition-all w-fit shadow-md"
               >
                 Orçar à Distância <ChevronRight className="w-4 h-4" />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold leading-tight">
             Pronto para ter uma roupa de santo <br />
             <span className="italic text-brand-secondary">que realmente serve em você?</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-ink/75 max-w-xl mx-auto font-light leading-relaxed">
            Conte para nós o que você precisa — o modelo, a data, o tecido e a linha. Nosso atendimento é humanizado e sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold hover:scale-105 transition-all shadow-xl"
            >
              <MessageCircle className="w-5 h-5 text-brand-secondary" />
              Agendar Medição pelo WhatsApp
            </a>
            <Link 
              href="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-brand-accent/50 text-brand-primary font-bold text-sm sm:text-base hover:bg-brand-bg transition-colors"
            >
              Formulário de Orçamento
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center pt-8 border-t border-brand-accent/20 text-xs font-semibold text-brand-ink/60">
             <Link href="/roupas-umbanda" className="hover:text-brand-primary inline-flex items-center gap-1">
               Ver roupas de Umbanda <ChevronRight className="w-3.5 h-3.5" />
             </Link>
             <span>•</span>
             <Link href="/roupas-candomble" className="hover:text-brand-primary inline-flex items-center gap-1">
               Ver roupas de Candomblé <ChevronRight className="w-3.5 h-3.5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
