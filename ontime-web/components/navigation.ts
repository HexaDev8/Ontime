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
  { name: "Contact Us", href: "#contact" },
];

/** Hotline used in every "Call" button. Update once here. */
export const PHONE_HREF = "tel:+447438463543";
export const PHONE_DISPLAY = "+44 7438 463543";
export const EMAIL_ADDRESS = "ontime.inf@yahoo.com";
export const ADDRESS_TEXT = "29, Carlisle Road, Southampton";
export const SERVICE_AREA = "Southampton";
export const WORKING_HOURS = "Monday to Saturday 9am to 5pm";
