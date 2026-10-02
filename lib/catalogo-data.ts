export interface CatalogoItem {
  id: string;
  codigo: string;
  nome: string;
  categoria: 'umbanda' | 'candomble' | 'noite' | 'ere' | 'etnico' | 'racao' | 'avulso';
  categoriaLabel: string;
  tipoPeca: 'conjunto' | 'saia' | 'oja' | 'racao' | 'costa';
  tipoPecaLabel: string;
  fotoPrincipal: string;
  fotos: string[];
  descricaoCurta: string;
  descricaoCompleta: string;
  tradicao: string;
  orixaEntidade: string;
  pecasInclusas: string[];
  tecido: string;
  rendasAcabamentos: string;
  rodaSugerida: string;
  precoBase: number;
  precoEstimadoTexto: string;
  paletaCores: {
    primaria: string;
    secundaria: string;
    destaque: string;
    nomeCores: string;
  };
  destaqueTag?: string;
  medidasNecessarias: string[];
  detalhesCostura: string[];
}

export const CATALOGO_ITEMS: CatalogoItem[] = [
  {
    id: "conjunto-baiana-floral-amarelo",
    codigo: "RDS-BAIANA-01",
    nome: "Conjunto Baiana Floral Dourado & Renda Pink",
    categoria: "umbanda",
    categoriaLabel: "Baianas & Umbanda",
    tipoPeca: "conjunto",
    tipoPecaLabel: "Conjunto Completo (3 Peças)",
    fotoPrincipal: "https://ik.imagekit.io/czbsplwyj/Completo%20bahiana%20.jpg?updatedAt=1790972396893",
    fotos: [
      "https://ik.imagekit.io/czbsplwyj/Completo%20bahiana%20.jpg?updatedAt=1790972396893",
      "https://ik.imagekit.io/czbsplwyj/Saia%20bahiana%20.jpg?updatedAt=1790972396820",
      "https://ik.imagekit.io/czbsplwyj/cabe%C3%A7a%20bahiana.jpg?updatedAt=1790972396577",
      "https://ik.imagekit.io/czbsplwyj/Detalhe%20bahiana%20.jpg?updatedAt=1790972396910"
    ],
    descricaoCurta: "Saia rodada amarela com estampa tropical floral, barrado em bordado inglês rosa vibrante e ojá esculpido com laço.",
    descricaoCompleta: "Confeccionado artesanalmente para giras festivas e homenagens a Baianos, Oxum e Iansã. A saia possui corte amplo com roda generosa de 4,5 metros, proporcionando movimento fluido e armação natural. O barrado conta com bico de bordado inglês 100% algodão tingido em tom rosa pink com passa-fita. Acompanha ojá com entretela leve para sustentação de laço alto e bata/pano coordenado.",
    tradicao: "Umbanda e Candomblé",
    orixaEntidade: "Povo da Bahia, Oxum, Iansã, Caboclas",
    pecasInclusas: [
      "Saia Baiana rodada com 4,5m de roda e barrado rendado",
      "Ojá (Pano de Cabeça) estruturado com laço duplo e bico de renda",
      "Pano da Costa / Busto coordenado na mesma estampa"
    ],
    tecido: "Tricoline 100% Algodão Premium Floral",
    rendasAcabamentos: "Bordado inglês trabalhado rosa pink, passa-fita de algodão e acabamento interno em costura francesa",
    rodaSugerida: "4,5 a 5 metros",
    precoBase: 220,
    precoEstimadoTexto: "Mão de obra sob medida a partir de R$ 220 (Conjunto)",
    paletaCores: {
      primaria: "#EAB308",
      secundaria: "#EC4899",
      destaque: "#22C55E",
      nomeCores: "Amarelo Ouro, Rosa Pink e Folhagens Verdes"
    },
    destaqueTag: "Mais Pedido para Baianos",
    medidasNecessarias: ["Cintura / Abdômen", "Quadril", "Comprimento da Saia (do cós ao tornozelo)", "Busto"],
    detalhesCostura: [
      "Cós anatômico reforçado com elástico largo e cordão de amarração embutido",
      "Costura francesa em todas as emendas de pano, não desfia em lavagens rituais",
      "Barra dupla com entretela macia para dar sustentação ao giro"
    ]
  },
  {
    id: "conjunto-pomba-gira-preto-roxo",
    codigo: "RDS-NOITE-02",
    nome: "Conjunto Rainha da Noite Preto & Violeta",
    categoria: "noite",
    categoriaLabel: "Linha da Noite & Nanã",
    tipoPeca: "conjunto",
    tipoPecaLabel: "Conjunto Completo (3 Peças)",
    fotoPrincipal: "https://ik.imagekit.io/czbsplwyj/Kit%20preto%20e%20roxo%20completo.png?updatedAt=1790972399176",
    fotos: [
      "https://ik.imagekit.io/czbsplwyj/Kit%20preto%20e%20roxo%20completo.png?updatedAt=1790972399176",
      "https://ik.imagekit.io/czbsplwyj/Preto%20e%20roxo%20completo.png?updatedAt=1790972398292",
      "https://ik.imagekit.io/czbsplwyj/Saia%20preto%20e%20roxo.png?updatedAt=1790972397527"
    ],
    descricaoCurta: "Saia plissada preta com barra dupla em fita de cetim lilás e renda violeta, corpete drapeado e ojá estruturado.",
    descricaoCompleta: "Criação de alta costura afro-religiosa dedicada às Senhoras Guardiãs, Pomba Giras e Nanã Buruku. A saia possui plissado tradicional com caimento pesado e rodado imponente. O acabamento da barra traz dupla faixa: fita de cetim acetinado em lilás suave e bico de renda bordada roxa. O corpete traz pala reforçada que valoriza o corpo com conforto e sustentação.",
    tradicao: "Umbanda e Candomblé",
    orixaEntidade: "Pomba Giras, Senhoras da Noite, Nanã Buruku, Pretas Velhas",
    pecasInclusas: [
      "Saia longa com pregas tradicionais e barra dupla rendada",
      "Corpete / Bata com decote franzido e pala estruturada",
      "Pano de Cabeça / Ojá com laço esculpido e bordado em renda roxa"
    ],
    tecido: "Gabardine Acetinado / Crepe Alfaiataria e Fitas de Cetim Nobre",
    rendasAcabamentos: "Bico de renda guipir violeta e fita de cetim acetinado lilás",
    rodaSugerida: "4 a 5 metros",
    precoBase: 250,
    precoEstimadoTexto: "Mão de obra sob medida a partir de R$ 250 (Conjunto)",
    paletaCores: {
      primaria: "#18181B",
      secundaria: "#7C3AED",
      destaque: "#C084FC",
      nomeCores: "Preto Ébano, Roxo Ametista e Lilás Acetinado"
    },
    destaqueTag: "Exclusivo Linha da Noite",
    medidasNecessarias: ["Cintura", "Quadril", "Comprimento da Saia", "Busto", "Altura do Tronco"],
    detalhesCostura: [
      "Pala abdominal com entretela alemã para suporte e modelagem anatômica",
      "Plissado prensado a vapor para fixação de vincos duradouros",
      "Bainha com acabamento fino para não prender no calçado durante a dança ritual"
    ]
  },
  {
    id: "conjunto-etnico-africano-geometrico",
    codigo: "RDS-ETNICO-03",
    nome: "Conjunto Étnico Africano Wax Geométrico",
    categoria: "etnico",
    categoriaLabel: "Coleção Ancestralidade",
    tipoPeca: "conjunto",
    tipoPecaLabel: "Conjunto Completo (3 Peças)",
    fotoPrincipal: "https://ik.imagekit.io/czbsplwyj/Colorido%201%20completo.png?updatedAt=1790972398709",
    fotos: [
      "https://ik.imagekit.io/czbsplwyj/Colorido%201%20completo.png?updatedAt=1790972398709",
      "https://ik.imagekit.io/czbsplwyj/Colorido%201%20completo%202.png?updatedAt=1790972397702",
      "https://ik.imagekit.io/czbsplwyj/Colorido%201%20saia%20.png?updatedAt=1790972398966",
      "https://ik.imagekit.io/czbsplwyj/Colorido%201%20cabe%C3%A7a.png?updatedAt=1790972398552"
    ],
    descricaoCurta: "Estampa tribal geométrica em algodão africano, bustiê drapeado com pala preta de alta sustentação e ojá com renda branca.",
    descricaoCompleta: "Inspirado nas raízes ancestrais iorubás, este modelo celebra a realeza e a força das tradições afro-brasileiras. O padrão geométrico reúne tons de verde, vermelho, amarelo e preto em contraste marcante. A saia possui pala elástica canelada para conforto incomparável e barrado em bico de renda de algodão branca.",
    tradicao: "Candomblé (Ketu, Angola, Jeje) e Umbanda",
    orixaEntidade: "Ogum, Oxóssi, Obaluaê, Xangô, Ancestrais",
    pecasInclusas: [
      "Saia ampla em tecido wax africano com barra em renda branca",
      "Bata bustiê drapeada com babado superior e pala ajustada",
      "Ojá / Turbante esculpido de amarração tradicional com detalhes em renda"
    ],
    tecido: "Algodão Wax Print Africano de Alta Densidade",
    rendasAcabamentos: "Bico de renda de algodão branca artesanal e pala com elastano duplo",
    rodaSugerida: "4 a 4,5 metros",
    precoBase: 240,
    precoEstimadoTexto: "Mão de obra sob medida a partir de R$ 240 (Conjunto)",
    paletaCores: {
      primaria: "#15803D",
      secundaria: "#B91C1C",
      destaque: "#EAB308",
      nomeCores: "Verde Floresta, Vermelho Terracota, Mostarda e Preto"
    },
    destaqueTag: "Ancestralidade & Força",
    medidasNecessarias: ["Cintura", "Quadril", "Comprimento da Saia", "Busto"],
    detalhesCostura: [
      "Pala de alta compressão suave que se molda a diferentes biotipos",
      "Estampa alinhada manualmente nas costuras verticais",
      "Pano de cabeça com entretela macia permitindo nós e laços variados"
    ]
  },
  {
    id: "conjunto-espiral-xango-iansa",
    codigo: "RDS-ESPIRAL-04",
    nome: "Conjunto Espiral Concêntrico Vermelho & Turquesa",
    categoria: "candomble",
    categoriaLabel: "Candomblé & Orixás",
    tipoPeca: "conjunto",
    tipoPecaLabel: "Conjunto Completo (3 Peças)",
    fotoPrincipal: "https://ik.imagekit.io/czbsplwyj/Vermelho%20e%20azul%20completo%20.png?updatedAt=1790972399000",
    fotos: [
      "https://ik.imagekit.io/czbsplwyj/Vermelho%20e%20azul%20completo%20.png?updatedAt=1790972399000"
    ],
    descricaoCurta: "Padronagem em círculos espirais vermelhos e azul turquesa com aplique de renda guipir vertical e ojá de laço duplo.",
    descricaoCompleta: "Peça de grande impacto visual que simboliza o movimento contínuo dos ventos de Oyá e a energia solar e vibrante do fogo de Xangô. Corte em godê com painéis sobrepostos que criam uma silhueta nobre ao girar. O busto traz uma faixa vertical de renda guipir azul ciano que alonga e dá acabamento nobre.",
    tradicao: "Candomblé e Umbanda Tradicional",
    orixaEntidade: "Iansã / Oyá, Xangô, Ogum, Tempo / Iroko",
    pecasInclusas: [
      "Saia godê amplo com sobreposição em gomos estampados",
      "Bata / Pano de peito com detalhe frontal em guipir turquesa",
      "Ojá com laço estruturado e pontas rendadas"
    ],
    tecido: "Tricoline Digital Acetinada 100% Algodão",
    rendasAcabamentos: "Aplique vertical em renda guipir azul celeste e bainha de alta precisão",
    rodaSugerida: "4 a 5 metros",
    precoBase: 260,
    precoEstimadoTexto: "Mão de obra sob medida a partir de R$ 260 (Conjunto)",
    paletaCores: {
      primaria: "#DC2626",
      secundaria: "#06B6D4",
      destaque: "#1E293B",
      nomeCores: "Vermelho Rubi, Azul Turquesa e Preto Grafite"
    },
    destaqueTag: "Design de Festa & Saída",
    medidasNecessarias: ["Cintura", "Quadril", "Comprimento da Saia", "Busto", "Largura das Costas"],
    detalhesCostura: [
      "Gomos sobrepostos milimetricamente cortados para caimento balanceado",
      "Costura reforçada anti-tração para giros rápidos de Oyá",
      "Entretela no decote que garante sustentação mesmo sem sutiã"
    ]
  },
  {
    id: "conjunto-ere-azul-marinho",
    codigo: "RDS-ERE-05",
    nome: "Conjunto Erê & Ibeji Azul Marinho Doçura",
    categoria: "ere",
    categoriaLabel: "Linha de Erê & Ibeji",
    tipoPeca: "conjunto",
    tipoPecaLabel: "Conjunto Completo (3 Peças)",
    fotoPrincipal: "https://ik.imagekit.io/czbsplwyj/Azul%20ere%20completo.jpg?updatedAt=1790972396733",
    fotos: [
      "https://ik.imagekit.io/czbsplwyj/Azul%20ere%20completo.jpg?updatedAt=1790972396733",
      "https://ik.imagekit.io/czbsplwyj/Cabe%C3%A7a%20azul%20ere.jpg?updatedAt=1790972396611",
      "https://ik.imagekit.io/czbsplwyj/Detalhes%20azul%20ere.jpg?updatedAt=1790972396805"
    ],
    descricaoCurta: "Tecido azul marinho com motivos lúdicos de casinhas, corações e doces, com barrado largo em bordado inglês marfim.",
    descricaoCompleta: "Desenvolvido com carinho para as festas e celebrações de Cosme e Damião, Ibejis e Erês. O tecido é macio ao toque, respirável e traz estampas que encantam crianças e adultos. O acabamento conta com bico de bordado inglês furadinho em tom marfim/cru que traz doçura e tradição. Disponível sob medida tanto para crianças quanto para médiuns adultos.",
    tradicao: "Umbanda e Candomblé",
    orixaEntidade: "Erês, Ibejis, Cosme, Damião e Doum, Crianças da Espiritualidade",
    pecasInclusas: [
      "Saia rodada com estampa temática de Erê e barrado em bordado inglês",
      "Bata / Pano de peito com laço frontal e bico de renda delicado",
      "Ojá infantil ou adulto com laço bufante e acabamento rendado"
    ],
    tecido: "Tricoline Pura 100% Algodão Antialérgico",
    rendasAcabamentos: "Bordado inglês trabalhado vazado em algodão cru e elástico suave",
    rodaSugerida: "3,5 a 4,5 metros",
    precoBase: 210,
    precoEstimadoTexto: "Mão de obra sob medida a partir de R$ 210 (Adulto) / R$ 160 (Infantil)",
    paletaCores: {
      primaria: "#1E3A8A",
      secundaria: "#F59E0B",
      destaque: "#FEF08A",
      nomeCores: "Azul Marinho, Amarelo Mel e Branco Marfim"
    },
    destaqueTag: "Especial Festa de Cosme & Damião",
    medidasNecessarias: ["Cintura", "Quadril", "Comprimento da Saia", "Busto ou Tórax"],
    detalhesCostura: [
      "Elástico suave com revestimento em algodão que não aperta e não machuca a pele",
      "Bordado inglês 100% algodão pré-encolhido que não deforma ao lavar",
      "Costura interna rebatida para máximo conforto em rituais longos"
    ]
  },
  {
    id: "conjunto-mandala-oxumare-colorido",
    codigo: "RDS-MANDALA-06",
    nome: "Conjunto Mandala Arco-Íris de Oxumarê",
    categoria: "candomble",
    categoriaLabel: "Candomblé & Orixás",
    tipoPeca: "conjunto",
    tipoPecaLabel: "Conjunto Completo (3 Peças)",
    fotoPrincipal: "https://ik.imagekit.io/czbsplwyj/Colorido%202%20completo%20.jpg?updatedAt=1790972396740",
    fotos: [
      "https://ik.imagekit.io/czbsplwyj/Colorido%202%20completo%20.jpg?updatedAt=1790972396740"
    ],
    descricaoCurta: "Padronagem em leque multicolor com verde, amarelo, telha e azul royal, barra com renda passa-fita turquesa e ojá coordenado.",
    descricaoCompleta: "Celebração às cores do arco-íris, renovação e prosperidade de Oxumarê, Caboclos e Boiadeiros. Confeccionado em algodão nobre com estampa concêntrica em leque que produz um efeito hipnótico durante as cantigas de roda. Acompanha pano da costa e ojá coordenado com acabamento em renda tingida.",
    tradicao: "Candomblé e Umbanda",
    orixaEntidade: "Oxumarê, Caboclos das Matas, Boiadeiros, Linha do Oriente",
    pecasInclusas: [
      "Saia rodada em estampa mandala leque com 4,5m de roda",
      "Pano da Costa / Busto com acabamento em renda passa-fita turquesa",
      "Ojá estruturado alto com caimento em fita"
    ],
    tecido: "Algodão Digital Premium Estampado",
    rendasAcabamentos: "Renda de bico turquesa e bainha de lenço reforçada",
    rodaSugerida: "4,5 a 5 metros",
    precoBase: 230,
    precoEstimadoTexto: "Mão de obra sob medida a partir de R$ 230 (Conjunto)",
    paletaCores: {
      primaria: "#0284C7",
      secundaria: "#EAB308",
      destaque: "#EA580C",
      nomeCores: "Azul Royal, Dourado, Laranja Telha e Verde Musgo"
    },
    destaqueTag: "Cores Vivas & Axé",
    medidasNecessarias: ["Cintura", "Quadril", "Comprimento da Saia", "Busto"],
    detalhesCostura: [
      "Corte godê duplo que amplia a abertura da roda nos movimentos litúrgicos",
      "Linha de pesponto duplo resistente a trações",
      "Ojá com acabamento reforçado nas pontas para amarração firme"
    ]
  },
  {
    id: "saia-de-santo-avulsa-rodada",
    codigo: "RDS-SAIAS-08",
    nome: "Saia de Santo Rodada Avulsa (3m a 6m de Roda)",
    categoria: "avulso",
    categoriaLabel: "Peças Avulsas",
    tipoPeca: "saia",
    tipoPecaLabel: "Saia Avulsa Sob Medida",
    fotoPrincipal: "https://ik.imagekit.io/czbsplwyj/Saia%20bahiana%20.jpg?updatedAt=1790972396820",
    fotos: [
      "https://ik.imagekit.io/czbsplwyj/Saia%20bahiana%20.jpg?updatedAt=1790972396820",
      "https://ik.imagekit.io/czbsplwyj/Saia%20preto%20e%20roxo.png?updatedAt=1790972397527",
      "https://ik.imagekit.io/czbsplwyj/Colorido%201%20saia%20.png?updatedAt=1790972398966"
    ],
    descricaoCurta: "Saia de santo sob medida nas cores do seu Orixá ou guia, com opções de 3, 4, 5 ou 6 metros de roda e barrados exclusivos.",
    descricaoCompleta: "Você escolhe o tecido e a cor ou traz o seu tecido até nosso atelier. Modelamos com pregas tradicionais de Santo, 3 a 5 babados, ou entremeios de bordado inglês. Cós anatômico reforçado que distribui o peso da saia e não machuca a cintura.",
    tradicao: "Umbanda e Candomblé",
    orixaEntidade: "Todos os Orixás e Linhas de Trabalho",
    pecasInclusas: [
      "Saia de Santo confeccionada sob medida com a roda escolhida (3m a 6m)",
      "Cordão de ajuste embutido no cós para segurança máxima"
    ],
    tecido: "Tricoline, Cetim, Oxfordine, Seda, Morim ou Lese (à sua escolha)",
    rendasAcabamentos: "Barrado em bordado inglês, guipir, fita de cetim ou passa-fita",
    rodaSugerida: "Opções de 3m, 4m, 5m ou 6m",
    precoBase: 120,
    precoEstimadoTexto: "Mão de obra sob medida a partir de R$ 120 (com tecido do cliente)",
    paletaCores: {
      primaria: "#3B82F6",
      secundaria: "#F43F5E",
      destaque: "#10B981",
      nomeCores: "Disponível em Todas as Cores e Estampas Litúrgicas"
    },
    destaqueTag: "Personalização Total",
    medidasNecessarias: ["Cintura", "Quadril", "Comprimento da Saia"],
    detalhesCostura: [
      "Cós largo anatômico que não enrola",
      "Bainha com acabamento fino para fluidez no giro",
      "Modelagem balanceada para não arrastar na frente nem subir atrás"
    ]
  },
  {
    id: "oja-pano-de-cabeca-artesanal",
    codigo: "RDS-OJAS-09",
    nome: "Ojàs & Panos de Cabeça Estruturados Avulsos",
    categoria: "avulso",
    categoriaLabel: "Peças Avulsas",
    tipoPeca: "oja",
    tipoPecaLabel: "Ojá Avulso Sob Medida",
    fotoPrincipal: "https://ik.imagekit.io/czbsplwyj/cabe%C3%A7a%20bahiana.jpg?updatedAt=1790972396577",
    fotos: [
      "https://ik.imagekit.io/czbsplwyj/cabe%C3%A7a%20bahiana.jpg?updatedAt=1790972396577",
      "https://ik.imagekit.io/czbsplwyj/Cabe%C3%A7a%20azul%20ere.jpg?updatedAt=1790972396611",
      "https://ik.imagekit.io/czbsplwyj/Colorido%201%20cabe%C3%A7a.png?updatedAt=1790972398552"
    ],
    descricaoCurta: "Panos de cabeça com corte anatômico, entretelas suaves para laços altos esculpidos e acabamentos em bico de renda.",
    descricaoCompleta: "O ojá coroa a cabeça do médium ou iaô com respeito e solenidade. Confeccionamos ojás simples para o dia a dia, modelos longos para amarrações tradicionais do Candomblé, e versões armadas com entretela para festas com laços esculpidos que permanecem impecáveis durante todo o toque.",
    tradicao: "Candomblé e Umbanda",
    orixaEntidade: "Coroação de Orixás, Yaôs, Ekedjis, Ogãs e Sacerdotes",
    pecasInclusas: [
      "Pano de Cabeça / Ojá sob medida (largura de 25cm a 40cm, comprimento de 2,0m a 3,5m)",
      "Opção com entretela interna estruturada ou maleável"
    ],
    tecido: "Percal, Tricoline, Lese ou Tecido Africano",
    rendasAcabamentos: "Bordado inglês nas pontas, guipir ou bainha de lenço invisível",
    rodaSugerida: "Comprimento de 2,0m a 3,5m",
    precoBase: 50,
    precoEstimadoTexto: "Mão de obra a partir de R$ 50 avulso",
    paletaCores: {
      primaria: "#D97706",
      secundaria: "#4F46E5",
      destaque: "#EC4899",
      nomeCores: "Branco, Estampado, Colorido ou Étnico"
    },
    destaqueTag: "Coroa Sagrada",
    medidasNecessarias: ["Comprimento desejado", "Largura preferida para o laço"],
    detalhesCostura: [
      "Pontas com corte chanfrado ou reto para melhor amarração",
      "Costura delicada que não machuca o couro cabeludo",
      "Opções com renda nas duas pontas ou em todo o contorno"
    ]
  },
  {
    id: "roupa-de-racao-branca-tradicional",
    codigo: "RDS-RACAO-07",
    nome: "Conjunto Roupa de Ração Branca Litúrgica",
    categoria: "racao",
    categoriaLabel: "Fundamento & Ração",
    tipoPeca: "racao",
    tipoPecaLabel: "Roupa de Ração (2 a 3 Peças)",
    fotoPrincipal: "https://ik.imagekit.io/czbsplwyj/Raizdesanto.png",
    fotos: [
      "https://ik.imagekit.io/czbsplwyj/Raizdesanto.png"
    ],
    descricaoCurta: "Bata tradicional decote V ou canoa, saia ou calçolão com elástico confortável e pano da costa opcional em percal puro.",
    descricaoCompleta: "A vestimenta essencial do terreiro. Confeccionada estritamente segundo as regras litúrgicas da sua casa em percal 100% algodão 200 fios ou lese bordado. Não esquenta, permite transpiração plena durante o trabalho espiritual e tem corte anatômico que respeita todos os corpos.",
    tradicao: "Umbanda e Candomblé (Todas as Vertentes)",
    orixaEntidade: "Oxalá, Iemanjá, Filhos de Santo, Desenvolvimento e Preceito",
    pecasInclusas: [
      "Bata unissex decote V, redondo ou canoa com fendas laterais",
      "Saia com pregas tradicionais ou Calçolão com cordão regulável",
      "Pano da Costa branco (opcional)"
    ],
    tecido: "Percal 200 Fios 100% Algodão ou Tricoline Branca",
    rendasAcabamentos: "Ponto palito, ponto crivo ou bainha simples sem metal (conforme preceito)",
    rodaSugerida: "3 a 4 metros",
    precoBase: 150,
    precoEstimadoTexto: "Mão de obra sob medida a partir de R$ 150 (Conjunto)",
    paletaCores: {
      primaria: "#FFFFFF",
      secundaria: "#F8FAFC",
      destaque: "#E2E8F0",
      nomeCores: "Branco Puro Alvo"
    },
    destaqueTag: "Essencial do Terreiro",
    medidasNecessarias: ["Tórax / Busto", "Cintura", "Quadril", "Comprimento da Peça"],
    detalhesCostura: [
      "Zero elementos metálicos (sem zíperes ou botões metálicos)",
      "Costura francesa com reforço em pontos de tensão (gancho e cavas)",
      "Tecido pré-lavado para evitar encolhimento após rituais"
    ]
  },
  {
    id: "pano-da-costa-fustao-lese",
    codigo: "RDS-COSTA-10",
    nome: "Panos da Costa Finos & Alakás Litúrgicos",
    categoria: "avulso",
    categoriaLabel: "Peças Avulsas",
    tipoPeca: "costa",
    tipoPecaLabel: "Pano da Costa / Alaká",
    fotoPrincipal: "https://ik.imagekit.io/czbsplwyj/Raizdesanto.png",
    fotos: [
      "https://ik.imagekit.io/czbsplwyj/Raizdesanto.png"
    ],
    descricaoCurta: "Pano da costa com forro suave, fustão, gorgurinho ou lese, com franjas artesanais ou bicos de renda tradicionais.",
    descricaoCompleta: "Símbolo de proteção das costas e do ventre das filhas e filhos de santo. Confeccionamos alakás e panos da costa com caimento pesado e estruturado, perfeitos para serem usados cruzados no peito, amarrados na cintura ou pousados sobre os ombros.",
    tradicao: "Candomblé e Umbanda",
    orixaEntidade: "Precepto Feminino, Yaôs, Mães de Santo, Orixás",
    pecasInclusas: [
      "Pano da Costa tradicional (tamanho padrão 0,80m x 2,00m ou personalizado)"
    ],
    tecido: "Fustão de Algodão, Gorgurinho, Lese Bordado ou Pano da Costa Africano",
    rendasAcabamentos: "Franjas de algodão desfiadas à mão, entremeios ou bico de renda",
    rodaSugerida: "Dimensão padrão: 80cm x 200cm",
    precoBase: 70,
    precoEstimadoTexto: "Mão de obra a partir de R$ 70 avulso",
    paletaCores: {
      primaria: "#475569",
      secundaria: "#F8FAFC",
      destaque: "#0284C7",
      nomeCores: "Branco Neve, Cru, Tons Litúrgicos ou Estampados"
    },
    destaqueTag: "Proteção & Tradição",
    medidasNecessarias: ["Comprimento e largura desejados"],
    detalhesCostura: [
      "Bainha larga com caimento pesado para não escorregar dos ombros",
      "Franjas artesanais atadas nó por nó",
      "Costuras internas protegidas para rituais"
    ]
  }
];

export const CATEGORIAS_FILTRO = [
  { id: 'todos', label: 'Todos os Modelos', count: CATALOGO_ITEMS.length },
  { id: 'umbanda', label: 'Umbanda & Baianas', count: 2 },
  { id: 'candomble', label: 'Candomblé & Orixás', count: 3 },
  { id: 'noite', label: 'Linha da Noite & Nanã', count: 1 },
  { id: 'ere', label: 'Erê & Ibeji', count: 1 },
  { id: 'etnico', label: 'Coleção Ancestralidade', count: 1 },
  { id: 'avulso', label: 'Peças Avulsas & Ração', count: 3 },
];

export const TIPOS_PECA_FILTRO = [
  { id: 'todos', label: 'Todas as Peças' },
  { id: 'conjunto', label: 'Conjunto Completo' },
  { id: 'saia', label: 'Saias de Santo' },
  { id: 'oja', label: 'Ojá / Cabeça' },
  { id: 'racao', label: 'Roupas de Ração' },
  { id: 'costa', label: 'Pano da Costa' },
];
