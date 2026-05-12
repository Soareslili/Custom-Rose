import HeroImg from "../../assets/HeroImg.png";

const Hero = () => {
  return (
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
          <div className="max-w-2xl animate-fade-up">
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
  );
};

export default Hero;