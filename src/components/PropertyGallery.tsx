"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden border border-line">
        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="absolute inset-0">
          <Image src={images[active]} alt={`${title} — photo ${active + 1}`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 60vw" priority />
        </motion.div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            className={`relative aspect-[4/3] overflow-hidden border-2 transition-colors ${i === active ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"}`}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="20vw" />
          </button>
        ))}
      </div>
    </div>
  );
}
