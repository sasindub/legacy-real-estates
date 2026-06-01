export type GalleryItem = {
  src: string;
  caption: string;
  category: "mountain" | "lake" | "paddy" | "heritage";
};

export const GALLERY: GalleryItem[] = [
  { src: "/images/hero-sigiriya.jpg", caption: "Sigiriya Rock Fortress", category: "heritage" },
  { src: "/images/paddy-2.jpg", caption: "Emerald Paddy Fields", category: "paddy" },
  { src: "/images/mountain-sunset.jpg", caption: "Mountains at Golden Hour", category: "mountain" },
  { src: "/images/lake-2.jpg", caption: "Reservoir Frontage", category: "lake" },
  { src: "/images/sigiriya-rock.jpg", caption: "Lion Rock, Sigiriya", category: "heritage" },
  { src: "/images/dambulla-mountain.jpg", caption: "Dambulla Highlands", category: "mountain" },
  { src: "/images/paddy-road.jpg", caption: "Field Pathways", category: "paddy" },
  { src: "/images/lake-1.jpg", caption: "Still Waters", category: "lake" },
  { src: "/images/mountains-clouds.jpg", caption: "Misty Ranges", category: "mountain" },
  { src: "/images/sigiriya-aerial.jpg", caption: "Cultural Triangle Canopy", category: "heritage" },
  { src: "/images/paddy-1.jpg", caption: "Working Paddy", category: "paddy" },
  { src: "/images/lake-3.jpg", caption: "Monsoon Skies", category: "lake" },
  { src: "/images/cliff-view.jpg", caption: "Cliffside Outlooks", category: "mountain" },
  { src: "/images/mountain-water.jpg", caption: "Where Hills Meet Water", category: "mountain" },
  { src: "/images/rock-trees.jpg", caption: "Ancient Stone & Jungle", category: "heritage" },
  { src: "/images/sunset-landscape.jpg", caption: "Sunset Over the Plains", category: "paddy" },
  { src: "/images/hero-paddy.jpg", caption: "Endless Green", category: "paddy" },
  { src: "/images/forest-aerial.jpg", caption: "Jungle Canopy", category: "heritage" },
  { src: "/images/mountains-evening.jpg", caption: "Evening Ranges", category: "mountain" },
  { src: "/images/rock-formation.jpg", caption: "Timeless Stone", category: "heritage" },
];
