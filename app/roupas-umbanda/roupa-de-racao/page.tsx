import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CheckCircle2, Sparkles, ShieldCheck, Clock, Scissors, Phone } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { buildMetadata, generateBreadcrumbSchema, BASE_URL } from "../../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Roupa de Ração de Umbanda Sob Medida em SP | Raiz de Santo",
  description: "Roupa de ração para Umbanda sob medida em São Paulo: camisas, calças e calçolões em percal 200 fios e puro algodão. Frescor na gira e envio nacional.",
  path: "/roupas-umbanda/roupa-de-racao",
  keywords: "roupa de ração umbanda, roupa de ração branca, calçolão umbanda sob medida são paulo, conjunto de ração percal"
});

export default function RoupaDeRacaoPage() {
  const whatsappUrl = "https://wa.me/5511969035273?text=" + encodeURIComponent("Olá! Gostaria de um orçamento para Roupa de Ração de Umbanda sob medida.");
  const phoneHref = "tel:+5511969035273";

  const breadcrumbs = [
    { label: "Roupas de Umbanda", href: "/roupas-umbanda" },
    { label: "Roupa de Ração" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Roupas de Umbanda", path: "/roupas-umbanda" },
    { name: "Roupa de Ração", path: "/roupas-umbanda/roupa-de-racao" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Confecção de Roupa de Ração de Umbanda Sob Medida",
    "serviceType": "Confecção de Roupa de Ração",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Raiz de Santo",
      "url": BASE_URL,
      "telephone": "+55-11-96903-5273"
    },
    "areaServed": "Brasil",
    "description": "Confecção sob medida de conjuntos de ração para Umbanda em percal 200 fios e puro algodão respirável."
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
              Vestimenta Litúrgica Essencial
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-brand-primary leading-tight mb-6">
              Roupa de Ração de Umbanda <br />
              <span className="italic text-brand-secondary">Sob Medida em São Paulo</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-ink/75 leading-relaxed font-light max-w-2xl mx-auto mb-8">
              A vestimenta fundamental do dia a dia no terreiro. Confeccionada em tecidos 100% naturais — percal 200 fios ou tricoline de algodão — com corte anatômico que permite liberdade de movimento total e frescor durante longas giras.
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

        {/* Detalhes Técnicos e Fundamento */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-brand-accent/20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary block mb-2">
                Qualidade de Ateliê
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary mb-4">
                O que compõe a nossa Roupa de Ração
              </h2>
              <p className="text-brand-ink/75 leading-relaxed font-light text-base sm:text-lg">
                Diferente de roupas industrializadas que esquentam e encolhem na primeira lavagem, nossas peças de ração utilizam tecidos pré-lavados e encolhidos, garantindo que o caimento permaneça perfeito. O corte nas axilas e gancho é ampliado para evitar rasgos ao sentar no toco ou ao incorporar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-brand-bg border border-brand-accent/30 space-y-3">
                <div className="flex items-center gap-3">
                  <Scissors className="w-5 h-5 text-brand-secondary" />
                  <h3 className="font-serif font-bold text-lg text-brand-primary">Modelagem Anatômica</h3>
                </div>
                <p className="text-sm text-brand-ink/70 font-light leading-relaxed">
                  Batas masculinas e femininas com pence ou corte reto, decote confortável sem apertar o pescoço e comprimento calibrado para não subir durante a incorporação.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-bg border border-brand-accent/30 space-y-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-secondary" />
                  <h3 className="font-serif font-bold text-lg text-brand-primary">Costura Francesa Reforçada</h3>
                </div>
                <p className="text-sm text-brand-ink/70 font-light leading-relaxed">
                  Todas as costuras internas são embutidas (costura francesa), evitando atrito com a pele e aumentando a durabilidade contra lavagens frequentes com anil e sabão da costa.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-brand-bg/60 border border-brand-accent/30 text-center space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">
                Atendimento Presencial em SP e Envio para Todo o Brasil
              </h3>
              <p className="text-sm text-brand-ink/75 font-light max-w-xl mx-auto">
                Você pode agendar um horário no atelier para tirar suas medidas ou enviar suas medidas pelo WhatsApp com nosso guia ilustrado passo a passo.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:bg-brand-secondary hover:text-brand-primary transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-brand-secondary" />
                  Solicitar Roupa de Ração pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
