export type Property = {
  id: string;
  title: string;
  location: string;
  view: "Mountain View" | "Lake View" | "Paddy-Field View";
  type: "Land" | "Villa" | "House";
  price: string;
  extent: string; // land size
  beds?: number;
  baths?: number;
  cover: string;
  gallery: string[];
  short: string;
  description: string[];
  features: string[];
  tag?: string;
};

// NOTE: images are license-clear stand-ins. Replace `cover`/`gallery`
// with the client's own property photos (drop files in /public/images).
export const PROPERTIES: Property[] = [
  {
    id: "sigiriya-view-villa",
    title: "Sigiriya View Villa",
    location: "Sigiriya, Dambulla",
    view: "Mountain View",
    type: "Villa",
    price: "Rs. 42,500,000",
    extent: "20 perches",
    beds: 4,
    baths: 3,
    cover: "/images/property-villa-1.jpg",
    gallery: ["/images/property-villa-1.jpg", "/images/property-villa-2.jpg", "/images/dambulla-mountain.jpg", "/images/sigiriya-rock.jpg"],
    short: "Modern 4-bed villa with an infinity pool and uninterrupted Sigiriya rock views.",
    description: [
      "A striking contemporary villa set on elevated land with sweeping views toward the Sigiriya rock fortress and surrounding jungle canopy.",
      "Floor-to-ceiling glazing, a private infinity pool and open-plan living make the most of the year-round Cultural-Triangle light.",
    ],
    features: ["Infinity pool", "Open-plan living", "Clear title deed", "Mature garden", "Solar ready", "Gated access"],
    tag: "Signature",
  },
  {
    id: "dambulla-paddy-residence",
    title: "Dambulla Paddy Residence",
    location: "Dambulla",
    view: "Paddy-Field View",
    type: "House",
    price: "Rs. 28,000,000",
    extent: "15 perches",
    beds: 3,
    baths: 2,
    cover: "/images/property-villa-3.jpg",
    gallery: ["/images/property-villa-3.jpg", "/images/paddy-1.jpg", "/images/paddy-2.jpg", "/images/property-house-2.jpg"],
    short: "A serene family home framed by working emerald paddy fields on the edge of Dambulla town.",
    description: [
      "Wake to mist rolling over open paddy from this calm, well-built family residence minutes from Dambulla's markets and schools.",
      "Generous verandas, a productive garden and quiet surroundings make this an ideal forever home or boutique retreat.",
    ],
    features: ["Paddy frontage", "Wide verandas", "Fruit garden", "Town water & power", "Clear title deed"],
    tag: "Family",
  },
  {
    id: "kandalama-lake-plot",
    title: "Kandalama Lake-Front Land",
    location: "Kandalama, Dambulla",
    view: "Lake View",
    type: "Land",
    price: "Rs. 950,000 / perch",
    extent: "32 perches",
    cover: "/images/lake-2.jpg",
    gallery: ["/images/lake-2.jpg", "/images/lake-1.jpg", "/images/lake-3.jpg", "/images/mountain-water.jpg"],
    short: "Rare lake-front building land beside the Kandalama reservoir — perfect for a private villa.",
    description: [
      "A truly rare parcel of cleared, build-ready land with direct frontage onto the calm waters of the Kandalama reservoir.",
      "Surrounded by protected jungle and famed for its birdlife and sunsets — an exceptional canvas for a private villa or boutique hospitality project.",
    ],
    features: ["Direct lake frontage", "Build-ready & cleared", "Road access", "Clear title deed", "Tourism-zone potential"],
    tag: "Waterfront",
  },
  {
    id: "highland-mountain-plot",
    title: "Highland Mountain Plot",
    location: "Dambulla Highlands",
    view: "Mountain View",
    type: "Land",
    price: "Rs. 525,000 / perch",
    extent: "40 perches",
    cover: "/images/dambulla-mountain.jpg",
    gallery: ["/images/dambulla-mountain.jpg", "/images/mountains-clouds.jpg", "/images/mountain-sunset.jpg", "/images/cliff-view.jpg"],
    short: "Elevated investment land with panoramic green-mountain vistas across the Cultural Triangle.",
    description: [
      "Sit above the valley on this elevated block with commanding 180° mountain views and cool evening breezes.",
      "An excellent long-term investment or the foundation for an estate home with privacy and a spectacular outlook.",
    ],
    features: ["Panoramic views", "Elevated & private", "Motorable access", "Clear title deed", "Investment grade"],
    tag: "Investment",
  },
  {
    id: "garden-courtyard-home",
    title: "Garden Courtyard Home",
    location: "Dambulla",
    view: "Paddy-Field View",
    type: "House",
    price: "Rs. 33,500,000",
    extent: "18 perches",
    beds: 3,
    baths: 3,
    cover: "/images/property-house-2.jpg",
    gallery: ["/images/property-house-2.jpg", "/images/property-villa-4.jpg", "/images/paddy-road.jpg", "/images/forest-aerial.jpg"],
    short: "A light-filled courtyard home blending tropical-modern design with mature greenery.",
    description: [
      "Designed around a leafy central courtyard, this home balances privacy with airy, cross-ventilated living spaces.",
      "Quality finishes throughout, a covered carport and an established garden ready to enjoy from day one.",
    ],
    features: ["Central courtyard", "Tropical-modern design", "Carport", "Established garden", "Clear title deed"],
    tag: "Modern",
  },
  {
    id: "sunset-ridge-villa",
    title: "Sunset Ridge Villa",
    location: "Sigiriya belt",
    view: "Lake View",
    type: "Villa",
    price: "Rs. 56,000,000",
    extent: "25 perches",
    beds: 5,
    baths: 4,
    cover: "/images/property-villa-2.jpg",
    gallery: ["/images/property-villa-2.jpg", "/images/property-villa-1.jpg", "/images/sunset-hills.jpg", "/images/lake-1.jpg"],
    short: "Five-bedroom luxury villa positioned for golden-hour lake and ridge views.",
    description: [
      "A generous five-bedroom villa engineered to capture the region's famous sunsets over water and ridge-line.",
      "Resort-grade amenities, a large pool deck and entertainer's kitchen make this equally suited to family living or premium short-stay.",
    ],
    features: ["Sunset orientation", "Large pool deck", "5 ensuite bedrooms", "Backup power", "Clear title deed", "Rental potential"],
    tag: "Luxury",
  },
];

export const getProperty = (id: string) => PROPERTIES.find((p) => p.id === id);
