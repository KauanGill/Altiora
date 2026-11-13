import { Layout, Rocket, Cart, Chat, Search, Palette, Brain, Bolt, Shield, Code, Chart, Gem } from './components/Icons.jsx'

export const services = [
  {
    icon: <Layout />,
    title: 'Sites institucionais',
    text: 'Presença digital premium que transmite autoridade. Multi-páginas, responsivo e pronto para converter visitantes em clientes.',
    items: ['Design exclusivo gerado por IA', 'Até 8 páginas', 'Painel para editar conteúdo'],
  },
  {
    icon: <Rocket />,
    title: 'Landing pages',
    text: 'Páginas de alta conversão para lançamentos, campanhas e captação de leads — com copy otimizada por IA.',
    items: ['Copywriting persuasivo', 'Testes A/B', 'Integração com anúncios'],
  },
  {
    icon: <Cart />,
    title: 'E-commerce',
    text: 'Lojas virtuais rápidas, elegantes e seguras, com checkout otimizado e recomendações inteligentes de produtos.',
    items: ['Pix, cartão e boleto', 'Gestão de estoque', 'Recomendações com IA'],
  },
  {
    icon: <Chat />,
    title: 'Chatbots com IA',
    text: 'Assistentes virtuais treinados com os dados do seu negócio, atendendo 24/7 no site e no WhatsApp.',
    items: ['Treinado no seu conteúdo', 'Integração WhatsApp', 'Qualificação de leads'],
  },
  {
    icon: <Search />,
    title: 'SEO & Performance',
    text: 'Sites que aparecem no Google e carregam em menos de um segundo. Técnica de ponta aliada a conteúdo estratégico.',
    items: ['Core Web Vitals no verde', 'SEO técnico e on-page', 'Relatórios mensais'],
  },
  {
    icon: <Palette />,
    title: 'Identidade visual',
    text: 'Logotipo, paleta, tipografia e guia de marca criados com IA generativa e lapidados por designers.',
    items: ['Logo + variações', 'Brandbook completo', 'Kit para redes sociais'],
  },
]

export const differentials = [
  { icon: <Brain />, title: 'IA + curadoria humana', text: 'A inteligência artificial acelera; nossos especialistas refinam cada pixel.' },
  { icon: <Bolt />, title: 'Entrega em dias', text: 'O que levava meses agora fica pronto em uma fração do tempo.' },
  { icon: <Gem />, title: 'Design de alto padrão', text: 'Estética minimalista e sofisticada, feita para marcas que querem se destacar.' },
  { icon: <Shield />, title: 'Seguro e estável', text: 'SSL, backups automáticos e hospedagem de alta disponibilidade.' },
  { icon: <Code />, title: 'Código moderno', text: 'React, Next.js e as tecnologias mais atuais do mercado.' },
  { icon: <Chart />, title: 'Foco em resultado', text: 'Cada decisão de design é orientada a conversão e crescimento.' },
]

export const steps = [
  {
    title: 'Briefing inteligente',
    text: 'Você responde um questionário guiado. Nossa IA analisa seu negócio, público e concorrentes.',
    time: '≈ 15 min',
    tags: ['Análise de mercado', 'Persona', 'Objetivos'],
  },
  {
    title: 'Geração com IA',
    text: 'Geramos múltiplos conceitos visuais, estrutura de páginas e textos otimizados para o seu público.',
    time: '24–48 h',
    tags: ['Conceitos visuais', 'Arquitetura', 'Copywriting'],
  },
  {
    title: 'Refinamento humano',
    text: 'Designers e desenvolvedores lapidam cada detalhe e aplicam suas revisões até ficar perfeito.',
    time: '3–5 dias',
    tags: ['Design premium', 'Revisões', 'Responsividade'],
  },
  {
    title: 'Lançamento & evolução',
    text: 'Publicamos com domínio, SSL e analytics. Depois, monitoramos e otimizamos continuamente.',
    time: 'Contínuo',
    tags: ['Deploy', 'Analytics', 'Otimização'],
  },
]

// Projetos de exemplo — substitua pelos cases reais da Altiora.
export const projects = [
  { title: 'Aurum Joalheria', category: 'E-commerce', accent: '#D4AF6A' },
  { title: 'Nexa Clínica', category: 'Institucional', accent: '#E8E4D8' },
  { title: 'Vértice Advocacia', category: 'Institucional', accent: '#B8893B' },
  { title: 'Lumen Arquitetura', category: 'Landing page', accent: '#F3D9A0' },
  { title: 'Orbe Imóveis', category: 'Institucional', accent: '#9C8A6A' },
  { title: 'Noir Café', category: 'E-commerce', accent: '#C9A45C' },
  { title: 'Pulse Fitness', category: 'Landing page', accent: '#E0C48A' },
  { title: 'Atlas Consultoria', category: 'Chatbot IA', accent: '#D9D4C5' },
]
