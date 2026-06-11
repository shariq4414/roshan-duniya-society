import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roshan Duniya Society | Women Empowerment & Social Welfare NGO",

  description:
    "Roshan Duniya Society is dedicated to women empowerment, education, skill development, health awareness and social welfare initiatives across communities.",

    icons: {
  icon: "/favicon.ico",
},
  keywords: [
    "NGO",
    "Roshan Duniya Society",
    "Women Empowerment",
    "Social Welfare",
    "Education",
    "Skill Development",
    "Health Awareness",
    "Charity",
    "Volunteer",
    "Donation",
  ],

  authors: [
    {
      name: "Roshan Duniya Society",
    },
  ],

  creator: "Roshan Duniya Society",

  openGraph: {
    title: "Roshan Duniya Society",
    description:
      "Empowering women through education, skill development and social welfare initiatives.",

    type: "website",

    locale: "en_IN",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}