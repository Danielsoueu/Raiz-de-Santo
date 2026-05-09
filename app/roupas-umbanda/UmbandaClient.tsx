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
  Clock
} from 'lucide-react';
import Link from 'next/link';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de Umbanda.";

export default function UmbandaClient() {
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
              Roupas de Umbanda Sob Medida — <br className="hidden md:block" />
              <span className="italic text-brand-secondary">Feitas com Fé, Entregues com Respeito</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-ink/70 max-w-3xl mx-auto leading-relaxed mb-10">
              Do branco de ração às cores das suas entidades, cada peça é costurada para o seu corpo, para o fundamento da sua casa e para o ritual da sua linha. Sem tamanho padrão. Sem atalho na qualidade.
            </p>
            <a 
              href={whatsappUrl}
              className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:scale-105 transition-all shadow-xl shadow-brand-primary/20"
            >
              <ChevronRight className="w-5 h-5 text-brand-secondary" />
              Quero orçar minha roupa de Umbanda
            </a>
          </motion.div>
        </div>
      </header>

      {/* Seção 1 — Texto principal (SEO + apresentação) */}
      <section className="py-24 px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-brand-primary">Por que a roupa de Umbanda importa tanto?</h2>
          <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed font-light">
            <p>
              Na Umbanda, a vestimenta não é acessório — é parte do trabalho. É com ela que o médium se prepara para receber, que a entidade se manifesta, que o axé circula. Uma roupa mal feita aperta na hora errada, rasga na costura mais importante ou simplesmente não carrega a dignidade que o momento exige.
            </p>
            <p>
              Na <span className="font-bold text-brand-primary">Raiz de Santo</span>, entendemos isso porque vivemos isso. Confeccionamos roupas de Umbanda sob medida para médiuns, filhos de santo e líderes de terreiro em São Paulo e em todo o Brasil — com o cuidado de quem sabe o que está sendo costurado e para quê.
            </p>
            <p>
              Cada peça começa com uma conversa. Queremos entender sua linha, sua casa, seus preceitos e o que a entidade pede. Só depois é que a costura começa.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2 — O que confeccionamos */}
      <section className="py-24 px-6 bg-brand-bg/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-4">Roupas de Umbanda para todos os trabalhos e entidades</h2>
            <p className="text-brand-ink/60 uppercase tracking-[0.2em] text-[10px] font-bold">Respeito ao preceito e ao pano</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Roupa de Ração", desc: "Em percal, algodão e linho — leve, fresca e durável para longas sessões." },
              { title: "Saias de Umbanda", desc: "Com 5 metros de roda ou mais, com armação e volume certo." },
              { title: "Calças e Abadás", desc: "Com corte tradicional e liberdade de movimento." },
              { title: "Trajes para Caboclos", desc: "Resistentes, com corte firme e acabamento reforçado." },
              { title: "Roupas para Pretos Velhos", desc: "Confortáveis, com tecidos macios e cores certas." },
              { title: "Marinheiros e Exus", desc: "Com os detalhes que a linha exige." },
              { title: "Roupas para Pombagiras", desc: "Elegantes, coloridas, com babados e acabamento delicado." },
              { title: "Fardas de Raio e Ogum", desc: "Resistentes e de corte preciso." },
              { title: "Linha de Esquerda", desc: "Roupas coloridas respeitando os preceitos de cada casa." },
              { title: "Kits para Terreiros", desc: "Uniformes para casas inteiras com desconto e prazo combinado." },
            ].map((product, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-brand-bg rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-5 h-5 text-brand-secondary" />
                </div>
                <h3 className="font-bold text-xl text-brand-primary mb-3">{product.title}</h3>
                <p className="text-sm text-brand-ink/70 leading-relaxed">{product.desc}</p>
              </motion.div>
            ))}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-brand-primary p-8 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-center"
              >
                <h3 className="font-serif text-2xl mb-4 italic">Pedido Especial?</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">Se você tem um pedido fora do comum — um modelo específico de entidade ou um bordado raro — estamos aqui para realizar.</p>
                <a href={whatsappUrl} className="text-brand-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">Ver possibilidade <ChevronRight className="w-4 h-4" /></a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção 3 — Nosso diferencial */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">
              Bonita, resistente e com preço justo. <br /><span className="italic text-brand-secondary">Pode escolher os três.</span>
            </h2>
            <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed font-light">
              <p>
                Muita gente acha que roupa de santo bem feita tem que ser cara. A Raiz de Santo existe para provar o contrário.
              </p>
              <p>
                Trabalhamos com mão de obra artesanal a partir de <span className="font-bold text-brand-primary">R$150</span>, e ajudamos você a escolher o melhor tecido dentro do que pode investir hoje. Percal de boa gramatura, algodão encorpado, lese, linho — temos opções para todos os bolsos, sem abrir mão da durabilidade.
              </p>
              <div className="space-y-8 pt-6">
                <div className="flex gap-6">
                  <div className="bg-brand-bg p-3 rounded-2xl h-fit">
                    <ShieldCheck className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary mb-1">Costuras Intertravadas</h4>
                    <p className="text-sm text-brand-ink/60">Reforçadas nos pontos críticos: cintura, barra, abertura. Feitas para aguentar rituais intensos.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-brand-bg p-3 rounded-2xl h-fit">
                    <Scissors className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary mb-1">Olhar de Alfaiate</h4>
                    <p className="text-sm text-brand-ink/60">Cada peça sai do nosso atelier revisada com perfeccionismo. Quem trabalha na fé merece excelência.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square bg-brand-bg rounded-[4rem] relative flex items-center justify-center p-12">
               <div className="absolute inset-10 border-2 border-brand-secondary/20 border-dashed rounded-[3rem]" />
               <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-brand-accent/20 relative z-10 text-center">
                  <Sparkles className="w-12 h-12 text-brand-secondary mx-auto mb-6" />
                  <p className="font-serif text-2xl text-brand-primary mb-2">Qualidade Premium</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Durabilidade Garantida</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 — Como funciona o atendimento */}
      <section className="py-24 px-6 bg-brand-bg/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-4">Fácil de começar, independente de onde você estiver</h2>
            <p className="text-brand-ink/60 uppercase tracking-[0.2em] text-[10px] font-bold">Atendimento em São Paulo e para todo o Brasil</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm text-center">
              <MapPin className="w-10 h-10 text-brand-secondary mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-brand-primary mb-4">Atendimento em SP</h3>
              <p className="text-sm text-brand-ink/70 leading-relaxed">Agende seu horário, sinta os tecidos e tire suas medidas presencialmente em nosso atelier na capital paulista.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm text-center">
              <Zap className="w-10 h-10 text-brand-secondary mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-brand-primary mb-4">Medição em Vídeo</h3>
              <p className="text-sm text-brand-ink/70 leading-relaxed">Não está em SP? Enviamos um guia em vídeo ensinando como tirar as medidas principais com precisão de longe.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm text-center">
              <Clock className="w-10 h-10 text-brand-secondary mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-brand-primary mb-4">Envio Seguro</h3>
              <p className="text-sm text-brand-ink/70 leading-relaxed">Peças embaladas com cuidado e enviadas via Correios/Transportadora para todos os estados do Brasil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 — Para quem é a Raiz de Santo */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            <div className="flex-1">
              <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-12 leading-tight">Para quem é a <br /><span className="italic text-brand-secondary">Raiz de Santo</span></h2>
              <div className="space-y-8">
                <div className="p-8 rounded-[2.5rem] border border-brand-accent/30 hover:border-brand-secondary transition-all group">
                  <h3 className="font-bold text-xl text-brand-primary mb-3">Médiuns que trabalham com fé</h3>
                  <p className="text-sm text-brand-ink/70 leading-relaxed">Para quem está começando e precisa da primeira roupa de ração — orientamos com paciência e preço acessível.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] border border-brand-accent/30 hover:border-brand-secondary transition-all group">
                   <h3 className="font-bold text-xl text-brand-primary mb-3">Mães e Pais de Santo</h3>
                   <p className="text-sm text-brand-ink/70 leading-relaxed">Para vestir todo o terreiro com dignidade. Condições especiais para encomendas coletivas e cumprimento de prazos.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] border border-brand-accent/30 hover:border-brand-secondary transition-all group">
                   <h3 className="font-bold text-xl text-brand-primary mb-3">Filhos de Santo de Longa Data</h3>
                   <p className="text-sm text-brand-ink/70 leading-relaxed">Para quem quer finalmente uma roupa que sirva direito, dure e carregue a energia certa do axé.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-brand-primary rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden">
               <Quote className="w-16 h-16 text-brand-secondary opacity-20 mb-8" />
               <h3 className="font-serif text-3xl md:text-4xl italic leading-tight mb-8">
                 "Cada ponto é um fundamento. Cada costura, um respeito. É assim que a gente trabalha."
               </h3>
               <p className="text-sm font-bold uppercase tracking-[0.4em] text-white/50">— Raiz de Santo</p>
               <Sparkles className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-brand-bg border-t border-brand-accent/20">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">
            Sua roupa de Umbanda <br /><span className="italic">começa com uma conversa.</span>
          </h2>
          <p className="text-lg text-brand-ink/70">
            Conta pra gente o que você precisa — a peça, a entidade, o prazo, o tecido que tem em mente. A gente cuida do resto.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={whatsappUrl}
              className="bg-brand-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com a costureira pelo WhatsApp
            </a>
            <Link 
              href="/roupas-candomble"
              className="bg-white border-2 border-brand-primary text-brand-primary px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-bg transition-all flex items-center justify-center gap-2"
            >
              Ver roupas de Candomblé também
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
