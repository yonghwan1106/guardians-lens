import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3b82f6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://guardians-lens.vercel.app"),
  title: {
    default: "가디언즈 렌즈 - 아이의 디지털 안전을 지키는 AI 에이전트",
    template: "%s | 가디언즈 렌즈",
  },
  description:
    "사이버 불링, 그루밍, 피싱 등 온라인 위험으로부터 아이를 보호하고, 어려운 용어를 쉽게 설명해주며, 건강한 디지털 시민으로 성장하도록 돕는 AI 아동권리 증강 에이전트입니다.",
  keywords: [
    "아동보호",
    "사이버불링",
    "온라인안전",
    "그루밍방지",
    "디지털시민",
    "AI에이전트",
    "아동권리",
    "학부모대시보드",
  ],
  authors: [{ name: "Creative Nexus Team" }],
  creator: "Creative Nexus",
  publisher: "Creative Nexus",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://guardians-lens.vercel.app",
    siteName: "가디언즈 렌즈",
    title: "가디언즈 렌즈 - 아이의 디지털 안전을 지키는 AI 에이전트",
    description:
      "단순 차단이 아닌, 맥락을 이해하고 설명하며 교육하는 새로운 아동 보호 솔루션",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "가디언즈 렌즈 - AI 아동권리 증강 에이전트",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "가디언즈 렌즈 - 아이의 디지털 안전을 지키는 AI 에이전트",
    description:
      "사이버 불링, 그루밍, 피싱으로부터 아이를 보호하는 AI 솔루션",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
