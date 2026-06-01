import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-elev">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[2fr_1fr_1fr_1.4fr]">
        <div>
          <Image src="/logo/logo-full.png" alt={SITE.name} width={180} height={72} className="mb-5 h-16 w-auto" />
          <p className="max-w-xs text-sm text-soft">
            Premium land, homes and villas with mountain, lake and paddy-field views in
            Dambulla &amp; Sigiriya - the heart of Sri Lanka&apos;s Cultural Triangle.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: Facebook, href: SITE.socials.facebook, label: "Facebook" },
              { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
              { Icon: Youtube, href: SITE.socials.youtube, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener"
                className="grid h-10 w-10 place-items-center border border-line text-soft transition-colors hover:bg-gold hover:text-ink hover:border-gold"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg text-main">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-soft transition-colors hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg text-main">Locations</h4>
          <ul className="space-y-2.5 text-sm text-soft">
            <li>Dambulla</li>
            <li>Sigiriya</li>
            <li>Kandalama</li>
            <li>Reservoir Belt</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg text-main">Contact</h4>
          <ul className="space-y-3 text-sm text-soft">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-gold" /> {SITE.address}</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-gold" /> <a href={SITE.phoneHref} className="hover:text-gold">{SITE.phone}</a></li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-gold" /> <a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-sm text-dim sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Dambulla · Sigiriya · Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
