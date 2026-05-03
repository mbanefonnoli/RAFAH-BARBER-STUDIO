import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Rafah Barber Studio | Constanța",
  description: "Frizerie premium în Constanța. Tunsori, barbă, tratamente. Programări via WhatsApp.",
  openGraph: {
    title: "Rafah Barber Studio",
    description: "Premium barbershop in Constanța, Romania.",
    url: "https://[TODO: DOMAIN]",
    siteName: "Rafah Barber Studio",
    images: [{ url: "https://[TODO: DOMAIN]/og-image.jpg", width: 1200, height: 630 }],
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Barber",
    "name": "Rafah Barber Studio",
    "image": "https://[TODO: DOMAIN]/og-image.jpg",
    "url": "https://[TODO: DOMAIN]",
    "telephone": "+40723430698",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strada Ion Gheorghe Duca 12",
      "addressLocality": "Constanța",
      "addressRegion": "Constanța",
      "postalCode": "900001",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.1733",
      "longitude": "28.6383"
    },
    "openingHoursSpecification": [
      // [TODO: ADD OPENING HOURS OBJECTS]
    ],
    "sameAs": [
      "https://www.instagram.com/rafah_barberstudio",
      "https://www.instagram.com/rafah_barberstudio/"
    ],
    "priceRange": "RON"
  };

  return (
    <html lang="ro" translate="no" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-body bg-brand-bg text-brand-text antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

