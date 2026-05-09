"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  MessageCircle, 
  Video, 
  MapPin, 
  Truck, 
  ChevronRight, 
  Plus, 
  Minus,
  CheckCircle2,
  Clock,
  Compass,
  Scissors,
  Quote
} from "lucide-react";
import { useState } from "react";

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";

const faqs = [
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer: "Depende da complexidade da peça e da nossa agenda no momento do pedido. Combinamos o prazo desde o início, de forma realista — e cumprimos o que prometemos. Em geral, peças simples ficam prontas em 2 a 3 semanas. Trajes mais elaborados ou kits de obrigação podem levar mais tempo. Nos avise com antecedência sempre que puder."
  },
  {
    question: "Posso trazer meu próprio tecido?",
    answer: "Sim, sem nenhuma taxa adicional. Costuramos com o material que você trouxer. Se não tiver certeza sobre o tipo de tecido, a gente orienta antes de você comprar."
  },
  {
    question: "Atende quem está fora de São Paulo?",
    answer: "Sim. Atendemos todo o Brasil por WhatsApp e videochamada. Enviamos um guia simples para você tirar suas próprias medidas e cuidamos do envio com rastreamento."
  },
  {
    question: "Vocês fazem kits de obrigação completos?",
    answer: "Sim. Trabalhamos com kits para obrigações de 1, 3, 7 e 21 anos. Entre em contato com antecedência e nos conte o que a sua casa pede — montamos o kit completo com prazo e preço fechados."
  },
  {
    question: "O orçamento tem algum custo?",
    answer: "Não. A conversa inicial e o orçamento são totalmente gratuitos e sem compromisso."
  }
];

