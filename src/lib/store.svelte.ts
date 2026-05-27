// Dados curados — baseados em votações reais do Congresso Nacional
export const VOTACOES = [
  // ── MEIO AMBIENTE ────────────────────────────────────────────────────────────
  {
    id: 1,
    tema: "MEIO AMBIENTE",
    temaColor: "#006B38",
    tipo: "PL 2.903/2023",
    ano: "2023",
    titulo: "Marco Temporal das Terras Indígenas",
    descricao:
      "Limita a demarcação de terras indígenas a áreas comprovadamente ocupadas por povos originários em 5 de outubro de 1988, data da Constituição.",
    proArgs:
      "Segurança jurídica para produtores rurais e propriedades já consolidadas há décadas.",
    conArgs:
      "Restringe direitos constitucionais dos povos indígenas e ameaça territórios ancestrais.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br/noticias/990918",
  },
  {
    id: 2,
    tema: "MEIO AMBIENTE",
    temaColor: "#006B38",
    tipo: "PL 2.159/2021",
    ano: "2025",
    titulo: "Licenciamento Ambiental Flexibilizado",
    descricao:
      "Flexibiliza regras de licenciamento ambiental, dispensando estudos técnicos completos mesmo para obras de grande impacto ambiental.",
    proArgs:
      "Mais agilidade para obras de infraestrutura e desenvolvimento econômico do país.",
    conArgs:
      "Retrocesso ambiental que permite devastação sem avaliação adequada de impactos.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br",
  },
  {
    id: 3,
    tema: "MEIO AMBIENTE",
    temaColor: "#006B38",
    tipo: "Rejeição de MP",
    ano: "2026",
    titulo: "Proibição ao IBAMA de Destruir Máquinas de Garimpo Ilegal",
    descricao:
      "Derrubou medida que autorizava o IBAMA a destruir equipamentos usados em garimpos ilegais dentro de Terras Indígenas e áreas protegidas da Amazônia.",
    proArgs:
      "Destruição de bens sem processo judicial viola o devido processo legal e é inconstitucional.",
    conArgs:
      "Protege o garimpo ilegal que devasta Terras Indígenas e contamina rios com mercúrio.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br",
  },
  {
    id: 4,
    tema: "MEIO AMBIENTE",
    temaColor: "#006B38",
    tipo: "PL 2.633/2020",
    ano: "2021",
    titulo: "Regularização Fundiária na Amazônia",
    descricao:
      "Facilita a regularização de áreas ocupadas irregularmente em terras públicas na Amazônia, aumentando o limite por auto-declaração.",
    proArgs:
      "Regularização de propriedades rurais produtivas e segurança jurídica no campo.",
    conArgs:
      "Anistia ao desmatamento ilegal e incentivo à grilagem de terras públicas.",
    resultado: "APROVADO",
    fonte: "https://agencia.camara.leg.br/assunto/pl-263320",
  },

  // ── ECONOMIA ─────────────────────────────────────────────────────────────────
  {
    id: 5,
    tema: "ECONOMIA",
    temaColor: "#002776",
    tipo: "PEC 45/2019",
    ano: "2023",
    titulo: "Reforma Tributária sobre o Consumo",
    descricao:
      "Unifica ICMS, ISS, PIS, Cofins e IPI em dois novos impostos sobre valor agregado (CBS e IBS). A maior reforma tributária em 35 anos.",
    proArgs:
      "Simplifica o sistema tributário e reduz o 'custo Brasil' para empresas e consumidores.",
    conArgs:
      "Alíquota padrão elevada pode encarecer serviços e impactar regiões mais pobres.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br/noticias/982064",
  },
  {
    id: 6,
    tema: "ECONOMIA",
    temaColor: "#002776",
    tipo: "PL 4.173/2023",
    ano: "2023",
    titulo: "Taxação de Offshores e Fundos Exclusivos",
    descricao:
      "Tributa rendimentos de brasileiros em paraísos fiscais e fundos de investimento exclusivos de grandes fortunas, antes completamente isentos.",
    proArgs:
      "Justiça fiscal: quem tem mais deve contribuir proporcionalmente com o Estado.",
    conArgs: "Risco de fuga de capitais e desinvestimento no Brasil.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br/noticias/1014756",
  },
  {
    id: 7,
    tema: "ECONOMIA",
    temaColor: "#002776",
    tipo: "PL 1.847/2024",
    ano: "2024",
    titulo: "Pacote Fiscal — Corte de Gastos",
    descricao:
      "Congela reajustes de servidores, limita crescimento de despesas federais e endurece regras para concessão de benefícios sociais.",
    proArgs:
      "Responsabilidade fiscal e controle da dívida pública em momento de pressão nos mercados.",
    conArgs:
      "Corte de gastos sociais e congelamento de salários do funcionalismo público.",
    resultado: "APROVADO",
    fonte: "https://agencia.camara.leg.br/assunto/pl-18472024",
  },

  // ── DEMOCRACIA / POLÍTICA ─────────────────────────────────────────────────
  {
    id: 8,
    tema: "DEMOCRACIA",
    temaColor: "#002776",
    tipo: "LDO 2024",
    ano: "2023",
    titulo: "Reajuste de 41% no Salário dos Parlamentares",
    descricao:
      "O Congresso aprovou emenda ao orçamento elevando o salário dos deputados e senadores de R$33,7 mil para R$46,3 mil — aumento de 41% aprovado pelos próprios beneficiados.",
    proArgs:
      "Reposição de perdas inflacionárias acumuladas e equiparação ao Executivo e Judiciário.",
    conArgs:
      "Aumento obsceno em momento de austeridade, aprovado sem debate público pelos próprios beneficiados.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br/noticias/985082",
  },
  {
    id: 9,
    tema: "DEMOCRACIA",
    temaColor: "#002776",
    tipo: "PL 3.640/2023",
    ano: "2025",
    titulo: "Restrição a Decisões Monocráticas do STF",
    descricao:
      "Limita o poder de ministros do STF de tomar decisões individuais que afetam todo o país, exigindo referendo do plenário do Tribunal.",
    proArgs:
      "Controle do ativismo judicial e reequilíbrio entre os poderes da República.",
    conArgs:
      "Interferência indevida do Legislativo no funcionamento do Judiciário.",
    resultado: "APROVADO",
    fonte: "https://www.gazetadopovo.com.br",
  },
  {
    id: 10,
    tema: "DEMOCRACIA",
    temaColor: "#002776",
    tipo: "PEC 135/2019",
    ano: "2021",
    titulo: "Voto Impresso Auditável",
    descricao:
      "Propunha obrigar as urnas eletrônicas a imprimir comprovante físico do voto, depositado em urna separada para possível recontagem.",
    proArgs:
      "Transparência adicional no processo eleitoral e verificação física dos votos.",
    conArgs:
      "Urna eletrônica já é auditável e voto impresso cria riscos à privacidade e à logística.",
    resultado: "REJEITADO",
    fonte: "https://www.camara.leg.br/noticias/798040",
  },
  {
    id: 11,
    tema: "DEMOCRACIA",
    temaColor: "#002776",
    tipo: "PL 2.162/2023",
    ano: "2025",
    titulo: "Redução de Penas dos Condenados pelo 8 de Janeiro",
    descricao:
      "Altera cálculo de penas para condenados por crimes em manifestações políticas, podendo beneficiar participantes dos ataques golpistas de 8 de janeiro de 2023.",
    proArgs:
      "Proporcionalidade das penas e revisão de julgamentos considerados excessivos.",
    conArgs:
      "Impunidade para quem atentou contra a democracia e as instituições do Estado.",
    resultado: "APROVADO",
    fonte:
      "https://www12.senado.leg.br/noticias/materias/2025/12/17/senado-aprova-pl-da-dosimetria",
  },

  // ── DIREITOS SOCIAIS ─────────────────────────────────────────────────────────
  {
    id: 12,
    tema: "DIREITOS",
    temaColor: "#C8102E",
    tipo: "PL 1.904/2023",
    ano: "2023",
    titulo: "Equiparação de Aborto a Homicídio após 22 Semanas",
    descricao:
      "Estabelece pena de até 20 anos para abortos realizados após 22 semanas, inclusive em casos de estupro previstos em lei.",
    proArgs: "Protege a vida do feto em estágio avançado de desenvolvimento.",
    conArgs:
      "Penaliza vítimas de estupro mais severamente que agressores e fere direitos reprodutivos.",
    resultado: "REJEITADO",
    fonte: "https://www.camara.leg.br",
  },
  {
    id: 13,
    tema: "DIREITOS",
    temaColor: "#C8102E",
    tipo: "PL 1.595/2023",
    ano: "2023",
    titulo: "Cotas Raciais em Concursos Públicos Federais",
    descricao:
      "Reserva 20% das vagas em concursos públicos federais para candidatos negros (pretos e pardos), com política de verificação da autodeclaração.",
    proArgs:
      "Reparação histórica e combate à desigualdade racial estrutural no serviço público.",
    conArgs: "Mérito individual como critério único para o serviço público.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br/noticias/978002",
  },

  // ── TRABALHO ─────────────────────────────────────────────────────────────────
  {
    id: 14,
    tema: "TRABALHO",
    temaColor: "#D97706",
    tipo: "PL 3.748/2023",
    ano: "2024",
    titulo: "Regulamentação do Trabalho por Aplicativos",
    descricao:
      "Define vínculo trabalhista para motoristas e entregadores de plataformas (Uber, iFood): renda mínima por hora, previdência e seguro de acidentes.",
    proArgs:
      "Proteção social e direitos mínimos para mais de 1,5 milhão de trabalhadores de plataforma.",
    conArgs:
      "Encarece serviços e reduz a flexibilidade que muitos trabalhadores valorizam.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br/noticias/1078876",
  },

  // ── EDUCAÇÃO ─────────────────────────────────────────────────────────────────
  {
    id: 15,
    tema: "EDUCAÇÃO",
    temaColor: "#00A550",
    tipo: "PL 3.179/2012",
    ano: "2022",
    titulo: "Ensino Domiciliar (Homeschooling)",
    descricao:
      "Regulamenta a educação domiciliar como alternativa ao ensino regular, com supervisão do Ministério da Educação.",
    proArgs:
      "Liberdade das famílias na formação educacional dos filhos e alternativas pedagógicas.",
    conArgs:
      "Reduz socialização infantil e dificulta a detecção de violência doméstica contra crianças.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br/noticias/877030",
  },
  {
    id: 16,
    tema: "EDUCAÇÃO",
    temaColor: "#00A550",
    tipo: "PL 2.061/2022",
    ano: "2022",
    titulo: "Piso Nacional dos Professores com Aumento Real",
    descricao:
      "Garante reajuste anual do piso salarial dos professores da educação básica pública acima da inflação, vinculado ao crescimento do PIB.",
    proArgs:
      "Valorização do magistério e atração de profissionais qualificados para a educação pública.",
    conArgs:
      "Impacto nos orçamentos municipais sem contrapartida federal adequada.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br/noticias/922876",
  },
];

