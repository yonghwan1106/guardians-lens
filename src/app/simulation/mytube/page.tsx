'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  Download,
  MoreHorizontal,
  Bell,
  Search,
  User,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { SafetyShield, WritingAssistant } from '@/components/lens';
import { YOUTUBE_COMMENTS_MOCK, MOCK_VIDEO } from '@/lib/mock-data/comments';

export default function MyTubePage() {
  const [comments, setComments] = useState(YOUTUBE_COMMENTS_MOCK);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleCommentSubmit = (text: string) => {
    const newComment = {
      id: `cm_new_${Date.now()}`,
      author: '지우',
      content: text,
      timestamp: '방금 전',
      likes: 0,
      profileImage: '/avatars/me.png',
      riskLevel: 'SAFE' as const,
    };
    setComments([newComment, ...comments]);
  };

  return (
    <div className="bg-gray-50 min-h-full">
      {/* MyTube 헤더 */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📺</span>
            <span className="font-bold text-xl text-red-600">MyTube</span>
          </div>
          <div className="flex-1 max-w-xl mx-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="검색"
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <Search className="w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-blue-500 text-white text-sm">지</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 p-4">
        {/* 메인 비디오 영역 */}
        <div className="flex-1">
          {/* 비디오 플레이어 */}
          <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              {/* 썸네일/플레이 버튼 */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Play className="w-10 h-10 text-white ml-1" />
                </motion.button>
                <p className="text-white/80 mt-4 text-sm">
                  🏰 마인크래프트 중세 성 건축 미리보기
                </p>
              </div>
            </div>
            {/* 진행바 */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
              <div className="h-full w-1/3 bg-red-600" />
            </div>
          </div>

          {/* 비디오 정보 */}
          <div className="mt-4">
            <h1 className="text-xl font-bold text-gray-900">{MOCK_VIDEO.title}</h1>
            <div className="flex flex-wrap items-center justify-between mt-3 gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-purple-500 text-white">건</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{MOCK_VIDEO.channel}</p>
                  <p className="text-sm text-gray-500">구독자 {MOCK_VIDEO.subscribers}명</p>
                </div>
                <Button
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={isSubscribed ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : 'bg-red-600 hover:bg-red-700'}
                >
                  {isSubscribed ? '구독중' : '구독'}
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center bg-gray-100 rounded-full">
                  <button className="flex items-center gap-1 px-4 py-2 hover:bg-gray-200 rounded-l-full border-r">
                    <ThumbsUp className="w-5 h-5" />
                    <span className="text-sm font-medium">{MOCK_VIDEO.likes}</span>
                  </button>
                  <button className="px-4 py-2 hover:bg-gray-200 rounded-r-full">
                    <ThumbsDown className="w-5 h-5" />
                  </button>
                </div>
                <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">공유</span>
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 설명 */}
            <div className="mt-4 bg-gray-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>조회수 {MOCK_VIDEO.views}회</span>
                <span>•</span>
                <span>{MOCK_VIDEO.uploadDate}</span>
              </div>
              <p className="text-sm text-gray-800 whitespace-pre-line line-clamp-3">
                {MOCK_VIDEO.description}
              </p>
            </div>
          </div>

          {/* 댓글 섹션 */}
          <div className="mt-6">
            <h2 className="font-bold text-lg mb-4">댓글 {comments.length}개</h2>

            {/* 댓글 작성 */}
            <div className="flex gap-3 mb-6">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-blue-500 text-white">지</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <WritingAssistant
                  placeholder="댓글 추가..."
                  onSubmit={handleCommentSubmit}
                />
              </div>
            </div>

            {/* 댓글 목록 */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <Avatar className="w-10 h-10 flex-shrink-0">
                    <AvatarFallback className="bg-gray-300 text-gray-700">
                      {comment.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{comment.author}</span>
                      <span className="text-xs text-gray-500">{comment.timestamp}</span>
                    </div>

                    {/* SafetyShield로 유해 콘텐츠 감싸기 */}
                    <SafetyShield
                      isHarmful={comment.riskLevel === 'DANGER'}
                      riskCategory={comment.riskCategory}
                      explanation={comment.aiExplanation}
                      hiddenContent={comment.hiddenContent}
                    >
                      <p className="text-sm text-gray-800">{comment.content}</p>
                    </SafetyShield>

                    <div className="flex items-center gap-4 mt-2">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-xs">{comment.likes}</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                      <button className="text-xs text-gray-500 hover:text-gray-700 font-medium">
                        답글
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 사이드바 - 추천 영상 */}
        <div className="w-full lg:w-80 space-y-3">
          <h3 className="font-bold text-gray-900">추천 영상</h3>
          {[
            { title: '마인크래프트 레드스톤 기초 강좌', channel: '레드스톤 마스터', views: '120만' },
            { title: '세상에서 가장 큰 마크 집 만들기', channel: '빌더킹', views: '89만' },
            { title: '서바이벌 첫날 가이드', channel: '초보 탈출', views: '234만' },
            { title: '마크 신규 업데이트 총정리', channel: '마크뉴스', views: '56만' },
          ].map((video, idx) => (
            <div key={idx} className="flex gap-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-colors">
              <div className="w-40 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                <Play className="w-8 h-8 text-gray-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm line-clamp-2">{video.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{video.channel}</p>
                <p className="text-xs text-gray-500">조회수 {video.views}회</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
