import Head from 'next/head'

const html = `
<main class="hero">
  <div class="container">
    <h1>Demo — Imobiliária</h1>
    <p class="subtitle">Capture leads qualificados com filtros simples e CTA claro.</p>
    <div class="cta-row">
      <a href="/#contact" class="btn btn--primary">Quero este site</a>
      <a href="mailto:mateuslopes.tech@gmail.com" class="btn btn--secondary">Falar por e-mail</a>
    </div>
  </div>
</main>
<section class="section section--alt">
  <div class="container">
    <h2>Imobiliária — Captação de leads</h2>
    <div class="cards">
      <article class="card"><h3>Destaques</h3><p>Imóveis com fotos grandes, faixa de preço e CTA direto para visita.</p></article>
      <article class="card"><h3>Filtros simples</h3><p>Tipo, bairro, quartos, faixa de preço — pensado para mobile.</p></article>
      <article class="card"><h3>Formulários inteligentes</h3><p>Captação com perguntas chave (financiamento, prazo, localização).</p></article>
      <article class="card"><h3>Automação</h3><p>Integração CRM/planilha + e-mail automático de confirmação.</p></article>
    </div>
  </div>
</section>
`;

export default function Page(){
  return (
    <>
      <Head><title>Demo — Imobiliária — Iron Web Studio</title></Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
