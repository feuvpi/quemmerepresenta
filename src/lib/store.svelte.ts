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
    tipo: "PL 2.159/2021 (Lei nº 15.190/2025)",
    ano: "2025",
    titulo: "Lei Geral do Licenciamento Ambiental",
    descricao:
      "Estabelece a Lei Geral do Licenciamento Ambiental. Sancionada em agosto de 2025 pelo Executivo com vetos que limitavam os impactos de degradação, a lei teve 52 de seus vetos derrubados pelo Congresso Nacional em novembro de 2025, restaurando a flexibilização original ampla (como a Licença por Adesão e Compromisso - LAC e dispensa de amparo consultivo vinculante).",
    proArgs:
      "Traz modernização, desburocratização e celeridade para obras de infraestrutura urgentes, conferindo autonomia a estados e municípios e trazendo segurança jurídica para o setor produtivo.",
    conArgs:
      "A restauração dos trechos vetados enfraquece o rigor dos estudos de impacto e a proteção a biomas sensíveis, limitando a consulta prévia a órgãos de proteção de terras indígenas e unidades de conservação.",
    resultado: "VETOS PRESIDENCIAIS DERRUBADOS",
    fonte: "https://www12.senado.leg.br",
  },
  {
    id: 3,
    tema: "MEIO AMBIENTE",
    temaColor: "#006B38",
    tipo: "PL 2.564/2025",
    ano: "2026",
    titulo: "Restrições à Fiscalização Ambiental (Satélite e Maquinário)",
    descricao:
      "Proposta aprovada na Câmara dos Deputados em maio de 2026 que exige notificação prévia ao produtor antes de embargos por imagens de satélite (detecção remota) e proíbe terminantemente a destruição imediata de tratores e maquinários apreendidos por órgãos como o IBAMA.",
    proArgs:
      "Assegura o direito constitucional à ampla defesa e ao devido processo legal, impedindo a destruição de bens privados e punições automáticas sem fiscalização presencial.",
    conArgs:
      "Retira a ferramenta mais ágil e eficaz contra o garimpo ilegal em áreas remotas e burocratiza a interrupção de desmatamentos em tempo real ao exigir notificações prévias em campo.",
    resultado: "APROVADO NA CÂMARA",
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
      "Justiça fiscal: quem tem mais deve contribuir proporcionalmente com o State.",
    conArgs: "Risco de fuga de capitais e desinvestimento no Brasil.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br/noticias/1014756",
  },
  {
    id: 7,
    tema: "ECONOMIA",
    temaColor: "#002776",
    tipo: "PEC 45/2024 (EC 135)",
    ano: "2024",
    titulo: "PEC do Corte de Gastos e Supersalários",
    descricao:
      "Promulgada como Emenda Constitucional 135, limita os supersalários no serviço público ao teto constitucional de R$ 44 mil, restringe temporariamente os reajustes do abono salarial (PIS/Pasep), altera o acesso ao BPC e estende a DRU para blindar as metas do arcabouço fiscal.",
    proArgs:
      "Contém o avanço de despesas obrigatórias, combate privilégios no funcionalismo e garante a responsabilidade fiscal e a sustentabilidade do arcabouço em períodos de déficit.",
    conArgs:
      "Pode asfixiar o orçamento de programas sociais essenciais e flexibiliza receitas que deveriam ser carimbadas para áreas prioritárias, afetando direitos de populações vulneráveis.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br",
  },

  // ── DEMOCRACIA / POLÍTICA ─────────────────────────────────────────────────
  {
    id: 8,
    tema: "DEMOCRACIA",
    temaColor: "#002776",
    tipo: "PDL 172/2022",
    ano: "2022",
    titulo: "Reajuste de Escalonado no Salário dos Parlamentares",
    descricao:
      "O Congresso aprovou decreto legislativo elevando de forma escalonada os subsídios de deputados e senadores até atingir R$ 46,3 mil, votado pelos próprios beneficiários.",
    proArgs:
      "Reposição de perdas inflacionárias acumuladas desde 2014 e equiparação às carreiras do teto do funcionalismo público.",
    conArgs:
      "Aumento em momento de forte restrição orçamentária nacional e aprovado em rito acelerado.",
    resultado: "APROVADO",
    fonte: "https://www.camara.leg.br",
  },
  {
    id: 9,
    tema: "DEMOCRACIA",
    temaColor: "#002776",
    tipo: "PEC 8/2021",
    ano: "2023",
    titulo: "Restrição a Decisões Monocráticas do STF",
    descricao:
      "Limita o poder de ministros do STF de tomar decisões individuais que suspendam a eficácia de leis ou atos dos presidentes dos demais poderes.",
    proArgs:
      "Controle do ativismo judicial e reequilíbrio institucional entre o Legislativo e o Judiciário.",
    conArgs:
      "Interferência nas prerrogativas internas e na celeridade de respostas do Poder Judiciário.",
    resultado: "APROVADO",
    fonte: "https://www.senado.leg.br",
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
      "Transparência adicional no processo eleitoral e verificação física externa dos votos.",
    conArgs:
      "O sistema eletrônico já possui múltiplas camadas de auditoria e o voto impresso abre brechas de quebra de sigilo e falhas logísticas.",
    resultado: "REJEITADO",
    fonte: "https://www.camara.leg.br/noticias/798040",
  },
  {
    id: 11,
    tema: "DEMOCRACIA",
    temaColor: "#002776",
    tipo: "PL 2.162/2023",
    ano: "2026",
    titulo: "Redução de Penas / Critérios de Dosimetria",
    descricao:
      "Altera as regras para o cálculo do concurso de crimes na dosimetria penal. Aprovado pelo Congresso em 2025, foi vetado integralmente pela Presidência em janeiro de 2026, mas teve o veto derrubado pelos parlamentares para virar lei.",
    proArgs:
      "Corrige distorções punitivas e garante a aplicação da individualização e proporcionalidade jurídica nas condenações do país.",
    conArgs:
      "Pode enfraquecer o caráter punitivo do Estado e abrir brecha para revisões que beneficiem atos de ataque ao Estado Democrático de Direito.",
    resultado: "VETO PRESIDENCIAL DERRUBADO",
    fonte: "https://www12.senado.leg.br",
  },

  // ── DIREITOS SOCIAIS ─────────────────────────────────────────────────────────
  {
    id: 12,
    tema: "DIREITOS",
    temaColor: "#C8102E",
    tipo: "PL 1.904/2023",
    ano: "2024",
    titulo: "Regime de Urgência para o PL do Aborto",
    descricao:
      "Votação do regime de urgência para o projeto que equipara o aborto realizado após 22 semanas de gestação ao crime de homicídio simples, inclusive nos casos de gravidez resultante de estupro. A aprovação da urgência permitiu que a proposta pulasse a análise detalhada nas comissões temáticas para ir direto ao Plenário.",
    proArgs:
      "Acelera a tramitação para garantir a proteção jurídica imediata e o direito à vida do feto em estágio avançado de viabilidade.",
    conArgs:
      "Burlar o debate nas comissões impede a discussão técnica sobre os riscos graves à saúde reprodutiva e a severa penalização imposta a meninas e mulheres vítimas de violência sexual.",
    resultado: "URGÊNCIA APROVADA (EM TRAMITAÇÃO)",
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
    tipo: "PL 12/2024",
    ano: "2024",
    titulo: "Debate da Regulamentação do Trabalho por Aplicativos",
    descricao:
      "Proposta do Executivo para criar um pacote de direitos mínimos e previdenciários aos motoristas de aplicativos sem o vínculo tradicional da CLT.",
    proArgs:
      "Introduz proteção social, remuneração mínima por hora trabalhada e amparo contra acidentes.",
    conArgs:
      "Pode inflacionar o custo final das corridas e reduzir a autonomia flexível do prestador.",
    resultado: "EM TRAMITAÇÃO",
    fonte: "https://www.camara.leg.br",
  },

  // ── EDUCAÇÃO ─────────────────────────────────────────────────────────────────
  {
    id: 15,
    tema: "EDUCAÇÃO",
    temaColor: "#00A550",
    tipo: "PL 3.179/2012",
    ano: "2022",
    titulo: "Regulamentação do Ensino Domiciliar (Homeschooling)",
    descricao:
      "Aprovada na Câmara dos Deputados em maio de 2022, a proposta autoriza a educação domiciliar como alternativa legal à escola regular, condicionando-a ao monitoramento e avaliação pelo Ministério da Educação.",
    proArgs:
      "Assegura a liberdade primordial das famílias em definir a metodologia pedagógica e moral da criação educacional de seus filhos.",
    conArgs:
      "Compromete o direito à socialização plural na infância e retira o papel protetivo da escola na detecção de violências ou privações domésticas.",
    resultado: "APROVADO NA CÂMARA",
    fonte: "https://www.camara.leg.br",
  },
  {
    id: 16,
    tema: "TRIBUTAÇÃO",
    temaColor: "#002776",
    tipo: "PEC 5/2023",
    ano: "2024",
    titulo: "Ampliação da Imunidade Tributária de Igrejas",
    descricao:
      "Proposta de Emenda à Constituição que estende a imunidade tributária de templos de qualquer culto, proibindo a cobrança de impostos sobre bens, serviços e patrimônios indiretamente ligados às entidades religiosas.",
    proArgs:
      "Garante a liberdade de culto e reconhece o papel social e assistencial crucial desempenhado pelas igrejas nas comunidades.",
    conArgs:
      "Reduz a arrecadação do Estado e abre brechas para privilégios fiscais e distorções na fiscalização de atividades não religiosas.",
    resultado: "EM TRAMITAÇÃO",
    fonte:
      "https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2351506",
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
// Colunas na ordem dos ids 1-17
//                               1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
//                              MT  LA  PD  GR  RT  OF  PF  SP  ST  VI  DJ  AB  CO  AP  HO  PP
export const VOTOS_PARTIDO: Record<string, number[]> = {
  PSOL: [-1, -1, -1, -1, -1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, -1],
  PT: [-1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, -1],
  PCdoB: [-1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 0],
  PV: [-1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, 0, -1],
  REDE: [-1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, -1],
  PSB: [-1, -1, -1, -1, 1, 1, 0, -1, 0, -1, -1, -1, 1, 1, 0, 1],
  PDT: [-1, -1, -1, -1, 1, 1, 0, -1, 0, -1, -1, -1, 1, 1, 0, 1],
  MDB: [1, 1, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  PSDB: [1, 1, -1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  Cidadania: [0, 0, -1, 0, 1, 1, 0, 0, 0, -1, 0, -1, 1, 1, 0, 1],
  Solidariedade: [1, 1, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
  UNIÃO: [1, 1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 1, -1, 0, 1, 1],
  PP: [1, 1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 1, -1, -1, 1, 1],
  Republicanos: [1, 1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 1, 0, 0, 1, 1],
  PL: [1, 1, 1, 1, 0, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, 1],
  NOVO: [1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 0, -1, -1, 1, 1],
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
