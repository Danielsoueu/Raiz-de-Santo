import type { Metadata } from "next";
import UmbandaClient from "./UmbandaClient";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Roupas de Umbanda Sob Medida em SP | Raiz de Santo",
  description: "Confeccionamos roupas de Umbanda sob medida: roupas de ração, saias, calças, trajes para entidades e muito mais. Atelier em São Paulo e envio para todo o Brasil. Preço justo e respeito ao fundamento.",
  path: "/roupas-umbanda",
  keywords: "roupas de umbanda sob medida, roupa de ração umbanda, saia de umbanda, roupas de santo SP, confecção de roupas religiosas, trajes para umbanda, costura de terreiro"
});

export default function UmbandaPage() {
  return <UmbandaClient />;
}
