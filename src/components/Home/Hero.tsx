import Artist from "../../assets/AboutArtist.png"
import HeroImg from "../../assets/HeroImg.png";

import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png'

import a1 from '../../assets/a1.png';
import a2 from '../../assets/a2.png';
import a3 from '../../assets/a3.png';

import { Link } from "react-router-dom";
import { SectionTitle } from "../Layout/SectionTitle";
import { Award, Heart, Palette, Shield, Sparkles, Star } from "lucide-react";
import ScrollToTop from "../ui/ScrollToTop";

const features = [
  { icon: Award, title: "Artistas Profissionais", desc: "Equipe premiada com mais de 10 anos de experiência." },
  { icon: Shield, title: "Equipamento estéril", desc: "Esterilização de nível hospitalar em todas as sessões." },
  { icon: Palette, title: "Projetos personalizados", desc: "Cada peça desenhada exclusivamente para você." },
  { icon: Heart, title: "Processo Seguro", desc: "Protocolos rígidos de higiene e produtos certificados." },
  { icon: Sparkles, title: "Tinta de alta qualidade", desc: "Pigmentos premium — veganos e de longa duração." },
  { icon: Star, title: "Comentários 5 estrelas", desc: "Centenas de clientes satisfeitos, reputação mundial." },
];

const portfolio = [
  { src: p1, label: "COLORIDA DELICADA" },
  { src: p2, label: "PRETO & CINZA" },
  { src: p3, label: "REALISMO SELVAGEM" },

];

const artists = [
  { img: a1, name: "Marcus Vale", spec: "Realism · Black & Grey" },
  { img: a2, name: "Lena Cruz", spec: "Fine Line · Floral" },
  { img: a3, name: "Diego Santos", spec: "Blackwork · Tribal" },
];

const steps = [
  { n: "01", t: "Visita", d: "Discutimos sua ideia, referências e posicionamento." },
  { n: "02", t: "Design personalizado", d: "Nosso artista cria um design exclusivo só para você." },
  { n: "03", t: "Sessão de tatuagem", d: "Experiência confortável, segura e premium." },
  { n: "04", t: "Cuidados posteriores", d: "Orientação completa para manter sua tatuagem perfeita por toda a vida." },
];

const testimonials = [
  { name: "Sofia M.", text: "Além das expectativas. O detalhe e o profissionalismo são incomparáveis.", rating: 5 },
  { name: "James R.", text: "Estúdio mais limpo que já estive. Marcus é um verdadeiro artista.", rating: 5 },
  { name: "Aria K.", text: "Do conceito à peça final – pura magia. Estou voltando.", rating: 5 },
];

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

        <div id="/"  className="container-custom relative z-10 py-20">
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
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground p-6 shadow-red animate-bounce">
              <p className="font-display text-4xl font-bold">12+</p>
              <p className="text-xs uppercase tracking-widest">Anos de Arte</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">Sobre nosso estúdio</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
              Onde a pele <br /> Torna-se <span className="text-primary">Tela</span>
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

       {/* WHY CHOOSE US */}
      <section className="section-padding bg-surface/40">
        <div className="container-custom">
          <SectionTitle eyebrow="Por que nos escolher" title="Feito com precisão" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-8 bg-surface-elevated border border-border hover:border-primary transition-smooth"
              >
                <div className="w-12 h-12 grid place-items-center bg-accent shadow-red mb-5 group-hover:scale-110 transition-smooth">
                  <Icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle eyebrow="Nossos Trabalhos" title="Portfolio" subtitle="Um vislumbre de peças recentes de nossos artistas" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((p) => (
              <div key={p.label} className="group relative overflow-hidden aspect-[4/5]">
                <img
                  src={p.src}
                  alt={`${p.label} tattoo`}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary mb-1">Tattoo</p>
                  <p className="font-display text-2xl uppercase">{p.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex border border-border hover:border-primary hover:text-primary text-foreground px-7 py-3 text-xs uppercase tracking-widest font-semibold transition-smooth"
            >
             Veja Mais
            </Link>
          </div>
        </div>
      </section>

      {/* ARTISTS */}
      <section className="section-padding bg-surface/40">
        <div className="container-custom">
          <SectionTitle eyebrow=" Nosso Time" title="Nossos Artistas" />
          <div className="grid md:grid-cols-3 gap-6">
            {artists.map((a) => (
              <div key={a.name} className="group relative overflow-hidden bg-surface-elevated">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.name}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                  />
                </div>
                <div className="p-6 border-t border-border">
                  <h3 className="font-display text-2xl uppercase tracking-wider">{a.name}</h3>
                  <p className="text-sm text-primary mt-1">{a.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle eyebrow="Como funciona" title="Nosso Processo" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative p-8 border border-border bg-surface/60 hover:border-primary transition-smooth"
              >
                <span className="font-display text-6xl font-black text-primary opacity-90">
                  {s.n}
                </span>
                <h3 className="font-display text-xl uppercase tracking-wider mt-4">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-surface/40">
        <div className="container-custom">
          <SectionTitle eyebrow="Depoimentos" title="O que os clientes dizem" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 bg-surface-elevated border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed italic">"{t.text}"</p>
                <p className="mt-6 text-sm uppercase tracking-widest text-primary">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative overflow-hidden p-12 md:p-20 text-center bg-gradient-to-br from-surface-elevated to-surface border border-border">
            <p className="text-xs uppercase tracking-[0.5em] text-primary mb-4">Preparar?</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-wider">
              Sua história <span className="text-primary">Aguarda</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-6">
              Marque uma visita hoje e vamos projetar algo inesquecível juntos.
            </p>
            <Link
              to="/contact"
              className="inline-flex mt-10 bg-primary text-primary-foreground px-10 py-4 text-sm uppercase tracking-widest font-semibold shadow-red animate-bounce"
            >
              Agendar Visita
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;