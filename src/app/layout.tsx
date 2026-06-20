import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    default: "ABPL – Aashna Buildwell Pvt. Ltd. | Premium Real Estate Developer",
    template: "%s | ABPL – Aashna Buildwell",
  },
  description:
    "Aashna Buildwell Pvt. Ltd. — Premium residential plots, independent floors and industrial developments backed by 20+ years of trust and complete legal clarity.",
  keywords: [
    "ABPL", "Aashna Buildwell", "residential plots", "independent floors",
    "RERA approved", "gated society", "Swastik Homes", "real estate developer",
    "premium real estate", "NV City"
  ],
  metadataBase: new URL("https://aashnabuildwell.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aashnabuildwell.com",
    siteName: "ABPL – Aashna Buildwell Pvt. Ltd.",
    title: "ABPL – Premium Real Estate Developer",
    description: "RERA-approved residential plots, independent floors, and industrial developments by Aashna Buildwell Pvt. Ltd.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ScrollReveal />
        <Navbar />
        <main className="pt-[70px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
