export type AccommodationCategory = "room" | "suite";

export type AccommodationItem = {
  slug: string;
  title: string;
  category: AccommodationCategory;
  shortDescription: string;
  description: string;
  occupancy: string;
  view: string;
  outdoorSpace: string;
  size: string;
  highlights: string[];
  amenities: string[];

  interiorSize?: string;
  exteriorSize?: string;
  poolSize?: string;
  beds?: string;
  extraBeds?: string;
  checkIn?: string;
  checkOut?: string;
  poolHeatingPolicy?: string;
};

export const accommodationItems: AccommodationItem[] = [
  {
    slug: "superior-room-sea-view",
    title: "Superior Room – Sea View",
    category: "room",
    shortDescription:
      "A refined room category with sea view, elegant interiors, and a calm contemporary atmosphere.",
    description:
      "A sophisticated room experience designed around comfort, bespoke design, and serene sea-facing ambience.",
    occupancy: "2 persons",
    view: "Sea View",
    outdoorSpace: "Private veranda",
    size: "33 m² interior",
    interiorSize: "33 m²",
    exteriorSize: "20 m² private veranda with dining table and chairs",
    beds: "One Queen or two single beds",
    checkIn: "15:00",
    checkOut: "11:00",
    highlights: [
      "Sea view orientation",
      "Elegant interior design",
      "Custom-made furniture",
      "Serene spatial atmosphere",
    ],
    amenities: [
      "Master bedroom",
      "Marble bathroom",
      "Private veranda",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Coffee facilities",
      "Smart TV",
      "In-room safe",
    ],
  },
  {
    slug: "superior-room-private-pool-sea-view",
    title: "Superior Room – Private Pool – Sea View",
    category: "room",
    shortDescription:
      "A sea-view room category with private pool and a stronger sense of privacy and outdoor luxury.",
    description:
      "This room type expands the superior room experience with private pool living, creating a more premium indoor-outdoor stay experience.",
    occupancy: "2 persons",
    view: "Sea View",
    outdoorSpace: "Private pool and furnished veranda",
    size: "33 m² interior",
    interiorSize: "33 m²",
    exteriorSize: "25–30 m² private veranda with dining table and chairs",
    poolSize: "15 m² fresh-water pool with sunbeds & outdoors shower",
    beds: "One Queen or two single beds",
    checkIn: "15:00",
    checkOut: "11:00",
    poolHeatingPolicy:
      "Pool heating is available at a fee of €60 per day. Water temperature can reach up to 26 °C, depending on the outdoor temperature.",
    highlights: [
      "Private pool",
      "Sea view setting",
      "Elegant room design",
      "Relaxed indoor-outdoor flow",
    ],
    amenities: [
      "Master bedroom",
      "Marble bathroom",
      "Private pool",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Coffee facilities",
      "Smart TV",
      "In-room safe",
    ],
  },
  {
    slug: "superior-family-room-private-pool-sea-view",
    title: "Superior Family Room – Private Pool – Sea View",
    category: "room",
    shortDescription:
      "A family-oriented room with private pool, sea view, and a stronger sense of space and comfort.",
    description:
      "Designed for guests travelling as a family, this room type combines functionality, privacy, and premium outdoor living within the room category.",
    occupancy: "Family",
    view: "Sea View",
    outdoorSpace: "Private pool",
    size: "Approximate size available on request",
    highlights: [
      "Family-focused layout",
      "Private pool",
      "Sea view orientation",
      "More flexible stay experience",
    ],
    amenities: [
      "Family-friendly layout",
      "En-suite bathroom",
      "Private pool",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Coffee facilities",
      "Smart TV",
      "In-room safe",
    ],
  },
  {
    slug: "executive-room-private-pool-sea-view",
    title: "Executive Room – Private Pool – Sea View",
    category: "room",
    shortDescription:
      "A more elevated room category with private pool and enhanced comfort.",
    description:
      "A premium room option that strengthens the sense of exclusivity through private pool living and more elevated spatial comfort.",
    occupancy: "Up to 2 guests",
    view: "Sea View",
    outdoorSpace: "Private pool",
    size: "Approximate size available on request",
    highlights: [
      "Executive room positioning",
      "Private pool experience",
      "Sea-facing stay",
      "Enhanced comfort level",
    ],
    amenities: [
      "Master bedroom",
      "Luxury bathroom",
      "Private pool",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Coffee facilities",
      "Smart TV",
      "In-room safe",
    ],
  },
  {
    slug: "family-duplex-private-pool-sea-view",
    title: "Family Duplex – Private Pool – Sea View",
    category: "room",
    shortDescription:
      "A two-level family room format with private pool and sea view.",
    description:
      "A duplex-style room category designed for families who need more flexibility, stronger separation of space, and premium outdoor living.",
    occupancy: "4 adults or 2 adults and 2 children from 6–12 yo",
    view: "Sea View",
    outdoorSpace: "Private pool and furnished veranda",
    size: "66 m² interior",
    interiorSize: "66 m²",
    exteriorSize: "30 m² private furnished veranda with dining table & chairs",
    poolSize: "15 m² fresh-water pool with sunbeds & outdoors shower",
    beds: "1 with double/twin beds and 1 with double sofa bed",
    extraBeds: "One extra bed or baby crib on request",
    checkIn: "15:00",
    checkOut: "11:00",
    highlights: [
      "Duplex layout",
      "Family-oriented stay",
      "Private pool",
      "Sea view setting",
    ],
    amenities: [
      "Two-level layout",
      "Family flexibility",
      "Private pool",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Coffee facilities",
      "Smart TV",
      "In-room safe",
    ],
  },
  {
    slug: "premium-room-private-pool-sea-view",
    title: "Premium Room – Private Pool – Sea View",
    category: "room",
    shortDescription:
      "A premium room category centered around privacy, refinement, and sea-view outdoor living.",
    description:
      "A higher-end room experience combining premium positioning, private pool living, and refined design language.",
    occupancy: "Up to 2 guests",
    view: "Sea View",
    outdoorSpace: "Private pool",
    size: "Approximate size available on request",
    highlights: [
      "Premium room positioning",
      "Private pool",
      "Sea view orientation",
      "Quiet luxury atmosphere",
    ],
    amenities: [
      "Master bedroom",
      "Luxury bathroom",
      "Private pool",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Coffee facilities",
      "Smart TV",
      "In-room safe",
    ],
  },
  {
    slug: "two-bedroom-interconnecting-rooms-private-pool-sea-view",
    title: "Two Bedroom Interconnecting Rooms – Private Pool – Sea View",
    category: "room",
    shortDescription:
      "An interconnecting room format with private pool, ideal for families or groups needing greater flexibility.",
    description:
      "This category offers a more practical yet premium stay format for larger groups or families, combining interconnection, private pool, and sea view.",
    occupancy: "4 persons",
    view: "Sea View",
    outdoorSpace: "Private pool and furnished veranda",
    size: "66 m² interior",
    interiorSize: "66 m²",
    exteriorSize: "30 m² private furnished veranda with dining table & chairs",
    poolSize: "15 m² fresh-water pool with sunbeds & outdoors shower",
    beds: "Two Queen beds or one Queen bed and two single beds",
    extraBeds: "One extra bed or baby crib on request",
    checkIn: "15:00",
    checkOut: "11:00",
    highlights: [
      "Two-bedroom format",
      "Interconnecting layout",
      "Private pool",
      "Sea-facing stay",
    ],
    amenities: [
      "Two connected rooms",
      "En-suite bathrooms",
      "Private pool",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Coffee facilities",
      "Smart TV",
      "In-room safe",
    ],
  },
  {
    slug: "family-retreat-room-private-pool-sea-view",
    title: "Family Retreat Room – Private Pool – Sea View",
    category: "room",
    shortDescription:
      "A flexible family-focused room category with private pool and sea view.",
    description:
      "A spacious room format designed for family stays, with two master bedrooms connected by a discreet middle door, en-suite bathrooms, wardrobes, and a living area with two unfoldable sofa beds.",
    occupancy: "Family",
    view: "Sea View",
    outdoorSpace: "Private veranda and private pool",
    size: "Approximate size available on request",
    highlights: [
      "Two master bedrooms",
      "Private pool",
      "Sea view orientation",
      "Family retreat concept",
    ],
    amenities: [
      "Two master bedrooms",
      "En-suite bathrooms",
      "Living area with two unfoldable sofa beds",
      "Private pool",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Coffee facilities",
      "Smart TV",
    ],
  },
  {
    slug: "prestige-3-bedroom-family-pool-suite-sea-view",
    title: "Prestige 3 Bedroom Family Pool Suite – Sea View",
    category: "suite",
    shortDescription:
      "A high-capacity family suite with private pool and panoramic sea-oriented experience.",
    description:
      "A large-format suite designed for family luxury stays, combining capacity, seclusion, and premium poolside living with sea view.",
    occupancy: "6 persons",
    view: "Sea View",
    outdoorSpace: "40 m² with panoramic sea & mountain views",
    size: "125 m² interior spaces",
    interiorSize: "125 m² (First floor 30 m² – Ground floor 45 m² – Lower level 45 m²)",
    exteriorSize: "40 m² with panoramic sea & mountain views",
    poolSize: "15 m² fresh-water pool with sunbeds & outdoors shower",
    beds: "2 King size in 2 bedrooms. One half double bed on the basement level",
    extraBeds: "One extra bed or baby crib on request",
    checkIn: "15:00",
    checkOut: "11:00",
    highlights: [
      "3-bedroom suite format",
      "Family-oriented luxury stay",
      "Private pool",
      "Sea view setting",
    ],
    amenities: [
      "Three-bedroom layout",
      "Luxury bathrooms",
      "Private pool",
      "Outdoor sitting & dining area",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Coffee facilities",
      "Smart TV",
    ],
  },
  {
    slug: "executive-suite-private-pool-sea-view",
    title: "Executive Suite – Private Pool – Sea View",
    category: "suite",
    shortDescription:
      "A premium suite category with private pool and a more elevated spatial experience.",
    description:
      "A refined suite experience featuring a master bedroom, cozy sitting area, integrated en-suite wardrobe, and living area with two unfoldable sofa beds for up to two extra guests.",
    occupancy: "2 + 2 persons",
    view: "Sea View",
    outdoorSpace: "45 m² private furnished veranda with dining table and chairs",
    size: "50 m² interior",
    interiorSize: "50 m²",
    exteriorSize: "45 m² private furnished veranda with dining table and chairs",
    poolSize: "Fresh-water pool with sunbeds & outdoors shower",
    beds: "One Queen or two single beds",
    extraBeds: "Two sofa beds or baby crib on request",
    checkIn: "15:00",
    checkOut: "11:00",
    poolHeatingPolicy:
      "Pool heating is available at a fee of €60 per day. Water temperature can reach up to 26 °C, depending on the outdoor temperature.",
    highlights: [
      "Executive suite positioning",
      "Private pool experience",
      "Sea-facing stay",
      "Premium suite atmosphere",
    ],
    amenities: [
      "Master bedroom",
      "Living area",
      "Private pool",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Coffee & tea facilities",
      "Smart TV – Satellite channels",
      "Safe deposit box",
    ],
  },
  {
    slug: "grand-suite-two-private-pools-sea-view",
    title: "Grand Suite – Two Private Pools – Sea View",
    category: "suite",
    shortDescription:
      "A flagship suite format with two private pools, sea view, and the strongest sense of exclusivity.",
    description:
      "One of the most elevated suite offerings in the accommodation collection, with two luxurious master bedrooms, en-suite bathrooms, custom wardrobes, and two distinct private pool areas.",
    occupancy: "4 persons",
    view: "Sea & mountain view",
    outdoorSpace: "115 m² with panoramic sea & mountain view",
    size: "90 m² interior",
    interiorSize: "90 m²",
    exteriorSize: "115 m² with panoramic sea & mountain view",
    poolSize: "2 × 15 m² fresh-water pools with sunbeds & outdoors shower",
    beds: "Two King size beds",
    checkIn: "15:00",
    checkOut: "11:00",
    poolHeatingPolicy:
      "Pool heating is available at a fee of €60 per day. Water temperature can reach up to 26 °C, depending on the outdoor temperature.",
    highlights: [
      "Grand suite positioning",
      "Two private pools",
      "Sea-facing luxury stay",
      "Highest suite-level exclusivity",
    ],
    amenities: [
      "Two master bedrooms",
      "En-suite bathrooms",
      "Two private pools",
      "Outdoor sitting & dining area",
      "High-speed Wi-Fi",
      "Air conditioning",
      "Coffee facilities",
      "Smart TV",
    ],
  },
];

export const roomItems = accommodationItems.filter(
  (item) => item.category === "room"
);

export const suiteItems = accommodationItems.filter(
  (item) => item.category === "suite"
);