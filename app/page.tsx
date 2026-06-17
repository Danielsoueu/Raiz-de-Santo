import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Raiz de Santo | Roupas de Santo Sob Medida em São Paulo",
  description: "Roupas de Umbanda e Candomblé sob medida em São Paulo. Modelagem exclusiva, tecidos premium e acabamento artesanal. Mão de obra a partir de R$150. Atendimento presencial e envio para todo o Brasil.",
  path: "",
  keywords: "roupas de santo sob medida, confecção afro-religiosa São Paulo, roupa de umbanda SP, roupa de candomblé sob medida, costureira roupas religiosas, atelier roupas de santo"
});

export default function Home() {
  return <HomeClient />;
}
