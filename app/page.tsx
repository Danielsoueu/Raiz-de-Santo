import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Raiz de Santo | Roupas de Santo Sob Medida em São Paulo",
  description: "Roupas de santo sob medida para Umbanda e Candomblé em São Paulo. Peças personalizadas, atendimento presencial e envio para todo o Brasil.",
  alternates: {
    canonical: "https://raiz-de-santo.vercel.app/",
  },
  other: {
    title: "Raiz de Santo | Roupas de Santo Sob Medida em São Paulo",
  },
  openGraph: {
    type: "website",
    url: "https://raiz-de-santo.vercel.app/",
    title: "Raiz de Santo | Roupas de Santo Sob Medida em São Paulo",
    description: "Roupas de santo sob medida para Umbanda e Candomblé em São Paulo. Peças personalizadas, atendimento presencial e envio para todo o Brasil.",
    images: [
      {
        url: "https://ik.imagekit.io/czbsplwyj/Raizdesanto.png",
        alt: "Raiz de Santo | Roupas de Santo Sob Medida em São Paulo",
      },
    ],
    siteName: "Raiz de Santo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raiz de Santo | Roupas de Santo Sob Medida em São Paulo",
    description: "Roupas de santo sob medida para Umbanda e Candomblé em São Paulo. Peças personalizadas, atendimento presencial e envio para todo o Brasil.",
    images: ["https://ik.imagekit.io/czbsplwyj/Raizdesanto.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
