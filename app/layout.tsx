import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florian Leborgne — Développeur Fullstack Junior",
  description:
    "Portfolio de Florian Leborgne, Développeur Fullstack diplômé d'un Master Informatique. Conception d'applications web modernes, performantes et maintenables.",
  keywords: [
    "Florian Leborgne",
    "Développeur Fullstack",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Hauts-de-France",
  ],
  authors: [{ name: "Florian Leborgne" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground transition-colors duration-500">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}