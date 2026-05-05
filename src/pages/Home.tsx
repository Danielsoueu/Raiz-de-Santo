import { motion } from 'motion/react';
import { 
  Scissors, 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  Check, 
  ShieldCheck, 
  Zap, 
  Quote 
} from 'lucide-react';
import { SEO } from '../components/SEO';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";

export default function Home() {
  return (
    <>
      <SEO 
        title="Roupas de Santo Sob Medida em SP | Umbanda e Candomblé"
        description="Confecção artesanal de roupas de santo sob medida em São Paulo. Saias, roupas de ração e panos da costa com fundamento e acabamento premium. Peça o seu orçamento!"
        keywords="roupas de santo sob medida, roupa de ração umbanda, roupas candomblé são paulo, costura de santo sp, saias umbanda personalizadas"
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Raiz de Santo",
          "description": "Confecção de roupas de santo sob medida para Umbanda e Candomblé em São Paulo.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "addressCountry": "BR"
          },
          "url": "https://raizdesanto.com.br",
          "telephone": "+5511969035273"
        }}
      />
      
      {/* 1. Hero Section */}
      <header className="relative pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Alta Costura Afro-Religiosa em São Paulo
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-medium leading-tight md:leading-[1.1] mb-6 md:mb-8 text-brand-ink">
              Roupas de Santo Sob Medida com <br />
              <span className="italic text-brand-secondary">Respeito e Tradição.</span>
            </h1>
            <p className="text-sm md:text-xl text-brand-ink/80 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
              Traduza sua fé em trajes exclusivos para <span className="font-semibold text-brand-primary">Umbanda e Candomblé</span>. Cada costura é feita sob medida em São Paulo, unindo sofisticação e o axé da tradição.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
              <a 
                href={whatsappUrl}
                className="w-full sm:w-auto bg-brand-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-primary/20 text-center flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir Orçamento via WhatsApp
              </a>
              <div className="flex items-center gap-2 text-brand-primary/60 text-xs md:text-sm font-medium">
                <Check className="w-4 h-4 text-brand-secondary" /> Modelagem Exclusiva
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square bg-brand-accent/20 rounded-[4rem] flex items-center justify-center border border-brand-secondary/20 shadow-inner">
               <div className="absolute inset-8 border border-brand-secondary/30 rounded-[3.5rem] border-dashed" />
               <div className="z-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-brand-accent/30 text-center max-w-[280px]">
                  <Sparkles className="w-10 h-10 text-brand-secondary mx-auto mb-6" />
                  <p className="font-serif text-xl font-bold text-brand-primary mb-2">Costura de Santo</p>
                  <p className="text-[10px] text-brand-ink/70 uppercase tracking-[0.2em] font-bold">Acabamento Superior</p>
                  <div className="mt-6 pt-6 border-t border-brand-accent/30">
                    <p className="text-xs italic text-brand-ink/70">"Cada ponto um fundamento, <br/>cada detalhe um respeito."</p>
                  </div>
               </div>
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute -top-4 -right-4 w-24 h-24 border border-brand-secondary/20 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm"
               >
                 <Scissors className="w-8 h-8 text-brand-secondary/40" />
               </motion.div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-secondary/5 blur-[120px] rounded-full" />
          </motion.div>
        </div>
      </header>

      {/* 2. Como Funciona */}
      <section className="py-24 md:py-32 px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 text-brand-primary leading-tight">Nosso Processo de <br className="md:hidden"/><span className="italic">Criação Única</span></h2>
            <div className="w-16 h-1 bg-brand-secondary mx-auto rounded-full mb-6" />
            <p className="text-brand-ink/70 max-w-xl mx-auto uppercase tracking-[0.2em] text-[9px] md:text-xs font-bold leading-relaxed px-4">Excelência em roupas para Umbanda e Candomblé em São Paulo.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-16">
            {[
              { icon: MessageCircle, title: "Diálogo de Axé", desc: "Entendemos sua necessidade e os preceitos da sua casa para a confecção da peça." },
              { icon: Scissors, title: "Medição Precisa", desc: "Coletamos medidas via vídeo-chamada guiada ou presencialmente em nosso atelier em SP." },
              { icon: Sparkles, title: "Costura Sagrada", desc: "Cada ponto é dado com respeito ao pano e ao seu tempo, garantindo durabilidade." },
              { icon: Zap, title: "Entrega Veloz", desc: "Enviamos para todo o Brasil com embalagem que protege o axé da sua vestimenta." },
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-bg flex items-center justify-center mb-8 border border-brand-accent shadow-sm group hover:bg-brand-primary transition-all duration-300">
                  <step.icon className="w-6 h-6 text-brand-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-brand-primary">{step.title}</h3>
                <p className="text-brand-ink/70 text-sm leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Seção de Diferencial */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex-1 space-y-10">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8 text-brand-primary">
                Sua roupa de santo não <br /> deve ser <span className="italic text-brand-secondary">"tamanho padrão".</span>
              </h2>
              <p className="text-lg text-brand-ink/80 leading-relaxed font-light">
                Diferente de lojas de artigos religiosos genéricos, a <span className="font-bold text-brand-primary text-xl">Raiz de Santo</span> oferece exclusividade. Nossas roupas para Umbanda e Candomblé respeitam o corpo e o fundamento.
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="flex gap-5 items-start">
                <div className="bg-brand-secondary/10 p-2 rounded-lg mt-1">
                   <Scissors className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                   <h3 className="font-bold text-brand-primary mb-1 text-lg">Curadoria de Tecidos Premium</h3>
                   <p className="text-sm text-brand-ink/70 leading-relaxed">Trabalhamos com percal, lese, linho e algodão de alta gramatura. Você também pode trazer o seu tecido de estimação.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="bg-brand-secondary/10 p-2 rounded-lg mt-1">
                   <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                   <h3 className="font-bold text-brand-primary mb-1 text-lg">Atelier em São Paulo (Atendimento Presencial)</h3>
                   <p className="text-sm text-brand-ink/70 leading-relaxed">Agende seu horário para tirar medidas e conhecer nossos materiais pessoalmente na capital paulista.</p>
                </div>
              </div>
            </div>

            <a 
              href={whatsappUrl}
              className="inline-flex items-center gap-3 text-brand-primary font-bold uppercase tracking-widest text-xs border-b-2 border-brand-secondary pb-1 hover:text-brand-secondary transition-colors"
            >
              Falar com nossa costureira <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="flex-1 relative w-full max-w-lg">
            <div className="grid grid-cols-2 gap-3 md:gap-4 font-serif">
              <motion.div whileHover={{ y: -5 }} className="bg-brand-primary rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 min-h-[140px] md:aspect-square flex flex-col justify-end text-white relative overflow-hidden shadow-xl">
                 <h3 className="text-base md:text-2xl mb-1 md:mb-2 relative z-10 font-medium leading-tight text-white">Roupas de Ração</h3>
                 <p className="text-[7px] md:text-[10px] uppercase tracking-widest opacity-80 font-sans font-bold relative z-10">Conforto Essencial</p>
                 <Sparkles className="absolute -top-5 -right-5 w-32 h-32 opacity-10" />
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-brand-accent/40 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 min-h-[140px] md:aspect-square flex flex-col justify-end border border-brand-accent shadow-sm">
                 <h3 className="text-base md:text-2xl mb-1 md:mb-2 text-brand-primary font-medium leading-tight">Saias Exclusivas</h3>
                 <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-brand-primary opacity-60 font-sans font-bold">Volume e Roda</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-brand-bg rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 min-h-[140px] md:aspect-square flex flex-col justify-end border border-brand-secondary/30 shadow-sm">
                 <h3 className="text-base md:text-2xl mb-1 md:mb-2 text-brand-primary font-medium leading-tight">Panos da Costa</h3>
                 <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-brand-primary opacity-60 font-sans font-bold">Respeito à Tradição</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-brand-secondary/10 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 min-h-[140px] md:aspect-square flex flex-col justify-end border border-brand-secondary/20 shadow-sm">
                 <h3 className="text-base md:text-2xl mb-1 md:mb-2 text-brand-primary font-medium leading-tight">Alta Costura</h3>
                 <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-brand-primary opacity-60 font-sans font-bold">Fé em cada Ponto</p>
              </motion.div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-primary/5 rounded-full blur-[80px]" />
          </div>
        </div>
      </section>

      {/* 4. Valor e Mercado */}
      <section className="py-24 md:py-32 px-6 bg-brand-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">Trajes de Santo com <br /><span className="italic text-brand-secondary drop-shadow-sm">Preço Justo.</span></h2>
              <p className="text-lg md:text-xl text-white mb-10 leading-relaxed font-light">
                Unimos a sofisticação da alta costura religiosa ao valor acessível de quem entende o dia a dia do barracão e do terreiro.
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
                <div className="absolute -top-3 -right-3 bg-brand-secondary text-brand-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-xl">
                   Oferta
                </div>
              </div>
            </div>
            
            <div className="grid gap-6 relative z-10">
               {[
                 { title: "Respeito ao Orçamento", desc: "Ajudamos você a escolher o melhor tecido dentro do que você pode investir hoje.", icon: ShieldCheck },
                 { title: "Transparência Total", desc: "Sem taxas ocultas. Você paga pelo talento da costura e pela qualidade do material.", icon: Scissors },
                 { title: "Roupas que Duram", desc: "Nossas peças são feitas para resistir a anos de rituais, com reforço nas costuras críticas.", icon: Zap },
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

      {/* 5. Lista de Produtos SEO */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
           <div className="flex-1">
              <h2 className="font-serif text-3xl md:text-5xl mb-12 text-brand-primary leading-tight">O que confeccionamos <br/><span className="text-brand-secondary italic">sob medida:</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Roupa de Ração para Umbanda",
                  "Saias de Baiana (Candomblé)",
                  "Fardas de Raio Personalizadas",
                  "Calçolões e Calças de Santo",
                  "Panos da Costa e Camisus",
                  "Trajes para Iyawó e Saída",
                  "Roupas para Caboclo e Pombagira",
                  "Uniformes para Terreiros em SP"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 rounded-2xl border border-brand-accent/30 hover:border-brand-secondary transition-all group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm font-medium text-brand-ink/80 group-hover:text-brand-primary">{item}</span>
                  </div>
                ))}
              </div>
           </div>
           
           <div className="w-full md:w-1/3 bg-brand-bg rounded-[3.5rem] p-10 border border-brand-accent shadow-sm">
              <h3 className="font-serif text-2xl mb-8 text-brand-primary">Onde nos encontrar:</h3>
              <div className="space-y-8">
                 <div className="flex gap-4 items-start">
                    <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                    <p className="text-sm text-brand-ink/70">Atendimento presencial em São Paulo (Capital) e Grande SP sob agendamento.</p>
                 </div>
                 <div className="flex gap-4 items-start">
                    <Zap className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                    <p className="text-sm text-brand-ink/70">Envio para todos os estados do Brasil via Correios e Transportadora com rastreio.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. Final Trust & CTA */}
      <section className="py-24 px-6 bg-brand-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote className="w-12 h-12 text-brand-secondary mx-auto mb-10 opacity-30" />
          <h2 className="font-serif text-3xl md:text-5xl mb-12 text-white italic leading-tight">
            "Confecção de roupas de santo é fundamento. Cada detalhe é uma oração costurada."
          </h2>
          <a 
            href={whatsappUrl}
            className="inline-flex items-center gap-4 bg-brand-secondary text-brand-primary px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl"
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar Orçamento no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
