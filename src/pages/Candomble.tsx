import { motion } from 'motion/react';
import { MessageCircle, Check, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de Candomblé.";

export default function Candomble() {
  return (
    <>
      <SEO 
        title="Roupas de Candomblé Sob Medida | Trajes de Iyawó e Saída"
        description="Confecção especializada em roupas de Candomblé. Panos da costa, camisus, saias de armação e trajes completos para iniciação em São Paulo. Alta costura religiosa."
        keywords="roupas de candomblé sp, pano da costa candomblé, camisu feminino sob medida, traje de iyawó sp, roupas de santo candomblé preço"
        canonical="/roupas-candomble"
      />
      
      <header className="pt-40 pb-20 px-6 bg-brand-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-7xl mb-8 leading-tight">
            Roupas de <span className="italic text-brand-secondary">Candomblé</span> <br /> com Fundamento
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            A elegância e a hierarquia do Candomblé refletidas em cada metro de tecido. Confeccionamos sob medida para todas as nações (Ketu, Angola, Jeje).
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        </div>
      </header>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">A Tradição do <span className="italic">Kêto ao Angola</span></h2>
              <p className="text-brand-ink/70 text-lg leading-relaxed font-light">
                Entendemos as especificidades de cada nação. Se você precisa de um <span className="font-bold text-brand-primary">Pano da Costa</span> com bordado específico ou um <span className="font-bold text-brand-primary">Camisu</span> com acabamento em lese, nossa costureira especialista cuida de cada detalhe.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                 {[
                   "Panos da Costa e Proas",
                   "Saias de Armação (Alodê)",
                   "Camisus com Bico e Bordados",
                   "Trajes para Saída de Santo",
                   "Roupas de Ração Completas",
                   "Pano de Cabeça (Ojá)"
                 ].map((item, i) => (
                   <div key={i} className="flex gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-brand-secondary" />
                      <span className="text-sm font-medium text-brand-primary">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="flex-1 relative">
               <div className="bg-brand-bg rounded-[4rem] p-12 border border-brand-accent shadow-2xl relative z-10 text-center">
                  <Sparkles className="w-12 h-12 text-brand-secondary mx-auto mb-6" />
                  <h3 className="font-serif text-2xl text-brand-primary mb-6">Vestimentas para Obrigações</h3>
                  <p className="text-brand-ink/70 mb-10 leading-relaxed text-sm">Oferecemos kits completos para obrigações de 1, 3, 7 e 21 anos. Consulte nossos prazos especiais para saídas.</p>
                  <a 
                    href={whatsappUrl}
                    className="flex items-center justify-center gap-3 bg-brand-primary text-white py-5 rounded-full font-bold shadow-xl hover:bg-brand-primary/90 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Orçar Kit Obrigação
                  </a>
               </div>
               <div className="absolute -z-10 -top-5 -right-5 w-full h-full bg-brand-secondary rounded-[4rem] opacity-10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-bg">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-primary mb-8 leading-tight">Envio Seguro de Trajes <br/> para Todo o Brasil</h2>
            <p className="text-brand-ink/70 mb-12 leading-relaxed">
               Nossas peças são enviadas impecáveis, prontas para o uso ritual. Temos orgulho de vestir filhos de santo de Norte a Sul do país com o mesmo carinho e fundamento.
            </p>
            <div className="inline-flex gap-8 items-center bg-white border border-brand-accent/50 px-8 py-4 rounded-full">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-accent/30 overflow-hidden flex items-center justify-center">
                       <Check className="w-5 h-5 text-brand-primary" />
                    </div>
                  ))}
               </div>
               <p className="text-xs font-bold uppercase tracking-widest text-brand-primary/60">+500 peças enviadas com sucesso</p>
            </div>
         </div>
      </section>
    </>
  );
}
