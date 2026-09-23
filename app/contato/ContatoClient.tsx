"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  MessageCircle, 
  Video, 
  MapPin, 
  Truck, 
  ChevronRight, 
  Plus, 
  Minus,
  CheckCircle2, 
  AlertCircle,
  Clock, 
  Scissors, 
  Quote,
  Phone,
  Send,
  Sparkles,
  RotateCcw
} from "lucide-react";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { trackContactFormSubmit, trackWhatsAppClick } from "../../lib/analytics";

const whatsappNumber = "5511969035273";
const displayPhone = "(11) 96903-5273";
const phoneHref = `tel:+${whatsappNumber}`;
const defaultWhatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de um orçamento para roupas de santo sob medida.`;

const faqs = [
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer: "Depende da complexidade da peça e da nossa agenda no momento do pedido. Combinamos o prazo desde o início, de forma realista — e cumprimos o que prometemos. Em geral, peças simples ficam prontas em 2 a 3 semanas. Trajes mais elaborados ou kits de obrigação podem levar mais tempo. Nos avise com antecedência sempre que puder."
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

export default function ContatoClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    tradicao: "Umbanda",
    tipoPeca: "Roupa de Ração",
    tecido: "Quero indicação da costureira",
    prazo: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setFormData(prev => ({ ...prev, telefone: value }));
    if (errors.telefone) {
      setErrors(prev => ({ ...prev, telefone: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim() || formData.nome.trim().length < 3) {
      newErrors.nome = "Por favor, digite seu nome completo (mínimo 3 caracteres).";
    }

    const rawPhone = formData.telefone.replace(/\D/g, "");
    if (!rawPhone || rawPhone.length < 10) {
      newErrors.telefone = "Por favor, informe um número de WhatsApp válido com DDD (ex: 11 98765-4321).";
    }

    if (!formData.mensagem.trim() || formData.mensagem.trim().length < 10) {
      newErrors.mensagem = "Descreva um pouco sobre a peça que você precisa (mínimo 10 caracteres).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare direct whatsapp link with encoded query
    const messageText = `Olá, Raiz de Santo! Meu nome é ${formData.nome}.%0A%0A` +
      `*Solicitação de Orçamento:*%0A` +
      `• Linha/Tradição: ${formData.tradicao}%0A` +
      `• Tipo de Peça: ${formData.tipoPeca}%0A` +
      `• Tecido: ${formData.tecido}%0A` +
      `• Prazo Desejado: ${formData.prazo || "A combinar"}%0A` +
      `• Contato/WhatsApp: ${formData.telefone}%0A%0A` +
      `*Detalhes:* ${encodeURIComponent(formData.mensagem)}`;

    const generatedUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;
    setWhatsappRedirectUrl(generatedUrl);

    trackContactFormSubmit(formData.tradicao || "Geral");

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFormData({
      nome: "",
      telefone: "",
      tradicao: "Umbanda",
      tipoPeca: "Roupa de Ração",
      tecido: "Quero indicação da costureira",
      prazo: "",
      mensagem: "",
    });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans overflow-x-hidden">
      <Breadcrumbs items={[{ label: "Contato & Orçamento" }]} />

      {/* Hero Section */}
      <header className="pt-12 md:pt-16 pb-16 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary/15 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Fale com a gente • Ateliê em São Paulo
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl mb-6 text-brand-primary leading-tight font-bold">
              Vamos Conversar — Sua Roupa de <br />
              <span className="italic text-brand-secondary">Santo Começa Aqui</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-ink/75 leading-relaxed font-light mx-auto max-w-2xl">
              Atendemos com calma, respeito à tradição e sem julgamento. Conte para nossa costureira o que sua casa pede e cuidaremos de cada detalhe.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Seção de Canais de Atendimento Rápidos */}
      <section className="py-12 px-4 sm:px-6 bg-white border-y border-brand-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* WhatsApp Card */}
            <a 
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-bg p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 bg-brand-secondary/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#25D366] group-hover:text-white transition-all text-brand-primary">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif text-brand-primary">WhatsApp Direto</h3>
              <p className="text-brand-ink/70 text-sm mb-6 leading-relaxed">
                Envie fotos de referências, tire dúvidas de tecidos e receba orçamento rápido.
              </p>
              <div className="mt-auto inline-flex items-center gap-2 text-[#25D366] font-bold text-sm">
                <span>Conversar agora</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Ligação Telefônica Card - Clickable Phone */}
            <a 
              href={phoneHref}
              className="bg-brand-bg p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 bg-brand-secondary/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all text-brand-primary">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif text-brand-primary">Ligação Telefônica</h3>
              <p className="text-brand-ink/70 text-sm mb-6 leading-relaxed">
                Prefere ligar? Fale diretamente com o atelier em horário comercial.
              </p>
              <div className="mt-auto inline-flex items-center gap-2 text-brand-primary font-bold text-sm">
                <span>{displayPhone}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Atendimento Presencial */}
            <div className="bg-brand-bg p-8 rounded-[2.5rem] border border-brand-accent/30 shadow-sm flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-brand-secondary/15 rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif text-brand-primary">Atelier em São Paulo</h3>
              <p className="text-brand-ink/70 text-sm mb-6 leading-relaxed">
                Tire suas medidas, toque nas amostras de tecidos e receba atendimento sob medida.
              </p>
              <div className="mt-auto text-brand-primary font-semibold text-xs uppercase tracking-wider opacity-80">
                Agendamento via WhatsApp
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção Principal: Formulário de Orçamento com Validação, Mensagens de Erro e Sucesso */}
      <section className="py-20 px-4 sm:px-6 bg-brand-bg">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-3">
              Sem Custo • Sem Compromisso
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold mb-4">
              Peça seu Orçamento Detalhado
            </h2>
            <p className="text-brand-ink/75 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed">
              Preencha os campos abaixo com as informações da sua encomenda. Retornaremos com agilidade pelo WhatsApp com os valores e prazos.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 md:p-14 rounded-[3rem] border border-brand-accent/30 shadow-xl relative">
            
            {/* Success Message Banner */}
            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 px-6 text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-3 max-w-lg mx-auto">
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-primary font-bold">
                    Axé! Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-brand-ink/80 text-sm sm:text-base leading-relaxed font-light">
                    Recebemos os detalhes do seu pedido. Nossa costureira entrará em contato pelo seu WhatsApp <strong className="font-semibold text-brand-primary">{formData.telefone}</strong> em breve com o orçamento e orientações.
                  </p>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  {whatsappRedirectUrl && (
                    <a
                      href={whatsappRedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-emerald-600 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Abrir no WhatsApp Agora
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-brand-accent/40 text-brand-primary font-semibold text-sm hover:bg-brand-bg transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Enviar outra solicitação
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Error Summary Banner if form has errors */}
                {Object.keys(errors).length > 0 && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" />
                    <div className="text-sm">
                      <strong className="font-semibold block mb-1">Por favor, corrija os seguintes itens:</strong>
                      <ul className="list-disc pl-5 space-y-1">
                        {Object.values(errors).map((err, idx) => (
                          <li key={idx}>{err}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nome Completo */}
                  <div>
                    <label htmlFor="nome" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
                      Nome Completo <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="nome"
                      type="text"
                      value={formData.nome}
                      onChange={(e) => {
                        setFormData({ ...formData, nome: e.target.value });
                        if (errors.nome) setErrors({ ...errors, nome: "" });
                      }}
                      placeholder="Ex: Mariana Silveira"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-brand-bg border transition-all text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary ${
                        errors.nome ? 'border-rose-400 bg-rose-50/50' : 'border-brand-accent/40 focus:border-brand-primary'
                      }`}
                    />
                    {errors.nome && (
                      <p className="text-xs text-rose-600 mt-1.5 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.nome}
                      </p>
                    )}
                  </div>

                  {/* Telefone / WhatsApp */}
                  <div>
                    <label htmlFor="telefone" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
                      WhatsApp com DDD <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handlePhoneChange}
                      placeholder="Ex: (11) 98765-4321"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-brand-bg border transition-all text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary ${
                        errors.telefone ? 'border-rose-400 bg-rose-50/50' : 'border-brand-accent/40 focus:border-brand-primary'
                      }`}
                    />
                    {errors.telefone && (
                      <p className="text-xs text-rose-600 mt-1.5 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.telefone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Tradição / Linha */}
                  <div>
                    <label htmlFor="tradicao" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
                      Sua Linha / Casa
                    </label>
                    <select
                      id="tradicao"
                      value={formData.tradicao}
                      onChange={(e) => setFormData({ ...formData, tradicao: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-brand-bg border border-brand-accent/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                    >
                      <option value="Umbanda">Umbanda</option>
                      <option value="Candomblé Ketu">Candomblé Ketu</option>
                      <option value="Candomblé Angola">Candomblé Angola</option>
                      <option value="Candomblé Jeje">Candomblé Jeje</option>
                      <option value="Jurema Sagrada / Catimbó">Jurema Sagrada / Catimbó</option>
                      <option value="Outra / Quero orientação">Outra / Quero orientação</option>
                    </select>
                  </div>

                  {/* Tipo de Peça */}
                  <div>
                    <label htmlFor="tipoPeca" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
                      Tipo de Peça
                    </label>
                    <select
                      id="tipoPeca"
                      value={formData.tipoPeca}
                      onChange={(e) => setFormData({ ...formData, tipoPeca: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-brand-bg border border-brand-accent/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                    >
                      <option value="Roupa de Ração Completa">Roupa de Ração Completa</option>
                      <option value="Saia de Baiana / Roda">Saia de Baiana / Roda</option>
                      <option value="Camisu com Bico / Lese">Camisu com Bico / Lese</option>
                      <option value="Pano da Costa / Ojá">Pano da Costa / Ojá</option>
                      <option value="Traje para Entidade / Orixá">Traje para Entidade / Orixá</option>
                      <option value="Kit de Obrigação (1, 3, 7 ou 21 anos)">Kit de Obrigação Completo</option>
                      <option value="Alta Costura Sob Medida">Alta Costura Sob Medida</option>
                      <option value="Outro Modelo">Outro Modelo</option>
                    </select>
                  </div>

                  {/* Tecido de Preferência */}
                  <div>
                    <label htmlFor="tecido" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
                      Tecido Desejado
                    </label>
                    <select
                      id="tecido"
                      value={formData.tecido}
                      onChange={(e) => setFormData({ ...formData, tecido: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-brand-bg border border-brand-accent/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                    >
                      <option value="Quero indicação da costureira">Quero indicação da costureira</option>
                      <option value="Percal 200/300 fios">Percal 200/300 fios</option>
                      <option value="Lese bordado legítimo">Lese bordado legítimo</option>
                      <option value="Linho puro / misto">Linho puro / misto</option>
                      <option value="Algodão encorpado">Algodão encorpado</option>
                      <option value="Tenho meu próprio tecido">Tenho meu próprio tecido</option>
                    </select>
                  </div>
                </div>

                {/* Prazo ou Data */}
                <div>
                  <label htmlFor="prazo" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
                    Prazo Desejado ou Data do Evento <span className="text-brand-ink/50 text-[11px] font-normal">(Opcional)</span>
                  </label>
                  <input
                    id="prazo"
                    type="text"
                    value={formData.prazo}
                    onChange={(e) => setFormData({ ...formData, prazo: e.target.value })}
                    placeholder="Ex: Preciso para o dia 20 de Novembro ou em até 3 semanas"
                    className="w-full px-4 py-3.5 rounded-2xl bg-brand-bg border border-brand-accent/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                  />
                </div>

                {/* Mensagem / Medidas / Observações */}
                <div>
                  <label htmlFor="mensagem" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">
                    Detalhes do Pedido ou Medidas <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => {
                      setFormData({ ...formData, mensagem: e.target.value });
                      if (errors.mensagem) setErrors({ ...errors, mensagem: "" });
                    }}
                    placeholder="Ex: Gostaria de saber o valor para fazer uma saia de 5 metros de roda em lese branco com acabamento reforçado, e um camisu. Tenho altura 1,65m e manequim 44."
                    className={`w-full px-4 py-3.5 rounded-2xl bg-brand-bg border transition-all text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary ${
                      errors.mensagem ? 'border-rose-400 bg-rose-50/50' : 'border-brand-accent/40 focus:border-brand-primary'
                    }`}
                  />
                  {errors.mensagem && (
                    <p className="text-xs text-rose-600 mt-1.5 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.mensagem}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-brand-ink/60 font-light text-center sm:text-left">
                    🔒 Seus dados não são compartilhados. Resposta rápida via WhatsApp.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-brand-primary/90 active:scale-95 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando solicitação...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-brand-secondary" />
                        <span>Solicitar Orçamento Gratuito</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* Seção Como Preparar seu Orçamento */}
      <section className="py-20 px-4 sm:px-6 bg-white overflow-hidden relative border-t border-brand-accent/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-secondary block mb-2">
                Guia Rápido
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary font-bold mb-6 leading-tight">
                Como agilizar <span className="italic text-brand-secondary">seu orçamento</span>
              </h2>
              <p className="text-brand-ink/75 leading-relaxed text-base font-light">
                Não precisa ter tudo resolvido antes de nos procurar — nossa costureira te orienta em cada escolha. Mas se você já souber estes 5 pontos, o orçamento fica pronto ainda mais rápido:
              </p>
            </div>
            
            <div className="grid gap-4">
              {[
                { title: "1. Peça Desejada", desc: "Saia com roda, roupa de ração, camisu, pano da costa ou conjunto completo de saída." },
                { title: "2. Nação ou Linha", desc: "Umbanda, Ketu, Angola, Jeje — para respeitarmos os padrões litúrgicos." },
                { title: "3. Tecido de Preferência", desc: "Percal, lese, linho, algodão, ou se você já comprou o tecido." },
                { title: "4. Prazo / Data", desc: "Data da cerimônia, obrigação ou toque para organizarmos a produção." },
                { title: "5. Cidade para Entrega", desc: "Se você retira no atelier em São Paulo ou precisa de envio via Correios." },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-brand-bg border border-brand-accent/20 flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-brand-primary text-brand-secondary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-brand-ink/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full flex justify-center">
            <div className="p-8 md:p-12 bg-brand-bg rounded-[3.5rem] border border-brand-accent/40 shadow-xl max-w-md w-full space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary text-brand-secondary flex items-center justify-center">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-brand-primary font-bold">
                Mão de Obra Transparente
              </h3>
              <p className="text-sm text-brand-ink/75 leading-relaxed font-light">
                Mão de obra artesanal a partir de <strong className="font-bold text-brand-primary">R$150</strong> para peças de ração sob medida. Sem taxas surpresas.
              </p>
              <div className="pt-4 border-t border-brand-accent/20 space-y-3">
                <div className="flex items-center gap-2 text-xs text-brand-ink/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Molde desenhado do zero para seu corpo</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-ink/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Costuras com reforço interno durável</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-ink/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Atendimento respeitoso e humanizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Dúvidas Frequentes (Accordion com botões acessíveis) */}
      <section className="py-20 px-4 sm:px-6 bg-brand-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-3 font-bold">
              Dúvidas Comuns
            </h2>
            <p className="text-brand-ink/60 uppercase text-xs font-bold tracking-widest">
              Tudo o que você precisa saber antes de encomendar
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-brand-accent/30 rounded-3xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-serif text-base sm:text-lg text-brand-primary group-hover:text-brand-secondary transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center shrink-0">
                    {openFaq === idx ? (
                      <Minus className="w-4 h-4 text-brand-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-brand-primary" />
                    )}
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-brand-ink/75 text-sm sm:text-base leading-relaxed border-t border-brand-accent/15 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 bg-brand-primary text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight font-bold">
            Pronto para vestir sua fé com <br />
            <span className="italic text-brand-secondary">respeito e conforto?</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Fale conosco pelo canal de sua preferência. Nossa costureira está à disposição para tirar todas as dúvidas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-bold shadow-xl hover:bg-emerald-600 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
            <a 
              href={phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 text-white hover:bg-white/20 px-8 py-4 rounded-full text-base font-bold transition-all border border-white/20"
            >
              <Phone className="w-5 h-5 text-brand-secondary" />
              Ligar para {displayPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