export const PARTIDOS = [
  { sigla: "PSOL", nome: "Partido Socialismo e Liberdade", cor: "#B71C1C" },
  { sigla: "PT", nome: "Partido dos Trabalhadores", cor: "#C8102E" },
  { sigla: "PCdoB", nome: "Partido Comunista do Brasil", cor: "#B71C1C" },
  { sigla: "PV", nome: "Partido Verde", cor: "#2E7D32" },
  { sigla: "REDE", nome: "Rede Sustentabilidade", cor: "#1B5E20" },
  { sigla: "PSB", nome: "Partido Socialista Brasileiro", cor: "#E65100" },
  { sigla: "PDT", nome: "Partido Democrático Trabalhista", cor: "#BF360C" },
  { sigla: "MDB", nome: "Movimento Democrático Brasileiro", cor: "#00695C" },
  {
    sigla: "PSDB",
    nome: "Partido da Social Democracia Brasileira",
    cor: "#1565C0",
  },
  { sigla: "Cidadania", nome: "Cidadania", cor: "#6A1B9A" },
  { sigla: "Solidariedade", nome: "Solidariedade", cor: "#00796B" },
  { sigla: "UNIÃO", nome: "União Brasil", cor: "#1565C0" },
  { sigla: "PP", nome: "Progressistas", cor: "#1976D2" },
  { sigla: "Republicanos", nome: "Republicanos", cor: "#6A1B9A" },
  { sigla: "PL", nome: "Partido Liberal", cor: "#003580" },
  { sigla: "NOVO", nome: "Partido Novo", cor: "#E65100" },
];

