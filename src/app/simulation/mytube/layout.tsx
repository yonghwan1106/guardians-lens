import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyTube - 유해 댓글 보호",
  description:
    "유튜브와 유사한 환경에서 AI가 사이버 불링, 악성 댓글을 실시간으로 감지하고 차단하는 기능을 체험해보세요.",
  openGraph: {
    title: "MyTube 시뮬레이션 | 가디언즈 렌즈",
    description: "유해 댓글로부터 아이를 보호하는 AI 필터링 체험",
    images: ["/og-image.png"],
  },
};

export default function MyTubeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
