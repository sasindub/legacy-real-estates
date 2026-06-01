import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  title,
  sub,
  image,
  crumb,
}: {
  title: string;
  sub: string;
  image: string;
  crumb: string;
}) {
  return (
    <section className="relative flex min-h-[48vh] items-end overflow-hidden pt-20">
      <Image src={image} alt="" fill className="object-cover" sizes="100vw" priority />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="container-x relative pb-14">
        <nav className="mb-4 flex items-center gap-1.5 text-sm text-white/70">
          <Link href="/" className="hover:text-gold">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gold">{crumb}</span>
        </nav>
        <h1 className="font-display font-semibold text-white" style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}>{title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-white/85">{sub}</p>
      </div>
    </section>
  );
}
