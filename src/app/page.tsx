'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  Eye,
  BookOpen,
  MessageCircle,
  ChevronRight,
  Play,
  Users,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: '실시간 유해 콘텐츠 감지',
      description: '사이버 불링, 피싱, 그루밍 등 위험한 콘텐츠를 실시간으로 감지하고 차단합니다.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: '맥락 기반 용어 해설',
      description: '어려운 뉴스 용어를 아이 눈높이에 맞게 쉽게 설명해줍니다.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: '안심 댓글 작성 도우미',
      description: '비속어나 공격적인 표현을 순화된 표현으로 바꿔 제안합니다.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '학부모 대시보드',
      description: '자녀의 디지털 생활을 한눈에 파악하고, 대화 주제를 추천받으세요.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const stats = [
    { value: '99%', label: '유해 콘텐츠 탐지율' },
    { value: '0.3초', label: '평균 분석 속도' },
    { value: '15+', label: '학습 가능한 용어' },
    { value: '4가지', label: '위험 카테고리 분류' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* 헤더 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Shield className="w-8 h-8 text-blue-600" />
            </motion.div>
            <span className="font-bold text-xl text-gray-900">가디언즈 렌즈</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">기능</Link>
            <Link href="#demo" className="text-gray-600 hover:text-gray-900">데모</Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">대시보드</Link>
          </nav>
          <Link href="/simulation/mytube">
            <Button>체험하기</Button>
          </Link>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* 공모전 뱃지 */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-3 mb-6 px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-md">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium text-amber-600 uppercase tracking-wide">2025 공모전 출품작</p>
                    <p className="text-sm font-bold text-gray-800">AI와 함께하는 365일 아동이 행복한 세상</p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl"
                  >
                    ✨
                  </motion.div>
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  아이의 디지털 세상을<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    안전하게 지켜주는
                  </span><br />
                  AI 에이전트
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                  단순한 차단을 넘어, <strong>맥락을 이해하고</strong>, <strong>설명하며</strong>, <strong>교육하는</strong>{' '}
                  새로운 아동 보호 솔루션. 가디언즈 렌즈가 아이의 디지털 권리를 증강합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/simulation/mytube">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Play className="w-5 h-5 mr-2" />
                      시뮬레이션 체험하기
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      학부모 대시보드 보기
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* 히어로 일러스트 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-500">
                      www.mytube.com
                    </div>
                  </div>

                  {/* 시뮬레이션 미리보기 */}
                  <div className="space-y-4">
                    {/* 마인크래프트 스타일 중세 성 일러스트 */}
                    <div className="relative bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200 rounded-xl aspect-video overflow-hidden">
                      {/* 구름 */}
                      <div className="absolute top-3 left-6 w-12 h-5 bg-white rounded-full opacity-90" />
                      <div className="absolute top-2 left-10 w-8 h-4 bg-white rounded-full opacity-90" />
                      <div className="absolute top-4 right-8 w-10 h-4 bg-white rounded-full opacity-80" />

                      {/* 태양 */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-300 rounded-sm border-2 border-yellow-400" />

                      {/* 마인크래프트 성 */}
                      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                        {/* 탑 */}
                        <div className="flex gap-8">
                          <div className="flex flex-col items-center">
                            <div className="w-2 h-3 bg-gray-800" />
                            <div className="w-6 h-8 bg-stone-400 border border-stone-500" />
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-2 h-3 bg-gray-800" />
                            <div className="w-6 h-8 bg-stone-400 border border-stone-500" />
                          </div>
                        </div>
                        {/* 성벽 */}
                        <div className="flex items-end">
                          <div className="w-20 h-10 bg-stone-400 border border-stone-500 flex items-end justify-center">
                            <div className="w-5 h-6 bg-amber-800 border border-amber-900" />
                          </div>
                        </div>
                      </div>

                      {/* 나무 */}
                      <div className="absolute bottom-[15%] left-4 flex flex-col items-center">
                        <div className="w-6 h-6 bg-green-600 rounded-sm" />
                        <div className="w-2 h-3 bg-amber-700" />
                      </div>
                      <div className="absolute bottom-[15%] right-6 flex flex-col items-center">
                        <div className="w-5 h-5 bg-green-700 rounded-sm" />
                        <div className="w-2 h-3 bg-amber-800" />
                      </div>

                      {/* 잔디 블록 바닥 */}
                      <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-green-500 border-t-4 border-green-400" />

                      {/* 재생 버튼 오버레이 */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">MC</div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">🏰 마인크래프트 중세 성 만들기 튜토리얼</div>
                        <div className="text-xs text-gray-500">마크왕 • 조회수 12만회</div>
                      </div>
                    </div>

                    {/* 차단된 댓글 예시 */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="bg-red-50 border-2 border-red-200 rounded-xl p-4 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 backdrop-blur-sm bg-red-50/80 flex items-center justify-center">
                        <div className="text-center">
                          <Shield className="w-8 h-8 text-red-500 mx-auto mb-2" />
                          <p className="text-sm font-medium text-red-700">
                            앗! 나쁜 말이 숨어있어요
                          </p>
                        </div>
                      </div>
                      <div className="blur-sm">
                        <div className="h-3 bg-gray-300 rounded w-full mb-2" />
                        <div className="h-3 bg-gray-300 rounded w-2/3" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {stat.value}
                </p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700">주요 기능</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              아이를 위한 스마트한 보호
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              가디언즈 렌즈는 단순 차단이 아닌, 아이가 스스로 위험을 인식하고
              건강한 디지털 시민으로 성장할 수 있도록 돕습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-white">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 데모 섹션 */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">체험하기</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              직접 체험해보세요
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              3가지 시뮬레이션 환경에서 가디언즈 렌즈가 어떻게 작동하는지 확인해보세요.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'MyTube', icon: '📺', desc: '유튜브형 댓글 보호', path: '/simulation/mytube', color: 'from-red-500 to-red-600' },
                { name: 'NewsHub', icon: '📰', desc: '뉴스 용어 해설', path: '/simulation/newshub', color: 'from-blue-500 to-blue-600' },
                { name: 'Tok', icon: '💬', desc: '메신저 그루밍 탐지', path: '/simulation/tok', color: 'from-yellow-500 to-yellow-600' },
              ].map((item, idx) => (
                <Link key={idx} href={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-xl cursor-pointer"
                  >
                    <span className="text-5xl mb-4 block">{item.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${item.color}`}>
                      체험하기 <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="font-bold text-xl">가디언즈 렌즈</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                2025 AI와 함께하는 365일 아동이 행복한 세상 공모전 출품작
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Creative Nexus Team © 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
