import Image from "next/image";
import Counter from "../Counter";
import Reveal from "../Reveal";

const STATS = [
  { to: 250, suffix: "+", label: "Happy Landowners" },
  { to: 15, suffix: "+", label: "Prime Locations" },
  { to: 100, suffix: "%", label: "Verified Deeds" },
  { to: 10, suffix: " yrs", label: "Local Roots" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image src="/images/mountains-clouds.jpg" alt="" fill className="object-cover" sizes="100vw" />
      {/* flat purple overlay (solid, no gradient) */}
      <div className="absolute inset-0 bg-purple-deep/90" />
      <div className="container-x relative grid grid-cols-2 gap-10 text-center md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <span className="block font-display text-5xl font-bold text-white md:text-6xl">
              <Counter to={s.to} suffix={s.suffix} />
            </span>
            <span className="mt-2 block text-sm uppercase tracking-wider text-gold-light">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
