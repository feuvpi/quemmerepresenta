<script lang="ts">
    import "../app.css";
    import { page } from "$app/state";
    import { goto } from "$app/navigation";
    import { sessao } from "$lib/store.svelte";

    interface Props {
        children: import("svelte").Snippet;
    }
    let { children }: Props = $props();

    const isHero = $derived(page.url.pathname === "/");
    const isQuiz = $derived(page.url.pathname === "/quiz");
    const isResultado = $derived(page.url.pathname === "/resultado");
    const isSobre = $derived(page.url.pathname === "/sobre");

    // Compartilhamento
    const shareUrl = "https://quemmerepresenta.com.br";
    const shareText =
        "Descobri qual partido realmente vota como eu no Congresso. Você sabe qual te representa? Faça o teste:";

    const shareLinks = [
        {
            id: "whatsapp",
            label: "WhatsApp",
            color: "#25D366",
            href: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
        },
        {
            id: "telegram",
            label: "Telegram",
            color: "#0088CC",
            href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
        },
        {
            id: "twitter",
            label: "X (Twitter)",
            color: "#000000",
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
        },
        {
            id: "facebook",
            label: "Facebook",
            color: "#1877F2",
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        },
        { id: "instagram", label: "Instagram", color: "#E1306C", href: "#" },
        {
            id: "reddit",
            label: "Reddit",
            color: "#FF4500",
            href: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
        },
        { id: "discord", label: "Discord", color: "#5865F2", href: "#" },
        {
            id: "email",
            label: "E-mail",
            color: "#4A4A44",
            href: `mailto:?subject=QuemMeRepresenta&body=${encodeURIComponent(shareText + " " + shareUrl)}`,
        },
    ];

    let copied = $state(false);
    async function copiarLink() {
        await navigator.clipboard.writeText(shareUrl);
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }

    // Mobile share panel
    let shareOpen = $state(false);
</script>

<!-- Barra de progresso 2px no topo -->
<div
    style="position:fixed;top:0;left:0;right:0;height:2px;background:rgba(17,19,16,0.06);z-index:200"
>
    <div
        style="height:100%;background:linear-gradient(90deg,#006B38 0%,#00A550 60%,#FFD100 100%);box-shadow:0 0 8px rgba(0,165,80,0.5);transition:width 600ms cubic-bezier(0.16,1,0.3,1);width:{sessao.progresso *
            100}%"
    ></div>
</div>

