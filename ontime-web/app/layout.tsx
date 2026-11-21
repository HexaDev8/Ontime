import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/** Geometric sans close to the reference design; self-hosted by next/font. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0ea5e9",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ontimelimited.com"),
  title: {
    default: "On Time Private Limited | Professional Property Care, Cleaning & Maintenance",
    template: "%s | On Time Private Limited",
  },
  description:
    "On Time Private Limited delivers certified property maintenance, professional cleaning for offices, houses, and student apartments, electrical wiring and plumbing repairs, and electrical equipment installation.",
  keywords: [
    "On Time Private Limited",
    "Professional Cleaning Services",
    "Office Cleaning",
    "Student Apartment Cleaning",
    "Electrical Repairs",
    "Plumbing Maintenance",
    "Equipment Installation",
    "Washing Machine Installation",
    "Television Mounting",
    "Property Care Southampton",
    "Southampton Maintenance",
  ],
  authors: [{ name: "On Time Private Limited" }],
  creator: "On Time Private Limited",
  publisher: "On Time Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ontimelimited.com",
    title: "On Time Private Limited | Professional Cleaning, Electrical, Plumbing & Equipment Setup",
    description:
      "Reliable property care and maintenance on your schedule. Expert cleaning, licensed electrical/plumbing works, and appliance installation.",
    siteName: "On Time Private Limited",
    images: [
      {
        url: "/images/services/cleaning-main.jpg",
        width: 1200,
        height: 630,
        alt: "On Time Private Limited Property Care Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "On Time Private Limited | Property Care & Maintenance",
    description:
      "Punctual, certified property maintenance: cleaning, electrical, plumbing, and equipment setup.",
    images: ["/images/services/cleaning-main.jpg"],
  },
  alternates: {
    canonical: "https://ontimelimited.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              // Immediately reset scroll position before browser renders
              window.scrollTo(0, 0);
              // Clean any URL hash from previous button clicks on fresh load/reload
              if (window.location.hash) {
                history.replaceState(null, '', window.location.pathname);
              }
              window.addEventListener('pageshow', function() {
                window.scrollTo(0, 0);
              });
              window.addEventListener('load', function() {
                window.scrollTo(0, 0);
              });
            `,
          }}
        />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
