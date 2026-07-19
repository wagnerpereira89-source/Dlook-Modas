// ═══════════════════════════════════════════════════════════════════
//  CONFIGURAÇÃO DO CLIENTE — FK Digital
//  Este é o ÚNICO arquivo que você precisa editar para um cliente novo.
//  Leia o README-NOVO-CLIENTE.md para o passo a passo completo.
// ═══════════════════════════════════════════════════════════════════

export const config = {
  // ─── Identificação ───────────────────────────────────────────────
  clientName:      'Dlook Modas',              // nome completo (título, login)
  clientShortName: 'Dlook',                        // nome curto (ícone do celular, máx ~12 chars)
  appDescription:  'Gestão de produtos da Dlook',  // descrição na instalação do PWA
  appSlug:         'dlook',                        // identificador interno (localStorage, tags)

  // ─── WordPress ───────────────────────────────────────────────────
  siteUrl: 'https://dlookmodas.com.br',                // SEM barra no final

  // ─── Logos ───────────────────────────────────────────────────────
  logos: {
    // Logo completa — login, header das telas e etiquetas
    full: 'https://dlookmodas.com.br/wp-content/uploads/2026/04/logo-dlook-sombra-1.png',
    // Ícone quadrado — notificações push
    icon: 'https://dlookmodas.com.br/wp-content/uploads/2026/07/notification-icon.png',
    // Letra de fallback caso a logo não carregue
    fallbackLetter: 'D',
  },

  // ─── Cores da marca ──────────────────────────────────────────────
  // Alimentam o tailwind.config.js automaticamente.
  // Classes disponíveis: bg-primary, text-primary, border-primary,
  //                      bg-secondary, bg-dark, text-action, etc.
  colors: {
    primary:   '#000000',  // cor principal (botões, destaques)
    secondary: '#fa81b0',  // cor secundária (acentos)
    dark:      '#00021c',  // escuro da marca
    action:    '#3b82f6',  // azul de links/ações (pode manter)
  },

  // ─── Paleta dos gráficos do Dashboard ────────────────────────────
  // Tons derivados da marca. Ordem: usados de cima pra baixo nos gráficos.
  chartColors: ['#000000', '#fa81b0', '#d490be', '#c9887f', '#2a3929', '#f0c4be'],

  // Cores das 3 métricas do Dashboard
  metricColors: {
    vendas:  '#000000',
    receita: '#000000',
    ticket:  '#000000',
  },

  // ─── Web Push (notificações) ─────────────────────────────────────
  // ATENÇÃO: cada cliente PRECISA de chaves VAPID próprias.
  // Veja o README para gerar. Esta chave pública tem que ser
  // EXATAMENTE a mesma que está no plugin fk-webpush do WordPress.
  vapidPublicKey: 'BLqee4d4Pip86OXOvnpT8546t7_hXnbpv8u-7zTEslcET62xs84B2Ck38ZlMt3NWPYiN5TgNHvA4r3haDteLBTM',

  // ─── Rodapé ──────────────────────────────────────────────────────
  agencyLogo: '/logo%20azul%20escuro.png',   // arquivo dentro de /public
  agencyName: 'FK Digital',
}

export default config
