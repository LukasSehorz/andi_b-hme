import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "INNNatur · Praxis für Sportphysiotherapie & Heilpraktik in Mühldorf am Inn",
    template: "%s · INNNatur Mühldorf",
  },
  description:
    "Praxis INNNatur in Mühldorf am Inn. Als Sportphysiotherapeut und Heilpraktiker verbinde ich über 30 Jahre Erfahrung aus Spitzensport und Therapie. Manuelle Therapie, Applied Kinesiology, Sportphysiotherapie nach DOSB-Standard und mehr.",
  keywords: [
    "Physiotherapie Mühldorf",
    "Sportphysiotherapie",
    "Heilpraktiker Mühldorf",
    "Manuelle Therapie",
    "Applied Kinesiology",
    "Andy Böhme",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=sentient@300,301,400,401,500,501&f[]=switzer@400,401,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
