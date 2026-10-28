import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Domínio configurável para quando o endereço oficial for aprovado
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://veltrix.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VELTRIX | Desenvolvimento de Sites, Aplicativos e Sistemas",
    template: "%s | VELTRIX",
  },
  description:
    "A VELTRIX desenvolve sites, aplicativos e sistemas personalizados, unindo tecnologia e design para transformar ideias em soluções digitais.",
  keywords: [
    "VELTRIX",
    "desenvolvimento de sites",
    "aplicativos móveis",
    "sistemas de gestão",
    "plataformas personalizadas",
    "design de interfaces",
    "tecnologia com identidade",
    "protótipo gratuito",
  ],
  authors: [{ name: "VELTRIX - Tecnologia com Identidade" }],
  creator: "VELTRIX",
  publisher: "VELTRIX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "VELTRIX",
    title: "VELTRIX | Desenvolvimento de Sites, Aplicativos e Sistemas",
    description:
      "A VELTRIX desenvolve sites, aplicativos e sistemas personalizados, unindo tecnologia e design para transformar ideias em soluções digitais.",
    images: [
      {
        url: "/imagens/marca/banner-completo-veltrix.png",
        width: 1942,
        height: 809,
        alt: "VELTRIX - Tecnologia com Identidade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VELTRIX | Desenvolvimento de Sites, Aplicativos e Sistemas",
    description:
      "A VELTRIX desenvolve sites, aplicativos e sistemas personalizados, unindo tecnologia e design para transformar ideias em soluções digitais.",
    images: ["/imagens/marca/banner-completo-veltrix.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/imagens/marca/simbolo-veltrix-transparente.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/imagens/marca/simbolo-veltrix-transparente.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030817",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#030817] text-white min-h-screen selection:bg-[#00C8FF]/20 selection:text-[#00C8FF]">
        {children}
      </body>
    </html>
  );
}
