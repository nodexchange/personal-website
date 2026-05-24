import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Marcin Wojtala | Engineering Director",
  description:
    "Engineering Director for regulated investment platforms, global product engineering teams, DevSecOps delivery, and safe AI-assisted engineering adoption.",
  keywords: [
    "Engineering Director",
    "VP Engineering",
    "Head of Engineering",
    "Product Engineering",
    "Investment Platforms",
    "Asset Management",
    "Quality Engineering",
    "Chaos Engineering",
    "Agentic Development",
    "Global Teams",
  ],
  authors: [{ name: "Marcin Wojtala" }],
  metadataBase: new URL("https://marcinwojtala.vercel.app"),
  openGraph: {
    title: "Marcin Wojtala | Engineering Director",
    description:
      "Engineering Director for regulated investment platforms, global product engineering teams, DevSecOps delivery, and safe AI-assisted engineering adoption.",
    type: "website",
    siteName: "Marcin Wojtala",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcin Wojtala | Engineering Director",
    description:
      "Engineering Director for regulated investment platforms, global product engineering teams, DevSecOps delivery, and safe AI-assisted engineering adoption.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="theme">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
