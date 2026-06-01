"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(!document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const isLight = document.documentElement.classList.toggle("light");
    localStorage.setItem("legacy-theme", isLight ? "light" : "dark");
    setDark(!isLight);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark and light mode"
      className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-main transition-transform duration-300 hover:scale-105 hover:text-gold hover:border-gold"
    >
      <span className={className}>{dark ? <Sun size={18} /> : <Moon size={18} />}</span>
    </button>
  );
}
