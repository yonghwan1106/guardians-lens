import type { Metadata } from "next";
import SimulationLayoutClient from "./SimulationLayoutClient";

export const metadata: Metadata = {
  title: {
    template: "%s | 가디언즈 렌즈 시뮬레이션",
    default: "시뮬레이션 체험",
  },
  description:
    "가디언즈 렌즈의 AI 보호 기능을 직접 체험해보세요. 유튜브형 댓글 보호, 뉴스 용어 해설, 메신저 그루밍 탐지 시뮬레이션을 제공합니다.",
};

export default function SimulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SimulationLayoutClient>{children}</SimulationLayoutClient>;
}
