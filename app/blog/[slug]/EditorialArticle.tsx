import Image from 'next/image';
import Link from 'next/link';
import editorialPosts from '../../../lib/editorial-posts.json';
import { BLOG_POSTS } from '../../../lib/blog-posts';
import { CATALOGO_ITEMS } from '../../../lib/catalogo-data';

export default function EditorialArticle({ slug }: { slug: string }) {
  const post = editorialPosts.find(post => post.slug === slug)!;
  const allRelated = post.related.map(slug => BLOG_POSTS.find(post => post.slug === slug)).filter(Boolean);
  const model = CATALOGO_ITEMS.find(item => item.fotoPrincipal === post.image);
  return <article className="max-w-4xl mx-auto px-5 sm:px-8 py-10 md:py-16 space-y-8">
    <Link href="/blog" className="underline text-brand-primary">Blog do Raiz de Santo</Link>
    <header className="space-y-5">
      <p className="text-sm text-brand-primary">{post.cluster} · <time dateTime="2026-11-17">17 de novembro de 2026</time></p>
      <h1 className="font-serif text-3xl md:text-5xl leading-tight text-brand-primary">{post.title}</h1>
      <p className="text-lg leading-relaxed">{post.intro}</p>
      <p className="text-sm text-brand-ink/70">Por Raiz de Santo · Orientações práticas de encomenda e conservação. Para usos litúrgicos, siga as orientações da sua casa.</p>
    </header>
    <figure className="space-y-3">
      <div className="relative h-[420px] sm:h-[540px] bg-white rounded-3xl overflow-hidden">
        <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 100vw, 850px" priority className="object-contain" />
      </div>
      <figcaption className="text-sm text-brand-ink/70">Fotografia enviada pelo Raiz de Santo. Modelo como referência visual; materiais, disponibilidade e componentes devem ser confirmados no orçamento.{model && <> <Link className="underline" href={`/catalogo/${model.id}`}>Ver este modelo</Link>.</>}</figcaption>
    </figure>
    <nav aria-label="Neste artigo" className="bg-white border border-brand-accent/50 rounded-2xl p-6 space-y-3">
      <h2 className="font-semibold text-brand-primary">Neste artigo</h2>
      <ol className="list-decimal pl-5 space-y-2">{post.sections.map((section, index) => <li key={section.heading}><a href={`#secao-${index + 1}`} className="underline">{section.heading}</a></li>)}</ol>
    </nav>
    {post.sections.map((section, index) => <section key={section.heading} id={`secao-${index + 1}`} className="scroll-mt-28 space-y-4">
      <h2 className="font-serif text-2xl md:text-3xl text-brand-primary">{section.heading}</h2>
      {section.paragraphs.map(paragraph => <p key={paragraph} className="leading-relaxed">{paragraph}</p>)}
      {section.bullets.length > 0 && <ul className="list-disc pl-6 space-y-2">{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
    </section>)}
    <section className="space-y-5">
      <h2 className="font-serif text-2xl text-brand-primary">Dúvidas frequentes</h2>
      {post.faq.map(faq => <div key={faq.question} className="space-y-2"><h3 className="font-semibold">{faq.question}</h3><p className="leading-relaxed">{faq.answer}</p></div>)}
    </section>
    {post.sources.length > 0 && <section className="border-t border-brand-accent pt-6 space-y-3">
      <h2 className="font-semibold text-brand-primary">Referência para composição e conservação</h2>
      <p className="text-sm">As orientações abaixo ajudam a identificar as informações do produto; os cuidados específicos devem ser confirmados para os materiais da sua peça.</p>
      <ul className="space-y-2">{post.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="underline text-sm">{source.label}</a></li>)}</ul>
    </section>}
    <aside className="rounded-3xl bg-brand-primary text-white p-6 sm:p-9 space-y-5">
      <h2 className="font-serif text-2xl">Planeje sua encomenda com o ateliê</h2>
      <p>Atendimento em São Paulo com agendamento e envio para todo o Brasil. Envie referências e confirme peças, medidas, materiais, valor e prazo antes da produção.</p>
      <div className="flex flex-wrap gap-5 underline"><Link href={post.target}>Veja a próxima etapa</Link><Link href="/guia-de-medidas">Guia de medidas</Link><Link href="/contato">Pedir orçamento</Link></div>
    </aside>
    {allRelated.length > 0 && <section className="space-y-4"><h2 className="font-serif text-2xl text-brand-primary">Continue a leitura</h2><ul className="space-y-3">{allRelated.map(related => related && <li key={related.slug}><Link href={`/blog/${related.slug}`} className="underline text-brand-primary">{related.shortTitle}</Link></li>)}</ul></section>}
  </article>;
}
