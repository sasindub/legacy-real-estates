import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Legacy Real Estates | Dambulla & Sigiriya, Sri Lanka",
  description: "A gallery of real Sri Lankan landscapes from Dambulla and Sigiriya — mountains, lakes, paddy fields and heritage.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        title="Gallery of Dambulla & Sigiriya"
        sub="Real Sri Lankan landscapes from across our heartland — mountain, lake, paddy and heritage views. Click any image to view it full screen."
        image="/images/sigiriya-aerial.jpg"
      />
      <section className="py-20">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
