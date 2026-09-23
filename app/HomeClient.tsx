"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Scissors, 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Quote,
  Clock, 
  Compass, 
  Truck, 
  Video, 
  CheckCircle2,
  Heart,
  Phone
} from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";
const phoneHref = "tel:+5511969035273";

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative pt-8 md:pt-14 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/15 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Alta Costura Afro-Religiosa em São Paulo
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-[1.1] mb-6 text-brand-primary">
              Roupas de Santo Sob Medida <br />
              <span className="italic text-brand-secondary">em São Paulo</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-ink/75 leading-relaxed font-light mx-auto lg:mx-0 mb-8 max-w-2xl">
              Roupas de santo sob medida para Umbanda e Candomblé em São Paulo. Peças personalizadas com respeito ao seu corpo, ao seu Orixá e ao fundamento da sua casa. Mão de obra a partir de <strong className="font-bold text-brand-primary">R$150</strong>. Atendimento presencial na capital paulista e envio seguro para todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("hero_cta")}
                className="w-full sm:w-auto bg-brand-primary text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-brand-secondary" />
                Pedir Orçamento no WhatsApp
              </a>
              <Link 
                href="/sobre"
                className="group inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-xs border-b-2 border-brand-secondary pb-1 hover:text-brand-secondary transition-colors"
              >
                Conheça nosso atelier <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex-1 relative w-full max-w-md lg:max-w-none flex justify-center"
          >
            <div className="relative w-full aspect-square max-w-[420px] bg-brand-secondary/10 rounded-[3.5rem] flex items-center justify-center border border-brand-accent/40 shadow-inner p-6">
               <div className="absolute inset-8 border border-brand-secondary/20 rounded-[3rem] border-dashed pointer-events-none" />
               <div className="z-10 bg-white p-8 sm:p-10 rounded-[3rem] shadow-2xl border border-brand-accent/30 text-center max-w-[300px]">
                  <Sparkles className="w-10 h-10 text-brand-secondary mx-auto mb-6" />
                  <p className="font-serif text-2xl font-bold text-brand-primary mb-2">Raiz de Santo</p>
                  <p className="text-[10px] text-brand-ink/50 uppercase tracking-[0.3em] font-bold">Respeito ao Sagrado</p>
                  <div className="mt-6 pt-6 border-t border-brand-accent/30">
                    <p className="text-xs sm:text-sm italic text-brand-ink/80 leading-relaxed font-light">
                      &quot;Cada ponto um fundamento, <br/>cada detalhe um respeito.&quot;
                    </p>
                  </div>
               </div>
               
               {/* Decorative badge */}
               <div className="absolute -top-4 -right-4 w-20 h-20 border border-brand-secondary/20 rounded-full flex items-center justify-center bg-white shadow-lg">
                 <Scissors className="w-7 h-7 text-brand-primary" />
               </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Seção 1 — Apresentação rápida */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-6 leading-tight font-bold">
              Não somos uma loja comum. <br />
              <span className="italic text-brand-secondary">Somos um atelier sob medida.</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-brand-ink/75 text-base sm:text-lg md:text-xl leading-relaxed font-light">
              <p>
                Na Raiz de Santo, cada peça começa com uma conversa atenta. Queremos entender a sua linha, a sua nação, os preceitos da sua casa e o que o seu Orixá ou guia espiritual pede. Só depois que alinhamos tudo isso é que a tesoura toca o tecido.
              </p>
              <p>
                Somos praticantes da religião. Entendemos o que significa bater a cabeça e chegar ao pé do santo — e sabemos que uma roupa apertada, quente ou de tecido frágil atrapalha o ritual.
              </p>
              <p className="font-medium text-brand-primary italic">
                Por isso trabalhamos diferente: modelagem do zero, tecidos nobres, costura reforçada e preço justo para quem vive a fé no dia a dia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção 2 — Três caminhos */}
      <section className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-3">
              Confecções Dedicadas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold leading-tight">
              O que você <span className="italic text-brand-secondary">precisa hoje?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Umbanda */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white rounded-[3rem] border border-brand-accent/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-8 sm:p-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center border border-brand-accent/40 shadow-sm text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-brand-primary font-bold leading-snug">
                  Roupas de Umbanda <br />Sob Medida
                </h3>
                <p className="text-brand-ink/70 text-sm leading-relaxed font-light">
                  Do branco de ração às cores das entidades — costuramos com respeito ao fundamento da sua linha e à sua casa. Roupas de ração, saias rodadas, calças, trajes para caboclos, pretos velhos, marinheiros e guardiões.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <Link 
                    href="/roupas-umbanda/roupa-de-racao"
                    className="text-[11px] font-semibold text-brand-primary/80 bg-brand-bg hover:bg-brand-secondary/20 px-3 py-1.5 rounded-full transition-colors border border-brand-accent/20"
                  >
                    • Roupa de Ração
                  </Link>
                  <Link 
                    href="/roupas-umbanda/saia-de-umbanda"
                    className="text-[11px] font-semibold text-brand-primary/80 bg-brand-bg hover:bg-brand-secondary/20 px-3 py-1.5 rounded-full transition-colors border border-brand-accent/20"
                  >
                    • Saia de Gira
                  </Link>
                </div>
              </div>
              <div className="p-8 sm:p-10 pt-0 space-y-4">
                <Link 
                  href="/roupas-umbanda" 
                  className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-xs group-hover:text-brand-secondary transition-colors"
                >
                  Ver roupas de Umbanda <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("card_servico_umbanda")}
                  className="w-full py-3.5 px-5 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-secondary hover:text-brand-primary transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-brand-secondary" />
                  Pedir orçamento pelo WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Candomblé */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-brand-primary text-white rounded-[3rem] overflow-hidden shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-8 sm:p-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 shadow-sm text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-primary transition-colors">
                  <Compass className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-white font-bold leading-snug">
                  Roupas de Candomblé <br />com Fundamento
                </h3>
                <p className="text-white/75 text-sm leading-relaxed font-light">
                  Para todas as nações: Ketu, Angola e Jeje. Camisu com bico de algodão, Pano da Costa bordado, Saias de Alodê, kits de obrigação e trajes para saída de santo com acabamento de alta qualidade.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <Link 
                    href="/roupas-candomble/pano-da-costa"
                    className="text-[11px] font-semibold text-white/90 bg-white/10 hover:bg-brand-secondary hover:text-brand-primary px-3 py-1.5 rounded-full transition-colors border border-white/10"
                  >
                    • Pano da Costa (Alaká)
                  </Link>
                  <Link 
                    href="/roupas-candomble/oja-pano-de-cabeca"
                    className="text-[11px] font-semibold text-white/90 bg-white/10 hover:bg-brand-secondary hover:text-brand-primary px-3 py-1.5 rounded-full transition-colors border border-white/10"
                  >
                    • Ojá & Pano de Cabeça
                  </Link>
                </div>
              </div>
              <div className="p-8 sm:p-10 pt-0 space-y-4">
                <Link 
                  href="/roupas-candomble" 
                  className="inline-flex items-center gap-2 text-brand-secondary font-bold uppercase tracking-widest text-xs group-hover:text-white transition-colors"
                >
                  Ver roupas de Candomblé <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("card_servico_candomble")}
                  className="w-full py-3.5 px-5 rounded-full bg-brand-secondary text-brand-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-brand-primary" />
                  Pedir orçamento pelo WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Sob Medida */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white rounded-[3rem] border border-brand-accent/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-8 sm:p-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center border border-brand-accent/40 shadow-sm text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Scissors className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-brand-primary font-bold leading-snug">
                  Alta Costura <br />Afro-Religiosa
                </h3>
                <p className="text-brand-ink/70 text-sm leading-relaxed font-light">
                  Costura sob medida com o rigor de alfaiataria: modelagem criada do zero para suas medidas exatas, com tecidos de alta durabilidade e caimento impecável para seus rituais.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <Link 
                    href="/costura-sob-medida"
                    className="text-[11px] font-semibold text-brand-primary/80 bg-brand-bg hover:bg-brand-secondary/20 px-3 py-1.5 rounded-full transition-colors border border-brand-accent/20"
                  >
                    • Molde Anatômico do Zero
                  </Link>
                  <Link 
                    href="/contato"
                    className="text-[11px] font-semibold text-brand-primary/80 bg-brand-bg hover:bg-brand-secondary/20 px-3 py-1.5 rounded-full transition-colors border border-brand-accent/20"
                  >
                    • Prova em São Paulo
                  </Link>
                </div>
              </div>
              <div className="p-8 sm:p-10 pt-0 space-y-4">
                <Link 
                  href="/costura-sob-medida" 
                  className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-xs group-hover:text-brand-secondary transition-colors"
                >
                  Conhecer a costura sob medida <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("card_servico_sob_medida")}
                  className="w-full py-3.5 px-5 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-secondary hover:text-brand-primary transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-brand-secondary" />
                  Pedir orçamento pelo WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção 3 — Por que a Raiz de Santo */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-brand-bg border-y border-brand-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-3">
              Nossos Pilares
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold leading-tight">
              Bonita, resistente e com preço justo. <br />
              <span className="italic text-brand-secondary">Pode escolher os três.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                icon: Scissors, 
                title: "Modelagem Exclusiva", 
                desc: "Cada peça começa com molde criado do zero para o seu corpo. Sem adaptação genérica. Sem aperto nos braços e sem sobra na barra." 
              },
              { 
                icon: ShieldCheck, 
                title: "Acabamento que Dura", 
                desc: "Costuras intertravadas e reforçadas nos pontos de tensão. Peças feitas para aguentar anos de giras, toques e lavagens frequentes." 
              },
              { 
                icon: Sparkles, 
                title: "Tecidos Selecionados", 
                desc: "Trabalhamos com percal 200/300 fios, lese puro algodão, linho e cambraia respirável. Você também pode trazer o seu próprio tecido." 
              },
              { 
                icon: CheckCircle2, 
                title: "Preço Transparente", 
                desc: "Mão de obra a partir de R$150, sem taxas ocultas. Orientamos a metragem exata para você economizar na compra dos tecidos." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mb-6 border border-brand-accent/40 shadow-inner text-brand-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 font-serif text-brand-primary leading-tight">{feature.title}</h3>
                <p className="text-brand-ink/70 text-xs sm:text-sm leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Como funciona */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
           <div className="flex-1 space-y-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-3">
                  Passo a Passo
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold leading-tight">
                  Simples do <br />
                  <span className="italic text-brand-secondary">começo ao fim</span>
                </h2>
              </div>

              <div className="space-y-8">
                 {[
                   { step: "1", icon: MessageCircle, title: "Conversa Inicial", desc: "Fale conosco pelo WhatsApp e nos conte o que você precisa: a peça, a linha, o prazo e a preferência de tecido. Respondemos com atenção." },
                   { step: "2", icon: Scissors, title: "Medição Sem Segredo", desc: "Presencialmente no atelier em São Paulo ou à distância com nosso guia passo a passo em vídeo — simples e confiável." },
                   { step: "3", icon: Sparkles, title: "Costura com Axé", desc: "Criamos o molde exclusivo e costuramos com reforço nos pontos críticos. Sem pressa e com respeito ao preceito." },
                   { step: "4", icon: Truck, title: "Entrega Segura", desc: "Retire no atelier em SP ou receba em qualquer cidade do Brasil via Correios ou transportadora com código de rastreamento." },
                 ].map((step, i) => (
                   <div key={i} className="flex gap-4 sm:gap-6">
                     <div className="shrink-0 w-11 h-11 bg-brand-bg rounded-2xl flex items-center justify-center border border-brand-accent/30 shadow-sm text-brand-primary font-bold text-sm">
                        {step.step}
                     </div>
                     <div>
                        <h4 className="font-bold text-brand-primary mb-1 text-base sm:text-lg">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">{step.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-all shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 text-brand-secondary" />
                  Iniciar Atendimento no WhatsApp
                </a>
                <a 
                  href={phoneHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-brand-accent/40 text-brand-primary font-bold text-sm hover:bg-brand-bg transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-secondary" />
                  Ligar: (11) 96903-5273
                </a>
              </div>
           </div>
           
           <div className="flex-1 w-full flex justify-center">
              <div className="w-full max-w-md aspect-square bg-brand-bg rounded-[3.5rem] border border-brand-accent/40 p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-lg relative">
                 <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-brand-secondary border border-brand-accent/30">
                    <Clock className="w-8 h-8" />
                 </div>
                 <h3 className="font-serif text-2xl sm:text-3xl text-brand-primary font-bold mb-3">
                   Prazos Combinados & Cumpridos
                 </h3>
                 <div className="h-0.5 w-12 bg-brand-secondary rounded-full mb-4" />
                 <p className="text-sm text-brand-ink/70 leading-relaxed font-light mb-6">
                   Sabemos que a data da obrigação ou festa não pode esperar. Por isso só pegamos encomendas que temos certeza absoluta que entregaremos no dia prometido.
                 </p>
                 <span className="text-xs uppercase tracking-widest font-bold text-brand-primary/60 bg-white px-4 py-2 rounded-full border border-brand-accent/30">
                   Compromisso com o Sagrado
                 </span>
              </div>
           </div>
        </div>
      </section>

      {/* Seção 5 — Depoimentos Reais */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-3">
              Satisfação e Axé
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold leading-tight">
              O que dizem os <span className="italic text-brand-secondary">filhos de santo</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { text: "Finalmente encontrei uma costureira que entende o preceito. Minha roupa de ração ficou perfeita — serve com conforto no corpo, respira bem e já passou por várias giras impecável.", name: "André L.", city: "São Paulo — SP" },
              { text: "Pedi um kit de obrigação completo de Candomblé e foi tudo entregue antes do prazo, com acabamento impecável. O atendimento com paciência tirou todas as minhas dúvidas.", name: "Mariana S.", city: "Recife — PE" },
              { text: "Moro em outro estado e fiquei com receio de não servir. O vídeo ensinando a medir facilitou tudo e a saia chegou com caimento maravilhoso. Não compro mais roupa pronta em loja.", name: "Juliana M.", city: "Belo Horizonte — MG" }
            ].map((testimony, i) => (
              <div 
                key={i}
                className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-brand-accent/30 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-brand-secondary opacity-30 mb-4" />
                  <p className="text-brand-ink/80 text-base leading-relaxed italic mb-8 font-light">
                    &quot;{testimony.text}&quot;
                  </p>
                </div>
                <div className="pt-6 border-t border-brand-accent/20">
                  <p className="font-bold text-brand-primary text-sm">{testimony.name}</p>
                  <p className="text-[11px] uppercase tracking-widest text-brand-ink/50 mt-0.5">{testimony.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Dicas de Axé (Blog) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
                Conhecimento Tradicional
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold leading-tight">
                Dicas de <span className="italic text-brand-secondary">Axé & Cuidados</span>
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="group inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-xs border-b-2 border-brand-secondary pb-1 hover:text-brand-secondary transition-colors"
            >
              Ver todos os artigos <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                slug: "como-lavar-sua-roupa-de-santo-sem-danificar-o-axe",
                title: "Como lavar sua roupa de santo sem danificar o axé passo a passo",
                desc: "Aprenda técnicas de lavagem artesanal para preservar as fibras e a energia das vestimentas.",
                date: "16 Mai, 2026",
                tag: "Informativo"
              },
              {
                slug: "5-tipos-de-rendas-ideais",
                title: "5 tipos de rendas ideais para saiões de Candomblé",
                desc: "Descubra as rendas mais tradicionais como Lese, Guipir e Renascença.",
                date: "12 Mai, 2026",
                tag: "Técnico"
              },
              {
                slug: "importancia-pano-da-costa",
                title: "A importância do Pano da Costa no fundamento do Iyawó",
                desc: "Entenda o significado e a força de proteção do Alaká nas cerimônias de iniciação.",
                date: "08 Mai, 2026",
                tag: "Tradição"
              }
            ].map((post, idx) => (
              <div
                key={idx}
                className="bg-brand-bg p-8 rounded-[2.5rem] border border-brand-accent/30 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/50 block mb-3">{post.date}</span>
                  <h3 className="font-serif text-xl font-bold text-brand-primary mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-secondary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-brand-ink/70 text-xs sm:text-sm font-light leading-relaxed mb-6">{post.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-brand-accent/20">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-secondary/15 text-brand-primary text-[10px] font-bold uppercase tracking-wider">{post.tag}</span>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-brand-primary font-bold text-xs uppercase tracking-wider hover:text-brand-secondary transition-colors">
                    Ler artigo <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Linhas de Orixás & Entidades sob Medida - Links Internos */}
      <section className="py-16 px-4 sm:px-6 bg-brand-bg/50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-serif text-2xl text-brand-primary italic mb-2">Confecções por Fundamento</h3>
          <p className="text-xs uppercase tracking-widest text-brand-ink/50 font-bold mb-8">Roupas personalizadas para cada divindade e entidade</p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              { name: "Roupa de Oxum sob medida", href: "/roupas-candomble" },
              { name: "Roupa de Iemanjá Candomblé", href: "/roupas-candomble" },
              { name: "Saia de Baiana sob medida", href: "/roupas-umbanda" },
              { name: "Roupa de Ogum na Umbanda", href: "/roupas-umbanda" },
              { name: "Pano da Costa e Alaká", href: "/roupas-candomble" },
              { name: "Ojá e Pano de Cabeça", href: "/roupas-candomble" },
              { name: "Roupa de Ração Masculina", href: "/roupas-umbanda" },
              { name: "Traje de Iansã sob medida", href: "/roupas-candomble" },
              { name: "Atendimento em SP & Envio Nacional", href: "/contato" }
            ].map((tag, idx) => (
              <Link 
                key={idx} 
                href={tag.href}
                className="bg-white hover:bg-brand-primary hover:text-white transition-all text-brand-primary font-medium text-xs py-2 px-4 rounded-full border border-brand-accent/40 shadow-sm"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Faixa de Conversão Central */}
      <section className="py-20 px-4 sm:px-6 bg-brand-secondary overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold leading-tight">
            Sua roupa de santo não deve <br /> ser <span className="italic">tamanho padrão.</span>
          </h2>
          <p className="text-brand-primary/85 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Ao contrário do vestuário genérico de lojas comerciais, na Raiz de Santo cada peça é desenhada para as suas medidas exatas e respeitando o fundamento da sua casa.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-primary font-bold italic">
            Mão de obra a partir de R$150
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
             <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-full text-base sm:text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              <MessageCircle className="w-5 h-5 text-brand-secondary" />
              Pedir Orçamento no WhatsApp
            </a>
            <Link
              href="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 rounded-full border-2 border-brand-primary text-brand-primary font-bold text-base hover:bg-brand-primary hover:text-white transition-colors"
            >
              Formulário de Contato
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Atendimento */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-3">
              Como Chegamos até Você
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold leading-tight">
              Em São Paulo e em <span className="italic text-brand-secondary">todo o Brasil</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: MapPin, title: "Atelier em SP", desc: "Atendimento presencial com agendamento na capital paulista para tocar nos tecidos e tirar medidas com a costureira." },
              { icon: Truck, title: "Envio Nacional", desc: "Despacho seguro para todos os estados brasileiros com código de rastreamento e seguro de envio." },
              { icon: Video, title: "Videochamada", desc: "Atendimento à distância por vídeo para quem prefere analisar os tecidos e tirar medidas com orientação ao vivo." },
            ].map((item, i) => (
              <div 
                key={i}
                className="p-8 sm:p-10 rounded-[2.5rem] bg-brand-bg border border-brand-accent/30 shadow-sm text-center flex flex-col justify-between group hover:bg-white transition-all duration-300"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors border border-brand-accent/20">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-primary mb-3 leading-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light mb-6">{item.desc}</p>
                </div>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`atendimento_${item.title.toLowerCase().replace(/\s+/g, '_')}`)}
                  className="font-bold text-xs uppercase tracking-widest text-brand-primary border-b border-brand-secondary pb-1 hover:text-brand-secondary transition-colors inline-block mx-auto"
                >
                  Falar com a costureira
                </a>
              </div>
            ))}
          </div>

          {/* Bloco Textual Factual de Atendimento Local em SP sem endereço público inventado */}
          <div className="mt-12 p-8 sm:p-10 rounded-[2.5rem] bg-brand-bg/80 border border-brand-accent/30 text-center max-w-4xl mx-auto">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-primary mb-3">
              Atendimento Presencial em São Paulo com Hora Marcada
            </h3>
            <p className="text-sm sm:text-base text-brand-ink/80 leading-relaxed font-light mb-6">
              Para garantir exclusividade e respeito litúrgico a cada cliente, realizamos atendimentos presenciais na capital paulista sob agendamento prévio. Você pode conhecer as opções de tecidos (percal 200 fios, lese 100% algodão, rendas e bordados), conferir amostras de acabamento e tirar medidas anatômicas com a costureira. Para quem reside em outros estados ou prefere comodidade, oferecemos atendimento completo por WhatsApp/videochamada com envio pelos Correios e transportadoras com seguro total para todo o território nacional.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-brand-primary">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-secondary" /> Prova de medidas com hora agendada</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-secondary" /> Capital de São Paulo e Grande SP</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-secondary" /> Envio segurado para todo o Brasil</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Blog / Dicas de Axé */}
      <section className="py-20 px-4 sm:px-6 bg-brand-bg/50 border-t border-brand-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
                Conteúdo & Tradição
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold">
                Dicas de Axé e Cuidados Litúrgicos
              </h2>
            </div>
            <Link 
              href="/blog"
              className="text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-secondary inline-flex items-center gap-1.5 transition-colors border-b border-brand-secondary pb-0.5"
            >
              Ver todos os artigos do blog <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <article className="p-8 bg-white rounded-[2.5rem] border border-brand-accent/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary block mb-2">
                  Cuidados & Lavagem
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-primary mb-3 leading-snug">
                  Como lavar roupa de santo sem danificar o axé
                </h3>
                <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light mb-6">
                  Passo a passo artesanal para higienizar batas, saias e panos da costa preservando a energia sagrada e o tecido.
                </p>
              </div>
              <Link
                href="/blog/como-lavar-sua-roupa-de-santo-sem-danificar-o-axe"
                className="font-bold text-xs uppercase tracking-wider text-brand-primary hover:text-brand-secondary inline-flex items-center gap-1 transition-colors"
              >
                Ler guia completo de lavagem <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            <article className="p-8 bg-white rounded-[2.5rem] border border-brand-accent/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary block mb-2">
                  Tecidos & Nobreza
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-primary mb-3 leading-snug">
                  5 tipos de rendas ideais para saiões de Candomblé
                </h3>
                <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light mb-6">
                  Entenda as diferenças entre lese, guipir e renascença para garantir roda impecável e conforto térmico.
                </p>
              </div>
              <Link
                href="/blog/5-tipos-de-rendas-ideais"
                className="font-bold text-xs uppercase tracking-wider text-brand-primary hover:text-brand-secondary inline-flex items-center gap-1 transition-colors"
              >
                Conhecer rendas recomendadas <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            <article className="p-8 bg-white rounded-[2.5rem] border border-brand-accent/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary block mb-2">
                  Fundamento do Iyawó
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-primary mb-3 leading-snug">
                  A importância do Pano da Costa (Alaká)
                </h3>
                <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light mb-6">
                  A força de proteção espiritual e a tradição ancestral do alaká usado por filhas de santo no barracão.
                </p>
              </div>
              <Link
                href="/blog/importancia-pano-da-costa"
                className="font-bold text-xs uppercase tracking-wider text-brand-primary hover:text-brand-secondary inline-flex items-center gap-1 transition-colors"
              >
                Compreender o fundamento do alaká <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Seção Fechamento */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-brand-primary text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="w-16 h-16 bg-brand-secondary/20 rounded-2xl flex items-center justify-center mx-auto border border-brand-secondary/30">
             <Heart className="w-8 h-8 text-brand-secondary" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight">
            Cada ponto um <span className="italic text-brand-secondary">fundamento</span>. <br />
            Cada detalhe um <span className="italic text-brand-secondary">respeito.</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            A Raiz de Santo nasceu de dentro da fé. Criamos vestimentas com amor e respeito que acompanham você nos momentos mais sublimes da sua caminhada espiritual.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/sobre" 
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-brand-primary font-bold text-sm sm:text-base hover:bg-brand-secondary transition-colors shadow-lg"
            >
              Conheça nossa história
            </Link>
            <a 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-emerald-600 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Fale com a gente
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
