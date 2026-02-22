import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Freelance Rate Calculator - Calculate Your Hourly Rate",
  description: "Free tool to calculate your ideal freelance hourly rate based on desired salary, expenses, taxes, and unpaid time. Find out what to charge clients.",
  keywords: "freelance rate calculator, hourly rate calculator, freelance pricing, contractor rate calculator",
  openGraph: {
    title: "Freelance Rate Calculator",
    description: "Calculate your ideal freelance hourly rate based on salary goals and expenses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}