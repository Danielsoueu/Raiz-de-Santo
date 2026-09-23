import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CheckCircle2, Sparkles, ShieldCheck, Scissors, Phone } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { buildMetadata, generateBreadcrumbSchema, BASE_URL } from "../../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Saia de Umbanda Sob Medida em SP | Raiz de Santo",
  description: "Saias de Umbanda rodadas sob medida em São Paulo: 4 a 7 metros de roda, percal 200 fios, lese e detalhes em guipir. Cós confortável e envio nacional.",
  path: "/roupas-umbanda/saia-de-umbanda",
  keywords: "saia de umbanda sob medida, saia rodada umbanda sp, saia branca gira, saia de umbanda 5 metros"
});

export default function SaiaDeUmbandaPage() {
  const whatsappUrl = "https://wa.me/5511969035273?text=" + encodeURIComponent("Olá! Gostaria de um orçamento para Saia de Umbanda sob medida.");
  const phoneHref = "tel:+5511969035273";

  const breadcrumbs = [
    { label: "Roupas de Umbanda", href: "/roupas-umbanda" },
    { label: "Saia de Umbanda" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Roupas de Umbanda", path: "/roupas-umbanda" },
    { name: "Saia de Umbanda", path: "/roupas-umbanda/saia-de-umbanda" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Confecção de Saias de Umbanda Sob Medida",
    "serviceType": "Confecção de Saias Litúrgicas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Raiz de Santo",
      "url": BASE_URL,
      "telephone": "+55-11-96903-5273"
    },
    "areaServed": "Brasil",
    "description": "Confecção artesanal de saias de Umbanda sob medida com roda de 4 a 7 metros, barra reforçada e cós anatômico."
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
              Movimento & Beleza na Gira
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-brand-primary leading-tight mb-6">
              Saias de Umbanda Sob Medida <br />
              <span className="italic text-brand-secondary">em São Paulo</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-ink/75 leading-relaxed font-light max-w-2xl mx-auto mb-8">
              Saias com roda calibrada (de 4 a 7 metros), armação fluida que gira com graça nos pontos cantados e cós anatômico em elástico e cordão regulável para não apertar a cintura durante horas de trabalho.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5 text-brand-secondary" />
                Pedir Orçamento de Saia no WhatsApp
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

        {/* Detalhes Técnicos */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-brand-accent/20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary block mb-2">
                Diferenciais do Nosso Corte
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary mb-4">
                Por que encomendar sua saia sob medida?
              </h2>
              <p className="text-brand-ink/75 leading-relaxed font-light text-base sm:text-lg">
                Saias industriais com medidas padrão costumam sobrar ou faltar no comprimento, arrastando no chão sujo ou ficando curtas na altura do tornozelo. No atelier Raiz de Santo, calculamos o comprimento exato da sua cintura ao peito do pé descalço, garantindo segurança ao dançar descalça na gira.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-brand-bg border border-brand-accent/30 space-y-3">
                <Sparkles className="w-6 h-6 text-brand-secondary" />
                <h3 className="font-serif font-bold text-lg text-brand-primary">Roda Ampla & Fluida</h3>
                <p className="text-xs sm:text-sm text-brand-ink/70 font-light leading-relaxed">
                  Trabalhamos com opções de 4 a 7 metros de roda com entretelas leves ou bicos de algodão para garantir abertura uniforme ao rodar.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-bg border border-brand-accent/30 space-y-3">
                <Scissors className="w-6 h-6 text-brand-secondary" />
                <h3 className="font-serif font-bold text-lg text-brand-primary">Cós Duplo Ajustável</h3>
                <p className="text-xs sm:text-sm text-brand-ink/70 font-light leading-relaxed">
                  Combinação de elástico reforçado com cordão interno para ajuste personalizado. Segurança absoluta que não marca o abdômen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-bg border border-brand-accent/30 space-y-3">
                <ShieldCheck className="w-6 h-6 text-brand-secondary" />
                <h3 className="font-serif font-bold text-lg text-brand-primary">Barra Reforçada</h3>
                <p className="text-xs sm:text-sm text-brand-ink/70 font-light leading-relaxed">
                  Bainha dupla com costura resistente que suporta o atrito constante com o chão de cimento batido ou cerâmica do terreiro.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-brand-bg/60 border border-brand-accent/30 text-center space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">
                Encomende para Linhas e Falanges Específicas
              </h3>
              <p className="text-sm text-brand-ink/75 font-light max-w-xl mx-auto">
                Confeccionamos também saias temáticas para Pombagira, Cabocla, Marinheira, Cigana e Baiana com rendas, fitas e babados exclusivos.
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
