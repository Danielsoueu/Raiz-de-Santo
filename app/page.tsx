import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import photographedItems from "../lib/photo-catalog.json";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: { absolute: "Raiz de Santo | Roupas de Santo Sob Medida em São Paulo" },
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
  return <><HomeClient /><section className="max-w-7xl mx-auto px-6 py-16 space-y-7">
    <div className="flex flex-wrap items-end justify-between gap-4"><h2 className="font-serif text-3xl text-brand-primary">Peças fotografadas no ateliê</h2><Link href="/catalogo" className="underline text-brand-primary">Explorar o catálogo</Link></div>
    <p>Referências reais para conversar sobre sua encomenda. Consulte composição, materiais e disponibilidade de cada modelo.</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">{photographedItems.slice(0, 4).map(item => <Link key={item.id} href={`/catalogo/${item.id}`} className="space-y-3"><div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white"><Image src={item.fotoPrincipal} alt={item.nome} fill sizes="(max-width: 768px) 50vw, 300px" className="object-contain" /></div><h3 className="font-serif text-lg text-brand-primary">{item.nome}</h3></Link>)}</div>
  </section></>;

}
