import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PropertiesList from "@/components/PropertiesList";

export const metadata: Metadata = {
  title: "Our Properties — Legacy Real Estates | Dambulla & Sigiriya",
  description: "Browse premium land, homes and villas for sale in Dambulla and Sigiriya — mountain, lake and paddy-field views with clear title deeds.",
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        crumb="Properties"
        title="Our Properties"
        sub="Premium land, homes and villas across Dambulla and Sigiriya - every listing with a verified title deed and an unforgettable view."
        image="/images/dambulla-mountain.jpg"
      />
      <section className="py-20">
        <div className="container-x">
          <PropertiesList />
        </div>
      </section>
    </>
  );
}
