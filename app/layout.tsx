import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Aweb Barouni | Software Engineer Portfolio",
  description: "Aweb Barouni - Software Engineer specialized in frontend and backend development. Explore my portfolio and projects.",
  keywords: [
    "Aweb Barouni",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Aweb Barouni" }],
  creator: "Aweb Barouni",
  openGraph: {
    title: "Aweb Barouni | Software Engineer Portfolio",
    description:
      "Aweb Barouni - Software Engineer specialized in frontend and backend development. Explore my portfolio and projects.",
    url: "https://awebbarouni.vercel.app",
    siteName: "Aweb Barouni",
  },
  verification: {
    google: "4eD-DA66RmA5HmsLqx9J5IcpJVvuHQ7a8k_MQrbBFXU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
        overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
