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
  Heart
} from 'lucide-react';
import Link from 'next/link';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de Candomblé.";

export default function CandombleClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="pt-32 md:pt-48 pb-20 px-6 bg-brand-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-3xl md:text-7xl mb-8 leading-tight">
              Roupas de Candomblé Sob Medida — <br className="hidden md:block" />
              <span className="italic text-brand-secondary">Do Ketu ao Angola, com o Fundamento que o Orixá Merece</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              Costuramos para todas as nações com rigor, beleza e respeito à hierarquia do Candomblé. Cada peça é pensada para o seu corpo, para o seu Orixá e para o ritual da sua casa.
            </p>
            <a 
              href={whatsappUrl}
              className="inline-flex items-center gap-3 bg-brand-secondary text-brand-primary px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:scale-105 transition-all shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Quero orçar minha roupa de Candomblé
            </a>
          </motion.div>
        </div>
        {/* Abstract background elements */}
        <Sparkles className="absolute -top-10 -left-10 w-64 h-64 opacity-5 text-white" />
        <Sparkles className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 text-white" />
      </header>

      {/* Seção 1 — Texto principal (SEO + apresentação) */}
      <section className="py-24 px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-brand-primary">A vestimenta no Candomblé não é roupa — é fundamento.</h2>
          <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed font-light">
            <p>
              No Candomblé, a vestimenta faz parte do axé. Ela respeita a hierarquia, anuncia o Orixá, honra a nação e marca cada etapa da vida religiosa do filho de santo. Uma roupa mal confeccionada — sem o corte certo, sem o tecido adequado ou sem atenção ao preceito — não é apenas um erro estético. É um desrespeito ao sagrado.
            </p>
            <p>
              Na <span className="font-bold text-brand-primary">Raiz de Santo</span>, entendemos a diferença entre <span className="italic">Ketu, Angola e Jeje</span>. Sabemos que o Pano da Costa usado em uma casa não é igual ao da outra. Sabemos que a saia de Oxum não é a de Iansã. Sabemos que o branco de Oxalá exige um acabamento que nenhuma máquina industrial consegue entregar.
            </p>
            <p>
              Por isso, trabalhamos com roupas de Candomblé sob medida, peça por peça, com conversa, medição precisa e respeito ao que a sua casa pede. Atendemos em São Paulo e enviamos para todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2 — O que confeccionamos */}
      <section className="py-24 px-6 bg-brand-bg/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-4">Trajes completos para todas as etapas e nações</h2>
            <p className="text-brand-ink/60 uppercase tracking-[0.2em] text-[10px] font-bold">Excelência artesanal para o seu Orixá</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Camisu com Bico e Bordados", desc: "Acabamento em lese, com detalhes que respeitam o padrão de cada casa." },
              { title: "Pano da Costa e Proas", desc: "Tecidos nobres, bordados sob encomenda, com a barra e o comprimento certos." },
              { title: "Saias de Armação (Alodê)", desc: "Volume, roda e armação pensados para cada entidade e cada ocasião." },
              { title: "Saias de Baiana", desc: "Com mais de 5 metros de roda, em percal, algodão ou lese, com ou sem babados." },
              { title: "Roupas de Ração", desc: "Leves, respiráveis e duráveis para o cotidiano do terreiro." },
              { title: "Trajes para Saída de Santo", desc: "As peças mais importantes da vida religiosa merecem atenção redobrada." },
              { title: "Pano de Cabeça (Ojá)", desc: "Confeccionado no tecido e na cor certa para o Orixá e para o momento." },
              { title: "Kits de Obrigações", desc: "Para 1, 3, 7 e 21 anos — conjuntos completos com prazo e preço combinados." },
              { title: "Roupas por Orixá", desc: "Oxum, Iemanjá, Oxalá, Ogum, Xangô e todos os demais com detalhes específicos." },
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
                <h3 className="font-serif text-2xl mb-4 italic">Preceito Específico?</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">Se o seu Babalorixá ou Iyalorixá tem uma especificação própria de bordado ou cor, nós realizamos com rigor técnico.</p>
                <a href={whatsappUrl} className="text-brand-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">Consultar agora <ChevronRight className="w-4 h-4" /></a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção 3 — Kits de obrigação */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
           <div className="flex-1 relative">
              <div className="aspect-square bg-brand-bg rounded-[4rem] relative flex items-center justify-center p-12 overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-brand-primary/10 opacity-50" />
                 <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-brand-accent/20 relative z-10 text-center max-w-sm">
                    <Heart className="w-12 h-12 text-brand-secondary mx-auto mb-6" />
                    <h3 className="font-serif text-3xl text-brand-primary mb-4 italic">Kits de Obrigação</h3>
                    <p className="text-sm font-medium opacity-50 uppercase tracking-widest mb-6">Tranquilidade para o seu Axé</p>
                    <div className="h-0.5 w-12 bg-brand-secondary mx-auto mb-6" />
                    <p className="text-xs text-brand-ink/60 italic leading-relaxed">&quot;Preparar uma obrigação envolve muito mais do que escolher roupas. Cuidamos do seu traje com zelo.&quot;</p>
                 </div>
              </div>
           </div>
           <div className="flex-1 space-y-10">
              <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">
                Obrigação à vista, kit completo e <br /><span className="italic text-brand-secondary">sem dor de cabeça.</span>
              </h2>
              <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed font-light">
                <p>
                  Sabemos que preparar uma obrigação envolve muito mais do que escolher roupas. Por isso, oferecemos <span className="font-bold text-brand-primary">kits completos de obrigação</span> que reúnem todas as peças necessárias em um único pedido, com prazo acordado desde o início e preço fechado.
                </p>
                <p>
                  Trabalhamos com obrigações de 1, 3, 7 e 21 anos, e entendemos que cada uma tem urgência e necessidades diferentes. Entre em contato com antecedência e nos conte o que a sua casa pede — cuidamos de todo o resto.
                </p>
                <a 
                  href={whatsappUrl}
                  className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Orçar meu kit de obrigação
                </a>
              </div>
           </div>
        </div>
      </section>

      {/* Seção 4 — Nosso diferencial */}
      <section className="py-24 md:py-32 px-6 bg-brand-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">Beleza, preço justo e <br /><span className="italic text-brand-secondary drop-shadow-sm">respeito ao fundamento.</span></h2>
              <p className="text-lg md:text-xl text-white mb-10 leading-relaxed font-light">
                A Raiz de Santo existe para provar que não é preciso escolher entre qualidade e preço acessível. Trabalhamos com mãos de axé que entendem o que costuram.
              </p>
              <div className="inline-flex flex-col bg-white px-10 py-8 rounded-[3rem] border border-white/30 mb-8 shadow-2xl transition-transform hover:scale-[1.02] group">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] block mb-2 text-brand-primary/60">Mão de obra a partir de</span>
                <div className="flex items-baseline gap-2">
                   <span className="text-2xl font-serif text-brand-primary">R$</span>
                   <span className="text-6xl md:text-8xl font-serif font-bold text-brand-primary">150</span>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary">
                   <Check className="w-5 h-5 text-brand-primary" /> Costura Artesanal Superior
                </div>
              </div>
            </div>
            
            <div className="grid gap-6 relative z-10">
               {[
                 { title: "Liberdade de Tecido", desc: "Usamos percal, lese, linho e algodão premium. Se você já tem o seu tecido de estimação, pode trazer que costuramos.", icon: Scissors },
                 { title: "Reforço Estrutural", desc: "Costuras intertravadas e reforçadas nos pontos críticos. Roupas feitas para durar anos de rituais e lavagens.", icon: ShieldCheck },
                 { title: "Revisão de Alfaiate", desc: "Cada bainha, cada bico de lese e cada bordado é revisado para garantir total alinhamento e perfeição.", icon: Zap },
               ].map((card, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ x: 10 }}
                   className="p-8 rounded-[2rem] bg-white/10 border border-white/20 hover:bg-white/20 transition-all flex gap-6 items-start"
                 >
                   <div className="bg-brand-secondary p-3 rounded-2xl shadow-lg">
                      <card.icon className="w-6 h-6 text-brand-primary" />
                   </div>
                   <div>
                      <h3 className="font-bold text-xl mb-2 text-white">{card.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{card.desc}</p>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 — Como funciona o atendimento */}
      <section className="py-24 px-6 bg-brand-bg/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-4">Fácil de pedir, independente de onde você mora</h2>
            <p className="text-brand-ink/60 uppercase tracking-[0.2em] text-[10px] font-bold">Atendimento Humizado e Envio Seguro</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm text-center">
              <MapPin className="w-10 h-10 text-brand-secondary mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-brand-primary mb-4">Atelier em São Paulo</h3>
              <p className="text-sm text-brand-ink/70 leading-relaxed">Agenda seu horário, conversa sobre o preceito e tira medidas presencialmente em nosso atelier na capital paulista.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm text-center">
              <Zap className="w-10 h-10 text-brand-secondary mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-brand-primary mb-4">Atendimento à Distância</h3>
              <p className="text-sm text-brand-ink/70 leading-relaxed">Atendemos por vídeo-chamada e enviamos um guia em vídeo para medição caseira rápida e precisa.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm text-center">
              <Clock className="w-10 h-10 text-brand-secondary mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-brand-primary mb-4">Envio para todo Brasil</h3>
              <p className="text-sm text-brand-ink/70 leading-relaxed">Peças embaladas com cuidado ritual e enviadas via Correios/Transportadora para todos os estados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6 — Para quem é a Raiz de Santo */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            <div className="flex-1">
              <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-12 leading-tight">Do recém-iniciado ao pai de santo com <br /><span className="italic text-brand-secondary">décadas de fundamento.</span></h2>
              <div className="space-y-8">
                <div className="p-8 rounded-[2.5rem] border border-brand-accent/30 hover:border-brand-secondary transition-all group">
                  <h3 className="font-bold text-xl text-brand-primary mb-3">Iniciantes na Jornada</h3>
                  <p className="text-sm text-brand-ink/70 leading-relaxed">Orientação sem julgamento para seu primeiro conjunto de roupas, com preço justo e respeito ao seu início.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] border border-brand-accent/30 hover:border-brand-secondary transition-all group">
                   <h3 className="font-bold text-xl text-brand-primary mb-3">Babalorixás e Iyalorixás</h3>
                   <p className="text-sm text-brand-ink/70 leading-relaxed">Condições especiais para vestir a casa inteira e rigoroso respeito aos preceitos da sua nação específica.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] border border-brand-accent/30 hover:border-brand-secondary transition-all group">
                   <h3 className="font-bold text-xl text-brand-primary mb-3">Filhos de Santo Veteranos</h3>
                   <p className="text-sm text-brand-ink/70 leading-relaxed">Para quem quer finalmente um traje que vesta com dignidade e resista ao tempo da vida religiosa.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-brand-bg rounded-[4rem] p-12 border border-brand-accent shadow-xl relative overflow-hidden">
               <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm">
                     <Check className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="font-serif text-3xl text-brand-primary mb-6">Confiança Consolidada</h3>
                  <p className="text-brand-ink/70 leading-relaxed mb-8">Mais de 500 filhos de santo vestidos de norte a sul do Brasil. Da primeira roupa de ração até o traje de saída de santo.</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary/40 italic">&quot;Cada ponto é um fundamento. Cada costura, um respeito.&quot;</p>
               </div>
               <Sparkles className="absolute -top-10 -right-10 w-48 h-48 opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            O seu traje de Candomblé <br /><span className="italic text-brand-secondary">começa com uma conversa.</span>
          </h2>
          <p className="text-lg text-white/70">
            Conta pra gente o que você precisa: a nação, o Orixá, a ocasião, o prazo. A gente cuida do resto com respeito e dedicação.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={whatsappUrl}
              className="bg-brand-secondary text-brand-primary px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com a costureira pelo WhatsApp
            </a>
            <Link 
              href="/roupas-umbanda"
              className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Ver roupas de Umbanda também
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
