import type { Metadata } from "next";
import { Inter as FontSans, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const roboto = Montserrat({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: "Kenroz | School App for managing students, teachers and parents.",
  description: "Kenroz is a school app for managing students, teachers and parents.",
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
          "min-h-screen bg-background font-sans antialiased",
          roboto.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
