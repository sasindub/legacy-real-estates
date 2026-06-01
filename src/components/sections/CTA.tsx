import Image from "next/image";
import { Phone } from "lucide-react";
import Reveal from "../Reveal";
import { SITE } from "@/lib/site";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 text-center md:py-36">
      <Image src="/images/sunset-hills.jpg" alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="container-x relative">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display font-semibold leading-tight text-white" style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}>
            Your view is waiting in Dambulla.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-white/85">Let&apos;s find the property that becomes your legacy.</p>
        </Reveal>
        <Reveal delay={0.2}>
          <a href={SITE.phoneHref} className="mt-9 inline-flex items-center gap-2 bg-gold px-8 py-4 text-lg font-semibold text-ink transition-transform hover:-translate-y-1">
            <Phone size={20} /> Book a Free Site Visit
          </a>
        </Reveal>
      </div>
    </section>
  );
}
