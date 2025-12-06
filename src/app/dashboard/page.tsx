'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  ShieldCheck,
  BookOpen,
  MessageCircle,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Clock,
  Calendar,
  ChevronRight,
  Home,
  Bell,
  Settings,
  User,
  Sparkles,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DASHBOARD_STATS,
  WEEKLY_STATS,
  SAFETY_SCORE_CHART_DATA,
  INCIDENT_TYPE_CHART_DATA,
  INSIGHT_CARDS,
  WEEKLY_SUMMARY,
} from '@/lib/mock-data/dashboard-stats';

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState(DASHBOARD_STATS[DASHBOARD_STATS.length - 1]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">가디언즈 렌즈</span>
            </Link>
            <Badge className="bg-purple-100 text-purple-700">학부모 대시보드</Badge>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <Avatar className="w-9 h-9">
              <AvatarFallback className="bg-blue-500 text-white">박</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* 환영 메시지 */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">안녕하세요, 박 팀장님 👋</h1>
          <p className="text-gray-500 mt-1">지우의 이번 주 디지털 활동 리포트입니다.</p>
        </div>

        {/* 요약 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">평균 안전 점수</p>
                    <p className={`text-3xl font-bold ${getScoreColor(WEEKLY_STATS.averageSafetyScore)}`}>
                      {WEEKLY_STATS.averageSafetyScore}점
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${getScoreBg(WEEKLY_STATS.averageSafetyScore)}`}>
                    <ShieldCheck className={`w-6 h-6 ${getScoreColor(WEEKLY_STATS.averageSafetyScore)}`} />
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>지난주 대비 +3점</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">차단한 위협</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {WEEKLY_SUMMARY.totalThreatsBlocked}건
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-red-100">
                    <Shield className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <Progress value={70} className="mt-3 h-2" />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">배운 단어</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {WEEKLY_SUMMARY.totalWordsLearned}개
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-green-100">
                    <BookOpen className="w-6 h-6 text-green-500" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">뉴스 기사 읽기를 통해 학습</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">평균 사용 시간</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {Math.floor(WEEKLY_SUMMARY.averageScreenTime / 60)}시간 {WEEKLY_SUMMARY.averageScreenTime % 60}분
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-purple-100">
                    <Clock className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">하루 평균</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 인사이트 카드 섹션 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            오늘의 인사이트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INSIGHT_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Card className={`
                  ${card.type === 'warning' ? 'border-red-200 bg-red-50' : ''}
                  ${card.type === 'positive' ? 'border-green-200 bg-green-50' : ''}
                  ${card.type === 'learning' ? 'border-blue-200 bg-blue-50' : ''}
                  ${card.type === 'interest' ? 'border-purple-200 bg-purple-50' : ''}
                `}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{card.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{card.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{card.description}</p>
                        <div className="mt-3 p-3 bg-white/80 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">💡 추천 행동:</span> {card.action}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 차트 섹션 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* 안전 점수 추이 */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                주간 안전 점수 추이
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={SAFETY_SCORE_CHART_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ fill: '#3b82f6', strokeWidth: 2 }}
                      name="안전 점수"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* 위협 유형 분포 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                위협 유형 분포
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={INCIDENT_TYPE_CHART_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {INCIDENT_TYPE_CHART_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-2">
                {INCIDENT_TYPE_CHART_DATA.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}건</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 일별 상세 리포트 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              일별 상세 리포트
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={DASHBOARD_STATS[DASHBOARD_STATS.length - 1].date}>
              <TabsList className="flex flex-wrap gap-1 h-auto p-1">
                {DASHBOARD_STATS.map((stat) => (
                  <TabsTrigger
                    key={stat.date}
                    value={stat.date}
                    className="text-xs"
                    onClick={() => setSelectedDate(stat)}
                  >
                    {stat.date.slice(5)}
                  </TabsTrigger>
                ))}
              </TabsList>

              {DASHBOARD_STATS.map((stat) => (
                <TabsContent key={stat.date} value={stat.date} className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-700">안전 점수</h4>
                      <div className={`text-4xl font-bold ${getScoreColor(stat.safetyScore)}`}>
                        {stat.safetyScore}점
                      </div>
                      <Progress value={stat.safetyScore} className="h-3" />
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-700">감지된 위협</h4>
                      {stat.incidents.length > 0 ? (
                        <div className="space-y-2">
                          {stat.incidents.map((incident, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                              <span className="text-sm">{incident.type}</span>
                              <Badge variant={incident.resolved ? 'default' : 'destructive'}>
                                {incident.count}건 {incident.resolved ? '해결' : '미해결'}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-green-600 text-sm">위협이 감지되지 않았어요! 🎉</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-700">대화 주제 추천</h4>
                      <div className="space-y-2">
                        {stat.conversationStarters.map((starter, idx) => (
                          <div key={idx} className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-sm text-blue-800">{starter}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* 하단 CTA */}
        <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">아이와 함께 시뮬레이션을 체험해보세요!</h3>
              <p className="text-white/80">
                가디언즈 렌즈가 어떻게 아이를 보호하는지 직접 확인할 수 있어요.
              </p>
            </div>
            <Link href="/simulation/mytube">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                시뮬레이션 시작하기
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
