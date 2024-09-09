import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Footer from "./Footer";

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
  title: "Symphonie Sophie | Aroma Massage & Beratung Berlin",
  description: "Studio Symphonie Sophie bietet Aroma Massagen & Beratung an, sowie Beratung zum Einsatz von ätherischen Ölen in Berlin-Neukölln.",
  openGraph: {
    title: "Symphonie Sophie | Aroma Massage & Beratung Berlin",
    description: "Studio Symphonie Sophie bietet Aroma Massagen & Beratung an, sowie Beratung zum Einsatz von ätherischen Ölen in Berlin-Neukölln.",
    url: "https://symphonie-sophie.de/",
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
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images.url} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <body className={`${notoSans.variable} antialiased`}>
        {/* Navigation */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
