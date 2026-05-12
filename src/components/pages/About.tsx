

import { Link } from "react-router-dom";

import Artist  from "../../assets/AboutArtist.png";
import HeroImg from "../../assets/HeroImg.png"
import { SectionTitle } from "../Layout/SectionTitle";



const About = () => {
  return (
    <>
      <section id="/about" className="relative pt-32 pb-20">
        <div className="container-custom">
          <p className="text-xs uppercase tracking-[0.5em] text-primary mb-4">About</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Our <span className="text-primary">Studio</span>
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
              Twelve Years of Ink, Art & Soul
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2013, Custom Rose was born from a desire to elevate tattoo culture into a
              true premium experience. We believe a tattoo is not a product — it's a collaboration
              between artist and client, a permanent piece of art carried for life.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our studio is built on three pillars: artistry, hygiene, and atmosphere. From the
              dimmed cinematic lighting to the curated music and private rooms, every detail is
              designed to make your visit unforgettable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether your dream is a sleeve of black-and-grey realism, a delicate fine-line piece,
              or bold blackwork — our artists will guide you from concept to final ink.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/40">
        <div className="container-custom">
          <SectionTitle eyebrow="Our Values" title="What We Stand For" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Artistry First", d: "Every line, every shade — designed with intention." },
              { t: "Total Hygiene", d: "Hospital-grade sterilization, single-use needles only." },
              { t: "Client Comfort", d: "Private rooms, premium aftercare, lifetime support." },
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
              Book a Visit
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
