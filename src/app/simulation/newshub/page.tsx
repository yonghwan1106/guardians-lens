'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Share2, Bookmark, TrendingUp, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TextWithExplanations } from '@/components/lens';
import { NEWS_MOCK_DATA, RECOMMENDED_NEWS } from '@/lib/mock-data/news-article';

export default function NewsHubPage() {
  const [selectedArticle, setSelectedArticle] = useState(NEWS_MOCK_DATA[0]);

  return (
    <div className="bg-white min-h-full">
      {/* NewsHub 헤더 */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white sticky top-0 z-10">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📰</span>
              <span className="font-bold text-xl">NewsHub</span>
            </div>
            <div className="flex-1 max-w-md mx-4">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-1.5">
                <input
                  type="text"
                  placeholder="뉴스 검색..."
                  className="flex-1 bg-transparent outline-none text-sm placeholder-white/70"
                />
                <Search className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <button className="hover:underline">로그인</button>
            </div>
          </div>

          {/* 카테고리 탭 */}
          <div className="flex items-center gap-1 mt-3 overflow-x-auto pb-1">
            {['전체', 'IT/과학', '환경', '사회', '교육', '문화'].map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                  ${cat === selectedArticle.category
                    ? 'bg-white text-blue-600'
                    : 'bg-white/20 hover:bg-white/30'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* 메인 기사 영역 */}
        <main className="flex-1 p-4 lg:p-6">
          {/* 기사 선택 탭 */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {NEWS_MOCK_DATA.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all
                  ${selectedArticle.id === article.id
                    ? 'bg-blue-100 text-blue-700 shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                {article.category}
              </button>
            ))}
          </div>

          {/* 선택된 기사 */}
          <motion.article
            key={selectedArticle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl"
          >
            {/* 기사 헤더 */}
            <div className="mb-6">
              <Badge className="mb-3 bg-blue-100 text-blue-700">
                {selectedArticle.category}
              </Badge>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4">
                {selectedArticle.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedArticle.publishDate}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  조회수 12,345
                </span>
              </div>
            </div>

            {/* 도움말 배너 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6 border border-blue-100">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-medium text-blue-800 mb-1">
                    가디언즈 렌즈가 도와줄게요!
                  </h3>
                  <p className="text-sm text-blue-600">
                    <span className="border-b-2 border-dashed border-blue-400 text-blue-700">파란색 밑줄</span>이 있는 단어에 마우스를 올려보세요.
                    어려운 단어를 쉽게 설명해드릴게요!
                  </p>
                </div>
              </div>
            </div>

            {/* 기사 썸네일 */}
            <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-video flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">
                  {selectedArticle.category === 'IT/과학' && '🤖'}
                  {selectedArticle.category === '환경' && '🌍'}
                  {selectedArticle.category === '사회' && '👥'}
                </span>
                <p className="mt-2 text-gray-500 text-sm">{selectedArticle.category} 관련 이미지</p>
              </div>
            </div>

            {/* 기사 본문 - 어려운 단어 설명 포함 */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed text-lg">
                <TextWithExplanations
                  text={selectedArticle.content}
                  difficultTerms={selectedArticle.difficultTerms}
                />
              </div>
            </div>

            {/* 기사 액션 버튼 */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 text-sm">
                  <Share2 className="w-4 h-4" />
                  공유
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 text-sm">
                  <Bookmark className="w-4 h-4" />
                  저장
                </button>
              </div>
              <div className="text-sm text-gray-500">
                📚 {selectedArticle.difficultTerms.length}개의 단어 설명이 준비되어 있어요
              </div>
            </div>
          </motion.article>
        </main>

        {/* 사이드바 */}
        <aside className="w-full lg:w-80 p-4 lg:p-6 bg-gray-50 lg:border-l">
          {/* 실시간 인기 뉴스 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <h3 className="font-bold text-gray-900">실시간 인기 뉴스</h3>
            </div>
            <div className="space-y-3">
              {[
                '초등학생 80%, 스마트폰 하루 3시간 이상 사용',
                '새로운 게임 등급제 시행... 연령별 맞춤 권고',
                '어린이 전용 SNS 플랫폼 출시 예정',
                '코딩 교육 필수화 2년째... 효과는?',
                '온라인 학습 플랫폼 이용자 급증',
              ].map((title, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 cursor-pointer hover:bg-white p-2 rounded-lg transition-colors"
                >
                  <span className="font-bold text-blue-600">{idx + 1}</span>
                  <p className="text-sm text-gray-700 line-clamp-2">{title}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* 추천 뉴스 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">📌 추천 뉴스</h3>
            <div className="space-y-4">
              {RECOMMENDED_NEWS.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-lg p-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                >
                  <Badge variant="outline" className="mb-2 text-xs">
                    {news.category}
                  </Badge>
                  <p className="font-medium text-sm text-gray-800">{news.title}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* 학습 현황 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
            <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <span>📖</span> 오늘의 학습
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">배운 단어</span>
                <span className="font-bold text-green-600">5개</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">읽은 기사</span>
                <span className="font-bold text-green-600">3개</span>
              </div>
              <div className="w-full bg-green-100 rounded-full h-2 mt-3">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }} />
              </div>
              <p className="text-xs text-gray-500 text-center mt-1">
                오늘 목표의 60% 달성!
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
