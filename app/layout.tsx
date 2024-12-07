import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "DevLog",
  description: "Blog Page for Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-700">{children}</body>
    </html>
  );
}
