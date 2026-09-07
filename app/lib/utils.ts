import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utilitaire standard Next.js / Tailwind pour combiner les classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Service de capture d'écran dynamique pour les sites "live"
export function getWebsiteScreenshot(url: string): string {
  if (!url) return "";
  
  // Option 1 : Microlink (Très bonne qualité, gère le responsive)
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;


}