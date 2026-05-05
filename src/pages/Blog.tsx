import { motion } from 'motion/react';
import { BookOpen, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const blogPosts = [
  {
    title: "Como lavar sua roupa de santo sem danificar o axé",
    keyword: "lavar roupa de santo",
    objective: "Informativo/Cuidado com o produto"
  },
  {
    title: "5 tipos de rendas ideais para saiões de Candomblé",
    keyword: "rendas para roupas de santo",
    objective: "Autoridade técnica"
  },
  {
    title: "A importância do Pano da Costa no fundamento do Iyawó",
    keyword: "pano da costa fundamento",
    objective: "Educação e Tradição"
  },
  {
    title: "Roupas de Rações: O que não pode faltar no seu enxoval",
    keyword: "roupa de ração umbanda",
    objective: "Apoio à compra (Checklist)"
  },
  {
    title: "Significado das cores nas roupas de entidades de Umbanda",
    keyword: "cores roupas umbanda",
    objective: "Atração via busca informativa"
  },
  {
    title: "Por que fazer roupas de santo sob medida em vez de comprar prontas?",
    keyword: "roupa de santo sob medida",
    objective: "Conversão direta (Diferencial)"
  },
  {
    title: "O guia completo da Saída de Santo: O que vestir?",
    keyword: "vestimenta saída de santo",
    objective: "Fundo de funil (Preparação)"
  },
  {
    title: "Tendências de alta costura nas vestimentas religiosas afro-brasileiras",
    keyword: "alta costura religiosa",
    objective: "Posicionamento de marca premium"
  },
  {
    title: "Como tirar suas medidas para encomendar roupas de santo online",
    keyword: "medidas roupa de santo",
    objective: "Quebra de objeção de compra à distância"
  },
  {
    title: "Roupas para Caboclo: A união entre rusticidade e elegância",
    keyword: "roupas de caboclo umbanda",
    objective: "Nicho específico"
  }
];

export default function Blog() {
  return (
    <>
      <SEO 
        title="Dicas de Axé | Blog Raiz de Santo"
        description="Aprenda sobre fundamentos, cuidados com suas roupas de santo e tendências de vestimentas para Umbanda e Candomblé."
        keywords="blog roupas de santo, dicas umbanda, curiosidades candomblé"
        canonical="/blog"
      />
      
      <header className="pt-40 pb-20 px-6 bg-brand-bg text-center">
        <h1 className="font-serif text-4xl md:text-7xl mb-8 text-brand-primary leading-tight">
          Dicas de <span className="italic text-brand-secondary">Axé</span>
        </h1>
        <p className="text-lg text-brand-ink/70 max-w-2xl mx-auto">
          Conhecimento e informação para quem busca honrar sua fé com excelência.
        </p>
      </header>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 border border-brand-accent/30 rounded-[2.5rem] flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div>
                  <div className="w-10 h-10 bg-brand-bg rounded-xl flex items-center justify-center mb-6">
                    <BookOpen className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <h2 className="font-serif text-2xl text-brand-primary mb-4 leading-tight">{post.title}</h2>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ink/40 mb-2">Keyword: {post.keyword}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-brand-accent/20 flex items-center justify-between">
                   <span className="text-[10px] font-bold uppercase text-brand-secondary">{post.objective}</span>
                   <ChevronRight className="w-4 h-4 text-brand-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
