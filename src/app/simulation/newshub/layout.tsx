import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NewsHub - 뉴스 용어 해설",
  description:
    "뉴스 기사의 어려운 용어를 아이 눈높이에 맞게 쉽게 설명해주는 AI 기능을 체험해보세요.",
  openGraph: {
    title: "NewsHub 시뮬레이션 | 가디언즈 렌즈",
    description: "어려운 뉴스 용어를 쉽게 - AI 맥락 기반 용어 해설",
    images: ["/og-image.png"],
  },
};

export default function NewsHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
