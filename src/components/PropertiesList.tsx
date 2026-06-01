"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROPERTIES } from "@/data/properties";
import PropertyCard from "./PropertyCard";

const FILTERS = ["All", "Mountain View", "Lake View", "Paddy-Field View"] as const;

export default function PropertiesList() {
  const [f, setF] = useState<string>("All");
  const list = PROPERTIES.filter((p) => f === "All" || p.view === f);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-3">
        {FILTERS.map((opt) => (
          <button
            key={opt}
            onClick={() => setF(opt)}
            className={`border px-5 py-2 text-sm font-medium transition-colors ${
              f === opt ? "border-gold bg-gold text-ink" : "border-line text-soft hover:border-gold hover:text-main"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <motion.div layout className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {list.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <PropertyCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
