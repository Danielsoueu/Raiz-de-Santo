import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Raiz de Santo - Roupas e costura afro",
  description: "Roupas de Umbanda e Candomblé sob medida em SP. Peças com fundamento, modelagem exclusiva e mão de obra na faixa de R$ 140. Peça seu orçamento pelo WhatsApp!",
  alternates: {
    canonical: "https://raiz-de-santo.vercel.app/",
  },
  other: {
    title: "Raiz de Santo - Roupas e costura afro",
  },
  openGraph: {
    type: "website",
    url: "https://raiz-de-santo.vercel.app/",
    title: "Raiz de Santo - Roupas e costura afro",
    description: "Roupas de Umbanda e Candomblé sob medida em SP. Peças com fundamento, modelagem exclusiva e mão de obra na faixa de R$ 140. Peça seu orçamento pelo WhatsApp!",
    images: [
      {
        url: "https://ik.imagekit.io/czbsplwyj/Raizdesanto.png",
        alt: "Raiz de Santo - Roupas e costura afro",
      },
    ],
    siteName: "Raiz de santo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raiz de Santo - Roupas e costura afro",
    description: "Roupas de Umbanda e Candomblé sob medida em SP. Peças com fundamento, modelagem exclusiva e mão de obra na faixa de R$ 140. Peça seu orçamento pelo WhatsApp!",
    images: ["https://ik.imagekit.io/czbsplwyj/Raizdesanto.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
