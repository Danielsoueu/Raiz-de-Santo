import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { buildMetadata, BASE_URL, LOGO_URL } from "../../../lib/seo";

import { BLOG_POSTS as posts } from "../../../lib/blog-posts";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);
  if (!post) notFound();
  
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
  if (!post) notFound();

  const articleSchema = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": [LOGO_URL],
    "datePublished": post.datePublished,
    "dateModified": post.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`
    },
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
        "url": LOGO_URL
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
