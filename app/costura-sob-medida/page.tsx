import type { Metadata } from "next";
import CosturaClient from "./CosturaClient";
import { buildMetadata, generateBreadcrumbSchema } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Costura de Roupas de Santo Sob Medida em São Paulo | Raiz de Santo",
  description: "Costura de roupas de santo sob medida em São Paulo: molde do zero, tecidos nobres e acabamento reforçado. Mão de obra a partir de R$ 150.",
  path: "/costura-sob-medida",
  keywords: "costura de roupas de santo sob medida em são paulo, atelier afro são paulo, costureira de santo sp"
});

export default function CosturaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Costura Sob Medida", path: "/costura-sob-medida" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CosturaClient />
    </>
  );
}
