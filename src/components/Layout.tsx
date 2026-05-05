import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Instagram, 
  Facebook 
} from 'lucide-react';

const LOGO_URL = "https://i.ibb.co/5xFmZ0MS/An-ncio-do-Instagram-para-Nova-Cole-o-com-Desconto-Rosa-e-Branco.png";
const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink font-sans selection:bg-brand-secondary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-accent/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="Logo Raiz de Santo" 
              width="40" 
              height="40" 
              className="h-10 w-10 rounded-full object-cover shadow-sm border border-brand-primary/10" 
            />
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-brand-primary">Raiz de Santo</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/roupas-umbanda" className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Umbanda</Link>
            <Link to="/roupas-candomble" className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Candomblé</Link>
            <Link to="/costura-sob-medida" className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Sob Medida</Link>
            <Link to="/sobre" className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Sobre Nós</Link>
            <Link to="/contato" className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors">Contato</Link>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fazer orçamento pelo WhatsApp"
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-all shadow-lg flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Orçamento</span>
          </a>
        </div>
      </nav>

      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="py-20 md:py-24 px-6 bg-white border-t border-brand-accent/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 md:gap-20 mb-16 md:mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <img 
                src={LOGO_URL} 
                alt="Raiz de Santo" 
                width="48" 
                height="48" 
                loading="lazy"
                className="h-12 w-12 rounded-full border border-brand-primary/5" 
              />
              <span className="font-serif text-3xl font-bold tracking-tight text-brand-primary">Raiz de Santo</span>
            </div>
            <p className="text-brand-ink/70 max-w-sm leading-relaxed text-base font-light">
              Tornando-se referência em <span className="font-medium text-brand-primary">roupas de santo sob medida</span> através do respeito à tradição e ao cliente. Confeccionando fé em cada detalhe.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] opacity-50 mb-10">Navegação</h3>
            <ul className="space-y-6 text-sm font-medium">
              <li><Link to="/roupas-umbanda" className="hover:text-brand-secondary transition-colors underline-offset-8">Roupas para Umbanda</Link></li>
              <li><Link to="/roupas-candomble" className="hover:text-brand-secondary transition-colors underline-offset-8">Roupas para Candomblé</Link></li>
              <li><Link to="/costura-sob-medida" className="hover:text-brand-secondary transition-colors underline-offset-8">Alta Costura Religiosa</Link></li>
              <li><Link to="/blog" className="hover:text-brand-secondary transition-colors underline-offset-8">Dicas de Axé (Blog)</Link></li>
              <li><Link to="/contato" className="hover:text-brand-secondary transition-colors underline-offset-8">Falar com Especialista</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] opacity-50 mb-10">Presença Social</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/raizdesanto" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-500 hover:rotate-6 border border-brand-accent/40 shadow-sm"><Instagram className="w-6 h-6" /></a>
              <a href="https://www.instagram.com/raizdesanto" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-500 hover:-rotate-6 border border-brand-accent/40 shadow-sm"><Facebook className="w-6 h-6" /></a>
            </div>
            <div className="mt-10 pt-10 border-t border-brand-accent/20">
               <p className="text-xs text-brand-ink/70 font-medium font-sans">Atendimento Humanizado em São Paulo <br/> Envio Seguro para todo o Brasil.</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-brand-accent/20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] opacity-50 text-center">
          <p>© 2026 Raiz de Santo. São Paulo | Brasil</p>
          <div className="flex gap-10">
            <Link to="/privacidade">Privacidade</Link>
            <Link to="/termos">Termos</Link>
          </div>
        </div>
      </footer>

      {/* Sticky Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
         <a 
           href={whatsappUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
           aria-label="Falar no WhatsApp"
         >
           <MessageCircle className="w-6 h-6" />
           <span className="absolute right-full mr-4 bg-white text-brand-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-accent/30">
              Orçamento Rápido
           </span>
         </a>
      </div>
    </div>
  );
};
