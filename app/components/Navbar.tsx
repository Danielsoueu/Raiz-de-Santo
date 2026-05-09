"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MessageCircle, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOGO_URL = "https://i.ibb.co/5xFmZ0MS/An-ncio-do-Instagram-para-Nova-Cole-o-com-Desconto-Rosa-e-Branco.png";
const whatsappUrl = "https://wa.me/5511969035273?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/95 backdrop-blur-md shadow-sm border-b border-brand-accent/20 h-16' : 'bg-transparent h-20 md:h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <img 
              src={LOGO_URL} 
              alt="Logo Raiz de Santo" 
              width="40" 
              height="40" 
              className={`rounded-full object-cover shadow-sm border border-brand-primary/10 transition-all ${scrolled ? 'h-8 w-8' : 'h-10 w-10 md:h-12 md:w-12'}`} 
            />
            <span className={`font-serif font-bold tracking-tight text-brand-primary transition-all ${scrolled ? 'text-lg' : 'text-xl md:text-2xl'}`}>Raiz de Santo</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/70 hover:text-brand-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold hover:bg-brand-primary/90 transition-all shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 md:w-4 h-4" />
              <span className="hidden sm:inline">Orçamento</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-brand-primary hover:bg-brand-accent/20 rounded-xl transition-colors"
              aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-bg lg:hidden flex flex-col"
          >
            <div className="h-20 flex items-center justify-between px-6 border-b border-brand-accent/20">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <img src={LOGO_URL} alt="Logo" width="32" height="32" className="h-8 w-8 rounded-full" />
                <span className="font-serif font-bold text-lg text-brand-primary">Raiz de Santo</span>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-brand-primary hover:bg-brand-accent/20 rounded-xl"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-10 px-6 space-y-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-6 rounded-[2rem] bg-white border border-brand-accent/30 shadow-sm grow"
                  >
                    <span className="font-serif text-2xl text-brand-primary">{link.label}</span>
                    <ChevronRight className="w-5 h-5 text-brand-secondary" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-8 border-t border-brand-accent/20 bg-white">
              <a 
                href={whatsappUrl}
                className="w-full bg-brand-primary text-white py-5 rounded-full text-center font-bold flex items-center justify-center gap-3 shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                Solicitar Orçamento Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
