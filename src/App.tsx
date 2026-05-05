import { motion } from 'motion/react';
import { 
  Scissors, 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  Check, 
  Clock,
  Instagram,
  Facebook,
  ShieldCheck,
  Zap,
  Quote
} from 'lucide-react';

const LOGO_URL = "https://i.ibb.co/5xFmZ0MS/An-ncio-do-Instagram-para-Nova-Cole-o-com-Desconto-Rosa-e-Branco.png";

export default function App() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink font-sans selection:bg-brand-secondary/30">
      {/* Social SEO Heading - Hidden */}
      <h1 className="sr-only">Raiz de Santo - Roupas de Santo Sob Medida em São Paulo - Umbanda e Candomblé</h1>

      <main>
        {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-accent/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="Logo Raiz de Santo" 
              width="40" 
              height="40" 
              className="h-10 w-10 rounded-full object-cover shadow-sm border border-brand-primary/10" 
            />
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-brand-primary">Raiz de Santo</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-xs font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Como Funciona</a>
            <a href="#diferenciais" className="text-xs font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Diferenciais</a>
            <a href="#pecas" className="text-xs font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Peças</a>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-all shadow-lg flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Orçamento WhatsApp</span>
          </a>
        </div>
      </nav>

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
              Especialistas em Confecção Sob Medida em São Paulo
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl font-medium leading-tight md:leading-[1.1] mb-6 md:mb-8 text-brand-ink">
              Roupas de Santo com <br />
              <span className="italic text-brand-secondary">Respeito e Tradição.</span>
            </h2>
            <p className="text-sm md:text-xl text-brand-ink/70 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
              Traduza sua fé em trajes exclusivos. Cada costura é feita sob medida em São Paulo, unindo sofisticação e o axé da tradição.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
              <a 
                href={whatsappUrl}
                className="w-full sm:w-auto bg-brand-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-primary/20 text-center flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Fazer Orçamento
              </a>
              <div className="flex items-center gap-2 text-brand-primary/60 text-xs md:text-sm font-medium">
                <Check className="w-4 h-4 text-brand-secondary" /> Modelagem Exclusiva
              </div>
            </div>
          </motion.div>

          {/* Minimalist Visual Representation instead of big image */}
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
                  <p className="text-[10px] text-brand-ink/40 uppercase tracking-[0.2em] font-bold">Acabamento Superior</p>
                  <div className="mt-6 pt-6 border-t border-brand-accent/30">
                    <p className="text-xs italic text-brand-ink/60">"Cada ponto um fundamento, <br/>cada detalhe um respeito."</p>
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
      <section id="como-funciona" className="py-24 md:py-32 px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 text-brand-primary leading-tight">Processo de <br className="md:hidden"/><span className="italic">Criação Única</span></h2>
            <div className="w-16 h-1 bg-brand-secondary mx-auto rounded-full mb-6" />
            <p className="text-brand-ink/50 max-w-xl mx-auto uppercase tracking-[0.2em] text-[9px] md:text-xs font-bold leading-relaxed px-4">Da primeira conversa ao traje pronto: simplicidade e respeito.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-16">
            {[
              { icon: MessageCircle, title: "Diálogo", desc: "Você nos envia sua ideia e os fundamentos necessários para a peça." },
              { icon: Scissors, title: "Modelagem", desc: "Coletamos suas medidas de forma online (guiada) ou presencial em SP." },
              { icon: Sparkles, title: "Costura", desc: "Produzimos com tecidos premium ou com o material que você trouxer." },
              { icon: Zap, title: "Prontidão", desc: "Entrega ágil com garantia de ajuste perfeito para o seu uso ritual." },
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
                <p className="text-brand-ink/60 text-sm leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Seção de Diferencial (Foco em Sob Medida) */}
      <section id="diferenciais" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex-1 space-y-10">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8 text-brand-primary">
                Sua roupa de santo não <br /> deve ser <span className="italic text-brand-secondary">"tamanho padrão".</span>
              </h2>
              <p className="text-lg text-brand-ink/70 leading-relaxed font-light">
                Diferente de grandes lojas que oferecem tamanhos genéricos, a <span className="font-bold text-brand-primary">Raiz de Santo</span> posiciona-se como um serviço especializado de alta costura religiosa.
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="flex gap-5 items-start">
                <div className="bg-brand-secondary/10 p-2 rounded-lg mt-1">
                   <Scissors className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                   <h4 className="font-bold text-brand-primary mb-1">Flexibilidade no Tecido</h4>
                   <p className="text-sm text-brand-ink/60">Traga seu próprio tecido de estimação ou confie na nossa curadoria de materiais premium.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="bg-brand-secondary/10 p-2 rounded-lg mt-1">
                   <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                   <h4 className="font-bold text-brand-primary mb-1">Atendimento Local (SP) e Digital</h4>
                   <p className="text-sm text-brand-ink/60">Medições guiadas via WhatsApp para todo o Brasil ou agendamento presencial em São Paulo.</p>
                </div>
              </div>
            </div>

            <a 
              href={whatsappUrl}
              className="inline-flex items-center gap-3 text-brand-primary font-bold uppercase tracking-widest text-xs border-b-2 border-brand-secondary pb-1 hover:text-brand-secondary transition-colors"
            >
              Saiba mais sobre the processo <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="flex-1 relative w-full max-w-lg">
            <div className="grid grid-cols-2 gap-3 md:gap-4 font-serif">
              <motion.div whileHover={{ y: -5 }} className="bg-brand-primary rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 min-h-[140px] md:aspect-square flex flex-col justify-end text-white relative overflow-hidden shadow-xl">
                 <h4 className="text-base md:text-2xl mb-1 md:mb-2 relative z-10 font-medium leading-tight">Roupas de Ração</h4>
                 <p className="text-[7px] md:text-[10px] uppercase tracking-widest opacity-60 font-sans font-bold relative z-10">Conforto</p>
                 <Sparkles className="absolute -top-5 -right-5 w-32 h-32 opacity-10" />
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-brand-accent/40 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 min-h-[140px] md:aspect-square flex flex-col justify-end border border-brand-accent shadow-sm">
                 <h4 className="text-base md:text-2xl mb-1 md:mb-2 text-brand-primary font-medium leading-tight">Saias <br className="md:hidden"/>Exclusivas</h4>
                 <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-brand-primary opacity-40 font-sans font-bold">Volume</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-brand-bg rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 min-h-[140px] md:aspect-square flex flex-col justify-end border border-brand-secondary/30 shadow-sm">
                 <h4 className="text-base md:text-2xl mb-1 md:mb-2 text-brand-primary font-medium leading-tight">Panos da <br className="md:hidden"/>Costa</h4>
                 <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-brand-primary opacity-40 font-sans font-bold">Tradição</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-brand-secondary/10 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 min-h-[140px] md:aspect-square flex flex-col justify-end border border-brand-secondary/20 shadow-sm">
                 <h4 className="text-base md:text-2xl mb-1 md:mb-2 text-brand-primary font-medium leading-tight">Fé & Fundamento</h4>
                 <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-brand-primary opacity-40 font-sans font-bold">Respeito</p>
              </motion.div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-primary/5 rounded-full blur-[80px]" />
          </div>
        </div>
      </section>

      {/* 4. Valor e Mercado */}
      <section id="precos" className="py-24 md:py-32 px-6 bg-brand-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">Sofisticação com <br /><span className="italic text-brand-secondary">Preço Justo.</span></h2>
              <p className="text-lg md:text-xl opacity-80 mb-10 leading-relaxed font-light">
                No mercado comum, roupas genéricas chegam a custar R$ 300. Na <span className="font-bold text-brand-secondary">Raiz de Santo</span>, unimos o valor de um serviço artesanal ao preço acessível.
              </p>
              <div className="inline-flex flex-col bg-white/5 backdrop-blur-sm px-10 py-8 rounded-[3rem] border border-white/20 mb-8">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] block mb-2 opacity-50">Confecção Inicial Médio</span>
                <div className="flex items-baseline gap-2">
                   <span className="text-2xl font-serif text-brand-secondary opacity-60">R$</span>
                   <span className="text-6xl md:text-8xl font-serif font-bold text-brand-secondary">150</span>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80">
                   <Check className="w-4 h-4 text-brand-secondary" /> Mão de obra artesanal
                </div>
                <div className="absolute -top-3 -right-3 bg-brand-secondary text-brand-primary px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter shadow-lg translate-y-1 group-hover:translate-y-0 transition-transform">
                   Destaque
                </div>
              </div>
            </div>
            
            <div className="grid gap-6 relative z-10">
               {[
                 { title: "Custo-Benefício Real", desc: "Você paga pela precisão da costura e respeito ao pano, sem taxas abusivas de revenda." },
                 { title: "Transparência", desc: "Ajudamos você a escolher o melhor tecido dentro do seu orçamento desejado." },
                 { title: "Durabilidade", desc: "Uma roupa Raiz de Santo é feita para resistir aos rituais, durando muito mais que peças prontas." },
               ].map((card, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ x: 10 }}
                   className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex gap-6 items-start"
                 >
                   <div className="bg-brand-secondary/20 p-3 rounded-2xl">
                      <ShieldCheck className="w-6 h-6 text-brand-secondary" />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg mb-2">{card.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
        {/* Artistic background accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -ml-48 -mb-48" />
      </section>

      {/* 5. SEO Context Section (Peças & Local) */}
      <section id="pecas" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 lg:gap-40">
           <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-12 text-brand-primary">Confecção Especializada <br/> <span className="italic text-brand-secondary font-light">Umbanda e Candomblé</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Roupa de Ração Personalizada",
                  "Saias com Roda de Axé",
                  "Pano da Costa Tradicional",
                  "Pano de Cabeça e Ojá",
                  "Calças e Abadás de Santo",
                  "Trajes para Iniciação",
                  "Roupas para Entidades",
                  "Kits para Obrigações"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 rounded-2xl border border-brand-accent/30 hover:border-brand-secondary transition-all group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm font-medium text-brand-ink/70 group-hover:text-brand-primary">{item}</span>
                  </div>
                ))}
              </div>
           </div>

           <div className="bg-brand-bg rounded-[3.5rem] p-10 md:p-16 border border-brand-accent transition-all hover:shadow-2xl">
              <div className="mb-10">
                <h2 className="font-serif text-3xl mb-4 text-brand-primary leading-tight">Presencial em <span className="italic font-light">São Paulo</span> <br/> ou em qualquer lugar do <span className="italic font-light">Brasil</span></h2>
                <p className="text-brand-ink/50 text-sm leading-relaxed">Não importa se você busca <span className="italic">roupas de santo perto de mim</span> em SP ou está em outro estado brasileiro.</p>
              </div>
              
              <div className="space-y-12">
                 <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center shadow-sm shrink-0 border border-brand-accent/50">
                       <MapPin className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                       <h4 className="font-bold text-brand-primary mb-2">Atendimento São Paulo</h4>
                       <p className="text-brand-ink/60 text-sm">Disponível para entrega local, retiradas e agendamentos presenciais para medição precisa.</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center shadow-sm shrink-0 border border-brand-accent/50">
                       <Zap className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                       <h4 className="font-bold text-brand-primary mb-2">Envio para Todo o Brasil</h4>
                       <p className="text-brand-ink/60 text-sm">Logística otimizada para que seu traje chegue seguro e impecável em qualquer região do país.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Respect & Trust */}
      <section className="py-20 md:pt-40 md:pb-20 px-6 bg-brand-bg relative overflow-hidden text-center">
         <div className="max-w-4xl mx-auto relative z-10 px-2 md:px-0">
            <Quote className="w-10 h-10 md:w-14 md:h-14 text-brand-secondary mx-auto mb-8 md:mb-10 opacity-30" />
            <h2 className="font-serif text-xl md:text-5xl mb-10 md:mb-12 text-brand-primary italic leading-snug md:leading-tight">
              "Vestir a fé é um ato de profundo respeito. Por isso, na <span className="not-italic font-bold">Raiz de Santo</span>, cada roupa é trabalhada com o silêncio e o preceito que o seu Orixá merece."
            </h2>
            <div className="flex items-center justify-center gap-4 text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
               <span className="w-6 h-px bg-brand-secondary" />
               Mãos e Axé Raiz de Santo
               <span className="w-6 h-px bg-brand-secondary" />
            </div>
         </div>
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
         </div>
      </section>

      {/* 7. CTA Final (Strong Conversion) */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-primary rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-24 text-center text-white shadow-2xl relative overflow-hidden"
          >
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-brand-secondary mx-auto mb-8 md:mb-10" />
              <h2 className="font-serif text-3xl md:text-6xl mb-8 md:mb-10 leading-tight text-white">
                Honre o seu caminho com <br />
                <span className="italic text-brand-secondary">um novo traje de axé.</span>
              </h2>
              <p className="text-base md:text-xl opacity-70 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed font-light">
                Inicie seu orçamento personalizado no WhatsApp. Atendimento ágil e respeitoso para cada casa e necessidade.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-secondary text-brand-primary px-10 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-black hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Iniciar Orçamento
                </a>
              </div>
              
              <p className="mt-10 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">Resposta em até 24h úteis</p>
              
              {/* Artistic shapes */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px] -mr-40 -mt-40" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[100px] -ml-40 -mb-40" />
           </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 md:py-24 px-6 bg-white border-t border-brand-accent/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 md:gap-20 mb-16 md:mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <img 
                src={LOGO_URL} 
                alt="Raiz de Santo" 
                width="48" 
                height="48" 
                loading="lazy"
                className="h-12 w-12 rounded-full border border-brand-primary/5" 
              />
              <span className="font-serif text-3xl font-bold tracking-tight text-brand-primary">Raiz de Santo</span>
            </div>
            <p className="text-brand-ink/50 max-w-sm leading-relaxed text-base font-light">
              Tornando-se referência em <span className="font-medium text-brand-primary">roupas de santo sob medida</span> através do respeito à tradição e ao cliente. Confeccionando fé em cada detalhe.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] opacity-30 mb-10">Explorar</h3>
            <ul className="space-y-6 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-secondary transition-colors underline-offset-8">Início</a></li>
              <li><a href="#como-funciona" className="hover:text-brand-secondary transition-colors underline-offset-8">Como Funciona</a></li>
              <li><a href="#diferenciais" className="hover:text-brand-secondary transition-colors underline-offset-8">Diferenciais</a></li>
              <li><a href="#pecas" className="hover:text-brand-secondary transition-colors underline-offset-8">Peças em Destaque</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] opacity-30 mb-10">Presença Social</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-500 hover:rotate-6 border border-brand-accent/40 shadow-sm"><Instagram className="w-6 h-6" /></a>
              <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-500 hover:-rotate-6 border border-brand-accent/40 shadow-sm"><Facebook className="w-6 h-6" /></a>
            </div>
            <div className="mt-10 pt-10 border-t border-brand-accent/20">
               <p className="text-xs text-brand-ink/40 font-medium">Atendimento Humanizado <br/> em todo o território nacional.</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-brand-accent/20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] opacity-20 text-center">
          <p>© 2026 Raiz de Santo. São Paulo | Brasil</p>
          <div className="flex gap-10">
            <span>Privacidade</span>
            <span>Segurança</span>
          </div>
        </div>
      </footer>

      {/* Sticky Floating WhatsApp (delicate corner design) */}
      <div className="fixed bottom-6 right-6 z-50">
         <a 
           href={whatsappUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
           aria-label="Falar no WhatsApp"
         >
           <MessageCircle className="w-6 h-6" />
           <span className="absolute right-full mr-4 bg-white text-brand-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-accent/30">
              Orçamento Rápido
           </span>
         </a>
      </div>
      </main>
    </div>
  );
}