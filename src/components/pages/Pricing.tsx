
import { Check } from "lucide-react";
import { Link } from "react-router-dom";



const tiers = [
  {
    name: "Small Tattoo",
    price: "$120 — $250",
    desc: "Até 5 cm. Sessões rápidas, linhas finas ou designs mínimos.",
    perks: ["Consulta gratuita", "Sessão única", "Kit de cuidados posteriores"],
  },
  {
    name: "Medium Tattoo",
    price: "$300 — $600",
    desc: "5cm – 15cm. Trabalho detalhado em preto e cinza, colorido ou em linhas finas.",
    perks: ["Design personalizado", "1—2 sessões", "Kit de cuidados posteriores", "Retoques incluídos"],
    featured: true,
  },
  {
    name: "Large Tattoo",
    price: "$700 — $1,800",
    desc: "Meias mangas, costas largas, realismo avançado.",
    perks: ["Design totalmente personalizado", "Múltiplas sessões", "Kit de cuidados posteriores", "Retoques gratuitos"],
  },
  {
    name: "Custom Project",
    price: "Quote",
    desc: "Mangas completas, macacões e trabalhos encomendados exclusivos.",
    perks: ["Artista dedicado", "Revisões ilimitadas", "Experiência VIP", "Suporte vitalício"],
  },
];

function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container-custom text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary mb-4">Investimento</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Nossos <span className="text-primary">Preços</span>
          </h1>
          <div className="red-divider" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Faixas transparentes baseadas no tamanho, complexidade e artista. Orçamento final após consulta.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-8 border transition-smooth flex flex-col ${
                t.featured
                  ? "border-primary bg-surface-elevated shadow-red"
                  : "border-border bg-surface/60 hover:border-primary"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1">
                 Mais populares
                </span>
              )}
              <h3 className="font-display text-xl uppercase tracking-wider">{t.name}</h3>
              <p className="font-display text-3xl text-primary mt-3">{t.price}</p>
              <p className="text-sm text-muted-foreground mt-3">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-sm flex-1">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 text-center px-5 py-3 text-xs uppercase tracking-widest font-semibold transition-smooth ${
                  t.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:border-primary hover:text-primary"
                }`}
              >
               Reserve Agora
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PricingPage