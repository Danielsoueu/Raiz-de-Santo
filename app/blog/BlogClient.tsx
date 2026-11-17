"use client";

import { motion } from "motion/react";
import { BookOpen, ChevronRight, Clock, Calendar } from 'lucide-react';
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";

import Image from "next/image";
import { BLOG_POSTS } from "../../lib/blog-posts";
import editorialPosts from "../../lib/editorial-posts.json";
import { useState } from "react";
const clusters = ['Todos', ...Array.from(new Set(editorialPosts.map(post => post.cluster))), 'Tradição'];


export default function BlogClient() {
  const [cluster, setCluster] = useState('Todos');
  const [search, setSearch] = useState('');
  const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const blogPosts = BLOG_POSTS.filter(post => {
    const editorial = editorialPosts.find(item => item.slug === post.slug);
    return (cluster === 'Todos' || (editorial?.cluster || 'Tradição') === cluster) && normalize(`${post.title} ${post.description}`).includes(normalize(search.trim()));
  });
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Breadcrumbs items={[{ label: "Blog" }]} />

      {/* Hero Section */}
      <header className="pt-12 md:pt-16 pb-14 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/15 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Nosso Blog • Sabedoria e Tradição
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl mb-6 text-brand-primary leading-tight font-bold">
              Dicas de <span className="italic text-brand-secondary">Axé</span> & <br />
              Fundamentos da <span className="italic">Costura</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-ink/75 leading-relaxed font-light mx-auto max-w-2xl">
              Conhecimento e informação prática para você cuidar das suas vestimentas sagradas com a dignidade que o ritual exige.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pb-10 space-y-5">
        <label className="block space-y-2"><span className="font-semibold text-brand-primary">Encontre uma orientação</span><input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Busque por tecido, medidas, orçamento..." className="w-full sm:max-w-lg bg-white border border-brand-accent rounded-xl px-4 py-3" /></label>
        <div className="flex flex-wrap gap-2">{clusters.map(option => <button key={option} type="button" aria-pressed={cluster === option} onClick={() => setCluster(option)} className={`rounded-full px-4 py-2 text-sm border border-brand-accent ${cluster === option ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary'}`}>{option}</button>)}</div>
        <p role="status" className="text-sm">{blogPosts.length} artigos encontrados</p>
      </div>
      {/* Blog List Section */}
      <section className="py-24 px-6 bg-white overflow-hidden rounded-t-[4rem] md:rounded-t-[6rem] shadow-2xl">
        <div className="max-w-7xl mx-auto">
          {blogPosts.length === 0 && <p>Nenhum artigo encontrado. Experimente outro termo ou escolha Todos.</p>}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.03, 0.15) }}
              >
                <Link 
                  href={`/blog/${post.slug}`}
                  className="p-10 bg-brand-bg rounded-[3rem] border border-brand-accent/30 flex flex-col justify-between h-full hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                     <BookOpen className="w-24 h-24 text-brand-primary" />
                  </div>

                  {editorialPosts.find(item => item.slug === post.slug)?.image && <div className="relative h-56 -mx-5 -mt-5 mb-6 rounded-2xl overflow-hidden bg-white"><Image src={editorialPosts.find(item => item.slug === post.slug)!.image} alt={editorialPosts.find(item => item.slug === post.slug)!.imageAlt} fill sizes="(max-width: 768px) 100vw, 400px" className="object-contain" /></div>}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-brand-accent/20 group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <Calendar className="w-5 h-5 text-brand-secondary" />
                       </div>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">{new Date(post.datePublished).toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })}</span>
                    </div>
                    
                    <h2 className="font-serif text-2xl text-brand-primary mb-6 leading-tight group-hover:text-brand-secondary transition-colors line-clamp-3">{post.title}</h2>
                    
                    <p className="text-sm leading-relaxed mb-5">{post.description}</p>
                    <div className="flex gap-2 items-center mb-10">
                       <span className="px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-primary text-[9px] font-bold uppercase tracking-widest border border-brand-secondary/20">
                          {editorialPosts.find(item => item.slug === post.slug)?.cluster || "Tradição"}
                       </span>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-brand-accent/20 flex items-center justify-between relative z-10">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Leitura prática</span>
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
      <section className="py-20 px-4 sm:px-6 bg-brand-primary relative overflow-hidden text-center">
         <div className="max-w-4xl mx-auto relative z-10 text-white">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 font-bold">
              Dúvidas sobre o <span className="italic text-brand-secondary">Axé da sua roupa?</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
               Nossa costureira também é praticante e compreende os preceitos e particularidades de cada casa. Fale diretamente conosco pelo WhatsApp.
            </p>
            <a 
              href="https://wa.me/5511969035273?text=Olá! Estava lendo o blog da Raiz de Santo e gostaria de tirar uma dúvida sobre roupas de santo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold hover:bg-emerald-600 transition-all shadow-xl"
            >
               Tirar dúvidas no WhatsApp
            </a>
         </div>
      </section>
    </div>
  );
}