<!-- Header nav — oculto no quiz em mobile -->
<header class="nav-header" class:quiz-mobile={isQuiz}>
    <div class="nav-inner">
        <!-- Brand -->
        <a href="/" class="brand">
            <div class="brand-flag">
                <div class="bf-green"></div>
                <div class="bf-diamond"></div>
                <div class="bf-circle"></div>
            </div>
            <div class="brand-text">
                <div class="brand-name">
                    QuemMe<span class="brand-accent">Representa</span>
                </div>
                <div class="brand-tag">— transparência parlamentar</div>
            </div>
        </a>

        <!-- Nav links (desktop) -->
        <nav class="nav-links">
            {#each [{ href: "/", label: "INÍCIO", active: isHero }, { href: "/quiz", label: "VOTAÇÃO", active: isQuiz }, { href: "/resultado", label: "RESULTADO", active: isResultado }, { href: "/sobre", label: "SOBRE", active: isSobre }] as item}
                <a href={item.href} class="nav-link" class:active={item.active}
                    >{item.label}</a
                >
            {/each}
        </nav>

        <!-- Mobile menu burger -->
        <div class="nav-mobile-right">
            {#if sessao.respondidas > 0 && !isResultado}
                <a href="/resultado" class="nav-pill"
                    >{sessao.respondidas}/{sessao.total}</a
                >
            {/if}
        </div>
    </div>
</header>

<!-- Conteúdo principal -->
<div class="page-wrap">
    {@render children()}
</div>

<!-- ═══════════════════════════════════════
     PAINEL DE COMPARTILHAMENTO — lateral desktop / bottom sheet mobile
════════════════════════════════════════ -->
<div class="share-sidebar" aria-label="Compartilhar">
    <div class="ss-label">COMPARTILHAR</div>

    {#each shareLinks as s}
        <a
            href={s.href}
            class="ss-btn"
            style="--c:{s.color}"
            target={s.href !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            title={s.label}
            onclick={s.id === "instagram" || s.id === "discord"
                ? (e) => {
                      e.preventDefault();
                      copiarLink();
                  }
                : undefined}
        >
            {@render ShareIcon({ id: s.id })}
        </a>
    {/each}

    <button
        class="ss-btn"
        style="--c:#111310"
        title="Copiar link"
        onclick={copiarLink}
    >
        {#if copied}
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><polyline points="20,6 9,17 4,12" /></svg
            >
        {:else}
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><rect x="9" y="9" width="13" height="13" rx="2" /><path
                    d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                /></svg
            >
        {/if}
    </button>

    <div class="ss-divider"></div>

    <!-- Buy Me a Coffee — discreto mas presente -->
    <a
        href="https://buymeacoffee.com/quemmerepresenta"
        target="_blank"
        rel="noopener noreferrer"
        class="ss-coffee"
        title="Apoiar o projeto"
    >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
            ><path
                d="M20 3H4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V3z"
                opacity=".2"
            /><path
                d="M20 3H4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V3zM18 5v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5h12zM2 19h20v2H2z"
            /></svg
        >
    </a>
</div>

<!-- Mobile share button (FAB) -->
<button
    class="share-fab"
    onclick={() => (shareOpen = true)}
    aria-label="Compartilhar"
>
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle
            cx="18"
            cy="19"
            r="3"
        />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line
            x1="15.41"
            y1="6.51"
            x2="8.59"
            y2="10.49"
        />
    </svg>
</button>

<!-- Mobile Bottom Sheet de compartilhamento -->
{#if shareOpen}
    <div class="bs-overlay" onclick={() => (shareOpen = false)}></div>
    <div class="bs-sheet">
        <div class="bs-handle"></div>
        <h3 class="bs-title">Compartilhar</h3>
        <p class="bs-desc">
            Convide mais pessoas a descobrir qual partido vota pelos seus
            valores.
        </p>

        <div class="bs-grid">
            {#each shareLinks as s}
                <a
                    href={s.href}
                    class="bs-item"
                    target={s.href !== "#" ? "_blank" : undefined}
                    rel="noopener"
                    onclick={() => {
                        if (s.id === "instagram" || s.id === "discord") {
                            copiarLink();
                            shareOpen = false;
                        } else shareOpen = false;
                    }}
                >
                    <div
                        class="bsi-icon"
                        style="background:{s.color}15;color:{s.color}"
                    >
                        {@render ShareIcon({ id: s.id })}
                    </div>
                    <span class="bsi-label">{s.label}</span>
                </a>
            {/each}
            <button
                class="bs-item"
                onclick={() => {
                    copiarLink();
                    shareOpen = false;
                }}
            >
                <div
                    class="bsi-icon"
                    style="background:#11131015;color:#111310"
                >
                    {#if copied}
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><polyline points="20,6 9,17 4,12" /></svg
                        >
                    {:else}
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><rect
                                x="9"
                                y="9"
                                width="13"
                                height="13"
                                rx="2"
                            /><path
                                d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                            /></svg
                        >
                    {/if}
                </div>
                <span class="bsi-label"
                    >{copied ? "Copiado!" : "Copiar link"}</span
                >
            </button>
        </div>

        <a
            href="https://buymeacoffee.com/quemmerepresenta"
            target="_blank"
            rel="noopener"
            class="bs-coffee"
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                ><path
                    d="M20 3H4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V3z"
                    opacity=".25"
                /><path d="M18 5v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5h12z" /><path
                    d="M2 19h20v2H2z"
                /></svg
            >
            Apoiar o projeto — Buy me a coffee
        </a>

        <button class="bs-close" onclick={() => (shareOpen = false)}
            >Fechar</button
        >
    </div>
{/if}

<!-- ShareIcon helper -->
{#snippet ShareIcon({ id }: { id: string })}
    {#if id === "whatsapp"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
            ><path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
            /></svg
        >
    {:else if id === "telegram"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
            ><path
                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
            /></svg
        >
    {:else if id === "twitter"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
            ><path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            /></svg
        >
    {:else if id === "facebook"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
            ><path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            /></svg
        >
    {:else if id === "instagram"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
            ><path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
            /></svg
        >
    {:else if id === "reddit"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
            ><path
                d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
            /></svg
        >
    {:else if id === "discord"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
            ><path
                d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"
            /></svg
        >
    {:else if id === "email"}
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><rect x="2" y="4" width="20" height="16" rx="2" /><path
                d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            /></svg
        >
    {/if}
{/snippet}

<style>
    /* ── Nav header ── */
    .nav-header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 1.75rem 3rem;
        display: flex;
        align-items: center;
        z-index: 10;
    }

    .nav-inner {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* Brand */
    .brand {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
    }
    .brand-flag {
        position: relative;
        width: 30px;
        height: 22px;
        flex-shrink: 0;
    }
    .bf-green {
        position: absolute;
        inset: 0;
        background: #00a550;
        border-radius: 2px;
    }
    .bf-diamond {
        position: absolute;
        top: 16%;
        left: 10%;
        right: 10%;
        bottom: 16%;
        background: #ffd100;
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    }
    .bf-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        background: #002776;
        border-radius: 50%;
    }
    .brand-text {
        display: flex;
        flex-direction: column;
    }
    .brand-name {
        font-family: var(--sans);
        font-weight: 800;
        font-size: 1.06rem;
        letter-spacing: -0.02em;
        color: var(--black);
        line-height: 1;
    }
    .brand-accent {
        color: var(--green);
    }
    .brand-tag {
        font-family: var(--mono);
        font-size: 0.62rem;
        letter-spacing: 0.08em;
        color: #9cb89c;
        margin-top: 4px;
    }

    /* Nav links */
    .nav-links {
        display: flex;
        gap: 2rem;
        align-items: center;
    }
    .nav-link {
        font-family: var(--mono);
        font-size: 0.69rem;
        letter-spacing: 0.18em;
        color: var(--ink-4);
        font-weight: 400;
        position: relative;
        transition: color 0.3s;
        text-decoration: none;
    }
    .nav-link:hover {
        color: var(--green);
    }
    .nav-link.active {
        color: var(--green);
        font-weight: 600;
    }
    .nav-link.active::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        height: 2px;
        background: var(--green);
    }

    /* Mobile right */
    .nav-mobile-right {
        display: none;
    }
    .nav-pill {
        font-family: var(--mono);
        font-size: 0.7rem;
        font-weight: 700;
        background: var(--green);
        color: white;
        padding: 0.25rem 0.6rem;
        border-radius: 4px;
        text-decoration: none;
    }

    .page-wrap {
        min-height: 100svh;
    }

    /* ── Share sidebar — desktop ── */
    .share-sidebar {
        position: fixed;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 50;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        padding: 0.75rem 0;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(12px);
        border: 1px solid var(--border);
        border-right: none;
        border-radius: 10px 0 0 10px;
        box-shadow: -4px 0 24px rgba(0, 107, 56, 0.06);
    }
    .ss-label {
        font-family: var(--mono);
        font-size: 0.45rem;
        letter-spacing: 0.14em;
        color: var(--muted);
        text-transform: uppercase;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        padding: 0.5rem 0;
        transform: rotate(180deg);
    }
    .ss-btn {
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--c, var(--ink-4));
        border-radius: 6px;
        transition: all 0.2s;
        text-decoration: none;
    }
    .ss-btn:hover {
        transform: translateX(-2px);
        opacity: 0.85; /* Safe alternative fallback */
    }
    .ss-divider {
        width: 20px;
        height: 1px;
        background: var(--border);
        margin: 4px 0;
    }
    .ss-coffee {
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #d97706;
        border-radius: 6px;
        transition: all 0.2s;
        text-decoration: none;
    }
    .ss-coffee:hover {
        background: rgba(217, 119, 6, 0.1);
        transform: translateX(-2px);
    }

    /* ── Mobile FAB ── */
    .share-fab {
        display: none;
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        width: 48px;
        height: 48px;
        background: var(--green);
        color: white;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        z-index: 50;
        box-shadow: 0 4px 16px rgba(0, 107, 56, 0.3);
        transition: transform 0.2s;
    }
    .share-fab:hover {
        transform: scale(1.05);
    }

    /* ── Bottom Sheet ── */
    .bs-overlay {
        position: fixed;
        inset: 0;
        background: rgba(17, 19, 16, 0.5);
        z-index: 100;
        animation: fadeIn 0.2s ease;
    }
    .bs-sheet {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 101;
        background: white;
        border-radius: 20px 20px 0 0;
        padding: 1.5rem 1.5rem 2rem;
        box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.15);
        animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .bs-handle {
        width: 40px;
        height: 4px;
        background: #e0e0d8;
        border-radius: 2px;
        margin: 0 auto 1.25rem;
    }
    .bs-title {
        font-family: var(--sans);
        font-weight: 800;
        font-size: 1.1rem;
        letter-spacing: -0.02em;
        margin-bottom: 0.4rem;
    }
    .bs-desc {
        font-size: 0.83rem;
        color: var(--ink-4);
        line-height: 1.5;
        margin-bottom: 1.25rem;
    }
    .bs-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
        margin-bottom: 1.25rem;
    }
    .bs-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem 0;
        -webkit-tap-highlight-color: transparent;
    }
    .bsi-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        transition: transform 0.15s;
    }
    .bs-item:active .bsi-icon {
        transform: scale(0.92);
    }
    .bsi-label {
        font-family: var(--mono);
        font-size: 0.6rem;
        letter-spacing: 0.05em;
        color: var(--ink-4);
    }
    .bs-coffee {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        width: 100%;
        padding: 0.85rem 1.1rem;
        background: #fef3c7;
        border: 1px solid #fde68a;
        border-radius: 10px;
        color: #92400e;
        font-family: var(--sans);
        font-size: 0.82rem;
        font-weight: 600;
        text-decoration: none;
        margin-bottom: 0.75rem;
        transition: background 0.15s;
    }
    .bs-coffee:hover {
        background: #fde68a;
    }
    .bs-close {
        width: 100%;
        padding: 0.8rem;
        background: var(--paper-3);
        border: none;
        border-radius: 10px;
        font-family: var(--sans);
        font-size: 0.88rem;
        font-weight: 600;
        color: var(--ink-3);
        transition: background 0.15s;
    }
    .bs-close:hover {
        background: var(--border);
    }

    /* ── Responsivo ── */
    @media (max-width: 768px) {
        .nav-header {
            padding: 1.1rem 1.25rem;
        }
        .nav-links {
            display: none;
        }
        .nav-mobile-right {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .share-sidebar {
            display: none;
        }
        .share-fab {
            display: flex;
        }
        .page-wrap {
            padding-bottom: 5rem;
        }

        .quiz-mobile .brand-tag {
            display: none;
        }
    }
</style>
