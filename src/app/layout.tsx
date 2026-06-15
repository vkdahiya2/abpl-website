import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "ABPL – Aashna Buildwell Pvt. Ltd. | Plots in Kharkhoda, Sonipat, Delhi NCR",
    template: "%s | ABPL – Aashna Buildwell",
  },
  description:
    "Buy DTCP-approved residential plots in gated societies in Kharkhoda, Sonipat, Gurugram, Noida & Delhi NCR. NV City Sector 6 on KMP Expressway. 130 & 179 sq. yd plots. Where Commitment Is Priority.",
  keywords: [
    "plots in Kharkhoda", "plots in Sonipat", "residential plots Delhi NCR",
    "DTCP approved plots Haryana", "gated society plots", "NV City Sector 6",
    "KMP Expressway plots", "buy plot near Delhi", "Aashna Buildwell", "ABPL"
  ],
  metadataBase: new URL("https://aashnabuildwell.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aashnabuildwell.com",
    siteName: "ABPL – Aashna Buildwell Pvt. Ltd.",
    title: "ABPL – Residential Plots in Kharkhoda, Sonipat, Delhi NCR",
    description: "DTCP-approved gated society plots in the NCR/Haryana belt. NV City Sector 6, Nextra City, MIT Industrial Township.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="pt-[70px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
