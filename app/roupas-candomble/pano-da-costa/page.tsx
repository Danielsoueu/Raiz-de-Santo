import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CheckCircle2, Sparkles, ShieldCheck, Scissors, Phone } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { buildMetadata, generateBreadcrumbSchema, BASE_URL } from "../../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pano da Costa (Alaká) Sob Medida em SP | Raiz de Santo",
  description: "Pano da Costa (Alaká) sob medida em São Paulo: tecidos nobres estruturados, bordados, franjas e proas para Candomblé Ketu, Angola e Jeje. Envio nacional.",
  path: "/roupas-candomble/pano-da-costa",
  keywords: "pano da costa candomble, alaka sob medida sp, pano da costa bordado, alaka iyawó são paulo"
});

export default function PanoDaCostaPage() {
  const whatsappUrl = "https://wa.me/5511969035273?text=" + encodeURIComponent("Olá! Gostaria de encomendar um Pano da Costa (Alaká) sob medida.");
  const phoneHref = "tel:+5511969035273";

  const breadcrumbs = [
    { label: "Roupas de Candomblé", href: "/roupas-candomble" },
    { label: "Pano da Costa (Alaká)" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Roupas de Candomblé", path: "/roupas-candomble" },
    { name: "Pano da Costa", path: "/roupas-candomble/pano-da-costa" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Confecção de Pano da Costa (Alaká) Sob Medida",
    "serviceType": "Confecção de Pano da Costa Litúrgico",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Raiz de Santo",
      "url": BASE_URL,
      "telephone": "+55-11-96903-5273"
    },
    "areaServed": "Brasil",
    "description": "Confecção artesanal de Pano da Costa (Alaká) litúrgico com medidas personalizadas para Iyawó e senhoras no Candomblé."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-brand-bg font-sans overflow-x-hidden">
        <Breadcrumbs items={breadcrumbs} />

        <header className="pt-8 md:pt-14 pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/15 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Símbolo de Proteção e Respeito
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-brand-primary leading-tight mb-6">
              Pano da Costa (Alaká) Sob Medida <br />
              <span className="italic text-brand-secondary">em São Paulo</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-ink/75 leading-relaxed font-light max-w-2xl mx-auto mb-8">
              O Pano da Costa é peça fundamental da indumentária feminina no Candomblé, simbolizando dignidade, resguardo e respeito aos ancestrais. Costuramos sob medida para Ketu, Angola e Jeje, garantindo a largura e comprimento exatos para uma amarração firme e elegante.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5 text-brand-secondary" />
                Pedir Orçamento no WhatsApp
              </a>
              <a 
                href={phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-brand-accent/40 text-brand-primary font-bold text-sm hover:bg-brand-bg transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-secondary" />
                (11) 96903-5273
              </a>
            </div>
          </div>
        </header>

        {/* Detalhes do Fundamento e Tecidos */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-brand-accent/20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary block mb-2">
                Tradição & Acabamento
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary mb-4">
                Por que a medida certa do Alaká importa?
              </h2>
              <p className="text-brand-ink/75 leading-relaxed font-light text-base sm:text-lg">
                Um Pano da Costa muito estreito não cobre as costas adequadamente e escorrega durante o xirê. Um pano excessivamente longo ou pesado cansa a médium e dificulta os passos sagrados. No nosso atelier, consideramos a altura, a largura do tronco e a nação da sua casa para confeccionar a peça na proporção ideal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-brand-bg border border-brand-accent/30 space-y-3">
                <Sparkles className="w-6 h-6 text-brand-secondary" />
                <h3 className="font-serif font-bold text-lg text-brand-primary">Variedade de Tecidos Nobres</h3>
                <p className="text-sm text-brand-ink/70 font-light leading-relaxed">
                  Confeccionamos em piquet encorpado, percal penteado, lese de algodão puro, brocados tradicionais e tecidos listrados típicos com franjas artesanais.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-bg border border-brand-accent/30 space-y-3">
                <ShieldCheck className="w-6 h-6 text-brand-secondary" />
                <h3 className="font-serif font-bold text-lg text-brand-primary">Acabamento com Proas e Bicos</h3>
                <p className="text-sm text-brand-ink/70 font-light leading-relaxed">
                  Bainhas impecáveis, cantos mitrados e aplicação de bicos de algodão ou entremeios conforme a recomendação do seu zelador ou zeladora de santo.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-brand-bg/60 border border-brand-accent/30 text-center space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">
                Kits de Saída e Obrigações de Ano
              </h3>
              <p className="text-sm text-brand-ink/75 font-light max-w-xl mx-auto">
                Fazemos conjuntos completos de Alaká com Ojá combinando, ideais para presentes de obrigação, saídas de Iyawó e festas anuais dos Orixás.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:bg-brand-secondary hover:text-brand-primary transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-brand-secondary" />
                  Pedir orçamento pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
