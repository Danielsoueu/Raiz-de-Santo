"use client";

import { motion } from "motion/react";
import { ChevronLeft, Calendar, User, Clock, Share2, BookOpen } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  author: string;
  readTime: string;
  content: React.ReactNode;
}

const blogPosts: Record<string, BlogPost> = {
  "como-lavar-sua-roupa-de-santo-sem-danificar-o-axe": {
    title: "Como lavar sua roupa de santo sem danificar o axé passo a passo",
    date: "16 de Maio, 2026",
    author: "Raiz de Santo",
    readTime: "8 min de leitura",
    content: (
      <div className="space-y-12">
        <section className="prose prose-lg max-w-none prose-brand">
          <p className="lead text-xl text-brand-ink/80 leading-relaxed font-light italic border-l-4 border-brand-secondary pl-6">
            Lavar as vestimentas de rituais é um ato de profundo respeito. Muitas vezes, temos dúvidas sobre como higienizar essas peças. Queremos sempre preservar a energia espiritual nelas.
          </p>
          <p>
            Cuidar desses itens é essencial para estar pronto para rituais. O zelo com o que vestimos reflete diretamente na nossa conexão com o sagrado.
          </p>
          <p>
            Este guia mostra técnicas simples para lavar essas peças com segurança. Queremos que você mantenha a durabilidade dos tecidos. E também que renove o brilho das suas vestes.
          </p>
        </section>

        <section className="bg-brand-bg md:p-10 p-6 rounded-[2.5rem] border border-brand-accent/30">
          <h3 className="font-serif text-2xl text-brand-primary mb-6">Principais pontos de atenção</h3>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0 text-brand-ink/70">
            {[
              "Respeite a sacralidade de cada peça durante a limpeza.",
              "Utilize produtos suaves para não agredir as fibras naturais.",
              "A secagem à sombra é essencial para manter a energia positiva.",
              "Evite misturar vestimentas rituais com peças de uso cotidiano.",
              "Mantenha o pensamento elevado enquanto realiza o processo."
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">A importância espiritual da conservação das vestimentas religiosas</h2>
          <p>Você sabia que sua roupa de santo é uma extensão da sua energia? Ela não é só um tecido. É um escudo e um canal para se comunicar com o sagrado.</p>
          <p>Cuidar bem da sua roupa mostra seu amor e respeito pela religião. Ao cuidar da roupa, você cuida da sua energia espiritual.</p>
          
          <h3 className="font-serif text-2xl text-brand-primary mt-8">O significado do axé nas roupas de santo</h3>
          <p>Cada roupa tem o axé, uma força vital. No alfa de umbanda, ela protege e precisa estar limpa. Isso ajuda a energia dos guias a passar sem problemas.</p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Diferenças entre o cuidado com roupas de Umbanda e Candomblé</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden border border-brand-accent/20">
              <thead className="bg-brand-bg/50">
                <tr>
                  <th className="p-4 font-bold text-brand-primary border-b border-brand-accent/20">Aspecto</th>
                  <th className="p-4 font-bold text-brand-primary border-b border-brand-accent/20">Umbanda</th>
                  <th className="p-4 font-bold text-brand-primary border-b border-brand-accent/20">Candomblé</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-brand-bg/10 transition-colors">
                  <td className="p-4 border-b border-brand-accent/10">Frequência</td>
                  <td className="p-4 border-b border-brand-accent/10">Após cada gira</td>
                  <td className="p-4 border-b border-brand-accent/10">Conforme o ritual</td>
                </tr>
                <tr className="hover:bg-brand-bg/10 transition-colors">
                  <td className="p-4 border-b border-brand-accent/10">Produtos</td>
                  <td className="p-4 border-b border-brand-accent/10">Sabão neutro</td>
                  <td className="p-4 border-b border-brand-accent/10">Ervas e elementos</td>
                </tr>
                <tr className="hover:bg-brand-bg/10 transition-colors">
                  <td className="p-4">Secagem</td>
                  <td className="p-4">Sombra</td>
                  <td className="p-4">Local sagrado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Preparação e Lavagem</h2>
          <p>Cuidar do axé começa antes de lavar. Inspecione cada detalhe, como o distintivo de santo. Veja se há fios soltos ou pedrarias que podem cair. Se encontrar danos, conserte antes de lavar.</p>
          <p><strong>Dica de Ouro:</strong> Separe as peças por orixá. Isso evita misturar energias de diferentes nações e fundamentos.</p>
          
          <div className="p-8 bg-brand-bg rounded-3xl border border-brand-accent/20">
            <h4 className="font-bold text-brand-primary mb-4">Passo a Passo da Lavagem</h4>
            <ol className="space-y-4 list-decimal pl-5 text-brand-ink/80">
              <li>Encha uma bacia com água limpa e adicione sabão neutro ou de coco.</li>
              <li>Mergulhe a peça suavemente, sem esfregar com força.</li>
              <li>Enxágue em água corrente até remover todo o resíduo.</li>
              <li>Adicione um banho de ervas frescas (como boldo ou arruda) se o fundamento da sua casa permitir.</li>
            </ol>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Roupas Brancas e Manchas</h2>
          <p>Manter a branca umbanda limpa ajuda a manter a energia alta. Para manchas, use bicarbonato de sódio ou vinagre branco — são seguros e eficazes. A luz do sol da manhã ajuda a clarear, mas não esqueça que a secagem final deve ser à sombra.</p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Cuidados por Entidade</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-brand-accent/30 rounded-3xl shadow-sm">
              <h4 className="font-serif text-xl text-brand-primary mb-2">Exu e Pombagira</h4>
              <p className="text-sm text-brand-ink/70">Cetim e veludo não gostam de químicos. Lave à mão e nunca torça para não quebrar as fibras.</p>
            </div>
            <div className="p-6 bg-white border border-brand-accent/30 rounded-3xl shadow-sm">
              <h4 className="font-serif text-xl text-brand-primary mb-2">Pretos Velhos</h4>
              <p className="text-sm text-brand-ink/70">Algodão rústico deve ser lavado com água fria para evitar encolhimento.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Quando buscar ajuda profissional?</h2>
          <p>Alguns reparos não podem ser feitos em casa. Rasgos em áreas de tensão ou desprendimento de bordados complexos exigem um atelier especializado. Nossa costureira entende que cada ponto e dobra têm um significado e fará os ajustes sem alterar a energia da peça.</p>
        </section>

        <section className="py-12 border-y border-brand-accent/20">
           <blockquote className="text-center italic font-serif text-2xl text-brand-primary max-w-2xl mx-auto leading-relaxed">
             &quot;O cuidado com o que vestimos no sagrado é o reflexo do respeito que temos pela nossa própria espiritualidade.&quot;
           </blockquote>
        </section>

        <section className="space-y-8">
           <h2 className="font-serif text-4xl text-brand-primary text-center">Conclusão</h2>
           <p className="text-center text-lg text-brand-ink/80 max-w-3xl mx-auto leading-relaxed">
             Cuidar das vestimentas mostra respeito pelo seu orixá. Ao lavar e conservar bem, sua roupa fica pronta para a gira ou iniciação. Compartilhe este conhecimento com seus irmãos de fé!
           </p>
        </section>
      </div>
    )
  },
  "5-tipos-de-rendas-ideais": {
    title: "5 tipos de rendas ideais para saiões de Candomblé",
    date: "12 de Maio, 2026",
    author: "Raiz de Santo",
    readTime: "6 min de leitura",
    content: (
      <div className="space-y-12">
        <section className="prose prose-lg max-w-none prose-brand">
          <p className="lead text-xl text-brand-ink/80 leading-relaxed font-light italic border-l-4 border-brand-secondary pl-6">
            O saião é uma das peças mais importantes do Candomblé. A renda escolhida não é apenas estética — ela carrega simbolismo, tradição e respeito ao Orixá.
          </p>
          <p>
            Neste guia, apresentamos 5 tipos de rendas ideais para confeccionar seu saião com elegância e fundamento. Cada uma tem características únicas que valorizam sua peça.
          </p>
        </section>

        <section className="bg-brand-bg md:p-10 p-6 rounded-[2.5rem] border border-brand-accent/30">
          <h3 className="font-serif text-2xl text-brand-primary mb-6">As 5 rendas mais recomendadas</h3>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0 text-brand-ink/70">
            {[
              "Renda Lese — leve e delicada, ideal para Saias de Alodê",
              "Renda Guipir — mais encorpada, perfeita para bainhas reforçadas",
              "Renda Renascença — tradicional e elegante, excelente acabamento",
              "Renda Richelieu — sofisticada, para ocasiões especiais",
              "Renda Bordada à mão — única e exclusiva, para saídas de santo"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">1. Renda Lese: Leveza e Tradição</h2>
          <p>A renda Lese é uma das mais tradicionais no Candomblé. Sua trama aberta e leveza a tornam perfeita para saias de alodê e camisas de Orixá.</p>
          <p><strong>Características:</strong> Tecido fino, transparente, com desenhos florais ou geométricos. Requer forro em tecido opaco como cetim ou seda.</p>
          <p><strong>Preço médio:</strong> R$ 80–150/metro</p>
          <p><strong>Onde usar:</strong> Saias de Alodê, Saiões de Iemanjá, Oxum e outras divindades femininas.</p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">2. Renda Guipir: Resistência e Elegância</h2>
          <p>O Guipir é uma renda mais encorpada, com desenhos aplicados sobre uma base que depois é removida. O resultado é uma trama robusta e durável.</p>
          <p><strong>Características:</strong> Mais grossa que a Lese, não precisa de forro em algumas aplicações. Ideal para bainhas e detalhes decorativos.</p>
          <p><strong>Preço médio:</strong> R$ 120–250/metro</p>
          <p><strong>Onde usar:</strong> Bainhas de saia, gola de camisa, detalhes em pano da costa.</p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">3. Renda Renascença: Clássica e Versátil</h2>
          <p>A Renda Renascença é feita com técnica de agulha e linha, criando desenhos elaborados. É uma das preferidas para peças cerimoniais.</p>
          <p><strong>Características:</strong> Alta durabilidade, desenho rebuscado, acabamento premium.</p>
          <p><strong>Preço médio:</strong> R$ 150–300/metro</p>
          <p><strong>Onde usar:</strong> Saias completas, capas, trajes de cerimônia.</p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Dicas de Conservação</h2>
          <div className="p-8 bg-brand-bg rounded-3xl border border-brand-accent/20">
            <h4 className="font-bold text-brand-primary mb-4">Cuidados essenciais com suas rendas</h4>
            <ol className="space-y-4 list-decimal pl-5 text-brand-ink/80">
              <li>Lave sempre à mão, com sabão neutro.</li>
              <li>Nunca torça a renda — pressione suavemente para retirar o excesso de água.</li>
              <li>Seque à sombra, estendida sobre uma toalha branca.</li>
              <li>Guarde em local seco, enrolada em tecido de algodão branco.</li>
              <li>Evite contato direto com perfumes ou produtos químicos.</li>
            </ol>
          </div>
        </section>

        <section className="py-12 border-y border-brand-accent/20">
           <blockquote className="text-center italic font-serif text-2xl text-brand-primary max-w-2xl mx-auto leading-relaxed">
             &quot;A renda certa transforma um simples tecido em uma vestimenta sagrada.&quot;
           </blockquote>
        </section>

        <section className="space-y-8">
           <h2 className="font-serif text-4xl text-brand-primary text-center">Conclusão</h2>
           <p className="text-center text-lg text-brand-ink/80 max-w-3xl mx-auto leading-relaxed">
             Escolher a renda ideal para seu saião é um ato de cuidado e respeito. Cada tipo tem sua função, beleza e significado. Conte conosco para orientar sua escolha!
           </p>
        </section>
      </div>
    )
  },
  "importancia-pano-da-costa": {
    title: "A importância do Pano da Costa no fundamento do Iyawó",
    date: "08 de Maio, 2026",
    author: "Raiz de Santo",
    readTime: "7 min de leitura",
    content: (
      <div className="space-y-12">
        <section className="prose prose-lg max-w-none prose-brand">
          <p className="lead text-xl text-brand-ink/80 leading-relaxed font-light italic border-l-4 border-brand-secondary pl-6">
            O Pano da Costa não é apenas um acessório — é um símbolo ancestral que conecta o Iyawó às suas raízes africanas e atua como verdadeiro escudo energético durante a iniciação.
          </p>
          <p>
            Neste artigo, exploramos o significado profundo desta peça fundamental e seu papel protetor no processo de feitura do santo.
          </p>
        </section>

        <section className="bg-brand-bg md:p-10 p-6 rounded-[2.5rem] border border-brand-accent/30">
          <h3 className="font-serif text-2xl text-brand-primary mb-6">Principais funções do Pano da Costa</h3>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0 text-brand-ink/70">
            {[
              "Proteção energética contra influências negativas",
              "Conexão com as tradições africanas ancestrais",
              "Símbolo de status dentro do Candomblé",
              "Elemento estético que valoriza a vestimenta do Iyawó"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Origem Histórica</h2>
          <p>O Pano da Costa tem origem nas tecelãs africanas, especialmente das regiões da Costa da Mina e Daomé. Era tradicionalmente tecido em teares manuais com fios de algodão tingidos naturalmente.</p>
          <p><strong>Curiosidade:</strong> Antigamente, quanto mais elaborado o pano, maior o status social de quem o usava na África.</p>
        </section>

        <section className="py-12 border-y border-brand-accent/20">
           <blockquote className="text-center italic font-serif text-2xl text-brand-primary max-w-2xl mx-auto leading-relaxed">
             &quot;O Pano da Costa carrega em cada fio a sabedoria de nossos ancestrais.&quot;
           </blockquote>
        </section>

        <section className="space-y-8">
           <h2 className="font-serif text-4xl text-brand-primary text-center">Conclusão</h2>
           <p className="text-center text-lg text-brand-ink/80 max-w-3xl mx-auto leading-relaxed">
             Entender o significado do Pano da Costa é honrar nossa herança cultural e espiritual. Esta peça continua sendo essencial no Candomblé contemporâneo.
           </p>
        </section>
      </div>
    )
  },
  "checklist-roupa-de-racao": {
    title: "Roupas de Rações: O que não pode faltar no seu enxoval",
    date: "04 de Maio, 2026",
    author: "Raiz de Santo",
    readTime: "5 min de leitura",
    content: (
      <div className="space-y-12">
        <section className="prose prose-lg max-w-none prose-brand">
          <p className="lead text-xl text-brand-ink/80 leading-relaxed font-light italic border-l-4 border-brand-secondary pl-6">
            Montar uma ração completa é essencial para qualquer filho de santo. Este checklist ajuda iniciantes e veteranos a organizarem seu enxoval religioso.
          </p>
        </section>

        <section className="bg-brand-bg md:p-10 p-6 rounded-[2.5rem] border border-brand-accent/30">
          <h3 className="font-serif text-2xl text-brand-primary mb-6">Itens essenciais da ração básica</h3>
          <ul className="space-y-3 list-none p-0 text-brand-ink/70">
            {[
              "3 camisas brancas de manga longa (algodão ou percal)",
              "3 calças brancas confortáveis",
              "Meias brancas de algodão",
              "Roupa íntima branca nova",
              "Toalha pessoal exclusiva para uso religioso",
              "Pano da Costa branco",
              "Terço ou guia branca"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-12 border-y border-brand-accent/20">
           <blockquote className="text-center italic font-serif text-2xl text-brand-primary max-w-2xl mx-auto leading-relaxed">
             &quot;Uma ração bem organizada é o primeiro passo para uma vida religiosa equilibrada.&quot;
           </blockquote>
        </section>

        <section className="space-y-8">
           <h2 className="font-serif text-4xl text-brand-primary text-center">Conclusão</h2>
           <p className="text-center text-lg text-brand-ink/80 max-w-3xl mx-auto leading-relaxed">
             Ter seu enxoval completo traz tranquilidade e organização para sua jornada espiritual. Consulte sempre seu Zelador para orientações específicas da sua casa.
           </p>
        </section>
      </div>
    )
  },
  "significado-das-cores": {
    title: "Significado das cores nas roupas de entidades de Umbanda",
    date: "01 de Maio, 2026",
    author: "Raiz de Santo",
    readTime: "10 min de leitura",
    content: (
      <div className="space-y-12">
        <section className="prose prose-lg max-w-none prose-brand">
          <p className="lead text-xl text-brand-ink/80 leading-relaxed font-light italic border-l-4 border-brand-secondary pl-6">
            Cada cor vibra em uma frequência específica e atrai a falange correta para o trabalho espiritual. Conhecer esses significados é fundamental para escolher as roupas adequadas.
          </p>
        </section>

        <section className="bg-brand-bg md:p-10 p-6 rounded-[2.5rem] border border-brand-accent/30">
          <h3 className="font-serif text-2xl text-brand-primary mb-6">Cores principais e suas entidades</h3>
          <div className="grid gap-4">
            {[
              { color: "Branco", entities: "Oxalá, todas as falanges (neutro)", meaning: "Paz, pureza e elevação espiritual" },
              { color: "Azul", entities: "Iemanjá, Oxum", meaning: "Calma, serenidade e maternidade" },
              { color: "Rosa", entities: "Oxum, Iansã", meaning: "Amor, delicadeza e feminilidade" },
              { color: "Vermelho", entities: "Iansã, Exu", meaning: "Força, paixão e movimento" },
              { color: "Verde", entities: "Oxossi, Caboclos", meaning: "Natureza, cura e fartura" },
              { color: "Preto", entities: "Exu, Pombagira", meaning: "Proteção, transformação e mistério" },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-brand-accent/20">
                <p className="font-bold text-brand-primary">{item.color}</p>
                <p className="text-sm text-brand-ink/70"><strong>Entidades:</strong> {item.entities}</p>
                <p className="text-sm text-brand-ink/60"><strong>Significado:</strong> {item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-y border-brand-accent/20">
           <blockquote className="text-center italic font-serif text-2xl text-brand-primary max-w-2xl mx-auto leading-relaxed">
             &quot;As cores são pontes vibracionais entre o físico e o espiritual.&quot;
           </blockquote>
        </section>

        <section className="space-y-8">
           <h2 className="font-serif text-4xl text-brand-primary text-center">Conclusão</h2>
           <p className="text-center text-lg text-brand-ink/80 max-w-3xl mx-auto leading-relaxed">
             Escolher a cor certa potencializa seu trabalho mediúnico e demonstra respeito à entidade que incorpora. Sempre consulte seu dirigente para confirmar as cores da sua casa.
           </p>
        </section>
      </div>
    )
  }
};

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen pt-48 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-brand-primary mb-4">Post não encontrado</h1>
          <Link href="/blog" className="text-brand-secondary hover:underline">Voltar para o blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-ink">
      <div className="pt-32 md:pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-ink/50 hover:text-brand-primary transition-colors font-bold uppercase tracking-widest text-xs">
              <ChevronLeft className="w-4 h-4" /> Voltar para o Blog
            </Link>
          </motion.div>

          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex flex-wrap gap-6 mb-8 text-xs font-bold uppercase tracking-widest text-brand-ink/40">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-brand-secondary" /> {post.date}</div>
              <div className="flex items-center gap-2"><User className="w-4 h-4 text-brand-secondary" /> {post.author}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-secondary" /> {post.readTime}</div>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-brand-primary leading-tight md:leading-[1.1] mb-8">
              {post.title}
            </h1>
          </motion.header>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-16 rounded-[4rem] border border-brand-accent/20 shadow-sm"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
                 <BookOpen className="w-40 h-40 text-brand-primary" />
              </div>
              
              <div className="relative z-10">
                {post.content}
              </div>
            </div>

            {/* Footer / Share */}
            <div className="mt-20 pt-10 border-t border-brand-accent/20 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center">
                     <Share2 className="w-5 h-5 text-brand-primary" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-ink/60 underline cursor-pointer hover:text-brand-primary transition-colors">Compartilhe este conhecimento</p>
               </div>
               
               <a 
                 href="https://wa.me/5511969035273"
                 className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-lg"
               >
                 Tirar dúvidas no WhatsApp
               </a>
            </div>
          </motion.article>

          {/* More posts */}
          <div className="mt-32">
             <h3 className="font-serif text-3xl text-brand-primary mb-12 text-center md:text-left">Continue sua leitura</h3>
             <div className="grid md:grid-cols-2 gap-8">
                <Link href="/blog" className="p-8 bg-brand-bg rounded-[2.5rem] border border-brand-accent/30 hover:shadow-lg transition-all group">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40 mb-4">Veja mais</p>
                   <h4 className="font-serif text-xl text-brand-primary group-hover:text-brand-secondary transition-colors">Confira outros artigos em nosso blog</h4>
                </Link>
                <Link href="/" className="p-8 bg-brand-bg rounded-[2.5rem] border border-brand-accent/30 hover:shadow-lg transition-all group">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40 mb-4">Voltar ao Início</p>
                   <h4 className="font-serif text-xl text-brand-primary group-hover:text-brand-secondary transition-colors">Ir para a página principal</h4>
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
