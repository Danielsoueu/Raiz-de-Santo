import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";

// Since we don't have a database, we'll use a hardcoded list of titles to generate metadata
const posts = [
  {
    slug: "como-lavar-sua-roupa-de-santo-sem-danificar-o-axe",
    title: "Como lavar sua roupa de santo sem danificar o axé passo a passo | Raiz de Santo",
    description: "Lavar as vestimentas de rituais é um ato de profundo respeito. Aprenda técnicas para lavar suas peças com segurança e preservar o axé.",
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);
  
  return {
    title: post?.title || "Blog | Raiz de Santo",
    description: post?.description || "Dicas e cuidados com suas roupas de santo.",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <BlogPostClient slug={resolvedParams.slug} />;
}
