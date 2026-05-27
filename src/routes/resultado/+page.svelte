<script lang="ts">
    import { goto } from "$app/navigation";
    import { sessao } from "$lib/store.svelte";

    const corScore = (s: number) =>
        s >= 70 ? "#006B38" : s >= 45 ? "#D97706" : "#C8102E";
    const labelScore = (s: number) =>
        s >= 70
            ? "Alta sintonia"
            : s >= 45
              ? "Sintonia moderada"
              : "Baixa sintonia";

    let expandido = $state<string | null>(null);

    function reiniciar() {
        sessao.resetar();
        goto("/quiz");
    }
</script>

<svelte:head><title>Resultado — QuemMeRepresenta</title></svelte:head>

<div class="result">
    <!-- Fundo decorativo -->
    <div class="r-bg-dots"></div>
    <div
        class="r-flag-bg"
        aria-hidden="true"
        style="position:absolute;inset:0;overflow:hidden;pointer-events:none"
    >
        <svg
            viewBox="0 0 1600 1100"
            preserveAspectRatio="xMidYMid slice"
            style="position:absolute;width:130%;height:130%;left:-15%;top:-15%;transform:rotate(-3deg);opacity:0.65"
        >
            <defs>
                <linearGradient
                    id="rff"
                    gradientUnits="userSpaceOnUse"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                >
                    <stop offset="0%" stop-color="white" stop-opacity="1" />
                    <stop offset="60%" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <mask id="rfm"
                    ><rect width="1600" height="1100" fill="url(#rff)" /></mask
                >
            </defs>
            <g mask="url(#rfm)">
                <path
                    d="M 80,160 C 280,110 480,200 680,150 C 880,100 1080,200 1280,140 L 1520,150 L 1520,920 C 1380,970 1180,890 980,940 C 780,990 580,900 380,950 L 80,950 Z"
                    fill="#006B38"
                />
                <path
                    d="M 800,210 C 1080,330 1300,470 1430,540 C 1300,640 1080,790 800,920 C 520,800 300,650 170,545 C 300,470 520,330 800,210 Z"
                    fill="#FFD100"
                />
                <ellipse cx="800" cy="555" rx="220" ry="210" fill="#002776" />
            </g>
        </svg>
    </div>
    <svg
        class="r-bg-arcs"
        viewBox="0 0 600 600"
        aria-hidden="true"
        style="position:absolute;top:200px;left:-300px;width:700px;height:700px;overflow:visible;pointer-events:none"
    >
        {#each [140, 220, 300, 380] as r, i}
            <circle
                cx="300"
                cy="300"
                {r}
                fill="none"
                stroke="#006B38"
                stroke-width="1"
                opacity={0.06 + i * 0.01}
            />
        {/each}
    </svg>
    <div
        style="position:absolute;top:-120px;right:-120px;width:480px;height:320px;background:#FFD100;border-radius:50%;opacity:0.12;mix-blend-mode:multiply;pointer-events:none"
    ></div>
    <div class="r-bg-tri"></div>
    <div class="r-grain"></div>

    <main class="r-main">
        {#if sessao.respondidas === 0}
            <!-- Estado vazio -->
            <div class="r-empty anim-up-1">
                <div class="re-n">00</div>
                <h1>Nenhuma resposta ainda</h1>
                <p>
                    Responda pelo menos 3 votações para descobrir qual partido
                    melhor representa seus valores.
                </p>
                <a href="/quiz" class="re-cta">
                    <span class="re-arrow">→</span>
                    Ir para as votações
                </a>
            </div>
        {:else}
            <!-- Header -->
            <div class="anim-up-1">
                <div class="r-kicker">
                    <div class="r-kbar"></div>
                    <span>RESULTADO</span>
                    <span class="r-kdot">·</span>
                    <span
                        >BASEADO EM {sessao.respondidas} VOTAÇÃO{sessao.respondidas >
                        1
                            ? "ÕES"
                            : ""}</span
                    >
                </div>
            </div>

            <h1 class="r-h1 anim-up-2">
                Quem me{" "}
                <span class="r-green">representa?</span>
            </h1>

            <p class="r-sub anim-up-3">
                Os partidos abaixo votaram como você nos últimos 4 anos. Quanto
                maior o número, maior a sintonia entre os votos.
            </p>

            <!-- Pódio top 3 -->
            {#if sessao.ranking.length >= 3}
                {@const [p1, p2, p3] = sessao.ranking}
                <div class="podium anim-up-4">
                    <!-- 2º -->
                    <div class="pod p2">
                        <div class="pod-rank">02</div>
                        <div class="pod-sigla" style="color:{p2.partido.cor}">
                            {p2.partido.sigla}
                        </div>
                        <div
                            class="pod-bar"
                            style="background:{p2.partido
                                .cor};height:65px;opacity:.8"
                        ></div>
                        <div
                            class="pod-score"
                            style="color:{corScore(p2.score)}"
                        >
                            {p2.score}%
                        </div>
                        <div class="pod-label">{labelScore(p2.score)}</div>
                    </div>
                    <!-- 1º -->
                    <div class="pod p1">
                        <div class="pod-dest">MAIS ALINHADO</div>
                        <div class="pod-rank p1r">01</div>
                        <div
                            class="pod-sigla p1s"
                            style="color:{p1.partido.cor}"
                        >
                            {p1.partido.sigla}
                        </div>
                        <div
                            class="pod-bar"
                            style="background:{p1.partido
                                .cor};height:110px;opacity:.85"
                        ></div>
                        <div
                            class="pod-score p1sc"
                            style="color:{corScore(p1.score)}"
                        >
                            {p1.score}%
                        </div>
                        <div class="pod-label">{labelScore(p1.score)}</div>
                    </div>
                    <!-- 3º -->
                    <div class="pod p3">
                        <div class="pod-rank">03</div>
                        <div class="pod-sigla" style="color:{p3.partido.cor}">
                            {p3.partido.sigla}
                        </div>
                        <div
                            class="pod-bar"
                            style="background:{p3.partido
                                .cor};height:38px;opacity:.75"
                        ></div>
                        <div
                            class="pod-score"
                            style="color:{corScore(p3.score)}"
                        >
                            {p3.score}%
                        </div>
                        <div class="pod-label">{labelScore(p3.score)}</div>
                    </div>
                </div>
            {/if}

            <!-- Ranking completo -->
            <div class="ranking anim-up-5">
                <div class="rank-header">
                    <div class="rh-line"></div>
                    <span>RANKING COMPLETO</span>
                </div>

                {#each sessao.ranking as item, i}
                    {@const cor = corScore(item.score)}
                    {@const aberto = expandido === item.partido.sigla}
                    {@const alinhadas = item.itens.filter((x) => x.alinhado)}
                    {@const desalinhadas = item.itens.filter(
                        (x) => !x.alinhado,
                    )}

                    <div class="rank-row" class:aberto>
                        <button
                            class="rank-main"
                            onclick={() =>
                                (expandido = aberto
                                    ? null
                                    : item.partido.sigla)}
                        >
                            <span class="rm-i"
                                >{String(i + 1).padStart(2, "0")}</span
                            >
                            <div class="rm-partido">
                                <div
                                    class="rm-dot"
                                    style="background:{item.partido.cor}"
                                ></div>
                                <div>
                                    <div
                                        class="rm-sigla"
                                        style="color:{item.partido.cor}"
                                    >
                                        {item.partido.sigla}
                                    </div>
                                    <div class="rm-nome">
                                        {item.partido.nome}
                                    </div>
                                </div>
                            </div>
                            <div class="rm-barra-wrap">
                                <div class="rm-track">
                                    <div
                                        class="rm-fill"
                                        style="width:{item.score}%;background:{cor};transition:width 800ms cubic-bezier(.16,1,.3,1)"
                                    ></div>
                                </div>
                                <div class="rm-counts">
                                    <span style="color:#006B38"
                                        >+{item.concordou}</span
                                    >
                                    {" / "}
                                    <span style="color:#C8102E"
                                        >−{item.discordou}</span
                                    >
                                    {" / "}
                                    <span>{item.total} votos</span>
                                </div>
                            </div>
                            <div class="rm-score">
                                <span class="rms-n" style="color:{cor}"
                                    >{item.score}<span class="rms-pct">%</span
                                    ></span
                                >
                            </div>
                            <div class="rm-chev" class:open={aberto}>›</div>
                        </button>

                        {#if aberto}
                            <div class="rank-det anim-in">
                                <div class="rd-cols">
                                    <div class="rd-col ali">
                                        <div class="rdc-head">
                                            <span class="rdc-sign">+</span
                                            >ALINHADAS · {alinhadas.length}
                                        </div>
                                        {#if alinhadas.length === 0}
                                            <p class="rdc-empty">
                                                Nenhuma votação alinhada
                                            </p>
                                        {:else}
                                            {#each alinhadas as it}
                                                <div class="rdc-item">
                                                    <div class="rdc-meta">
                                                        {it.votacao.tema} · {it
                                                            .votacao.tipo}
                                                    </div>
                                                    <div class="rdc-titulo">
                                                        {it.votacao.titulo}
                                                    </div>
                                                </div>
                                            {/each}
                                        {/if}
                                    </div>
                                    <div class="rd-col des">
                                        <div class="rdc-head">
                                            <span class="rdc-sign">−</span
                                            >DESALINHADAS · {desalinhadas.length}
                                        </div>
                                        {#if desalinhadas.length === 0}
                                            <p class="rdc-empty">
                                                Nenhuma votação desalinhada
                                            </p>
                                        {:else}
                                            {#each desalinhadas as it}
                                                <div class="rdc-item">
                                                    <div class="rdc-meta">
                                                        {it.votacao.tema} · {it
                                                            .votacao.tipo}
                                                    </div>
                                                    <div class="rdc-titulo">
                                                        {it.votacao.titulo}
                                                    </div>
                                                </div>
                                            {/each}
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>

            <!-- Ações finais -->
            <div class="r-acoes anim-up-6">
                <button class="ra-primary" onclick={reiniciar}>
                    <span class="ra-icon">↻</span>
                    Refazer o teste
                </button>

                <div class="ra-meta">
                    Sem cookies. Sem rastreamento. Só seus votos.
                </div>
            </div>

            <!-- Coffee section -->
            <!-- <div class="r-coffee anim-up-6">
        <div class="rc-text">
          <div class="rc-title">Gostou? Apoie o projeto</div>
          <p>O QuemMeRepresenta é independente, sem fins lucrativos e sem afiliação partidária. Mantê-lo no ar tem custos. Se achou útil, considere contribuir com qualquer valor.</p>
        </div>
        <a href="https://buymeacoffee.com/quemmerepresenta" target="_blank" rel="noopener" class="rc-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 3H4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V3zM2 19h20v2H2z"/></svg>
          Buy me a coffee
        </a>
      </div> -->
        {/if}
    </main>
</div>

<style>
    .result {
        position: relative;
        min-height: 100svh;
        background: #fff;
        overflow: hidden;
        padding-bottom: 5rem;
    }
    .r-bg-dots {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(
            circle,
            rgba(0, 107, 56, 0.22) 1px,
            transparent 1.2px
        );
        background-size: 32px 32px;
        mix-blend-mode: multiply;
        opacity: 0.25;
        pointer-events: none;
    }
    .r-bg-tri {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40%;
        height: 50%;
        background: #006b38;
        clip-path: polygon(100% 100%, 100% 50%, 60% 100%);
        opacity: 0.06;
        pointer-events: none;
    }
    .r-grain {
        position: absolute;
        inset: 0;
        opacity: 0.15;
        mix-blend-mode: overlay;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='120' height='120' filter='url(%23n)'/></svg>");
        background-size: 120px;
        pointer-events: none;
    }

    .r-main {
        position: relative;
        z-index: 1;
        max-width: 1200px;
        margin: 0 auto;
        padding: 8.75rem 3rem 0;
    }

    /* Empty */
    .r-empty {
        text-align: center;
        padding: 4rem 0;
    }
    .re-n {
        font-family: var(--mono);
        font-size: 8rem;
        font-weight: 700;
        color: #e8e8e2;
        line-height: 1;
        margin-bottom: 1.5rem;
    }
    .r-empty h1 {
        font-size: 1.5rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin-bottom: 0.75rem;
    }
    .r-empty p {
        color: var(--ink-4);
        max-width: 360px;
        margin: 0 auto 2rem;
        line-height: 1.65;
    }
    .re-cta {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        height: 52px;
        background: var(--green);
        color: white;
        text-decoration: none;
        font-family: var(--mono);
        font-size: 0.75rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        font-weight: 600;
        padding: 0 1.5rem 0 0;
        transition: all 0.3s;
    }
    .re-cta:hover {
        background: #00a550;
    }
    .re-arrow {
        width: 52px;
        height: 52px;
        background: #ffd100;
        display: grid;
        place-items: center;
        color: var(--black);
        font-size: 1.25rem;
        font-weight: 700;
    }

    /* Header */
    .r-kicker {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-family: var(--mono);
        font-size: 0.62rem;
        letter-spacing: 0.22em;
        color: var(--ink-4);
        margin-bottom: 1.75rem;
    }
    .r-kbar {
        width: 20px;
        height: 2px;
        background: var(--green);
    }
    .r-kdot {
        opacity: 0.35;
    }
    .r-h1 {
        font-family: var(--sans);
        font-weight: 800;
        letter-spacing: -0.045em;
        line-height: 0.95;
        font-size: clamp(2.8rem, 6vw, 5.5rem);
        color: var(--black);
        margin: 0;
        margin-bottom: 1.25rem;
    }
    .r-green {
        color: var(--green);
    }
    .r-sub {
        font-family: var(--sans);
        font-weight: 300;
        font-size: 1.125rem;
        color: var(--ink-4);
        max-width: 540px;
        line-height: 1.6;
        font-style: italic;
        margin-bottom: 3.75rem;
    }

    /* Pódio */
    .podium {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 0.5rem;
        padding: 2rem 1.5rem 1.5rem;
        background: rgba(255, 255, 255, 0.72);
        backdrop-filter: blur(20px) saturate(140%);
        -webkit-backdrop-filter: blur(20px) saturate(140%);
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 20px;
        margin-bottom: 2.5rem;
        box-shadow:
            0 8px 32px rgba(0, 107, 56, 0.08),
            0 1px 0 rgba(255, 255, 255, 0.8) inset;
        overflow: hidden;
        position: relative;
    }
    /* Decoração pódio */
    .podium::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 90px;
        height: 90px;
        background: #ffd100;
        clip-path: polygon(100% 0, 100% 100%, 0 0);
        opacity: 0.15;
    }
    .pod {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
        flex: 1;
        max-width: 200px;
    }
    .pod-dest {
        font-family: var(--mono);
        font-size: 0.52rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        color: var(--green);
        background: rgba(255, 209, 0, 0.3);
        padding: 0.1rem 0.5rem;
        border-radius: 4px;
    }
    .pod-rank {
        font-family: var(--mono);
        font-size: 0.65rem;
        color: var(--muted);
        font-weight: 700;
    }
    .p1r {
        color: var(--green);
        font-size: 0.8rem;
    }
    .pod-sigla {
        font-family: var(--sans);
        font-size: 1.1rem;
        font-weight: 800;
        letter-spacing: -0.02em;
    }
    .p1s {
        font-size: 1.5rem;
    }
    .pod-bar {
        width: 80%;
        border-radius: 3px 3px 0 0;
    }
    .pod-score {
        font-family: var(--mono);
        font-weight: 700;
        font-size: 0.9rem;
    }
    .p1sc {
        font-size: 1.25rem;
    }
    .pod-label {
        font-family: var(--mono);
        font-size: 0.5rem;
        color: var(--muted);
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    /* Ranking */
    .ranking {
        margin-bottom: 3.75rem;
    }
    .rank-header {
        display: flex;
        align-items: center;
        gap: 0.875rem;
        padding-bottom: 0.75rem;
        border-bottom: 2px solid var(--black);
        margin-bottom: 0;
        font-family: var(--mono);
        font-size: 0.69rem;
        letter-spacing: 0.22em;
        color: var(--ink-4);
    }
    .rh-line {
        width: 20px;
        height: 2px;
        background: var(--green);
    }

    .rank-row {
        border-bottom: 1px solid #e8e8e2;
    }
    .rank-row.aberto {
        background: rgba(0, 107, 56, 0.02);
    }
    .rank-main {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1rem;
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
        transition: background 0.15s;
    }
    .rank-main:hover {
        background: rgba(0, 107, 56, 0.03);
    }
    .rm-i {
        font-family: var(--mono);
        font-size: 0.72rem;
        font-weight: 700;
        color: var(--muted);
        width: 2.5rem;
        flex-shrink: 0;
    }
    .rm-partido {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        width: 200px;
        flex-shrink: 0;
    }
    .rm-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
    }
    .rm-sigla {
        font-size: 1.1rem;
        font-weight: 800;
        letter-spacing: -0.01em;
    }
    .rm-nome {
        font-family: var(--mono);
        font-size: 0.58rem;
        color: var(--muted);
        margin-top: 1px;
    }
    .rm-barra-wrap {
        flex: 1;
    }
    .rm-track {
        height: 4px;
        background: #e8e8e2;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 0.3rem;
    }
    .rm-fill {
        height: 100%;
        border-radius: 4px;
    }
    .rm-counts {
        font-family: var(--mono);
        font-size: 0.6rem;
        letter-spacing: 0.1em;
        color: var(--muted);
    }
    .rm-score {
        text-align: right;
        flex-shrink: 0;
    }
    .rms-n {
        font-family: var(--mono);
        font-weight: 700;
        font-size: 1.5rem;
        letter-spacing: -0.02em;
    }
    .rms-pct {
        font-size: 0.75rem;
        color: var(--muted);
    }
    .rm-chev {
        font-size: 1rem;
        color: var(--muted);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        flex-shrink: 0;
    }
    .rm-chev.open {
        transform: rotate(90deg);
        color: var(--black);
    }

    .rank-det {
        padding: 0.5rem 1rem 1.75rem;
    }
    .rd-cols {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    .rd-col {
        padding: 1rem 1.125rem;
        border-radius: 12px;
    }
    .rd-col.ali {
        background: rgba(0, 107, 56, 0.04);
        border: 1px solid rgba(0, 107, 56, 0.1);
    }
    .rd-col.des {
        background: rgba(200, 16, 46, 0.04);
        border: 1px solid rgba(200, 16, 46, 0.1);
    }
    .rdc-head {
        font-family: var(--mono);
        font-size: 0.6rem;
        letter-spacing: 0.22em;
        font-weight: 600;
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .rd-col.ali .rdc-head {
        color: #006b38;
    }
    .rd-col.des .rdc-head {
        color: #c8102e;
    }
    .rdc-sign {
        font-size: 0.875rem;
        line-height: 0;
    }
    .rdc-empty {
        font-family: var(--sans);
        font-size: 0.75rem;
        color: var(--muted);
        font-style: italic;
    }
    .rdc-item {
        padding: 0.625rem 0;
        border-top: 1px solid rgba(17, 19, 16, 0.05);
    }
    .rdc-meta {
        font-family: var(--mono);
        font-size: 0.56rem;
        letter-spacing: 0.22em;
        color: var(--muted);
        margin-bottom: 0.1875rem;
    }
    .rdc-titulo {
        font-family: var(--sans);
        font-weight: 600;
        font-size: 0.8125rem;
        color: var(--black);
        line-height: 1.4;
    }

    /* Ações */
    .r-acoes {
        margin-top: 3.75rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 2.5rem;
    }
    .ra-primary {
        height: 56px;
        background: var(--green);
        color: white;
        border: none;
        padding: 0 1.75rem 0 0;
        cursor: pointer;
        font-family: var(--mono);
        font-size: 0.75rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 1.25rem;
        transition: all 0.3s;
    }
    .ra-primary:hover {
        background: #00a550;
    }
    .ra-icon {
        width: 56px;
        height: 56px;
        background: #ffd100;
        display: grid;
        place-items: center;
        color: var(--black);
        font-family: var(--mono);
        font-size: 1.375rem;
        font-weight: 700;
    }
    .ra-meta {
        font-family: var(--sans);
        font-weight: 300;
        font-size: 0.8125rem;
        color: var(--muted);
        font-style: italic;
        margin-left: 0.5rem;
    }

    /* Coffee */
    .r-coffee {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 1.75rem 2rem;
        background: rgba(255, 209, 0, 0.08);
        border: 1px solid rgba(255, 209, 0, 0.3);
        border-radius: 16px;
        margin-bottom: 2.5rem;
        flex-wrap: wrap;
    }
    .rc-text {
        flex: 1;
    }
    .rc-title {
        font-weight: 800;
        font-size: 1rem;
        letter-spacing: -0.01em;
        margin-bottom: 0.3rem;
    }
    .rc-text p {
        font-size: 0.84rem;
        color: var(--ink-4);
        line-height: 1.6;
    }
    .rc-btn {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        height: 48px;
        background: #ffdd00;
        color: var(--black);
        padding: 0 1.5rem;
        border-radius: 10px;
        font-family: var(--sans);
        font-weight: 700;
        font-size: 0.88rem;
        text-decoration: none;
        white-space: nowrap;
        flex-shrink: 0;
        transition: background 0.2s;
    }
    .rc-btn:hover {
        background: #ffd100;
    }

    @media (max-width: 900px) {
        .r-main {
            padding: 5.5rem 1.5rem 0;
        }
        .podium {
            padding: 1.5rem 1rem;
            gap: 0.4rem;
        }
        .pod-sigla {
            font-size: 0.9rem;
        }
        .p1s {
            font-size: 1.2rem;
        }
        .rm-partido {
            width: 140px;
        }
        .rm-nome {
            display: none;
        }
    }
    @media (max-width: 640px) {
        .r-main {
            padding: 5rem 1.25rem 0;
        }
        .rd-cols {
            grid-template-columns: 1fr;
        }
        .rank-main {
            gap: 0.6rem;
        }
        .rm-partido {
            width: 120px;
        }
        .r-coffee {
            flex-direction: column;
            gap: 1rem;
        }
        .rc-btn {
            width: 100%;
            justify-content: center;
        }
    }
</style>
