/**
 * @file components/navigation.ts
 * @description Single source of truth for site navigation + contact constants.
 * Both the in-hero navigation (HeroNav) and the floating scrolled Navbar read
 * from here, so adding/removing a link only needs to happen in one place.
 */

export interface NavItem {
  /** Visible link label */
  name: string;
  /** In-page anchor (section id) or route */
  href: string;
}

export const navLinks: NavItem[] = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Our Work", href: "#gallery" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
];

/** Hotline used in every "Call" button. Update once here. */
export const PHONE_HREF = "tel:+94770000000";
export const PHONE_DISPLAY = "+94 (77) 000-0000";
