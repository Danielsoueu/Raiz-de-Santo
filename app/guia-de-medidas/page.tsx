import Link from 'next/link';
import { buildMetadata } from '../../lib/seo';
import { ORDER_DEADLINE } from '../../lib/order-info';

export const metadata = buildMetadata({ title: 'Como tirar medidas para roupas de santo sob medida | Raiz de Santo', description: 'Guia de cintura, quadril, busto e comprimento para solicitar orçamento de roupas de santo. Tire medidas com fita métrica e confirme com o ateliê.', path: '/guia-de-medidas' });

const measurements = [
  ['Busto ou tórax', 'Passe a fita ao redor da parte mais ampla do peito, mantendo-a paralela ao chão e sem apertar.'],
  ['Cintura', 'Meça ao redor da cintura natural. Se a saia for usada em outra altura, informe também a altura desejada do cós.'],
  ['Quadril', 'Passe a fita ao redor da parte mais larga dos quadris e do bumbum, com os pés próximos.'],
  ['Comprimento da saia', 'Meça da altura onde ficará o cós até a barra desejada. Informe o calçado que pretende usar.'],
  ['Comprimento da bata', 'Meça do ponto alto do ombro, próximo ao pescoço, até a altura desejada para a barra.'],
  ['Pano da costa e ojá', 'Informe largura e comprimento desejados, forma de uso e orientações da sua casa. Confirme as dimensões com o ateliê.'],
];

export default function MeasurementsPage() {
  return <article className="max-w-4xl mx-auto px-6 py-14 space-y-8">
    <Link href="/catalogo" className="underline text-brand-primary">Voltar ao catálogo</Link>
    <h1 className="font-serif text-3xl md:text-5xl text-brand-primary">Como tirar suas medidas</h1>
    <p>Use uma fita métrica flexível, anote tudo em centímetros e, se possível, peça ajuda a outra pessoa. Vista uma roupa leve, mantenha a postura natural e não prenda a respiração. A fita deve encostar no corpo sem apertar.</p>
    <div className="space-y-6">{measurements.map(([name, instruction], index) => <section key={name} className="rounded-2xl border border-brand-accent p-6 bg-white space-y-3">
      <h2 className="font-serif text-xl text-brand-primary">{index + 1}. {name}</h2><p>{instruction}</p>
    </section>)}</div>
    <section className="space-y-4">
      <h2 className="font-serif text-2xl text-brand-primary">Antes de enviar</h2>
      <ul className="list-disc pl-6 space-y-2"><li>Confira cada medida duas vezes e identifique a peça desejada.</li><li>Não acrescente folgas por conta própria: informe a medida do corpo e como prefere o caimento.</li><li>A metragem da roda da saia não é a medida da cintura; combine a roda com o ateliê.</li><li>O guia ajuda no orçamento. Medidas adicionais e ajustes de modelagem devem ser confirmados antes da confecção.</li></ul>
      <p>{ORDER_DEADLINE}</p>
      <Link className="inline-block bg-brand-primary text-white px-6 py-4 rounded-full" href="/contato">Enviar informações para orçamento</Link>
    </section>
  </article>;
}
