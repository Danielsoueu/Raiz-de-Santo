import type { Metadata } from 'next';
import CatalogoClient from './CatalogoClient';
import { buildMetadata, generateBreadcrumbSchema, BASE_URL } from '../../lib/seo';
import { CATALOGO_ITEMS } from '../../lib/catalogo-data';

export const metadata: Metadata = buildMetadata({
  title: "Catálogo de Roupas de Santo Sob Medida | Raiz de Santo São Paulo",
  description: "Explore o catálogo de roupas de santo artesanais para Umbanda e Candomblé. Conjuntos de Baiana, Pomba Gira, Erê, Wax Africano e Roupas de Ração sob medida em SP.",
  path: "/catalogo",
  keywords: "catálogo roupas de santo, conjuntos de umbanda sob medida, saias de candomblé são paulo, roupas de pomba gira, trajes de erê cosme e damião, alta costura afro religiosa sp"
});

export default function CatalogoPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Catálogo de Peças", path: "/catalogo" }
  ]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catálogo de Roupas de Santo Sob Medida - Raiz de Santo",
    "description": "Modelos e coleções exclusivas de roupas litúrgicas para Umbanda e Candomblé confeccionadas sob medida.",
    "numberOfItems": CATALOGO_ITEMS.length,
    "itemListElement": CATALOGO_ITEMS.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "@id": `${BASE_URL}/catalogo#${item.id}`,
        "name": item.nome,
        "sku": item.codigo,
        "mpn": item.codigo,
        "image": item.fotos && item.fotos.length > 0 ? item.fotos : [item.fotoPrincipal],
        "description": item.descricaoCompleta || item.descricaoCurta,
        "category": item.categoriaLabel,
        "material": item.tecido,
        "color": item.paletaCores.nomeCores,
        "url": `${BASE_URL}/catalogo#${item.id}`,
        "brand": {
          "@type": "Brand",
          "name": "Raiz de Santo"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "BRL",
          "price": item.precoBase,
          "priceValidUntil": "2027-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "url": `${BASE_URL}/catalogo#${item.id}`,
          "seller": {
            "@type": "Organization",
            "name": "Raiz de Santo"
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "BR",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 7,
            "returnMethod": "https://schema.org/ReturnByMail",
            "returnFees": "https://schema.org/FreeReturn"
          },
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "BRL"
            },
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": "BR"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 3,
                "maxValue": 7,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 2,
                "maxValue": 5,
                "unitCode": "DAY"
              }
            }
          }
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <CatalogoClient />
    </>
  );
}
