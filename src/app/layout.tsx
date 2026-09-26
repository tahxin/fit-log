import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { WorkoutProvider } from "@/context/WorkoutContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "FitLog is a workout library that helps you stay motivated and track your progress.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-black text-white">
        <WorkoutProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </WorkoutProvider>
      </body>
    </html>
  );
}