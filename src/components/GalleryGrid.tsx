"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/data/gallery";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "mountain", label: "Mountain" },
  { key: "lake", label: "Lake" },
  { key: "paddy", label: "Paddy" },
  { key: "heritage", label: "Heritage" },
] as const;

export default function GalleryGrid() {
  const [filter, setFilter] = useState<string>("all");
  const [open, setOpen] = useState<number | null>(null);

  const items = GALLERY.filter((g) => filter === "all" || g.category === filter);
  const move = (d: number) => setOpen((o) => (o === null ? o : (o + d + items.length) % items.length));

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-3">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`border px-5 py-2 text-sm font-medium transition-colors ${
              filter === f.key ? "border-gold bg-gold text-ink" : "border-line text-soft hover:border-gold hover:text-main"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        <AnimatePresence>
          {items.map((g, idx) => (
            <motion.button
              key={g.src}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(idx)}
              className="group relative block w-full overflow-hidden break-inside-avoid"
            >
              <Image
                src={g.src}
                alt={g.caption}
                width={800}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40" />
              <span className="absolute bottom-3 left-3 translate-y-2 font-display text-lg font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {g.caption}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1100] grid place-items-center bg-black/90 p-4"
            onClick={() => setOpen(null)}
          >
            <button className="absolute right-5 top-5 text-white" onClick={() => setOpen(null)} aria-label="Close"><X size={32} /></button>
            <button className="absolute left-4 text-white/80 hover:text-white" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous"><ChevronLeft size={44} /></button>
            <button className="absolute right-4 text-white/80 hover:text-white" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next"><ChevronRight size={44} /></button>
            <motion.div
              key={items[open].src}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-h-[82vh] max-w-[88vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={items[open].src} alt={items[open].caption} width={1600} height={1067} className="max-h-[82vh] w-auto object-contain" />
              <p className="mt-3 text-center font-display text-xl text-white">{items[open].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
