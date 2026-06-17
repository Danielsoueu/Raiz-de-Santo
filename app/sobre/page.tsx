import type { Metadata } from "next";
import SobreClient from "./SobreClient";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Quem Somos | Raiz de Santo — Costura Afro-Religiosa em São Paulo",
  description: "Conheça a história da Raiz de Santo: atelier de costura afro-religiosa em São Paulo especializado em roupas de Umbanda e Candomblé sob medida. Tradição, respeito e qualidade em cada ponto.",
  path: "/sobre",
  keywords: "atelier roupas de santo São Paulo, costureira afro-religiosa SP, confecção umbanda candomblé, quem faz roupa de santo em SP, costura religiosa artesanal, alfaiataria afro-religiosa"
});

export default function Sobre() {
  return <SobreClient />;
}
