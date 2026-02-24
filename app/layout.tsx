import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Senior Tech Lead II",
  description: "Senior Tech Lead II at educative.io. AI enthusiast, React and Python developer, and n8n workflow builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} antialiased font-sans bg-[#030303] text-neutral-50`}
        suppressHydrationWarning
      >
        <AnimatedBackground />
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
