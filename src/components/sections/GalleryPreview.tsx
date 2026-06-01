import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GALLERY } from "@/data/gallery";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function GalleryPreview() {
  const preview = GALLERY.slice(0, 6);
  return (
    <section id="gallery" className="bg-elev py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The Region in Pictures"
            title="A glimpse of Dambulla & Sigiriya."
            sub="Real Sri Lankan landscapes from across our heartland."
          />
          <Reveal>
            <Link href="/gallery" className="inline-flex items-center gap-2 border-2 border-gold px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-ink">
              View full gallery <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {preview.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.06}>
              <Link href="/gallery" className="group relative block aspect-[4/3] overflow-hidden">
                <Image src={g.src} alt={g.caption} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-110" />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40" />
                <span className="absolute bottom-3 left-3 translate-y-2 font-display text-lg font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.caption}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
