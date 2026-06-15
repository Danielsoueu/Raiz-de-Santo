import type { Metadata } from 'next';

/**
 * SEO Configuration
 * Centralized metadata and Open Graph configuration
 */

const BASE_URL = process.env.APP_URL || 'https://raiz-de-santo.vercel.app';

export const defaultMetadata: Metadata = {
  title: {
    template: '%s | Raiz de Santo',
    default: 'Raiz de Santo | Roupas de Santo Sob Medida em São Paulo',
  },
  description:
    'Roupas de Umbanda e Candomblé sob medida em São Paulo. Modelagem exclusiva, tecidos premium e acabamento artesanal. Mão de obra a partir de R$150.',
  keywords: [
    'roupas de santo sob medida',
    'confecção afro-religiosa São Paulo',
    'roupa de umbanda SP',
    'roupa de candomblé sob medida',
    'costureira roupas religiosas',
    'atelier roupas de santo',
  ],
  authors: [{ name: 'Raiz de Santo' }],
  creator: 'Raiz de Santo',
  publisher: 'Raiz de Santo',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googleb370d7549e62df93',
  },
};

export const openGraph = {
  type: 'website',
  locale: 'pt_BR',
  url: BASE_URL,
  siteName: 'Raiz de Santo',
  title: 'Raiz de Santo | Roupas de Santo Sob Medida',
  description:
    'Confeccionamos roupas de Umbanda e Candomblé sob medida em São Paulo — com respeito ao seu corpo, ao seu Orixá e ao fundamento da sua casa.',
  images: [
    {
      url: `${BASE_URL}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Raiz de Santo - Roupas de Santo Sob Medida',
    },
  ],
};

export const twitter = {
  card: 'summary_large_image',
  title: 'Raiz de Santo | Roupas de Santo Sob Medida',
  description:
    'Confeccionamos roupas de Umbanda e Candomblé sob medida em São Paulo.',
  images: [`${BASE_URL}/og-image.jpg`],
  creator: '@raizdesanto',
};

/**
 * Schema.org JSON-LD for LocalBusiness
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Raiz de Santo',
  description:
    'Atelier especializado em roupas de Umbanda e Candomblé sob medida',
  url: BASE_URL,
  telephone: '+5511969035273',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-23.5505',
    longitude: '-46.6333',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: 'R$',
  image: `${BASE_URL}/logo.png`,
  sameAs: [
    'https://www.instagram.com/raizdesanto',
    'https://www.facebook.com/raizdesanto',
  ],
};

/**
 * Generate structured data script
 */
export function generateStructuredData(schema: object): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

/**
 * Helper to build metadata with Open Graph and canonical URL
 */
interface BuildMetadataOptions {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  keywords,
  canonical = '/',
  ogImage,
}: BuildMetadataOptions): Metadata {
  const fullUrl = `${BASE_URL}${canonical}`;
  
  return {
    title,
    description,
    keywords: keywords ? keywords.split(', ').map(k => k.trim()) : defaultMetadata.keywords,
    openGraph: {
      ...openGraph,
      title,
      description,
      url: fullUrl,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: title }] : openGraph.images,
    },
    twitter: {
      ...twitter,
      title,
      description,
      images: ogImage ? [ogImage] : twitter.images,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}
