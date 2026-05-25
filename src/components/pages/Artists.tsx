
import { SectionTitle } from "../Home/SectionTitle";
import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";
import FancyButton from "../ui/shiny-button";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { AnimatedText } from "../ui/Animated-text";



const artists = [
  {
    img: a1,
    name: "Marcus Vale",
    spec: "Realism · Black & Grey",
    bio: "Marcus passou 14 anos aperfeiçoando retratos hiper-reais e trabalhos detalhados em preto e cinza. Suas peças foram publicadas em três revistas internacionais de tatuagem."
  },
  {
    img: a2,
    name: "Lena Cruz",
    spec: "Fine Line · Floral",
    bio: "A assinatura de Lena são linhas finas delicadas e composições botânicas. Formada em artes plásticas, ela traz o olhar de uma pintora para cada projeto.",
  },
  {
    img: a3,
    name: "Diego Santos",
    spec: "Blackwork · Tribal",
    bio: "Diego domina trabalhos em preto ousados, padrões neotribais e geométricos. Seus designs misturam simbolismo antigo com minimalismo moderno.",
  },
];

function ArtistsPage() {
  return (
    <>
      <section id="/artists" className="pt-32 pb-12">
        <div className="container-custom text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary mb-4">Nosso Time</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Nossos <span className="text-primary">Artistas</span>
          </h1>
          <div className="red-divider" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
         Cada artista da Custom Rose traz um estilo distinto e décadas de experiência combinada.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom space-y-12">
          {artists.map((a, i) => (
            <div
              key={a.name}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden">
                <img
                  src={a.img}
                  alt={a.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-[520px] object-cover shadow-elegant"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">{a.spec}</p>
                <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider mb-5">
                  {a.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{a.bio}</p>
                <div className="grid grid-cols-3 gap-6 w-[250px] m-4">
                        <FancyButton icon={<FaInstagram size={25} />} className="text-accent" variant="red" />
                        <FancyButton icon={<FaFacebook size={25} className="text-indigo-500" />} variant="indigo" />
                        <FancyButton icon={<FaXTwitter size={25} className="text-gray-500" />} variant="indigo" />
                       
                    </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface/40">
        <div className="container-custom">
          <SectionTitle title="Gostou da nossa equipe.?" subtitle=" Venha nos visitar, e faça um orçamento.!" />
           <AnimatedText 
      text="CUSTOM ROSE" 
      textClassName="text-[4rem] md:text-[6rem] font-bold"
    
    />
        </div>
      </section>
    </>
  );
}

export default ArtistsPage