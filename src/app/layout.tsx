import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GENTONER | Expertos en Toner, Refacciones y Soporte Técnico",
  description: "B2B/B2C leader in printer consumables and tech support in Mexico. Premium quality toners, spare parts, and certified maintenance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable} antialiased font-sans text-brand-dark bg-brand-light flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
