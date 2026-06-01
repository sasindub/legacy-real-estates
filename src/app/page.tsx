import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/sections/About";
import Locations from "@/components/sections/Locations";
import PropertiesPreview from "@/components/sections/PropertiesPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Locations />
      <PropertiesPreview />
      <Stats />
      <GalleryPreview />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
