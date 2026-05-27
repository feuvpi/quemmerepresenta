<script lang="ts">
    import { goto } from "$app/navigation";
</script>

<svelte:head>
    <title>Como Funciona — QuemMeRepresenta</title>
</svelte:head>

<div class="sobre">
    <!-- Background -->
    <div class="s-bg-dots"></div>
    <svg class="s-bg-arcs" viewBox="0 0 600 600" aria-hidden="true">
        {#each [140, 220, 300, 380] as r, i}
            <circle
                cx="600"
                cy="0"
                {r}
                fill="none"
                stroke="#006B38"
                stroke-width="1"
                opacity={0.06 + i * 0.01}
            />
        {/each}
    </svg>
    <div class="s-bg-tri"></div>
    <div class="s-grain"></div>

    <main class="s-main">
        <!-- Kicker + título -->
        <div class="s-kicker anim-up-1">
            <div class="s-kbar"></div>
            <span>SOBRE A PLATAFORMA</span>
        </div>

        <h1 class="s-h1 anim-up-2">
            Como funciona o<br />
            <span class="s-green">QuemMeRepresenta</span>
        </h1>

        <!-- Objetivo -->
        <section class="s-section anim-up-3">
            <div class="ss-card glass">
                <div class="ss-header">
                    <div class="ss-num">01</div>
                    <h2 class="ss-titulo">O que é isto?</h2>
                </div>
                <div class="ss-body">
                    <p>
                        O <strong>QuemMeRepresenta</strong> é uma ferramenta de transparência
                        política criada para ajudar o eleitor brasileiro a descobrir
                        quais partidos, na prática, votam de acordo com seus valores
                        e crenças.
                    </p>
                    <p>
                        Chega de votar em promessas. Aqui, você vê como cada
                        legenda <em>realmente</em> votou nos últimos 4 anos no Congresso
                        Nacional — em pautas que afetam diretamente a vida dos brasileiros.
                    </p>

                    <div class="ss-destaque">
                        <div class="sd-barra"></div>
                        <p>
                            Não somos filiados a nenhum partido. Não temos
                            financiadores políticos. Não temos posição sobre
                            qual partido é "melhor". Somos apenas uma ferramenta
                            para o eleitor.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Como funciona -->
        <section class="s-section anim-up-3">
            <div class="ss-card glass">
                <div class="ss-header">
                    <div class="ss-num">02</div>
                    <h2 class="ss-titulo">Como funciona o teste</h2>
                </div>
                <div class="ss-body">
                    <div class="steps">
                        {#each [{ n: "1", t: "Você responde", d: "Para cada votação real do Congresso, você indica se votaria A FAVOR ou CONTRA, como se fosse parlamentar. Pode pular as que não conhece ou não tem opinião." }, { n: "2", t: "Comparamos os votos", d: "Verificamos como cada partido votou nessa mesma pauta. Usamos a posição majoritária da bancada — se mais de 50% dos parlamentares votou de uma forma, consideramos essa a posição do partido." }, { n: "3", t: "Calculamos a afinidade", d: "O percentual de afinidade é simples: quantas votações (onde você respondeu e o partido tinha posição clara) você e o partido concordaram ÷ total de votações comparáveis × 100." }, { n: "4", t: "Você vê o resultado", d: "Os partidos são ranqueados por afinidade. Você pode expandir cada partido para ver exatamente em quais votações concordou e discordou." }] as step}
                            <div class="step">
                                <div class="step-n">{step.n}</div>
                                <div class="step-body">
                                    <div class="step-titulo">{step.t}</div>
                                    <p class="step-desc">{step.d}</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </section>

        <!-- Curadoria -->
        <section class="s-section anim-up-4">
            <div class="ss-card glass">
                <div class="ss-header">
                    <div class="ss-num">03</div>
                    <h2 class="ss-titulo">Como escolhemos as votações</h2>
                </div>
                <div class="ss-body">
                    <p>
                        Os projetos foram selecionados com base em três
                        critérios objetivos:
                    </p>

                    <div class="criterios">
                        {#each [{ icon: "◆", titulo: "Impacto real na população", desc: "Pautas que afetam diretamente o dia a dia dos brasileiros: emprego, impostos, saúde, educação, meio ambiente, direitos." }, { icon: "◆", titulo: "Posição clara dos partidos", desc: "Votações onde a maioria das bancadas tinha posição definida — e não apenas procedurais ou burocráticas que não expressam valores." }, { icon: "◆", titulo: "Diversidade temática e política", desc: "Selecionamos pautas de diferentes espectros — algumas mais identificadas com a esquerda, outras com a direita — para que o resultado seja representativo." }] as c}
                            <div class="criterio">
                                <div
                                    class="criterio-icon"
                                    style="color:var(--green)"
                                >
                                    {c.icon}
                                </div>
                                <div>
                                    <div class="criterio-titulo">
                                        {c.titulo}
                                    </div>
                                    <p class="criterio-desc">{c.desc}</p>
                                </div>
                            </div>
                        {/each}
                    </div>

                    <div class="ss-aviso">
                        <div class="sa-icon">!</div>
                        <p>
                            <strong>Auditabilidade:</strong> todas as votações têm
                            link para a fonte oficial da Câmara dos Deputados ou do
                            Senado Federal. Você pode verificar cada dado diretamente
                            nos portais governamentais.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Independência -->
        <section class="s-section anim-up-4">
            <div class="ss-card glass independence">
                <div class="ss-header">
                    <div class="ss-num">04</div>
                    <h2 class="ss-titulo">Independência e transparência</h2>
                </div>
                <div class="ss-body">
                    <div class="indep-grid">
                        {#each [{ ok: true, text: "Projeto independente, sem financiamento político ou empresarial" }, { ok: true, text: "Código aberto — qualquer pessoa pode auditar nossa metodologia" }, { ok: true, text: "Dados públicos — fontes do Congresso Nacional disponíveis para todos" }, { ok: true, text: "Sem coleta de dados pessoais, sem cookies, sem rastreamento" }, { ok: false, text: "Não somos afiliados a nenhum partido, candidato ou movimento" }, { ok: false, text: "Não temos posição sobre qual partido é melhor ou pior" }, { ok: false, text: "Não recebemos financiamento de nenhum grupo político" }] as item}
                            <div class="indep-item">
                                <div
                                    class="ii-mark"
                                    style="background:{item.ok
                                        ? 'var(--green)'
                                        : '#002776'}"
                                >
                                    {item.ok ? "✓" : "✕"}
                                </div>
                                <span>{item.text}</span>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </section>

        <!-- Limitações -->
        <section class="s-section anim-up-5">
            <div class="ss-card glass">
                <div class="ss-header">
                    <div class="ss-num">05</div>
                    <h2 class="ss-titulo">Limitações honestas</h2>
                </div>
                <div class="ss-body">
                    <p>
                        Qualquer ferramenta deste tipo tem limitações. Estas são
                        as nossas:
                    </p>
                    <ul class="limitacoes">
                        <li>
                            A afinidade é calculada com base em uma amostra de
                            votações, não em todas as pautas do Congresso.
                        </li>
                        <li>
                            A posição de um partido é simplificada para a
                            maioria da bancada — há dissidências internas que
                            não são capturadas.
                        </li>
                        <li>
                            Um partido pode votar diferente do que você
                            esperaria em pautas não incluídas aqui.
                        </li>
                        <li>
                            Partidos menores podem ter menos votações
                            computadas, o que pode distorcer o percentual.
                        </li>
                        <li>
                            Mandatos futuros podem divergir do histórico de
                            votações passadas.
                        </li>
                    </ul>
                    <p style="margin-top:1rem">
                        Use este resultado como <strong>ponto de partida</strong
                        > para pesquisar mais, não como verdade absoluta.
                    </p>
                </div>
            </div>
        </section>

        <!-- Apoio -->
        <!-- <section class="s-section anim-up-5">
      <div class="ss-card coffee-card">
        <div class="cc-content">
          <div class="cc-left">
            <div class="cc-titulo">Apoie o projeto</div>
            <p>O QuemMeRepresenta é gratuito e independente. Custos de hospedagem, manutenção e curadoria de dados têm um preço. Se a ferramenta foi útil para você, considere contribuir com qualquer valor para mantê-la no ar.</p>
            <p style="font-size:.82rem;color:var(--ink-5);font-style:italic">Todas as doações são voluntárias. Nenhum valor garante influência sobre o conteúdo ou metodologia.</p>
          </div>
          <div class="cc-right">
            <a href="https://buymeacoffee.com/quemmerepresenta" target="_blank" rel="noopener" class="cc-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 3H4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V3zM2 19h20v2H2z"/></svg>
              Buy me a coffee
            </a>
          </div>
        </div>
      </div>
    </section> -->

        <!-- CTA final -->
        <div class="s-cta anim-up-6">
            <a href="/quiz" class="sc-btn">
                <span class="scb-arrow">→</span>
                <div>
                    <span class="scb-main">Fazer o teste agora</span>
                    <span class="scb-sub"
                        >Anônimo · Sem cadastro · 3 minutos</span
                    >
                </div>
            </a>
        </div>
    </main>
</div>

<style>
    .sobre {
        position: relative;
        min-height: 100svh;
        background: #fff;
        overflow: hidden;
        padding-bottom: 5rem;
    }
    .s-bg-dots {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(
            circle,
            rgba(0, 107, 56, 0.22) 1px,
            transparent 1.2px
        );
        background-size: 32px 32px;
        mix-blend-mode: multiply;
        opacity: 0.22;
        pointer-events: none;
    }
    .s-bg-arcs {
        position: absolute;
        top: -80px;
        right: -80px;
        width: 720px;
        height: 720px;
        overflow: visible;
        pointer-events: none;
    }
    .s-bg-tri {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 30%;
        height: 40%;
        background: #ffd100;
        clip-path: polygon(0 100%, 80% 100%, 0 60%);
        opacity: 0.09;
        mix-blend-mode: multiply;
        pointer-events: none;
    }
    .s-grain {
        position: absolute;
        inset: 0;
        opacity: 0.12;
        mix-blend-mode: overlay;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='120' height='120' filter='url(%23n)'/></svg>");
        background-size: 120px;
        pointer-events: none;
    }
    .s-main {
        position: relative;
        z-index: 1;
        max-width: 900px;
        margin: 0 auto;
        padding: 8.75rem 3rem 0;
    }
    .s-kicker {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-family: var(--mono);
        font-size: 0.62rem;
        letter-spacing: 0.22em;
        color: var(--ink-5);
        margin-bottom: 1.5rem;
    }
    .s-kbar {
        width: 20px;
        height: 2px;
        background: var(--green);
    }
    .s-h1 {
        font-family: var(--sans);
        font-weight: 800;
        letter-spacing: -0.04em;
        line-height: 1;
        font-size: clamp(2.4rem, 5.5vw, 4.5rem);
        color: var(--black);
        margin-bottom: 3rem;
    }
    .s-green {
        color: var(--green);
    }

    .s-section {
        margin-bottom: 1.5rem;
    }
    .ss-card {
        border-radius: 20px;
        overflow: hidden;
    }
    .ss-card.glass {
        background: rgba(255, 255, 255, 0.72);
        backdrop-filter: blur(20px) saturate(140%);
        -webkit-backdrop-filter: blur(20px) saturate(140%);
        border: 1px solid rgba(255, 255, 255, 0.6);
        box-shadow:
            0 8px 32px rgba(0, 107, 56, 0.06),
            0 1px 0 rgba(255, 255, 255, 0.8) inset;
    }
    .ss-header {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding: 1.75rem 2.25rem;
        border-bottom: 1px solid rgba(17, 19, 16, 0.07);
        background: linear-gradient(
            180deg,
            rgba(250, 250, 245, 0.8),
            rgba(244, 244, 237, 0.8)
        );
    }
    .ss-num {
        font-family: var(--mono);
        font-weight: 700;
        font-size: 2rem;
        color: var(--green);
        line-height: 1;
        letter-spacing: -0.02em;
    }
    .ss-titulo {
        font-family: var(--sans);
        font-weight: 800;
        font-size: 1.3rem;
        letter-spacing: -0.025em;
        color: var(--black);
        margin: 0;
    }
    .ss-body {
        padding: 2rem 2.25rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .ss-body p {
        font-family: var(--sans);
        font-size: 0.95rem;
        line-height: 1.7;
        color: var(--ink-3);
    }
    .ss-body strong {
        font-weight: 800;
        color: var(--black);
    }
    .ss-body em {
        font-style: italic;
    }

    .ss-destaque {
        display: flex;
        gap: 1.125rem;
        padding: 1rem 1.25rem;
        border-left: 3px solid #ffd100;
        background: linear-gradient(
            90deg,
            rgba(255, 209, 0, 0.08),
            rgba(255, 209, 0, 0.02)
        );
        border-radius: 0 8px 8px 0;
        margin-top: 0.5rem;
    }
    .sd-barra {
        display: none;
    }
    .ss-destaque p {
        margin: 0;
        font-style: italic;
        color: var(--ink-2);
    }

    .steps {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .step {
        display: flex;
        gap: 1.25rem;
        align-items: flex-start;
    }
    .step-n {
        font-family: var(--mono);
        font-weight: 700;
        font-size: 1.5rem;
        color: rgba(0, 107, 56, 0.2);
        line-height: 1;
        flex-shrink: 0;
        width: 2rem;
    }
    .step-titulo {
        font-weight: 800;
        font-size: 1rem;
        letter-spacing: -0.01em;
        margin-bottom: 0.3rem;
    }
    .step-desc {
        font-family: var(--sans);
        font-size: 0.88rem;
        line-height: 1.65;
        color: var(--ink-4);
    }

    .criterios {
        display: flex;
        flex-direction: column;
        gap: 1.1rem;
        margin: 0.5rem 0;
    }
    .criterio {
        display: flex;
        gap: 0.875rem;
        align-items: flex-start;
    }
    .criterio-icon {
        font-size: 0.7rem;
        margin-top: 0.25rem;
        flex-shrink: 0;
    }
    .criterio-titulo {
        font-weight: 700;
        font-size: 0.95rem;
        margin-bottom: 0.2rem;
    }
    .criterio-desc {
        font-family: var(--sans);
        font-size: 0.85rem;
        line-height: 1.6;
        color: var(--ink-4);
    }

    .ss-aviso {
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
        padding: 0.875rem 1.125rem;
        background: var(--yellow-d);
        border: 1px solid rgba(255, 209, 0, 0.35);
        border-radius: 10px;
    }
    .sa-icon {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #ffd100;
        color: var(--black);
        display: grid;
        place-items: center;
        font-family: var(--mono);
        font-size: 0.72rem;
        font-weight: 800;
        flex-shrink: 0;
    }
    .ss-aviso p {
        font-family: var(--sans);
        font-size: 0.85rem;
        line-height: 1.6;
        color: var(--ink-3);
        margin: 0;
    }
    .ss-aviso strong {
        font-weight: 700;
        color: var(--black);
    }

    /* Independência */
    .ss-card.independence {
        border: 2px solid rgba(0, 107, 56, 0.15);
    }
    .indep-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
    }
    .indep-item {
        display: flex;
        align-items: flex-start;
        gap: 0.65rem;
        font-size: 0.88rem;
        line-height: 1.5;
        color: var(--ink-3);
    }
    .ii-mark {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        color: white;
        display: grid;
        place-items: center;
        flex-shrink: 0;
        font-family: var(--mono);
        font-size: 0.65rem;
        font-weight: 700;
        margin-top: 0.05rem;
    }

    /* Limitações */
    .limitacoes {
        padding-left: 1.25rem;
        margin: 0.5rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .limitacoes li {
        font-family: var(--sans);
        font-size: 0.88rem;
        line-height: 1.6;
        color: var(--ink-4);
    }

    /* Coffee card */
    .coffee-card {
        background: linear-gradient(
            135deg,
            rgba(255, 209, 0, 0.08),
            rgba(255, 209, 0, 0.03)
        );
        border: 1.5px solid rgba(255, 209, 0, 0.3);
    }
    .cc-content {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 2rem 2.25rem;
        flex-wrap: wrap;
    }
    .cc-left {
        flex: 1;
    }
    .cc-titulo {
        font-weight: 800;
        font-size: 1.1rem;
        letter-spacing: -0.01em;
        margin-bottom: 0.625rem;
    }
    .cc-left p {
        font-family: var(--sans);
        font-size: 0.88rem;
        line-height: 1.6;
        color: var(--ink-4);
        margin-bottom: 0.4rem;
    }
    .cc-right {
        flex-shrink: 0;
    }
    .cc-btn {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        height: 52px;
        background: #ffdd00;
        color: var(--black);
        padding: 0 1.5rem;
        border-radius: 10px;
        font-family: var(--sans);
        font-weight: 700;
        font-size: 0.9rem;
        text-decoration: none;
        white-space: nowrap;
        transition: background 0.2s;
        box-shadow: 0 2px 8px rgba(255, 209, 0, 0.35);
    }
    .cc-btn:hover {
        background: #ffd100;
    }

    /* CTA final */
    .s-cta {
        margin: 3rem 0 0;
    }
    .sc-btn {
        display: inline-flex;
        align-items: center;
        gap: 1.25rem;
        height: 60px;
        background: var(--green);
        color: white;
        text-decoration: none;
        padding: 0 2rem 0 0;
        font-family: var(--mono);
        font-size: 0.78rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        font-weight: 600;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 0 4px 16px rgba(0, 107, 56, 0.2);
    }
    .sc-btn:hover {
        background: #00a550;
        transform: translateY(-2px);
        box-shadow: 0 12px 32px rgba(0, 107, 56, 0.25);
    }
    .scb-arrow {
        width: 60px;
        height: 60px;
        background: #ffd100;
        display: grid;
        place-items: center;
        color: var(--black);
        font-size: 1.5rem;
        font-weight: 700;
    }
    .scb-main {
        display: block;
        line-height: 1;
    }
    .scb-sub {
        display: block;
        font-size: 0.62rem;
        opacity: 0.55;
        margin-top: 0.1rem;
    }

    @media (max-width: 900px) {
        .s-main {
            padding: 5.5rem 1.5rem 0;
        }
        .indep-grid {
            grid-template-columns: 1fr;
        }
        .cc-content {
            flex-direction: column;
            gap: 1.25rem;
        }
        .cc-btn {
            width: 100%;
            justify-content: center;
        }
    }
    @media (max-width: 640px) {
        .s-main {
            padding: 5rem 1.25rem 0;
        }
        .ss-header {
            padding: 1.25rem 1.5rem;
        }
        .ss-body {
            padding: 1.5rem;
        }
        .step {
            gap: 0.75rem;
        }
    }
</style>
