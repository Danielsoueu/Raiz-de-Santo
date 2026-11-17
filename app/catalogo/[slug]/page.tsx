import { ORDER_DEADLINE } from '../../../lib/order-info';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import { CATALOGO_ITEMS } from '../../../lib/catalogo-data';
import { BASE_URL, buildMetadata, generateBreadcrumbSchema } from '../../../lib/seo';

export function generateStaticParams() {
  return CATALOGO_ITEMS.map(item => ({ slug: item.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = CATALOGO_ITEMS.find(item => item.id === slug);
  if (!item) notFound();
  return buildMetadata({
    title: `${item.nome} | Raiz de Santo`,
    description: item.descricaoCurta,
    path: `/catalogo/${item.id}`,
    image: item.fotoPrincipal,
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = CATALOGO_ITEMS.find(item => item.id === slug);
  if (!item) notFound();
  const url = `${BASE_URL}/catalogo/${item.id}`;
  const message = `Olá! Gostaria de um orçamento para ${item.nome} (${item.codigo}). Vi este modelo em ${url}. Podemos confirmar tecido, medidas, valor e prazo?`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'Product', '@id': `${url}#product`,
    url, name: item.nome, description: item.descricaoCompleta,
    image: item.fotos.map(photo => photo.startsWith("/") ? `${BASE_URL}${photo}` : photo), sku: item.codigo, material: item.tecido,
    color: item.paletaCores.nomeCores,
    brand: { '@type': 'Brand', name: 'Raiz de Santo' },
    // Prices are estimates for made-to-measure orders; no checkout offer is asserted.
  };
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Catálogo', path: '/catalogo' },
    { name: item.nome, path: `/catalogo/${item.id}` },
  ]);
  const related = CATALOGO_ITEMS.filter(other => other.id !== item.id &&
    (other.tipoPeca === item.tipoPeca || other.categoria === item.categoria)).slice(0, 3);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, breadcrumbs]).replace(/</g, '\\u003c') }} />
    <Breadcrumbs items={[{ label: 'Catálogo', href: '/catalogo' }, { label: item.nome }]} />
    <article className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          {item.fotos.map((photo, index) => <img key={photo} src={photo}
            alt={`${item.nome} — ${index === 0 ? 'modelo completo' : `detalhe ${index}`}`}
            width={800} height={1000} loading={index === 0 ? 'eager' : 'lazy'}
            className="w-full h-auto rounded-2xl bg-white" />)}
        </div>
        <div className="space-y-6">
          <p className="text-sm text-brand-primary">{item.categoriaLabel} · {item.codigo}</p>
          <h1 className="font-serif text-3xl md:text-4xl text-brand-primary">{item.nome}</h1>
          <p className="leading-relaxed">{item.descricaoCompleta}</p>
          <p className="font-semibold text-lg">{item.precoEstimadoTexto}</p>
          <p className="text-sm leading-relaxed">Confecção sob medida. Confirme valor final, disponibilidade do tecido, prazo de produção e frete pelo WhatsApp antes de encomendar. Cores e uso litúrgico devem seguir a orientação da sua casa.</p>
          <a className="inline-block rounded-full bg-brand-primary text-white px-6 py-4 font-semibold"
            href={`https://wa.me/5511969035273?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">Pedir orçamento deste modelo</a>
          <h2 className="font-serif text-2xl text-brand-primary">Peças e materiais</h2>
          <ul className="list-disc pl-5 space-y-2">{item.pecasInclusas.map(piece => <li key={piece}>{piece}</li>)}</ul>
          <dl className="space-y-3">
            <div><dt className="font-semibold">Tecido</dt><dd>{item.tecido}</dd></div>
            <div><dt className="font-semibold">Acabamentos</dt><dd>{item.rendasAcabamentos}</dd></div>
            <div><dt className="font-semibold">Medida de referência</dt><dd>{item.rodaSugerida}</dd></div>
          </dl>
          <p>{ORDER_DEADLINE}</p>
          <h2 className="font-serif text-2xl text-brand-primary">Medidas para o orçamento</h2>
          <Link href="/guia-de-medidas" className="underline">Como tirar essas medidas</Link>
          <ul className="list-disc pl-5 space-y-2">{item.medidasNecessarias.map(measure => <li key={measure}>{measure}</li>)}</ul>
          <p>Atendimento em São Paulo com agendamento e envio para todo o Brasil. <Link href="/contato" className="underline">Fale com o ateliê</Link> para combinar a encomenda.</p>
        </div>
      </div>
      {related.length > 0 && <section className="mt-14 space-y-4">
        <h2 className="font-serif text-2xl text-brand-primary">Outros modelos</h2>
        <ul className="space-y-3">{related.map(other => <li key={other.id}><Link className="underline text-brand-primary" href={`/catalogo/${other.id}`}>{other.nome}</Link></li>)}</ul>
      </section>}
      <p className="mt-10"><Link className="underline" href="/catalogo">Voltar ao catálogo completo</Link></p>
    </article>
  </>;
}
