const WORDS = [
  "Mountain Views", "Lake Frontage", "Paddy-Field Vistas", "Clear Title Deeds",
  "Dambulla", "Sigiriya", "Investment Land", "Luxury Villas",
];

export default function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden bg-purple py-4 select-none" aria-hidden>
      <div className="flex w-max animate-marquee items-center gap-8">
        {items.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl font-semibold text-white whitespace-nowrap">{w}</span>
            <span className="text-gold-light text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
