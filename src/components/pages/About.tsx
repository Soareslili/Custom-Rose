

import { Link } from "react-router-dom";

import Artist from "../../assets/AboutArtist.png";
import HeroImg from "../../assets/HeroImg.png"
import { SectionTitle } from "../Home/SectionTitle";



const About = () => {
  return (
    <>
      <section id="/about" className="relative pt-32 pb-20">
        <div className="container-custom">
          <p className="text-xs uppercase tracking-[0.5em] text-primary mb-4">Sobre</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Nosso <span className="text-primary">Studio</span>
          </h1>
          <div className="red-divider !mx-0" />
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <img
            src={Artist}
            alt="Tattoo artist at work"
            loading="lazy"
            width={1200}
            height={1400}
            className="w-full h-[600px] object-cover shadow-elegant"
          />
          <div>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-4">
              Doze anos de tinta, arte e alma
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fundada em 2013, a Custom Rose nasceu do desejo de elevar a cultura da tatuagem a um
              verdadeira experiência premium. Acreditamos que uma tatuagem não é um produto – é uma colaboração
              entre artista e cliente, uma obra de arte permanente e levada para toda a vida.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nosso estúdio é construído sobre três pilares: arte, higiene e atmosfera. Do
              iluminação cinematográfica reduzida para a música selecionada e salas privadas, cada detalhe é
              projetado para tornar sua visita inesquecível.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Quer o seu sonho seja uma manga de realismo em preto e cinza, uma peça delicada de linhas finas,
              ou blackwork ousado - nossos artistas irão guiá-lo desde o conceito até a tinta final.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/40">
        <div className="container-custom">
          <SectionTitle eyebrow="Nossos valores" title="O que defendemos" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Arte em primeiro lugar", d: "Cada linha, cada tonalidade — desenhada com intenção." },
              { t: "Higiene Total", d: "Esterilização de nível hospitalar, apenas agulhas descartáveis." },
              { t: "Conforto do cliente", d: "Quartos privados, cuidados posteriores premium, suporte vitalício." },
            ].map((v) => (
              <div key={v.t} className="p-8 border border-border bg-surface-elevated">
                <h3 className="font-display text-2xl uppercase tracking-wider mb-3">{v.t}</h3>
                <p className="text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-semibold shadow-red"
            >
             Faça um Orçamento
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <img
            src={HeroImg}
            alt="Tattoo studio atmosphere"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover object-center shadow-elegant"
          />
        </div>
      </section>
    </>
  );
}

export default About
