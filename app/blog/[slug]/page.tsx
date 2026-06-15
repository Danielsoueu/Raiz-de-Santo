import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { buildMetadata, BASE_URL } from "@/lib/seo";

// Full list of all 5 blog posts with complete metadata
const posts = [
  {
    slug: "como-lavar-sua-roupa-de-santo-sem-danificar-o-axe",
    title: "Como lavar sua roupa de santo sem danificar o axé passo a passo | Raiz de Santo",
    description: "Lavar as vestimentas de rituais é um ato de profundo respeito. Aprenda técnicas para lavar suas peças com segurança e preservar o axé.",
  },
  {
    slug: "5-tipos-de-rendas-ideais",
    title: "5 tipos de rendas ideais para saiões de Candomblé | Raiz de Santo",
    description: "Guia completo sobre as melhores rendas (Lese, Guipir, Renascença) para o seu saião de Candomblé. Conheça os tipos, preços e onde comprar.",
  },
  {
    slug: "importancia-pano-da-costa",
    title: "A importância do Pano da Costa no fundamento do Iyawó | Raiz de Santo",
    description: "O significado ancestral do Pano da Costa e como ele atua como escudo energético na iniciação do Iyawó no Candomblé.",
  },
  {
    slug: "checklist-roupa-de-racao",
    title: "Roupas de Rações: O que não pode faltar no seu enxoval | Raiz de Santo",
    description: "Checklist completo para filhos de santo iniciantes e veteranos. Saiba quais peças essenciais compõem uma ração completa de Umbanda.",
  },
  {
    slug: "significado-das-cores",
    title: "Significado das cores nas roupas de entidades de Umbanda | Raiz de Santo",
    description: "Como as cores vibram e atraem a falange correta para o seu trabalho espiritual. Guia completo das cores de cada entidade.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return buildMetadata({
      title: "Blog | Raiz de Santo",
      description: "Dicas e cuidados com suas roupas de santo.",
      canonical: "/blog",
    });
  }
  
  return buildMetadata({
    title: post.title,
    description: post.description,
    canonical: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <BlogPostClient slug={resolvedParams.slug} />;
}
