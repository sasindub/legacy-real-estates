"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [note, setNote] = useState("");
  const [err, setErr] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!name || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      setErr(true);
      setNote("Please enter your name and a valid email.");
      return;
    }
    setErr(false);
    setNote(`Thank you, ${name.split(" ")[0]}! Our Dambulla team will reply within one business day.`);
    e.currentTarget.reset();
    // TODO: connect to a real backend / email service / WhatsApp API for production.
  };

  const field = "w-full border border-line bg-surface px-4 py-3.5 text-main outline-none transition-colors placeholder:text-dim focus:border-gold";

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x grid items-start gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's talk land."
            sub="Tell us the view you're dreaming of. Our Dambulla team will reply within one business day."
          />
          <ul className="mt-9 space-y-5">
            {[
              { Icon: MapPin, label: "Office", value: SITE.address, href: undefined },
              { Icon: Phone, label: "Phone / WhatsApp", value: SITE.phone, href: SITE.phoneHref },
              { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
              { Icon: Facebook, label: "Facebook", value: "Legacy Real Estates", href: SITE.socials.facebook },
            ].map(({ Icon, label, value, href }, i) => (
              <Reveal as="li" key={label} delay={i * 0.05} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-line text-gold"><Icon size={18} /></span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-dim">{label}</span>
                  {href ? <a href={href} className="text-main hover:text-gold">{value}</a> : <span className="text-main">{value}</span>}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal>
          <form onSubmit={submit} className="grid gap-4 border border-line bg-surface p-7 sm:grid-cols-2 sm:p-9">
            <input name="name" placeholder="Full name" className={field} aria-label="Full name" />
            <input name="email" type="email" placeholder="Email address" className={field} aria-label="Email address" />
            <input name="phone" placeholder="Phone / WhatsApp" className={field} aria-label="Phone" />
            <select name="view" defaultValue="" className={field} aria-label="Preferred view">
              <option value="" disabled>Preferred view</option>
              <option>Mountain View</option>
              <option>Lake View</option>
              <option>Paddy-Field View</option>
              <option>Not sure yet</option>
            </select>
            <textarea name="message" rows={4} placeholder="Tell us what you're looking for" className={`${field} sm:col-span-2`} aria-label="Message" />
            <button type="submit" className="bg-gold px-7 py-4 font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:col-span-2">
              Send Enquiry
            </button>
            {note && <p className={`text-sm sm:col-span-2 ${err ? "text-red-400" : "text-gold"}`}>{note}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
