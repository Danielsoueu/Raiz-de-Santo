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
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
            {[
              "Respeite a sacralidade de cada peça durante a limpeza.",
              "Utilize produtos suaves para não agredir as fibras naturais.",
              "A secagem à sombra é essencial para manter a energia positiva.",
              "Evite misturar vestimentas rituais com peças de uso cotidiano.",
              "Mantenha o pensamento elevado enquanto realiza o processo."
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start text-sm text-brand-ink/70">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">A importância espiritual da conservação das vestimentas religiosas</h2>
          <p>
            Você sabia que sua roupa de santo é uma extensão da sua energia? Ela não é só um tecido. É um escudo e um canal para se comunicar com o sagrado.
          </p>
          <p>
            Cuidar bem da sua roupa mostra seu amor e respeito pela religião. Ao cuidar da roupa, você cuida da sua energia espiritual.
          </p>
          
          <h3 className="font-serif text-2xl text-brand-primary mt-8">O significado do axé nas roupas de santo</h3>
          <p>
            Cada roupa tem o axé, uma força vital. No alfa de umbanda, ela protege e precisa estar limpa. Isso ajuda a energia dos guias a passar sem problemas.
          </p>
          <p>
            Manter as roupas limpas é essencial. Assim, o axé flui livremente. Ao cuidar delas, você mostra seu compromisso com a espiritualidade.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Diferenças entre o cuidado com roupas de Umbanda e Candomblé</h2>
          <p>
            Embora o respeito seja comum, o cuidado varia. O alfa de umbanda busca a limpeza energética. Já o conde para candomblé exige mais cuidado, devido à complexidade dos rituais.
          </p>
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
                <tr>
                  <td className="p-4 border-b border-brand-accent/10">Frequência de lavagem</td>
                  <td className="p-4 border-b border-brand-accent/10">Após cada gira</td>
                  <td className="p-4 border-b border-brand-accent/10">Conforme o ritual</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-brand-accent/10">Produtos utilizados</td>
                  <td className="p-4 border-b border-brand-accent/10">Sabão neutro</td>
                  <td className="p-4 border-b border-brand-accent/10">Ervas e elementos</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-brand-accent/10">Secagem</td>
                  <td className="p-4 border-b border-brand-accent/10">Sombra</td>
                  <td className="p-4 border-b border-brand-accent/10">Sombra/Local sagrado</td>
                </tr>
                <tr>
                  <td className="p-4">Intenção</td>
                  <td className="p-4">Limpeza fluídica</td>
                  <td className="p-4">Preservação do axé</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Preparação antes da lavagem: o que você precisa saber</h2>
          <p>
            Cuidar do axé começa antes de lavar. É importante analisar cada peça de roupas religiosas afro antes de limpar. Essa atenção cuida da energia da peça e mostra o respeito ao seu orixá.
          </p>
          
          <h3 className="font-serif text-2xl text-brand-primary mt-8">Verificação de tecidos e adornos delicados</h3>
          <p>
            Inspecione cada detalhe, como o distintivo de santo. Veja se há fios soltos ou pedrarias que podem cair. Se encontrar danos, conserte antes de lavar. Isso ajuda a manter a peça em bom estado.
          </p>

          <h3 className="font-serif text-2xl text-brand-primary mt-8">Separação das peças por orixá e finalidade</h3>
          <p>
            Separar as peças corretamente é essencial. Isso evita misturar energias de diferentes orixás. Nunca junte roupas de uso diário com as de rituais. Organize as vestimentas em grupos. Assim, cada peça recebe o cuidado certo.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Como lavar sua roupa de santo sem danificar o axé</h2>
          <p>
            Lavar suas peças rituais é um ato de devoção. Isso preserva a força espiritual nelas. Cada fibra carrega a energia dos ritos.
          </p>
          
          <h3 className="font-serif text-2xl text-brand-primary mt-8">Escolha dos produtos de limpeza adequados</h3>
          <p>
            Escolher produtos de limpeza é muito importante. Evite substâncias químicas fortes. Elas podem mudar a vibração da sua vestimenta umbanda ou da sua vestimenta candomblé. Usar sabão de coco ou sabão neutro é uma boa ideia.
          </p>

          <h3 className="font-serif text-2xl text-brand-primary mt-8">Lavagem manual versus lavagem à máquina</h3>
          <p>
            Lavar à mão é mais seguro para as roupas. A máquina de lavar pode danificar as roupas delicadas.
          </p>
          <div className="p-8 bg-brand-bg rounded-3xl border border-brand-accent/20 space-y-4">
            <ol className="space-y-4 list-decimal pl-5">
              <li>Encha uma bacia com água limpa e adicione o sabão neutro.</li>
              <li>Mergulhe a peça suavemente, evitando esfregar com força excessiva.</li>
              <li>Enxágue em água corrente até remover todo o resíduo de sabão.</li>
            </ol>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Tratamento de manchas e sujidades em roupas brancas</h2>
          <p>
            Você sabia que limpar roupas brancas pode ser espiritual? Manter a branca umbanda limpa é muito importante. Isso ajuda a manter a energia da roupa alta.
          </p>
          <p>
            Cuidar do branco mostra seu amor pelo sagrado. Ao tirar manchas, use produtos suaves. Isso mantém a energia do axé.
          </p>
          
          <h3 className="font-serif text-2xl text-brand-primary mt-8">Técnicas naturais para manter o branco impecável</h3>
          <p>
            Para tirar manchas, use bicarbonato de sódio ou vinagre branco. Esses produtos são seguros e eficazes. Deixe a roupa de molho em água com sabão de coco. A luz do sol da manhã ajuda a clarear a branca umbanda sem danificar.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">O uso de ervas e elementos de limpeza ritualística</h2>
          <p>
            A saia de baiana umbanda precisa de cuidado especial. Enxágue bem para tirar sabão e evitar manchas amareladas. Adicione um canto de orixá ou preces silenciosas na lavagem. Isso torna a limpeza em um ritual que fortalece seu vínculo espiritual.
          </p>
          <p>
            Usar banhos de ervas frescas, como boldo ou arruda, purifica a roupa. Isso protege você com paz e proteção.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Secagem e armazenamento das vestimentas de terreiro</h2>
          <p>
            O cuidado com o seu vestuário sagrado é crucial. Isso acontece muito depois de lavar as peças. O processo de secar é tão importante quanto a lavagem. Ele ajuda a manter a energia e a estrutura das peças para os futuros rituais.
          </p>
          
          <h3 className="font-serif text-2xl text-brand-primary mt-8">A importância da secagem à sombra</h3>
          <p>
            É sempre melhor secar as roupas à sombra. O sol direto pode enfraquecer as fibras naturais. Segundo a tradição, isso pode dispersar a energia acumulada. Escolher um lugar ventilado e protegido do sol direto é essencial.
          </p>

          <h3 className="font-serif text-2xl text-brand-primary mt-8">Como guardar suas roupas para manter a energia</h3>
          <div className="grid md:grid-cols-2 gap-6 pb-6">
            <div className="bg-brand-bg p-6 rounded-3xl border border-brand-accent/20">
              <h4 className="font-bold text-brand-primary mb-2">Organização é Respeito</h4>
              <p className="text-sm">Utilize capas de tecido respirável para proteger contra o pó. Evite dobrar as peças de forma que amasse bordados ou aplicações.</p>
            </div>
            <div className="bg-brand-bg p-6 rounded-3xl border border-brand-accent/20">
              <h4 className="font-bold text-brand-primary mb-2">Ambiente Harmonizado</h4>
              <p className="text-sm">Mantenha o ambiente de armazenamento sempre harmonizado e livre de odores fortes. O guarda-roupa religioso é um espaço sagrado.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Cuidados com acessórios e elementos de costura religiosa</h2>
          <p>
            Os acessórios e detalhes de costura precisam de cuidado especial. Eles carregam uma energia espiritual única. É importante cuidar delas com carinho. Quando se trata de roupas afro religiosas, a conservação é essencial.
          </p>
          
          <h3 className="font-serif text-2xl text-brand-primary mt-8">Manutenção de guias, distintivos e adereços</h3>
          <p>
            Guias e distintivos têm uma grande carga espiritual. É importante manuseá-los com cuidado. Verifique se os fechos estão firmes antes de usar. Se houver desgaste, faça o reparo logo. Isso evita perda de peças durante o ritual.
          </p>
          
          <div className="overflow-x-auto mt-8">
            <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden border border-brand-accent/20">
              <thead className="bg-brand-bg/50">
                <tr>
                  <th className="p-4 font-bold text-brand-primary border-b border-brand-accent/20">Elemento</th>
                  <th className="p-4 font-bold text-brand-primary border-b border-brand-accent/20">Tipo de Limpeza</th>
                  <th className="p-4 font-bold text-brand-primary border-b border-brand-accent/20">Frequência</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-brand-accent/10">Guias de miçanga</td>
                  <td className="p-4 border-b border-brand-accent/10">Pano úmido</td>
                  <td className="p-4 border-b border-brand-accent/10">Após cada gira</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-brand-accent/10">Bordados delicados</td>
                  <td className="p-4 border-b border-brand-accent/10">Limpeza a seco</td>
                  <td className="p-4 border-b border-brand-accent/10">Mensal</td>
                </tr>
                <tr>
                  <td className="p-4">Distintivos metálicos</td>
                  <td className="p-4">Flanela seca</td>
                  <td className="p-4">Conforme necessário</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Dicas de conservação para diferentes entidades</h2>
          <p>
            Cada entidade espiritual tem sua própria energia. Essa energia afeta como cuidamos das suas roupas. Respeitar os materiais e usar-as de forma ritual ajuda a manter a energia por mais tempo.
          </p>
          <div className="grid gap-6">
            <div className="p-8 border border-brand-accent/20 rounded-3xl">
              <h4 className="font-serif text-xl text-brand-primary mb-3">Exu e Pombagira</h4>
              <p className="text-sm">Feitas de tecidos fortes como cetim e veludo. Não use produtos químicos. Lave à mão com sabão neutro e não torça para não danificar as fibras.</p>
            </div>
            <div className="p-8 border border-brand-accent/20 rounded-3xl">
              <h4 className="font-serif text-xl text-brand-primary mb-3">Preto Velho e Baianos</h4>
              <p className="text-sm">Muitas vezes feitas de algodão rústico. Use água fria para não encolher o tecido. Mantenha bem passadas e em lugares arejados.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-brand-primary">Quando buscar ajuda profissional de uma costureira de santo</h2>
          <p>
            Para manter seu axé, é essencial saber quando buscar um atelier umbanda. Alguns reparos não podem ser feitos em casa. Rasgos em áreas de tensão ou desprendimento de bordados complexos exigem ajuda técnica.
          </p>
          <p>
            Profissionais de costura para terreiro sabem que cada ponto e dobra têm um significado. Eles fazem ajustes sem alterar a energia da peça, preservando sua essência.
          </p>
        </section>

        <section className="space-y-8 bg-brand-bg p-8 md:p-12 rounded-[3rem] border border-brand-accent/20">
          <h2 className="font-serif text-3xl text-brand-primary text-center">FAQ - Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "Qual é a melhor forma de lavar minha vestimenta sem perder o axé?", a: "Lavagem manual com sabão neutro, evitando químicos e mantendo pensamentos elevados." },
              { q: "Como remover manchas de roupas brancas de iniciação?", a: "Use bicarbonato de sódio e luz solar da manhã. Para manchas persistentes, procure um profissional." },
              { q: "Como secar e guardar minha vestimenta?", a: "Sempre na sombra, em local arejado e em capas de tecido respirável." }
            ].map((faq, i) => (
              <div key={i} className="space-y-2">
                <p className="font-bold text-brand-primary">{faq.q}</p>
                <p className="text-sm text-brand-ink/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-y border-brand-accent/20">
           <blockquote className="text-center italic font-serif text-2xl text-brand-primary max-w-2xl mx-auto leading-relaxed">
             &quot;O cuidado com o que vestimos no sagrado é o reflexo do respeito que temos pela nossa própria espiritualidade e pelas entidades que nos guiam.&quot;
           </blockquote>
        </section>

        <section className="space-y-8">
           <h2 className="font-serif text-4xl text-brand-primary text-center">Conclusão</h2>
           <p className="text-center text-lg text-brand-ink/80 max-w-3xl mx-auto leading-relaxed">
             Cuidar das vestimentas mostra respeito pelo orixá e pela espiritualidade. Ao lavar e conservar bem, sua roupa fica sempre perfeita. Isso é muito importante para a gira de umbanda ou iniciações. Manter a roupa corretamente ajuda a fortalecer a conexão com o sagrado.
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
    <div className="min-h-screen bg-brand-bg font-sans">
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
              <div className="absolute -top-10 -right-10 opacity-5">
                 <BookOpen className="w-40 h-40 text-brand-primary" />
              </div>
              
              {post.content}
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
                   <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40 mb-4">Próximo artigo</p>
                   <h4 className="font-serif text-xl text-brand-primary group-hover:text-brand-secondary transition-colors">5 tipos de rendas ideais para saiões de Candomblé</h4>
                </Link>
                <Link href="/blog" className="p-8 bg-brand-bg rounded-[2.5rem] border border-brand-accent/30 hover:shadow-lg transition-all group">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40 mb-4">Anterior</p>
                   <h4 className="font-serif text-xl text-brand-primary group-hover:text-brand-secondary transition-colors">Significado das cores nas roupas de entidades</h4>
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
