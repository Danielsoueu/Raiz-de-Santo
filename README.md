# Raiz de Santo — Alta Costura Afro-Religiosa Sob Medida

Atelier especializado na confecção artesanal sob medida de roupas litúrgicas para **Umbanda** e **Candomblé** (Ketu, Angola e Jeje) em São Paulo, com atendimento presencial e envio para todo o Brasil.

## Funcionalidades e Recursos

- **Confecção Sob Medida:** Roupas de ração, camisus, saias de baiana com roda ampla, panos da costa (alaká), ojás e trajes de saída de santo.
- **SEO Otimizado:** Metadados dinâmicos, OpenGraph, Twitter Cards e marcação Schema.org (`LocalBusiness`, `BlogPosting`, `BreadcrumbList`).
- **Design Responsivo & Mobile First:** Menu gaveta fluido com controle de scroll, layout adaptável e botões acessíveis.
- **Contato & Orçamentos:** Integração direta com WhatsApp e formulário de orçamento com validação em tempo real.
- **Blog & Conteúdo:** Artigos completos sobre conservação, tecidos e fundamentos das vestimentas religiosas.

## Tecnologias Utilizadas

- **Framework:** Next.js (App Router, Turbopack)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Motion (`motion/react`)
- **Ícones:** Lucide React
- **Imagens:** Next.js Image com suporte a AVIF e WebP

## Como Rodar Localmente

1. Clone o repositório ou baixe os arquivos do projeto.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000` no seu navegador.

## Descoberta no Google e em buscas com IA

O conteúdo público permite rastreamento em `/robots.txt`. Isso inclui Googlebot,
Bingbot e OAI-SearchBot pela regra `User-agent: *`; permitir acesso não garante
indexação, posição ou citação. Não é necessário liberar treinamento para aparecer
nas buscas do ChatGPT. Nenhuma política específica de treinamento foi alterada.

Cada modelo tem uma URL em `/catalogo/[slug]`, conteúdo renderizado no servidor,
canonical próprio, links internos e dados de produto. O sitemap é gerado com base
nos modelos e artigos cadastrados. Não adicionar datas de modificação artificiais,
avaliações, coordenadas, políticas de devolução, frete ou estoque sem confirmação.
Os preços são referências sob medida: não publicar uma oferta de checkout nos dados
estruturados enquanto preço final e condições comerciais não estiverem definidos.

Após publicar:

1. No Google Search Console, selecionar a propriedade
   `https://raiz-de-santo.vercel.app/` e enviar `sitemap.xml` em Sitemaps.
2. Inspecionar a página inicial, o catálogo e uma página de modelo; executar o teste
   ao vivo e solicitar indexação quando disponível. Registrar qualquer motivo de
   exclusão antes de alterar o código. O arquivo de verificação HTML já existe;
   confirmar a propriedade na conta antes de substituir tokens.
3. Validar os dados no Schema Markup Validator. A marcação Product sem uma oferta
   transacional não pretende obter resultados de preço do Google Shopping.
4. Conferir o Perfil da Empresa no Google: URL, telefone, categoria real, horário,
   área de atendimento e fotos próprias. Não usar coordenadas do centro de São Paulo
   como se fossem o endereço do ateliê. Confirmar dados operacionais com o responsável.
5. Acompanhar páginas indexadas, consultas, cliques e conversões. Comparar períodos
   após novo rastreamento; não prometer prazo ou ranking.

Referências oficiais:
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.openai.com/api/docs/bots
