import { STORE_LOCATIONS } from "@/lib/locations";
import { SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_URL } from "@/lib/site";

function localBusiness(location: (typeof STORE_LOCATIONS)[number]) {
  return {
    "@type": "DryCleaningOrLaundry",
    "@id": `${SITE_URL}/#${location.id}`,
    name: `${SITE_NAME} — ${location.name}`,
    image: `${SITE_URL}/brand-logo.png`,
    url: SITE_URL,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.addressLine,
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.id === "geetabhawan" ? 22.7146355 : 22.711536,
      longitude: location.id === "geetabhawan" ? 75.894479 : 75.9140292,
    },
    hasMap: location.mapsUrl,
    priceRange: "₹₹",
    areaServed: {
      "@type": "City",
      name: "Indore",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Schema.org JSON-LD for site-wide SEO (LocalBusiness + WebSite). */
export function getSiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/brand-logo.png`,
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
        sameAs: STORE_LOCATIONS.map((s) => s.mapsUrl),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE_PHONE,
          email: SITE_EMAIL,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "Premium laundry and dry cleaning with doorstep pickup and delivery in Indore, Madhya Pradesh.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
      },
      ...STORE_LOCATIONS.map(localBusiness),
    ],
  };
}
