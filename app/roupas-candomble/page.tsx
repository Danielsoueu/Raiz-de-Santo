import type { Metadata } from "next";
import CandombleClient from "./CandombleClient";
import { buildMetadata, generateBreadcrumbSchema } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Roupas de Candomblé Sob Medida em São Paulo | Raiz de Santo",
  description: "Trajes de Candomblé sob medida em São Paulo: camisus, saias de baiana com roda ampla, panos da costa e kits de obrigação. Envio para todo o Brasil.",
  path: "/roupas-candomble",
  keywords: "roupas de candomblé são paulo, roupa de candomble sob medida sp, pano da costa alaká, camisu lese"
});

export default function CandomblePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Roupas de Candomblé", path: "/roupas-candomble" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CandombleClient />
    </>
  );
}
