"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  MessageCircle, 
  Quote, 
  Compass, 
  CheckCircle2, 
  ChevronRight,
  HandMetal
} from "lucide-react";

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";

export default function SobreClient() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans overflow-hidden">
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Nossa Essência e História
            </div>
            <h1 className="font-serif text-4xl md:text-7xl mb-8 text-brand-primary leading-tight">
              A Raiz de Santo Nasceu de <br />
              <span className="italic text-brand-secondary">Dentro da Fé</span>
            </h1>
            <p className="text-lg md:text-2xl text-brand-ink/70 leading-relaxed font-light mx-auto max-w-2xl">
              Não somos uma fábrica de roupas religiosas. Somos praticantes que um dia cansaram de não encontrar o que procuravam — e decidiram fazer com as próprias mãos.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-5 hidden lg:block">
          <HandMetal className="w-64 h-64 text-brand-primary" />
        </div>
      </header>

      {/* Seção 1 — A história */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-12 h-1 bg-brand-secondary rounded-full" />
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">Como tudo começou</h2>
            <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed font-light">
              <p>A Raiz de Santo nasceu de uma necessidade real, vivida por dentro do terreiro.</p>
              <p>
                Durante anos, nossa fundadora buscou roupas de santo que servissem de verdade — que respeitassem o corpo, durassem os rituais e carregassem o acabamento que o sagrado exige. O que encontrava, na maioria das vezes, eram peças industriais em tamanho padrão, tecidos finos que não aguentavam três lavagens e costureiras que não entendiam o preceito por trás de cada detalhe.
              </p>
              <p>
                A solução foi fazer ela mesma. Com décadas de experiência em alfaiataria convencional e uma vida inteira dentro da religião, ela uniu as duas coisas: a técnica apurada da costura profissional e o conhecimento profundo do que cada peça significa para quem vai usá-la.
              </p>
              <p>
                O que começou como uma solução pessoal virou um atelier. O atelier virou referência. E a referência chegou até você.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção 2 — O que nos move */}
      <section className="py-24 px-6 bg-brand-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">
              Respeito ao sagrado — <span className="italic text-brand-secondary">em cada ponto dado</span>
            </h2>
            <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed font-light">
              <p>
                Na Raiz de Santo, nenhuma peça é feita no automático. Cada encomenda começa com uma conversa. Queremos entender a sua casa, a sua linha, o seu Orixá, os seus preceitos. Só depois que entendemos o fundamento é que a costura começa.
              </p>
              <p>
                Acreditamos que uma roupa de santo bem feita é, em si, uma forma de respeito. Respeito ao cliente, ao Orixá, à entidade, à tradição que sustenta a religião há séculos.
              </p>
              <p className="font-medium text-brand-primary">
                Por isso não fazemos fast fashion religioso. Não cortamos caminho no acabamento. Não usamos tecido barato para aumentar margem. Fazemos o que prometemos, no prazo combinado, com o cuidado que o sagrado merece.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute -top-10 -right-10 opacity-5">
          <Sparkles className="w-40 h-40 text-brand-secondary" />
        </div>
      </section>

      {/* Seção 3 — Nossa fundadora */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-brand-secondary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
                Fundadora
              </div>
              <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight text-brand-primary">
                Mãos que <br /> <span className="italic text-brand-secondary">entendem o axé</span>
              </h2>
              <div className="space-y-6 text-brand-ink/70 leading-relaxed text-lg font-light">
                <p>
                  Nossa fundadora carrega duas histórias que se tornaram uma só: a de costureira profissional, formada na alfaiataria tradicional, com décadas de experiência em modelagem, corte e acabamento — e a de praticante da religião, que sabe o que significa chegar ao pé do santo, o que a entidade pede e o que cada detalhe da vestimenta representa.
                </p>
                <p>
                  Essa combinação é rara. E é ela que faz toda a diferença no resultado final.
                </p>
                <p>
                  Quando você encomenda uma peça na Raiz de Santo, não está falando com um vendedor. Está falando com alguém que já usou roupa de ração, que já sentiu o desconforto de uma saia que não tem roda suficiente, que já chegou a um ritual com uma peça que não servia — e que decidiu que isso não precisava mais acontecer com ninguém.
                </p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }} 
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="p-8 md:p-12 bg-brand-bg rounded-[2.5rem] border border-brand-accent/30 relative"
            >
               <Quote className="absolute -top-6 -left-6 w-12 h-12 text-brand-secondary/30" />
               <p className="font-serif text-2xl md:text-3xl text-brand-primary italic leading-relaxed mb-6">
                  &quot;Minha missão é garantir que você chegue ao pé do seu santo sentindo-se impecável, confortável e digno da sua fé.&quot;
               </p>
               <p className="text-sm font-bold uppercase tracking-[0.4em] text-brand-primary opacity-50">— Fundadora, Raiz de Santo</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção 4 — Nossos valores */}
      <section className="py-24 md:py-32 px-6 bg-brand-bg border-y border-brand-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 text-brand-primary leading-tight">O que guia cada <span className="italic">decisão que tomamos</span></h2>
            <div className="w-16 h-1 bg-brand-secondary mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                icon: Compass, 
                title: "Respeito ao preceito", 
                desc: "Se uma peça precisa de silêncio durante a confecção ou detalhe que só faz sentido dentro da sua tradição — nós respeitamos." 
              },
              { 
                icon: ShieldCheck, 
                title: "Qualidade que honra a fé", 
                desc: "Não economizamos no acabamento. Usamos os melhores tecidos e reforçamos costuras nos pontos críticos." 
              },
              { 
                icon: CheckCircle2, 
                title: "Transparência total", 
                desc: "Preço combinado desde o início, sem surpresa no final. Prazo real, sem promessa que não podemos cumprir." 
              },
              { 
                icon: Heart, 
                title: "Acessibilidade sem concessão", 
                desc: "Acreditamos que uma roupa de santo digna não deve ser privilégio de quem tem muito dinheiro. Mão de obra a partir de R$150." 
              },
              { 
                icon: MessageCircle, 
                title: "Atendimento humanizado", 
                desc: "Sabemos que roupas de santo carregam emoções. Atendemos com paciência e com o cuidado de quem entende o que está em jogo." 
              },
              { 
                icon: Zap, 
                title: "Olhar de Alfaiate", 
                desc: "Cada bainha, cada bico de lese e cada bordado é revisado para garantir total alinhamento e perfeição." 
              },
            ].map((valor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-brand-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center mb-8 border border-brand-accent/50 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                  <valor.icon className="w-6 h-6 text-brand-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-brand-primary leading-tight">{valor.title}</h3>
                <p className="text-brand-ink/70 text-sm leading-relaxed font-light">{valor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5 — Números que contam a história */}
      <section className="py-24 px-6 bg-brand-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Peças confeccionadas", value: "+500", desc: "Vestidos com cuidado e respeito." },
              { label: "Estados Atendidos", value: "Todos", desc: "Presencial em SP e envio nacional." },
              { label: "Mão de obra", value: "R$150", desc: "A partir de. Alta costura ao seu alcance." },
              { label: "Compromisso", value: "Zero", desc: "Zero compromisso com o atalho." },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="text-5xl md:text-7xl font-serif font-bold text-brand-secondary drop-shadow-sm">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">{stat.label}</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60 font-light max-w-[200px] mx-auto">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 6 — O que nos diferencia */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
           <div className="flex-1 relative">
               <div className="relative z-10 p-10 md:p-16 bg-white rounded-[4rem] border border-brand-accent/50 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-8 leading-tight">Não somos uma loja. <br /><span className="italic text-brand-secondary">Somos um atelier.</span></h2>
                  <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed font-light relative z-10">
                    <p>
                      A diferença pode parecer pequena, mas muda tudo. Uma loja vende o que tem em estoque. Um atelier faz o que você precisa — do jeito que você precisa, no tamanho que serve no seu corpo e com o fundamento que a sua casa exige.
                    </p>
                    <p>
                      Na Raiz de Santo, não existe &quot;mais ou menos&quot;. Não existe &quot;serve de qualquer jeito&quot;. Existe a peça certa, feita para a pessoa certa, para o momento certo.
                    </p>
                    <p>
                      Se você já passou pela experiência de comprar uma roupa de santo que não serviu, que não durou ou que chegou diferente do que foi prometido — sabe exatamente o que estamos falando.
                    </p>
                  </div>
               </div>
               
               {/* Decorative dots */}
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(circle,theme(colors.brand.secondary/20)_1px,transparent_1px)] bg-[size:20px_20px] -z-10" />
           </div>
           
           <div className="flex-1 space-y-8">
              <h3 className="font-serif text-2xl md:text-3xl text-brand-primary mb-12">Por que escolher o atelier?</h3>
              {[
                "Personalização absoluta do fundamento à modelagem.",
                "Ajuste perfeito para QUALQUER tipo de corpo.",
                "Escolha livre de tecidos, bicos e acabamentos.",
                "Conversa direta com quem realmente costura a peça.",
                "Garantia de durabilidade para anos de rituais."
              ].map((diff, i) => (
                <div key={i} className="flex gap-4 items-center p-6 bg-white rounded-3xl border border-brand-accent/20 hover:border-brand-secondary transition-colors group">
                   <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center shrink-0 group-hover:bg-brand-secondary transition-colors">
                      <ChevronRight className="w-5 h-5 text-brand-primary" />
                   </div>
                   <p className="text-brand-ink/80 font-medium group-hover:text-brand-primary transition-colors">{diff}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA final Section */}
      <section className="py-24 px-6 bg-brand-primary relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-12 text-white leading-tight">
              Quer conhecer o nosso <span className="italic text-brand-secondary">trabalho de perto?</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Venha visitar o atelier em São Paulo ou fale com a gente pelo WhatsApp. A conversa é gratuita, sem compromisso e sem pressa.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={whatsappUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-brand-secondary text-brand-primary px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-2xl"
              >
                <MessageCircle className="w-6 h-6" />
                Falar com a costureira agora
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
