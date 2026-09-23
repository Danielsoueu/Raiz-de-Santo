import type { Metadata } from "next";
import ContatoClient from "./ContatoClient";
import { buildMetadata, generateBreadcrumbSchema, generateFaqSchema } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contato & Orçamento | Raiz de Santo Atelier em São Paulo",
  description: "Solicite seu orçamento de roupas de Umbanda e Candomblé sob medida. Atendimento com hora marcada em São Paulo e envio nacional pelos Correios.",
  path: "/contato",
  keywords: "orçamento roupa de santo sp, contato atelier afro religioso, encomendar roupa de umbanda, costura candomblé são paulo"
});

const faqs = [
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer: "Depende da complexidade da peça e da nossa agenda no momento do pedido. Combinamos o prazo desde o início, de forma realista — e cumprimos o que prometemos. Em geral, peças simples ficam prontas em 2 a 3 semanas. Trajes mais elaborados ou kits de obrigação podem levar mais tempo."
  },
  {
    question: "Posso trazer meu próprio tecido?",
    answer: "Sim, com muito prazer e sem nenhuma taxa adicional! Costuramos com o material que você trouxer. Se não tiver certeza sobre o tipo ou metragem do tecido, a gente orienta antes de você comprar."
  },
  {
    question: "Atende quem está fora de São Paulo?",
    answer: "Sim! Atendemos todo o Brasil por WhatsApp e videochamada. Enviamos um guia em vídeo simples para você tirar suas próprias medidas com fita métrica e despachamos com seguro e código de rastreamento."
  },
  {
    question: "Vocês fazem kits de obrigação completos?",
    answer: "Sim. Confeccionamos kits para obrigações de 1, 3, 7 e 21 anos. Entre em contato com antecedência e nos conte o que a sua casa pede — montamos o kit completo com prazo e preço fechados."
  },
  {
    question: "O orçamento tem algum custo?",
    answer: "Não. A conversa inicial, a orientação sobre tecidos e o orçamento detalhado são 100% gratuitos e sem nenhum compromisso."
  }
];

export default function Contato() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Contato & Atendimento", path: "/contato" }
  ]);
  const faqSchema = generateFaqSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContatoClient />
    </>
  );
}
