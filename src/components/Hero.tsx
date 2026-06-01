"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const SLIDES = [
  { src: "/images/hero-sigiriya.jpg", place: "Sigiriya Rock", word: "Heritage" },
  { src: "/images/dambulla-mountain.jpg", place: "Dambulla Highlands", word: "Mountain View" },
  { src: "/images/lake-2.jpg", place: "Kandalama Reservoir", word: "Lake View" },
  { src: "/images/paddy-2.jpg", place: "Dambulla Paddy Fields", word: "Paddy-Field View" },
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 4200);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[i];

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* crossfading backgrounds */}
      <div className="absolute inset-0 -z-20">
        <AnimatePresence>
          <motion.div
            key={slide.src}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.04 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2 }, scale: { duration: 5, ease: "easeOut" } }}
            className="absolute inset-0"
          >
            <Image src={slide.src} alt={slide.place} fill priority className="object-cover" sizes="100vw" />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* flat overlay (solid color, no gradient) */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--overlay)" }} />

      <div className="container-x relative w-full pt-24 pb-28">
        {/* location chip synced to slide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 inline-flex items-center gap-2 border border-white/30 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur"
        >
          <MapPin size={14} className="text-gold" />
          <AnimatePresence mode="wait">
            <motion.span
              key={slide.place}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
            >
              Now viewing · {slide.place}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* headline with rotating word */}
        <h1 className="font-display font-semibold leading-[0.95] text-white" style={{ fontSize: "clamp(2.6rem, 7.5vw, 6rem)" }}>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Own your
          </motion.span>

          <span className="relative block h-[1.05em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={slide.word}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-110%" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block text-gold"
              >
                {slide.word}
              </motion.span>
            </AnimatePresence>
          </span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            in the Cultural Triangle
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-7 max-w-xl text-lg text-white/85"
        >
          Premium land, homes & villas with breathtaking mountain, lake and paddy-field
          views across <strong className="text-gold-light font-semibold">Dambulla</strong> &amp;{" "}
          <strong className="text-gold-light font-semibold">Sigiriya</strong> - Sri Lanka.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.42 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link href="/properties" className="group inline-flex items-center gap-2 bg-gold px-7 py-4 font-semibold text-ink transition-transform hover:-translate-y-1">
            Explore Properties
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 border-2 border-white/40 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-colors hover:border-white hover:bg-white/10">
            <Phone size={18} className="text-gold" /> {SITE.phone}
          </a>
        </motion.div>

        {/* slide progress dots */}
        <div className="mt-12 flex items-center gap-3">
          {SLIDES.map((s, idx) => (
            <button
              key={s.src}
              onClick={() => setI(idx)}
              aria-label={`View ${s.place}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-10 bg-gold" : "w-4 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-10 w-px bg-white/30 overflow-hidden">
          <motion.span
            className="absolute left-0 top-0 h-1/2 w-full bg-gold"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
