<script lang="ts">
    import { goto } from "$app/navigation";
    import { sessao, VOTACOES } from "$lib/store.svelte";
    import { untrack } from "svelte";

    const total = VOTACOES.length;

    function responder(val: number) {
        const id = sessao.votacaoAtual.id;
        sessao.responder(id, val);
        setTimeout(() => {
            if (sessao.indice < total - 1) sessao.avancar();
            else goto("/resultado");
        }, 380);
    }

    function pular() {
        sessao.pular();
        if (sessao.indice >= total - 1) goto("/resultado");
    }

    let visible = $state(false);
    $effect(() => {
        const _ = sessao.indice;
        untrack(() => {
            visible = false;
            requestAnimationFrame(() =>
                requestAnimationFrame(() => {
                    visible = true;
                }),
            );
        });
    });
</script>

<svelte:head
    ><title>Votação {sessao.indice + 1}/{total} — QuemMeRepresenta</title
    ></svelte:head
>

<div class="quiz">
    <div class="q-bg-dots"></div>
    <div class="q-bg-tri"></div>
    <svg class="q-bg-arcs" viewBox="0 0 600 600" aria-hidden="true">
        {#each [140, 220, 300] as r}
            <circle
                cx="0"
                cy="600"
                {r}
                fill="none"
                stroke="#FFD100"
                stroke-width="1"
                opacity="0.12"
            />
        {/each}
    </svg>
    <div class="q-watermark" aria-hidden="true">
        {String(sessao.indice + 1).padStart(2, "0")}
    </div>

    <!-- Bandeira levíssima de fundo -->
    <div
        class="q-flag-bg"
        aria-hidden="true"
        style="position:absolute;inset:0;overflow:hidden;pointer-events:none;opacity:0.45"
    >
        <svg
            viewBox="0 0 1600 1100"
            preserveAspectRatio="xMidYMid slice"
            style="position:absolute;width:130%;height:130%;left:-15%;top:-15%;transform:rotate(4deg)"
        >
            <defs>
                <linearGradient
                    id="qff"
                    gradientUnits="userSpaceOnUse"
                    x1="0%"
                    y1="50%"
                    x2="80%"
                    y2="50%"
                >
                    <stop offset="0%" stop-color="white" stop-opacity="1" />
                    <stop offset="100%" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <mask id="qfm"
                    ><rect width="1600" height="1100" fill="url(#qff)" /></mask
                >
            </defs>
            <g mask="url(#qfm)">
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

    <div class="q-counter">
        <span class="qc-n">{String(sessao.indice + 1).padStart(2, "0")}</span>
        <span class="qc-s">/</span>
        <span class="qc-t">{String(total).padStart(2, "0")}</span>
    </div>

    {#if sessao.votacaoAtual}
        {@const v = sessao.votacaoAtual}
        {@const meuVoto = sessao.respostas[v.id]}

        <div class="q-wrap" class:vis={visible}>
            <div class="card">
                <div class="card-bar"></div>

                <div class="card-head">
                    <div class="ch-l">
                        <div
                            class="ch-tema"
                            style="color:{v.temaColor};border-color:{v.temaColor}40"
                        >
                            <div
                                class="ch-dot"
                                style="background:{v.temaColor}"
                            ></div>
                            {v.tema}
                        </div>
                        <div class="ch-meta">
                            {v.tipo} <span>·</span>
                            {v.ano}
                        </div>
                    </div>
                    <div
                        class="rbadge"
                        class:ap={v.resultado === "APROVADO"}
                        class:rej={v.resultado === "REJEITADO"}
                    >
                        <div></div>
                        RESULTADO: {v.resultado}
                    </div>
                </div>

                <div class="card-body">
                    <h2 class="card-h2">{v.titulo}</h2>
                    <div class="card-desc">{v.descricao}</div>

                    <div class="lados">
                        <div class="lado favor">
                            <div class="lado-hd">
                                <span class="licon green">+</span>A FAVOR
                            </div>
                            <p>{v.proArgs}</p>
                        </div>
                        <div class="lado contra">
                            <div class="lado-hd">
                                <span class="licon red">−</span>CONTRA
                            </div>
                            <p>{v.conArgs}</p>
                        </div>
                    </div>

                    <div class="vote-btns">
                        <button
                            class="vbtn favor"
                            class:act={meuVoto === 1}
                            onclick={() => responder(1)}
                        >
                            <div class="vsign green">+</div>
                            <div>
                                <div class="vml">Sou a favor</div>
                                <div class="vsl">VOTO SIM</div>
                            </div>
                        </button>
                        <button
                            class="vbtn contra"
                            class:act={meuVoto === -1}
                            onclick={() => responder(-1)}
                        >
                            <div class="vsign red">−</div>
                            <div>
                                <div class="vml">Sou contra</div>
                                <div class="vsl">VOTO NÃO</div>
                            </div>
                        </button>
                    </div>
                </div>

                <div class="card-foot">
                    <div class="cf-l">
                        <span style="color:{v.temaColor};font-weight:600"
                            >{v.tipo}</span
                        >
                        <span class="cf-sep">·</span>
                        <span class="cf-muted">{v.tema}</span>
                        <span class="cf-sep">·</span>
                        <span class="cf-muted">{v.ano}</span>
                    </div>
                    <a
                        href={v.fonte}
                        target="_blank"
                        rel="noopener"
                        class="cf-src">fonte ↗</a
                    >
                </div>
            </div>

            <div class="q-nav">
                <button
                    class="qn-back"
                    disabled={sessao.indice === 0}
                    onclick={sessao.voltar}>← Voltar</button
                >
                <button class="qn-skip" onclick={pular}>Pular</button>
            </div>
        </div>
    {/if}
</div>

<style>
    .quiz {
        position: relative;
        width: 100%;
        min-height: 100svh;
        background: #fff;
        overflow: hidden;
        padding: 6.25rem 0 5rem;
    }
    .q-bg-dots {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(
            circle,
            rgba(0, 107, 56, 0.22) 1px,
            transparent 1.2px
        );
        background-size: 32px 32px;
        mix-blend-mode: multiply;
        opacity: 0.28;
        pointer-events: none;
    }
    .q-bg-tri {
        position: absolute;
        top: 0;
        left: 0;
        width: 35%;
        height: 55%;
        background: #006b38;
        clip-path: polygon(0 0, 60% 0, 0 70%);
        opacity: 0.06;
        pointer-events: none;
    }
    .q-bg-arcs {
        position: absolute;
        bottom: -200px;
        left: -200px;
        width: 600px;
        height: 600px;
        overflow: visible;
        pointer-events: none;
    }
    .q-watermark {
        position: absolute;
        bottom: -120px;
        right: -40px;
        font-family: var(--mono);
        font-weight: 700;
        font-size: clamp(14rem, 36vw, 34rem);
        color: #006b38;
        opacity: 0.06;
        line-height: 0.85;
        letter-spacing: -0.05em;
        pointer-events: none;
        user-select: none;
    }
    .q-counter {
        position: absolute;
        top: 6.5rem;
        right: 3rem;
        z-index: 5;
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        font-family: var(--mono);
    }
    .qc-n {
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--black);
        letter-spacing: -0.02em;
    }
    .qc-s,
    .qc-t {
        font-size: 0.875rem;
        color: var(--muted);
    }

    .q-wrap {
        position: relative;
        z-index: 1;
        max-width: 880px;
        margin: 3.75rem auto 0;
        padding: 0 1.5rem;
        opacity: 0;
        transform: translateY(16px);
        transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    .q-wrap.vis {
        opacity: 1;
        transform: translateY(0);
    }

    .card {
        background: #fff;
        border: 1px solid #e8e8e2;
        border-radius: 24px;
        box-shadow:
            0 1px 0 #fff inset,
            0 12px 48px rgba(0, 107, 56, 0.1),
            0 2px 12px rgba(17, 19, 16, 0.04);
        overflow: hidden;
    }
    .card-bar {
        height: 4px;
        background: linear-gradient(90deg, #006b38, #00a550 50%, #ffd100);
    }

    .card-head {
        background: linear-gradient(180deg, #fafaf5, #f4f4ed);
        padding: 1.125rem 2.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e8e8e2;
        gap: 1rem;
        flex-wrap: wrap;
    }
    .ch-l {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
    }
    .ch-tema {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: var(--mono);
        font-size: 0.6rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        font-weight: 700;
        padding: 0.3rem 0.6rem;
        background: #fff;
        border: 1px solid;
        border-radius: 100px;
    }
    .ch-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
    }
    .ch-meta {
        font-family: var(--mono);
        font-size: 0.6rem;
        letter-spacing: 0.18em;
        color: var(--ink-4);
        font-weight: 600;
        display: flex;
        gap: 0.4rem;
    }
    .ch-meta span {
        color: var(--muted);
    }
    .rbadge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.75rem;
        font-family: var(--mono);
        font-size: 0.6rem;
        letter-spacing: 0.22em;
        font-weight: 600;
        border-radius: 100px;
    }
    .rbadge div {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: currentColor;
    }
    .rbadge.ap {
        background: rgba(0, 107, 56, 0.1);
        color: #006b38;
    }
    .rbadge.rej {
        background: rgba(200, 16, 46, 0.1);
        color: #c8102e;
    }

    .card-body {
        padding: 2.25rem 2.25rem 1.5rem;
    }
    .card-h2 {
        font-family: var(--sans);
        font-weight: 800;
        letter-spacing: -0.03em;
        font-size: clamp(1.4rem, 2.5vw, 2rem);
        line-height: 1.18;
        color: var(--black);
        margin: 0 0 1.375rem;
    }
    .card-desc {
        padding: 1rem 1.25rem;
        border-left: 3px solid #ffd100;
        background: linear-gradient(
            90deg,
            rgba(255, 209, 0, 0.08),
            rgba(255, 209, 0, 0.02)
        );
        font-family: var(--sans);
        font-size: 0.88rem;
        line-height: 1.65;
        color: var(--ink-3);
        border-radius: 0 8px 8px 0;
        margin-bottom: 1.75rem;
    }
    .lados {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: 1.5px solid #e8e8e2;
        border-radius: 14px;
        overflow: hidden;
        margin-bottom: 1.5rem;
    }
    .lado {
        padding: 1.375rem 1.5rem 1.5rem;
    }
    .lado.favor {
        background: linear-gradient(
            180deg,
            rgba(0, 107, 56, 0.045),
            rgba(0, 107, 56, 0.02)
        );
    }
    .lado.contra {
        background: linear-gradient(
            180deg,
            rgba(200, 16, 46, 0.045),
            rgba(200, 16, 46, 0.02)
        );
        border-left: 1px solid #e8e8e2;
    }
    .lado-hd {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: var(--mono);
        font-size: 0.6rem;
        letter-spacing: 0.22em;
        font-weight: 700;
        margin-bottom: 0.75rem;
    }
    .lado.favor .lado-hd {
        color: #006b38;
    }
    .lado.contra .lado-hd {
        color: #c8102e;
    }
    .licon {
        width: 18px;
        height: 18px;
        color: white;
        display: grid;
        place-items: center;
        border-radius: 4px;
        font-family: var(--mono);
        font-size: 0.8rem;
        font-weight: 800;
        line-height: 1;
    }
    .licon.green {
        background: #006b38;
    }
    .licon.red {
        background: #c8102e;
    }
    .lado p {
        font-family: var(--sans);
        font-size: 0.84rem;
        line-height: 1.65;
        color: var(--ink-3);
    }

    .vote-btns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
    }
    .vbtn {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.125rem;
        background: rgba(255, 255, 255, 0.6);
        border: 1.5px solid rgba(17, 19, 16, 0.08);
        border-radius: 14px;
        cursor: pointer;
        text-align: left;
        transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 0 1px 0 rgba(17, 19, 16, 0.03);
    }
    .vbtn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(17, 19, 16, 0.08);
    }
    .vbtn.favor.act {
        border-color: #006b38;
        background: rgba(255, 255, 255, 0.95);
        box-shadow:
            0 0 0 3px rgba(0, 107, 56, 0.15),
            0 8px 24px rgba(0, 107, 56, 0.1);
    }
    .vbtn.contra.act {
        border-color: #c8102e;
        background: rgba(255, 255, 255, 0.95);
        box-shadow:
            0 0 0 3px rgba(200, 16, 46, 0.12),
            0 8px 24px rgba(200, 16, 46, 0.08);
    }
    .vsign {
        width: 48px;
        height: 48px;
        display: grid;
        place-items: center;
        font-family: var(--mono);
        font-size: 1.625rem;
        font-weight: 700;
        color: white;
        flex-shrink: 0;
    }
    .vsign.green {
        background: #006b38;
    }
    .vsign.red {
        background: #c8102e;
    }
    .vml {
        font-weight: 800;
        font-size: 0.9375rem;
        color: var(--black);
        letter-spacing: -0.01em;
    }
    .vsl {
        font-family: var(--mono);
        font-size: 0.6rem;
        letter-spacing: 0.18em;
        color: var(--muted);
        margin-top: 3px;
    }

    .card-foot {
        border-top: 1px solid #e8e8e2;
        padding: 1rem 2.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        background: linear-gradient(180deg, #fff, #fafaf5);
        flex-wrap: wrap;
    }
    .cf-l {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-family: var(--mono);
        font-size: 0.6rem;
        letter-spacing: 0.18em;
    }
    .cf-sep,
    .cf-muted {
        color: var(--muted);
    }
    .cf-src {
        font-family: var(--mono);
        font-size: 0.69rem;
        letter-spacing: 0.12em;
        color: #4a6b4a;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        padding-bottom: 1px;
        transition: all 300ms;
    }
    .cf-src:hover {
        color: var(--green);
        border-bottom-color: var(--green);
    }

    .q-nav {
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .qn-back {
        font-family: var(--mono);
        font-size: 0.69rem;
        letter-spacing: 0.18em;
        color: var(--ink-4);
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        transition: color 0.2s;
    }
    .qn-back:disabled {
        color: #c8c8c0;
        cursor: default;
    }
    .qn-back:not(:disabled):hover {
        color: var(--green);
    }
    .qn-skip {
        font-family: var(--mono);
        font-size: 0.69rem;
        letter-spacing: 0.18em;
        background: transparent;
        border: 1px solid #9cb89c;
        color: #4a6b4a;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        transition: all 300ms;
        cursor: pointer;
    }
    .qn-skip:hover {
        border-color: var(--green);
        color: var(--green);
    }

    @media (max-width: 768px) {
        .quiz {
            padding-top: 5rem;
        }
        .q-counter {
            top: 5rem;
            right: 1.25rem;
        }
        .q-wrap {
            margin-top: 2.5rem;
            padding: 0 1rem;
        }
        .lados {
            grid-template-columns: 1fr;
        }
        .lado.contra {
            border-left: none;
            border-top: 1px solid #e8e8e2;
        }
        .vote-btns {
            grid-template-columns: 1fr;
        }
        .card-body {
            padding: 1.25rem;
        }
        .card-head,
        .card-foot {
            padding: 0.875rem 1.25rem;
        }
        .q-watermark {
            display: none;
        }
    }
</style>
