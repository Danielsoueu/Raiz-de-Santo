import type { Metadata } from "next";

export const BASE_URL = "https://raiz-de-santo.vercel.app";
export const LOGO_URL = "https://ik.imagekit.io/czbsplwyj/Raizdesanto.png";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ClothingStore"],
  "name": "Raiz de Santo",
  "image": LOGO_URL,
  "@id": `${BASE_URL}/#organization`,
  "url": BASE_URL,
  "telephone": "+5511969035273",
  "priceRange": "R$ 150 - R$ 800",
  "currenciesAccepted": "BRL",
  "paymentAccepted": "Pix, Cartão de Crédito, Transferência Bancária",
  "description": "Atelier de alta costura afro-religiosa sob medida em São Paulo. Especialistas em roupas artesanais de Umbanda e Candomblé com modelagem anatômica, tecidos nobres e acabamento para anos de rituais.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Atendimento Presencial com Hora Marcada no Atelier",
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
  "areaServed": [
    {
      "@type": "City",
      "name": "São Paulo"
    },
    {
      "@type": "Country",
      "name": "Brasil"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Confecção Litúrgica Sob Medida",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roupas de Umbanda Sob Medida",
          "description": "Roupas de ração, conjuntos brancos e batas em percal 100% algodão ou lese bordado."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Trajes de Candomblé Sob Medida",
          "description": "Saiões rodados de 5 a 8 metros, camisus, panos da costa (alaká) e ojás para Iyawó e Egbomy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Modelagem e Costura Sob Medida",
          "description": "Modelagem exclusiva do zero a partir de R$ 150 de mão de obra."
        }
      }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/raizdesanto",
    "https://wa.me/5511969035273"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Raiz de Santo",
  "url": BASE_URL,
  "description": "Atelier de roupas de santo sob medida para Umbanda e Candomblé em São Paulo.",
  "publisher": {
    "@id": `${BASE_URL}/#organization`
  }
};

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": BASE_URL
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `${BASE_URL}${item.path}`
      }))
    ]
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

interface BuildMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
}

export function buildMetadata({ title, description, path, keywords, image }: BuildMetadataProps): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image || LOGO_URL;

  return {
    title,
    description,
    keywords: keywords || "roupa de santo sob medida, roupas de umbanda são paulo, roupas de candomblé sob medida, costura religiosa, atelier afro-religioso",
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
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
