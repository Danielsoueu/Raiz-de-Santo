"use client";

import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Check, 
  Scissors, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Heart,
  Phone,
  Video
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';
import { trackWhatsAppClick } from '../../lib/analytics';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para confecção de roupas de Candomblé sob medida.";
const phoneHref = "tel:+5511969035273";

export default function CandombleClient() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans overflow-x-hidden">
      <div className="bg-white border-b border-brand-accent/20">
        <Breadcrumbs items={[{ label: "Roupas de Candomblé" }]} />
      </div>

      {/* Hero Section */}
      <header className="pt-8 md:pt-14 pb-16 px-4 sm:px-6 bg-brand-primary text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/20 text-brand-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Ketu • Angola • Jeje
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight font-bold">
              Roupas de Candomblé Sob Medida — <br className="hidden sm:block" />
              <span className="italic text-brand-secondary">Com o Fundamento que o Orixá Merece</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
              Costuramos para todas as nações com rigor, beleza e respeito à hierarquia do Candomblé. Cada peça é pensada para o seu corpo, para o seu Orixá e para o ritual da sua casa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-secondary text-brand-primary px-8 py-4 rounded-full text-sm sm:text-base font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Orçar Roupa de Candomblé
              </a>
              <a 
                href={phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-secondary" />
                Ligar: (11) 96903-5273
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Seção 1 — Texto principal */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
              Respeito ao Sagrado
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-primary font-bold">
              A vestimenta no Candomblé não é apenas roupa — é fundamento.
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6 text-brand-ink/75 text-base sm:text-lg leading-relaxed font-light">
            <p>
              No Candomblé, a vestimenta faz parte viva do axé. Ela respeita a hierarquia, anuncia o Orixá, honra a nação e marca cada etapa da vida religiosa do filho de santo. Uma roupa sem o corte exato, sem o tecido adequado ou sem atenção ao preceito compromete o ritual.
            </p>
            <p>
              Na <strong className="font-semibold text-brand-primary">Raiz de Santo</strong>, compreendemos as particularidades entre Ketu, Angola e Jeje. Sabemos que o Pano da Costa usado em uma casa possui medidas e amarrações próprias. Sabemos que o traje de Oxum difere do de Iansã ou Iemanjá, e que o branco de Oxalá exige pureza e acabamento impecável.
            </p>
            <p className="font-medium text-brand-primary italic">
              Trabalhamos sob medida, peça por peça, com escuta atenta, medição precisa e absoluto respeito ao que o seu terreiro orienta.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2 — O que confeccionamos */}
      <section className="py-20 px-4 sm:px-6 bg-brand-bg/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
              Vestimentas Sagradas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold mb-3">
              Trajes completos para todas as nações
            </h2>
            <p className="text-brand-ink/60 uppercase tracking-widest text-xs font-bold">
              Excelência artesanal para saídas, obrigações e toques
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Camisu com Bico e Bordados", desc: "Acabamento em lese legítimo e entremeios de algodão que respeitam o padrão de cada casa." },
              { 
                title: "Pano da Costa (Alaká) e Proas", 
                desc: "Tecidos estruturados e nobres, com barra e comprimento adequados ao seu biotipo e nação.",
                link: "/roupas-candomble/pano-da-costa",
                linkText: "Página do Pano da Costa"
              },
              { title: "Saias de Armação (Alodê)", desc: "Volume, roda e armação pensados para garantir imponência sem pesar nos movimentos." },
              { title: "Saias de Baiana com Roda Ampla", desc: "Com 5 metros de roda ou mais, em percal, algodão ou lese, com acabamento reforçado." },
              { title: "Roupas de Ração para Obrigações", desc: "Leves, respiráveis e com costura dupla para o recolhimento e a rotina do barracão." },
              { title: "Trajes para Saída de Santo", desc: "As peças mais marcantes da vida religiosa confeccionadas com rigor absoluto e riqueza de detalhes." },
              { 
                title: "Pano de Cabeça (Ojá)", 
                desc: "Confeccionado no tecido correto, com largura ideal para amarrações firmes e elegantes.",
                link: "/roupas-candomble/oja-pano-de-cabeca",
                linkText: "Página do Ojá"
              },
              { title: "Kits de Obrigações (1, 3, 7 e 21 Anos)", desc: "Conjuntos completos com todas as mudas necessárias, com prazo e valor combinados." },
              { title: "Vestimentas por Orixá", desc: "Cores e adereços litúrgicos para Oxum, Iemanjá, Ogum, Xangô, Oxóssi, Obaluaiê e demais divindades." },
            ].map((product, i) => (
              <div 
                key={i}
                className="bg-white p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 bg-brand-bg rounded-2xl flex items-center justify-center mb-5 border border-brand-accent/20 text-brand-primary">
                    <Sparkles className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-primary mb-2">{product.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light mb-3">{product.desc}</p>

                  {product.link && (
                    <Link
                      href={product.link}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-secondary hover:underline mb-2"
                    >
                      {product.linkText} <ChevronRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
                <div className="mt-6 pt-4 border-t border-brand-accent/15">
                  <a 
                    href={`https://wa.me/5511969035273?text=${encodeURIComponent(`Olá! Gostaria de encomendar ${product.title} para Candomblé sob medida.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`candomble_${product.title.toLowerCase().replace(/\s+/g, '_')}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-secondary transition-colors uppercase tracking-wider"
                  >
                    Orçar modelo <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3 — Kits de obrigação */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
           <div className="flex-1 w-full flex justify-center">
              <div className="w-full max-w-md aspect-square bg-brand-bg rounded-[3.5rem] border border-brand-accent/40 p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-lg relative">
                 <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-brand-secondary border border-brand-accent/30">
                    <Heart className="w-8 h-8" />
                 </div>
                 <h3 className="font-serif text-2xl sm:text-3xl text-brand-primary font-bold mb-2">Kits de Obrigação</h3>
                 <p className="text-xs uppercase tracking-widest font-bold text-brand-secondary mb-4">Tranquilidade para seu Axé</p>
                 <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">
                   &quot;Preparar uma obrigação exige recolhimento e serenidade. Cuidamos de cada muda de roupa com o carinho que sua consagração merece.&quot;
                 </p>
              </div>
           </div>

           <div className="flex-1 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
                  Planejamento e Serenidade
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold leading-tight">
                  Obrigação marcada: enxoval completo e <br />
                  <span className="italic text-brand-secondary">sem contratempos.</span>
                </h2>
              </div>
              <div className="space-y-4 text-brand-ink/75 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  Sabemos a responsabilidade que envolve uma iniciação ou obrigação de ano. Confeccionamos <strong className="font-semibold text-brand-primary">kits de obrigação completos</strong> que reúnem as roupas de esteira, roupas de saída, panos da costa e ojás em um único pedido organizado.
                </p>
                <p>
                  Atendemos obrigações de 1, 3, 7 e 21 anos para Ketu, Angola e Jeje, com cronograma rigorosamente pontual e valores transparentes.
                </p>
              </div>
              <div className="pt-2">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-brand-secondary" />
                  Orçar meu Kit de Obrigação
                </a>
              </div>
           </div>
        </div>
      </section>

      {/* Seção 4 — Nosso diferencial */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-brand-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 font-bold leading-tight">
                Beleza, preço justo e <br />
                <span className="italic text-brand-secondary">respeito ao fundamento.</span>
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed font-light">
                A Raiz de Santo une a sabedoria do terreiro ao acabamento refinado de alfaiataria. Peças que valorizam sua fé e suportam muitos anos de celebração.
              </p>
              <div className="p-8 rounded-[2.5rem] bg-white text-brand-primary shadow-xl max-w-sm">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] block mb-1 text-brand-primary/60">Mão de obra a partir de</span>
                <div className="flex items-baseline gap-2">
                   <span className="text-xl font-serif">R$</span>
                   <span className="text-6xl font-serif font-bold text-brand-primary">150</span>
                </div>
                <div className="mt-4 pt-4 border-t border-brand-accent/30 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
                   <Check className="w-4 h-4 text-emerald-600" /> Confecção Sob Medida
                </div>
              </div>
            </div>
            
            <div className="grid gap-4 sm:gap-6">
               {[
                 { title: "Liberdade de Tecido", desc: "Percal de alta densidade, lese bordado, linho nobre e algodão puro. Se você já tem o tecido, confeccionamos com ele sem custo adicional.", icon: Scissors },
                 { title: "Reforço Estrutural", desc: "Costuras intertravadas com linha de alta resistência. Roupas feitas para suportar o calor do barracão e lavagens frequentes.", icon: ShieldCheck },
                 { title: "Revisão e Acabamento", desc: "Cada bainha, bico de lese e barra é revisado peça por peça antes do envio para assegurar caimento perfeito.", icon: Sparkles },
               ].map((card, i) => (
                 <div 
                   key={i}
                   className="p-6 sm:p-8 rounded-[2rem] bg-white/10 border border-white/20 flex gap-4 sm:gap-6 items-start"
                 >
                   <div className="bg-brand-secondary p-3 rounded-2xl shadow-lg shrink-0 text-brand-primary">
                      <card.icon className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="font-bold text-lg sm:text-xl mb-1 text-white">{card.title}</h3>
                      <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">{card.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 — Como funciona */}
      <section className="py-20 px-4 sm:px-6 bg-brand-bg/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold mb-3">
              Fácil de pedir em São Paulo ou à distância
            </h2>
            <p className="text-brand-ink/60 uppercase tracking-widest text-xs font-bold">
              Atendimento presencial e envio nacional com rastreamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mx-auto mb-5 text-brand-secondary border border-brand-accent/20">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-primary mb-3">Atelier em São Paulo</h3>
              <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">Agende seu horário no atelier para conversar sobre os preceitos, tocar nos tecidos e tirar medidas com calma.</p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mx-auto mb-5 text-brand-secondary border border-brand-accent/20">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-primary mb-3">Medição por Vídeo</h3>
              <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">Atendemos por videochamada e enviamos nosso guia prático em vídeo ensinando como tirar cada medida em casa.</p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mx-auto mb-5 text-brand-secondary border border-brand-accent/20">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-primary mb-3">Envio para todo Brasil</h3>
              <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">Peças embaladas com zelo ritual e enviadas via Correios ou transportadora com código de rastreamento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 bg-brand-primary text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            O seu traje de Candomblé <br />
            <span className="italic text-brand-secondary">começa com uma conversa.</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Conta pra gente o que você precisa: a nação, o Orixá, a ocasião e o prazo. Cuidaremos de tudo com respeito e dedicação.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-secondary text-brand-primary px-8 py-4 rounded-full text-sm sm:text-base font-bold shadow-xl hover:bg-brand-secondary/90 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir no WhatsApp
            </a>
            <Link 
              href="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-bold text-sm sm:text-base hover:bg-white/10 transition-colors"
            >
              Solicitar Orçamento Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
