import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "zeyi-liu-academic.lauzeyi621.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const imageUrl = `${protocol}://${host}/og.png`;
  const title = "Zeyi Liu | Academic Homepage";
  const description =
    "Academic homepage of Zeyi Liu, researching embodied intelligence, reinforcement learning, and industrial AI.";

  return {
    title,
    description,
    icons: { icon: "/profile.jpg", shortcut: "/profile.jpg" },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: imageUrl, width: 1732, height: 908, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
