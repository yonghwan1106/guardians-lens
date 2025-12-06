'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Bot, X, Bell, BookOpen, ShieldCheck } from 'lucide-react';
import { useLensStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function OverlayController() {
  const {
    isActive,
    blockedCount,
    learnedWordsCount,
    showMascot,
    mascotMessage,
    hideMascot,
    setActive,
  } = useLensStore();

  const [showActivation, setShowActivation] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // 초기 활성화 애니메이션
    const timer = setTimeout(() => {
      setShowActivation(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 활성화 글로우 효과 */}
      <AnimatePresence>
        {showActivation && isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
            style={{
              boxShadow: 'inset 0 0 100px 20px rgba(59, 130, 246, 0.3)',
            }}
          />
        )}
      </AnimatePresence>

      {/* 테두리 글로우 (상시) */}
      {isActive && (
        <div
          className="fixed inset-0 pointer-events-none z-40"
          style={{
            boxShadow: 'inset 0 0 20px 2px rgba(59, 130, 246, 0.15)',
          }}
        />
      )}

      {/* 마스코트 말풍선 */}
      <AnimatePresence>
        {showMascot && isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 max-w-xs"
          >
            <div className="bg-white rounded-2xl shadow-lg p-4 relative border-2 border-blue-200">
              <button
                onClick={hideMascot}
                className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
              <p className="text-sm text-gray-700 leading-relaxed">{mascotMessage}</p>
              {/* 말풍선 꼬리 */}
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-blue-200 transform rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 플로팅 버튼 (마스코트) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          {/* 확장 메뉴 */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-16 right-0 bg-white rounded-xl shadow-xl p-3 min-w-[200px] border border-gray-100"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-red-50">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-gray-700">차단한 위협</span>
                    </div>
                    <Badge variant="destructive" className="text-xs">{blockedCount}</Badge>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-green-50">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">배운 단어</span>
                    </div>
                    <Badge className="bg-green-500 text-xs">{learnedWordsCount}</Badge>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <Button
                      variant={isActive ? 'default' : 'outline'}
                      size="sm"
                      className="w-full"
                      onClick={() => setActive(!isActive)}
                    >
                      {isActive ? '보호 모드 켜짐' : '보호 모드 꺼짐'}
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 메인 버튼 */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              w-14 h-14 rounded-full shadow-lg flex items-center justify-center
              transition-colors duration-300
              ${isActive
                ? 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                : 'bg-gray-400 hover:bg-gray-500'
              }
            `}
          >
            <Shield className="w-7 h-7 text-white" />
            {/* 활성화 표시 점 */}
            {isActive && (
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
            )}
          </motion.button>

          {/* 알림 뱃지 */}
          {blockedCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
            >
              {blockedCount > 9 ? '9+' : blockedCount}
            </motion.span>
          )}
        </div>
      </motion.div>
    </>
  );
}
