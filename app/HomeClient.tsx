"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Scissors, 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Quote,
  Clock,
  Compass,
  Truck,
  Video,
  CheckCircle2
} from 'lucide-react';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans overflow-hidden">
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Alta Costura Afro-Religiosa
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight md:leading-[1.1] mb-8 text-brand-primary">
              Sua Roupa de Santo, <br />
              Feita do Jeito que a <span className="italic text-brand-secondary">Fé Merece</span>
            </h1>
            <p className="text-lg md:text-2xl text-brand-ink/70 leading-relaxed font-light mx-auto lg:mx-0 mb-12 max-w-2xl">
              Confeccionamos roupas de Umbanda e Candomblé sob medida em São Paulo — com respeito ao seu corpo, ao seu Orixá e ao fundamento da sua casa. Mão de obra a partir de <span className="font-bold text-brand-primary">R$150</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a 
                href={whatsappUrl}
                className="w-full sm:w-auto bg-brand-primary text-white px-10 py-6 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Quero meu orçamento pelo WhatsApp
              </a>
              <Link 
                href="/sobre"
                className="group flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-xs border-b-2 border-brand-secondary pb-1 hover:text-brand-secondary transition-colors"
              >
                Conheça nosso trabalho <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none flex justify-center"
          >
            <div className="relative w-full aspect-square bg-brand-secondary/5 rounded-[4rem] flex items-center justify-center border border-brand-accent/30 shadow-inner">
               <div className="absolute inset-12 border border-brand-secondary/20 rounded-[3.5rem] border-dashed" />
               <div className="z-10 bg-white p-12 rounded-[3.5rem] shadow-2xl border border-brand-accent/30 text-center max-w-[320px]">
                  <Sparkles className="w-12 h-12 text-brand-secondary mx-auto mb-8" />
                  <p className="font-serif text-2xl font-bold text-brand-primary mb-3">Raiz de Santo</p>
                  <p className="text-xs text-brand-ink/50 uppercase tracking-[0.3em] font-bold">Respeito ao Sagrado</p>
                  <div className="mt-8 pt-8 border-t border-brand-accent/30">
                    <p className="text-sm italic text-brand-ink/70 leading-relaxed font-light">&quot;Cada ponto um fundamento, <br/>cada detalhe um respeito.&quot;</p>
                  </div>
               </div>
               
               {/* Animated Icon */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute -top-10 -right-10 w-32 h-32 border border-brand-secondary/10 rounded-full flex items-center justify-center bg-white/40 backdrop-blur-md shadow-lg"
               >
                 <Scissors className="w-10 h-10 text-brand-secondary/40" />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Seção 1 — Apresentação rápida */}
      <section className="py-24 px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-8 leading-tight">Não somos uma loja. <br /><span className="italic text-brand-secondary">Somos um atelier.</span></h2>
            <div className="space-y-6 text-brand-ink/70 text-lg md:text-xl leading-relaxed font-light">
              <p>
                Na Raiz de Santo, cada peça começa com uma conversa. Queremos entender a sua linha, a sua nação, os preceitos da sua casa e o que o seu Orixá ou entidade pede. Só depois que ouvimos tudo isso é que a costura começa.
              </p>
              <p>
                Somos praticantes. Entendemos o que significa chegar ao pé do santo — e sabemos que uma roupa mal feita não é apenas um desconforto. É um desrespeito ao sagrado.
              </p>
              <p className="font-medium text-brand-primary italic">
                Por isso fazemos diferente: modelagem do zero, tecidos de qualidade, acabamento reforçado e preço justo para quem vive a fé no dia a dia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção 2 — Três caminhos */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">O que você <span className="italic">precisa hoje?</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Umbanda */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[3.5rem] border border-brand-accent/40 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="aspect-[4/3] bg-brand-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/umbanda/800/600')] bg-cover grayscale opacity-10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-3xl bg-white/90 backdrop-blur-sm flex items-center justify-center border border-brand-accent shadow-sm">
                      <Sparkles className="w-8 h-8 text-brand-primary" />
                   </div>
                </div>
              </div>
              <div className="p-10 space-y-6">
                <h3 className="font-serif text-2xl text-brand-primary font-bold">Roupas de Umbanda <br />Sob Medida</h3>
                <p className="text-brand-ink/60 text-sm leading-relaxed">Do branco de ração às cores das entidades — costuramos com respeito ao fundamento da sua linha e à sua casa. Roupas de ração, saias, calças, trajes para caboclos, pretos velhos, pombagiras e muito mais.</p>
                <Link href="/roupas-umbanda" className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-[10px] group-hover:text-brand-secondary transition-colors">
                  Ver roupas de Umbanda <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Candomblé */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-brand-primary rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-500 group"
            >
              <div className="aspect-[4/3] bg-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/candomble/800/600')] bg-cover grayscale opacity-20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-3xl bg-brand-primary/90 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-sm">
                      <Compass className="w-8 h-8 text-brand-secondary" />
                   </div>
                </div>
              </div>
              <div className="p-10 space-y-6">
                <h3 className="font-serif text-2xl text-white font-bold">Roupas de Candomblé <br />com Fundamento</h3>
                <p className="text-white/60 text-sm leading-relaxed">Para todas as nações: Ketu, Angola e Jeje. Camisu, Pano da Costa, Saias de Alodê, kits de obrigação e trajes para saída de santo — com o rigor e o amor que o Candomblé exige.</p>
                <Link href="/roupas-candomble" className="inline-flex items-center gap-2 text-brand-secondary font-bold uppercase tracking-widest text-[10px] group-hover:text-white transition-colors">
                  Ver roupas de Candomblé <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Sob Medida */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[3.5rem] border border-brand-accent/40 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="aspect-[4/3] bg-brand-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/alfaiate/800/600')] bg-cover grayscale opacity-10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-3xl bg-white/90 backdrop-blur-sm flex items-center justify-center border border-brand-accent shadow-sm">
                      <Scissors className="w-8 h-8 text-brand-primary" />
                   </div>
                </div>
              </div>
              <div className="p-10 space-y-6">
                <h3 className="font-serif text-2xl text-brand-primary font-bold">Alta Costura <br />Afro-Religiosa</h3>
                <p className="text-brand-ink/60 text-sm leading-relaxed">Fez da costura sob medida o que ela deveria sempre ter sido para a religião: acessível, precisa e com acabamento de alfaiataria. Modelagem do zero para o seu corpo.</p>
                <Link href="/costura-sob-medida" className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-[10px] group-hover:text-brand-secondary transition-colors">
                  Conhecer a costura sob medida <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção 3 — Por que a Raiz de Santo */}
      <section className="py-24 md:py-32 px-6 bg-brand-bg border-y border-brand-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">Bonita, resistente e com preço justo. <br /><span className="italic">Pode escolher os três.</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { 
                icon: Scissors, 
                title: "Modelagem Exclusiva", 
                desc: "Cada peça começa com um molde criado do zero para o seu corpo. Sem adaptação de tamanho padrão. Sem aperto, sem sobra." 
              },
              { 
                icon: ShieldCheck, 
                title: "Acabamento que Dura", 
                desc: "Costuras intertravadas e reforçadas nos pontos críticos. Peças feitas para aguentar anos de rituais e muitas lavagens." 
              },
              { 
                icon: Sparkles, 
                title: "Tecidos de Qualidade", 
                desc: "Trabalhamos com percal, lese, linho e algodão de alta gramatura. Você também pode trazer o seu tecido." 
              },
              { 
                icon: CheckCircle2, 
                title: "Preço Justo", 
                desc: "Mão de obra a partir de R$150, sem taxa oculta e sem surpresa. Ajudamos a escolher o melhor tecido pro seu bolso." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center mb-8 border border-brand-accent/50 shadow-inner">
                  <feature.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-brand-primary leading-tight">{feature.title}</h3>
                <p className="text-brand-ink/70 text-sm leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4 — Como funciona */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
           <div className="flex-1 space-y-12">
              <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">Simples do <br /><span className="italic text-brand-secondary">começo ao fim</span></h2>
              <div className="space-y-10">
                 {[
                   { step: "1", icon: MessageCircle, title: "Conversa", desc: "Fale com a gente pelo WhatsApp e conte o que você precisa: a peça, a linha, o prazo, o tecido. Respondemos com agilidade." },
                   { step: "2", icon: Scissors, title: "Medição", desc: "Presencialmente no atelier em São Paulo ou à distância com nosso guia em vídeo — você tira as medidas de casa." },
                   { step: "3", icon: Sparkles, title: "Costura", desc: "Criamos o molde exclusivo e costuramos com o cuidado que cada ponto exige. Sem pressa, sem atalho." },
                   { step: "4", icon: Truck, title: "Entrega", desc: "Retire no atelier ou receba em qualquer estado do Brasil via Correios ou transportadora com rastreamento." },
                 ].map((step, i) => (
                   <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                   >
                     <div className="shrink-0 w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center border border-brand-accent/30 shadow-sm">
                        <span className="font-serif text-brand-primary font-bold">{step.step}</span>
                     </div>
                     <div>
                        <h4 className="font-bold text-brand-primary mb-1 text-lg">{step.title}</h4>
                        <p className="text-sm text-brand-ink/60 leading-relaxed font-light">{step.desc}</p>
                     </div>
                   </motion.div>
                 ))}
              </div>
              <div className="pt-8">
                <a 
                  href={whatsappUrl}
                  className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
                >
                  Quero começar agora <ChevronRight className="w-5 h-5" />
                </a>
              </div>
           </div>
           
           <div className="flex-1 relative flex items-center justify-center">
              <div className="w-full aspect-square bg-brand-bg rounded-[4rem] border border-brand-accent/50 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/process/1000/1000')] bg-cover grayscale opacity-10 transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] border border-brand-accent/30 shadow-2xl space-y-6 max-w-xs text-center">
                      <Clock className="w-12 h-12 text-brand-secondary mx-auto opacity-70" />
                      <p className="font-serif text-2xl text-brand-primary font-bold italic">Prazos Combinados & Cumpridos</p>
                      <div className="h-0.5 w-12 bg-brand-secondary mx-auto rounded-full" />
                      <p className="text-xs uppercase tracking-widest font-bold text-brand-ink/40 leading-relaxed">Nossa agenda é sagrada.</p>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Seção 5 — Depoimentos */}
      <section className="py-24 md:py-32 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">O que dizem os <span className="italic">filhos de santo</span></h2>
            <p className="mt-4 text-brand-ink/50 uppercase tracking-[0.2em] text-xs font-bold leading-relaxed px-4">Relatos de quem já veste Raiz de Santo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Finalmente encontrei uma costureira que entende o preceito. Minha roupa de ração ficou perfeita — serve no corpo, respira bem e já passou por várias sessões sem nenhum problema.", name: "André L.", city: "São Paulo — SP" },
              { text: "Pedi um kit de obrigação completo e foi tudo entregue no prazo, impecável. O atendimento foi humanizado do começo ao fim. Recomendo para todo o meu terreiro.", name: "Mariana S.", city: "Recife — PE" },
              { text: "Moro em outro estado e fiquei com medo de não servir direito. Mas o guia de medição é muito claro e a peça chegou com ajuste perfeito. Nunca mais compro roupa de santo em loja.", name: "Juliana M.", city: "Belo Horizonte — MG" }
            ].map((testimony, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm flex flex-col h-full relative"
              >
                <Quote className="w-10 h-10 text-brand-secondary opacity-20 mb-6 shrink-0" />
                <p className="text-brand-ink/80 text-lg leading-relaxed italic mb-10 flex-grow font-light">
                  &quot;{testimony.text}&quot;
                </p>
                <div className="pt-8 border-t border-brand-accent/20">
                  <p className="font-bold text-brand-primary">{testimony.name}</p>
                  <p className="text-xs uppercase tracking-widest text-brand-ink/40 mt-1">{testimony.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 6 — Faixa de conversão central */}
      <section className="py-24 px-6 bg-brand-secondary overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight font-bold">
              Sua roupa de santo não deve <br /> ser <span className="italic">tamanho padrão.</span>
            </h2>
            <p className="text-brand-primary/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Diferente das lojas de artigos religiosos, a Raiz de Santo faz cada peça para o seu corpo e para o fundamento da sua casa. Sem estoque. Sem compromisso com o genérico.
            </p>
            <p className="text-2xl md:text-3xl font-serif text-brand-primary italic">
              Mão de obra a partir de <span className="font-bold">R$150</span>
            </p>
            <div className="pt-8">
               <a 
                href={whatsappUrl}
                className="inline-flex items-center gap-4 bg-brand-primary text-white px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-2xl"
              >
                <MessageCircle className="w-6 h-6" />
                Pedir orçamento pelo WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
           <HandMetal className="w-[800px] h-[800px] text-brand-primary" />
        </div>
      </section>

      {/* Seção 7 — Atendimento */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">Em São Paulo e em <br /><span className="italic">todo o Brasil</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "Atelier em SP", desc: "Atendimento presencial sob agendamento na capital paulista. Venha conhecer os tecidos e tirar medidas." },
              { icon: Truck, title: "Envio Nacional", desc: "Enviamos com rastreamento para todos os estados. Já vestimos filhos de santo do Norte ao Sul." },
              { icon: Video, title: "Videochamada", desc: "Atendemos à distância por vídeo para quem prefere ver os tecidos e tirar medidas em tempo real." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-brand-bg border border-brand-accent/30 shadow-sm text-center group hover:bg-white transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-brand-primary transition-all">
                  <item.icon className="w-7 h-7 text-brand-primary group-hover:text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-primary mb-4 leading-tight">{item.title}</h3>
                <p className="text-sm text-brand-ink/60 leading-relaxed font-light mb-8">{item.desc}</p>
                <a 
                  href={whatsappUrl}
                  className="font-bold text-xs uppercase tracking-widest text-brand-primary border-b border-brand-secondary pb-1 group-hover:text-brand-secondary transition-colors"
                >
                  Falar com a costureira
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 8 — Fechamento com propósito */}
      <section className="py-24 px-6 bg-brand-primary relative overflow-hidden text-center border-t border-brand-accent/20">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="w-20 h-20 bg-brand-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-brand-secondary/30">
               <Heart className="w-10 h-10 text-brand-secondary" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] font-bold">Cada ponto um <span className="italic text-brand-secondary">fundamento</span>. <br />Cada detalhe um <span className="italic text-brand-secondary">respeito.</span></h2>
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              A Raiz de Santo nasceu de dentro da fé — de quem conhece o peso de chegar ao pé do santo e sabe o que a vestimenta representa nesse momento. Não fazemos roupas. Fazemos a peça que vai estar com você nos momentos mais importantes da sua vida religiosa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link href="/sobre" className="w-full sm:w-auto px-12 py-5 rounded-full bg-white text-brand-primary font-bold text-lg hover:bg-brand-secondary transition-colors">
                Conheça nossa história
              </Link>
              <a href={whatsappUrl} className="w-full sm:w-auto px-12 py-5 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-brand-primary transition-all">
                Fale com a gente
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Custom Icon for Section 6
function HandMetal(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 12V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 8V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M18 12V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M6 18c-.4 0-.8-.1-1.2-.4C3.7 16.7 3 14.8 3 13V8" />
      <path d="M21 13c0 1.8-.7 3.7-1.8 4.6-.4.3-.8.4-1.2.4" />
      <path d="M10 18H5" />
      <path d="M19 18h-1" />
      <path d="M9 22h6" />
    </svg>
  );
}

function Heart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
