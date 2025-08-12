// main.js — robusto p/ Next.js (com verificações)
(function () {
  const dict = { en: {
    nav_services:"Services", nav_pricing:"Pricing", nav_process:"Process", nav_portfolio:"Portfolio", nav_faq:"FAQ", nav_cta:"Get my site",
    hero_title:"High-converting websites delivered in 7 days.", hero_sub:"Fast, clean, conversion-focused sites with transparent pricing.",
    hero_cta_primary:"Get my site", hero_cta_secondary:"See plans",
    services_title:"What you get", svc1_t:"Conversion-minded design", svc1_d:"Clean, responsive, accessible layouts built to turn visits into leads.",
    svc2_t:"SEO & Performance", svc2_d:"On-page SEO, best practices and 90+ PageSpeed as the target.",
    svc3_t:"Useful integrations", svc3_d:"WhatsApp, Calendly, Analytics/Pixels and ready-to-use lead forms.",
    svc4_t:"7-day delivery", svc4_d:"Lean process: 30-min brief, 48-h prototype, quick iterations and launch.",
    pricing_title:"Plans & pricing", flag_best:"Best seller", plan_cta:"Start now", pricing_note:"Prices in USD. Want BRL? I can convert.",
    process_title:"How it works", st1_t:"Brief (30 min)", st1_d:"We align business goals, audience and content.",
    st2_t:"Prototype (48h)", st2_d:"A quick navigable mock to validate layout and hierarchy.",
    st3_t:"Build (3–5 days)", st3_d:"Implementation, performance, SEO and integrations.",
    st4_t:"Launch + support", st4_d:"I deploy to your domain and record a short handover video.",
    portfolio_title:"Niche demos", port1:"Restaurant", port2:"Personal Trainer", port3:"Real Estate",
    portfolio_note:"Need a specific niche demo? Ask in the form.",
    faq_title:"Frequently asked questions",
    q1:"What do I need to provide?", a1:"Logo, palette (or refs), main copy and photos. I can draft/edit copy if needed.",
    q2:"Do you host the site?", a2:"I can publish to Webflow/Framer/WordPress or your provider. Hosting billed separately.",
    q3:"Do I own the site?", a3:"Yes. Code, design and files are yours. I hand over access and a short video.",
    q4:"Can I request changes later?", a4:"Sure. Each plan includes revisions. Monthly maintenance is optional.",
    q5:"Which languages?", a5:"Portuguese and English by default. Others on request.",
    q6:"Invoices/contracts?", a6:"Yes, I work with a simple contract and ToS/Privacy.",
    contact_title:"Ready to start?", contact_sub:"Fill in the form and get a quote within 24h.",
    f_name:"Name", f_niche:"Your niche", f_cta:"Get my site",
    foot_rights:"All rights reserved.", foot_priv:"Privacy", foot_terms:"Terms"
  }};

  const faqJsonLd = {
    "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
      {"@type":"Question","name":"O que preciso enviar para começar?","acceptedAnswer":{"@type":"Answer","text":"Logo, paleta (ou referências), textos principais e fotos. Se preferir, eu crio ou edito a copy."}},
      {"@type":"Question","name":"Vocês também hospedam o site?","acceptedAnswer":{"@type":"Answer","text":"Posso publicar em Webflow/Framer/WordPress ou no seu provedor. Hospedagem é cobrada à parte."}},
      {"@type":"Question","name":"O site é meu?","acceptedAnswer":{"@type":"Answer","text":"Sim. Código, design e arquivos são seus. Entrego acesso e um vídeo rápido de uso."}},
      {"@type":"Question","name":"Posso pedir alterações depois?","acceptedAnswer":{"@type":"Answer","text":"Claro. Cada pacote inclui rodadas de revisão. Manutenção mensal é opcional."}},
      {"@type":"Question","name":"Em quais idiomas?","acceptedAnswer":{"@type":"Answer","text":"Português e Inglês por padrão. Outros idiomas sob consulta."}},
      {"@type":"Question","name":"Emitir nota/contrato?","acceptedAnswer":{"@type":"Answer","text":"Sim, trabalho com contrato simples e termos de uso/privacidade."}}
    ]
  };

  function ensureFaqScript() {
    let el = document.getElementById("faq-jsonld");
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = "faq-jsonld";
      document.head.appendChild(el);
    }
    try { el.textContent = JSON.stringify(faqJsonLd); } catch (_) {}
  }

  let current = "pt";
  function setLang(lang){
    current = lang;
    const toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = (lang === "pt") ? "EN" : "PT";
    document.querySelectorAll("[data-l10n]").forEach(el=>{
      const key = el.getAttribute("data-l10n");
      if (lang === "en") el.textContent = dict.en[key] || el.textContent;
      else el.textContent = el.getAttribute("data-pt") || el.textContent;
    });
    document.documentElement.lang = (lang === "en") ? "en" : "pt-BR";
  }
  function savePtDefaults(){
    document.querySelectorAll("[data-l10n]").forEach(el => el.setAttribute("data-pt", el.textContent));
  }

  const usdToBrl = 5.5; // placeholder
  function convertPrices(to){
    document.querySelectorAll("[data-price]").forEach(el=>{
      const base = Number(el.getAttribute("data-price"));
      const currencyEl = el.parentElement.querySelector(".currency");
      if (!currencyEl || isNaN(base)) return;
      if (to === "BRL"){ el.textContent = Math.round(base); currencyEl.textContent = "R$"; }
      else { el.textContent = base; currencyEl.textContent = "$"; }
    });
  }

  function wireForm(){
    const form = document.querySelector("form.form");
    if (!form) return;
    form.addEventListener("submit",(e)=>{
      const hpName = form.dataset.honeypotField || "company";
      if (form[hpName] && form[hpName].value){ e.preventDefault(); return; }
      if (form.action && form.action.includes("formspree.io")) return; // deixa enviar
      alert("Formulário enviado (demo). Substitua a action pelo seu endpoint.");
      e.preventDefault();
    });
  }

  function init(){
    ensureFaqScript();
    savePtDefaults();
    const toggle = document.getElementById("langToggle");
    if (toggle) toggle.addEventListener("click", ()=> setLang(current === "pt" ? "en" : "pt"));
    try { convertPrices("BRL"); } catch(_){}
    wireForm();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
  window.convertPrices = convertPrices;
})();
