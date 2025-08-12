import Head from 'next/head'

const html = `
<main class="hero">
  <div class="container">
    <h1>Demo — Restaurante</h1>
    <p class="subtitle">Aumente reservas e pedidos com um layout que converte.</p>
    <div class="cta-row">
      <a href="/#contact" class="btn btn--primary">Quero este site</a>
      <a href="mailto:mateuslopes.tech@gmail.com" class="btn btn--secondary">Falar por e-mail</a>
    </div>
  </div>
</main>
<section class="section section--alt">
  <div class="container">
    <h2>Restaurante — Landing de conversão</h2>
    <div class="cards">
      <article class="card"><h3>Cardápio online</h3><p>Seções por categoria, fotos e itens destacados para aumentar o ticket médio.</p></article>
      <article class="card"><h3>Reservas/Delivery</h3><p>Botões fixos para WhatsApp/Link de reservas ou iFood/Uber Eats.</p></article>
      <article class="card"><h3>Provas sociais</h3><p>Avaliações e fotos do ambiente; mapa e horário.</p></article>
      <article class="card"><h3>Promoções</h3><p>Happy hour, combos e captação de leads para newsletter.</p></article>
    </div>
  </div>
</section>
`;

export default function Page(){
  return (
    <>
      <Head><title>Demo — Restaurante — Iron Web Studio</title></Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
