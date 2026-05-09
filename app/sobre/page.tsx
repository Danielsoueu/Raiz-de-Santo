import type { Metadata } from "next";
import { Quote, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sobre a Raiz de Santo | Referência em Roupas de Santo em São Paulo",
  description: "Conheça a história da Raiz de Santo, nosso atelier em São Paulo e nosso compromisso com o fundamento e a dignidade na confecção afro-religiosa.",
};

export default function Sobre() {
  return (
    <div className="min-h-screen">
      <header className="pt-40 pb-20 px-6 bg-brand-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-7xl mb-8 text-brand-primary leading-tight">
            Nossa <span className="italic text-brand-secondary">Raiz</span> e Missão
          </h1>
          <p className="text-lg md:text-xl text-brand-ink/70 leading-relaxed font-light">
             A Raiz de Santo nasceu do desejo de unir a excelência da alta costura ao profundo respeito exigido pelo sagrado.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
           <div className="space-y-6">
              <h2 className="font-serif text-3xl text-brand-primary">Mãos que Entendem o Axé</h2>
              <p className="text-brand-ink/70 leading-relaxed text-lg">
                Não somos apenas uma confecção. Somos praticantes, entendemos o que significa carregar uma roupa de santo. Sabemos que cada ponto dado é um fundamento que se sustenta, e cada corte de tecido é o início de um novo ciclo na vida espiritual do nosso cliente.
              </p>
              <p className="text-brand-ink/70 leading-relaxed text-lg">
                Nossa fundadora trouxe décadas de experiência em alfaiataria convencional para o mundo religioso, elevando o padrão de acabamento do que se encontra hoje no mercado.
              </p>
           </div>

           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 p-8 border border-brand-accent/30 rounded-[2.5rem]">
                 <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-brand-primary" />
                 </div>
                 <h3 className="font-bold text-xl text-brand-primary">O Sagrado em Primeiro Lugar</h3>
                 <p className="text-sm text-brand-ink/60 leading-relaxed">Respeitamos o preceito. Se uma peça precisa de silêncio ou cuidados específicos durante a confecção, nós o faremos.</p>
              </div>
              <div className="space-y-4 p-8 border border-brand-accent/30 rounded-[2.5rem]">
                 <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-brand-primary" />
                 </div>
                 <h3 className="font-bold text-xl text-brand-primary">Qualidade que Honra a Fé</h3>
                 <p className="text-sm text-brand-ink/60 leading-relaxed">Não economizamos no acabamento. Usamos os melhores fios, as melhores máquinas e o olhar mais atento aos detalhes.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-bg text-center">
         <div className="max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-brand-secondary mx-auto mb-10 opacity-30" />
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary italic leading-tight mb-8">
               &quot;Minha missão é garantir que você chegue ao pé do seu santo sentindo-se impecável, confortável e digno da sua fé.&quot;
            </h2>
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-brand-primary opacity-50">— Fundadora Raiz de Santo</p>
         </div>
      </section>
    </div>
  );
}
