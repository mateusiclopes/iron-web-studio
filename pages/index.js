import Head from 'next/head'
import Script from 'next/script'

const html = `<!-- INÍCIO DO HTML DA LANDING -->
<header class="site-header">
  <div class="container nav">
    <a class="brand" href="#hero" aria-label="Iron Web Studio">
      <img src="/assets/favicon.svg" alt="" width="28" height="28" aria-hidden="true">
      <span>Iron Web Studio</span>
    </a>
    <nav>
      <a href="#services" data-l10n="nav_services">Serviços</a>
      <a href="#pricing" data-l10n="nav_pricing">Pacotes</a>
      <a href="#process" data-l10n="nav_process">Processo</a>
      <a href="#portfolio" data-l10n="nav_portfolio">Portfólio</a>
      <a href="#faq" data-l10n="nav_faq">FAQ</a>
      <a href="#contact" class="btn btn--primary" data-l10n="nav_cta">Quero meu site</a>
      <button id="langToggle" class="btn btn--ghost" aria-live="polite" aria-label="Mudar idioma">EN</button>
    </nav>
  </div>
</header>

<main id="hero" class="hero">
  <div class="container grid-2">
    <div class="hero__copy">
      <h1 data-l10n="hero_title">Sites que vendem em até 7 dias.</h1>
      <p class="subtitle" data-l10n="hero_sub">
        Landing pages rápidas, bonitas e focadas em conversão — preço fechado e zero enrolação.
      </p>
      <div class="cta-row">
        <a href="#contact" class="btn btn--primary" data-l10n="hero_cta_primary">Quero meu site</a>
        <a href="#pricing" class="btn btn--secondary" data-l10n="hero_cta_secondary">Ver pacotes</a>
        <a href="https://wa.me/5567998692778" class="btn btn--outline">Falar no WhatsApp</a>
      </div>
      <ul class="badges" aria-label="Diferenciais">
        <li>PageSpeed 90+</li><li>SEO on-page</li><li>Mobile-first</li><li>PT/EN</li>
      </ul>
    </div>
    <div class="hero__mock">
      <div class="browser">
        <div class="browser__bar"><span></span><span></span><span></span></div>
        <div class="browser__content">
          <h3>Before → After</h3>
          <div class="ba">
            <div class="ba__card">
              <strong>Before</strong>
              <ul><li>Site lento</li><li>Sem CTA</li><li>Layout confuso</li></ul>
            </div>
            <div class="ba__card ba__card--good">
              <strong>After</strong>
              <ul><li>Rápido e claro</li><li>CTA visível</li><li>Pronto para vender</li></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<section id="services" class="section">
  <div class="container">
    <h2 data-l10n="services_title">O que você recebe</h2>
    <div class="cards">
      <article class="card"><h3 data-l10n="svc1_t">Design que converte</h3><p data-l10n="svc1_d">Layout limpo, responsivo e acessível, pensado para transformar visitas em contatos.</p></article>
      <article class="card"><h3 data-l10n="svc2_t">SEO & Performance</h3><p data-l10n="svc2_d">SEO on-page, boas práticas e desempenho 90+ no PageSpeed sempre como meta.</p></article>
      <article class="card"><h3 data-l10n="svc3_t">Integrações úteis</h3><p data-l10n="svc3_d">WhatsApp, Calendly, Analytics/Pixels e formulários prontos para captar leads.</p></article>
      <article class="card"><h3 data-l10n="svc4_t">Entrega em 7 dias</h3><p data-l10n="svc4_d">Processo enxuto: briefing 30min, protótipo em 48h, ajustes rápidos e publicação.</p></article>
    </div>
  </div>
</section>

<section id="pricing" class="section section--alt">
  <div class="container">
    <h2 data-l10n="pricing_title">Pacotes e preços</h2>
    <div class="pricing">
      <article class="plan">
        <h3>Starter</h3>
        <p class="price"><span class="currency">R$</span><span data-price="starter">899</span></p>
        <ul><li>Landing 1 página</li><li>Formulário + WhatsApp</li><li>SEO básico</li><li>1 rodada de revisão</li></ul>
        <a href="#contact" class="btn btn--outline" data-l10n="plan_cta">Começar</a>
      </article>
      <article class="plan plan--featured" aria-label="Recomendado">
        <div class="flag" data-l10n="flag_best">Mais vendido</div>
        <h3>Pro</h3>
        <p class="price"><span class="currency">R$</span><span data-price="pro">1990</span></p>
        <ul><li>Até 4 páginas</li><li>Blog básico</li><li>2 integrações</li><li>2 rodadas de revisão</li></ul>
        <a href="#contact" class="btn btn--primary" data-l10n="plan_cta">Começar</a>
      </article>
      <article class="plan">
        <h3>Premium</h3>
        <p class="price"><span class="currency">R$</span><span data-price="premium">3990</span></p>
        <ul><li>Até 8 páginas</li><li>Blog completo</li><li>Automações (e-mail/CRM)</li><li>Suporte 30 dias</li></ul>
        <a href="#contact" class="btn btn--outline" data-l10n="plan_cta">Começar</a>
      </article>
    </div>
    <p class="note">Preços em BRL (valores de lançamento).</p>
  </div>
</section>

<section id="process" class="section">
  <div class="container">
    <h2 data-l10n="process_title">Como funciona</h2>
    <ol class="steps">
      <li><h4>Briefing (30 min)</h4><p>Entendo o negócio, público e metas. Alinho conteúdo e referências.</p></li>
      <li><h4>Protótipo (48h)</h4><p>Entrego um rascunho navegável para validar layout e hierarquia.</p></li>
      <li><h4>Construção (3–5 dias)</h4><p>Implementação, performance, SEO e integrações.</p></li>
      <li><h4>Publicação + suporte</h4><p>Publico no seu domínio e gravo um vídeo de handover. Suporte 30 dias.</p></li>
    </ol>
  </div>
</section>

<section id="portfolio" class="section section--alt">
  <div class="container">
    <h2>Demos por nicho</h2>
    <div class="portfolio">
      <figure>
        <a href="/demos/restaurant"><img src="/img/demo-restaurant.png" alt="Demo de site para restaurante"></a>
        <figcaption>Restaurante</figcaption>
      </figure>
      <figure>
        <a href="/demos/clinic"><img src="/img/demo-trainer.png" alt="Demo de site para clínica"></a>
        <figcaption>Clínica</figcaption>
      </figure>
      <figure>
        <a href="/demos/real-estate"><img src="/img/demo-realestate.png" alt="Demo de site para imobiliária"></a>
        <figcaption>Imobiliária</figcaption>
      </figure>
    </div>
    <p class="note">Quer ver um demo específico do seu nicho? Peça no formulário.</p>
  </div>
</section>

<section id="faq" class="section">
  <div class="container">
    <h2>Perguntas frequentes</h2>
    <div class="faq">
      <details><summary>O que preciso enviar para começar?</summary><p>Logo, paleta (ou referências), textos principais e fotos. Se preferir, eu crio ou edito a copy.</p></details>
      <details><summary>Vocês também hospedam o site?</summary><p>Posso publicar em Webflow/Framer/WordPress ou no seu provedor. Hospedagem é cobrada à parte.</p></details>
      <details><summary>O site é meu?</summary><p>Sim. Código, design e arquivos são seus. Entrego acesso e um vídeo rápido de uso.</p></details>
      <details><summary>Posso pedir alterações depois?</summary><p>Claro. Cada pacote inclui rodadas de revisão. Manutenção mensal é opcional.</p></details>
      <details><summary>Em quais idiomas?</summary><p>Português e Inglês por padrão. Outros idiomas sob consulta.</p></details>
      <details><summary>Emitir nota/contrato?</summary><p>Sim, trabalho com contrato simples e termos de uso/privacidade.</p></details>
    </div>
  </div>
</section>

<section id="contact" class="section section--accent">
  <div class="container">
    <h2>Vamos começar?</h2>
    <p class="subtitle">Preencha o formulário e receba um orçamento em até 24h.</p>
    <p class="subtitle">Ou, se preferir, envie um e-mail para <a href="mailto:mateuslopes.tech@gmail.com">mateuslopes.tech@gmail.com</a>.</p>
    <form class="form" method="post" action="#" data-honeypot-field="company" accept-charset="UTF-8">
      <input type="hidden" name="_subject" value="Novo lead — Iron Web Studio">
      <input type="hidden" name="_language" value="pt-BR">
      <input type="hidden" name="_next" value="/obrigado">
      <div class="field"><label for="name">Nome</label><input id="name" name="name" required placeholder="Seu nome"></div>
      <div class="field"><label for="email">E-mail</label><input id="email" name="email" type="email" required placeholder="voce@email.com"></div>
      <div class="field"><label for="whats">WhatsApp</label><input id="whats" name="whats" placeholder="+55 (67) 99869-2778"></div>
      <div class="field"><label for="niche">Seu nicho</label>
        <select id="niche" name="niche">
          <option>Restaurante</option><option>Imobiliária</option><option>Clínica</option><option>Outro</option>
        </select>
      </div>
      <div class="actions">
        <button class="btn btn--primary" type="submit">Quero meu site</button>
        <p class="form-note">Ao enviar, você concorda com a nossa política de privacidade.</p>
      </div>
      <input type="text" name="company" tabindex="-1" autocomplete="off" class="hp-field" aria-hidden="true">
      <p class="form-note">Prefere algo instantâneo? <a href="https://wa.me/5567998692778">ou fale no WhatsApp</a>.</p>
    </form>
  </div>
</section>

<footer class="site-footer">
  <div class="container footer">
    <div><strong>Iron Web Studio</strong> · Todos os direitos reservados.</div>
    <div class="links">
      <a href="mailto:mateuslopes.tech@gmail.com">Contato</a>
      <a href="#contact">Solicitar</a>
      <a href="#">Privacidade</a>
      <a href="#">Termos</a>
    </div>
  </div>
</footer>
<!-- FIM DO HTML DA LANDING -->`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Iron Web Studio — Sites que vendem em até 7 dias</title>
        <meta name="description" content="Sites bonitos, rápidos e que vendem. Entrega em 7 dias, preço fechado, SEO e integrações." />
        <link rel="icon" href="/assets/favicon.svg" />
      </Head>
      <Script src="/js/main.js" strategy="afterInteractive" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
