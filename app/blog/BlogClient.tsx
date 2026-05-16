"use client";

import { motion } from "motion/react";
import { BookOpen, ChevronRight, Clock, Calendar } from 'lucide-react';
import Link from "next/link";

const blogPosts = [
  {
    slug: "como-lavar-sua-roupa-de-santo-sem-danificar-o-axe",
    title: "Como lavar sua roupa de santo sem danificar o axé passo a passo",
    date: "16 Mai, 2026",
    keyword: "lavar roupa de santo",
    objective: "Informativo"
  },
  {
    slug: "5-tipos-de-rendas-ideais",
    title: "5 tipos de rendas ideais para saiões de Candomblé",
    date: "12 Mai, 2026",
    keyword: "rendas para roupas de santo",
    objective: "Técnico"
  },
  {
    slug: "importancia-pano-da-costa",
    title: "A importância do Pano da Costa no fundamento do Iyawó",
    date: "08 Mai, 2026",
    keyword: "pano da costa fundamento",
    objective: "Tradição"
  },
  {
    slug: "checklist-roupa-de-racao",
    title: "Roupas de Rações: O que não pode faltar no seu enxoval",
    date: "04 Mai, 2026",
    keyword: "roupa de ração umbanda",
    objective: "Checklist"
  },
  {
    slug: "significado-das-cores",
    title: "Significado das cores nas roupas de entidades de Umbanda",
    date: "01 Mai, 2026",
    keyword: "cores roupas umbanda",
    objective: "Informativo"
  }
];

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      {/* Hero Section */}
      <header className="pt-32 md:pt-48 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Nosso Blog
            </div>
            <h1 className="font-serif text-4xl md:text-7xl mb-8 text-brand-primary leading-tight">
              Dicas de <span className="italic text-brand-secondary">Axé</span> & <br />
              Fundamentos da <span className="italic">Costura</span>
            </h1>
            <p className="text-lg md:text-2xl text-brand-ink/70 leading-relaxed font-light mx-auto max-w-2xl">
              Conhecimento e informação para quem busca honrar sua fé com o zelo que o sagrado exige.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Blog List Section */}
      <section className="py-24 px-6 bg-white overflow-hidden rounded-t-[4rem] md:rounded-t-[6rem] shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={`/blog/${post.slug}`}
                  className="p-10 bg-brand-bg rounded-[3rem] border border-brand-accent/30 flex flex-col justify-between h-full hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                     <BookOpen className="w-24 h-24 text-brand-primary" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-brand-accent/20 group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <Calendar className="w-5 h-5 text-brand-secondary" />
                       </div>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">{post.date}</span>
                    </div>
                    
                    <h2 className="font-serif text-2xl text-brand-primary mb-6 leading-tight group-hover:text-brand-secondary transition-colors line-clamp-3">{post.title}</h2>
                    
                    <div className="flex gap-2 items-center mb-10">
                       <span className="px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-primary text-[9px] font-bold uppercase tracking-widest border border-brand-secondary/20">
                          {post.keyword}
                       </span>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-brand-accent/20 flex items-center justify-between relative z-10">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">{post.objective}</span>
                     <div className="flex items-center gap-2 text-brand-primary font-bold text-[10px] uppercase tracking-widest">
                        Ler Artigo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Newsletter / CTA */}
      <section className="py-24 px-6 bg-brand-primary relative overflow-hidden text-center">
         <div className="max-w-4xl mx-auto relative z-10 text-white">
            <h2 className="font-serif text-3xl md:text-5xl mb-8">Dúvidas sobre o <span className="italic text-brand-secondary">Axé da sua roupa?</span></h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
               Nossa costureira também é praticante e entende os preceitos de cada casa. Se não encontrou sua dúvida aqui, fale conosco.
            </p>
            <a 
              href="https://wa.me/5511969035273"
              className="inline-flex items-center gap-4 bg-brand-secondary text-brand-primary px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-2xl"
            >
               Tirar dúvidas no WhatsApp
            </a>
         </div>
      </section>
    </div>
  );
}
