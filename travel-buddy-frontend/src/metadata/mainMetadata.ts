export interface SimpleMeta {
  title: string;
  description?: string;
  keywords?: string[];
  authors?: { name: string }[];
  creator?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: { url: string; width?: number; height?: number; alt?: string }[];
    locale?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    creator?: string;
    images?: string[];
  };
}

export const mainMeta: SimpleMeta = {
  title: "Travel Buddy | Discover & Book Hotels, Tours & Experiences",
  description:
    "Travel Buddy helps you discover and book hotels, tours, and travel experiences. Search hotels, compare prices, read reviews, and make secure reservations—easy planning for your next trip.",
  keywords: [
    "Travel Buddy",
    "travel",
    "hotels",
    "hotel booking",
    "tours",
    "travel deals",
    "destinations",
    "travel planner",
    "bookings",
    "reservations",
    "travel reviews",
    "vacation packages",
  ],
  authors: [{ name: "Travel Buddy" }],
  creator: "Travel Buddy",
  openGraph: {
    title: "Travel Buddy | Hotels, Tours & Travel Experiences",
    description:
      "Find and book hotels, tours, and travel experiences with trusted reviews and secure reservations.",
    url: "https://travel-buddy.example.com",
    siteName: "Travel Buddy",
    images: [
      {
        url: "https://travel-buddy.example.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Travel Buddy - Hotels & Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Buddy | Discover & Book Hotels & Tours",
    description:
      "Search, compare and book hotels and tours with Travel Buddy — your travel planning companion.",
    creator: "@travelbuddy",
    images: ["https://travel-buddy.example.com/og-image.png"],
  },
};

/**
 * Helper to merge overrides with the default metadata for use in the pages router.
 * Usage: const pageMeta = getMeta({ title: 'Page title', description: '...' })
 */
export function getMeta(overrides: Partial<SimpleMeta> = {}): SimpleMeta {
  return {
    ...mainMeta,
    ...overrides,
    openGraph: {
      ...(mainMeta.openGraph || {}),
      ...(overrides.openGraph || {}),
    },
    twitter: { ...(mainMeta.twitter || {}), ...(overrides.twitter || {}) },
  };
}

export default mainMeta;
