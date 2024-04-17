import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  {label: "Home", href: "/"},
  {label: "Products", href: "/products"},
  {label: "Cart", href: "/cart"},
  {label: "Services", href: "/services"},
  {label: "Contact", href: "/contact"},
];