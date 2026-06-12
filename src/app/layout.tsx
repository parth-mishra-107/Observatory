import type { Metadata } from "next";
import StarBackground from "@/components/StarBackground";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Observatory",
  description: "Explore the universe with NASA APIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
  <StarBackground />
  <Navbar />
  {children}
</body>
    </html>
  );
}