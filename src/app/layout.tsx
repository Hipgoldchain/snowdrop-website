import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snowdrop — The AI Opportunity Roadmap for UK small businesses",
  description:
    "Growth systems for small businesses that work in weeks, not months. The AI Opportunity Roadmap — a custom plan plus your first AI agent, built by us. £500 launch price.",
  metadataBase: new URL("https://snowdropgrowth.com"),
  openGraph: {
    title: "Snowdrop — The AI Opportunity Roadmap for UK small businesses",
    description:
      "Growth systems for small businesses that work in weeks, not months. The AI Opportunity Roadmap — a custom plan plus your first AI agent, built by us. £500 launch price.",
    url: "https://snowdropgrowth.com",
    siteName: "Snowdrop",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Snowdrop — Growth systems for small businesses",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snowdrop — The AI Opportunity Roadmap for UK small businesses",
    description:
      "Growth systems for small businesses that work in weeks, not months. The AI Opportunity Roadmap — a custom plan plus your first AI agent, built by us. £500 launch price.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
  other: {
    "theme-color": "#FAFBFC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
