"use client";

import { Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Vim pelo site e gostaria de um orçamento.";

export default function Contato() {
  return (
    <div className="min-h-screen">
      <header className="pt-40 pb-20 px-6 bg-brand-bg text-center">
        <h1 className="font-serif text-4xl md:text-7xl mb-8 text-brand-primary leading-tight">
          Estamos aqui para <br/> <span className="italic text-brand-secondary">Te Ouvir</span>
        </h1>
        <p className="text-lg text-brand-ink/70 max-w-2xl mx-auto">
          Sabemos que roupas de santo são carregadas de preceito. Nosso atendimento é humanizado e focado no seu fundamento.
        </p>
      </header>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-16">
               <div className="space-y-10">
                  <h2 className="font-serif text-3xl text-brand-primary">Canais de Atendimento</h2>
                  <div className="grid gap-8">
                     <a href={whatsappUrl} className="flex gap-6 items-center p-6 bg-brand-bg rounded-[2rem] border border-brand-accent/30 hover:border-brand-secondary transition-all group">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all">
                           <MessageCircle className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">WhatsApp (Principal)</p>
                           <p className="text-lg font-bold text-brand-primary">(11) 96903-5273</p>
                        </div>
                     </a>
                     
                     <div className="flex gap-6 items-center p-6 border border-brand-accent/20 rounded-[2rem]">
                        <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center">
                           <MapPin className="w-6 h-6 text-brand-primary" />
                        </div>
                        <div>
                           <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">Localização</p>
                           <p className="text-lg font-bold text-brand-primary">São Paulo, SP - Atelier Próprio</p>
                           <p className="text-xs text-brand-ink/50">Atendimento presencial sob agendamento.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-8">
                  <h3 className="font-serif text-3xl text-brand-primary">Redes Sociais</h3>
                  <div className="flex gap-4">
                     <a href="https://www.instagram.com/raizdesanto" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all border border-brand-accent/30">
                        <Instagram className="w-6 h-6" />
                     </a>
                     <a href="https://www.instagram.com/raizdesanto" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all border border-brand-accent/30">
                        <Facebook className="w-6 h-6" />
                     </a>
                  </div>
               </div>
            </div>

            <div className="bg-brand-primary rounded-[4rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
               <h2 className="font-serif text-3xl md:text-5xl mb-8 relative z-10 leading-tight">Envie-nos uma <br/><span className="italic text-brand-secondary">Mensagem</span></h2>
               <p className="text-white/70 mb-12 relative z-10 leading-relaxed italic">
                  "O respeito ao sagrado começa com uma conversa honesta. Deixe-nos saber o que você precisa."
               </p>
               <div className="space-y-6 relative z-10">
                  <div className="p-10 border border-white/20 rounded-[2rem] bg-white/5 backdrop-blur-sm">
                     <h4 className="font-bold mb-4 text-brand-secondary">Dicas para seu orçamento:</h4>
                     <ul className="text-sm space-y-4 text-white/80">
                        <li className="flex gap-2"><span>1.</span> Informe o tipo de peça (Ex: Saia de Baiana)</li>
                        <li className="flex gap-2"><span>2.</span> Se já tem o tecido ou precisará de nós</li>
                        <li className="flex gap-2"><span>3.</span> Para quando você precisa da peça pronta</li>
                        <li className="flex gap-2"><span>4.</span> Sua localização (Para cálculo de frete)</li>
                     </ul>
                  </div>
                  <a href={whatsappUrl} className="block text-center bg-white text-brand-primary py-5 rounded-full font-black text-xl hover:bg-brand-secondary hover:text-brand-primary transition-all shadow-xl shadow-brand-primary/20">
                     Iniciar conversa agora
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
