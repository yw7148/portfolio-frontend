import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const wantedSans = localFont({
  src: "../../public/assets/fonts/WantedSansVariable.woff2",
  variable: "--font-wanted-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://youngwon.me"),
  title: {
    default: "Youngwon Kim",
    template: "%s | Youngwon Kim",
  },
  description:
    "Backend engineer focused on Kotlin, Spring, system architecture, infrastructure, and AI service pipelines.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={wantedSans.variable}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
