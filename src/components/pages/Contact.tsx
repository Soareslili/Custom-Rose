
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";




function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container-custom text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary mb-4">Entre em contato</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Reserve o sua <span className="text-primary">Tattoo</span>
          </h1>
          <div className="red-divider" />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-custom grid lg:grid-cols-5 gap-10">
          {/* FORM */}
          <div className="lg:col-span-3 p-8 md:p-10 bg-surface-elevated border border-border">
            {submitted ? (
              <div className="text-center py-16">
                <h3 className="font-display text-3xl uppercase tracking-wider mb-3">
                 Solicitar <span className="text-primary">Enviado</span>
                </h3>
                <p className="text-muted-foreground">Entraremos em contato com você em 24 horas.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <h2 className="font-display text-2xl uppercase tracking-wider mb-2">
                Agendar consulta
                </h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Nome" name="name" required />
                  <Field label="Telefone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Tattoo 
                  </label>
                  <select
                    required
                    className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-smooth"
                  >
                    <option value="">Selecionar</option>
                    <option>Realism / Black & Grey</option>
                    <option>Fine Line</option>
                    <option>Blackwork / Tribal</option>
                    <option>Old School / Traditional</option>
                    <option>Custom Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                   Messagem
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Conte-nos sobre sua ideia, tamanho e localização…"
                    className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-smooth resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-semibold shadow-red hover:opacity-90 transition-smooth"
                >
                  Agendar consulta
                </button>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 border border-border bg-surface/60">
              <h3 className="font-display text-xl uppercase tracking-wider mb-4">Studio</h3>
              <ul className="space-y-4 text-sm">
                <Info icon={<MapPin size={18} />}>
                  Av. Paulista 1234, São Paulo, SP <br /> CEP 01234-567
                </Info>
                <Info icon={<Phone size={18} />}>+1 (800) 000-0000</Info>
                <Info icon={<Mail size={18} />}>hello@customrose.tattoo</Info>
                <Info icon={<Clock size={18} />}>
                    Segunda a Sexta: 10h - 19h <br /> Sábado: 10h - 16h <br /> Domingo: Fechado
                </Info>
              </ul>
            </div>

            <a
              href="https://wa.me/18000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white px-6 py-4 text-sm uppercase tracking-widest font-semibold hover:opacity-90 transition-smooth"
            >
              <MessageCircle size={18} />
             Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-smooth"
      />
    </div>
  );
}

function Info({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="text-primary mt-0.5 shrink-0">{icon}</span>
      <span className="text-foreground/85">{children}</span>
    </li>
  );
}

export default ContactPage;
