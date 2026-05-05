"use client";

import { Scissors, MapPin, MessageCircle, Clock, Zap, ShieldCheck } from 'lucide-react';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para costura sob medida.";

export default function Costura() {
  return (
    <>
      <header className="pt-40 pb-20 px-6 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="font-serif text-4xl md:text-7xl mb-8 text-brand-primary leading-tight">
               <span className="italic">Alta Costura</span> <br /> Afro-Religiosa
            </h1>
            <p className="text-lg md:text-xl text-brand-ink/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
               Diga adeus ao "P", "M" ou "G" genérico. Sua vestimenta de santo deve respeitar seu corpo e seu axé. Confeccionamos sob medida com precisão milimétrica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <a href={whatsappUrl} className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Agendar Medição
               </a>
            </div>
          </div>
          <div className="flex-1 relative flex justify-center">
             <div className="bg-white p-4 rounded-[3rem] shadow-2xl border border-brand-accent/30 rotate-3 transform transition-transform hover:rotate-0">
                <div className="bg-brand-bg/50 rounded-[2.5rem] p-12 text-center">
                   <Scissors className="w-16 h-16 text-brand-secondary mx-auto mb-6" />
                   <h3 className="font-serif text-3xl text-brand-primary mb-4 italic">Corte Único</h3>
                   <p className="text-sm font-medium opacity-50 uppercase tracking-widest">Feito por mãos de axé</p>
                </div>
             </div>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {[
            { icon: Scissors, title: "Modelagem Exclusiva", desc: "Criamos o molde do zero para o seu corpo, garantindo que a roupa não aperte e nem sobre tecido." },
            { icon: Clock, title: "Tempo do Axé", desc: "Não fazemos 'fast fashion'. Cada peça tem o tempo necessário para um acabamento superior e reforçado." },
            { icon: ShieldCheck, title: "Durabilidade Real", desc: "Costuras intertravadas e reforçadas para aguentar rituais intensos e muitas lavagens." }
          ].map((item, i) => (
             <div key={i} className="text-center px-4">
                <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-accent shadow-sm">
                   <item.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-serif text-2xl text-brand-primary mb-4">{item.title}</h3>
                <p className="text-brand-ink/70 leading-relaxed text-sm">{item.desc}</p>
             </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-bg border-y border-brand-accent/20">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1">
               <div className="bg-brand-primary text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
                  <h2 className="font-serif text-3xl md:text-5xl mb-8 relative z-10 leading-tight">Agendamento em <br/><span className="italic text-brand-secondary">São Paulo</span></h2>
                  <p className="text-white/80 mb-10 relative z-10 leading-relaxed">
                     Venha tomar um café conosco, sentir a textura dos tecidos e tirar suas medidas pessoalmente em nosso atelier na capital paulista.
                  </p>
                  <a href={whatsappUrl} className="flex items-center gap-3 bg-brand-secondary text-brand-primary font-bold px-8 py-4 rounded-full relative z-10 hover:bg-white transition-all w-fit">
                     <MapPin className="w-5 h-5" />
                     Pedir Endereço no WhatsApp
                  </a>
               </div>
            </div>
            <div className="flex-1">
               <h3 className="font-serif text-3xl text-brand-primary mb-8">Atendimento à Distância</h3>
               <p className="text-brand-ink/70 mb-10 leading-relaxed">
                  Não está em SP? Sem problemas. Enviamos um guia em vídeo ensinando como tirar as 5 medidas principais com uma fita métrica simples. Já vestimos centenas de pessoas de longe com 100% de precisão.
               </p>
               <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                     <Zap className="w-5 h-5 text-brand-secondary" />
                     <span className="text-sm font-bold uppercase tracking-widest text-brand-primary opacity-60">Envio para todo Brasil via Sedex</span>
                  </div>
                  <div className="flex gap-4 items-center">
                     <Zap className="w-5 h-5 text-brand-secondary" />
                     <span className="text-sm font-bold uppercase tracking-widest text-brand-primary opacity-60">Atendimento via Vídeo-Chamada</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
