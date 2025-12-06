'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Home,
  Lock,
  Star,
  Menu,
  X,
} from 'lucide-react';
import { OverlayController } from '@/components/lens';

export default function SimulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 현재 URL 결정
  const getDisplayUrl = () => {
    if (pathname.includes('mytube')) return 'www.mytube.com/watch?v=minecraft_build';
    if (pathname.includes('newshub')) return 'www.newshub.co.kr/article/ai_news';
    if (pathname.includes('tok')) return 'tok.messenger.com/chat';
    return 'www.guardians-lens.com';
  };

  const sites = [
    { name: 'MyTube', path: '/simulation/mytube', icon: '📺', color: 'bg-red-500' },
    { name: 'NewsHub', path: '/simulation/newshub', icon: '📰', color: 'bg-blue-500' },
    { name: 'Tok', path: '/simulation/tok', icon: '💬', color: 'bg-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 가상 브라우저 프레임 */}
      <div className="max-w-6xl mx-auto pt-4 px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-t-2xl shadow-2xl overflow-hidden"
        >
          {/* 브라우저 타이틀바 */}
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
            {/* 창 버튼들 */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer" />
            </div>

            {/* 탭 */}
            <div className="ml-4 flex items-center">
              <div className="bg-gray-700 rounded-t-lg px-4 py-1.5 flex items-center gap-2">
                <span className="text-white text-sm">
                  {pathname.includes('mytube') && '🎬 MyTube'}
                  {pathname.includes('newshub') && '📰 NewsHub'}
                  {pathname.includes('tok') && '💬 Tok'}
                  {!pathname.includes('mytube') && !pathname.includes('newshub') && !pathname.includes('tok') && '🛡️ 가디언즈 렌즈'}
                </span>
                <button className="text-gray-400 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 브라우저 툴바 */}
          <div className="bg-gray-100 border-b px-3 py-2 flex items-center gap-2">
            {/* 네비게이션 버튼 */}
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded hover:bg-gray-200 text-gray-600">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-200 text-gray-600">
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-200 text-gray-600">
                <RotateCcw className="w-4 h-4" />
              </button>
              <Link href="/" className="p-1.5 rounded hover:bg-gray-200 text-gray-600">
                <Home className="w-4 h-4" />
              </Link>
            </div>

            {/* 주소창 */}
            <div className="flex-1 flex items-center bg-white rounded-full border px-3 py-1.5 shadow-sm">
              <Lock className="w-3.5 h-3.5 text-green-600 mr-2" />
              <span className="text-sm text-gray-600 flex-1">{getDisplayUrl()}</span>
              <Star className="w-4 h-4 text-gray-400 hover:text-yellow-500 cursor-pointer" />
            </div>

            {/* 사이트 네비게이션 (데스크톱) */}
            <div className="hidden md:flex items-center gap-2">
              {sites.map((site) => (
                <Link
                  key={site.path}
                  href={site.path}
                  className={`
                    flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all
                    ${pathname === site.path
                      ? `${site.color} text-white shadow-md`
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }
                  `}
                >
                  <span>{site.icon}</span>
                  <span>{site.name}</span>
                </Link>
              ))}
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              className="md:hidden p-2 rounded hover:bg-gray-200"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* 가디언즈 렌즈 활성화 표시 */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1.5 flex items-center justify-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white text-lg"
            >
              🛡️
            </motion.span>
            <span className="text-white text-sm font-medium">
              가디언즈 렌즈가 활성화되어 있어요
            </span>
          </div>
        </motion.div>

        {/* 컨텐츠 영역 */}
        <div className="bg-white min-h-[600px] shadow-2xl rounded-b-2xl overflow-hidden">
          {children}
        </div>
      </div>

      {/* 모바일 사이드바 */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsSidebarOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl p-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">사이트 이동</h3>
              <button onClick={() => setIsSidebarOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              {sites.map((site) => (
                <Link
                  key={site.path}
                  href={site.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                    ${pathname === site.path
                      ? `${site.color} text-white`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <span className="text-xl">{site.icon}</span>
                  <span className="font-medium">{site.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* 오버레이 컨트롤러 (마스코트) */}
      <OverlayController />
    </div>
  );
}
