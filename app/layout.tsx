import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Gatekeeper from "@/components/Gatekeeper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOIR — Boutique Streetwear",
  description: "Pièces streetwear sélectionnées : vestes, sweats, sneakers et accessoires.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="relative flex min-h-full flex-col bg-[#0c0d10] text-zinc-100"
        suppressHydrationWarning
      >
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[560px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(210,225,255,0.04),transparent_70%)]"
        />
        <CartProvider>
          <Gatekeeper>{children}</Gatekeeper>
        </CartProvider>
      </body>
    </html>
  );
}
