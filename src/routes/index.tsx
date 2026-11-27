import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/oferta-certa-logo.png.asset.json";
import { products, discountPercent, formatBRL, type Product } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oferta Certa — As melhores oportunidades da semana" },
      { name: "description", content: "6 ofertas selecionadas toda semana na Amazon Brasil. Encontre. Escolha. Aproveite." },
      { property: "og:title", content: "Oferta Certa — Ofertas da semana" },
      { property: "og:description", content: "6 ofertas selecionadas toda semana na Amazon Brasil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SLOGAN = "Encontre. Escolha. Aproveite.";
const INSTAGRAM_URL = "#";
const CONTACT_URL = "#";

function Logo({ className = "" }: { className?: string }) {
  return <img src={logo.url} alt="Oferta Certa" className={`rounded-lg object-cover ${className}`} />;
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink/95 text-ink-foreground backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        <a href="#inicio" className="flex items-center gap-3">
          <Logo className="h-12 w-auto sm:h-14" />
          <span className="hidden text-sm italic opacity-80 md:inline">{SLOGAN}</span>
        </a>
        <nav className="flex gap-4 text-sm font-medium sm:gap-6">
          <a href="#inicio" className="hover:text-brand-yellow">Início</a>
          <a href="#ofertas" className="hover:text-brand-yellow">Ofertas da Semana</a>
          <a href="#sobre" className="hover:text-brand-yellow">Sobre</a>
        </nav>
      </div>
    </header>
  );
}

function ProductCard({ p }: { p: Product }) {
  const off = discountPercent(p.price, p.oldPrice);
  return (
    <article className={`relative flex flex-col overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-glow ${p.highlight ? "ring-2 ring-primary" : ""}`}>
      {off !== null && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-primary-foreground">-{off}%</span>
      )}
      {p.isExample && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-ink px-3 py-1 text-xs text-ink-foreground">Exemplo</span>
      )}
      <img src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full bg-muted object-cover" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg leading-tight">{p.name}</h3>
        <p className="text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="text-2xl font-bold">{formatBRL(p.price)}</span>
          {p.oldPrice && <span className="text-sm text-muted-foreground line-through">{formatBRL(p.oldPrice)}</span>}
        </div>
        {p.affiliateLink ? (
          <a href={p.affiliateLink} target="_blank" rel="noopener noreferrer sponsored"
            className="mt-2 rounded-xl bg-gradient-brand px-4 py-3 text-center font-bold text-primary-foreground transition hover:brightness-105">
            VER OFERTA NA AMAZON
          </a>
        ) : (
          <span className="mt-2 cursor-not-allowed rounded-xl bg-muted px-4 py-3 text-center font-bold text-muted-foreground">
            EM BREVE
          </span>
        )}
      </div>
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="inicio" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
          <div>
            <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              AS MELHORES <span className="text-gradient-brand">OPORTUNIDADES</span> DA SEMANA!
            </h1>
            <p className="mt-5 max-w-xl text-lg opacity-80">
              Selecionamos ofertas especiais para você economizar nas suas próximas compras.
            </p>
            <a href="#ofertas" className="mt-8 inline-block rounded-xl bg-gradient-brand px-8 py-4 font-bold text-primary-foreground shadow-glow transition hover:scale-105">
              VER OFERTAS
            </a>
          </div>
          <div className="mx-auto flex aspect-square w-60 flex-col items-center justify-center rounded-full bg-gradient-brand text-center text-primary-foreground shadow-glow sm:w-72">
            <span className="font-display text-7xl sm:text-8xl">6</span>
            <span className="px-8 font-bold leading-tight">ofertas selecionadas para você</span>
          </div>
        </div>
      </section>

      <section id="ofertas" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl sm:text-4xl">Ofertas da Semana</h2>
        <p className="mt-2 text-muted-foreground">Seis escolhas, atualizadas toda semana.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <section id="sobre" className="bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl">Ofertas selecionadas com atenção.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nosso objetivo é ajudar você a encontrar boas oportunidades e comprar com mais praticidade.
          </p>
        </div>
      </section>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-12 text-center">
          <Logo className="h-20 w-auto" />
          <p className="italic opacity-80">{SLOGAN}</p>
          <div className="flex gap-6 text-sm font-medium">
            <a href={INSTAGRAM_URL} className="hover:text-brand-yellow">Instagram</a>
            <a href={CONTACT_URL} className="hover:text-brand-yellow">Contato</a>
          </div>
          <p className="max-w-2xl text-xs opacity-60">
            Como associado da Amazon, o Oferta Certa recebe por compras qualificadas. Os preços e a disponibilidade dos produtos podem mudar a qualquer momento. Consulte as informações atualizadas diretamente na Amazon.
          </p>
        </div>
      </footer>
    </div>
  );
}
