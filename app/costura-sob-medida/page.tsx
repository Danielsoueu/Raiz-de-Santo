import type { Metadata } from "next";
import CosturaClient from "./CosturaClient";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Costura Sob Medida para Roupas de Santo em SP | Raiz de Santo",
  description: "Roupas de santo sob medida em São Paulo: modelagem do zero, tecidos premium e acabamento artesanal para Umbanda e Candomblé. Atendimento presencial e à distância. Mão de obra a partir de R$150.",
  path: "/costura-sob-medida",
  keywords: "costura sob medida roupas de santo, confecção afro-religiosa SP, costureira de umbanda, alfaiataria religiosa, modelagem exclusiva roupa de santo, costura candomblé sob medida"
});

export default function CosturaPage() {
  return <CosturaClient />;
}
