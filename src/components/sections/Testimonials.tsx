import { Quote } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const ITEMS = [
  { q: "They found us a paddy-view plot in Dambulla we still can't believe is ours. Honest, local and so easy to work with.", n: "Nadeesha & Roshan", c: "Colombo", i: "N" },
  { q: "Clear title, fair price, and a team that walked every boundary with me. The Sigiriya view seals it.", n: "Ahamed F.", c: "Kandy", i: "A" },
  { q: "From abroad I needed people I could trust. Legacy handled everything to the deed. Highly recommended.", n: "Samanthi P.", c: "Melbourne", i: "S" },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Voices of Trust" title="What our landowners say." />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {ITEMS.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col border border-line bg-surface p-8">
                <Quote className="text-gold" size={32} />
                <blockquote className="mt-4 flex-1 font-display text-xl leading-relaxed text-main">{t.q}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center bg-purple font-display text-lg font-bold text-white">{t.i}</span>
                  <span className="flex flex-col leading-tight">
                    <strong className="text-sm text-main">{t.n}</strong>
                    <span className="text-xs text-dim">{t.c}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
