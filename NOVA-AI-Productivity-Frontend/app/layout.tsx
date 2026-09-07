import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA | AI Productivity Platform",
  description: "NOVA helps teams manage projects, automate repetitive work and collaborate efficiently with AI.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
