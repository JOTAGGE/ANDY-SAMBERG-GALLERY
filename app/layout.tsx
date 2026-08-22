import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://andy-samberg-gallery.jg-barros-dsantos.chatgpt.site"),
  title: "Andy Samberg Gallery",
  description: "An immersive, unofficial gallery of Andy Samberg’s defining performances, characters and comedy projects.",
  openGraph: { title: "Andy Samberg Gallery", description: "Every project is a new scene. Explore the career of Andy Samberg.", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Andy Samberg Gallery — Every project is a new scene" }] },
  twitter: { card: "summary_large_image", title: "Andy Samberg Gallery", description: "Every project is a new scene.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
