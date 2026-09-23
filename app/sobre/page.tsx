import type { Metadata } from "next";
import SobreClient from "./SobreClient";
import { buildMetadata, generateBreadcrumbSchema } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Quem Somos | Raiz de Santo — Costura Afro-Religiosa em SP",
  description: "Conheça a Raiz de Santo: atelier de costura afro-religiosa em São Paulo dedicado a vestir praticantes de Umbanda e Candomblé com zelo litúrgico.",
  path: "/sobre",
  keywords: "atelier afro religioso sp, costureira candomble umbanda, confecção roupas litúrgicas são paulo"
});

export default function Sobre() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Sobre o Atelier", path: "/sobre" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SobreClient />
    </>
  );
}
