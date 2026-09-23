"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  MessageCircle, 
  Menu, 
  X,
  ChevronRight,
  Phone,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_URL } from '../../lib/seo';

const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";
const phoneHref = "tel:+5511969035273";

const navLinks = [
  { href: "/roupas-umbanda", label: "Umbanda" },
  { href: "/roupas-candomble", label: "Candomblé" },
  { href: "/costura-sob-medida", label: "Sob Medida" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-brand-bg/95 backdrop-blur-md shadow-sm border-b border-brand-accent/20 h-16 md:h-20' 
            : 'bg-brand-bg/85 backdrop-blur-sm border-b border-brand-accent/10 h-20 md:h-24'
        }`}
        aria-label="Navegação Principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Clickable Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-secondary rounded-full pr-2" 
            onClick={() => setIsOpen(false)}
            aria-label="Raiz de Santo - Voltar ao início"
          >
            <Image 
              src={LOGO_URL} 
              alt="Logotipo Raiz de Santo - Atelier de Alta Costura Afro-Religiosa em São Paulo" 
              width={44} 
              height={44} 
              priority
              referrerPolicy="no-referrer"
              className={`rounded-full object-cover shadow-sm border border-brand-primary/10 transition-all group-hover:scale-105 ${
                scrolled ? 'h-9 w-9 md:h-10 md:w-10' : 'h-10 w-10 md:h-12 md:w-12'
              }`} 
            />
            <div className="flex flex-col">
              <span className={`font-serif font-bold tracking-tight text-brand-primary transition-all group-hover:text-brand-secondary ${
                scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
              }`}>
                Raiz de Santo
              </span>
              <span className="hidden sm:block text-[9px] uppercase tracking-[0.25em] text-brand-primary/60 font-medium -mt-1">
                Alta Costura Religiosa
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`text-xs font-bold uppercase tracking-wider transition-colors py-2 relative ${
                    isActive 
                      ? 'text-brand-primary font-extrabold' 
                      : 'text-brand-ink/70 hover:text-brand-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary rounded-full" 
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Direct phone link - Clickable */}
            <a 
              href={phoneHref}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-secondary transition-colors px-3 py-2 rounded-full hover:bg-brand-accent/20"
              title="Ligar para a Raiz de Santo"
            >
              <Phone className="w-3.5 h-3.5 text-brand-secondary" />
              <span>(11) 96903-5273</span>
            </a>

            {/* Direct WhatsApp CTA button */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-brand-primary/90 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-brand-secondary" />
              <span>Orçamento</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 text-brand-primary hover:bg-brand-accent/20 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-secondary min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isOpen ? "Fechar Menu de Navegação" : "Abrir Menu de Navegação"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-brand-bg shadow-2xl flex flex-col justify-between border-l border-brand-accent/30 overflow-y-auto"
            >
              {/* Header inside drawer */}
              <div className="h-20 flex items-center justify-between px-6 border-b border-brand-accent/20 bg-white/50">
                <Link 
                  href="/" 
                  className="flex items-center gap-3" 
                  onClick={() => setIsOpen(false)}
                  aria-label="Raiz de Santo - Início"
                >
                  <Image 
                    src={LOGO_URL} 
                    alt="Logotipo Raiz de Santo - Atelier de Alta Costura Afro-Religiosa em São Paulo" 
                    width={36} 
                    height={36} 
                    referrerPolicy="no-referrer" 
                    className="h-9 w-9 rounded-full border border-brand-primary/20" 
                  />
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-lg text-brand-primary">Raiz de Santo</span>
                    <span className="text-[8px] uppercase tracking-widest text-brand-primary/60">Sob Medida • SP</span>
                  </div>
                </Link>
                <button 
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 text-brand-primary hover:bg-brand-accent/20 rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Fechar Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Nav links */}
              <div className="flex-1 py-6 px-5 space-y-2.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/50 px-2 mb-2">
                  Selecione uma opção:
                </p>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                        isActive 
                          ? 'bg-brand-primary text-white border-brand-primary shadow-md' 
                          : 'bg-white border-brand-accent/30 text-brand-primary hover:bg-brand-accent/15'
                      }`}
                    >
                      <span className="font-serif text-lg font-medium">{link.label}</span>
                      <ChevronRight className={`w-5 h-5 ${isActive ? 'text-brand-secondary' : 'text-brand-primary/40'}`} />
                    </Link>
                  );
                })}

                {/* Direct Telephone link inside mobile drawer */}
                <div className="pt-4 mt-4 border-t border-brand-accent/20">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/50 px-2 mb-2">
                    Contato Direto
                  </p>
                  <a 
                    href={phoneHref}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-brand-accent/30 text-brand-primary font-bold text-sm hover:bg-brand-accent/15 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-secondary/15 flex items-center justify-center text-brand-primary">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-brand-ink/60 font-normal block">Ligue agora:</span>
                      <span>(11) 96903-5273</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Bottom WhatsApp CTA in drawer */}
              <div className="p-6 border-t border-brand-accent/20 bg-white space-y-3">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-3.5 px-4 rounded-full text-center font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pedir Orçamento no WhatsApp
                </a>
                <p className="text-[11px] text-center text-brand-ink/60">
                  Atendimento em São Paulo • Envio Nacional
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
