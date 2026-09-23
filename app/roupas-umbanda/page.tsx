import type { Metadata } from "next";
import UmbandaClient from "./UmbandaClient";
import { buildMetadata, generateBreadcrumbSchema } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Roupas de Umbanda Sob Medida em São Paulo | Raiz de Santo",
  description: "Roupas de Umbanda sob medida em São Paulo: roupas de ração, saias, calças e batas em percal e lese 100% algodão. Conforto na gira e envio nacional.",
  path: "/roupas-umbanda",
  keywords: "roupas de umbanda são paulo, roupa de umbanda sob medida sp, saia de gira, roupa de ração umbanda"
});

export default function UmbandaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Roupas de Umbanda", path: "/roupas-umbanda" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <UmbandaClient />
    </>
  );
}
