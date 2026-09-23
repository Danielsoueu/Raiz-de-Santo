"use client";

import { motion } from 'motion/react';
import { 
  MessageCircle, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Quote,
  MapPin,
  Clock,
  Phone,
  Scissors,
  Video
} from 'lucide-react';
import Link from 'next/link';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para confecção de roupas de Umbanda sob medida.";
const phoneHref = "tel:+5511969035273";

export default function UmbandaClient() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans overflow-x-hidden">
      {/* Hero Section */}
      <header className="pt-8 md:pt-14 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/15 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Alta Costura Litúrgica • Umbanda
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-brand-primary leading-tight font-bold">
              Roupas de Umbanda Sob Medida — <br className="hidden sm:block" />
              <span className="italic text-brand-secondary">Feitas com Fé e Respeito</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-ink/75 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
              Do branco de ração às cores vibrantes das suas entidades: cada peça é costurada para o seu corpo, para o fundamento da sua casa e para o trabalho da sua linha. Sem tamanho genérico. Sem atalho na qualidade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5 text-brand-secondary" />
                Pedir Orçamento para Umbanda
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

      {/* Seção 1 — Texto principal (SEO + apresentação) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
              Fundamento e Conforto
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-primary font-bold">
              Por que a roupa de Umbanda sob medida faz a diferença?
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6 text-brand-ink/75 text-base sm:text-lg leading-relaxed font-light">
            <p>
              Na Umbanda, a vestimenta não é apenas um adorno — ela faz parte da sustentação da gira. É com ela que o médium se concentra, que a entidade se manifesta e que a energia circula no terreiro. Uma roupa comprada pronta em loja que aperta nos ombros, esquenta demais ou rasga na primeira gira atrapalha o trabalho.
            </p>
            <p>
              Na <strong className="font-semibold text-brand-primary">Raiz de Santo</strong>, entendemos essa responsabilidade porque somos da religião. Confeccionamos roupas de Umbanda sob medida para médiuns, cambonos, ogãs e pais/mães de santo em São Paulo e com envio para todo o Brasil.
            </p>
            <p className="font-medium text-brand-primary italic">
              Cada peça começa com uma escuta atenta: tiramos suas medidas precisas e acolhemos os preceitos da sua casa espiritual.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2 — O que confeccionamos */}
      <section className="py-20 px-4 sm:px-6 bg-brand-bg/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
              Linha Completa de Confecção
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold mb-3">
              Roupas para todos os trabalhos e linhas
            </h2>
            <p className="text-brand-ink/60 uppercase tracking-widest text-xs font-bold">
              Respeito ao preceito, ao caimento e ao axé
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Roupa de Ração Branca", desc: "Em percal 200 fios ou puro algodão respirável, leve e resistente para longas giras e trabalhos de desenvolvimento." },
              { title: "Saias de Roda para Umbanda", desc: "Com 4 a 7 metros de roda, barra reforçada, armação no ponto certo e cós elástico com cordão para não apertar." },
              { title: "Calças e Calçolões", desc: "Modelagem anatômica que não trava os movimentos ao se ajoelhar ou incorporar." },
              { title: "Trajes para Caboclos e Boiadeiros", desc: "Tecidos rústicos como sarja de algodão e linho, com corte resistente e acabamentos rústicos autênticos." },
              { title: "Roupas para Pretos Velhos", desc: "Algodão macio, xadrez clássico, saias simples com rendas discretas e aventais tradicionais sob medida." },
              { title: "Linha de Marinheiros e Baianos", desc: "Fardas azuis e brancas de marinheiro e trajes alegres de baianos com detalhes artesanais." },
              { title: "Vestimentas para Pombagiras", desc: "Saias rodadas volumosas, corpetes bem estruturados, babados em lese e cetim fosco com acabamento de alta costura." },
              { title: "Fardas para Ogum e Xangô", desc: "Tons de vermelho, branco e azul real com costuras duplas e reforço nos pontos de maior esforço." },
              { title: "Uniformes para Terreiros", desc: "Condições especiais e prazos organizados para confecção coletiva de casas e centros espíritas." },
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
                  <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">{product.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-accent/15">
                  <a 
                    href={`https://wa.me/5511969035273?text=${encodeURIComponent(`Olá! Gostaria de encomendar ${product.title} de Umbanda sob medida.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
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

      {/* Seção 3 — Nosso diferencial */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
                Tradição & Acabamento
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold leading-tight">
                Bonita, resistente e com preço justo. <br />
                <span className="italic text-brand-secondary">Pode escolher os três.</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-brand-ink/75 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Muita gente acha que roupa de santo sob medida precisa custar uma fortuna. A Raiz de Santo existe exatamente para mostrar o oposto.
              </p>
              <p>
                Trabalhamos com mão de obra artesanal a partir de <strong className="font-bold text-brand-primary">R$150</strong>, e ajudamos você a selecionar o melhor tecido para o orçamento do seu bolso. Percal com boa gramatura, algodão encorpado, lese ou linho puro.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex gap-4">
                <div className="bg-brand-bg p-3 rounded-2xl h-fit border border-brand-accent/30 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary text-base mb-1">Costuras Intertravadas e Reforçadas</h4>
                  <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">Reforço triplo nos pontos críticos: cós, gancho de calças e cavas das blusas para suportar giras intensas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-brand-bg p-3 rounded-2xl h-fit border border-brand-accent/30 shrink-0">
                  <Scissors className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary text-base mb-1">Corte Sob Medida Real</h4>
                  <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">Desenhamos o molde para o formato real do seu corpo, garantindo que nada fique repuxando ou sobrando.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center">
            <div className="w-full max-w-md aspect-square bg-brand-bg rounded-[3.5rem] border border-brand-accent/40 p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-lg relative">
               <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-brand-secondary border border-brand-accent/30">
                  <Sparkles className="w-8 h-8" />
               </div>
               <h3 className="font-serif text-2xl sm:text-3xl text-brand-primary font-bold mb-2">Qualidade em Cada Ponto</h3>
               <p className="text-xs uppercase tracking-widest font-bold text-brand-secondary mb-4">Durabilidade Comprovada</p>
               <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">
                 Roupas confeccionadas para acompanhar sua trajetória espiritual por muitos anos, mantendo o brilho e o conforto.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 — Como funciona o atendimento */}
      <section className="py-20 px-4 sm:px-6 bg-brand-bg/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold mb-3">
              Fácil de encomendar de qualquer lugar
            </h2>
            <p className="text-brand-ink/60 uppercase tracking-widest text-xs font-bold">
              Atendimento presencial em São Paulo e envio nacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mx-auto mb-5 text-brand-secondary border border-brand-accent/20">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-primary mb-3">Atelier em SP</h3>
              <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">Agende seu horário com hora marcada, toque nos tecidos e tire suas medidas presencialmente com a costureira.</p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mx-auto mb-5 text-brand-secondary border border-brand-accent/20">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-primary mb-3">Medição por Vídeo</h3>
              <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">Está fora de SP? Enviamos um guia em vídeo prático ensinando você a tirar as medidas exatas sem sair de casa.</p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center mx-auto mb-5 text-brand-secondary border border-brand-accent/20">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-primary mb-3">Envio com Rastreio</h3>
              <p className="text-xs sm:text-sm text-brand-ink/70 leading-relaxed font-light">Suas roupas são embaladas com carinho e despachadas via Correios ou transportadora para qualquer cidade brasileira.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 bg-brand-primary text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Sua roupa de Umbanda <br />
            <span className="italic text-brand-secondary">começa com uma conversa.</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Conte para nós o que você precisa: a linha, o modelo da entidade, a cor e o prazo. Nossa costureira está pronta para te atender.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold shadow-xl hover:bg-emerald-600 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <Link 
              href="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-bold text-sm sm:text-base hover:bg-white/10 transition-colors"
            >
              Formulário de Orçamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
