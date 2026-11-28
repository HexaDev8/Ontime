/**
 * @file components/BrandLogo.tsx
 * @description Reusable brand mark (logo image + wordmark) linking to the homepage.
 *
 * Props:
 * - `showTagline` (optional): renders the small "Property Care" tagline under the name.
 *
 * Server Component — no client JS is shipped for it.
 */

import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  showTagline?: boolean;
}

export function BrandLogo({ showTagline = false }: BrandLogoProps) {
  return (
    <Link href="/" className="flex items-center group" aria-label="On Time Private Limited – Home">
      <Image
        src="/images/logo.png"
        alt="On Time Logo"
        width={160}
        height={56}
        className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </Link>
  );
}
