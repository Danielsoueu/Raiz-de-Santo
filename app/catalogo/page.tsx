import type { Metadata } from 'next';
import CatalogoClient from './CatalogoClient';
import { buildMetadata, generateBreadcrumbSchema, BASE_URL } from '../../lib/seo';
import { CATALOGO_ITEMS } from '../../lib/catalogo-data';

export const metadata: Metadata = buildMetadata({
  title: "Catálogo de Roupas de Santo Sob Medida | Raiz de Santo São Paulo",
  description: "Explore o catálogo de roupas de santo artesanais para Umbanda e Candomblé. Conjuntos de Baiana, Pomba Gira, Erê, Wax Africano e Roupas de Ração sob medida em SP.",
  path: "/catalogo",
  keywords: "catálogo roupas de santo, conjuntos de umbanda sob medida, saias de candomblé são paulo, roupas de pomba gira, trajes de erê cosme e damião, alta costura afro religiosa sp"
});

export default function CatalogoPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Catálogo de Peças", path: "/catalogo" }
  ]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catálogo de Roupas de Santo Sob Medida - Raiz de Santo",
    "description": "Modelos e coleções exclusivas de roupas litúrgicas para Umbanda e Candomblé confeccionadas sob medida.",
    "numberOfItems": CATALOGO_ITEMS.length,
    "itemListElement": CATALOGO_ITEMS.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${BASE_URL}/catalogo/${item.id}`,
      "name": item.nome
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <CatalogoClient />
    </>
  );
}
