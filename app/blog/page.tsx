import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { buildMetadata, generateBreadcrumbSchema } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog Raiz de Santo | Dicas de Axé e Cuidados com Roupas de Santo",
  description: "Artigos práticos sobre lavagem correta de roupas de santo, escolha de tecidos, significados das cores e fundamentos das vestimentas sagradas.",
  path: "/blog",
  keywords: "lavar roupa de santo, tecidos para candomble, cores roupas umbanda, dicas axé roupas"
});

export default function Blog() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog & Dicas de Axé", path: "/blog" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogClient />
    </>
  );
}
