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
        className="relative flex min-h-full flex-col bg-[#f6f6f5] text-zinc-950"
        suppressHydrationWarning
      >
        <CartProvider>
          <Gatekeeper>{children}</Gatekeeper>
        </CartProvider>
      </body>
    </html>
  );
}
