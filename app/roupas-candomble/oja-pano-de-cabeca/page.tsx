import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Sparkles, ShieldCheck, Phone } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { buildMetadata, generateBreadcrumbSchema, BASE_URL } from "../../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ojá e Pano de Cabeça Sob Medida em SP | Raiz de Santo",
  description: "Ojá (pano de cabeça) sob medida em São Paulo: tecidos que não escorregam, percal, lese e algodão com entremeios. Amarração firme para Candomblé e Umbanda.",
  path: "/roupas-candomble/oja-pano-de-cabeca",
  keywords: "oja pano de cabeca, oja candomble sp, pano de cabeca sob medida, amarracao de oja sao paulo"
});

export default function OjaPanoDeCabecaPage() {
  const whatsappUrl = "https://wa.me/5511969035273?text=" + encodeURIComponent("Olá! Gostaria de encomendar Ojá (Pano de Cabeça) sob medida.");
  const phoneHref = "tel:+5511969035273";

  const breadcrumbs = [
    { label: "Roupas de Candomblé", href: "/roupas-candomble" },
    { label: "Ojá (Pano de Cabeça)" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Roupas de Candomblé", path: "/roupas-candomble" },
    { name: "Ojá e Pano de Cabeça", path: "/roupas-candomble/oja-pano-de-cabeca" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Confecção de Ojá e Pano de Cabeça Sob Medida",
    "serviceType": "Confecção de Indumentária Litúrgica",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Raiz de Santo",
      "url": BASE_URL,
      "telephone": "+55-11-96903-5273"
    },
    "areaServed": "Brasil",
    "description": "Confecção sob medida de Ojás (panos de cabeça) litúrgicos com caimento e firmeza ideais para amarrações sagradas."
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
              Resguardo do Ori • Candomblé & Umbanda
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-brand-primary leading-tight mb-6">
              Ojá (Pano de Cabeça) Sob Medida <br />
              <span className="italic text-brand-secondary">em São Paulo</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-ink/75 leading-relaxed font-light max-w-2xl mx-auto mb-8">
              O Ojá protege o Ori, a cabeça sagrada, e coroa a filha de santo no barracão. Confeccionamos sob medida nos tecidos corretos — que não escorregam da cabeça, com a largura e o comprimento exatos para laços e amarrações imponentes.
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

        {/* Detalhes de Tecido e Estrutura */}
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-brand-accent/20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary block mb-2">
                Estrutura & Firmeza
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary mb-4">
                Por que o tecido certo do Ojá faz toda a diferença?
              </h2>
              <p className="text-brand-ink/75 leading-relaxed font-light text-base sm:text-lg">
                Muitos panos de cabeça comerciais usam tecidos sintéticos e lisos que escorregam na primeira volta ou cedem com o suor da gira. Nossos Ojás são feitos em algodão penteado, percal estruturado ou lese com textura que adere suavemente ao cabelo, permitindo amarrações altas e laços armados que permanecem intactos até o final do xirê.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-brand-bg border border-brand-accent/30 space-y-3">
                <Sparkles className="w-6 h-6 text-brand-secondary" />
                <h3 className="font-serif font-bold text-lg text-brand-primary">Modelos Simples e com Bico</h3>
                <p className="text-sm text-brand-ink/70 font-light leading-relaxed">
                  Oferecemos desde o Ojá liso de ração para recolhimento até modelos de festa com bicos de algodão nas pontas, bordado inglês e rendas finas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-bg border border-brand-accent/30 space-y-3">
                <ShieldCheck className="w-6 h-6 text-brand-secondary" />
                <h3 className="font-serif font-bold text-lg text-brand-primary">Medidas Personalizadas</h3>
                <p className="text-sm text-brand-ink/70 font-light leading-relaxed">
                  Defina o comprimento ideal de acordo com a amarração da sua casa: de 2 metros para amarrações tradicionais até 3 metros para laços grandes e volumosos de Iansã, Oxum e Iemanjá.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-brand-bg/60 border border-brand-accent/30 text-center space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">
                Atendimento Presencial em SP ou Envio Nacional
              </h3>
              <p className="text-sm text-brand-ink/75 font-light max-w-xl mx-auto">
                Encomende peças avulsas ou kits para o terreiro inteiro. Despachamos com segurança para todo o Brasil.
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
