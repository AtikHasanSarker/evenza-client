import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import { Providers } from "@/providers/providers";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evenza | Discover & Manage Events",
  description:
    "Discover local events, manage your bookings, and analyze your publications with our premium management dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