// Votos por partido: 1=sim/favor, -1=não/contra, 0=dividido/ausente
// Colunas na ordem dos ids 1-16
//                               1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
//                              MT  LA  GA  GR  RT  OF  PF  SP  ST  VI  DJ  AB  CO  AP  HO  PP
export const VOTOS_PARTIDO: Record<string, number[]> = {
  PSOL: [-1, -1, -1, -1, -1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1],
  PT: [-1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1],
  PCdoB: [-1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1],
  PV: [-1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, 0, 1],
  REDE: [-1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1],
  PSB: [-1, -1, -1, -1, 1, 1, 0, -1, 0, -1, -1, -1, 1, 1, 0, 1],
  PDT: [-1, -1, -1, -1, 1, 1, 0, -1, 0, -1, -1, -1, 1, 1, 0, 1],
  MDB: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  PSDB: [1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  Cidadania: [0, 0, 1, 0, 1, 1, 0, 0, 0, -1, 0, -1, 1, 1, 0, 0],
  Solidariedade: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
  UNIÃO: [1, 1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 1, -1, 0, 1, 0],
  PP: [1, 1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 1, -1, -1, 1, 0],
  Republicanos: [1, 1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 1, 0, 0, 1, 0],
  PL: [1, 1, 1, 1, 0, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1],
  NOVO: [1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 0, -1, -1, 1, -1],
};

export const TICKER_TEMAS = [
  "MEIO AMBIENTE",
  "ECONOMIA",
  "DIREITOS HUMANOS",
  "EDUCAÇÃO",
  "SAÚDE",
  "SEGURANÇA PÚBLICA",
  "TRABALHO",
  "TRIBUTAÇÃO",
  "REFORMA POLÍTICA",
  "POVOS INDÍGENAS",
  "MORADIA",
  "TRANSPORTE",
  "CULTURA",
  "CIÊNCIA",
];

// ─── Engine de alinhamento ────────────────────────────────────────────────────
export function calcularRanking(respostas: Record<number, number>) {
  return PARTIDOS.map((p) => {
    const votosP = VOTOS_PARTIDO[p.sigla] || [];
    let concordou = 0,
      discordou = 0,
      total = 0;
    const itens: Array<{
      votacao: (typeof VOTACOES)[0];
      meu: number;
      partido: number;
      alinhado: boolean;
    }> = [];

    VOTACOES.forEach((v, idx) => {
      const meu = respostas[v.id];
      const pv = votosP[idx];
      if (meu === undefined || meu === 0 || pv === 0 || pv === undefined)
        return;
      total++;
      const alinhado = meu === pv;
      if (alinhado) concordou++;
      else discordou++;
      itens.push({ votacao: v, meu, partido: pv, alinhado });
    });

    const score = total === 0 ? 0 : Math.round((concordou / total) * 100);
    return { partido: p, score, concordou, discordou, total, itens };
  }).sort((a, b) => b.score - a.score);
}

export type Ranking = ReturnType<typeof calcularRanking>;

// ─── Estado da sessão (Svelte 5 runes) ───────────────────────────────────────
function criarSessao() {
  let respostas = $state<Record<number, number>>({});
  let indice = $state(0);

  const respondidas = $derived(
    Object.values(respostas).filter((v) => v !== 0).length,
  );
  const progresso = $derived(respondidas / VOTACOES.length);
  const ranking = $derived.by(() =>
    respondidas > 0 ? calcularRanking(respostas) : [],
  );
  const votacaoAtual = $derived(VOTACOES[indice]);

  function responder(id: number, valor: number) {
    respostas = { ...respostas, [id]: valor };
  }

  function pular() {
    respostas = { ...respostas, [VOTACOES[indice].id]: 0 };
    if (indice < VOTACOES.length - 1) indice++;
  }

  function avancar() {
    if (indice < VOTACOES.length - 1) indice++;
  }

  function voltar() {
    if (indice > 0) indice--;
  }

  function resetar() {
    respostas = {};
    indice = 0;
  }

  return {
    get respostas() {
      return respostas;
    },
    get indice() {
      return indice;
    },
    get respondidas() {
      return respondidas;
    },
    get progresso() {
      return progresso;
    },
    get ranking() {
      return ranking;
    },
    get votacaoAtual() {
      return votacaoAtual;
    },
    get total() {
      return VOTACOES.length;
    },
    responder,
    pular,
    avancar,
    voltar,
    resetar,
  };
}

export const sessao = criarSessao();
