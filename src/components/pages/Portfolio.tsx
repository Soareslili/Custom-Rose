
import { Link } from "react-router-dom";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";
import p9 from "../../assets/p9.png";
import { SectionTitle } from "../Home/SectionTitle";



const works = [
  { src: p1, label: "Hummingbird Floral", style: "Color Realism" },
  { src: p2, label: "Lion Portrait", style: "Black & Grey Realism" },
  { src: p3, label: "Lion Botanical", style: "Color Realism" },

  { src: p4, label: "Dragon Sleeve", style: "Oriental / Japanese" },
  { src: p5, label: "Rose Fine Line", style: "Fine Line" },
  { src: p6, label: "Lion Realism", style: "Black & Grey Realism" },

  { src: p7, label: "Lotus Mandala", style: "Geometric / Mandala" },
  { src: p8, label: "Tiger Floral", style: "Color Realism" },
  { src: p9, label: "Lion Tribal", style: "Tribal / Blackwork" },
];

function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container-custom text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary mb-4">Nosso Trabalho</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Port<span className="text-primary">folio</span>
          </h1>
          <div className="red-divider" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
        Uma seleção com curadoria de nossas peças recentes em todos os estilos.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map((w, i) => (
              <div key={i} className="group relative overflow-hidden aspect-[4/5]">
                <img
                  src={w.src}
                  alt={`${w.style} ${w.label} tattoo`}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{w.style}</p>
                  <p className="font-display text-xl uppercase">{w.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/40">
              <div className="container-custom">
                <SectionTitle title="Faca um orçamento conosco.!" subtitle=" A Custom Rose tem ótimos preços e forma de pagamento, não perca essa oportunidade.!" />
                <div className="text-center">
                  <Link
                   to={"/pricing"}
                    className="inline-flex bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-semibold shadow-red animate-bounce"
                  >
                  Conheça nossos preços
                  </Link>
                </div>
              </div>
            </section>
    </>
  );
}

export default PortfolioPage