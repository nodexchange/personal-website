import type { Metadata } from "next";
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
  title: "Martin Wojtala | Engineering Leader",
  description:
    "Engineering Leader, Quality Architect, and Innovation Catalyst. Building high-performing global teams with a quality-first culture.",
  keywords: [
    "Engineering Leader",
    "VP Engineering",
    "Head of Engineering",
    "Quality Engineering",
    "Chaos Engineering",
    "Agentic Development",
    "Global Teams",
  ],
  authors: [{ name: "Martin Wojtala" }],
  metadataBase: new URL("https://marcinwojtala.com"),
  openGraph: {
    title: "Martin Wojtala | Engineering Leader",
    description:
      "Engineering Leader, Quality Architect, and Innovation Catalyst. Building high-performing global teams with a quality-first culture.",
    type: "website",
    siteName: "Martin Wojtala",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Wojtala | Engineering Leader",
    description:
      "Engineering Leader, Quality Architect, and Innovation Catalyst. Building high-performing global teams with a quality-first culture.",
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
      </body>
    </html>
  );
}
