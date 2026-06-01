import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${center ? "" : ""}`}>
      <Reveal>
        <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          <span className="h-px w-7 bg-gold" /> {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className={`font-display font-semibold leading-[1.05] ${light ? "text-white" : "text-main"}`} style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)" }}>
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-[1.05rem] ${light ? "text-white/80" : "text-soft"}`}>{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
