import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const LOCATIONS = [
  {
    name: "Dambulla",
    tag: "Our Home Base",
    img: "/images/dambulla-mountain.jpg",
    text: "The golden heart of the island — famed for its cave temples, mountain backdrops and thriving market town. Our primary focus, known plot by plot.",
  },
  {
    name: "Sigiriya",
    tag: "Heritage",
    img: "/images/sigiriya-rock.jpg",
    text: "The legendary Lion Rock and its surrounding plains — serene, scenic and steeped in centuries of history and natural beauty.",
  },
  {
    name: "Reservoir Belt",
    tag: "Waterfront",
    img: "/images/lake-1.jpg",
    text: "Ancient tanks and reservoirs offering rare, calming lake-frontage land across the Cultural Triangle region.",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="bg-elev py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Heartland"
          title="Two iconic locations. One unforgettable region."
          sub="Our base is the Cultural Triangle — with a special love for Dambulla, where heritage, nature and opportunity meet."
        />

        {/* equal-height cards: stretch grid + flex bodies */}
        <div className="mt-14 grid items-stretch gap-7 md:grid-cols-3">
          {LOCATIONS.map((loc, i) => (
            <Reveal as="article" key={loc.name} delay={i * 0.08} className="flex h-full flex-col border border-line bg-surface transition-colors hover:border-gold">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image src={loc.img} alt={loc.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-smooth hover:scale-110" />
                <span className="absolute left-4 top-4 bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">{loc.tag}</span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-3xl font-semibold text-main">{loc.name}</h3>
                <p className="mt-3 flex-1 text-soft">{loc.text}</p>
                <Link href="/properties" className="mt-6 inline-flex items-center gap-2 font-semibold text-gold">
                  View land <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
