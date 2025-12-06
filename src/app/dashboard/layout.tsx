import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "학부모 대시보드",
  description:
    "자녀의 디지털 활동을 한눈에 파악하고, AI가 분석한 안전 점수와 인사이트를 확인하세요. 위협 감지 현황, 학습 진행률, 대화 주제 추천까지 제공합니다.",
  openGraph: {
    title: "학부모 대시보드 | 가디언즈 렌즈",
    description:
      "자녀의 디지털 안전을 한눈에 - AI 기반 위협 감지 및 인사이트 대시보드",
    images: ["/og-image.png"],
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
