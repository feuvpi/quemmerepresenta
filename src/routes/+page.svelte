<script lang="ts">
  import { goto } from '$app/navigation';
  import { TICKER_TEMAS } from '$lib/store.svelte';
</script>

<svelte:head>
  <title>QuemMeRepresenta — Eleições 2026</title>
</svelte:head>

<div class="hero">
  <!-- Background: Bandeira ondulante SVG -->
  <div class="bg-flag" aria-hidden="true">
    <svg viewBox="0 0 1600 1100" preserveAspectRatio="xMidYMid slice" width="120%" height="120%"
         style="position:absolute;left:-10%;top:-10%;transform:rotate(-6deg);transform-origin:center">
      <defs>
        <linearGradient id="flagFade" gradientUnits="userSpaceOnUse" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stop-color="white" stop-opacity="0"/>
          <stop offset="40%" stop-color="white" stop-opacity="0.2"/>
          <stop offset="70%" stop-color="white" stop-opacity="0.75"/>
          <stop offset="100%" stop-color="white" stop-opacity="1"/>
        </linearGradient>
        <mask id="flagMask"><rect width="1600" height="1100" fill="url(#flagFade)"/></mask>
        <linearGradient id="greenSheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFF" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#000" stop-opacity="0.12"/>
        </linearGradient>
        <linearGradient id="yellowSheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFF" stop-opacity="0.30"/>
          <stop offset="100%" stop-color="#000" stop-opacity="0.10"/>
        </linearGradient>
        <radialGradient id="blueSheen" cx="0.35" cy="0.35" r="0.7">
          <stop offset="0%" stop-color="#1850B8" stop-opacity="0.9"/>
          <stop offset="60%" stop-color="#002776" stop-opacity="1"/>
          <stop offset="100%" stop-color="#001752" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <g mask="url(#flagMask)">
        <path d="M 80,160 C 280,110 480,200 680,150 C 880,100 1080,200 1280,140 C 1380,110 1480,140 1520,150 L 1520,920 C 1380,970 1180,890 980,940 C 780,990 580,900 380,950 C 220,990 120,960 80,950 Z" fill="#006B38"/>
        <path d="M 80,160 C 280,110 480,200 680,150 C 880,100 1080,200 1280,140 C 1380,110 1480,140 1520,150 L 1520,920 C 1380,970 1180,890 980,940 C 780,990 580,900 380,950 C 220,990 120,960 80,950 Z" fill="url(#greenSheen)"/>
        <path d="M 800,210 C 1080,330 1300,470 1430,540 C 1300,640 1080,790 800,920 C 520,800 300,650 170,545 C 300,470 520,330 800,210 Z" fill="#FFD100"/>
        <path d="M 800,210 C 1080,330 1300,470 1430,540 C 1300,640 1080,790 800,920 C 520,800 300,650 170,545 C 300,470 520,330 800,210 Z" fill="url(#yellowSheen)"/>
        <ellipse cx="800" cy="555" rx="220" ry="210" fill="url(#blueSheen)"/>
        <path d="M 600,545 C 700,510 900,510 1000,545" fill="none" stroke="#FFF" stroke-opacity="0.85" stroke-width="3"/>
        {#each [[720,470,2.5],[770,490,1.8],[820,460,2.2],[880,500,2.0],[700,540,2.8],[780,560,2.0],[840,555,2.6],[905,580,2.3],[740,620,2.2],[810,635,2.5],[870,605,1.9],[925,640,2.0],[770,680,2.1],[830,670,2.4],[890,685,1.7]] as [sx,sy,r]}
          <circle cx={sx} cy={sy} r={r} fill="#FFF"/>
        {/each}
      </g>
    </svg>
  </div>

  <!-- Dot grid overlay -->
  <div class="bg-dots" aria-hidden="true"></div>

  <!-- Arcos de canto -->
  <svg class="bg-arcs" viewBox="0 0 600 600" aria-hidden="true">
    {#each [140,220,300,380,460] as r, i}
      <circle cx="600" cy="0" r={r} fill="none" stroke="#006B38" stroke-width="1" opacity={0.08 + i * 0.02}/>
    {/each}
  </svg>

  <!-- Triângulo amarelo canto inferior esquerdo -->
  <div class="bg-tri" aria-hidden="true"></div>

  <!-- Grain overlay -->
  <div class="bg-grain" aria-hidden="true"></div>

  <!-- Content -->
  <main class="hero-main">
    <!-- LEFT COLUMN -->
    <div class="hero-left">
      <!-- Kicker -->
      <div class="hero-kicker anim-up-1">
        <div class="kicker-bar"></div>
        <span>ELEIÇÕES 2026</span>
        <span class="kicker-dot">·</span>
        <span>10 VOTAÇÕES DO CONGRESSO</span>
      </div>

      <!-- Glass panel com headline + texto + CTAs -->
      <div class="hero-glass anim-up-2">
        <h1 class="hero-h1">
          <div class="h1-line1">Quem me</div>
          <div class="h1-line2">representa</div>
          <div class="h1-line3">de verdade?</div>
        </h1>

        <p class="hero-body">
          Exerça a sua democracia votando em <strong>partidos que representam o que você acredita</strong> — e não no que prometem. Comparamos o seu voto com os votos reais de cada bancada no Congresso, sem opiniões nossas no meio.
        </p>

        <div class="hero-ctas">
          <a href="/quiz" class="cta-primary" data-sveltekit-preload-data="hover">
            <span class="cta-arrow">→</span>
            <span class="cta-text">
              <span class="cta-main">Começar o teste</span>
              <span class="cta-sub">Anônimo · Sem cadastro</span>
            </span>
          </a>

          <a href="/sobre" class="cta-secondary">
            Como funciona
          </a>
        </div>
      </div>

      <!-- Tema pills -->
      <div class="hero-temas anim-up-3">
        <div class="temas-label">TEMAS ABORDADOS</div>
        <div class="temas-list">
          {#each ["Meio ambiente","Economia","Direitos","Trabalho","Segurança","Educação","Democracia","Tributação"] as t}
            <a href="/quiz" class="tema-pill">{t}</a>
          {/each}
        </div>
      </div>
    </div>

    <!-- RIGHT COLUMN: Stats card -->
    <div class="hero-right anim-up-2">
      <div class="stats-card">
        <!-- Yellow triangle corner -->
        <div class="sc-tri" aria-hidden="true"></div>

        <div class="sc-label">
          <div class="sc-dot"></div>
          DADOS ATUALIZADOS
        </div>

        <div class="sc-grid">
          {#each [['10','Votações'],['04','Anos'],['30+','Partidos'],['02','Casas']] as [n,l]}
            <div class="sc-stat">
              <div class="sc-n">{n}</div>
              <div class="sc-l">{l}</div>
            </div>
          {/each}
        </div>

        <div class="sc-footer">
          <div>
            <div class="sc-footer-title">Leva 3 minutos</div>
            <div class="sc-footer-sub">Anônimo · Sem cadastro</div>
          </div>
          <a href="/quiz" class="sc-cta" aria-label="Começar">→</a>
        </div>
      </div>
    </div>
  </main>

  <!-- Ticker -->
  <div class="ticker">
    <div class="ticker-track">
      {#each [...TICKER_TEMAS, ...TICKER_TEMAS] as t, i}
        <span class="ticker-item">{t}</span>
        <span class="ticker-sep">◆</span>
      {/each}
    </div>
  </div>
</div>

<style>
/* ═══════ HERO ═══════════════════════════════════════════════════════════════ */
.hero {
  position: relative;
  width: 100%;
  min-height: 100svh;
  background: #FFFFFF;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Fundos decorativos */
.bg-flag {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.85;
  pointer-events: none;
}

.bg-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0,107,56,0.22) 1px, transparent 1.2px);
  background-size: 32px 32px;
  mix-blend-mode: multiply;
  opacity: 0.35;
  pointer-events: none;
}

.bg-arcs {
  position: absolute;
  top: -80px; right: -80px;
  width: 720px; height: 720px;
  overflow: visible;
  pointer-events: none;
  z-index: 0;
}

.bg-tri {
  position: absolute;
  bottom: 0; left: 0;
  width: 30%; height: 40%;
  background: #FFD100;
  clip-path: polygon(0 100%, 80% 100%, 0 60%);
  opacity: 0.1;
  mix-blend-mode: multiply;
  pointer-events: none;
}

.bg-grain {
  position: absolute;
  inset: 0;
  opacity: 0.15;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='120' height='120' filter='url(%23n)'/></svg>");
  background-size: 120px;
  pointer-events: none;
}

/* Layout principal */
.hero-main {
  position: relative;
  z-index: 1;
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 8.75rem 3rem 5rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 5rem;
  align-items: center;
}

/* Kicker */
.hero-kicker {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  color: var(--ink-5);
  font-weight: 600;
  margin-bottom: 1.5rem;
}
.kicker-bar { width: 20px; height: 2px; background: var(--green); }
.kicker-dot { opacity: 0.35; }

/* Glass panel */
.hero-glass {
  position: relative;
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255,255,255,0.65);
  border-radius: 18px;
  padding: 2rem 2.5rem 2.5rem;
  box-shadow: 0 1px 0 rgba(255,255,255,0.7) inset, 0 12px 40px rgba(17,19,16,0.06);
  margin-bottom: 2rem;
}

.hero-h1 {
  margin-bottom: 2rem;
}
.h1-line1 {
  font-family: var(--sans);
  font-weight: 800;
  font-size: clamp(3.2rem, 7.5vw, 6.5rem);
  line-height: 0.93;
  letter-spacing: -0.045em;
  color: var(--black);
}
.h1-line2 {
  font-family: var(--sans);
  font-weight: 800;
  font-size: clamp(3.2rem, 7.5vw, 6.5rem);
  line-height: 0.93;
  letter-spacing: -0.045em;
  color: var(--green);
}
.h1-line3 {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(2.8rem, 6.5vw, 5.8rem);
  line-height: 1;
  letter-spacing: -0.02em;
  color: #FFD100;
}

.hero-body {
  font-family: var(--sans);
  font-weight: 500;
  font-size: 1.06rem;
  line-height: 1.6;
  color: var(--ink-2);
  max-width: 460px;
  margin-bottom: 2rem;
  text-align: justify;
  hyphens: auto;
}
.hero-body strong { font-weight: 800; color: var(--black); }

/* CTAs */
.hero-ctas {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.cta-primary {
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
  transition: all 500ms cubic-bezier(0.16,1,0.3,1);
  box-shadow: 0 4px 16px rgba(0,107,56,0.15);
  text-decoration: none;
}
.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0,107,56,0.25);
}
.cta-arrow {
  width: 56px; height: 56px;
  background: #FFD100;
  display: grid;
  place-items: center;
  color: var(--black);
  font-family: var(--mono);
  font-size: 1.375rem;
  font-weight: 700;
  flex-shrink: 0;
}
.cta-text { display: flex; flex-direction: column; gap: 0.05rem; }
.cta-main { display: block; line-height: 1; }
.cta-sub {
  display: block;
  font-size: 0.62rem;
  opacity: 0.55;
  margin-top: 0.1rem;
}

.cta-secondary {
  height: 56px;
  background: transparent;
  color: var(--black);
  border: 1.5px solid var(--black);
  padding: 0 1.5rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 400ms cubic-bezier(0.16,1,0.3,1);
  text-decoration: none;
  display: flex;
  align-items: center;
}
.cta-secondary:hover {
  background: var(--green);
  color: white;
  border-color: var(--green);
}

/* Temas */
.hero-temas { }
.temas-label {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  color: var(--ink-5);
  font-weight: 600;
  margin-bottom: 0.875rem;
}
.temas-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.tema-pill {
  padding: 0.5rem 0.875rem;
  border: 1px solid #9C9C94;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(6px);
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-3);
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
  transition: all 400ms cubic-bezier(0.16,1,0.3,1);
}
.tema-pill:hover {
  border-color: var(--green);
  color: var(--green);
  background: white;
}

