import type { Metadata } from "next";
import { Exo_2, Alegreya_Sans } from "next/font/google";
import "./globals.css";
import NavMenu from "./components/NavMenu";
import Footer from "./sections/Footer";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SKIF Karate Canada",
  description: "Karate Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.variable} ${alegreyaSans.variable} antialiased`}>
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
