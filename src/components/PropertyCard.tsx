"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BedDouble, Bath, Maximize, MapPin, ArrowUpRight } from "lucide-react";
import { Property } from "@/data/properties";

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden border border-line bg-surface"
    >
      <Link href={`/properties/${p.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={p.cover}
          alt={p.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
        />
        {p.tag && (
          <span className="absolute left-4 top-4 bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            {p.tag}
          </span>
        )}
        <span className="absolute right-4 top-4 bg-purple px-3 py-1 text-xs font-semibold text-white">{p.view}</span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-sm text-dim">
          <MapPin size={14} className="text-gold" /> {p.location}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-main">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm text-soft">{p.short}</p>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4 text-sm text-soft">
          {p.beds && <span className="flex items-center gap-1.5"><BedDouble size={16} className="text-gold" /> {p.beds} Beds</span>}
          {p.baths && <span className="flex items-center gap-1.5"><Bath size={16} className="text-gold" /> {p.baths} Baths</span>}
          <span className="flex items-center gap-1.5"><Maximize size={16} className="text-gold" /> {p.extent}</span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-xl font-semibold text-gold">{p.price}</span>
          <Link
            href={`/properties/${p.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-main transition-colors hover:text-gold"
          >
            Details <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
