import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Utkarsh Srivastava | Full Stack Developer & AI Innovator",
  description: "Portfolio of Utkarsh Srivastava — Full Stack Developer, AI Innovator, and UI/UX Designer specializing in scalable web applications and intelligent systems.",
  keywords: ["Full Stack Developer", "AI Innovator", "Web Developer", "MERN Stack", "Next.js", "React", "Utkarsh Srivastava"],
  authors: [{ name: "Utkarsh Srivastava" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utkarshsrivastava.me",
    title: "Utkarsh Srivastava | Full Stack Developer & AI Innovator",
    description: "Building scalable, intelligent, and user-centric digital experiences through code and creativity.",
    siteName: "Utkarsh Srivastava Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-accent/30 selection:text-white",
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
