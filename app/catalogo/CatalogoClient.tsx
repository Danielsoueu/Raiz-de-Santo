"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Sparkles, 
  MessageCircle, 
  Scissors, 
  Check, 
  ChevronRight, 
  X, 
  Calculator, 
  Ruler, 
  Clock, 
  ShieldCheck, 
  HelpCircle,
  Eye,
  SlidersHorizontal,
  ArrowRight,
  Phone
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  CATALOGO_ITEMS, 
  CATEGORIAS_FILTRO, 
  TIPOS_PECA_FILTRO, 
  CatalogoItem 
} from '../../lib/catalogo-data';
import { trackWhatsAppClick } from '../../lib/analytics';

const phoneHref = "tel:+5511969035273";
const defaultWhatsappNumber = "5511969035273";

export default function CatalogoClient() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todos');
  const [tipoPecaAtivo, setTipoPecaAtivo] = useState<string>('todos');
  const [busca, setBusca] = useState<string>('');
  const [itemSelecionado, setItemSelecionado] = useState<CatalogoItem | null>(null);

  // Estados do Simulador de Orçamento
  const [simTipo, setSimTipo] = useState<'conjunto' | 'saia' | 'racao' | 'oja'>('conjunto');
  const [simTecido, setSimTecido] = useState<'cliente' | 'algodao' | 'nobre'>('algodao');
  const [simRoda, setSimRoda] = useState<'3m' | '4m' | '5m' | '6m'>('4m');
  const [simBordado, setSimBordado] = useState<boolean>(true);

  // Filtragem de itens
  const itensFiltrados = useMemo(() => {
    return CATALOGO_ITEMS.filter((item) => {
      const matchCategoria = categoriaAtiva === 'todos' || item.categoria === categoriaAtiva;
      const matchTipo = tipoPecaAtivo === 'todos' || item.tipoPeca === tipoPecaAtivo;
      
      const termo = busca.toLowerCase().trim();
      const matchBusca = !termo || 
        item.nome.toLowerCase().includes(termo) ||
        item.codigo.toLowerCase().includes(termo) ||
        item.tecido.toLowerCase().includes(termo) ||
        item.orixaEntidade.toLowerCase().includes(termo) ||
        item.tradicao.toLowerCase().includes(termo) ||
        item.descricaoCurta.toLowerCase().includes(termo);

      return matchCategoria && matchTipo && matchBusca;
    });
  }, [categoriaAtiva, tipoPecaAtivo, busca]);

  // Cálculo da Simulação
  const orcamentoSimulado = useMemo(() => {
    let base = 0;
    let tempoEstimado = "7 a 10 dias úteis";

    if (simTipo === 'conjunto') {
      base = simTecido === 'cliente' ? 200 : simTecido === 'algodao' ? 320 : 420;
      tempoEstimado = "10 a 14 dias úteis";
    } else if (simTipo === 'saia') {
      base = simTecido === 'cliente' ? 120 : simTecido === 'algodao' ? 190 : 260;
      tempoEstimado = "5 a 8 dias úteis";
    } else if (simTipo === 'racao') {
      base = simTecido === 'cliente' ? 130 : simTecido === 'algodao' ? 190 : 250;
      tempoEstimado = "6 a 9 dias úteis";
    } else {
      base = simTecido === 'cliente' ? 50 : simTecido === 'algodao' ? 85 : 120;
      tempoEstimado = "3 a 5 dias úteis";
    }

    // Adicional de roda
    if (simRoda === '4m') base += 20;
    if (simRoda === '5m') base += 45;
    if (simRoda === '6m') base += 70;

    // Adicional de bico de bordado inglês trabalhado
    if (simBordado) base += 35;

    return {
      valorMinimo: base,
      valorMaximo: Math.round(base * 1.25),
      tempoEstimado,
    };
  }, [simTipo, simTecido, simRoda, simBordado]);

  // Gerador de mensagem WhatsApp para o modelo selecionado
  const gerarLinkWhatsAppModelo = (item: CatalogoItem) => {
    const texto = `Olá! Estava navegando no catálogo da Raiz de Santo e me encantei pelo modelo:
*${item.nome}* (Código: *${item.codigo}*)
Tradição: ${item.tradicao}
Tecido: ${item.tecido}

Gostaria de saber mais informações e solicitar um orçamento sob medida para o meu corpo!`;
    return `https://wa.me/${defaultWhatsappNumber}?text=${encodeURIComponent(texto)}`;
  };

  // Gerador de mensagem WhatsApp para a simulação
  const gerarLinkWhatsAppSimulacao = () => {
    const tipoMap = {
      conjunto: "Conjunto Completo (Saia + Bata + Ojá)",
      saia: "Saia Rodada Avulsa",
      racao: "Roupa de Ração Branca Litúrgica",
      oja: "Ojá / Pano de Cabeça"
    };

    const tecidoMap = {
      cliente: "Vou fornecer meu próprio tecido ao Atelier",
      algodao: "Atelier fornece Tricoline / Percal 100% Algodão",
      nobre: "Atelier fornece Tecido Nobre / Algodão Wax Africano / Bordado"
    };

    const texto = `Olá! Fiz uma simulação de orçamento no catálogo da Raiz de Santo e gostaria de confirmar:
*Item:* ${tipoMap[simTipo]}
*Fornecimento do Tecido:* ${tecidoMap[simTecido]}
*Roda da Saia:* ${simRoda} de roda
*Acabamento:* ${simBordado ? "Com barrado em Bordado Inglês / Renda" : "Bainha de lenço tradicional"}
*Estimativa gerada no site:* R$ ${orcamentoSimulado.valorMinimo} a R$ ${orcamentoSimulado.valorMaximo}

Como podemos agendar as medidas ou tirar dúvidas?`;

    return `https://wa.me/${defaultWhatsappNumber}?text=${encodeURIComponent(texto)}`;
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans pb-24">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Catálogo de Peças Litúrgicas" }]} />

      {/* Hero do Catálogo */}
      <section className="pt-6 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-secondary/15 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
            Coleções Feitas à Mão sob Medida
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-5">
            Catálogo de Roupas de Santo <br />
            <span className="italic text-brand-secondary font-normal">Alta Costura Afro-Religiosa</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-ink/75 max-w-3xl mx-auto leading-relaxed font-light">
            Conheça nossos modelos e conjuntos autorais para <strong>Umbanda e Candomblé</strong>. Cada peça é confeccionada respeitando o fundamento da sua casa, a energia do seu Orixá e a modelagem anatômica para giros com fluidez e solenidade.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-brand-ink/70">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-brand-accent/30 shadow-xs">
              <Scissors className="w-4 h-4 text-brand-secondary" /> Mão de obra a partir de R$ 150
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-brand-accent/30 shadow-xs">
              <Ruler className="w-4 h-4 text-brand-secondary" /> Prova presencial em SP ou medidas à distância
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-brand-accent/30 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-brand-secondary" /> Costuras francesas reforçadas anti-rasgo
            </span>
          </div>
        </div>
      </section>

      {/* Barra de Filtros e Busca */}
      <section className="sticky top-16 md:top-20 z-40 bg-brand-bg/95 backdrop-blur-md py-4 border-y border-brand-accent/20 px-4 sm:px-6 shadow-xs">
        <div className="max-w-7xl mx-auto space-y-3.5">
          {/* Campo de Busca e Seletor de Tipo */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 justify-between">
            {/* Input de Busca */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-ink/40 pointer-events-none" />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar por cor, orixá, tecido ou código (ex: Baiana, Erê, Wax)..."
                className="w-full pl-10 pr-9 py-2.5 bg-white rounded-xl border border-brand-accent/40 text-xs sm:text-sm text-brand-ink placeholder:text-brand-ink/40 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
              />
              {busca && (
                <button
                  type="button"
                  onClick={() => setBusca('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-ink/40 hover:text-brand-primary p-0.5"
                  aria-label="Limpar busca"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Contador de Resultados */}
            <div className="text-xs text-brand-ink/60 flex items-center justify-between md:justify-end gap-3">
              <span>Mostrando <strong>{itensFiltrados.length}</strong> {itensFiltrados.length === 1 ? 'modelo' : 'modelos'}</span>
              {(categoriaAtiva !== 'todos' || tipoPecaAtivo !== 'todos' || busca) && (
                <button
                  type="button"
                  onClick={() => {
                    setCategoriaAtiva('todos');
                    setTipoPecaAtivo('todos');
                    setBusca('');
                  }}
                  className="text-brand-secondary hover:underline font-semibold text-xs"
                >
                  Limpar filtros
                </button>
              )}
            </div>
          </div>

          {/* Abas de Categorias (Interactive Filter Buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIAS_FILTRO.map((cat) => {
              const ativo = categoriaAtiva === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategoriaAtiva(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    ativo 
                      ? 'bg-brand-primary text-white shadow-xs' 
                      : 'bg-white/80 hover:bg-white text-brand-ink/75 border border-brand-accent/20'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Abas Secundárias por Tipo de Peça */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-brand-ink/50 text-[11px] uppercase tracking-wider font-bold shrink-0">Filtrar:</span>
            {TIPOS_PECA_FILTRO.map((tipo) => {
              const ativo = tipoPecaAtivo === tipo.id;
              return (
                <button
                  key={tipo.id}
                  type="button"
                  onClick={() => setTipoPecaAtivo(tipo.id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                    ativo 
                      ? 'bg-brand-secondary/20 text-brand-primary font-bold' 
                      : 'text-brand-ink/65 hover:text-brand-primary'
                  }`}
                >
                  {tipo.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid de Itens do Catálogo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        {itensFiltrados.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-brand-accent/30 p-8 max-w-lg mx-auto">
            <HelpCircle className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
            <h2 className="font-serif text-xl font-bold text-brand-primary mb-2">Nenhum modelo encontrado</h2>
            <p className="text-sm text-brand-ink/70 mb-6">
              Não encontramos peças com os termos pesquisados. Nosso atelier confecciona sob medida em qualquer cor, estampa ou fundamento!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setCategoriaAtiva('todos');
                  setTipoPecaAtivo('todos');
                  setBusca('');
                }}
                className="w-full sm:w-auto px-4 py-2 bg-brand-primary text-white text-xs font-bold rounded-full"
              >
                Ver Todo o Catálogo
              </button>
              <a
                href={`https://wa.me/${defaultWhatsappNumber}?text=${encodeURIComponent("Olá! Estou procurando uma roupa de santo específica que não vi no catálogo. Vocês fazem?")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("catalogo_busca_vazia")}
                className="w-full sm:w-auto px-4 py-2 border border-brand-primary text-brand-primary text-xs font-bold rounded-full hover:bg-brand-primary/5"
              >
                Perguntar no WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {itensFiltrados.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white rounded-3xl border border-brand-accent/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
              >
                {/* Visual Swatch / Banner do Produto */}
                <div 
                  className="relative aspect-4/3 overflow-hidden flex flex-col justify-between p-5"
                  style={{
                    background: `linear-gradient(135deg, ${item.paletaCores.primaria} 0%, ${item.paletaCores.secundaria} 70%, ${item.paletaCores.destaque} 100%)`,
                  }}
                >
                  {/* Subtle textile texture overlay */}
                  <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px] transition-all group-hover:bg-black/15" />

                  {/* Top Bar with Code & Tag */}
                  <div className="relative z-10 flex items-start justify-between gap-2">
                    <span className="font-mono text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-black/60 text-white backdrop-blur-sm border border-white/20">
                      {item.codigo}
                    </span>
                    {item.destaqueTag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-brand-primary shadow-xs">
                        {item.destaqueTag}
                      </span>
                    )}
                  </div>

                  {/* Center Visual Indicator */}
                  <div className="relative z-10 self-center text-center px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-white/40 max-w-[85%]">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-brand-primary/70 mb-0.5">
                      {item.tipoPecaLabel}
                    </p>
                    <p className="font-serif font-bold text-sm sm:text-base text-brand-primary leading-tight line-clamp-1">
                      {item.nome}
                    </p>
                    <p className="text-[10px] text-brand-ink/75 mt-0.5">
                      {item.paletaCores.nomeCores}
                    </p>
                  </div>

                  {/* Bottom Action inside preview */}
                  <div className="relative z-10 flex items-center justify-between text-white text-[11px] font-medium pt-1">
                    <span className="bg-black/40 px-2 py-0.5 rounded text-[10px] backdrop-blur-sm">
                      {item.tradicao}
                    </span>
                    <button
                      type="button"
                      onClick={() => setItemSelecionado(item)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold bg-white/90 hover:bg-white text-brand-primary px-2.5 py-1 rounded-full shadow-sm transition-transform active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5 text-brand-secondary" />
                      Ver Detalhes
                    </button>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Linha de Metadados sem pill static */}
                    <div className="text-[11px] text-brand-ink/60 font-medium mb-1.5 flex items-center gap-1.5">
                      <span>{item.categoriaLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.rodaSugerida}</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-primary leading-snug group-hover:text-brand-secondary transition-colors">
                      {item.nome}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-ink/70 font-light mt-2 line-clamp-2 leading-relaxed">
                      {item.descricaoCurta}
                    </p>

                    {/* Especificações Rápidas */}
                    <div className="mt-4 pt-4 border-t border-brand-accent/20 space-y-1.5 text-xs text-brand-ink/75">
                      <div className="flex items-start gap-2">
                        <Scissors className="w-3.5 h-3.5 text-brand-secondary shrink-0 mt-0.5" />
                        <span className="line-clamp-1"><strong>Tecido:</strong> {item.tecido}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-brand-secondary shrink-0 mt-0.5" />
                        <span className="line-clamp-1"><strong>Orixá / Linha:</strong> {item.orixaEntidade}</span>
                      </div>
                    </div>
                  </div>

                  {/* Preço e Botões de Ação */}
                  <div className="pt-4 border-t border-brand-accent/20 flex flex-col gap-2.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[11px] text-brand-ink/60">Estimativa sob medida:</span>
                      <span className="text-xs sm:text-sm font-bold text-brand-primary">
                        a partir de <strong className="text-base text-brand-secondary">R$ {item.precoBase}</strong>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setItemSelecionado(item)}
                        className="w-full py-2.5 px-3 rounded-xl border border-brand-accent/40 text-xs font-bold text-brand-primary hover:bg-brand-accent/15 transition-colors text-center"
                      >
                        Ver Detalhes
                      </button>

                      <a
                        href={gerarLinkWhatsAppModelo(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick(`catalogo_card_${item.codigo}`)}
                        className="w-full py-2.5 px-3 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all text-center"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-brand-secondary" />
                        Pedir Peça
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* Seção: Simulador de Orçamento Interativo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <div className="bg-white rounded-3xl border border-brand-accent/40 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/15 text-brand-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5 text-brand-secondary" />
              Calculadora em Tempo Real
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-3">
              Simulador de Confecção Sob Medida
            </h2>
            <p className="text-sm sm:text-base text-brand-ink/75 leading-relaxed font-light">
              Escolha o tipo de peça, o fornecimento do tecido e os acabamentos desejados para calcular uma estimativa instantânea. O valor final pode ser validado no WhatsApp diretamente com nossa mestra de costura.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controles da Simulação */}
            <div className="lg:col-span-7 space-y-6">
              {/* 1. Tipo de Peça */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2.5">
                  1. O que deseja confeccionar?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'conjunto', label: 'Conjunto (3 pçs)', desc: 'Saia, Ojá e Bata' },
                    { id: 'saia', label: 'Saia de Santo', desc: 'Roda rodada' },
                    { id: 'racao', label: 'Roupa de Ração', desc: 'Branca litúrgica' },
                    { id: 'oja', label: 'Ojá / Cabeça', desc: 'Pano esculpido' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSimTipo(opt.id as any)}
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        simTipo === opt.id 
                          ? 'border-brand-primary bg-brand-primary text-white shadow-md' 
                          : 'border-brand-accent/30 bg-brand-bg/50 hover:bg-brand-bg text-brand-ink'
                      }`}
                    >
                      <p className="font-serif font-bold text-xs sm:text-sm">{opt.label}</p>
                      <p className={`text-[10px] mt-0.5 ${simTipo === opt.id ? 'text-white/80' : 'text-brand-ink/50'}`}>
                        {opt.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Fornecimento do Tecido */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2.5">
                  2. Fornecimento do Tecido
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'cliente', label: 'Eu levo meu tecido', sub: 'Apenas mão de obra' },
                    { id: 'algodao', label: 'Atelier fornece 100% Algodão', sub: 'Tricoline ou Percal' },
                    { id: 'nobre', label: 'Atelier fornece Wax / Nobre', sub: 'Tecido Africano ou Seda' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSimTecido(opt.id as any)}
                      className={`p-3.5 rounded-2xl text-left border transition-all ${
                        simTecido === opt.id 
                          ? 'border-brand-secondary bg-brand-secondary/15 text-brand-primary font-bold' 
                          : 'border-brand-accent/30 bg-white hover:bg-brand-bg/50 text-brand-ink'
                      }`}
                    >
                      <p className="text-xs sm:text-sm font-bold">{opt.label}</p>
                      <p className="text-[10px] text-brand-ink/60 mt-0.5">{opt.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Tamanho da Roda (se for saia ou conjunto) */}
              {(simTipo === 'conjunto' || simTipo === 'saia') && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2.5">
                    3. Metragem da Roda da Saia
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: '3m', label: '3 metros', sub: 'Leve / Ração' },
                      { id: '4m', label: '4 metros', sub: 'Tradicional' },
                      { id: '5m', label: '5 metros', sub: 'Rodada' },
                      { id: '6m', label: '6 metros', sub: 'Festa / Giro Amplo' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSimRoda(opt.id as any)}
                        className={`p-2.5 rounded-xl text-center border transition-all ${
                          simRoda === opt.id 
                            ? 'border-brand-primary bg-brand-primary text-white font-bold' 
                            : 'border-brand-accent/30 bg-white hover:bg-brand-bg/50 text-brand-ink'
                        }`}
                      >
                        <p className="text-xs font-bold">{opt.label}</p>
                        <p className={`text-[9px] mt-0.5 ${simRoda === opt.id ? 'text-white/80' : 'text-brand-ink/50'}`}>
                          {opt.sub}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Acabamento especial */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2.5">
                  4. Acabamento & Barrado
                </label>
                <button
                  type="button"
                  onClick={() => setSimBordado(!simBordado)}
                  className={`w-full p-3.5 rounded-2xl border flex items-center justify-between text-left transition-all ${
                    simBordado 
                      ? 'border-brand-secondary bg-brand-secondary/15 text-brand-primary' 
                      : 'border-brand-accent/30 bg-white text-brand-ink'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${simBordado ? 'bg-brand-primary text-white border-brand-primary' : 'border-brand-ink/30'}`}>
                      {simBordado && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold">Incluir barrado em Bordado Inglês / Renda Guipir</p>
                      <p className="text-[11px] text-brand-ink/60">Acabamento com passa-fita ou bico artesanal na saia e ojá</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-brand-secondary">+ R$ 35</span>
                </button>
              </div>
            </div>

            {/* Resultado do Orçamento Simulado */}
            <div className="lg:col-span-5 bg-brand-bg rounded-3xl p-6 sm:p-8 border border-brand-accent/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/60 block mb-2">
                  Estimativa de Confecção Sob Medida
                </span>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primary">
                    R$ {orcamentoSimulado.valorMinimo}
                  </span>
                  <span className="text-xs text-brand-ink/60">
                    a R$ {orcamentoSimulado.valorMaximo}
                  </span>
                </div>

                <p className="text-xs text-brand-ink/75 leading-relaxed mb-6 font-light">
                  *Valores estimados para mão de obra especializada no atelier em São Paulo. O valor pode variar de acordo com estampas específicas, aviamentos ou pedidos expressos.
                </p>

                {/* Resumo do Pedido */}
                <div className="bg-white rounded-2xl p-4 border border-brand-accent/20 space-y-2.5 text-xs text-brand-ink/80 mb-6">
                  <p className="font-bold text-brand-primary pb-1.5 border-b border-brand-accent/20">Resumo da Simulação:</p>
                  <div className="flex justify-between">
                    <span>Prazo médio de confecção:</span>
                    <strong className="text-brand-primary flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brand-secondary" />
                      {orcamentoSimulado.tempoEstimado}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Atendimento presencial:</span>
                    <strong className="text-brand-primary">Disponível em SP</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Envio para outros estados:</span>
                    <strong className="text-brand-primary">Sedex / PAC</strong>
                  </div>
                </div>
              </div>

              {/* Botão de Envio WhatsApp com a Simulação */}
              <div className="space-y-3">
                <a
                  href={gerarLinkWhatsAppSimulacao()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("catalogo_simulador_whatsapp")}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-4 px-6 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-all text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar Simulação no WhatsApp
                </a>
                <p className="text-[11px] text-center text-brand-ink/60">
                  Sem compromisso. Atendimento rápido e esclarecimento de fundamentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Detalhes do Produto */}
      <AnimatePresence>
        {itemSelecionado && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setItemSelecionado(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-brand-accent/40 z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col"
            >
              {/* Header do Modal com Swatch */}
              <div 
                className="relative p-6 sm:p-8 text-white flex flex-col justify-between shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${itemSelecionado.paletaCores.primaria} 0%, ${itemSelecionado.paletaCores.secundaria} 70%, ${itemSelecionado.paletaCores.destaque} 100%)`,
                }}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-bold tracking-wider px-2.5 py-1 rounded bg-black/50 text-white backdrop-blur-sm border border-white/20">
                      {itemSelecionado.codigo}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2">
                      {itemSelecionado.nome}
                    </h2>
                    <p className="text-xs sm:text-sm text-white/90 mt-1">
                      {itemSelecionado.tradicao} • {itemSelecionado.orixaEntidade}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setItemSelecionado(null)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                    aria-label="Fechar detalhes"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Corpo com Scroll */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-brand-ink">
                {/* Descrição Completa */}
                <div>
                  <h3 className="font-serif text-base font-bold text-brand-primary mb-2">
                    Sobre Esta Criação Litúrgica
                  </h3>
                  <p className="text-brand-ink/80 leading-relaxed font-light">
                    {itemSelecionado.descricaoCompleta}
                  </p>
                </div>

                {/* O que acompanha */}
                <div className="bg-brand-bg rounded-2xl p-5 border border-brand-accent/30">
                  <h3 className="font-serif text-sm font-bold text-brand-primary mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-secondary" />
                    Peças Inclusas Neste Modelo:
                  </h3>
                  <ul className="space-y-2">
                    {itemSelecionado.pecasInclusas.map((peca, i) => (
                      <li key={i} className="text-xs sm:text-sm text-brand-ink/85 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 shrink-0" />
                        <span>{peca}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Especificações Técnicas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-brand-accent/20 bg-white">
                    <p className="text-brand-ink/50 uppercase font-bold text-[10px] tracking-wider mb-1">Tecido Principal</p>
                    <p className="font-semibold text-brand-primary">{itemSelecionado.tecido}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-brand-accent/20 bg-white">
                    <p className="text-brand-ink/50 uppercase font-bold text-[10px] tracking-wider mb-1">Rendas & Aviamentos</p>
                    <p className="font-semibold text-brand-primary">{itemSelecionado.rendasAcabamentos}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-brand-accent/20 bg-white">
                    <p className="text-brand-ink/50 uppercase font-bold text-[10px] tracking-wider mb-1">Roda Sugerida</p>
                    <p className="font-semibold text-brand-primary">{itemSelecionado.rodaSugerida}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-brand-accent/20 bg-white">
                    <p className="text-brand-ink/50 uppercase font-bold text-[10px] tracking-wider mb-1">Cores da Peça</p>
                    <p className="font-semibold text-brand-primary">{itemSelecionado.paletaCores.nomeCores}</p>
                  </div>
                </div>

                {/* Medidas Necessárias */}
                <div>
                  <h3 className="font-serif text-sm font-bold text-brand-primary mb-2 flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-brand-secondary" />
                    Medidas para Confecção Sob Medida:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {itemSelecionado.medidasNecessarias.map((medida, i) => (
                      <span key={i} className="text-xs bg-brand-accent/20 text-brand-primary px-3 py-1 rounded-md font-medium">
                        {medida}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-brand-ink/60 mt-2 font-light">
                    Caso não saiba como tirar suas medidas, nós enviamos um passo a passo em vídeo pelo WhatsApp ou agendamos sua visita ao atelier na capital de SP!
                  </p>
                </div>

                {/* Acabamentos de Alta Costura */}
                <div className="pt-2">
                  <h3 className="font-serif text-sm font-bold text-brand-primary mb-2 flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-brand-secondary" />
                    Diferenciais de Costura Litúrgica:
                  </h3>
                  <ul className="space-y-1.5 text-xs text-brand-ink/75">
                    {itemSelecionado.detalhesCostura.map((det, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{det}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer do Modal com CTAs */}
              <div className="p-6 border-t border-brand-accent/20 bg-brand-bg/50 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-brand-ink/60 block">Valor base de referência:</span>
                  <span className="text-lg font-extrabold text-brand-primary">
                    {itemSelecionado.precoEstimadoTexto}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setItemSelecionado(null)}
                    className="w-full sm:w-auto px-5 py-3 rounded-full border border-brand-accent/40 text-xs font-bold text-brand-ink hover:bg-white transition-colors"
                  >
                    Fechar
                  </button>

                  <a
                    href={gerarLinkWhatsAppModelo(itemSelecionado)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`catalogo_modal_${itemSelecionado.codigo}`)}
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Pedir Orçamento no WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Dúvidas Frequentes do Catálogo */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary mb-2">
            Perguntas Frequentes sobre o Catálogo
          </h2>
          <p className="text-xs sm:text-sm text-brand-ink/70">
            Tudo o que você precisa saber para encomendar suas roupas de santo com tranquilidade.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              p: "Posso pedir qualquer modelo em outra cor ou estampa?",
              r: "Com certeza! Todos os modelos do catálogo são totalmente personalizáveis. Você pode escolher a cor do seu Orixá, guias, ou o tecido que sua casa espiritual determina."
            },
            {
              p: "Eu posso levar ou enviar o meu próprio tecido para vocês costurarem?",
              r: "Sim! Cobramos apenas a mão de obra artesanal caso você já tenha o tecido. Você pode entregar presencialmente no atelier em São Paulo ou enviar por Correios/transportadora."
            },
            {
              p: "Como sei se a saia vai servir perfeitamente?",
              r: "Nós confeccionamos com cós anatômico reforçado e elástico inteligente aliado a cordão de amarração embutido. Isso garante ajuste perfeito mesmo se houver variação no seu peso."
            },
            {
              p: "Vocês atendem presencialmente para prova de roupa em São Paulo?",
              r: "Sim, atendemos com hora marcada em São Paulo para tirar medidas, provar e escolher tecidos e rendas de perto. Agendamos diretamente pelo WhatsApp."
            },
            {
              p: "Fazem envio para outros estados do Brasil?",
              r: "Sim! Enviamos para todo o território nacional via Sedex ou PAC, embalado com todo o cuidado, perfume de axé e respeito litúrgico."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-brand-accent/30 shadow-xs">
              <h3 className="font-serif font-bold text-sm sm:text-base text-brand-primary mb-2">
                {faq.p}
              </h3>
              <p className="text-xs sm:text-sm text-brand-ink/75 leading-relaxed font-light">
                {faq.r}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <div className="bg-brand-primary rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Não encontrou a estampa que imaginava?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Nós criamos do zero a roupa para o seu Orixá, Entidade ou Obrigação. Envie uma foto de referência ou venha conversar com quem entende e respeita o sagrado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${defaultWhatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de conversar sobre uma encomenda personalizada de roupa de santo sob medida.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("catalogo_cta_final")}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Conversar com o Atelier
            </a>

            <a
              href={phoneHref}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 text-white font-bold text-sm sm:text-base hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-secondary" />
              Ligar: (11) 96903-5273
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
