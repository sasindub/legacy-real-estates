import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const POINTS = [
  "Verified, clear title deeds on every property",
  "Mountain, lake & paddy-field outlooks",
  "On-the-ground team based in Dambulla",
  "End-to-end guidance, survey to signature",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-line">
            <Image src="/images/sigiriya-aerial.jpg" alt="Aerial view of the Sigiriya region" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="absolute -bottom-8 -right-4 aspect-square w-2/5 overflow-hidden border-4 border-[var(--bg)] sm:-right-8">
            <Image src="/images/paddy-1.jpg" alt="Paddy field in Dambulla" fill className="object-cover" sizes="20vw" />
          </div>
          <div className="absolute -left-4 -top-6 bg-purple px-5 py-4 text-white">
            <span className="block font-display text-2xl font-bold">Rooted in</span>
            <span className="block text-xs uppercase tracking-widest text-gold-light">the Cultural Triangle</span>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="A legacy built on the land of kings."
            sub="Legacy Real Estates is rooted in Dambulla and Sigiriya — a region defined by golden rock fortresses, mirror-still reservoirs and endless emerald paddy fields. We connect discerning buyers with land and homes that hold both value and a view worth waking up to."
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {POINTS.map((pt, i) => (
              <Reveal as="li" key={pt} delay={i * 0.05} className="flex items-center gap-3 text-soft">
                <span className="grid h-6 w-6 shrink-0 place-items-center border border-line text-gold"><Check size={14} /></span>
                {pt}
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <Link href="/properties" className="mt-8 inline-flex items-center gap-2 bg-gold px-7 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-1">
              Start Your Search
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
