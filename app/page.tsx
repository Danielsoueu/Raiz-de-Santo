import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Raiz de Santo | Roupas de Santo Sob Medida em São Paulo",
  description: "Confecção artesanal de roupas de santo sob medida para Umbanda e Candomblé em São Paulo. Respeito à tradição e acabamento premium.",
};

export default function Home() {
  return <HomeClient />;
}
