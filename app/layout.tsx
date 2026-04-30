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
  title: "Aweb Barouni | Portfolio",
  description: "Aweb Barouni - software engineer focused on frontend, backend, and full-stack projects.",
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
    title: "Aweb Barouni | Portfolio",
    description:
      "Aweb Barouni - software engineer focused on frontend, backend, and full-stack projects.",
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
