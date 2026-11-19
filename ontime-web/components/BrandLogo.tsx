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
    <Link href="/" className="flex items-center gap-3 group" aria-label="On Time Private Limited – Home">
      {/* Logo mark inside a soft white circle */}
      <span className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo.png"
          alt=""
          width={44}
          height={44}
          className="object-contain w-[88%] h-auto"
          priority
        />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
          On Time<span className="text-sky-500">.</span>
        </span>
      </span>
    </Link>
  );
}