export default function ContatoClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-brand-bg font-sans overflow-hidden">
      {/* Hero Section */}
      <header className="pt-32 md:pt-48 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Fale com a gente
            </div>
            <h1 className="font-serif text-4xl md:text-7xl mb-8 text-brand-primary leading-tight">
              Vamos Conversar — Sua Roupa de <br />
              <span className="italic text-brand-secondary">Santo Começa Aqui</span>
            </h1>
            <p className="text-lg md:text-2xl text-brand-ink/70 leading-relaxed font-light mx-auto max-w-2xl">
              Atendemos com calma, sem julgamento e sem pressa. Conta pra gente o que você precisa e a gente cuida do resto.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Seção 1 — Texto de abertura */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-center md:text-left"
          >
            <div className="w-12 h-1 bg-brand-secondary mx-auto md:mx-0 rounded-full" />
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">Um orçamento que começa com escuta</h2>
            <div className="space-y-6 text-brand-ink/80 text-lg md:text-xl leading-relaxed font-light">
              <p>
                Na Raiz de Santo, nenhuma encomenda começa com um formulário frio ou um catálogo de opções. Começa com uma conversa.
              </p>
              <p>
                Queremos entender a sua necessidade antes de falar qualquer número: o tipo de peça, a sua linha ou nação, os preceitos da sua casa, o prazo que você tem e o que você pode investir. Só depois de ouvir tudo isso é que conseguimos te dar um orçamento honesto — sem surpresa no final e sem promessa que não podemos cumprir.
              </p>
              <p className="font-medium text-brand-primary italic">
                O atendimento é humanizado porque sabemos que roupas de santo não são compras comuns. Elas marcam momentos importantes da vida religiosa. E merece o cuidado que isso exige.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção 2 — Canais de atendimento */}
      <section className="py-24 px-6 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary">Como falar <span className="italic">com a gente</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <motion.a 
              href={whatsappUrl}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-secondary transition-all">
                <MessageCircle className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-brand-primary">WhatsApp</h3>
              <p className="text-brand-ink/60 text-sm mb-8 leading-relaxed">O jeito mais rápido e direto de falar com a nossa costureira. Respondemos com agilidade.</p>
              <div className="mt-auto flex items-center gap-2 text-brand-primary font-bold">
                (11) 96903-5273 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* Videochamada */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <Video className="w-8 h-8 text-brand-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-brand-primary">Videochamada</h3>
              <p className="text-brand-ink/60 text-sm mb-8 leading-relaxed">Se você está fora de São Paulo, agendamos uma videochamada guiada para tirar medidas ou ver tecidos.</p>
              <div className="mt-auto text-brand-primary font-bold opacity-60">Agendado via WhatsApp</div>
            </motion.div>

            {/* Presencial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <MapPin className="w-8 h-8 text-brand-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-brand-primary">Atendimento Presencial</h3>
              <p className="text-brand-ink/60 text-sm mb-8 leading-relaxed">Venha tirar medidas e ver tecidos pessoalmente no nosso atelier na capital paulista.</p>
              <div className="mt-auto text-brand-primary font-bold opacity-60">Agende sua visita</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção 3 — Como preparar seu orçamento */}
      <section className="py-24 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-8 leading-tight">Como preparar <br /><span className="italic text-brand-secondary">seu orçamento</span></h2>
              <p className="text-lg text-brand-ink/70 leading-relaxed font-light italic border-l-4 border-brand-secondary pl-6 mb-12">
                &quot;Quanto mais detalhes, mais preciso o orçamento&quot;
              </p>
              <p className="text-brand-ink/80 mb-8 leading-relaxed">
                Não precisa ter tudo definido antes de falar com a gente — estamos aqui para ajudar a organizar as ideias também. Mas se quiser agilizar, estas informações ajudam muito:
              </p>
              
              <div className="grid gap-6">
                {[
                  { title: "1. O tipo de peça", desc: "Roupa de ração, saia de baiana, camisu, pano da costa, traje completo, kit de obrigação?" },
                  { title: "2. A linha ou nação", desc: "Umbanda, Candomblé Ketu, Angola, Jeje? Algum Orixá ou entidade específica?" },
                  { title: "3. O tecido", desc: "Já tem o tecido ou precisa de indicação? Percal, lese, linho, algodão?" },
                  { title: "4. O prazo", desc: "Para quando você precisa da peça? Quanto mais cedo nos avisar, melhor." },
                  { title: "5. A sua localização", desc: "Para que a gente já calcule o frete se o envio for necessário." },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-brand-bg border border-brand-accent/20">
                    <h4 className="font-bold text-brand-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-brand-ink/60 uppercase tracking-tight leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full flex justify-center">
             <div className="relative p-10 bg-brand-bg rounded-[4rem] border border-brand-accent/50 shadow-2xl">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary/10 rounded-full flex items-center justify-center -z-10">
                   <Scissors className="w-20 h-20 text-brand-secondary opacity-20" />
                </div>
                <div className="space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                         <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <p className="font-bold text-brand-primary italic">Orçamento Gratuito</p>
                   </div>
                   <p className="text-brand-ink/70 leading-relaxed font-serif text-xl border-t border-brand-accent/30 pt-8">
                      &quot;A costura afro-religiosa é técnica e fé. Tratamos seu pedido com o respeito que sua casa exige.&quot;
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Seção 4 — Onde nos encontrar */}
      <section className="py-24 px-6 bg-brand-bg border-y border-brand-accent/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-12">Localização <span className="italic">e envio</span></h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-brand-accent/20">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-serif text-brand-primary">Atelier em São Paulo — Capital</h3>
                    <p className="text-brand-ink/70 leading-relaxed">Atendimento presencial sob agendamento. Estamos na capital paulista e também atendemos clientes da Grande SP.</p>
                    <a href={whatsappUrl} className="mt-4 inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-widest hover:text-brand-secondary transition-colors">
                      Agendar visita <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-brand-accent/20">
                    <Truck className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-serif text-brand-primary">Envio para todo o Brasil</h3>
                    <p className="text-brand-ink/70 leading-relaxed">Enviamos via Correios (PAC e Sedex) e transportadora para todos os estados, com rastreamento do início ao fim.</p>
                    <p className="mt-4 text-sm text-brand-ink/50 italic">Já vestimos filhos de santo em todas as regiões do país.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
             <div className="w-full aspect-video bg-white rounded-[3rem] border border-brand-accent/30 p-2 overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/truck/800/450')] bg-cover opacity-10 grayscale" />
                <div className="h-full w-full rounded-[2.5rem] bg-brand-bg flex flex-col items-center justify-center text-center p-10 border border-brand-accent/20">
                   <Compass className="w-16 h-16 text-brand-primary mb-6 opacity-20" />
                   <p className="font-serif text-2xl text-brand-primary italic mb-2">São Paulo | Brasil</p>
                   <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-ink/40">Entrega Nacional Garantida</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Seção 5 — Perguntas frequentes */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 underline-offset-8">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-6">Dúvidas <span className="italic">comuns</span></h2>
            <p className="text-brand-ink/60 uppercase text-xs font-bold tracking-widest">Antes de pedir o orçamento</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-brand-accent/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-8 text-left flex items-center justify-between group bg-white"
                >
                  <span className="font-serif text-xl text-brand-primary group-hover:text-brand-secondary transition-colors">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center shrink-0">
                    {openFaq === idx ? <Minus className="w-4 h-4 text-brand-primary" /> : <Plus className="w-4 h-4 text-brand-primary" />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-8 pt-0 text-brand-ink/70 leading-relaxed border-t border-brand-accent/10 font-light">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 6 — Citação de encerramento */}
      <section className="py-24 px-6 bg-brand-bg border-t border-brand-accent/20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Quote className="w-12 h-12 text-brand-secondary mx-auto mb-10 opacity-30" />
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary italic leading-tight mb-8">
              &quot;O respeito ao sagrado começa com uma conversa honesta. Estamos aqui para ouvir o que você precisa.&quot;
            </h2>
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-brand-primary opacity-50">— Raiz de Santo</p>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 px-6 bg-brand-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-8 text-white leading-tight">
              Pronto para <span className="italic text-brand-secondary">começar?</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              A primeira mensagem é gratuita, sem compromisso e sem pressa. Fala com a gente — a gente resolve.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={whatsappUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-brand-secondary text-brand-primary px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-2xl"
              >
                <MessageCircle className="w-6 h-6" />
                Falar pelo WhatsApp agora
              </a>
            </div>
            
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
               <Link href="/roupas-umbanda" className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/15 transition-all text-white font-medium flex items-center justify-center gap-3 group">
                  Ver roupas de Umbanda <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-all" />
               </Link>
               <Link href="/roupas-candomble" className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/15 transition-all text-white font-medium flex items-center justify-center gap-3 group">
                  Ver roupas de Candomblé <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-all" />
               </Link>
               <Link href="/costura-sob-medida" className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/15 transition-all text-white font-medium flex items-center justify-center gap-3 group">
                  Conhecer a costura <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-all" />
               </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
