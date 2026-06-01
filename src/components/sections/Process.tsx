import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const STEPS = [
  { n: "01", t: "Discover", d: "Tell us your dream view and budget. We shortlist land and homes that fit — mountain, lake or paddy." },
  { n: "02", t: "Visit", d: "Walk the property with our Dambulla team. See the outlook, the access and the boundaries first-hand." },
  { n: "03", t: "Verify", d: "We confirm clear title, survey plans and approvals so your purchase is completely secure." },
  { n: "04", t: "Own", d: "Sign with confidence and receive your deed. Welcome home to the Cultural Triangle." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="How It Works" title="From first look to title deed — handled." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="h-full">
              <div className="group relative h-full border border-line bg-surface p-8 transition-colors hover:border-gold">
                <span className="absolute right-0 top-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                <span className="font-display text-5xl font-bold text-purple">{s.n}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-main">{s.t}</h3>
                <p className="mt-2 text-sm text-soft">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
