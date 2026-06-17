import type { Metadata } from "next";

export const BASE_URL = "https://raiz-de-santo.vercel.app";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Raiz de Santo",
  "image": "https://i.ibb.co/5xFmZ0MS/An-ncio-do-Instagram-para-Nova-Cole-o-com-Desconto-Rosa-e-Branco.png",
  "@id": `${BASE_URL}/#organization`,
  "url": BASE_URL,
  "telephone": "+5511969035273",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Atendimento Presencial com Hora Marcada",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01000-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.55052,
    "longitude": -46.633308
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/raizdesanto",
    "https://www.facebook.com/raizdesanto"
  ]
};

interface BuildMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
}

export function buildMetadata({ title, description, path, keywords, image }: BuildMetadataProps): Metadata {
  const url = `${BASE_URL}${path}`;
  const defaultImage = "https://i.ibb.co/5xFmZ0MS/An-ncio-do-Instagram-para-Nova-Cole-o-com-Desconto-Rosa-e-Branco.png";
  const ogImage = image || defaultImage;

  return {
    title,
    description,
    keywords: keywords || "roupa de santo, roupas de umbanda, roupas de candomblé, costura religiosa, roupas sob medida sp",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Raiz de Santo",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