/* Stats card */
.stats-card {
  position: relative;
  background: rgba(255,255,255,0.72);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 20px;
  padding: 2.25rem 2rem;
  box-shadow: 0 8px 32px rgba(0,107,56,0.08), 0 1px 0 rgba(255,255,255,0.8) inset;
  overflow: hidden;
}
.sc-tri {
  position: absolute;
  top: 0; right: 0;
  width: 90px; height: 90px;
  background: #FFD100;
  clip-path: polygon(100% 0, 100% 100%, 0 0);
  opacity: 0.18;
}
.sc-label {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
}
.sc-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--green-2);
  box-shadow: 0 0 0 4px rgba(0,165,80,0.15);
  animation: pulse 2s ease-in-out infinite;
}
.sc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.75rem;
  margin-bottom: 2rem;
}
.sc-stat { }
.sc-n {
  font-family: var(--mono);
  font-weight: 700;
  font-size: 2.75rem;
  color: var(--black);
  line-height: 1;
  letter-spacing: -0.02em;
}
.sc-l {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
  margin-top: 0.5rem;
}
.sc-footer {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(17,19,16,0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sc-footer-title {
  font-family: var(--sans);
  font-weight: 800;
  font-size: 1rem;
  color: var(--black);
  letter-spacing: -0.02em;
}
.sc-footer-sub {
  font-family: var(--sans);
  font-weight: 300;
  font-size: 0.8rem;
  color: var(--ink-4);
  margin-top: 0.125rem;
}
.sc-cta {
  width: 44px; height: 44px;
  background: var(--black);
  color: white;
  display: grid;
  place-items: center;
  font-family: var(--mono);
  font-size: 1.125rem;
  transition: background 0.2s;
  text-decoration: none;
}
.sc-cta:hover { background: var(--green); }

/* Ticker */
.ticker {
  position: relative;
  z-index: 2;
  background: #F0F0E8;
  border-top: 1px solid rgba(17,19,16,0.08);
  height: 44px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.ticker-track {
  display: flex;
  gap: 0;
  animation: tickerScroll 60s linear infinite;
  white-space: nowrap;
}
.ticker-item {
  font-family: var(--mono);
  font-size: 0.69rem;
  letter-spacing: 0.22em;
  color: var(--ink-4);
  padding: 0 2rem;
}
.ticker-sep {
  color: var(--green);
  font-size: 0.5rem;
  align-self: center;
}

/* ── Mobile ── */
@media (max-width: 900px) {
  .hero-main {
    grid-template-columns: 1fr;
    padding: 5rem 1.5rem 3rem;
    gap: 2.5rem;
  }
  .hero-right { order: -1; }
  .stats-card { padding: 1.5rem; }
  .sc-grid { gap: 1.25rem; }
  .sc-n { font-size: 2.25rem; }
  .hero-glass { padding: 1.5rem; }
  .h1-line1, .h1-line2 { font-size: clamp(2.8rem, 12vw, 4.5rem); }
  .h1-line3 { font-size: clamp(2.4rem, 10vw, 3.8rem); }
  .hero-body { font-size: 0.95rem; }
  .hero-ctas { gap: 0.75rem; }
  .cta-primary, .cta-secondary { height: 52px; }
}

@media (max-width: 480px) {
  .hero-main { padding: 4.5rem 1.25rem 2.5rem; }
  .cta-secondary { display: none; }
  .sc-grid { grid-template-columns: repeat(4, 1fr); }
  .sc-stat { text-align: center; }
  .sc-footer { flex-direction: column; gap: 1rem; text-align: center; }
  .sc-cta { width: 100%; justify-self: stretch; }
}
</style>
