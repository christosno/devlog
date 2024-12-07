import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
