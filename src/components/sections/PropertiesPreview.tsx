import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROPERTIES } from "@/data/properties";
import PropertyCard from "../PropertyCard";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function PropertiesPreview() {
  const featured = PROPERTIES.slice(0, 3);
  return (
    <section id="properties" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Properties"
            title="Featured land, homes & villas."
            sub="A selection from our current portfolio across Dambulla and Sigiriya — each with clear title and an unforgettable view."
          />
          <Reveal>
            <Link href="/properties" className="inline-flex items-center gap-2 border-2 border-gold px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-ink">
              View all properties <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="h-full">
              <PropertyCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
