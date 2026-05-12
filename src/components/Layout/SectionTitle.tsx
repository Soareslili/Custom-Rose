type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="text-center mb-14">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider">
        {title}
      </h2>
      <div className="red-divider" />
      {subtitle && (
        <p className="max-w-2xl mx-auto text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
