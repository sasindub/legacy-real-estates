import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BedDouble, Bath, Maximize, MapPin, Eye, Check, Phone, Mail, MessageCircle, ChevronRight } from "lucide-react";
import { PROPERTIES, getProperty } from "@/data/properties";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyCard from "@/components/PropertyCard";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const p = getProperty(params.id);
  if (!p) return { title: "Property — Legacy Real Estates" };
  return {
    title: `${p.title} — Legacy Real Estates`,
    description: p.short,
  };
}

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const p = getProperty(params.id);
  if (!p) notFound();

  const facts = [
    { Icon: Eye, label: "View", value: p.view },
    { Icon: Maximize, label: "Extent", value: p.extent },
    { Icon: MapPin, label: "Location", value: p.location },
    ...(p.beds ? [{ Icon: BedDouble, label: "Bedrooms", value: String(p.beds) }] : []),
    ...(p.baths ? [{ Icon: Bath, label: "Bathrooms", value: String(p.baths) }] : []),
  ];

  const others = PROPERTIES.filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <>
      <div className="container-x pt-28">
        <nav className="flex items-center gap-1.5 text-sm text-dim">
          <Link href="/" className="hover:text-gold">Home</Link>
          <ChevronRight size={14} />
          <Link href="/properties" className="hover:text-gold">Properties</Link>
          <ChevronRight size={14} />
          <span className="text-gold">{p.title}</span>
        </nav>
      </div>

      <section className="py-10">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* left: gallery + description */}
          <div>
            <PropertyGallery images={p.gallery} title={p.title} />

            <div className="mt-10">
              <span className="bg-purple px-3 py-1 text-xs font-semibold text-white">{p.type}</span>
              <h1 className="mt-4 font-display text-4xl font-semibold text-main md:text-5xl">{p.title}</h1>
              <p className="mt-2 flex items-center gap-2 text-soft"><MapPin size={16} className="text-gold" /> {p.location}</p>

              <div className="mt-7 grid grid-cols-2 gap-px border border-line bg-[var(--border)] sm:grid-cols-3 lg:grid-cols-5">
                {facts.map((f) => (
                  <div key={f.label} className="flex flex-col items-center gap-1 bg-surface p-5 text-center">
                    <f.Icon size={20} className="text-gold" />
                    <span className="text-xs uppercase tracking-wide text-dim">{f.label}</span>
                    <span className="text-sm font-semibold text-main">{f.value}</span>
                  </div>
                ))}
              </div>

              <h2 className="mt-10 font-display text-2xl font-semibold text-main">About this property</h2>
              {p.description.map((d, i) => (
                <p key={i} className="mt-3 text-soft">{d}</p>
              ))}

              <h2 className="mt-10 font-display text-2xl font-semibold text-main">Features &amp; highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-soft">
                    <span className="grid h-6 w-6 shrink-0 place-items-center border border-line text-gold"><Check size={14} /></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* right: sticky contact card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-line bg-surface p-7">
              <span className="text-sm text-dim">Asking price</span>
              <p className="font-display text-3xl font-bold text-gold">{p.price}</p>

              <div className="mt-6 border-t border-line pt-6">
                <h3 className="font-display text-xl font-semibold text-main">Interested in this property?</h3>
                <p className="mt-2 text-sm text-soft">
                  Speak directly with our Dambulla team for viewings, full survey plans and title verification.
                </p>

                <a href={SITE.phoneHref} className="mt-5 flex items-center justify-center gap-2 bg-gold py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5">
                  <Phone size={18} /> {SITE.phone}
                </a>
                <a href={SITE.whatsapp} target="_blank" rel="noopener" className="mt-3 flex items-center justify-center gap-2 border-2 border-line py-3.5 font-semibold text-main transition-colors hover:border-gold hover:text-gold">
                  <MessageCircle size={18} className="text-gold" /> WhatsApp enquiry
                </a>
                <a href={`mailto:${SITE.email}?subject=Enquiry: ${encodeURIComponent(p.title)}`} className="mt-3 flex items-center justify-center gap-2 border-2 border-line py-3.5 font-semibold text-main transition-colors hover:border-gold hover:text-gold">
                  <Mail size={18} className="text-gold" /> Email us
                </a>
              </div>

              <div className="mt-6 border-t border-line pt-6 text-sm text-soft">
                <p className="flex items-center gap-2"><MapPin size={16} className="text-gold" /> {SITE.address}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* more properties */}
      <section className="bg-elev py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl font-semibold text-main">More properties</h2>
          <div className="mt-8 grid items-stretch gap-7 md:grid-cols-3">
            {others.map((o) => (
              <PropertyCard key={o.id} p={o} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
