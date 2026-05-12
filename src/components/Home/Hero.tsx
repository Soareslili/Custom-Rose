import Artist from "../../assets/AboutArtist.png"
import HeroImg from "../../assets/HeroImg.png";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>

      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <img
          src={HeroImg}
          alt="Tattooed artist holding tattoo machine in dark studio"
          className="absolute inset-0 w-full h-full object-cover object-right"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/45 to-transparent" />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl  animate-fade-up">
            <p className="text-xs uppercase tracking-[0.5em] text-primary mb-6">
              Premium Tattoo Studio
            </p>
            <h1 className="font-display text-6xl md:text-8xl font-black uppercase leading-none">
              Custom <br />
              <span className="text-primary">Rose</span>
            </h1>
            <p className="mt-6 font-display text-xl md:text-2xl tracking-widest text-muted-foreground uppercase">
              Tattoo Studio
            </p>
            <p className="mt-8 text-lg text-foreground/80 max-w-md">
              Crie sua história na sua pele. Arte personalizada criada por artistas premiados em um
              ambiente escuro e premium.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:opacity-90 transition-smooth shadow-red"
              >
                Reserve Agora
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center border border-foreground/30 text-foreground px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:border-primary hover:text-primary transition-smooth"
              >
                Ver Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={Artist}
              alt="Tattoo artist working with black gloves"
              loading="lazy"
              width={1200}
              height={1400}
              className="w-full h-[600px] object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground p-6 shadow-red">
              <p className="font-display text-4xl font-bold">12+</p>
              <p className="text-xs uppercase tracking-widest">Anos de Arte</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">Sobre nosso estúdio</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
              Onde a pele <br /> Torna-se<span className="text-primary">Tela</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Custom Rose foi fundada em uma única crença: cada tatuagem deve ser tão única quanto a
              história por trás disso. Por mais de uma década, combinamos domínio técnico com artístico
              visão de criar peças que nossos clientes usam com orgulho.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Do realismo e blackwork ao fine line e tribal, nossos artistas são especializados em
              tatuagens personalizadas criadas inteiramente em torno de você - em um ambiente construído para
              conforto, segurança e luxo tranquilo.
            </p>
            <Link
            to={"/about"}
              className="inline-flex items-center bg-primary text-primary-foreground px-7 py-3 text-xs uppercase tracking-widest font-semibold shadow-red"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;