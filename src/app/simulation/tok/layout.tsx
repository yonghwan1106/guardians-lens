import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tok - 메신저 그루밍 탐지",
  description:
    "메신저 환경에서 그루밍, 피싱 등 위험한 대화 패턴을 AI가 감지하고 경고하는 기능을 체험해보세요.",
  openGraph: {
    title: "Tok 시뮬레이션 | 가디언즈 렌즈",
    description: "메신저 그루밍으로부터 아이를 보호하는 AI 탐지 체험",
    images: ["/og-image.png"],
  },
};

export default function TokLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
