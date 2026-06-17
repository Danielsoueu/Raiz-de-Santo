import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { buildMetadata, BASE_URL } from "../../../lib/seo";

const posts = [
  {
    slug: "como-lavar-sua-roupa-de-santo-sem-danificar-o-axe",
    title: "Como lavar sua roupa de santo sem danificar o axé passo a passo | Raiz de Santo",
    shortTitle: "Como Lavar sua Roupa de Santo",
    description: "Lavar as vestimentas de rituais é um ato de profundo respeito. Aprenda técnicas de lavagem artesanal para preservar e manter o brilho do axé.",
    datePublished: "2026-05-16T09:00:00Z"
  },
  {
    slug: "5-tipos-de-rendas-ideais",
    title: "5 tipos de rendas ideais para saiões de Candomblé | Raiz de Santo",
    shortTitle: "5 Rendas para Saiões de Candomblé",
    description: "Descubra as rendas mais tradicionais como Lese, Guipir e Renascença para criar saiões de Candomblé com conforto, nobreza e respeito ao fundamento.",
    datePublished: "2026-05-12T09:00:00Z"
  },
  {
    slug: "importancia-pano-da-costa",
    title: "A importância do Pano da Costa no fundamento do Iyawó | Raiz de Santo",
    shortTitle: "A Importância do Pano da Costa",
    description: "Entenda o significado essencial e a força de proteção do Alaká, o tradicional Pano da Costa usado por Iyawó e filhas de santo no Candomblé.",
    datePublished: "2026-05-08T09:00:00Z"
  },
  {
    slug: "checklist-roupa-de-racao",
    title: "Roupas de Rações: O que não pode faltar no seu enxoval | Raiz de Santo",
    shortTitle: "Roupas de Rações",
    description: "O checklist definitivo das roupas de ração masculinas e femininas recomendadas de algodão e percal para a gira diária no terreiro.",
    datePublished: "2026-05-04T09:00:00Z"
  },
  {
    slug: "significado-das-cores",
    title: "Significado das cores nas roupas de entidades de Umbanda | Raiz de Santo",
    shortTitle: "Significado das Cores na Umbanda",
    description: "Explore o simbolismo por trás das cores na Umbanda e como tons de azul, verde e vermelho atuam nos passes de pretos velhos, caboclos e esquerda.",
    datePublished: "2026-05-01T09:00:00Z"
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);
  
  return buildMetadata({
    title: post?.title || "Blog | Raiz de Santo",
    description: post?.description || "Dicas de axé e fundamentos de confecção de roupas de santo sob medida.",
    path: `/blog/${resolvedParams.slug}`,
    keywords: "vestimentas religiosas, axé, roupas de umbanda, roupas de candomblé, pano da costa, roupa de ração"
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  const articleSchema = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.datePublished,
    "author": {
      "@type": "Organization",
      "name": "Raiz de Santo",
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "Raiz de Santo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/5xFmZ0MS/An-ncio-do-Instagram-para-Nova-Cole-o-com-Desconto-Rosa-e-Branco.png"
      }
    }
  } : null;

  const breadcrumbSchema = post ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": BASE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${BASE_URL}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.shortTitle,
        "item": `${BASE_URL}/blog/${post.slug}`
      }
    ]
  } : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <BlogPostClient slug={resolvedParams.slug} />
    </>
  );
}
