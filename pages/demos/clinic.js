import Head from 'next/head'

const html = `
<main class="hero">
  <div class="container">
    <h1>Demo — Clínica</h1>
    <p class="subtitle">Facilite o agendamento e gere confiança com conteúdo certo.</p>
    <div class="cta-row">
      <a href="/#contact" class="btn btn--primary">Quero este site</a>
      <a href="mailto:mateuslopes.tech@gmail.com" class="btn btn--secondary">Falar por e-mail</a>
    </div>
  </div>
</main>
<section class="section section--alt">
  <div class="container">
    <h2>Clínica — Agendamentos e confiança</h2>
    <div class="cards">
      <article class="card"><h3>Procedimentos</h3><p>Lista clara de serviços com duração média e preço inicial.</p></article>
      <article class="card"><h3>Equipe</h3><p>Bio resumida, credenciais e fotos profissionais.</p></article>
      <article class="card"><h3>Agende online</h3><p>Integração com Calendly/WhatsApp e lembretes por e-mail.</p></article>
      <article class="card"><h3>FAQ e localização</h3><p>Perguntas comuns, mapa e estacionamento.</p></article>
    </div>
  </div>
</section>
`;

export default function Page(){
  return (
    <>
      <Head><title>Demo — Clínica — Iron Web Studio</title></Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
