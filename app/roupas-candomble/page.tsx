import type { Metadata } from "next";
import CandombleClient from "./CandombleClient";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Roupas de Candomblé Sob Medida | Ketu, Angola e Jeje | Raiz de Santo",
  description: "Confeccionamos roupas de Candomblé sob medida para todas as nações: Ketu, Angola e Jeje. Pano da Costa, Camisu, Saias de Alodê, kits de obrigação e muito mais. Atelier em SP, envio para todo o Brasil.",
  path: "/roupas-candomble",
  keywords: "roupas de candomblé sob medida, pano da costa bordado, camisu candomblé, saia de alodê, kit obrigação candomblé, trajes para saída de santo, roupas para orixá"
});

export default function CandomblePage() {
  return <CandombleClient />;
}
