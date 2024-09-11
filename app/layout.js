import localFont from "next/font/local";
import "./globals.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

const notoSans = localFont({
  src: [
    { path: "./fonts/NotoSans-Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/NotoSans-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/NotoSans-Italic.woff", weight: "400", style: "italic" },
    { path: "./fonts/NotoSans-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/NotoSans-SemiBold.woff", weight: "600", style: "normal" },
    { path: "./fonts/NotoSans-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-noto-sans",
});

export const metadata = {
  charset: 'UTF-8',
  other: {
    'http-equiv': 'Content-Type',
    content: 'text/html; charset=UTF-8'
  },
  title: "Symphonie Sophie | Aroma Massage & Beratung Berlin",
  description: "Studio Symphonie Sophie bietet Aroma Massagen & Beratung an, sowie Beratung zum Einsatz von ätherischen Ölen in Berlin-Neukölln.",
  openGraph: {
    title: "Symphonie Sophie | Aroma Massage & Beratung Berlin",
    description: "Studio Symphonie Sophie bietet Aroma Massagen & Beratung an, sowie Beratung zum Einsatz von ätherischen Ölen in Berlin-Neukölln.",
    url: "https://symphonie-sophie.com/",
    type: "website",
    images: [
      {
        url: "/images/symphonie-sophie-logo-lg_peach.png",
        width: 800,
        height: 600,
        alt: "Symphonie Sophie Logo",
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${notoSans.variable} antialiased relative`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
