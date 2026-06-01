"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Youtube, Phone, Menu, X } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* top utility bar: hotline + socials */}
      <div className="hidden bg-ink-800 text-white md:block">
        <div className="container-x flex h-9 items-center justify-between text-[13px]">
          <a href={SITE.phoneHref} className="flex items-center gap-2 font-medium hover:text-gold transition-colors">
            <Phone size={14} className="text-gold" /> Hotline: {SITE.phone}
          </a>
          <div className="flex items-center gap-4">
            <span className="text-white/60">Follow us</span>
            <a href={SITE.socials.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-gold transition-colors"><Facebook size={15} /></a>
            <a href={SITE.socials.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram size={15} /></a>
            <a href={SITE.socials.youtube} target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-gold transition-colors"><Youtube size={15} /></a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-[900] transition-all duration-300 ${
          scrolled ? "bg-[var(--nav)] backdrop-blur-xl border-b border-line py-2" : "py-4 border-b border-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Legacy Real Estates home">
            <Image src="/logo/logo-crest.png" alt="" width={42} height={42} className="h-10 w-auto" priority />
            <span className="flex flex-col leading-none">
              <strong className="font-display text-xl tracking-wide text-main">LEGACY</strong>
              <em className="not-italic text-[10px] tracking-[0.28em] text-gold mt-0.5">REAL ESTATES</em>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-[15px] font-medium text-soft hover:text-main transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href={SITE.phoneHref} className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:inline-flex items-center gap-2">
              <Phone size={15} /> Call Now
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-main lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile drawer */}
      <div className={`fixed inset-0 z-[950] lg:hidden ${open ? "" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-elev p-8 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <Image src="/logo/logo-full.png" alt="Legacy Real Estates" width={150} height={60} className="h-12 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full border border-line text-main">
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-2xl text-main">
                {l.label}
              </Link>
            ))}
          </div>
          <a href={SITE.phoneHref} className="mt-10 flex items-center justify-center gap-2 rounded-full bg-gold py-3.5 font-semibold text-ink">
            <Phone size={16} /> {SITE.phone}
          </a>
          <div className="mt-6 flex items-center gap-5 text-soft">
            <a href={SITE.socials.facebook} aria-label="Facebook" className="hover:text-gold"><Facebook size={20} /></a>
            <a href={SITE.socials.instagram} aria-label="Instagram" className="hover:text-gold"><Instagram size={20} /></a>
            <a href={SITE.socials.youtube} aria-label="YouTube" className="hover:text-gold"><Youtube size={20} /></a>
          </div>
        </aside>
      </div>
    </>
  );
}
