import type { Metadata } from "next";
import "./globals.css";

const SEO = "/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/seo";

export const metadata: Metadata = {
  title: "OURCERITA.CO | YOUR AESTHETIC WEDDING CONTENT",
  openGraph: {
    title: "OURCERITA.CO | YOUR AESTHETIC WEDDING CONTENT",
    type: "website",
  },
  icons: {
    icon: [
      { url: `${SEO}/favicon.png` },
      { url: `${SEO}/icon-192.png`, sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-[rgb(93,23,24)]">{children}</body>
    </html>
  );
}
