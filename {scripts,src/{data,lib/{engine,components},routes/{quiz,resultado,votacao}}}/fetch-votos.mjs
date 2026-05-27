#!/usr/bin/env node
/**
 * SCRIPT DE CURADORIA — roda no seu computador, não no browser.
 *
 * O que faz:
 *   1. Baixa os arquivos bulk da Câmara (sem CORS, direto no Node)
 *   2. Busca votos do Senado via /dadosabertos/votacao
 *   3. Para cada votação curada, calcula votos por partido
 *   4. Gera src/data/votacoes.json
 *
 * Como usar:
 *   npm run fetch-votos
 *
 * Só precisa rodar quando quiser atualizar a base de dados.
 * O resultado é commitado no repositório.
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "src", "data", "votacoes.json");

// ─── Votações curadas ─────────────────────────────────────────────────────────
// Fonte: IDs verificados manualmente na API da Câmara e do Senado
// Para encontrar o ID: dadosabertos.camara.leg.br/swagger → /votacoes?idProposicao=X

const VOTACOES_CURADAS = [
  // MEIO AMBIENTE
  {
    id: "camara-2430177-56",
    casa: "camara",
    slug: "licenciamento-ambiental",
    tema: "meio_ambiente",
    titulo: "Licenciamento Ambiental Flexibilizado",
    subtitulo: '"PL da Devastação"',
    descricao:
      "Flexibiliza as regras de licenciamento ambiental, criando novas categorias que dispensam estudos técnicos completos mesmo para obras de grande impacto ambiental.",
    contexto:
      "Aprovado pela Câmara em julho de 2025 por 267×116. Considerado o maior retrocesso ambiental em 40 anos por entidades ambientalistas. Aguarda sanção ou veto do presidente.",
    posicao_favor:
      "Mais agilidade para obras de infraestrutura e desenvolvimento econômico",
    posicao_contra:
      "Proteção do meio ambiente e comunidades afetadas por grandes projetos",
    aprovada: true,
    data: "2025-07-17",
    fontes: [
      "https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2236765",
      "https://www.socioambiental.org/noticias-socioambientais/camara-aprova-pl-da-devastacao-o-maior-retrocesso-ambiental-do-pais-em",
    ],
    pl: "PL 2159/2021",
  },
  {
    id: "camara-2191208-67",
    casa: "camara",
    slug: "marco-temporal",
    tema: "indigenismo",
    titulo: "Marco Temporal das Terras Indígenas",
    subtitulo: "PL 2903/2023",
    descricao:
      "Determina que só podem ser demarcadas como terras indígenas as áreas que estavam ocupadas por indígenas em 5 de outubro de 1988, data da promulgação da Constituição.",
    contexto:
      "Aprovado pelo Congresso. O STF havia decidido que o marco temporal é inconstitucional. Lula vetou 47 dispositivos, mas manteve a essência. Ainda em disputa jurídica.",
    posicao_favor:
      "Segurança jurídica para propriedades rurais e desenvolvimento do agronegócio",
    posicao_contra:
      "Direitos territoriais dos povos indígenas e proteção da Amazônia",
    aprovada: true,
    data: "2023-09-27",
    fontes: [
      "https://www12.senado.leg.br/noticias/materias/2025/12/09/aprovada-em-dois-turnos-pec-do-marco-temporal-vai-a-camara",
    ],
    pl: "PL 2903/2023",
  },
  {
    id: "camara-2087341-48",
    casa: "camara",
    slug: "pec-praias",
    tema: "meio_ambiente",
    titulo: "Privatização de Praias",
    subtitulo: '"PEC das Praias" — PEC 3/2022',
    descricao:
      "Remove a obrigatoriedade de acesso público às praias a cada 100 metros, permitindo que áreas costeiras adjacentes a propriedades privadas sejam fechadas ao público.",
    contexto:
      "Aprovada pela Câmara em 2022. Aguarda votação no Senado. Ambientalistas alertam para risco à biodiversidade costeira e comunidades tradicionais pesqueiras.",
    posicao_favor:
      "Direito de propriedade e segurança jurídica para imóveis à beira-mar",
    posicao_contra:
      "Acesso público às praias como bem comum e proteção de ecossistemas costeiros",
    aprovada: true,
    data: "2022-02-10",
    fontes: [
      "https://www.camara.leg.br/noticias/850888-camara-aprova-proposta-que-retira-faixa-de-marinha-de-zonas-costeiras",
    ],
    pl: "PEC 3/2022",
  },
  {
    id: "camara-2083299-41",
    casa: "camara",
    slug: "regularizacao-fundiaria-amazonia",
    tema: "meio_ambiente",
    titulo: "Regularização Fundiária na Amazônia",
    subtitulo: '"PL da Grilagem" — PL 2633/2020',
    descricao:
      "Facilita a regularização de áreas ocupadas irregularmente em terras da União na Amazônia, aumentando o limite de área que pode ser regularizada por auto-declaração.",
    contexto:
      'Aprovado em 2021. Críticos argumentam que premia quem desmatou ilegalmente ("anistia para grileiros"). O governo disse que regulariza situações históricas.',
    posicao_favor:
      "Regularização de propriedades rurais produtivas e segurança jurídica no campo",
    posicao_contra:
      "Incentivo ao desmatamento ilegal e grilagem de terras públicas na Amazônia",
    aprovada: true,
    data: "2021-05-25",
    fontes: ["https://agencia.camara.leg.br/assunto/pl-263320"],
    pl: "PL 2633/2020",
  },
  {
    id: "camara-2157556-62",
    casa: "camara",
    slug: "pesticidas-pl-veneno",
    tema: "meio_ambiente",
    titulo: "Flexibilização dos Agrotóxicos",
    subtitulo: '"PL do Veneno" — PL 1459/2022',
    descricao:
      'Muda as regras de registro e uso de agrotóxicos no Brasil, renomeando-os como "pesticidas" e simplificando o processo de aprovação de novos produtos.',
    contexto:
      "Aprovado pelo Congresso em 2022, tornou-se a Lei 14.785/2023. Entidades de saúde pública criticaram a flexibilização de critérios toxicológicos.",
    posicao_favor:
      "Modernização da agricultura e competitividade do agronegócio brasileiro",
    posicao_contra:
      "Saúde pública e proteção ambiental contra produtos tóxicos",
    aprovada: true,
    data: "2022-06-13",
    fontes: ["https://agencia.camara.leg.br/assunto/pl-14592022"],
    pl: "PL 1459/2022",
  },

  // ECONOMIA E IMPOSTOS
  {
    id: "camara-2298576-69",
    casa: "camara",
    slug: "reforma-tributaria",
    tema: "economia",
    titulo: "Reforma Tributária",
    subtitulo: "PEC 45/2019 — IVA Dual (CBS + IBS)",
    descricao:
      "Unifica cinco tributos federais e estaduais (ICMS, ISS, PIS, Cofins, IPI) em dois novos impostos sobre consumo. A maior reforma tributária em 35 anos.",
    contexto:
      "Aprovada em 2023 após décadas de tentativas frustradas. Prevê transição até 2033. Especialistas divergem sobre impacto nos preços e nas regiões mais pobres.",
    posicao_favor:
      'Simplificação do sistema tributário e redução do "custo Brasil"',
    posicao_contra:
      "Risco de aumento de carga tributária sobre consumo e alimentos",
    aprovada: true,
    data: "2023-07-06",
    fontes: [
      "https://www.camara.leg.br/noticias/982064-camara-aprova-reforma-tributaria",
    ],
    pl: "PEC 45/2019",
  },
  {
    id: "camara-2438459-148",
    casa: "camara",
    slug: "isencao-ir-5mil",
    tema: "economia",
    titulo: "Isenção do Imposto de Renda até R$5 mil",
    subtitulo: "PL 1087/2024",
    descricao:
      "Isenta do Imposto de Renda os trabalhadores que ganham até R$5.000 por mês. A medida beneficia aproximadamente 10 milhões de brasileiros.",
    contexto:
      "Aprovado por unanimidade na Câmara em outubro de 2025. Proposta central do governo Lula para o segundo mandato. O Senado ainda precisa aprovar a versão final.",
    posicao_favor: "Alívio tributário para a classe média trabalhadora",
    posicao_contra:
      "Impacto fiscal elevado e possível necessidade de novos impostos para compensar",
    aprovada: true,
    data: "2025-10-22",
    fontes: [
      "https://www.gazetadopovo.com.br/republica/como-os-deputados-votaram-nas-pautas-que-tensionaram-os-poderes-em-2025/",
    ],
    pl: "PL 1087/2024",
  },
  {
    id: "camara-2387827-53",
    casa: "camara",
    slug: "pacote-fiscal",
    tema: "economia",
    titulo: "Pacote Fiscal — Corte de Gastos",
    subtitulo: "PL 1847/2024",
    descricao:
      "Congela reajustes de servidores, limita o crescimento de despesas do governo federal e endurece regras para concessão de benefícios sociais.",
    contexto:
      "Aprovado em dezembro de 2024 em resposta à piora das expectativas fiscais. Governo anunciou junto a isenção IR até R$5k, gerando críticas de inconsistência.",
    posicao_favor: "Responsabilidade fiscal e controle da dívida pública",
    posicao_contra:
      "Corte de gastos sociais e congelamento de salários de servidores",
    aprovada: true,
    data: "2024-12-17",
    fontes: ["https://agencia.camara.leg.br/assunto/pl-18472024"],
    pl: "PL 1847/2024",
  },
  {
    id: "camara-2323645-70",
    casa: "camara",
    slug: "taxacao-offshores",
    tema: "economia",
    titulo: "Taxação de Offshores e Fundos Exclusivos",
    subtitulo: "PL 4173/2023",
    descricao:
      "Tributa rendimentos de brasileiros em paraísos fiscais (offshores) e fundos de investimento exclusivos de grandes fortunas, que antes eram isentos.",
    contexto:
      "Aprovado em 2023. Governo estimou arrecadação de R$20bi. Críticos do mercado financeiro alertaram para fuga de capitais. Entidades sociais defenderam como medida de justiça tributária.",
    posicao_favor: "Justiça fiscal: quem tem mais deve pagar mais",
    posicao_contra: "Risco de fuga de capitais e desinvestimento no Brasil",
    aprovada: true,
    data: "2023-11-09",
    fontes: [
      "https://www.camara.leg.br/noticias/1014756-camara-aprova-tributacao-de-fundos-exclusivos-e-offshores",
    ],
    pl: "PL 4173/2023",
  },
  {
    id: "camara-2265438-47",
    casa: "camara",
    slug: "pec-transicao",
    tema: "economia",
    titulo: "PEC da Transição — Bolsa Família fora do teto",
    subtitulo: "PEC 32/2022",
    descricao:
      "Retirou R$168 bilhões em gastos (incluindo o Bolsa Família ampliado) do teto de gastos por 4 anos, viabilizando o programa de transferência de renda do governo Lula.",
    contexto:
      "Aprovada em dezembro de 2022 como condição para a transição de governo. Apoiada por quem defendia manutenção do Auxílio Brasil de R$600. Criticada pelo mercado por romper o teto.",
    posicao_favor: "Manutenção da renda básica para famílias vulneráveis",
    posicao_contra:
      "Irresponsabilidade fiscal e enfraquecimento do arcabouço de controle de gastos",
    aprovada: true,
    data: "2022-12-20",
    fontes: [
      "https://www.camara.leg.br/noticias/929888-camara-conclui-votacao-da-pec-da-transicao",
    ],
    pl: "PEC 32/2022",
  },
  {
    id: "camara-2087906-53",
    casa: "camara",
    slug: "privatizacao-eletrobras",
    tema: "economia",
    titulo: "Privatização da Eletrobras",
    subtitulo: "MP 1031/2021",
    descricao:
      "Autoriza a privatização da Eletrobras, a maior empresa elétrica do Brasil e da América Latina. A União passa de controladora para acionista minoritária.",
    contexto:
      "Aprovada em 2021. Concluída em 2022. Governo Bolsonaro argumentou por eficiência e redução da dívida. Oposição criticou a perda de controle sobre setor estratégico.",
    posicao_favor:
      "Eficiência na gestão e redução da intervenção estatal no setor elétrico",
    posicao_contra:
      "Perda de controle sobre infraestrutura estratégica e risco de aumento de tarifas",
    aprovada: true,
    data: "2021-06-23",
    fontes: ["https://agencia.camara.leg.br/assunto/eletrobras"],
    pl: "MP 1031/2021",
  },
  {
    id: "camara-2098898-70",
    casa: "camara",
    slug: "fundao-eleitoral",
    tema: "democracia",
    titulo: "Fundo Eleitoral de R$5,7 bilhões",
    subtitulo: "LOA 2022 — Emenda ao Orçamento",
    descricao:
      "Aprovou o maior fundo eleitoral da história do Brasil, com R$5,7 bilhões para financiar campanhas eleitorais de 2022, mais que o dobro dos R$2,2bi de 2018.",
    contexto:
      'Aprovado em 2021 sem debate público. Gerou reação negativa da opinião pública. Chamado de "fundão" pelos críticos. Partidos defenderam como alternativa após proibição do financiamento empresarial.',
    posicao_favor:
      "Financiamento democrático de campanhas sem dependência de empresas privadas",
    posicao_contra:
      "Uso excessivo de dinheiro público para financiar políticos",
    aprovada: true,
    data: "2021-07-23",
    fontes: [
      "https://www.camara.leg.br/noticias/796036-camara-aprova-fundo-eleitoral-de-r-57-bilhoes",
    ],
    pl: "LOA 2022",
  },

  // DIREITOS SOCIAIS
  {
    id: "camara-2313031-63",
    casa: "camara",
    slug: "cotas-concursos",
    tema: "direitos",
    titulo: "Cotas Raciais em Concursos Públicos",
    subtitulo: "PL 1595/2023",
    descricao:
      "Reserva 20% das vagas em concursos públicos federais para candidatos negros (pretos e pardos), com política de verificação da autodeclaração.",
    contexto:
      "Aprovado em 2023. Brasil tem uma das maiores desigualdades raciais do mundo. Defensores citam necessidade de reparação histórica. Críticos questionam critérios de verificação.",
    posicao_favor:
      "Reparação histórica e combate à desigualdade racial estrutural",
    posicao_contra:
      "Mérito individual como critério único para o serviço público",
    aprovada: true,
    data: "2023-06-28",
    fontes: [
      "https://www.camara.leg.br/noticias/978002-camara-aprova-cotas-raciais-em-concursos-publicos",
    ],
    pl: "PL 1595/2023",
  },
  {
    id: "camara-2336442-71",
    casa: "camara",
    slug: "igualdade-salarial",
    tema: "direitos",
    titulo: "Igualdade Salarial entre Homens e Mulheres",
    subtitulo: "PL 1085/2023",
    descricao:
      "Obriga empresas a publicar relatórios de transparência salarial e estabelece punições para quem pagar salários diferentes para funções iguais por motivo de gênero.",
    contexto:
      "Aprovado em 2023. A diferença salarial entre homens e mulheres no Brasil é de cerca de 20%. Empresas criticaram burocracia. Movimentos feministas comemoraram.",
    posicao_favor:
      "Fim da discriminação salarial de gênero e isonomia no trabalho",
    posicao_contra:
      "Burocracia excessiva para empresas e interferência nas relações trabalhistas",
    aprovada: true,
    data: "2023-07-04",
    fontes: [
      "https://www.camara.leg.br/noticias/979536-camara-aprova-igualdade-salarial-entre-homens-e-mulheres",
    ],
    pl: "PL 1085/2023",
  },
  {
    id: "camara-2316805-65",
    casa: "camara",
    slug: "cotas-universidades",
    tema: "direitos",
    titulo: "Renovação das Cotas nas Universidades Federais",
    subtitulo: "PL 1950/2022",
    descricao:
      "Renova por mais 10 anos a lei de cotas nas universidades federais, mantendo reserva de vagas para estudantes de escolas públicas, negros e indígenas.",
    contexto:
      "A lei original de 2012 expirava em 2022. Aprovado por ampla maioria. O sistema de cotas aumentou significativamente a diversidade nas universidades federais.",
    posicao_favor:
      "Democratização do acesso ao ensino superior e redução de desigualdades",
    posicao_contra:
      "Critérios baseados em mérito como única forma de seleção universitária",
    aprovada: true,
    data: "2023-06-08",
    fontes: [
      "https://www.camara.leg.br/noticias/966378-camara-dos-deputados-aprova-renovacao-da-lei-de-cotas",
    ],
    pl: "PL 1950/2022",
  },
  {
    id: "camara-2338808-67",
    casa: "camara",
    slug: "regulamentacao-apps",
    tema: "trabalho",
    titulo: "Regulamentação dos Trabalhadores de Aplicativos",
    subtitulo: "PL 3748/2023",
    descricao:
      "Define direitos trabalhistas para entregadores e motoristas de aplicativos (Uber, iFood, etc.): renda mínima por hora, cobertura previdenciária e seguro de acidentes.",
    contexto:
      "Aprovado em 2024. Brasil tem mais de 1,5 milhão de trabalhadores nessa modalidade. Plataformas resistiram. Trabalhadores ficaram divididos entre mais proteção e menos liberdade.",
    posicao_favor:
      "Proteção social e direitos mínimos para trabalhadores de plataforma",
    posicao_contra:
      "Encarecimento dos serviços e redução da flexibilidade dos trabalhadores",
    aprovada: true,
    data: "2024-10-10",
    fontes: [
      "https://www.camara.leg.br/noticias/1078876-camara-aprova-regulamentacao-do-trabalho-por-plataformas",
    ],
    pl: "PL 3748/2023",
  },
  {
    id: "camara-2289015-55",
    casa: "camara",
    slug: "salario-minimo",
    tema: "trabalho",
    titulo: "Salário Mínimo com Aumento Real",
    subtitulo: "PLP 1/2023",
    descricao:
      "Estabelece política permanente de valorização do salário mínimo, com reajuste anual pela inflação (INPC) mais o crescimento real do PIB dos 2 anos anteriores.",
    contexto:
      "Aprovado em 2023. Reestabeleceu política de valorização suspensa durante o governo Bolsonaro. Salário mínimo chegou a R$1.518 em 2024 e R$1.622 em 2025.",
    posicao_favor:
      "Valorização real do salário dos trabalhadores e redução da desigualdade",
    posicao_contra: "Impacto no custo das empresas e na previdência social",
    aprovada: true,
    data: "2023-09-06",
    fontes: [
      "https://www.camara.leg.br/noticias/990698-camara-aprova-piso-salarial-com-aumento-real",
    ],
    pl: "PLP 1/2023",
  },

  // SEGURANÇA E JUSTIÇA
  {
    id: "camara-2422598-82",
    casa: "camara",
    slug: "dosimetria-8-janeiro",
    tema: "democracia",
    titulo: "Redução de Penas dos Condenados pelo 8 de Janeiro",
    subtitulo: '"PL da Dosimetria" — PL 2162/2023',
    descricao:
      "Altera as regras de cálculo de penas para condenados por crimes em manifestações políticas, podendo beneficiar participantes dos ataques de 8 de janeiro de 2023.",
    contexto:
      "Aprovado pela Câmara (291×148) e pelo Senado (48×25) em dezembro de 2025. Vetado integralmente pelo presidente Lula. Congresso pode derrubar o veto.",
    posicao_favor:
      "Proporcionalidade das penas e revisão de julgamentos considerados excessivos",
    posicao_contra:
      "Impunidade para quem atentou contra a democracia e as instituições",
    aprovada: true,
    data: "2025-12-10",
    fontes: [
      "https://www.gazetadopovo.com.br/republica/como-os-deputados-votaram-nas-pautas-que-tensionaram-os-poderes-em-2025/",
    ],
    pl: "PL 2162/2023",
  },
  {
    id: "camara-2419735-78",
    casa: "camara",
    slug: "restricao-stf",
    tema: "democracia",
    titulo: "Restrição de Decisões Monocráticas do STF",
    subtitulo: "PL 3640/2023",
    descricao:
      "Limita o poder de ministros do STF de tomar decisões individuais (monocráticas) que afetam todo o país, exigindo referendo do plenário do Tribunal.",
    contexto:
      "Aprovado pela Câmara em outubro de 2025. Surgiu em resposta a decisões de Alexandre de Moraes. Governo apoiou. STF reagiu. Aguarda o Senado.",
    posicao_favor:
      "Controle do ativismo judicial e equilíbrio entre os poderes",
    posicao_contra:
      "Interferência do Legislativo no funcionamento do Judiciário",
    aprovada: true,
    data: "2025-10-22",
    fontes: [
      "https://www.gazetadopovo.com.br/republica/como-os-deputados-votaram-nas-pautas-que-tensionaram-os-poderes-em-2025/",
    ],
    pl: "PL 3640/2023",
  },
  {
    id: "camara-2108089-41",
    casa: "camara",
    slug: "voto-impresso",
    tema: "democracia",
    titulo: "Voto Impresso Auditável",
    subtitulo: "PEC 135/2019",
    descricao:
      "Propunha obrigar as urnas eletrônicas a imprimir um comprovante físico do voto, que seria depositado em uma urna separada para possível recontagem.",
    contexto:
      "Rejeitada em agosto de 2021 por 229×218, menos que os 308 votos necessários. Bolsonaro fez da pauta uma bandeira. Especialistas eleitorais defenderam a urna atual como segura.",
    posicao_favor:
      "Transparência adicional no processo eleitoral e verificação física dos votos",
    posicao_contra:
      "Urna eletrônica já é auditável e voto impresso cria riscos à privacidade e logística",
    aprovada: false,
    data: "2021-08-05",
    fontes: [
      "https://www.camara.leg.br/noticias/798040-camara-rejeita-proposta-do-voto-impresso",
    ],
    pl: "PEC 135/2019",
  },

  // SAÚDE
  {
    id: "camara-2142062-46",
    casa: "camara",
    slug: "cannabis-medicinal",
    tema: "saude",
    titulo: "Regulamentação da Cannabis Medicinal",
    subtitulo: "PL 399/2015",
    descricao:
      "Permite a produção nacional de medicamentos à base de cannabis, regulamentando o cultivo, pesquisa e comercialização de produtos canabinoides para fins medicinais.",
    contexto:
      "Aprovado pela Câmara em 2021. Aguardou anos no Senado. Pacientes de epilepsia, dor crônica e outras condições dependiam de importação cara.",
    posicao_favor:
      "Acesso a tratamentos eficazes e produção nacional de medicamentos",
    posicao_contra: "Risco de facilitar o uso recreativo da substância",
    aprovada: true,
    data: "2021-06-01",
    fontes: [
      "https://www.camara.leg.br/noticias/772124-camara-aprova-projeto-que-regulamenta-uso-medicinal-da-cannabis",
    ],
    pl: "PL 399/2015",
  },

  // EDUCAÇÃO
  {
    id: "camara-2148282-48",
    casa: "camara",
    slug: "homeschooling",
    tema: "educacao",
    titulo: "Ensino Domiciliar (Homeschooling)",
    subtitulo: "PL 3179/2012",
    descricao:
      "Permite que pais ou responsáveis eduquem seus filhos em casa, como alternativa à escola regular, com supervisão do poder público.",
    contexto:
      "Aprovado pela Câmara em 2022, aguarda Senado. Brasil era um dos poucos países sem regulamentação. Apoiado por famílias religiosas e libertárias. Educadores temem impacto na socialização.",
    posicao_favor:
      "Liberdade dos pais na educação dos filhos e alternativas pedagógicas",
    posicao_contra: "Socialização das crianças e risco de isolamento e abuso",
    aprovada: true,
    data: "2022-05-10",
    fontes: [
      "https://www.camara.leg.br/noticias/877030-camara-aprova-ensino-domiciliar",
    ],
    pl: "PL 3179/2012",
  },
  {
    id: "camara-2139491-44",
    casa: "camara",
    slug: "piso-professores",
    tema: "educacao",
    titulo: "Piso Nacional dos Professores",
    subtitulo: "PL 2061/2022",
    descricao:
      "Garante aumento real acima da inflação para o piso salarial nacional dos professores da educação básica pública, vinculando ao crescimento do PIB.",
    contexto:
      "Aprovado em 2022. Professores das redes públicas recebem em média menos que outros profissionais com mesma formação. Municípios reclamaram do impacto no orçamento local.",
    posicao_favor: "Valorização do magistério e melhoria da educação pública",
    posicao_contra:
      "Impacto nos orçamentos municipais sem contrapartida federal",
    aprovada: true,
    data: "2022-12-06",
    fontes: [
      "https://www.camara.leg.br/noticias/922876-camara-aprova-projeto-que-garante-aumento-real-para-professores",
    ],
    pl: "PL 2061/2022",
  },

  // TECNOLOGIA
  {
    id: "camara-2360985-74",
    casa: "camara",
    slug: "regulamentacao-bets",
    tema: "tecnologia",
    titulo: "Regulamentação das Apostas Esportivas (Bets)",
    subtitulo: "PL 3626/2023",
    descricao:
      "Legaliza e regulamenta as casas de apostas esportivas online, criando um sistema de licenciamento e regras de proteção ao consumidor.",
    contexto:
      "Aprovado em 2023. As bets explodiram no Brasil. Surgiram preocupações com vício em jogo e endividamento, especialmente entre beneficiários do Bolsa Família. Gerou debate sobre publicidade.",
    posicao_favor:
      "Regulamentação de setor já existente, gerando arrecadação e proteção ao consumidor",
    posicao_contra:
      "Expansão do jogo de azar e riscos de endividamento da população mais vulnerável",
    aprovada: true,
    data: "2023-10-10",
    fontes: [
      "https://www.camara.leg.br/noticias/1012978-camara-aprova-regulamentacao-das-apostas-esportivas",
    ],
    pl: "PL 3626/2023",
  },

  // ARMAS
  {
    id: "camara-2085045-39",
    casa: "camara",
    slug: "ampliacao-armas",
    tema: "seguranca",
    titulo: "Ampliação do Acesso a Armas para Civis",
    subtitulo: "Decretos Bolsonaro + PL 3723/2019",
    descricao:
      "Conjunto de decretos e projetos que ampliaram o acesso de cidadãos comuns a armas de fogo, aumentando limites de compra, tipos permitidos e facilitando registro.",
    contexto:
      "Uma das bandeiras do governo Bolsonaro (2019-2022). Revertido parcialmente pelo governo Lula via decretos. O número de armas legais mais que dobrou no período.",
    posicao_favor: "Legítima defesa e direito dos cidadãos de se protegerem",
    posicao_contra:
      "Aumento da violência, acidentes domésticos e risco de feminicídio",
    aprovada: true,
    data: "2021-02-16",
    fontes: ["https://agencia.camara.leg.br/assunto/armamento"],
    pl: "PL 3723/2019",
  },

  // SENADO
  {
    id: "senado-6246",
    casa: "senado",
    slug: "pec-marco-temporal-senado",
    tema: "indigenismo",
    titulo: "PEC do Marco Temporal — Senado",
    subtitulo: "PEC 48/2023",
    descricao:
      "Versão do Senado para constitucionalizar o marco temporal das terras indígenas, mesmo após o STF ter decidido que o critério é inconstitucional.",
    contexto:
      "Aprovada no Senado em dezembro de 2025 e retornou à Câmara. Tentativa do Congresso de superar a decisão do STF via emenda constitucional.",
    posicao_favor:
      "Segurança jurídica para propriedades rurais estabelecidas há décadas",
    posicao_contra:
      "Desrespeito à decisão do STF e retrocesso nos direitos indígenas",
    aprovada: true,
    data: "2025-12-09",
    fontes: [
      "https://www12.senado.leg.br/tv/programas/senado-noticias/2025/12/edicao-da-noite-senado-aprova-pec-do-marco-temporal-e-proposta-retorna-a-camara-dos-deputados",
    ],
    pl: "PEC 48/2023",
  },
  {
    id: "senado-5970",
    casa: "senado",
    slug: "reforma-tributaria-senado",
    tema: "economia",
    titulo: "Reforma Tributária — Aprovação no Senado",
    subtitulo: "PEC 45/2019 — 2º turno",
    descricao:
      "Aprovação definitiva da Reforma Tributária pelo Senado Federal, completando o processo legislativo da maior mudança no sistema de impostos em décadas.",
    contexto:
      "Aprovada em novembro de 2023. Após aprovação na Câmara, o Senado fez ajustes e a proposta voltou à Câmara para redação final. Transição de 7 anos para o novo sistema.",
    posicao_favor:
      "Modernização do sistema tributário e redução da complexidade fiscal",
    posicao_contra:
      "Alíquota-padrão pode ser elevada e impactar produtos essenciais",
    aprovada: true,
    data: "2023-11-08",
    fontes: [
      "https://www12.senado.leg.br/noticias/materias/2023/11/08/senado-aprova-reforma-tributaria",
    ],
    pl: "PEC 45/2019",
  },
  {
    id: "senado-6180",
    casa: "senado",
    slug: "dosimetria-senado",
    tema: "democracia",
    titulo: "Dosimetria das Penas — Aprovação no Senado",
    subtitulo: "PL 2162/2023",
    descricao:
      "O Senado aprovou por 48×25 a versão do PL da Dosimetria, com modificações em relação ao texto da Câmara para restringir benefícios aos envolvidos no 8 de janeiro.",
    contexto:
      "Votado em dezembro de 2025. Lula vetou integralmente. O Congresso pode derrubar o veto. Tema central do debate político sobre democracia e impunidade.",
    posicao_favor:
      "Proporcionalidade das penas e revisão de condenações consideradas excessivas",
    posicao_contra: "Impunidade para os participantes da tentativa de golpe",
    aprovada: true,
    data: "2025-12-18",
    fontes: [
      "https://www12.senado.leg.br/noticias/materias/2025/12/17/senado-aprova-pl-da-dosimetria",
    ],
    pl: "PL 2162/2023",
  },
  {
    id: "senado-6120",
    casa: "senado",
    slug: "ampliacao-camara",
    tema: "democracia",
    titulo: "Ampliação da Câmara para 531 Deputados",
    subtitulo: "PLP 177/2023",
    descricao:
      "Aprovado pelo Senado, aumenta o número de deputados federais de 513 para 531 a partir de 2027, redistribuindo vagas conforme o Censo 2022.",
    contexto:
      "Aprovado 41×33 no Senado em junho de 2025. Vetado pelo presidente Lula por impacto fiscal. Congresso pode derrubar o veto. STF havia dado prazo para a redistribuição.",
    posicao_favor:
      "Correção da representação proporcional dos estados conforme a Constituição",
    posicao_contra: "Aumento de gastos públicos com mais parlamentares",
    aprovada: true,
    data: "2025-06-25",
    fontes: [
      "https://www12.senado.leg.br/noticias/materias/2025/06/25/senado-aprova-ampliacao-da-camara-para-531-deputados-a-partir-de-2027",
    ],
    pl: "PLP 177/2023",
  },
];

// Mapeamento de tema para emoji e cor
const TEMAS = {
  meio_ambiente: { label: "Meio Ambiente", emoji: "🌿", cor: "#22c55e" },
  indigenismo: { label: "Povos Indígenas", emoji: "🪶", cor: "#f97316" },
  economia: { label: "Economia", emoji: "📈", cor: "#3b82f6" },
  direitos: { label: "Direitos Sociais", emoji: "⚖️", cor: "#a855f7" },
  trabalho: { label: "Trabalho", emoji: "🔨", cor: "#eab308" },
  democracia: { label: "Democracia", emoji: "🗳️", cor: "#ef4444" },
  saude: { label: "Saúde", emoji: "🏥", cor: "#06b6d4" },
  educacao: { label: "Educação", emoji: "📚", cor: "#8b5cf6" },
  tecnologia: { label: "Tecnologia", emoji: "💻", cor: "#64748b" },
  seguranca: { label: "Segurança", emoji: "🛡️", cor: "#dc2626" },
};

// ─── Fetch com retry ──────────────────────────────────────────────────────────

async function fetchJSON(url, descricao) {
  console.log(`  ↓ ${descricao}`);
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { Accept: "application/json" } });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.json();
    } catch (e) {
      if (i < 2) {
        console.log(`    retry ${i + 1}/3 após erro: ${e.message}`);
        await new Promise((r) => setTimeout(r, 2000 * (i + 1)));
      } else throw e;
    }
  }
}

// ─── Busca votos da Câmara ────────────────────────────────────────────────────

async function fetchVotosCamara(votacaoId) {
  const rawId = votacaoId.replace("camara-", "");
  const json = await fetchJSON(
    `https://dadosabertos.camara.leg.br/api/v2/votacoes/${rawId}/votos`,
    `votos Câmara ${rawId}`,
  );
  if (!json?.dados?.length) return null;

  const partidos = {};
  for (const v of json.dados) {
    const partido = v.deputado_?.siglaPartido?.toUpperCase() || "?";
    if (!partidos[partido])
      partidos[partido] = { sim: 0, nao: 0, abstencao: 0, total: 0 };
    const voto = (v.tipoVoto || "").toLowerCase();
    partidos[partido].total++;
    if (voto === "sim") partidos[partido].sim++;
    else if (voto === "não" || voto === "nao") partidos[partido].nao++;
    else partidos[partido].abstencao++;
  }
  return { partidos, total_votos: json.dados.length };
}

// ─── Busca votos do Senado ────────────────────────────────────────────────────

async function fetchVotosSenado(votacaoId) {
  const rawId = votacaoId.replace("senado-", "");
  const json = await fetchJSON(
    `https://legis.senado.leg.br/dadosabertos/plenario/votacao/${rawId}/votos.json`,
    `votos Senado ${rawId}`,
  );
  if (!json) return null;

  // Tentar diferentes caminhos
  const rawVotos =
    json?.VotacaoParlamentar?.Parlamentares?.Parlamentar ||
    json?.Votacao?.Parlamentares?.Parlamentar ||
    [];

  const lista = Array.isArray(rawVotos) ? rawVotos : [rawVotos];
  if (!lista.length) return null;

  const partidos = {};
  for (const v of lista) {
    const ident = v?.IdentificacaoParlamentar;
    const partido = (ident?.SiglaPartidoParlamentar || "?").toUpperCase();
    const sigla = (v?.SiglaVoto || "").toUpperCase();

    if (!partidos[partido])
      partidos[partido] = { sim: 0, nao: 0, abstencao: 0, total: 0 };
    partidos[partido].total++;
    if (["SIM", "S"].includes(sigla)) partidos[partido].sim++;
    else if (["NÃO", "NAO", "N", "NCF"].includes(sigla))
      partidos[partido].nao++;
    else partidos[partido].abstencao++;
  }
  return { partidos, total_votos: lista.length };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("\n🗳️  VotoAlinhado — Gerador de dados curados\n");
  console.log(`Processando ${VOTACOES_CURADAS.length} votações...\n`);

  const resultado = [];
  let ok = 0,
    falhou = 0;

  for (const v of VOTACOES_CURADAS) {
    console.log(`📌 [${v.casa.toUpperCase()}] ${v.titulo}`);

    let votosData = null;
    try {
      votosData =
        v.casa === "camara"
          ? await fetchVotosCamara(v.id)
          : await fetchVotosSenado(v.id);
    } catch (e) {
      console.log(`  ✗ Erro ao buscar votos: ${e.message}`);
    }

    if (!votosData) {
      console.log(`  ⚠ Sem votos — incluindo sem dados de partido\n`);
      falhou++;
    } else {
      console.log(
        `  ✓ ${votosData.total_votos} votos, ${Object.keys(votosData.partidos).length} partidos\n`,
      );
      ok++;
    }

    resultado.push({
      id: v.id,
      casa: v.casa,
      slug: v.slug,
      tema: v.tema,
      tema_meta: TEMAS[v.tema] || { label: v.tema, emoji: "•", cor: "#666" },
      pl: v.pl,
      titulo: v.titulo,
      subtitulo: v.subtitulo,
      descricao: v.descricao,
      contexto: v.contexto,
      posicao_favor: v.posicao_favor,
      posicao_contra: v.posicao_contra,
      aprovada: v.aprovada,
      data: v.data,
      fontes: v.fontes,
      votos_partido: votosData?.partidos || null,
      total_votos: votosData?.total_votos || null,
    });

    // Delay entre requests para não sobrecarregar a API
    await new Promise((r) => setTimeout(r, 800));
  }

  mkdirSync(join(ROOT, "src", "data"), { recursive: true });
  writeFileSync(
    OUT,
    JSON.stringify(
      {
        gerado_em: new Date().toISOString(),
        total: resultado.length,
        temas: TEMAS,
        votacoes: resultado,
      },
      null,
      2,
    ),
  );

  console.log(`\n✅ Gerado: src/data/votacoes.json`);
  console.log(`   ${ok} com votos | ${falhou} sem dados de votos`);
  console.log(
    `\nCommite o arquivo para atualizar o app:\n  git add src/data/votacoes.json && git commit -m "chore: atualiza dados de votações"\n`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
