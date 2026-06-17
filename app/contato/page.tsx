import type { Metadata } from "next";
import ContatoClient from "./ContatoClient";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Fale com a Raiz de Santo | Orçamento de Roupas de Santo em SP",
  description: "Entre em contato com a Raiz de Santo e solicite seu orçamento de roupas de Umbanda ou Candomblé sob medida. Atendimento humanizado em São Paulo e envio para todo o Brasil.",
  path: "/contato",
  keywords: "orçamento roupa de santo SP, contato costureira afro-religiosa, atelier roupas de santo São Paulo, encomendar roupa de umbanda, falar com costureira de candomblé"
});

export default function Contato() {
  return <ContatoClient />;
}
